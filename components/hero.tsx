"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          <span className="block">Hello, I'm</span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="block text-primary mt-2"
          >
            Channaveera Shivaraj
          </motion.span>
        </h1>

        <h2 className="text-xl md:text-2xl text-muted-foreground">Software Engineer</h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button asChild size="lg" className="transition-all duration-300 hover:shadow-md">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="transition-all duration-300 hover:shadow-md">
            <a href="#projects">View My Work</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="animate-bounce" size={20} />
        </a>
      </motion.div>
    </section>
  )
}

export default Hero

