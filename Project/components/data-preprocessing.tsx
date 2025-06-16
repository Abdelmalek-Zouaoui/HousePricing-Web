"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Code, Database, Zap } from "lucide-react"

export default function DataPreprocessing() {
  const sampleData = [
    { area: 7420, bedrooms: 4, bathrooms: 1, stories: 3, parking: 2, price: 13300000 },
    { area: 8960, bedrooms: 4, bathrooms: 4, stories: 4, parking: 3, price: 12250000 },
    { area: 9960, bedrooms: 3, bathrooms: 2, stories: 2, parking: 2, price: 12250000 },
    { area: 7500, bedrooms: 4, bathrooms: 2, stories: 2, parking: 3, price: 12215000 },
    { area: 7420, bedrooms: 4, bathrooms: 1, stories: 3, parking: 2, price: 11410000 },
  ]

  const encodingCode = `# Encoding categorical variables
df_encoded = pd.get_dummies(df, columns=['mainroad', 'guestroom', 'basement', 
                                        'hotwaterheating', 'airconditioning', 
                                        'prefarea', 'furnishingstatus'])

# Scaling numerical features
from sklearn.preprocessing import MinMaxScaler
scaler = MinMaxScaler()
numerical_cols = ['area', 'bedrooms', 'bathrooms', 'stories', 'parking']
df_encoded[numerical_cols] = scaler.fit_transform(df_encoded[numerical_cols])`

  return (
    <section id="preprocessing" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Data Preprocessing</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Cleaning and preparing the data for machine learning
          </p>
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
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                    <Database className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <CardTitle>Sample Dataset</CardTitle>
                </div>
                <CardDescription>First 5 rows of our house price dataset</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Area</th>
                        <th className="text-left p-2">Bedrooms</th>
                        <th className="text-left p-2">Bathrooms</th>
                        <th className="text-left p-2">Stories</th>
                        <th className="text-left p-2">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleData.map((row, index) => (
                        <motion.tr
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          className="border-b hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <td className="p-2">{row.area.toLocaleString()}</td>
                          <td className="p-2">{row.bedrooms}</td>
                          <td className="p-2">{row.bathrooms}</td>
                          <td className="p-2">{row.stories}</td>
                          <td className="p-2 font-semibold text-green-600">${row.price.toLocaleString()}</td>
                        </motion.tr>
                      ))}
                    </tbody>
                  </table>
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
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                    <Zap className="h-6 w-6 text-green-600 dark:text-green-400" />
                  </div>
                  <CardTitle>Preprocessing Steps</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 dark:text-blue-400 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Handle Missing Values</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Check and clean null values</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                    <span className="text-green-600 dark:text-green-400 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Encode Categorical Variables</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Use get_dummies for one-hot encoding</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 dark:text-purple-400 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Scale Numerical Features</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">MinMaxScaler for normalization</p>
                  </div>
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
        >
          <Tabs defaultValue="code" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="code">Code Implementation</TabsTrigger>
              <TabsTrigger value="explanation">Explanation</TabsTrigger>
            </TabsList>

            <TabsContent value="code">
              <Card>
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <Code className="h-5 w-5" />
                    <CardTitle>Preprocessing Code</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto text-sm">
                    <code>{encodingCode}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="explanation">
              <Card>
                <CardHeader>
                  <CardTitle>Why These Steps Matter</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-blue-600 dark:text-blue-400">One-Hot Encoding</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Converts categorical variables like 'yes/no' into numerical format (0/1) that machine learning
                      algorithms can understand.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-green-600 dark:text-green-400">MinMax Scaling</h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      Normalizes numerical features to a 0-1 range, preventing features with larger values from
                      dominating the model.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
