import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function EnergyChart() {
  const [energyData, setEnergyData] = useState([])
  const [currentPower, setCurrentPower] = useState(0)
  const [totalCost, setTotalCost] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const time = new Date()
      const timeStr = time.toLocaleTimeString()
      const power = Math.floor(800 + Math.sin(Date.now() / 5000) * 500 + Math.random() * 400)

      setCurrentPower(power)
      setTotalCost(prev => prev + (power / 1000) * 0.15 / 3600) // Cost calculation

      setEnergyData(prev => {
        const newData = [...prev, { time: timeStr, power }]
        return newData.slice(-20) // Keep last 20 data points
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="glass-card p-3 text-sm">
          <p className="text-cyan-400 font-bold">{payload[0].value}W</p>
          <p className="text-gray-400">{payload[0].payload.time}</p>
        </div>
      )
    }
    return null
  }

  const getPowerStatus = () => {
    if (currentPower < 1000) return { label: 'Efficient', color: 'text-green-400', bg: 'bg-green-500/20' }
    if (currentPower < 2000) return { label: 'Moderate', color: 'text-yellow-400', bg: 'bg-yellow-500/20' }
    return { label: 'High Usage', color: 'text-red-400', bg: 'bg-red-500/20' }
  }

  const status = getPowerStatus()

  return (
    <div className="glass-card p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <h2 className="text-2xl font-bold flex items-center mb-4 md:mb-0">
          <span className="mr-3">⚡</span>
          Energy Monitoring
        </h2>

        <div className="flex items-center space-x-6">
          <div>
            <div className="text-sm text-gray-400">Current Power</div>
            <motion.div
              key={currentPower}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              className={`text-3xl font-bold ${status.color}`}
            >
              {currentPower}W
            </motion.div>
          </div>

          <div>
            <div className="text-sm text-gray-400">Estimated Cost</div>
            <div className="text-3xl font-bold text-yellow-400">
              ${totalCost.toFixed(2)}
            </div>
          </div>

          <div className={`px-4 py-2 rounded-full ${status.bg} ${status.color} font-semibold`}>
            {status.label}
          </div>
        </div>
      </div>

      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={energyData}>
            <defs>
              <linearGradient id="colorPower" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00d9ff" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#00d9ff" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="time"
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
              interval="preserveStartEnd"
            />
            <YAxis
              stroke="#9CA3AF"
              tick={{ fontSize: 12 }}
              domain={[0, 3000]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="power"
              stroke="#00d9ff"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorPower)"
              animationDuration={300}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="text-center p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-xl border border-green-500/20">
          <div className="text-2xl font-bold text-green-400">{(Math.random() * 5 + 15).toFixed(1)}</div>
          <div className="text-sm text-gray-400 mt-1">kWh Today</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
          <div className="text-2xl font-bold text-blue-400">230V</div>
          <div className="text-sm text-gray-400 mt-1">Grid Voltage</div>
        </div>
        <div className="text-center p-4 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
          <div className="text-2xl font-bold text-purple-400">{(currentPower / 230).toFixed(1)}A</div>
          <div className="text-sm text-gray-400 mt-1">Current Draw</div>
        </div>
      </div>
    </div>
  )
}
