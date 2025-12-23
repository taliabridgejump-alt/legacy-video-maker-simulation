#!/bin/bash

# Preview script for Legacy Video Maker Archive Mode System
# This script demonstrates both operating modes

echo "=========================================================="
echo "  Legacy Video Maker Archive Mode - System Preview"
echo "=========================================================="
echo ""
echo "This preview will demonstrate both operating modes:"
echo "  1. Legacy Mode (with archive)"
echo "  2. Wrapper Offline Mode (without archive)"
echo ""
echo "Press Enter to continue..."
read

echo ""
echo "=========================================================="
echo "  PREVIEW 1: Legacy Mode (Archive Present)"
echo "=========================================================="
echo ""
node src/server.js

echo ""
echo ""
echo "Press Enter to see Wrapper Offline Mode preview..."
read

echo ""
echo "=========================================================="
echo "  PREVIEW 2: Wrapper Offline Mode (Archive Missing)"
echo "=========================================================="
echo ""

# Temporarily move archive file
mv data/legacy_archive.json data/legacy_archive.json.temp 2>/dev/null

node src/server.js

# Restore archive file
mv data/legacy_archive.json.temp data/legacy_archive.json 2>/dev/null

echo ""
echo "=========================================================="
echo "  Preview Complete!"
echo "=========================================================="
echo ""
echo "To run the system yourself:"
echo "  npm start          (or)  node src/server.js"
echo ""
echo "See README.md for more information."
echo ""
