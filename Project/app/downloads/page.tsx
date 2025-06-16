"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Code, Database, Github, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function DownloadsPage() {
  const downloads = [
    {
      icon: Database,
      title: "Housing Dataset (CSV)",
      description: "Original house price dataset with 545 records and 13 features",
      size: "28 KB",
      color: "green",
      features: ["545 House Records", "13 Features", "Clean Data", "Ready for Analysis"],
      downloadUrl: "/data/Housing.csv",
      type: "dataset",
    },
    {
      icon: Code,
      title: "Python Source Code",
      description: "Complete machine learning pipeline implementation",
      size: "15 KB",
      color: "blue",
      features: ["Data Preprocessing", "Feature Selection", "Model Training", "Evaluation Metrics"],
      downloadUrl: "/code/LinearRegressionModel.py",
      type: "code",
    },
    {
      icon: FileText,
      title: "Jupyter Notebook",
      description: "Interactive notebook with visualizations and analysis",
      size: "2.1 MB",
      color: "orange",
      features: ["Step-by-step Code", "Data Visualizations", "Model Insights", "Reproducible Results"],
      downloadUrl: "https://github.com/Abdelmalek-Zouaoui/House.prices-linear-regresion",
      type: "notebook",
    },
    {
      icon: Github,
      title: "Complete Repository",
      description: "Full project repository with all files and documentation",
      size: "5.2 MB",
      color: "purple",
      features: ["All Source Files", "Documentation", "Requirements", "Examples"],
      downloadUrl: "https://github.com/Abdelmalek-Zouaoui/House.prices-linear-regresion",
      type: "repository",
    },
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">Download Resources</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get the actual dataset, source code, and documentation used in this project
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
              {downloads.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
                    <CardHeader className="text-center pb-4">
                      <div
                        className={`mx-auto p-6 bg-gradient-to-r from-${item.color}-100 to-${item.color}-200 dark:from-${item.color}-900 dark:to-${item.color}-800 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <item.icon className={`h-12 w-12 text-${item.color}-600 dark:text-${item.color}-400`} />
                      </div>
                      <CardTitle className="text-2xl mt-4">{item.title}</CardTitle>
                      <CardDescription className="text-base">{item.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">File Size:</span>
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{item.size}</span>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Includes:</h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center">
                                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2" />
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {item.type === "dataset" || item.type === "code" ? (
                          <Button
                            className="w-full mt-4 group-hover:shadow-lg transition-all duration-300"
                            size="lg"
                            asChild
                          >
                            <a href={item.downloadUrl} download>
                              <Download className="mr-2 h-4 w-4" />
                              Download {item.title}
                            </a>
                          </Button>
                        ) : (
                          <Button
                            className="w-full mt-4 group-hover:shadow-lg transition-all duration-300"
                            size="lg"
                            asChild
                          >
                            <a href={item.downloadUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-4 w-4" />
                              View on GitHub
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Dataset Preview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-16"
            >
              <Card className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl">Dataset Information</CardTitle>
                  <CardDescription>Housing.csv - Real estate data for price prediction</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Dataset Features</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">price</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">area</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">bedrooms</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">bathrooms</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">stories</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">mainroad</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">guestroom</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">basement</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">hotwaterheating</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">airconditioning</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">parking</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">prefarea</div>
                        <div className="bg-white dark:bg-gray-800 p-2 rounded">furnishingstatus</div>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Code Highlights</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Comprehensive EDA with visualizations</li>
                        <li>• Feature engineering and encoding</li>
                        <li>• RFE for feature selection</li>
                        <li>• VIF analysis for multicollinearity</li>
                        <li>• Model evaluation with multiple metrics</li>
                        <li>• Train/test split and validation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Complete Package */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center mb-16"
            >
              <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border-2 border-blue-200 dark:border-blue-700">
                <CardHeader>
                  <div className="mx-auto p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-fit mb-4">
                    <Github className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-3xl">Complete Project Repository</CardTitle>
                  <CardDescription className="text-lg">
                    Access the full project with all files, documentation, and version history
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-blue-600 dark:text-blue-400 mb-2">Repository Contents</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Original dataset (Housing.csv)</li>
                        <li>• Complete Python source code</li>
                        <li>• Jupyter notebook with analysis</li>
                        <li>• Requirements and documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-600 dark:text-purple-400 mb-2">Perfect For</h4>
                      <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        <li>• Learning machine learning</li>
                        <li>• Portfolio projects</li>
                        <li>• Research and education</li>
                        <li>• Code reference</li>
                      </ul>
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                    asChild
                  >
                    <a
                      href="https://github.com/Abdelmalek-Zouaoui/House.prices-linear-regresion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" />
                      View Full Repository
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                    Free for educational and personal use • Open Source
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex justify-between items-center"
            >
              <Link href="/concepts">
                <Button
                  variant="outline"
                  className="group border-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Concepts
                </Button>
              </Link>

              <Link href="/about">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Next: About Me
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
