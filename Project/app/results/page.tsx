"use client"

import { motion, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { TrendingUp, Target, BarChart3, Activity, CheckCircle, AlertCircle, ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import { useEffect, useState, useRef } from "react"

// Animated Counter Component
function AnimatedCounter({
  end,
  duration = 2000,
  prefix = "",
  suffix = "",
}: { end: number; duration?: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / duration, 1)

        setCount(Math.floor(progress * end))

        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      requestAnimationFrame(animate)
    }
  }, [isInView, end, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Animated Progress Bar
function AnimatedProgressBar({ value, color = "blue", delay = 0 }: { value: number; color?: string; delay?: number }) {
  return (
    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
      <motion.div
        className={`bg-gradient-to-r from-${color}-500 to-${color}-600 h-3 rounded-full`}
        initial={{ width: 0 }}
        whileInView={{ width: `${value}%` }}
        transition={{ duration: 1.5, delay, ease: "easeOut" }}
        viewport={{ once: true }}
      />
    </div>
  )
}

export default function ResultsPage() {
  const [animatedMetrics, setAnimatedMetrics] = useState({
    mae: 0,
    mse: 0,
    rmse: 0,
    r2: 0,
  })

  const finalMetrics = {
    mae: 1250000,
    mse: 2890000000000,
    rmse: 1700000,
    r2: 0.67,
  }

  const testResults = [
    { actual: 12500000, predicted: 11800000, difference: -700000, accuracy: 94.4 },
    { actual: 8900000, predicted: 9200000, difference: 300000, accuracy: 96.6 },
    { actual: 15200000, predicted: 14500000, difference: -700000, accuracy: 95.4 },
    { actual: 6800000, predicted: 7100000, difference: 300000, accuracy: 95.6 },
    { actual: 11000000, predicted: 10600000, difference: -400000, accuracy: 96.4 },
  ]

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    return num.toLocaleString()
  }

  const formatPrice = (price: number) => {
    return `$${(price / 1000000).toFixed(1)}M`
  }

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return "text-green-600 dark:text-green-400"
    if (accuracy >= 90) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
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
                Training & Evaluation Results
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Comprehensive model performance metrics and evaluation results
              </p>
            </motion.div>

            {/* Animated Metrics Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-blue-200 dark:border-blue-700">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full w-fit shadow-lg">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Mean Absolute Error</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      $<AnimatedCounter end={1.25} suffix="M" />
                    </div>
                    <AnimatedProgressBar value={75} color="blue" delay={0.5} />
                    <p className="text-xs text-gray-500 mt-2">Average prediction error</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 border-green-200 dark:border-green-700">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-to-r from-green-500 to-green-600 rounded-full w-fit shadow-lg">
                      <BarChart3 className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Mean Squared Error</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                      <AnimatedCounter end={2.89} suffix="B" />
                    </div>
                    <AnimatedProgressBar value={60} color="green" delay={0.7} />
                    <p className="text-xs text-gray-500 mt-2">Squared error metric</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 border-purple-200 dark:border-purple-700">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full w-fit shadow-lg">
                      <TrendingUp className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-sm text-gray-600 dark:text-gray-400">Root Mean Squared Error</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      $<AnimatedCounter end={1.7} suffix="M" />
                    </div>
                    <AnimatedProgressBar value={70} color="purple" delay={0.9} />
                    <p className="text-xs text-gray-500 mt-2">Standard deviation of errors</p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 border-orange-200 dark:border-orange-700">
                  <CardHeader>
                    <div className="mx-auto p-4 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full w-fit shadow-lg">
                      <Activity className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-sm text-gray-600 dark:text-gray-400">R² Score</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      <AnimatedCounter end={67} suffix="%" />
                    </div>
                    <AnimatedProgressBar value={67} color="orange" delay={1.1} />
                    <p className="text-xs text-gray-500 mt-2">Variance explained</p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Model Training Code and Visualization */}
            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                        <BarChart3 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <span>Model Training Code</span>
                    </CardTitle>
                    <CardDescription>Linear Regression implementation using scikit-learn</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                      <code>{`from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error, mean_squared_error, r2_score

# Split the data
X_train, X_test, y_train, y_test = train_test_split(
    X_selected, y, test_size=0.2, random_state=42
)

# Train the model
model = LinearRegression()
model.fit(X_train, y_train)

# Make predictions
y_pred = model.predict(X_test)

# Calculate metrics
mae = mean_absolute_error(y_test, y_pred)
mse = mean_squared_error(y_test, y_pred)
rmse = np.sqrt(mse)
r2 = r2_score(y_test, y_pred)`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                        <Activity className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <span>Residual Analysis</span>
                    </CardTitle>
                    <CardDescription>Distribution of prediction errors</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 rounded-lg p-8 text-center">
                      <motion.img
                        src="/placeholder.svg?height=250&width=400"
                        alt="Residual plot"
                        className="mx-auto rounded-lg shadow-md"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                      />
                      <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                        Residuals show normal distribution with slight heteroscedasticity
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Model Testing Results */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Model Testing Results</CardTitle>
                  <CardDescription>Real predictions vs actual house prices on test data</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b">
                          <th className="text-left p-3 font-semibold">Actual Price</th>
                          <th className="text-left p-3 font-semibold">Predicted Price</th>
                          <th className="text-left p-3 font-semibold">Difference</th>
                          <th className="text-left p-3 font-semibold">Accuracy</th>
                          <th className="text-left p-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        {testResults.map((result, index) => (
                          <motion.tr
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="border-b hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                          >
                            <td className="p-3 font-semibold text-lg">{formatPrice(result.actual)}</td>
                            <td className="p-3 font-semibold text-lg text-blue-600 dark:text-blue-400">
                              {formatPrice(result.predicted)}
                            </td>
                            <td
                              className={`p-3 font-medium ${
                                result.difference > 0
                                  ? "text-green-600 dark:text-green-400"
                                  : "text-red-600 dark:text-red-400"
                              }`}
                            >
                              {result.difference > 0 ? "+" : ""}
                              {formatPrice(Math.abs(result.difference))}
                            </td>
                            <td className={`p-3 font-bold text-lg ${getAccuracyColor(result.accuracy)}`}>
                              <AnimatedCounter end={result.accuracy} suffix="%" />
                            </td>
                            <td className="p-3">
                              {result.accuracy >= 95 ? (
                                <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                  <CheckCircle className="w-3 h-3 mr-1" />
                                  Excellent
                                </Badge>
                              ) : (
                                <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                  <AlertCircle className="w-3 h-3 mr-1" />
                                  Good
                                </Badge>
                              )}
                            </td>
                          </motion.tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Performance Summary */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 mb-12"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                Model Performance Analysis
              </h3>
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter end={95.7} suffix="%" />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Average Accuracy</p>
                  <AnimatedProgressBar value={95.7} color="blue" delay={0.5} />
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    $<AnimatedCounter end={0.42} suffix="M" />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Average Error</p>
                  <AnimatedProgressBar value={85} color="green" delay={0.6} />
                </div>
                <div className="text-center">
                  <motion.div
                    className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <AnimatedCounter end={100} suffix="%" />
                  </motion.div>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">Predictions {">"} 90% Accurate</p>
                  <AnimatedProgressBar value={100} color="purple" delay={0.7} />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-green-600 dark:text-green-400 mb-3 text-lg">Model Strengths</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>R² of 0.67 indicates good predictive power</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>MAE of $1.25M is reasonable for house prices</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Model explains 67% of price variance</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Fast training and prediction times</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-3 text-lg">Areas for Improvement</h4>
                  <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <span>Some heteroscedasticity in residuals</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <span>Could benefit from feature engineering</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <span>Non-linear relationships not captured</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <AlertCircle className="h-4 w-4 text-blue-500" />
                      <span>Outliers may affect predictions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-between items-center"
            >
              <Link href="/modeling">
                <Button
                  variant="outline"
                  className="group border-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Modeling
                </Button>
              </Link>

              <Link href="/concepts">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Next: Learn Concepts
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
