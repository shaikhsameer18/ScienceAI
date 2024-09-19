'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { BrainCircuit, Zap, Cog, Microscope, ChevronRight } from 'lucide-react'

const features = [
  { icon: BrainCircuit, title: 'AI-Powered Analysis', description: 'Advanced algorithms detect issues in real-time' },
  { icon: Zap, title: 'Instant Alerts', description: 'Immediate notifications for quick problem resolution' },
  { icon: Cog, title: 'Automated Maintenance', description: 'Streamlined processes for efficient upkeep' },
  { icon: Microscope, title: 'Enhanced Learning', description: 'Optimized exhibits for better visitor experiences' },
]

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
            Empowering Science Museums with AI
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience the future of interactive learning with our AI-powered exhibit management system.
            Enhancing visitor experiences and streamlining operations like never before.
          </p>
          <Link href="/how-it-works">
            <Button size="lg" className="bg-green-500 text-gray-900 hover:bg-green-400 transition-colors duration-300">
              Learn More <ChevronRight className="ml-2" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-6">Revolutionizing Museum Management</h2>
            <p className="text-gray-300 mb-6">
              Our AI-powered system transforms how science museums operate, ensuring exhibits are always at their best.
              From real-time defect detection to predictive maintenance, we&apos;re shaping the future of interactive learning.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <feature.icon className="w-6 h-6 text-green-400 mr-3" />
                  <span>{feature.title}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {(() => {
                  const FeatureIcon = features[activeFeature].icon
                  return (
                    <>
                      <FeatureIcon className="w-16 h-16 text-green-400 mx-auto mb-4" />
                      <h3 className="text-xl font-bold mb-2">{features[activeFeature].title}</h3>
                      <p className="text-gray-300">{features[activeFeature].description}</p>
                    </>
                  )
                })()}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Museum?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join the revolution in science education. Implement our AI system and watch as visitor engagement soars
            and operational efficiency reaches new heights.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-500 text-white hover:bg-blue-400 transition-colors duration-300">
              Get Started Today
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}