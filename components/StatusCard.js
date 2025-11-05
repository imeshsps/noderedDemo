import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function StatusCard({ title, value, icon, trend, color }) {
  const [animatedValue, setAnimatedValue] = useState(value)

  useEffect(() => {
    setAnimatedValue(value)
  }, [value])

  const colorClasses = {
    cyan: 'from-cyan-500 to-blue-500',
    blue: 'from-blue-500 to-indigo-500',
    yellow: 'from-yellow-500 to-orange-500',
    green: 'from-green-500 to-emerald-500',
    pink: 'from-pink-500 to-rose-500',
    purple: 'from-purple-500 to-violet-500'
  }

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      className="stat-card relative overflow-hidden group"
    >
      {/* Gradient Background Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br ${colorClasses[color]} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div className="text-4xl">{icon}</div>
          <div className={`px-3 py-1 rounded-full text-xs font-semibold bg-${color}-500/20 text-${color}-300`}>
            {trend}
          </div>
        </div>

        <h3 className="text-gray-400 text-sm font-medium mb-2">{title}</h3>
        <motion.div
          key={animatedValue}
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl font-bold"
        >
          {animatedValue}
        </motion.div>
      </div>

      {/* Glowing effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className={`absolute inset-0 bg-gradient-to-r ${colorClasses[color]} blur-xl opacity-20`}></div>
      </div>
    </motion.div>
  )
}
