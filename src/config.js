const path = require('path');

/**
 * Configuration settings for the Legacy Video Maker Archive Mode system
 */
const config = {
  // Path to the legacy archive file
  archivePath: path.join(__dirname, '../data/legacy_archive.json'),
  
  // Server settings
  server: {
    port: 3000,
    host: 'localhost'
  },
  
  // Mode settings
  modes: {
    legacy: 'legacy',
    wrapperOffline: 'wrapper_offline'
  },
  
  // Logging settings
  logging: {
    enabled: true,
    logDirectory: path.join(__dirname, '../logs')
  }
};

module.exports = config;
