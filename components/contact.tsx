"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", message: "" })

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "lnu.cha@northeastern.edu",
      link: "mailto:lnu.cha@northeastern.edu",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Boston, MA",
      link: null,
    },
  ]

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      link: "https://github.com",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      link: "https://linkedin.com/in/channaveera-shivaraj",
    },
  ]

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out to me using the form below or through my
            social media channels.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4 group">
                  <div className="p-3 bg-primary/10 rounded-full text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-[360deg]">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-medium transition-colors duration-300 group-hover:text-primary">
                      {info.title}
                    </h4>
                    {info.link ? (
                      <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-primary/10 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:rotate-[360deg] hover:shadow-lg hover:shadow-primary/20"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary hover:border-primary/50"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary hover:border-primary/50"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="transition-all duration-300 focus:border-primary focus:ring-primary hover:border-primary/50"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {submitSuccess && <p className="text-green-500 text-center mt-2">Message sent successfully!</p>}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact

