"use client";

import { useState, ElementType } from "react"; // Import types as needed
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Zap,
  Globe,
  Dna,
  Atom,
  Cpu,
  Lightbulb,
  PieChart,
  History,
} from "lucide-react";

// Define the exhibit type
type Exhibit = {
  name: string;
  icon: ElementType; // Type for React component
  status: "Operational" | "Maintenance" | "Defective"; // Allowed status values
};

const exhibits: Exhibit[] = [
  { name: "Physics and Mechanics", icon: Zap, status: "Operational" },
  { name: "Space and Astronomy", icon: Globe, status: "Maintenance" },
  { name: "Biology and Human Body", icon: Dna, status: "Operational" },
  { name: "Chemistry", icon: Atom, status: "Operational" },
  { name: "Robotics and Technology", icon: Cpu, status: "Defective" },
  { name: "Energy and Environment", icon: Lightbulb, status: "Operational" },
  { name: "Mathematics", icon: PieChart, status: "Operational" },
  { name: "History of Science", icon: History, status: "Operational" },
];

export default function Exhibits() {
  const [selectedExhibit, setSelectedExhibit] = useState<Exhibit | null>(null); // Use Exhibit type

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold mb-12 text-center text-blue-400"
        >
          Museum Exhibits
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibits.map((exhibit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card
                className="bg-gray-800 hover:bg-gray-700 transition-colors cursor-pointer"
                onClick={() => setSelectedExhibit(exhibit)}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-bold text-blue-400">
                    <exhibit.icon className="w-6 h-6 mr-2" />
                    {exhibit.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-lg ${
                      exhibit.status === "Operational"
                        ? "text-green-400"
                        : exhibit.status === "Maintenance"
                        ? "text-yellow-400"
                        : "text-red-400"
                    }`}
                  >
                    Status: {exhibit.status}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {selectedExhibit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
          >
            <Card className="bg-gray-800 w-full max-w-md">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-bold text-blue-400">
                  <selectedExhibit.icon className="w-8 h-8 mr-2" />
                  {selectedExhibit.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg mb-4">Status: {selectedExhibit.status}</p>
                <p className="text-gray-400 mb-4">
                  This is a detailed view of the {selectedExhibit.name} exhibit.
                  Here you can find more information about its current status,
                  maintenance history, and visitor interactions.
                </p>
                <Button onClick={() => setSelectedExhibit(null)}>Close</Button>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </div>
    </div>
  );
}
