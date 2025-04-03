"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const Education = () => {
  const educations = [
    {
      degree: "Master of Science in Computer Software Engineering",
      institution: "Northeastern University",
      year: "Sep 2023 - Aug 2025",
      description:
        "GPA: 3.47/4.0. Courses: Web development, Object-oriented programming, Program Structure & Algorithms, Database Management",
    },
    {
      degree: "Bachelor of Engineering in Mechanical Engineering",
      institution: "Nitte Meenakshi Institute of Technology",
      year: "May 2016 - Jun 2019",
      description: "GPA: 3.33/4.0. Bangalore, India",
    },
  ]

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {educations.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 group">
                <CardHeader className="pb-2">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <span className="text-sm text-muted-foreground">{edu.year}</span>
                  </div>
                  <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                    {edu.degree}
                  </CardTitle>
                  <p className="text-muted-foreground">{edu.institution}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{edu.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education

