"use client"

import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border mt-20">
      <div className="container mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Channaveera Shivaraj. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">Designed and built with ❤️</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

