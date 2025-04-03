"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase } from "lucide-react"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Dassault Systemes",
      period: "Aug 2024 - Dec 2024",
      description: "Providence, USA",
    },
    {
      title: "Software Engineer",
      company: "L&T Technology Services",
      period: "May 2022 - Aug 2023",
      description: "Hyderabad, India",
    },
    {
      title: "Software Engineer",
      company: "KPIT Technologies Limited",
      period: "Aug 2019 - May 2022",
      description: "Bangalore, India",
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-border"></div>

          {/* Experience items */}
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`relative mb-12 md:mb-24 ${
                index % 2 === 0
                  ? "md:pr-12 md:text-right md:ml-0 md:mr-auto md:pl-0"
                  : "md:pl-12 md:ml-auto md:mr-0 md:pr-0"
              } ml-12 md:w-[calc(50%-24px)]`}
            >
              {/* Timeline dot */}
              <div className="absolute left-[-36px] md:left-auto md:right-[-36px] top-4 w-8 h-8 rounded-full bg-primary flex items-center justify-center z-10 transition-all duration-300 hover:scale-125 hover:shadow-lg hover:shadow-primary/30 group-hover:scale-125">
                <Briefcase className="h-4 w-4 text-primary-foreground" />
              </div>

              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 group">
                <CardHeader>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">{exp.title}</CardTitle>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span className="font-medium transition-colors duration-300 group-hover:text-primary/80">
                      {exp.company}
                    </span>
                    <span>{exp.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

