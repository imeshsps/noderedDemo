import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Head from 'next/head'
import StatusCard from '../components/StatusCard'
import ClimateCard from '../components/ClimateCard'
import EnergyChart from '../components/EnergyChart'
import SecurityPanel from '../components/SecurityPanel'
import LightingControl from '../components/LightingControl'
import WeatherWidget from '../components/WeatherWidget'

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [systemStatus, setSystemStatus] = useState('online')

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }

  return (
    <>
      <Head>
        <title>Smart Home Control Center</title>
        <meta name="description" content="Modern Smart Home Dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen p-4 md:p-8">
        {/* Header */}
        <motion.header
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="glass-card p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  🏠 Smart Home Control Center
                </h1>
                <p className="text-gray-300 text-sm md:text-base">
                  Advanced Home Automation Dashboard
                </p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <div className="text-2xl md:text-3xl font-mono mb-1">
                  {currentTime.toLocaleTimeString()}
                </div>
                <div className="flex items-center justify-end space-x-2">
                  <div className={`w-3 h-3 rounded-full ${systemStatus === 'online' ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                  <span className="text-sm text-gray-300">
                    {systemStatus === 'online' ? 'All Systems Online' : 'System Offline'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.header>

        {/* Main Dashboard Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {/* Status Cards Row */}
          <motion.div variants={itemVariants}>
            <StatusCard
              title="Temperature"
              value="22.5°C"
              icon="🌡️"
              trend="+0.5°C"
              color="cyan"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatusCard
              title="Humidity"
              value="45%"
              icon="💧"
              trend="-2%"
              color="blue"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatusCard
              title="Energy"
              value="1.2 kW"
              icon="⚡"
              trend="Normal"
              color="yellow"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <StatusCard
              title="Security"
              value="Secure"
              icon="🛡️"
              trend="All Clear"
              color="green"
            />
          </motion.div>

          {/* Climate Cards */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <ClimateCard />
          </motion.div>

          {/* Weather Widget */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <WeatherWidget />
          </motion.div>

          {/* Energy Chart */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-3 xl:col-span-4">
            <EnergyChart />
          </motion.div>

          {/* Lighting Control */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <LightingControl />
          </motion.div>

          {/* Security Panel */}
          <motion.div variants={itemVariants} className="md:col-span-2 lg:col-span-2">
            <SecurityPanel />
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="mt-8 text-center text-gray-400 text-sm"
        >
          <p>Powered by React, Next.js & Tailwind CSS | Real-time Monitoring Active</p>
        </motion.footer>
      </div>
    </>
  )
}
