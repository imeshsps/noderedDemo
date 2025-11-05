#!/bin/bash

# Start Node-RED Home Automation Demo
# This script ensures Node-RED uses the correct settings and user directory

# Get the directory where this script is located
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Change to the project directory
cd "$DIR"

# Kill any existing Node-RED instances to avoid conflicts
pkill -f node-red 2>/dev/null || true

echo "Starting Node-RED Home Automation Demo..."
echo "Project directory: $DIR"
echo ""
echo "Once started, access:"
echo "  - Editor: http://localhost:1880"
echo "  - Dashboard: http://localhost:1880/ui"
echo ""

# Start Node-RED with explicit paths
node-red --settings "$DIR/settings.js" --userDir "$DIR"
