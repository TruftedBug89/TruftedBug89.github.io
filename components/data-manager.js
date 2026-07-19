// ============================================
// Data Manager UI - Settings, Export & Import
// ============================================

const DataManager = {
    openSettings() {
        App.showModal(`
            <div class="settings-modal" style="max-width: 400px; text-align: center;">
                <h2 style="margin:0 0 16px; color:var(--text-primary);">⚙️ Settings</h2>
                <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
                    <button type="button" class="btn btn-primary" data-cm-action="export-data" style="width: 100%;">📤 Export Data Backup</button>
                    <button type="button" class="btn btn-secondary" data-cm-action="import-data" style="width: 100%;">📥 Import Data Backup</button>
                    <button type="button" class="btn btn-secondary" data-cm-action="close-settings" style="width: 100%; margin-top: 12px;">Close</button>
                </div>
                <input type="file" id="import-file-input" accept=".json" style="display: none;" />
            </div>
        `);

        const modal = document.getElementById('modal');
        if (!modal) return;

        const exportBtn = modal.querySelector('[data-cm-action="export-data"]');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => {
                DataManager.exportData();
            });
        }

        const importBtn = modal.querySelector('[data-cm-action="import-data"]');
        const fileInput = modal.querySelector('#import-file-input');

        if (importBtn && fileInput) {
            importBtn.addEventListener('click', () => {
                fileInput.click();
            });

            fileInput.addEventListener('change', (e) => {
                const file = e.target.files[0];
                if (!file) return;

                const reader = new FileReader();
                reader.onload = (event) => {
                    try {
                        const jsonStr = event.target.result;
                        DataManager.importData(jsonStr);
                    } catch (err) {
                        if (typeof Utils !== 'undefined') {
                            Utils.showToast('Failed to read file', 'error');
                        }
                    }
                };
                reader.readAsText(file);
            });
        }

        const closeBtn = modal.querySelector('[data-cm-action="close-settings"]');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                App.closeModal();
            });
        }
    },

    exportData() {
        if (typeof SessionManager === 'undefined') return;

        const blob = SessionManager.exportActiveSession();
        if (!blob || !blob.session) {
            if (typeof Utils !== 'undefined') Utils.showToast('Export failed', 'error');
            return;
        }

        const jsonStr = JSON.stringify(blob, null, 2);
        const url = URL.createObjectURL(new Blob([jsonStr], { type: 'application/json' }));
        const a = document.createElement('a');

        let dateStr = 'backup';
        if (typeof Utils !== 'undefined' && Utils.date && Utils.date.today) {
            dateStr = Utils.date.today();
        } else {
            dateStr = new Date().toISOString().split('T')[0];
        }

        const nameStr = (blob.session.name || 'learner').replace(/[^a-z0-9]+/gi, '-');

        a.href = url;
        a.download = `chinese-master-${nameStr}-${dateStr}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        if (typeof Utils !== 'undefined') {
            Utils.showToast('Backup downloaded', 'success');
        }
    },

    isValidBackup(obj) {
        if (!obj || typeof obj !== 'object') return false;

        // Ensure it has the structure expected from SessionManager.exportActiveSession()
        if (obj.format !== 'chinese-master-session') return false;
        if (!obj.data || typeof obj.data !== 'object') return false;
        if (!obj.session || typeof obj.session !== 'object') return false;

        return true;
    },

    importData(jsonString) {
        try {
            const dataObj = JSON.parse(jsonString);

            if (!this.isValidBackup(dataObj)) {
                if (typeof Utils !== 'undefined') {
                    Utils.showToast('Invalid backup file format.', 'error');
                }
                return false;
            }

            if (typeof SessionManager !== 'undefined') {
                const success = SessionManager.importIntoActiveSession(dataObj);
                if (success) {
                    if (typeof Utils !== 'undefined') {
                        Utils.showToast('Backup imported successfully', 'success');
                    }
                    if (typeof App !== 'undefined' && App.closeModal) {
                        App.closeModal();
                    }
                    setTimeout(() => {
                        window.location.reload();
                    }, 500);
                    return true;
                } else {
                    throw new Error('Import failed internally');
                }
            } else {
                 return dataObj; // For testing in isolation
            }
        } catch (e) {
            console.error("Import error:", e);
            if (typeof Utils !== 'undefined') {
                Utils.showToast('Error parsing backup file.', 'error');
            }
            return false;
        }
    }
};

if (typeof window !== 'undefined') {
    window.DataManager = DataManager;
}

if (typeof module !== 'undefined') {
    module.exports = DataManager;
}
