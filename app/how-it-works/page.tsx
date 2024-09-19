'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, Database, AlertTriangle, BarChart, ChevronRight, ChevronLeft, ArrowRight, Zap, Package } from 'lucide-react'
import { Button } from "@/components/ui/button"

const steps = [
  { 
    icon: Cpu, 
    title: 'Data Collection', 
    description: 'Advanced sensors continuously gather data from exhibits, monitoring performance metrics, user interactions, and environmental factors.',
    color: 'text-blue-400'
  },
  { 
    icon: Database, 
    title: 'Data Processing', 
    description: 'Collected data is processed and stored in our secure database for further analysis.',
    color: 'text-green-400'
  },
  { 
    icon: Zap, 
    title: 'AI Analysis', 
    description: 'Our sophisticated AI algorithms process the data in real-time, identifying patterns and anomalies that may indicate potential issues.',
    color: 'text-yellow-400'
  },
  { 
    icon: AlertTriangle, 
    title: 'Defect Detection', 
    description: 'The system instantly flags potential problems, categorizing them by severity and type, ensuring rapid response to critical issues.',
    color: 'text-red-400'
  },
  { 
    icon: Package, 
    title: 'Maintenance Dispatch', 
    description: 'Based on detected issues, maintenance teams are automatically notified and dispatched to address problems.',
    color: 'text-purple-400'
  },
  { 
    icon: BarChart, 
    title: 'Reporting & Insights', 
    description: 'Comprehensive reports and actionable insights are generated, allowing staff to make data-driven decisions for maintenance and improvements.',
    color: 'text-indigo-400'
  },
]

const defectTypes = [
  { 
    name: 'Interactive Exhibit Malfunctions',
    description: 'Issues with user-interactive elements of science exhibits.',
    examples: ['Unresponsive touch screens', 'Malfunctioning buttons or levers', 'Frozen digital displays']
  },
  {
    name: 'Mechanical Failures in Moving Exhibits',
    description: 'Problems with kinetic or mechanical science demonstrations.',
    examples: ['Stuck gears in planetary models', 'Faulty pulleys in physics exhibits', 'Malfunctioning robotics displays']
  },
  {
    name: 'Environmental Control Issues',
    description: 'Problems maintaining proper conditions for sensitive exhibits.',
    examples: ['Temperature fluctuations in biodome exhibits', 'Humidity issues in preserved specimen displays', 'Lighting failures in photosensitive exhibits']
  },
  {
    name: 'Audio-Visual Equipment Failures',
    description: 'Malfunctions in multimedia and presentation systems.',
    examples: ['Projector failures in planetarium shows', 'Audio system glitches in interactive exhibits', 'Malfunctioning VR/AR equipment']
  },
  {
    name: 'Safety Mechanism Failures',
    description: 'Issues with systems designed to ensure visitor safety.',
    examples: ['Faulty emergency shut-off switches', 'Malfunctioning safety barriers', 'Defective smoke or gas detectors in chemistry exhibits']
  },
  {
    name: 'Power Supply Disruptions',
    description: 'Problems with electrical systems powering exhibits.',
    examples: ['Intermittent power failures', 'Electrical surges damaging sensitive equipment', 'Battery depletion in mobile exhibits']
  },
]

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0)
  const [selectedDefect, setSelectedDefect] = useState<number | null>(null)

  const nextStep = () => setCurrentStep((prev) => (prev + 1) % steps.length)
  const prevStep = () => setCurrentStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
        >
          How It Works
        </motion.h1>

        <div className="mb-16">
          <div className="relative h-96 bg-gray-800 rounded-lg overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-green-500/20 z-0"></div>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex items-center justify-center p-8"
              >
                <div className="text-center relative z-10">
                  {(() => {
                    const StepIcon = steps[currentStep].icon
                    return (
                      <>
                        <StepIcon className={`w-24 h-24 ${steps[currentStep].color} mx-auto mb-4`} />
                        <h2 className="text-3xl font-bold mb-4">{steps[currentStep].title}</h2>
                        <p className="text-gray-300 max-w-2xl">{steps[currentStep].description}</p>
                      </>
                    )
                  })()}
                </div>
              </motion.div>
            </AnimatePresence>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 transform -translate-y-1/2"
              onClick={prevStep}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2"
              onClick={nextStep}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
          <div className="flex justify-center space-x-2">
            {steps.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full ${index === currentStep ? 'bg-green-400' : 'bg-gray-600'}`}
                animate={{ scale: index === currentStep ? 1.2 : 1 }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">AI-Powered Defect Detection Flow</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {steps.map((step, index) => (
                <>
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${index === currentStep ? 'bg-gray-700' : 'bg-gray-700'}`}>
                      <step.icon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">{step.title}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <ArrowRight className="w-6 h-6 text-gray-500" />
                  )}
                </>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-gray-800 p-8 rounded-lg shadow-lg relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10 z-0"></div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-6">Types of Defects We Detect</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {defectTypes.map((defect, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-gray-700 p-4 rounded-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer ${selectedDefect === index ? 'ring-2 ring-green-400' : ''}`}
                  onClick={() => setSelectedDefect(index)}
                >
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mb-2" />
                  <h3 className="font-semibold">{defect.name}</h3>
                </motion.div>
              ))}
            </div>
            <AnimatePresence>
              {selectedDefect !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mt-8 bg-gray-700 p-6 rounded-lg"
                >
                  <h3 className="text-xl font-bold mb-2">{defectTypes[selectedDefect].name}</h3>
                  <p className="text-gray-300 mb-4">{defectTypes[selectedDefect].description}</p>
                  <h4 className="font-semibold mb-2">Common Examples:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    {defectTypes[selectedDefect].examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
