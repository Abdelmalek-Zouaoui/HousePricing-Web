"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, FileText, Code, Database, Github } from "lucide-react"

export default function DownloadSection() {
  const downloads = [
    {
      icon: FileText,
      title: "PDF Report",
      description: "Complete project report with analysis and insights",
      size: "2.4 MB",
      color: "red",
    },
    {
      icon: Code,
      title: "Jupyter Notebook",
      description: "Interactive notebook with all code and visualizations",
      size: "1.8 MB",
      color: "orange",
    },
    {
      icon: Database,
      title: "Dataset (CSV)",
      description: "Original house price dataset used in the project",
      size: "450 KB",
      color: "green",
    },
    {
      icon: Github,
      title: "Source Code",
      description: "Complete Python scripts and project files",
      size: "1.2 MB",
      color: "purple",
    },
  ]

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
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">Download Resources</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get all the project files, data, and documentation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {downloads.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                <CardHeader className="text-center">
                  <div
                    className={`mx-auto p-4 bg-${item.color}-100 dark:bg-${item.color}-900 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className={`h-8 w-8 text-${item.color}-600 dark:text-${item.color}-400`} />
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Size: {item.size}</p>
                  <Button className="w-full" variant="outline" asChild>
                    <a
                      href="https://github.com/Abdelmalek-Zouaoui/House.prices-linear-regresion"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Download All Resources</CardTitle>
              <CardDescription>Get everything in one convenient package</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Complete Package (5.8 MB)
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Includes all files, documentation, and bonus materials
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
