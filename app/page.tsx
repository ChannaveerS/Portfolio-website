import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import About from "@/components/about"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Education from "@/components/education"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </main>
  )
}

