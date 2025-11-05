import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function LightingControl() {
  const [rooms, setRooms] = useState([
    { id: 1, name: 'Living Room', icon: '🛋️', on: true, brightness: 80, color: '#FFD700' },
    { id: 2, name: 'Bedroom', icon: '🛏️', on: false, brightness: 0, color: '#FF69B4' },
    { id: 3, name: 'Kitchen', icon: '🍳', on: true, brightness: 100, color: '#FFFFFF' },
    { id: 4, name: 'Bathroom', icon: '🚿', on: false, brightness: 0, color: '#87CEEB' },
    { id: 5, name: 'Study', icon: '📖', on: true, brightness: 60, color: '#98FB98' }
  ])

  useEffect(() => {
    const interval = setInterval(() => {
      setRooms(prev => {
        const updated = [...prev]
        const randomIndex = Math.floor(Math.random() * updated.length)
        const room = updated[randomIndex]

        if (Math.random() > 0.7) {
          room.on = !room.on
          room.brightness = room.on ? Math.floor(30 + Math.random() * 70) : 0
        }

        return updated
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const toggleRoom = (id) => {
    setRooms(prev => prev.map(room =>
      room.id === id
        ? { ...room, on: !room.on, brightness: !room.on ? 75 : 0 }
        : room
    ))
  }

  const activeCount = rooms.filter(r => r.on).length
  const totalPower = rooms.reduce((sum, room) => sum + (room.on ? room.brightness * 0.12 : 0), 0)

  return (
    <div className="glass-card p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-3">💡</span>
          Smart Lighting
        </h2>

        <div className="flex items-center space-x-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-cyan-400">{activeCount}</div>
            <div className="text-xs text-gray-400">Active</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-yellow-400">{totalPower.toFixed(0)}W</div>
            <div className="text-xs text-gray-400">Power</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`p-4 rounded-xl border transition-all duration-300 ${
              room.on
                ? 'bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border-yellow-500/30'
                : 'bg-gray-800/20 border-gray-700/30'
            }`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <motion.div
                  animate={{
                    scale: room.on ? [1, 1.2, 1] : 1,
                    rotate: room.on ? [0, 5, -5, 0] : 0
                  }}
                  transition={{ duration: 2, repeat: room.on ? Infinity : 0 }}
                  className="text-2xl"
                >
                  {room.icon}
                </motion.div>
                <div>
                  <div className="font-semibold">{room.name}</div>
                  {room.on && (
                    <div className="text-sm text-gray-400">
                      Brightness: {room.brightness}%
                    </div>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleRoom(room.id)}
                className={`px-4 py-2 rounded-full font-semibold transition-all ${
                  room.on
                    ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                    : 'bg-gray-700/50 text-gray-400 border border-gray-600/30'
                }`}
              >
                {room.on ? 'ON' : 'OFF'}
              </motion.button>
            </div>

            {room.on && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                className="mt-3"
              >
                <div className="relative w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="absolute inset-y-0 left-0 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${room.brightness}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  )
}
