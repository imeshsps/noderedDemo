import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function WeatherWidget() {
  const [weather, setWeather] = useState({
    condition: 'Sunny',
    icon: '☀️',
    temperature: 24,
    windSpeed: 12,
    humidity: 65,
    pressure: 1013
  })

  useEffect(() => {
    const updateWeather = () => {
      const conditions = [
        { icon: '☀️', name: 'Sunny', temp: 28, color: 'from-yellow-500 to-orange-500' },
        { icon: '⛅', name: 'Partly Cloudy', temp: 24, color: 'from-blue-400 to-gray-400' },
        { icon: '☁️', name: 'Cloudy', temp: 20, color: 'from-gray-400 to-gray-600' },
        { icon: '🌧️', name: 'Rainy', temp: 18, color: 'from-blue-600 to-blue-800' },
        { icon: '⛈️', name: 'Stormy', temp: 16, color: 'from-gray-700 to-purple-900' }
      ]

      const condition = conditions[Math.floor(Math.random() * conditions.length)]

      setWeather({
        condition: condition.name,
        icon: condition.icon,
        temperature: condition.temp + (Math.random() - 0.5) * 4,
        windSpeed: Math.floor(5 + Math.random() * 25),
        humidity: Math.floor(40 + Math.random() * 40),
        pressure: Math.floor(1000 + Math.random() * 40),
        gradient: condition.color
      })
    }

    updateWeather()
    const interval = setInterval(updateWeather, 10000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-3">🌤️</span>
        Weather Station
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-6">
        {/* Main Weather Display */}
        <motion.div
          key={weather.icon}
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className={`bg-gradient-to-br ${weather.gradient} rounded-3xl p-8 flex-shrink-0 shadow-2xl`}
        >
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="text-8xl mb-4 text-center"
          >
            {weather.icon}
          </motion.div>
          <div className="text-center">
            <div className="text-5xl font-bold text-white mb-2">
              {weather.temperature.toFixed(1)}°C
            </div>
            <div className="text-xl text-white/90 font-medium">
              {weather.condition}
            </div>
          </div>
        </motion.div>

        {/* Weather Details */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">💨</span>
              <div className="text-sm text-gray-400">Wind Speed</div>
            </div>
            <div className="text-3xl font-bold text-blue-400">
              {weather.windSpeed} km/h
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">💧</span>
              <div className="text-sm text-gray-400">Humidity</div>
            </div>
            <div className="text-3xl font-bold text-purple-400">
              {weather.humidity}%
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">🌡️</span>
              <div className="text-sm text-gray-400">Feels Like</div>
            </div>
            <div className="text-3xl font-bold text-green-400">
              {(weather.temperature + (Math.random() - 0.5) * 3).toFixed(1)}°C
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30"
          >
            <div className="flex items-center space-x-3 mb-2">
              <span className="text-3xl">📊</span>
              <div className="text-sm text-gray-400">Pressure</div>
            </div>
            <div className="text-3xl font-bold text-orange-400">
              {weather.pressure} hPa
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
