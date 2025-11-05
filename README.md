# 🏠 Smart Home Control Center

A **stunning, modern smart home dashboard** built with React, Next.js, and Tailwind CSS featuring glassmorphism design, smooth animations, and real-time monitoring.

![Dashboard Preview](https://img.shields.io/badge/Built%20with-React%20%26%20Next.js-61DAFB?style=for-the-badge&logo=react)
![Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Animated%20with-Framer%20Motion-BB4B96?style=for-the-badge&logo=framer)

## ✨ Features

### 🎨 **Modern Design**
- **Glassmorphism UI** with frosted glass effects
- **Gradient backgrounds** and neon accents
- **Smooth animations** powered by Framer Motion
- **Responsive layout** - looks great on all devices
- **Dark theme** with cyberpunk aesthetics

### 🏡 **Smart Home Monitoring**

#### 🌡️ Climate Control
- Real-time temperature tracking with sine-wave simulation
- Humidity monitoring with animated progress bars
- Air Quality Index (AQI) with color-coded status
- CO₂ level monitoring
- Beautiful gradient cards for each metric

#### ⚡ Energy Monitoring
- Live power consumption chart with area graphs
- Real-time cost calculation
- Voltage and current monitoring
- Daily energy usage tracking (kWh)
- Color-coded power status (Efficient/Moderate/High Usage)

#### 💡 Smart Lighting
- 5 room control: Living Room, Bedroom, Kitchen, Bathroom, Study
- Interactive ON/OFF toggles
- Brightness indicators with animated progress bars
- Power consumption per room
- Active lights counter
- Room-specific emojis and colors

#### 🛡️ Security System
- Door sensors (Front, Back, Garage)
- Motion detectors (Hallway, Living Room, Garden, Driveway)
- Window sensors (Kitchen, Bedroom, Study)
- Real-time alert feed with animations
- Color-coded status indicators
- Arm/Disarm toggle button
- Security statistics dashboard

#### 🌤️ Weather Station
- Animated weather icons
- 5 weather conditions: Sunny, Partly Cloudy, Cloudy, Rainy, Stormy
- Current temperature display
- Wind speed monitoring
- Humidity tracking
- Atmospheric pressure
- "Feels like" temperature

### 🎯 **Technical Features**
- **Real-time data simulation** with realistic patterns
- **Smooth transitions** and micro-interactions
- **Staggered animations** for elegant loading
- **Hover effects** and scale transforms
- **Auto-updating charts** using Recharts
- **Context-based data** generation
- **Responsive grid layout**

## 🚀 Quick Start

### Prerequisites
- Node.js 16.x or higher
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard!

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 📁 Project Structure

```
smart-home-dashboard/
├── pages/
│   ├── _app.js           # App wrapper with global styles
│   └── index.js          # Main dashboard page
├── components/
│   ├── StatusCard.js     # Metric status cards
│   ├── ClimateCard.js    # Temperature & humidity
│   ├── EnergyChart.js    # Power monitoring chart
│   ├── SecurityPanel.js  # Security alerts feed
│   ├── LightingControl.js # Room lighting controls
│   └── WeatherWidget.js  # Weather information
├── styles/
│   └── globals.css       # Global styles & Tailwind
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
├── next.config.js        # Next.js configuration
└── package.json          # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary Cyan**: `#00d9ff` - Main accent color
- **Purple**: `#7b2cbf` - Secondary accent
- **Neon Green**: `#06ffa5` - Success states
- **Yellow**: `#ffb800` - Warnings
- **Pink**: `#ff006e` - Alerts/Critical

### UI Components
- **Glass Cards**: Frosted glass effect with backdrop blur
- **Gradient Text**: Multi-color gradient text effects
- **Neon Borders**: Glowing cyan borders on hover
- **Stat Cards**: Hoverable cards with scale animations
- **Progress Bars**: Animated gradient progress indicators

## 🛠️ Technologies Used

- **[Next.js](https://nextjs.org/)** - React framework with SSR
- **[React](https://reactjs.org/)** - UI component library
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Recharts](https://recharts.org/)** - Chart visualization
- **[Lucide React](https://lucide.dev/)** - Icon library

## 📊 Data Simulation

All data is generated client-side with realistic patterns:

- **Temperature**: Sine-wave based variations for smooth, natural changes
- **Energy**: Dynamic power simulation with cost calculations
- **Security**: Random events with realistic probabilities
- **Lighting**: Auto-toggles with brightness variations
- **Weather**: Condition changes with appropriate temperatures

## 🎯 Customization

### Changing Colors

Edit `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      accent: {
        cyan: '#00d9ff',    // Change these!
        purple: '#7b2cbf',
        green: '#06ffa5',
        // ...
      }
    }
  }
}
```

### Modifying Data Update Intervals

Edit component `useEffect` intervals:

```js
// Example: Change update frequency
const interval = setInterval(() => {
  // Update logic
}, 2000) // Change from 2000ms (2s) to your preferred interval
```

### Adding New Rooms

Edit `LightingControl.js`:

```js
const [rooms, setRooms] = useState([
  { id: 6, name: 'Office', icon: '🖥️', on: false, brightness: 0, color: '#00BFFF' },
  // Add more rooms here
])
```

## 🌟 Features Showcase

### Animations
- **Page load**: Staggered animation of all components
- **Data updates**: Smooth value transitions
- **Hover effects**: Scale, glow, and color transitions
- **Weather icon**: Rotating and scaling animation
- **Security feed**: Slide-in alerts with exit animations

### Interactions
- **Lighting toggles**: Click to turn lights on/off
- **Security arm/disarm**: Toggle system status
- **Hover cards**: All cards respond to hover with scale effects
- **Chart tooltips**: Interactive data point information

## 📱 Responsive Design

The dashboard is fully responsive:
- **Mobile**: Single column layout
- **Tablet**: 2-column grid
- **Desktop**: 3-4 column grid
- **4K**: Maximum width with centered content

## 🔮 Future Enhancements

Potential additions:
- Real API integration (weather, IoT devices)
- User authentication
- Historical data persistence
- Voice control integration
- Mobile app version
- Custom themes/color schemes
- Automation rules & schedules

## 📄 License

MIT License - Feel free to use for your projects!

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 💡 Inspiration

This dashboard is inspired by:
- Modern IoT platforms
- Cyberpunk aesthetics
- Glassmorphism design trend
- Smart home control interfaces

---

**Built with ❤️ using React, Next.js, and Tailwind CSS**

Enjoy your beautiful smart home dashboard! 🚀✨
