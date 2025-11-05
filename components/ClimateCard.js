import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function ClimateCard() {
  const [climate, setClimate] = useState({
    temperature: 22.5,
    humidity: 45,
    airQuality: 85,
    co2: 420
  })

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.now() / 1000
      setClimate({
        temperature: parseFloat((22 + Math.sin(time / 10) * 3 + (Math.random() - 0.5)).toFixed(1)),
        humidity: parseInt(45 + Math.sin(time / 15) * 10 + (Math.random() - 0.5) * 5),
        airQuality: parseInt(80 + Math.random() * 15),
        co2: parseInt(400 + Math.random() * 100)
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const getAirQualityColor = (aqi) => {
    if (aqi > 90) return 'text-green-400'
    if (aqi > 70) return 'text-yellow-400'
    return 'text-red-400'
  }

  const getAirQualityLabel = (aqi) => {
    if (aqi > 90) return 'Excellent'
    if (aqi > 70) return 'Good'
    return 'Fair'
  }

  return (
    <div className="glass-card p-6 h-full">
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <span className="mr-3">🌡️</span>
        Climate Control
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {/* Temperature */}
        <motion.div
          key={climate.temperature}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-xl p-4 border border-orange-500/30"
        >
          <div className="text-sm text-gray-400 mb-1">Temperature</div>
          <div className="text-3xl font-bold text-orange-400">{climate.temperature}°C</div>
          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(climate.temperature / 35) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Humidity */}
        <motion.div
          key={climate.humidity}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl p-4 border border-blue-500/30"
        >
          <div className="text-sm text-gray-400 mb-1">Humidity</div>
          <div className="text-3xl font-bold text-blue-400">{climate.humidity}%</div>
          <div className="mt-2 w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-cyan-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${climate.humidity}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </motion.div>

        {/* Air Quality */}
        <motion.div
          key={climate.airQuality}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl p-4 border border-green-500/30"
        >
          <div className="text-sm text-gray-400 mb-1">Air Quality</div>
          <div className={`text-3xl font-bold ${getAirQualityColor(climate.airQuality)}`}>
            {climate.airQuality}
          </div>
          <div className="text-xs text-gray-400 mt-1">{getAirQualityLabel(climate.airQuality)}</div>
        </motion.div>

        {/* CO2 */}
        <motion.div
          key={climate.co2}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl p-4 border border-purple-500/30"
        >
          <div className="text-sm text-gray-400 mb-1">CO₂ Level</div>
          <div className="text-3xl font-bold text-purple-400">{climate.co2}</div>
          <div className="text-xs text-gray-400 mt-1">ppm</div>
        </motion.div>
      </div>
    </div>
  )
}
