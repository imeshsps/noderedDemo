# 🏠 Node-RED Smart Home Control Center

A beautiful, modern Node-RED dashboard showcasing an advanced smart home automation system with real-time monitoring and stunning visuals. This demo features gradient styling, dynamic data visualization, and comprehensive home automation scenarios.

## ✨ Quick Start

```bash
npm install
npm start
```

Then open **http://localhost:1880/ui** in your browser to see the beautiful dashboard!

## 🎨 Dashboard Preview

The dashboard features:
- 🎯 **Modern Gradient Design** with cyberpunk-inspired color schemes
- 📊 **Real-time Charts** with smooth bezier interpolation
- 🌈 **Dynamic Color Coding** for status indicators
- 💫 **Animated Elements** including pulsing status indicators
- 📱 **Responsive Layout** that looks great on any screen

## 🚀 Features

This demo includes a comprehensive smart home automation system with beautiful visualizations:

### 🌡️ Climate Control
- **Living Room Monitoring**:
  - 🌡️ Temperature gauge with dynamic simulation
  - 💧 Humidity donut chart
  - 🌿 Air Quality Index (AQI) with wave visualization
  - 📊 CO₂ level monitoring (ppm)
  - 📈 Historical temperature trend chart
- **Bedroom Monitoring**:
  - 🛏️ Temperature and humidity tracking
  - 💡 Ambient light level detection
  - Different gauge styles (gage, compass, donut)

### 💡 Smart Lighting System
- Multi-room control: 🛋️ Living Room, 🛏️ Bedroom, 🍳 Kitchen, 🚿 Bathroom, 📖 Study
- Real-time status with color-coded indicators (green = ON, gray = OFF)
- Brightness levels (0-100%) with dynamic updates
- 📊 Power consumption chart for lighting
- 🔆 Active lights counter
- Power usage tracking per room

### 🛡️ Security System
- **Comprehensive Sensor Network**:
  - 🚪 Door sensors (Front, Back, Garage)
  - 🚶 Motion detectors (Hallway, Living Room, Garden, Driveway)
  - 🪟 Window sensors (Kitchen, Bedroom, Study)
- Color-coded alerts:
  - 🟢 Green = Secure/Clear
  - 🟡 Yellow = Motion Detected
  - 🔴 Red = Door/Window Open
- 📝 Timestamped security log

### ⚡ Energy Monitoring
- **Real-time Power Dashboard**:
  - ⚡ Live power consumption gauge (0-3000W)
  - 📊 Historical power trend chart with bezier curves
  - 💰 Estimated cost per hour calculation
  - 📈 Total energy consumption tracking (kWh)
  - 🔌 Grid voltage and current monitoring
- Smart color zones:
  - 🟢 Green = Efficient (< 1000W)
  - 🟡 Yellow = Moderate (1000-2000W)
  - 🔴 Red = High usage (> 2000W)

### 🌤️ Weather Station
- Outdoor weather simulation with icons
- Conditions: ☀️ Sunny, ⛅ Partly Cloudy, ☁️ Cloudy, 🌧️ Rainy, ⛈️ Stormy
- 🌡️ Outside temperature tracking
- 💨 Wind speed compass gauge
- 📊 Atmospheric pressure monitoring

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

3. **IMPORTANT**: Stop any existing Node-RED instances:
```bash
npm run stop
# or manually:
pkill -f node-red
```

**Why this is critical:** If Node-RED is already running from a different directory (like your global `~/.node-red`), it won't find the dashboard nodes from this project. You MUST ensure no other Node-RED instances are running.

4. Start the demo application:
```bash
npm start
```

The `npm start` command will:
- Automatically stop any running Node-RED instances
- Start Node-RED with the project's settings file
- Use the current directory as the userDir (so it finds node_modules/node-red-dashboard)
- Load the flows from flows.json

**Alternative method** using the shell script:
```bash
./start.sh
```

5. Verify successful startup:

You should see output similar to:
```
Settings file : /path/to/noderedDemo/settings.js
User directory : /path/to/noderedDemo
```

**NOT** from ~/.node-red! If you see ~/.node-red in the output, the wrong instance is running.

6. Access the Node-RED editor:
- Open your browser and navigate to: `http://localhost:1880`
- You should see the "Home Automation Demo" flow loaded with all nodes properly initialized
- All nodes should be green (no red triangles indicating errors)

7. View the Dashboard:
- Click on the dashboard icon (top-right corner in the editor), or
- Navigate directly to: `http://localhost:1880/ui`
- You should see the "Home Automation Dashboard" with live updating data!

8. To stop the application:
```bash
# Press Ctrl+C in the terminal where Node-RED is running
# or in a new terminal:
npm run stop
```

## 📊 Dashboard Layout

The dashboard features a modern, organized layout:

### Header Section
- **Gradient Banner** with animated pulsing indicator
- "All Systems Online" status display
- Custom CSS styling for a cyberpunk aesthetic

### Main Sections (In Order)
1. **🌡️ Climate Control**: 3 gauges + CO₂ display + trend chart (Living Room)
2. **🛏️ Bedroom**: Temperature, humidity, and light level monitoring
3. **💡 Smart Lighting**: Status updates, power chart, and active light counter
4. **🛡️ Security System**: Latest alerts with color-coded status and timestamps
5. **⚡ Energy Monitoring**: Large power gauge, trend chart, cost calculator, grid status
6. **🌤️ Weather Station**: Outdoor conditions and wind speed compass

