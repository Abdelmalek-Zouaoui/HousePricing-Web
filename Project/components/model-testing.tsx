"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, AlertCircle } from "lucide-react"

export default function ModelTesting() {
  const testResults = [
    { actual: 12500000, predicted: 11800000, difference: -700000, accuracy: 94.4 },
    { actual: 8900000, predicted: 9200000, difference: 300000, accuracy: 96.6 },
    { actual: 15200000, predicted: 14500000, difference: -700000, accuracy: 95.4 },
    { actual: 6800000, predicted: 7100000, difference: 300000, accuracy: 95.6 },
    { actual: 11000000, predicted: 10600000, difference: -400000, accuracy: 96.4 },
  ]

  const formatPrice = (price: number) => {
    return `$${(price / 1000000).toFixed(1)}M`
  }

  const getAccuracyColor = (accuracy: number) => {
    if (accuracy >= 95) return "text-green-600 dark:text-green-400"
    if (accuracy >= 90) return "text-yellow-600 dark:text-yellow-400"
    return "text-red-600 dark:text-red-400"
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Testing the Model</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real predictions vs actual house prices
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <Card>
            <CardHeader>
              <CardTitle>Prediction Results</CardTitle>
              <CardDescription>Comparison of actual vs predicted house prices on test data</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-3">Actual Price</th>
                      <th className="text-left p-3">Predicted Price</th>
                      <th className="text-left p-3">Difference</th>
                      <th className="text-left p-3">Accuracy</th>
                      <th className="text-left p-3">Status</th>
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
                        className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="p-3 font-semibold">{formatPrice(result.actual)}</td>
                        <td className="p-3 font-semibold text-blue-600 dark:text-blue-400">
                          {formatPrice(result.predicted)}
                        </td>
                        <td
                          className={`p-3 font-medium ${result.difference > 0 ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}
                        >
                          {result.difference > 0 ? "+" : ""}
                          {formatPrice(Math.abs(result.difference))}
                        </td>
                        <td className={`p-3 font-bold ${getAccuracyColor(result.accuracy)}`}>{result.accuracy}%</td>
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
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <CardTitle>Performance Visualization</CardTitle>
                <CardDescription>Actual vs Predicted prices comparison</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Actual vs Predicted scatter plot"
                    className="mx-auto rounded-lg"
                  />
                  <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                    Points close to the diagonal line indicate accurate predictions
                  </p>
                </div>
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
                <CardTitle>Prediction Code</CardTitle>
                <CardDescription>How to make predictions with the trained model</CardDescription>
              </CardHeader>
              <CardContent>
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                  <code>{`# Make predictions on test set
y_pred = model.predict(X_test)

# Compare with actual values
comparison_df = pd.DataFrame({
    'Actual': y_test,
    'Predicted': y_pred,
    'Difference': y_test - y_pred,
    'Accuracy': (1 - abs(y_test - y_pred) / y_test) * 100
})

# Display results
print(comparison_df.head())

# Calculate average accuracy
avg_accuracy = comparison_df['Accuracy'].mean()
print(f"Average Accuracy: {avg_accuracy:.1f}%")`}</code>
                </pre>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Model Performance Analysis</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">95.7%</div>
              <p className="text-gray-600 dark:text-gray-300">Average Accuracy</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">$0.42M</div>
              <p className="text-gray-600 dark:text-gray-300">Average Error</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">100%</div>
              <p className="text-gray-600 dark:text-gray-300">Predictions {">"} 90% Accurate</p>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-center mt-6">
            The model demonstrates strong predictive performance with most predictions within 5% of actual values.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
