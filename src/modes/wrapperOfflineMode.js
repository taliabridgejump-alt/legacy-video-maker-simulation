/**
 * Wrapper Offline Mode - Fallback mode when legacy archive is unavailable
 * Provides basic offline functionality without requiring archive data
 */

class WrapperOfflineMode {
  constructor() {
    this.isActive = false;
  }

  /**
   * Initialize and activate Wrapper Offline Mode
   */
  activate() {
    this.isActive = true;
    console.log('[Wrapper Offline Mode] Switching to Wrapper Offline Mode');
    console.log('[Wrapper Offline Mode] Operating in offline fallback mode');
    console.log('[Wrapper Offline Mode] Limited functionality available');
    console.log('[Wrapper Offline Mode] System initialized successfully');
  }

  /**
   * Get mode information
   */
  getModeInfo() {
    return {
      mode: 'wrapper_offline',
      isActive: this.isActive,
      description: 'Offline fallback mode with basic functionality'
    };
  }

  /**
   * Simulate basic offline functionality
   */
  simulateOfflineMode() {
    if (!this.isActive) {
      throw new Error('Wrapper Offline Mode is not active');
    }
    console.log('[Wrapper Offline Mode] Basic offline simulation running...');
    console.log('[Wrapper Offline Mode] Using default assets only');
    return {
      status: 'ready',
      features: ['basic_editing', 'local_save']
    };
  }
}

module.exports = WrapperOfflineMode;
