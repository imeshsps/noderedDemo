# Node-RED Home Automation Demo

A comprehensive Node-RED demonstration showcasing a smart home automation system with dynamic dummy data. This demo simulates various home automation sensors and devices with real-time data updates.

## Features

This demo includes the following home automation components:

### Climate Monitoring
- **Living Room Sensors**: Temperature (18-26°C) and Humidity (40-70%) monitoring
- **Bedroom Sensors**: Temperature (16-24°C) and Humidity (35-70%) monitoring
- Real-time gauge displays for temperature and humidity levels

### Smart Lighting
- Multi-room smart light control (Living Room, Bedroom, Kitchen, Bathroom)
- Dynamic on/off status
- Brightness levels (0-100%)
- Updates every 4 seconds

### Security System
- **Door Sensors**: Front Door, Back Door, and Garage Door monitoring
- **Motion Sensors**: Detects motion in Hallway, Living Room, Kitchen, and Backyard
- Real-time status updates showing OPEN/CLOSED and DETECTED/CLEAR states

### Energy Monitoring
- Real-time power consumption tracking (500-3000W)
- Voltage and current measurements
- Historical power consumption chart
- Visual gauge for current power usage

### Climate Control
- Smart Thermostat simulation
- Current vs target temperature display
- Multiple modes: heat, cool, auto, off
- Fan speed control (1-3 levels)
- Operating status indicator

## Installation

### Prerequisites
- Node.js (v14.0.0 or higher)
- npm (comes with Node.js)

### Setup Instructions

1. Clone or download this repository:
```bash
git clone <repository-url>
cd noderedDemo
```

2. Install dependencies:
```bash
npm install
```

This will install Node-RED and the node-red-dashboard package which provides all the UI widgets (gauges, charts, text displays).

3. Start Node-RED:
```bash
npm start
```

The application will start with the custom settings file that ensures all dashboard nodes are properly loaded.

4. Access the Node-RED editor:
- Open your browser and navigate to: `http://localhost:1880`
- You should see the "Home Automation Demo" flow loaded with all nodes properly initialized

5. View the Dashboard:
- Click on the dashboard icon (top-right corner in the editor), or
- Navigate directly to: `http://localhost:1880/ui`
- You should see the "Home Automation Dashboard" with live updating data!

## Dashboard Layout

The dashboard is organized into the following sections:

1. **Living Room**: Temperature and humidity gauges
2. **Bedroom**: Temperature and humidity gauges
3. **Smart Lights**: Current light status across all rooms
4. **Security**: Door and motion sensor status
5. **Energy Monitor**: Real-time power consumption gauge and historical chart
6. **Climate Control**: Smart thermostat information

## How It Works

### Data Generation
Each sensor uses inject nodes that trigger at different intervals:
- Temperature sensors: Every 2-3 seconds
- Smart lights: Every 4 seconds
- Door sensors: Every 5 seconds
- Motion sensors: Every 3 seconds
- Energy monitor: Every 2 seconds
- Thermostat: Every 4 seconds

### Function Nodes
Each sensor has a function node that generates realistic dummy data:
- Temperature values with appropriate ranges for different rooms
- Random on/off states for lights with brightness levels
- Door open/close states with higher probability of being closed
- Motion detection with varying probabilities
- Power consumption with realistic ranges
- Thermostat data with multiple operating modes

### Visualization
The dashboard uses various widgets:
- **Gauges**: For temperature, humidity, and power readings
- **Text displays**: For status updates (lights, doors, motion, thermostat)
- **Charts**: For historical power consumption tracking

## Customization

### Adjusting Update Intervals
Edit the "repeat" value in inject nodes (in seconds):
```javascript
"repeat": "2",  // Updates every 2 seconds
```

### Modifying Data Ranges
Edit the function nodes to adjust min/max values:
```javascript
// Example: Adjust temperature range
const temp = (18 + Math.random() * 8).toFixed(1);  // 18-26°C
```

### Adding New Sensors
1. Add a new inject node
2. Create a function node to generate data
3. Connect to debug and/or dashboard nodes
4. Update the dashboard groups as needed

## Troubleshooting

### Missing dashboard nodes (ui_gauge, ui_text, ui_chart, etc.)
If you see errors like "Flows stopped due to missing node types: ui_gauge, ui_text, ui_chart":

**Solution:**
1. Make sure you ran `npm install` in the project directory
2. Verify node-red-dashboard is installed:
   ```bash
   ls node_modules/node-red-dashboard
   ```
3. If missing, install it manually:
   ```bash
   npm install node-red-dashboard
   ```
4. Restart Node-RED with `npm start`

The settings.js file is configured to load nodes from the local node_modules directory, so the dashboard should be available after installation.

### Node-RED won't start
- Ensure Node.js is installed: `node --version`
- Check if port 1880 is available (use `lsof -i :1880` on Linux/Mac or `netstat -ano | findstr :1880` on Windows)
- Make sure you're in the correct directory with package.json and settings.js
- Check the console output for specific error messages

### Dashboard not showing data
- Verify Node-RED is running at http://localhost:1880
- Check that all flows are deployed (click the "Deploy" button in the top-right)
- Ensure you're accessing the dashboard at http://localhost:1880/ui (note the /ui path)
- Check the debug panel in Node-RED editor to see if data is flowing
- Clear browser cache and refresh

### Flows not running
- Click the "Deploy" button in the Node-RED editor
- Check for any error nodes (nodes with red triangles)
- Look at the debug output panel on the right side of the editor
- Verify all inject nodes are enabled (blue square on the left side of the node)

## Technologies Used

- **Node-RED**: Flow-based development tool
- **node-red-dashboard**: Dashboard UI nodes for Node-RED
- **JavaScript**: For function nodes and data generation

## Demo Data Features

All data is randomly generated to simulate a realistic home automation environment:
- Temperature fluctuations within normal ranges
- Periodic light switching with realistic brightness
- Occasional door openings (lower probability)
- Motion detection in various areas
- Variable power consumption patterns
- Thermostat cycling through different modes

## Next Steps

To extend this demo, consider:
1. Adding database storage for historical data
2. Implementing MQTT for real device integration
3. Creating alert notifications for threshold violations
4. Adding user controls to manually adjust settings
5. Integrating with real IoT devices
6. Adding voice control integration
7. Creating automation rules (if temperature > X, then turn on AC)

## License

MIT License - Feel free to use and modify for your needs.

## Support

For issues or questions about Node-RED, visit:
- Node-RED Documentation: https://nodered.org/docs/
- Node-RED Forum: https://discourse.nodered.org/

## Screenshots

Once running, you'll see:
- Real-time updating gauges and charts
- Color-coded indicators (green = normal, yellow = warning, red = alert)
- Organized dashboard sections for each home area
- Debug output in the Node-RED editor showing all sensor data
