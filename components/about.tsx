"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Lightbulb, Rocket } from "lucide-react"

const About = () => {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Languages",
      description: "C/C++, C#, Java, Python, VBA, JavaScript, HTML, CSS, TypeScript",
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Frameworks",
      description: "STL, Qt Spring Boot, CAA APIs, Node.js, .NET, React.js, Redux, XState, REST APIs",
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Technologies",
      description:
        "GIT, 3DExperience, DELMIA, SIMULIA, CATIA v5, SQL Server Management Studio, Web services, SVN, CI/CD, Unity, Unreal engine, MySQL, MongoDB",
    },
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate software engineer with a strong background in both software development and mechanical
              engineering. Currently pursuing my Master's in Computer Software Engineering at Northeastern University, I
              bring professional experience from companies like Dassault Systemes, L&T Technology Services, and KPIT
              Technologies.
            </p>
            <p className="text-muted-foreground">
              I enjoy working with various programming languages and frameworks to build innovative solutions. My
              diverse skill set allows me to approach problems from multiple perspectives and deliver effective
              technical solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/80">
              <img
                src="/placeholder.svg?height=256&width=256"
                alt="Profile"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50 group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="p-3 bg-primary/10 rounded-full mb-4 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-[360deg]">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">
                      {skill.title}
                    </h3>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

