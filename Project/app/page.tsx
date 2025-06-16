"use client"

import { motion } from "framer-motion"
import { Play, TrendingUp, ArrowRight, Database, BarChart3, Target, Brain, Download, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  const navigationItems = [
    { href: "/overview", icon: Database, title: "Project Overview", description: "Problem statement and dataset" },
    {
      href: "/preprocessing",
      icon: TrendingUp,
      title: "Data Preprocessing",
      description: "Cleaning and preparing data",
    },
    { href: "/analysis", icon: BarChart3, title: "Data Analysis", description: "EDA and visualizations" },
    { href: "/modeling", icon: Target, title: "Model Building", description: "Feature selection and training" },
    { href: "/results", icon: TrendingUp, title: "Results", description: "Model performance and testing" },
    { href: "/concepts", icon: Brain, title: "Learn Concepts", description: "ML concepts explained" },
    { href: "/downloads", icon: Download, title: "Downloads", description: "Get project resources" },
    { href: "/about", icon: User, title: "About", description: "About the author" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            🏠 ML Project
          </motion.div>

          <ThemeToggle />
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              🏠 House Price Prediction
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                with Machine Learning
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Explore how Linear Regression can predict house prices using real estate data.
              <br />A comprehensive journey through data science and machine learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            >
              <Link href="/overview">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Learning
                </Button>
              </Link>

              <Link href="/results">
                <Button
                  variant="outline"
                  size="lg"
                  className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group"
                >
                  <TrendingUp className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Results
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Navigation Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Explore the Project</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {navigationItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1, duration: 0.6 }}
                >
                  <Link href={item.href}>
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700 cursor-pointer">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 rounded-xl group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        </div>
                        <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0],
              }}
              transition={{
                duration: 6,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/4 left-1/4 w-20 h-20 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, 20, 0],
                rotate: [0, -5, 0],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute top-1/3 right-1/4 w-16 h-16 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                x: [0, 10, 0],
              }}
              transition={{
                duration: 7,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="absolute bottom-1/4 left-1/3 w-12 h-12 bg-green-200 dark:bg-green-800 rounded-full opacity-20"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
