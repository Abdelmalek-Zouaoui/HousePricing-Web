"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, User, MapPin, Calendar, ArrowLeft, ExternalLink, ArrowRight } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"

export default function AboutPage() {
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
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">About Me</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Get to know the person behind this machine learning project
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="lg:col-span-2"
              >
                <Card className="h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                        <User className="h-10 w-10 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-3xl">Abdelmalek Zouaoui</CardTitle>
                        <CardDescription className="text-lg">
                          Data Scientist & Machine Learning Engineer
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        I'm a passionate Machine Learning and Data Analysis enthusiast, constantly learning and building
                        real-world projects to sharpen my skills and solve meaningful problems. With a strong foundation
                        in data preprocessing, visualization, predictive modeling, and deployment, I transform raw data
                        into actionable insights and intelligent systems.
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        My projects showcase not only my technical abilities but also my focus on clean, understandable,
                        and production-ready code. I aim to bridge the gap between complex data science concepts and
                        real-world business value.
                      </p>

                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                        Whether you're a startup looking to explore the power of your data or an individual with a
                        custom idea, I'd love to collaborate and bring your vision to life through smart, data-driven
                        solutions.
                      </p>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Project Highlights</h4>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                          <li>• Built end-to-end ML pipeline with 67% R² accuracy</li>
                          <li>• Implemented feature selection using RFE and VIF analysis</li>
                          <li>• Created comprehensive data visualizations and EDA</li>
                          <li>• Developed interactive web presentation with Next.js</li>
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-6 pt-4">
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <MapPin className="h-5 w-5 text-blue-500" />
                          <span>Available Worldwide</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-300">
                          <Calendar className="h-5 w-5 text-green-500" />
                          <span>Open to opportunities</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Connect With Me</CardTitle>
                    <CardDescription>Let's discuss data science and machine learning</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start group" asChild>
                      <a href="https://github.com/Abdelmalek-Zouaoui" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        GitHub Profile
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>

                    <Button variant="outline" className="w-full justify-start group" asChild>
                      <a
                        href="https://www.linkedin.com/in/abdelmalek-zouaoui-a96865307/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Linkedin className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        LinkedIn Profile
                        <ExternalLink className="ml-auto h-4 w-4" />
                      </a>
                    </Button>

                    <Button variant="outline" className="w-full justify-start group" asChild>
                      <a href="mailto:abdelmalekzoua@gmail.com">
                        <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
                        Send Email
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center mb-12"
            >
              <Card className="max-w-3xl mx-auto bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700">
                <CardHeader>
                  <CardTitle className="text-3xl">Let's Work Together</CardTitle>
                  <CardDescription className="text-lg">
                    Interested in collaborating on data science projects or discussing opportunities?
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                    <Button
                      size="lg"
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                      asChild
                    >
                      <a href="mailto:abdelmalekzoua@gmail.com">
                        <Mail className="mr-2 h-5 w-5" />
                        Get In Touch
                      </a>
                    </Button>

                    <Button variant="outline" size="lg" className="px-8 py-4 text-lg" asChild>
                      <a href="/downloads">
                        <User className="mr-2 h-5 w-5" />
                        View My Work
                      </a>
                    </Button>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <div className="text-center">
                      <div className="font-semibold text-blue-600 dark:text-blue-400">Freelance Projects</div>
                      <div>Custom ML solutions</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-green-600 dark:text-green-400">Full-time Opportunities</div>
                      <div>Data science roles</div>
                    </div>
                    <div className="text-center">
                      <div className="font-semibold text-purple-600 dark:text-purple-400">Research Collaboration</div>
                      <div>Academic partnerships</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex justify-between items-center"
            >
              <Link href="/downloads">
                <Button
                  variant="outline"
                  className="group border-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:border-gray-600"
                >
                  <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Back to Downloads
                </Button>
              </Link>

              <Link href="/">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 group">
                  Back to Home
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
