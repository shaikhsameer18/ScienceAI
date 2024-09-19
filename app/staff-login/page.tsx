"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LogIn, Lock, User } from "lucide-react";

interface FormData {
  username: string;
  password: string;
}

export default function StaffLogin() {
  const [formData, setFormData] = useState<FormData>({
    username: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Login attempt:", formData);
    // Here you would typically send the login data to a server for authentication
    alert("Login functionality would be implemented here.");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 flex items-center justify-center">
      <div className="w-full max-w-md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="bg-gray-800">
            <CardHeader>
              <CardTitle className="text-3xl font-bold text-center text-blue-400">
                Staff Login
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="username"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Username
                  </label>
                  <div className="relative">
                    <Input
                      id="username"
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 text-white border-gray-600 pl-10"
                    />
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-400 mb-1"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <Input
                      id="password"
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="bg-gray-700 text-white border-gray-600 pl-10"
                    />
                    <Lock
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>
                <Button type="submit" className="w-full">
                  <LogIn className="w-4 h-4 mr-2" />
                  Login
                </Button>
              </form>
              <div className="mt-4 text-center">
                <a href="#" className="text-sm text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
