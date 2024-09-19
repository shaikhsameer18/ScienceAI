'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line, ScatterChart, Scatter, ZAxis } from 'recharts'
import { AlertTriangle, CheckCircle, Activity, Users } from 'lucide-react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ExhibitData {
  name: string;
  working: number;
  defective: number;
  usage: number;
  maintenanceTime: number;
  defectFrequency: number;
}

interface VisitorData {
  time: string;
  visitors: number;
}

const generateRandomData = (): ExhibitData[] => {
  const categories = ['Physics', 'Chemistry', 'Biology', 'Astronomy', 'Robotics']
  return categories.map(category => ({
    name: category,
    working: Math.floor(Math.random() * 50) + 50,
    defective: Math.floor(Math.random() * 10),
    usage: Math.floor(Math.random() * 1000) + 500,
    maintenanceTime: Math.floor(Math.random() * 60) + 30,
    defectFrequency: Math.floor(Math.random() * 20) + 1
  }))
}

const COLORS = ['#00C49F', '#FFBB28', '#FF8042', '#0088FE', '#FF0000']

export default function Dashboard() {
  const [data, setData] = useState<ExhibitData[]>(generateRandomData())
  const [totalVisitors, setTotalVisitors] = useState(0)
  const [visitorHistory, setVisitorHistory] = useState<VisitorData[]>([])
  const [timeRange, setTimeRange] = useState('day')
  const [defectView, setDefectView] = useState('category')

  useEffect(() => {
    const interval = setInterval(() => {
      setData(generateRandomData())
      const newVisitors = Math.floor(Math.random() * 10)
      setTotalVisitors(prev => prev + newVisitors)
      setVisitorHistory(prev => [...prev, { time: new Date().toLocaleTimeString(), visitors: newVisitors }].slice(-10))
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const totalExhibits = data.reduce((sum, item) => sum + item.working + item.defective, 0)
  const workingExhibits = data.reduce((sum, item) => sum + item.working, 0)
  const defectiveExhibits = totalExhibits - workingExhibits

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400"
        >
          Real-Time Monitoring Dashboard
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Activity className="w-6 h-6 text-green-400 mr-2" />
                Overall Status
              </h2>
              <div className="text-4xl font-bold mb-2">
                {((workingExhibits / totalExhibits) * 100).toFixed(1)}%
              </div>
              <p className="text-gray-400">Exhibits Operational</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-500/20 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                Defective Exhibits
              </h2>
              <div className="text-4xl font-bold mb-2">{defectiveExhibits}</div>
              <p className="text-gray-400">Require Attention</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-0"></div>
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-400 mr-2" />
                Total Visitors Today
              </h2>
              <div className="text-4xl font-bold mb-2">{totalVisitors}</div>
              <p className="text-gray-400">And Counting</p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Exhibit Status by Category</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  itemStyle={{ color: '#D1D5DB' }}
                />
                <Legend />
                <Bar dataKey="working" fill="#10B981" name="Working" />
                <Bar dataKey="defective" fill="#EF4444" name="Defective" />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <h2 className="text-2xl font-bold mb-4">Exhibit Usage Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={data}
                  dataKey="usage"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#8884d8"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  itemStyle={{ color: '#D1D5DB' }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Visitor Trend</h2>
            <Select value={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select time range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="day">Last 24 Hours</SelectItem>
                <SelectItem value="week">Last Week</SelectItem>
                <SelectItem value="month">Last Month</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={visitorHistory}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis dataKey="time" stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                itemStyle={{ color: '#D1D5DB' }}
              />
              <Line type="monotone" dataKey="visitors" stroke="#3B82F6" />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg mb-12"
        >
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Defect Analysis</h2>
            <Select value={defectView} onValueChange={setDefectView}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select view" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="category">By Category</SelectItem>
                <SelectItem value="time">By Maintenance Time</SelectItem>
                <SelectItem value="frequency">By Frequency</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            {defectView === 'category' ? (
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  itemStyle={{ color: '#D1D5DB' }}
                />
                <Legend />
                <Bar dataKey="defective" fill="#EF4444" name="Defective Exhibits" />
              </BarChart>
            ) : defectView === 'time' ? (
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="maintenanceTime" name="Maintenance Time (minutes)" stroke="#9CA3AF" />
                <YAxis dataKey="defective" name="Defective Exhibits" stroke="#9CA3AF" />
                <ZAxis dataKey="name" name="Category" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  itemStyle={{ color: '#D1D5DB' }}
                />
                <Legend />
                <Scatter name="Exhibits" data={data} fill="#8884d8" />
              </ScatterChart>
            ) : (
              <ScatterChart>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="defectFrequency" name="Defect Frequency" stroke="#9CA3AF" />
                <YAxis dataKey="defective" name="Defective Exhibits" stroke="#9CA3AF" />
                <ZAxis dataKey="name" name="Category" />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  contentStyle={{ backgroundColor: '#1F2937', border: 'none' }}
                  itemStyle={{ color: '#D1D5DB' }}
                />
                <Legend />
                <Scatter name="Exhibits" data={data} fill="#8884d8" />
              </ScatterChart>
            )}
          </ResponsiveContainer>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="bg-gray-800 p-6 rounded-lg shadow-lg"
        >
          <h2 className="text-2xl font-bold mb-4">Recent Alerts</h2>
          <ul className="space-y-4">
            {data.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center"
              >
                {item.defective > 0 ? (
                  <AlertTriangle className="w-6 h-6 text-yellow-400 mr-2" />
                ) : (
                  <CheckCircle className="w-6 h-6 text-green-400 mr-2" />
                )}
                <span>
                  {item.name}: {item.defective > 0 ? `${item.defective} exhibits need attention` : 'All exhibits operational'}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  )
}