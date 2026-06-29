// ============================================
// Session Manager UI - Multi-profile picker
// ============================================

const SessionManagerUI = {
    open() {
        const sessions = SessionManager.getAllSessions();
        const activeSid = SessionManager.getActiveSessionId();

        const list = sessions.map(s => {
            const isActive = s.id === activeSid;
            const safeName = Utils.escapeHtml(s.name || 'Learner');
            const safeDate = s.lastActive ? Utils.escapeHtml(new Date(s.lastActive).toLocaleString()) : '—';
            const safeId = Utils.escapeAttr(s.id);
            return `
                <div class="session-row ${isActive ? 'active' : ''}" data-sid="${safeId}">
                    <div class="session-info">
                        <div class="session-name">${safeName} ${isActive ? '<span class="badge-active">active</span>' : ''}</div>
                        <div class="session-meta">Last active: ${safeDate}</div>
                    </div>
                    <div class="session-actions">
                        ${isActive ? '' : `<button type="button" class="btn btn-primary btn-sm" data-cm-action="switch" data-sid="${safeId}">Switch</button>`}
                        ${isActive ? '' : `<button type="button" class="btn btn-secondary btn-sm" data-cm-action="rename" data-sid="${safeId}">Rename</button>`}
                        ${isActive ? '' : `<button type="button" class="btn btn-secondary btn-sm" data-cm-action="delete" data-sid="${safeId}">Delete</button>`}
                        ${isActive ? `<button type="button" class="btn btn-secondary btn-sm" data-cm-action="rename" data-sid="${safeId}">Rename</button>` : ''}
                        ${isActive ? `<button type="button" class="btn btn-secondary btn-sm" data-cm-action="export">Export</button>` : ''}
                    </div>
                </div>
            `;
        }).join('');

        App.showModal(`
            <div class="session-modal">
                <h2 style="margin:0 0 6px; color:white;">👤 Switch learner</h2>
                <p style="color:rgba(255,255,255,0.6); margin:0 0 18px; font-size:13px;">
                    Each learner has their own progress, XP, streaks and SRS state on this device.
                </p>
                <div class="session-list">${list}</div>
                <div style="display:flex; gap:10px; margin-top:18px; flex-wrap:wrap;">
                    <button type="button" class="btn btn-primary" data-cm-action="new">➕ New learner</button>
                    <button type="button" class="btn btn-secondary" data-cm-action="close">Close</button>
                </div>
            </div>
        `);

        const modal = document.getElementById('modal');

        // Switch
        modal.querySelectorAll('[data-cm-action="switch"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const sid = btn.dataset.sid;
                if (SessionManager.switchSession(sid)) {
                    App.closeModal();
                    location.reload();
                }
            });
        });

        // Rename
        modal.querySelectorAll('[data-cm-action="rename"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const sid = btn.dataset.sid;
                const meta = SessionManager.getSessionMeta(sid);
                const name = window.prompt('New name for this learner:', meta?.name || '');
                if (name !== null) {
                    SessionManager.renameSession(sid, name);
                    SessionManagerUI.open();
                }
            });
        });

        // Delete
        modal.querySelectorAll('[data-cm-action="delete"]').forEach(btn => {
            btn.addEventListener('click', () => {
                const sid = btn.dataset.sid;
                App.confirmModal({
                    title: 'Delete this learner?',
                    message: 'All progress for this learner will be permanently erased from this device.',
                    confirmLabel: 'Delete',
                    destructive: true,
                    onConfirm: () => {
                        SessionManager.deleteSession(sid);
                        SessionManagerUI.open();
                        return true;
                    }
                });
            });
        });

        // New learner
        const newBtn = modal.querySelector('[data-cm-action="new"]');
        if (newBtn) newBtn.addEventListener('click', () => {
            const name = window.prompt('Name for the new learner:');
            if (name !== null) {
                const sid = SessionManager.createSession(name);
                if (sid) {
                    SessionManager.switchSession(sid);
                    App.closeModal();
                    location.reload();
                }
            }
        });

        // Export current
        const exportBtn = modal.querySelector('[data-cm-action="export"]');
        if (exportBtn) exportBtn.addEventListener('click', () => {
            const blob = SessionManager.exportActiveSession();
            const jsonStr = JSON.stringify(blob, null, 2);
            const url = URL.createObjectURL(new Blob([jsonStr], { type: 'application/json' }));
            const a = document.createElement('a');
            a.href = url;
            a.download = `chinese-master-${(blob.session.name || 'learner').replace(/[^a-z0-9]+/gi, '-')}-${Utils.date.today()}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            Utils.showToast('Backup downloaded', 'success');
        });

        // Close
        const closeBtn = modal.querySelector('[data-cm-action="close"]');
        if (closeBtn) closeBtn.addEventListener('click', () => App.closeModal());
    }
};

window.SessionManagerUI = SessionManagerUI;