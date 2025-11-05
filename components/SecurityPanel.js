import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

export default function SecurityPanel() {
  const [events, setEvents] = useState([])
  const [systemArmed, setSystemArmed] = useState(true)

  useEffect(() => {
    const generateEvent = () => {
      const sensors = [
        { icon: '🚪', type: 'Door', locations: ['Front Door', 'Back Door', 'Garage'] },
        { icon: '🚶', type: 'Motion', locations: ['Hallway', 'Living Room', 'Garden', 'Driveway'] },
        { icon: '🪟', type: 'Window', locations: ['Kitchen', 'Bedroom', 'Study'] }
      ]

      const sensor = sensors[Math.floor(Math.random() * sensors.length)]
      const location = sensor.locations[Math.floor(Math.random() * sensor.locations.length)]

      let status, color, bgColor
      if (sensor.type === 'Motion') {
        const detected = Math.random() > 0.6
        status = detected ? 'Detected' : 'Clear'
        color = detected ? 'text-yellow-400' : 'text-green-400'
        bgColor = detected ? 'bg-yellow-500/20 border-yellow-500/30' : 'bg-green-500/20 border-green-500/30'
      } else {
        const isOpen = Math.random() > 0.8
        status = isOpen ? 'Open' : 'Closed'
        color = isOpen ? 'text-red-400' : 'text-green-400'
        bgColor = isOpen ? 'bg-red-500/20 border-red-500/30' : 'bg-green-500/20 border-green-500/30'
      }

      return {
        id: Date.now(),
        icon: sensor.icon,
        type: sensor.type,
        location,
        status,
        color,
        bgColor,
        timestamp: new Date().toLocaleTimeString()
      }
    }

    const interval = setInterval(() => {
      setEvents(prev => {
        const newEvent = generateEvent()
        return [newEvent, ...prev].slice(0, 5) // Keep last 5 events
      })
    }, 4000)

    // Generate initial event
    setEvents([generateEvent()])

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="glass-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-3">🛡️</span>
          Security System
        </h2>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setSystemArmed(!systemArmed)}
          className={`px-4 py-2 rounded-full font-semibold transition-colors ${
            systemArmed
              ? 'bg-green-500/20 text-green-400 border border-green-500/30'
              : 'bg-red-500/20 text-red-400 border border-red-500/30'
          }`}
        >
          {systemArmed ? '🔒 Armed' : '🔓 Disarmed'}
        </motion.button>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto scrollbar-hide">
        <AnimatePresence mode="popLayout">
          {events.map((event) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: -50, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 50, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-xl border ${event.bgColor} backdrop-blur-sm`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">{event.icon}</div>
                  <div>
                    <div className="font-semibold text-white">
                      {event.type}: {event.location}
                    </div>
                    <div className={`text-sm ${event.color} font-medium mt-1`}>
                      Status: {event.status}
                    </div>
                  </div>
                </div>
                <div className="text-xs text-gray-400">
                  {event.timestamp}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mt-4 pt-4 border-t border-white/10">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">
            {events.filter(e => e.status === 'Closed' || e.status === 'Clear').length}
          </div>
          <div className="text-xs text-gray-400">Secure</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-yellow-400">
            {events.filter(e => e.status === 'Detected').length}
          </div>
          <div className="text-xs text-gray-400">Motion</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-red-400">
            {events.filter(e => e.status === 'Open').length}
          </div>
          <div className="text-xs text-gray-400">Alerts</div>
        </div>
      </div>
    </div>
  )
}
