"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Activity, Target } from "lucide-react"

export default function EDASection() {
  return (
    <section id="eda" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Exploratory Data Analysis
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding patterns and relationships in our housing data
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {[
            { icon: BarChart3, title: "Boxplots", desc: "Categorical vs Price", color: "blue" },
            { icon: TrendingUp, title: "Scatter Plots", desc: "Numerical vs Price", color: "green" },
            { icon: Activity, title: "Correlation Heatmap", desc: "Feature Relationships", color: "purple" },
            { icon: Target, title: "Pairplot", desc: "Feature Distributions", color: "orange" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className={`mx-auto p-3 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-lg w-fit`}>
                    <item.icon className={`h-6 w-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.desc}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="boxplot" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="boxplot">Boxplots</TabsTrigger>
              <TabsTrigger value="scatter">Scatter</TabsTrigger>
              <TabsTrigger value="correlation">Correlation</TabsTrigger>
              <TabsTrigger value="pairplot">Pairplot</TabsTrigger>
            </TabsList>

            <TabsContent value="boxplot">
              <Card>
                <CardHeader>
                  <CardTitle>Categorical Features vs Price</CardTitle>
                  <CardDescription>Boxplots showing price distribution across different categories</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Boxplot visualization"
                      className="mx-auto rounded-lg"
                    />
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      Houses with air conditioning and preferred areas show higher price ranges
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="scatter">
              <Card>
                <CardHeader>
                  <CardTitle>Numerical Features vs Price</CardTitle>
                  <CardDescription>Scatter plots revealing linear relationships</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                    <img
                      src="/placeholder.svg?height=300&width=600"
                      alt="Scatter plot visualization"
                      className="mx-auto rounded-lg"
                    />
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      Strong positive correlation between area and price
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="correlation">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Correlation Heatmap</CardTitle>
                  <CardDescription>Understanding relationships between all features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                    <img
                      src="/placeholder.svg?height=400&width=500"
                      alt="Correlation heatmap"
                      className="mx-auto rounded-lg"
                    />
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      Area shows the strongest correlation with price (0.67)
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="pairplot">
              <Card>
                <CardHeader>
                  <CardTitle>Feature Pairplot</CardTitle>
                  <CardDescription>Distribution and relationships between key features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-8 text-center">
                    <img
                      src="/placeholder.svg?height=400&width=600"
                      alt="Pairplot visualization"
                      className="mx-auto rounded-lg"
                    />
                    <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                      Clear patterns emerge between area, bedrooms, and price
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Insights from EDA</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Strong Predictors</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• Area has the strongest correlation with price</li>
                <li>• Air conditioning significantly increases value</li>
                <li>• Preferred areas command premium prices</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-green-600 dark:text-green-400 mb-2">Data Quality</h4>
              <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                <li>• No missing values detected</li>
                <li>• Normal distribution of price data</li>
                <li>• Minimal outliers requiring attention</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
