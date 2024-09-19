'use client'

import { useState, ElementType } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { FileText, Download } from 'lucide-react'

// Define the report type
type ReportType = {
  name: string
  icon: ElementType // Type for React component icons
}

const reportTypes: ReportType[] = [
  { name: 'Visitor Statistics', icon: FileText },
  { name: 'Exhibit Performance', icon: FileText },
  { name: 'Maintenance Logs', icon: FileText },
  { name: 'Financial Summary', icon: FileText },
]

const dummyData = [
  { name: 'Jan', visitors: 4000, revenue: 2400 },
  { name: 'Feb', visitors: 3000, revenue: 1398 },
  { name: 'Mar', visitors: 2000, revenue: 9800 },
  { name: 'Apr', visitors: 2780, revenue: 3908 },
  { name: 'May', visitors: 1890, revenue: 4800 },
  { name: 'Jun', visitors: 2390, revenue: 3800 },
]

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<ReportType | null>(null) // Typing added here

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center text-blue-400"
        >
          Museum Reports
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {reportTypes.map((report, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => setSelectedReport(report)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-blue-400">
                    <report.icon className="w-6 h-6 mr-2" />
                    {report.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">Click to view report</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedReport && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-800 mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-blue-400">{selectedReport.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={dummyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none', color: '#D1D5DB' }} />
                    <Legend />
                    <Bar dataKey="visitors" fill="#3B82F6" name="Visitors" />
                    <Bar dataKey="revenue" fill="#10B981" name="Revenue" />
                  </BarChart>
                </ResponsiveContainer>
                <Button className="mt-4" onClick={() => alert('Downloading report...')}>
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  )
}