### Design Features
- **Gradient backgrounds** with purple/blue color schemes
- **Rounded corners** and soft shadows for modern look
- **Color-coded data**:
  - 🔵 Cyan (#00d9ff) - Primary accent
  - 🟢 Green (#06ffa5) - Success/Normal
  - 🟡 Yellow (#ffb800) - Warning
  - 🔴 Pink/Red (#ff006e) - Alert/High
  - 🟣 Purple (#7b2cbf) - Secondary accent
- **Smooth animations** including bezier curve interpolation on charts
- **Emoji icons** for better visual recognition

## ⚙️ How It Works

### 🎲 Smart Data Generation
Each sensor uses inject nodes with optimized intervals:
- 🌡️ Climate sensors: Every 1.5-2 seconds
- 💡 Smart lights: Every 3 seconds
- 🛡️ Security sensors: Every 4 seconds
- ⚡ Energy monitor: Every 1 second (high precision)
- 🌤️ Weather: Every 10 seconds

### 🧠 Advanced Function Nodes
Sophisticated data generation with realistic patterns:
- **Temperature Simulation**: Uses sine waves for smooth, natural temperature variations
- **Smart Lighting**: 5 different rooms with individual color signatures and power tracking
- **Security Logic**: Multiple sensor types (doors, motion, windows) with realistic trigger probabilities
- **Energy Calculation**: Sine-based power variation with voltage/current calculations and cost estimation
- **Weather System**: Random weather conditions with associated temperature and wind speed patterns
- **Context Storage**: Tracks cumulative values like total energy consumption and active light count

### 🎨 Advanced Visualizations
The dashboard uses diverse widget types:
- **Gauge Types**:
  - 🎯 Standard gage (temperature, power)
  - 🍩 Donut charts (humidity)
  - 🧭 Compass gauges (humidity, wind speed)
  - 🌊 Wave visualization (air quality)
- **Charts**: Bezier-smoothed line charts with time-based data retention
- **Text Displays**: HTML-formatted with dynamic colors and styling
- **Templates**: Custom CSS for gradients, animations, and modern styling

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

**Root Cause:** Node-RED is running from the wrong directory and can't find the dashboard nodes.

**Solution:**

1. **Check the Node-RED startup output**. Look for these lines:
   ```
   Settings file : /home/vegaai/.node-red/settings.js    ← WRONG!
   User directory : /home/vegaai/.node-red               ← WRONG!
   ```

   It should say:
   ```
   Settings file : /path/to/noderedDemo/settings.js      ← CORRECT!
   User directory : /path/to/noderedDemo                 ← CORRECT!
   ```

2. **If you see the WRONG paths**, it means:
   - You didn't run `npm start` from the project directory, OR
   - Another Node-RED instance is running

3. **Fix it:**
   ```bash
   # Kill any running Node-RED instances
   pkill -f node-red

   # Make sure you're in the project directory
   cd ~/downloads/noderedDemo  # or wherever you cloned the repo

   # Verify node-red-dashboard is installed
   ls node_modules/node-red-dashboard

   # Start using npm (this is important!)
   npm start
   ```

4. **Verify node-red-dashboard is installed:**
   ```bash
   ls node_modules/node-red-dashboard
   ```

   If it's missing:
   ```bash
   npm install node-red-dashboard
   ```

5. **Make sure to use `npm start`**, NOT just `node-red`:
   - ✅ CORRECT: `npm start`
   - ❌ WRONG: `node-red` (this uses global settings)
   - ❌ WRONG: `node-red flows.json` (this uses global settings)

The key is that `npm start` passes the correct --settings and --userDir flags to Node-RED.

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

## 🎯 Demo Data Features

All data is intelligently generated to simulate a realistic smart home:

### 🌡️ Climate Data
- **Sine-wave temperature variations** for smooth, natural patterns
- Separate base temperatures for different rooms (Living Room: 22°C, Bedroom: 19°C)
- Humidity following its own sine wave pattern
- Air Quality Index (AQI) ranging 50-100
- CO₂ levels between 400-600 ppm

### 💡 Lighting Intelligence
- 5 distinct rooms with unique characteristics
- Realistic on/off ratios (60% on probability)
- Brightness varies between 30-100% when active
- Power consumption calculated based on brightness
- Active light counting across the home

### 🛡️ Security Realism
- Multiple sensor types with different behaviors
- Door/window sensors: 80% closed, 20% open (realistic security)
- Motion sensors: Variable detection based on typical activity
- Color-coded alerts for quick status recognition
- Timestamped logging for audit trail

### ⚡ Energy Intelligence
- **Dynamic power consumption** using sine waves (300-2000W)
- Realistic voltage variations (220-240V)
- Automatic current calculation (I = P/V)
- Real-time cost estimation ($0.15/kWh rate)
- Cumulative energy tracking in kWh
- Grid status monitoring

### 🌤️ Weather Simulation
- 5 different weather conditions with appropriate temperatures
- Wind speed varies by condition
- Atmospheric pressure simulation (1000-1040 hPa)
- Weather icons for quick visual recognition

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
