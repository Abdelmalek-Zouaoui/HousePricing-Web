"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, User, MapPin, Calendar } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know the person behind this project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">Abdelmalek Zouaoui</CardTitle>
                    <CardDescription className="text-lg">Data Scientist & Machine Learning Engineer</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm a passionate Machine Learning and Data Analysis enthusiast, constantly learning and building
                    real-world projects to sharpen my skills and solve meaningful problems. With a strong foundation in
                    data preprocessing, visualization, predictive modeling, and deployment, I transform raw data into
                    actionable insights and intelligent systems.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    My projects showcase not only my technical abilities but also my focus on clean, understandable, and
                    production-ready code. I aim to bridge the gap between complex data science concepts and real-world
                    business value.
                  </p>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    Whether you're a startup looking to explore the power of your data or an individual with a custom
                    idea, I'd love to collaborate and bring your vision to life through smart, data-driven solutions.
                  </p>

                  <div className="flex flex-wrap gap-4 pt-4">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4" />
                      <span>Available Worldwide</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4" />
                      <span>Open to opportunities</span>
                    </div>
                  </div>
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
                <CardTitle>Connect With Me</CardTitle>
                <CardDescription>Let's discuss data science and machine learning</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="https://github.com/Abdelmalek-Zouaoui" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub Profile
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start" asChild>
                  <a
                    href="https://www.linkedin.com/in/abdelmalek-zouaoui-a96865307/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>

                <Button variant="outline" className="w-full justify-start" asChild>
                  <a href="mailto:abdelmalekzoua@gmail.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Email
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Work Together</CardTitle>
              <CardDescription>Interested in collaborating on data science projects?</CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
                Open to freelance projects, full-time opportunities, and research collaborations
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
