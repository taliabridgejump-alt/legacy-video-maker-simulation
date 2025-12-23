/**
 * Legacy Mode - Simulated legacy video maker functionality
 * Activated when legacy_archive.json is successfully loaded
 */

class LegacyMode {
  constructor(archiveData) {
    this.archiveData = archiveData;
    this.isActive = false;
  }

  /**
   * Initialize and activate Legacy Mode
   */
  activate() {
    this.isActive = true;
    console.log('[Legacy Mode] Legacy Archive Loaded');
    console.log(`[Legacy Mode] Archive Version: ${this.archiveData.version}`);
    console.log(`[Legacy Mode] Archive Date: ${this.archiveData.archiveDate}`);
    console.log(`[Legacy Mode] Available Themes: ${this.archiveData.assets.themes.length}`);
    console.log(`[Legacy Mode] Available Characters: ${this.archiveData.assets.characters.length}`);
    console.log('[Legacy Mode] System initialized successfully');
  }

  /**
   * Get archive information
   */
  getArchiveInfo() {
    return {
      mode: 'legacy',
      isActive: this.isActive,
      archiveVersion: this.archiveData.version,
      archiveDate: this.archiveData.archiveDate,
      description: this.archiveData.description
    };
  }

  /**
   * Simulate legacy video maker functionality
   */
  simulateVideoMaker() {
    if (!this.isActive) {
      throw new Error('Legacy Mode is not active');
    }
    console.log('[Legacy Mode] Video maker simulation running...');
    console.log('[Legacy Mode] Using archived assets and themes');
    return {
      status: 'ready',
      features: this.archiveData.settings.enabledFeatures
    };
  }
}

module.exports = LegacyMode;
