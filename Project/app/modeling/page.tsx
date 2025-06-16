"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CheckCircle, XCircle, Target, TrendingDown, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function ModelingPage() {
  const selectedFeatures = [
    { name: "area", importance: 0.67, selected: true },
    { name: "bathrooms", importance: 0.45, selected: true },
    { name: "stories", importance: 0.32, selected: true },
    { name: "parking", importance: 0.28, selected: true },
    { name: "airconditioning", importance: 0.25, selected: true },
    { name: "prefarea", importance: 0.22, selected: true },
  ]

  const droppedFeatures = [
    { name: "bedrooms", reason: "High VIF (>5)", vif: 6.2 },
    { name: "guestroom", reason: "Low correlation", vif: 2.1 },
    { name: "basement", reason: "Multicollinearity", vif: 5.8 },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-800">
      <Navigation />

      <div className="pt-20">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                Feature Selection & Model Building
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Using RFE and VIF analysis to select the most important features
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                      </div>
                      <CardTitle>Selected Features</CardTitle>
                    </div>
                    <CardDescription>Features chosen by RFE with high importance scores</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {selectedFeatures.map((feature, index) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400" />
                            <span className="font-medium capitalize">{feature.name}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <motion.div
                                className="bg-green-600 h-2 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${feature.importance * 100}%` }}
                                transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                              />
                            </div>
                            <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                              {feature.importance.toFixed(2)}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-red-100 dark:bg-red-900 rounded-lg">
                        <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                      </div>
                      <CardTitle>Dropped Features</CardTitle>
                    </div>
                    <CardDescription>Features removed due to multicollinearity or low importance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {droppedFeatures.map((feature, index) => (
                        <motion.div
                          key={feature.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-lg"
                        >
                          <div className="flex items-center space-x-3">
                            <XCircle className="h-4 w-4 text-red-600 dark:text-red-400" />
                            <span className="font-medium capitalize line-through">{feature.name}</span>
                          </div>
                          <div className="text-right">
                            <Badge variant="destructive" className="text-xs">
                              VIF: {feature.vif}
                            </Badge>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{feature.reason}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                      <CardTitle>RFE Process</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        "Start with all features",
                        "Train model and rank features",
                        "Remove least important feature",
                        "Repeat until optimal set found",
                      ].map((step, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">{index + 1}</span>
                          </div>
                          <p className="text-sm">{step}</p>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                        <TrendingDown className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                      </div>
                      <CardTitle>VIF Analysis</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">What is VIF?</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Variance Inflation Factor measures multicollinearity between features.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">VIF Thresholds</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>VIF {"<"} 5</span>
                            <Badge variant="secondary" className="bg-green-100 text-green-800">
                              Good
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>VIF 5-10</span>
                            <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">
                              Moderate
                            </Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>VIF {">"} 10</span>
                            <Badge variant="destructive">High</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Final Model Features</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg mb-4">
                After RFE and VIF analysis, we selected 6 key features that provide the best balance of predictive power
                and model interpretability.
              </p>
              <div className="flex flex-wrap gap-2">
                {selectedFeatures.map((feature) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <Badge variant="secondary" className="text-sm px-3 py-1">
                      {feature.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-between items-center"
            >
              <Link href="/analysis">
                <Button
                  variant="outline"
                  className="group border-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Analysis
                </Button>
              </Link>

              <Link href="/results">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Next: View Results
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}
