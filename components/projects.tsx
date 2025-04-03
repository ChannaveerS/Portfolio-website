"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const Projects = () => {
  const projects = [
    {
      title: "Local Compass Travel Application",
      description:
        "Developed a Spring JAVA application 'Local Compass' using OpenAI APIs for AI-driven itinerary planning, emphasized a layered architecture with Spring MVC for enhanced user experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Java", "Spring", "OpenAI API", "Spring MVC"],
      github: "#",
      demo: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Designed and developed a responsive personal portfolio website using Next.js, Tailwind CSS, and ShadCN UI components with a focus on clean design and user experience.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "React", "TypeScript"],
      github: "#",
      demo: "#",
    },
    {
      title: "Software Engineering Project",
      description:
        "Collaborative project focused on software development best practices, including version control, CI/CD pipelines, and agile methodologies.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Git", "CI/CD", "Agile", "Team Collaboration"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise in software development and AI.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-2 hover:border-primary/50">
                <div className="overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm" asChild className="transition-all duration-300 hover:scale-105">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </Button>
                  <Button size="sm" asChild className="transition-all duration-300 hover:scale-105">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

