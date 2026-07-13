// ============================================
// CHINESE MASTER - SM-2 Spaced Repetition
// Based on SuperMemo's SM-2 Algorithm
// ============================================

const SM2 = {
    // SM-2 Algorithm Implementation
    // Reference: https://www.supermemo.com/en/archives1990-2015/english/ol/sm2

    // Quality ratings
    QUALITY: {
        BLACKOUT: 0,      // Complete blackout
        WRONG_REMEMBERED: 1, // Incorrect; correct answer remembered
        WRONG_EASY: 2,    // Incorrect; correct answer seemed easy
        CORRECT_HARD: 3,  // Correct with serious difficulty
        CORRECT_HESITATE: 4, // Correct after hesitation
        PERFECT: 5        // Perfect response
    },

    // Default card data structure
    createCard(itemId, front, back, extra = {}) {
        return {
            id: itemId,
            front: front,
            back: back,
            // SM-2 fields
            efactor: 2.5,      // E-Factor (easiness)
            interval: 0,        // Current interval in days
            repetitions: 0,     // Number of repetitions
            nextReview: new Date().toISOString(),
            lastReview: null,
            // Metadata
            created: new Date().toISOString(),
            lapses: 0,         // Times forgotten
            ...extra
        };
    },

    // Process a review and calculate next interval
    processReview(card, quality) {
        // quality: 0-5 scale
        let { efactor, interval, repetitions, lapses } = card;

        // Update E-Factor using SM-2 formula
        // EF' := EF + (0.1 - (5-q) * (0.08 + (5-q) * 0.02))
        let newEfactor = efactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
        
        // E-Factor cannot go below 1.3
        if (newEfactor < 1.3) newEfactor = 1.3;

        // Calculate new interval
        let newInterval;
        let newRepetitions;

        if (quality < 3) {
            // Failed: reset to beginning
            newInterval = 1;
            newRepetitions = 0;
            lapses = (lapses || 0) + 1;
        } else {
            // Passed: calculate next interval
            newRepetitions = repetitions + 1;
            
            if (newRepetitions === 1) {
                newInterval = 1;
            } else if (newRepetitions === 2) {
                newInterval = 6;
            } else {
                // I(n) := I(n-1) * EF
                newInterval = Math.round(interval * newEfactor);
            }
        }

        // Reward successful overdue reviews by scheduling from the time actually
        // elapsed, rather than the stale scheduled interval.
        if (quality >= 3 && repetitions >= 2 && card.lastReview) {
            const lastReview = new Date(card.lastReview);
            const elapsedDays = Math.floor((Date.now() - lastReview.getTime()) / (1000 * 60 * 60 * 24));
            if (!Number.isNaN(lastReview.getTime()) && elapsedDays > interval) {
                newInterval = Math.round(elapsedDays * newEfactor * 1.2);
            }
        }

        // Study profiles tune future workload without changing review quality.
        let profile = 'standard';
        try {
            const userData = typeof StorageManager !== 'undefined' && StorageManager.getUserData
                ? StorageManager.getUserData() : null;
            profile = userData && userData.settings && userData.settings.studyProfile || profile;
        } catch (e) { /* Storage is optional for standalone SM-2 use. */ }
        const profileMultiplier = profile === 'speed' ? 0.5 : profile === 'retention' ? 1.5 : 1;
        newInterval = Math.max(1, Math.round(newInterval * profileMultiplier));

        // Calculate next review date
        const nextReview = new Date();
        nextReview.setDate(nextReview.getDate() + newInterval);

        return {
            ...card,
            efactor: newEfactor,
            interval: newInterval,
            repetitions: newRepetitions,
            nextReview: nextReview.toISOString(),
            lastReview: new Date().toISOString(),
            lapses: lapses
        };
    },

    // Get cards due for review
    getDueCards(cards) {
        const now = new Date();
        return cards.filter(card => {
            const nextReview = new Date(card.nextReview);
            return nextReview <= now;
        }).sort((a, b) => {
            // Priority: overdue items first
            const aOverdue = (now - new Date(a.nextReview)) / (1000 * 60 * 60 * 24);
            const bOverdue = (now - new Date(b.nextReview)) / (1000 * 60 * 60 * 24);
            return bOverdue - aOverdue;
        });
    },

    // Get new cards (not yet studied)
    getNewCards(cards) {
        return cards.filter(card => card.repetitions === 0);
    },

    // Get learning statistics
    getStats(cards) {
        const now = new Date();
        const stats = {
            total: cards.length,
            new: 0,
            learning: 0,
            review: 0,
            mastered: 0,
            dueToday: 0,
            overdue: 0,
            averageEfactor: 0,
            retentionRate: 0
        };

        let totalEfactor = 0;
        let totalReviews = 0;
        let successfulReviews = 0;

        cards.forEach(card => {
            if (card.repetitions === 0) {
                stats.new++;
            } else if (card.interval < 21) {
                stats.learning++;
            } else if (card.interval >= 21) {
                stats.mastered++;
            }

            const nextReview = new Date(card.nextReview);
            if (nextReview <= now) {
                stats.dueToday++;
                if (nextReview < now) {
                    stats.overdue++;
                }
            }

            totalEfactor += card.efactor;
            if (card.repetitions > 0) {
                totalReviews++;
                if (card.lapses === 0) {
                    successfulReviews++;
                }
            }
        });

        stats.averageEfactor = cards.length > 0 ? (totalEfactor / cards.length).toFixed(2) : 0;
        stats.retentionRate = totalReviews > 0 ? Math.round((successfulReviews / totalReviews) * 100) : 0;
        stats.retentionNumerator = successfulReviews;
        stats.retentionDenominator = totalReviews;

        return stats;
    },

    // Generate review session
    generateSession(cards, options = {}) {
        const {
            maxNew = 10,
            maxReview = 50,
            includeNew = true,
            includeLearning = true,
            includeReview = true,
            forceNew = false
        } = options;

        const session = {
            cards: [],
            types: { new: 0, learning: 0, review: 0 }
        };

        // Get due cards
        const dueCards = this.getDueCards(cards);
        const newCards = this.getNewCards(cards);

        // Add new cards
        if (includeNew && newCards.length > 0) {
            const newToAdd = newCards.slice(0, maxNew);
            session.cards.push(...newToAdd.map(c => ({ ...c, type: 'new' })));
            session.types.new = newToAdd.length;
        }

        // Add due review cards
        if (includeReview && dueCards.length > 0) {
            const reviewToAdd = dueCards
                .filter(c => c.repetitions > 0)
                .slice(0, maxReview);
            session.cards.push(...reviewToAdd.map(c => ({ ...c, type: 'review' })));
            session.types.review = reviewToAdd.length;
        }

        // Force-fill with new cards if session is too small
        if (forceNew && session.cards.length < maxNew) {
            var additionalNew = maxNew - session.cards.length;
            var moreNew = newCards.slice(session.types.new, session.types.new + additionalNew);
            session.cards.push(...moreNew.map(function(c) { return { ...c, type: 'new' }; }));
            session.types.new += moreNew.length;
        }

        // Shuffle cards
        session.cards = this.shuffleArray(session.cards);

        return session;
    },

    // Shuffle array
    shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    },

    // Save cards to storage (per-session)
    saveCards(deckName, cards) {
        const key = this._deckKey(deckName);
        Utils.storage.set(key, cards);
    },

    // Load cards from storage (per-session)
    loadCards(deckName) {
        return Utils.storage.get(this._deckKey(deckName), []);
    },

    // Session-scoped deck key
    _deckKey(deckName) {
        const sid = (typeof SessionManager !== 'undefined')
            ? SessionManager.getActiveSessionId() : null;
        return sid ? `deck_${sid}_${deckName}` : `deck_${deckName}`;
    },

    // Update a card in storage
    updateCard(deckName, updatedCard) {
        var cards = this.loadCards(deckName);
        var index = cards.findIndex(function(c) { return c.id === updatedCard.id; });
        if (index !== -1) {
            cards[index] = updatedCard;
        } else {
            cards.push(updatedCard);
        }
        this.saveCards(deckName, cards);
    },

    // Add new cards to deck
    addCards(deckName, newCards) {
        const existing = this.loadCards(deckName);
        const existingIds = new Set(existing.map(c => c.id));
        const uniqueNew = newCards.filter(c => !existingIds.has(c.id));
        this.saveCards(deckName, [...existing, ...uniqueNew]);
        return uniqueNew.length;
    },

    // Get deck statistics
    getDeckStats(deckName) {
        const cards = this.loadCards(deckName);
        return this.getStats(cards);
    },

    // Get combined stats across multiple decks
    getAllDeckStats(deckNames) {
        var combined = {
            total: 0,
            new: 0,
            learning: 0,
            review: 0,
            mastered: 0,
            dueToday: 0,
            overdue: 0,
            averageEfactor: 0,
            retentionRate: 0,
            retentionNumerator: 0,
            retentionDenominator: 0
        };
        var hasCards = false;
        var totalEfactor = 0;
        var totalCards = 0;
        var retentionNum = 0;
        var retentionDen = 0;

        deckNames.forEach(function(name) {
            var stats = SM2.getDeckStats(name);
            if (stats.total > 0) hasCards = true;
            combined.total += stats.total;
            combined.new += stats.new;
            combined.learning += stats.learning;
            combined.mastered += stats.mastered;
            combined.dueToday += stats.dueToday;
            combined.review += stats.review;
            combined.overdue += stats.overdue;
            totalEfactor += Number(stats.averageEfactor) * stats.total;
            totalCards += stats.total;
            retentionNum += stats.retentionNumerator || 0;
            retentionDen += stats.retentionDenominator || 0;
        });

        combined.averageEfactor = hasCards ? (totalEfactor / totalCards).toFixed(2) : 0;
        combined.retentionRate = retentionDen > 0 ? Math.round((retentionNum / retentionDen) * 100) : 0;
        combined.retentionNumerator = retentionNum;
        combined.retentionDenominator = retentionDen;
        return combined;
    },

    // Export deck
    exportDeck(deckName) {
        const cards = this.loadCards(deckName);
        const blob = new Blob([JSON.stringify(cards, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${deckName}_deck.json`;
        a.click();
        URL.revokeObjectURL(url);
    },

    // Import deck (validated)
    importDeck(deckName, jsonString) {
        let parsed;
        try {
            parsed = (typeof jsonString === 'string') ? JSON.parse(jsonString) : jsonString;
        } catch (e) {
            return 0;
        }
        if (!Array.isArray(parsed)) return 0;
        // Sanitize each card: cap string lengths, drop unknowns
        const safe = parsed
            .filter(c => c && typeof c === 'object')
            .map(c => ({
                id: String(c.id || Utils.generateId()).slice(0, 64),
                front: {
                    character: String(c.front?.character || '').slice(0, 200),
                    pinyin: String(c.front?.pinyin || '').slice(0, 200)
                },
                back: {
                    meaning: String(c.back?.meaning || '').slice(0, 400),
                    examples: Array.isArray(c.back?.examples)
                        ? c.back.examples.map(e => String(e || '').slice(0, 400)).slice(0, 10)
                        : []
                },
                efactor: Number.isFinite(c.efactor) ? Math.max(1.3, c.efactor) : 2.5,
                interval: Number.isFinite(c.interval) && c.interval >= 0 ? c.interval : 0,
                repetitions: Number.isFinite(c.repetitions) && c.repetitions >= 0 ? c.repetitions : 0,
                nextReview: (typeof c.nextReview === 'string') ? c.nextReview : new Date().toISOString(),
                lastReview: (typeof c.lastReview === 'string') ? c.lastReview : null,
                created: (typeof c.created === 'string') ? c.created : new Date().toISOString(),
                lapses: Number.isFinite(c.lapses) && c.lapses >= 0 ? c.lapses : 0
            }))
            .slice(0, 5000);
        this.saveCards(deckName, safe);
        return safe.length;
    },

    // Reset deck
    resetDeck(deckName) {
        if (typeof App !== 'undefined' && typeof App.confirmModal === 'function') {
            // Use the in-app confirm when available; fall through otherwise
            return App.confirmModal({
                title: 'Reset deck?',
                message: 'All progress for this deck will be lost. This cannot be undone.',
                confirmLabel: 'Reset',
                destructive: true,
                onConfirm: () => {
                    this.saveCards(deckName, []);
                    return true;
                }
            });
        }
        if (window.confirm('Are you sure you want to reset this deck? All progress will be lost.')) {
            this.saveCards(deckName, []);
            return true;
        }
        return false;
    },

    // Get optimal study time
    getOptimalStudyTime(cards) {
        const dueCards = this.getDueCards(cards);
        const avgTimePerCard = 10; // seconds
        return Math.round((dueCards.length * avgTimePerCard) / 60); // minutes
    },

    // Predict future reviews
    predictReviews(cards, days = 30) {
        const predictions = [];
        const now = new Date();

        for (let i = 0; i < days; i++) {
            const date = new Date(now);
            date.setDate(date.getDate() + i);
            const dateStr = date.toISOString().split('T')[0];

            const dueCount = cards.filter(card => {
                const nextReview = new Date(card.nextReview);
                return nextReview.toISOString().split('T')[0] === dateStr;
            }).length;

            predictions.push({
                date: dateStr,
                due: dueCount
            });
        }

        return predictions;
    }
};

window.SM2 = SM2;
