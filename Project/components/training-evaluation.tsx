"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { TrendingUp, Target, BarChart3, Activity } from "lucide-react"
import { useEffect, useState } from "react"

export default function TrainingEvaluation() {
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedMetrics(finalMetrics)
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  const formatNumber = (num: number) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + "B"
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M"
    }
    return num.toLocaleString()
  }

  return (
    <section id="results" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Training & Evaluation</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Model performance metrics and evaluation results
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-blue-100 dark:bg-blue-900 rounded-lg w-fit">
                  <Target className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">MAE</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-blue-600 dark:text-blue-400"
                >
                  ${formatNumber(animatedMetrics.mae)}
                </motion.div>
                <p className="text-xs text-gray-500 mt-1">Mean Absolute Error</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-green-100 dark:bg-green-900 rounded-lg w-fit">
                  <BarChart3 className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">MSE</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-green-600 dark:text-green-400"
                >
                  {formatNumber(animatedMetrics.mse)}
                </motion.div>
                <p className="text-xs text-gray-500 mt-1">Mean Squared Error</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-purple-100 dark:bg-purple-900 rounded-lg w-fit">
                  <TrendingUp className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">RMSE</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-purple-600 dark:text-purple-400"
                >
                  ${formatNumber(animatedMetrics.rmse)}
                </motion.div>
                <p className="text-xs text-gray-500 mt-1">Root Mean Squared Error</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto p-3 bg-orange-100 dark:bg-orange-900 rounded-lg w-fit">
                  <Activity className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-sm text-gray-600 dark:text-gray-400">R² Score</CardTitle>
              </CardHeader>
              <CardContent>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-orange-600 dark:text-orange-400"
                >
                  {animatedMetrics.r2.toFixed(2)}
                </motion.div>
                <p className="text-xs text-gray-500 mt-1">Coefficient of Determination</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Model Training Code</CardTitle>
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
            <Card>
              <CardHeader>
                <CardTitle>Residual Analysis</CardTitle>
                <CardDescription>Distribution of prediction errors</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                  <img src="/placeholder.svg?height=250&width=400" alt="Residual plot" className="mx-auto rounded-lg" />
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Residuals show normal distribution with slight heteroscedasticity
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Model Performance Summary</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Strengths</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• R² of 0.67 indicates good predictive power</li>
                <li>• MAE of $1.25M is reasonable for house prices</li>
                <li>• Model explains 67% of price variance</li>
                <li>• Fast training and prediction times</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Areas for Improvement</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Some heteroscedasticity in residuals</li>
                <li>• Could benefit from feature engineering</li>
                <li>• Non-linear relationships not captured</li>
                <li>• Outliers may affect predictions</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
