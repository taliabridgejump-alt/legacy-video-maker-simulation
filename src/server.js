const fs = require('fs');
const path = require('path');
const config = require('./config');
const LegacyMode = require('./modes/legacyMode');
const WrapperOfflineMode = require('./modes/wrapperOfflineMode');

/**
 * Legacy Video Maker Archive Mode System
 * Main server logic for managing mode selection and initialization
 */

class LegacyVideoMakerServer {
  constructor() {
    this.currentMode = null;
    this.modeInstance = null;
  }

  /**
   * Initialize the server and determine which mode to use
   */
  async initialize() {
    console.log('========================================');
    console.log('Legacy Video Maker Archive Mode System');
    console.log('========================================');
    console.log('Initializing system...\n');

    try {
      // Attempt to load the legacy archive
      const archiveData = await this.loadLegacyArchive();
      
      if (archiveData) {
        // Successfully loaded archive - use Legacy Mode
        this.currentMode = config.modes.legacy;
        this.modeInstance = new LegacyMode(archiveData);
        this.modeInstance.activate();
      } else {
        // Archive not found or failed to load - use Wrapper Offline Mode
        this.switchToWrapperOfflineMode('Archive loading returned null');
      }
    } catch (error) {
      // Error occurred - use Wrapper Offline Mode
      this.switchToWrapperOfflineMode(error.message);
    }

    console.log('\n========================================');
    console.log(`Active Mode: ${this.currentMode}`);
    console.log('System ready');
    console.log('========================================\n');
  }

  /**
   * Attempt to load the legacy archive file
   */
  async loadLegacyArchive() {
    return new Promise((resolve, reject) => {
      // Check if file exists
      if (!fs.existsSync(config.archivePath)) {
        console.log('[System] Legacy Archive Missing');
        resolve(null);
        return;
      }

      // Read and parse the archive file
      fs.readFile(config.archivePath, 'utf8', (err, data) => {
        if (err) {
          console.log(`[System] Error reading archive: ${err.message}`);
          reject(err);
          return;
        }

        try {
          const archiveData = JSON.parse(data);
          resolve(archiveData);
        } catch (parseError) {
          console.log(`[System] Error parsing archive: ${parseError.message}`);
          reject(parseError);
        }
      });
    });
  }

  /**
   * Switch to Wrapper Offline Mode as fallback
   */
  switchToWrapperOfflineMode(reason) {
    console.log(`[System] Fallback reason: ${reason}`);
    this.currentMode = config.modes.wrapperOffline;
    this.modeInstance = new WrapperOfflineMode();
    this.modeInstance.activate();
  }

  /**
   * Get current system status
   */
  getStatus() {
    if (!this.modeInstance) {
      return { status: 'not_initialized' };
    }

    const modeInfo = this.currentMode === config.modes.legacy
      ? this.modeInstance.getArchiveInfo()
      : this.modeInstance.getModeInfo();

    return {
      status: 'ready',
      currentMode: this.currentMode,
      ...modeInfo
    };
  }

  /**
   * Start the simulated server
   */
  start() {
    console.log('[Server] Starting simulated local server...');
    console.log(`[Server] Server running at http://${config.server.host}:${config.server.port}`);
    console.log('[Server] Note: This is a simulation - no actual HTTP server is running');
    console.log('[Server] No external connections will be made\n');

    // Simulate some activity
    if (this.modeInstance) {
      try {
        if (this.currentMode === config.modes.legacy) {
          const result = this.modeInstance.simulateVideoMaker();
          console.log('[Server] Legacy video maker features:', result.features.join(', '));
        } else {
          const result = this.modeInstance.simulateOfflineMode();
          console.log('[Server] Offline mode features:', result.features.join(', '));
        }
      } catch (error) {
        console.log(`[Server] Error during simulation: ${error.message}`);
      }
    }
  }
}

// Main execution
async function main() {
  const server = new LegacyVideoMakerServer();
  
  try {
    await server.initialize();
    server.start();
    
    // Display final status
    console.log('\n--- System Status ---');
    const status = server.getStatus();
    console.log(JSON.stringify(status, null, 2));
    console.log('--- End Status ---\n');
    
  } catch (error) {
    console.error('[System] Fatal error:', error.message);
    process.exit(1);
  }
}

// Run the server if this file is executed directly
if (require.main === module) {
  main();
}

module.exports = LegacyVideoMakerServer;
