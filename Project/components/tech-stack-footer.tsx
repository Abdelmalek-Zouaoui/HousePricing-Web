"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"

export default function TechStackFooter() {
  const technologies = [
    { name: "Python", category: "Language" },
    { name: "Pandas", category: "Data Processing" },
    { name: "Scikit-learn", category: "Machine Learning" },
    { name: "Seaborn", category: "Visualization" },
    { name: "Matplotlib", category: "Visualization" },
    { name: "NumPy", category: "Numerical Computing" },
    { name: "Statsmodels", category: "Statistics" },
    { name: "Jupyter", category: "Development" },
    { name: "Next.js", category: "Frontend" },
    { name: "Tailwind CSS", category: "Styling" },
    { name: "Framer Motion", category: "Animation" },
    { name: "TypeScript", category: "Language" },
  ]

  const categoryColors = {
    Language: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    "Data Processing": "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    "Machine Learning": "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    Visualization: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
    "Numerical Computing": "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
    Statistics: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
    Development: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200",
    Frontend: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    Styling: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    Animation: "bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200",
  }

  return (
    <footer className="py-16 bg-gray-900 dark:bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies Used</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            This project was built using modern tools and libraries for data science and web development
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Badge
                className={`${categoryColors[tech.category as keyof typeof categoryColors]} px-3 py-1 text-sm font-medium`}
              >
                {tech.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Abdelmalek-Zouaoui/House.prices-linear-regresion"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>View Source Code</span>
            </a>
            <a href="#" className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
              <ExternalLink className="h-5 w-5" />
              <span>Live Demo</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-700 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 House Price Prediction ML Project. Built with ❤️ for learning and sharing knowledge.
          </p>
          <p className="text-gray-500 text-sm mt-2">
            This project is open source and available for educational purposes.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
