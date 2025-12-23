# legacy-video-maker-simulation
Vyond Legacy Emulator with Archive Mode

## Overview

This repository simulates a "Legacy Video Maker Archive Mode" system that can operate in two modes:

1. **Legacy Mode** - Activated when a legacy archive file is present and successfully loaded
2. **Wrapper Offline Mode** - Fallback mode when the archive is missing or fails to load

## Features

- ✅ Automatic detection and loading of legacy archive files
- ✅ Graceful fallback to offline mode when archive is unavailable
- ✅ Clear console logging for all system states
- ✅ Simulated local server (no external connections)
- ✅ Modular, maintainable code structure

## Project Structure

```
legacy-video-maker-simulation/
├── data/
│   └── legacy_archive.json       # Mock archive file
├── src/
│   ├── config.js                 # Configuration settings
│   ├── server.js                 # Main server logic
│   └── modes/
│       ├── legacyMode.js         # Legacy Mode implementation
│       └── wrapperOfflineMode.js # Wrapper Offline Mode implementation
├── logs/                         # Log output directory
├── package.json                  # Node.js project configuration
└── README.md                     # This file
```

## Installation

```bash
# Clone the repository
git clone https://github.com/taliabridgejump-alt/legacy-video-maker-simulation.git
cd legacy-video-maker-simulation

# No dependencies to install - uses only Node.js built-in modules
```

## Usage

### Running the System

```bash
npm start
```

Or directly with Node.js:

```bash
node src/server.js
```

### Expected Output

#### When Archive Exists (Legacy Mode)
```
========================================
Legacy Video Maker Archive Mode System
========================================
Initializing system...

[Legacy Mode] Legacy Archive Loaded
[Legacy Mode] Archive Version: 1.0
[Legacy Mode] Archive Date: 2023-01-15
[Legacy Mode] Available Themes: 3
[Legacy Mode] Available Characters: 3
[Legacy Mode] System initialized successfully

========================================
Active Mode: legacy
System ready
========================================
```

#### When Archive is Missing (Wrapper Offline Mode)
```
========================================
Legacy Video Maker Archive Mode System
========================================
Initializing system...

[System] Legacy Archive Missing
[System] Fallback reason: Archive loading returned null
[Wrapper Offline Mode] Switching to Wrapper Offline Mode
[Wrapper Offline Mode] Operating in offline fallback mode
[Wrapper Offline Mode] Limited functionality available
[Wrapper Offline Mode] System initialized successfully

========================================
Active Mode: wrapper_offline
System ready
========================================
```

## Testing Different Modes

### Test Legacy Mode
The default configuration includes the archive file, so Legacy Mode will activate automatically.

### Test Wrapper Offline Mode
To test the fallback mode, temporarily rename or remove the archive file:

```bash
# Rename the archive file
mv data/legacy_archive.json data/legacy_archive.json.backup

# Run the server
npm start

# Restore the archive file
mv data/legacy_archive.json.backup data/legacy_archive.json
```

## Configuration

Edit `src/config.js` to modify:
- Archive file path
- Server settings (port, host)
- Logging preferences

## Architecture

### Mode Selection Flow

```
Start Server
    ↓
Check for legacy_archive.json
    ↓
    ├─ Exists & Valid → Load Archive → Activate Legacy Mode
    │                                        ↓
    │                                   Log: "Legacy Archive Loaded"
    │
    ├─ Missing → Log: "Legacy Archive Missing"
    │                ↓
    │            Activate Wrapper Offline Mode
    │                ↓
    │            Log: "Switching to Wrapper Offline Mode"
    │
    └─ Error → Log: Error Message
                   ↓
               Activate Wrapper Offline Mode
                   ↓
               Log: "Switching to Wrapper Offline Mode"
```

### Key Components

- **server.js**: Main entry point, handles initialization and mode selection
- **config.js**: Centralized configuration management
- **legacyMode.js**: Implements Legacy Mode functionality with archive data
- **wrapperOfflineMode.js**: Implements fallback offline functionality

## Important Notes

- ⚠️ This is a **simulation** - no actual HTTP server is running
- ⚠️ No external connections are made to GoAnimate or Vyond systems
- ⚠️ All functionality is mocked and simulated locally
- ⚠️ The archive file is mock data for demonstration purposes

## Requirements

- Node.js >= 14.0.0
- No external dependencies required

## License

ISC
