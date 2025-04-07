"use client"
import { useState, useRef } from "react"
import Image from "next/image"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollContainerRef = useRef(null)

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Game UI Design",
      description: "A comprehensive UI design for an RPG game, focusing on player inventory and character stats.",
      pdfLink: "/pdfs/game-ui-design.pdf",
    },
    {
      id: 2,
      title: "Level Design: Forest Maze",
      description: "An intricate forest maze level design with multiple paths and hidden secrets.",
      pdfLink: "/pdfs/forest-maze.pdf",
    },
    {
      id: 3,
      title: "Quest System",
      description: "A branching quest system with multiple outcomes based on player choices.",
      pdfLink: "/pdfs/quest-system.pdf",
    },
    {
      id: 4,
      title: "Character Creation Interface",
      description: "A user-friendly interface for creating and customizing game characters.",
      pdfLink: "/pdfs/character-creation.pdf",
    },
    {
      id: 5,
      title: "Combat Mechanics",
      description: "Detailed design of combat mechanics for a tactical RPG game.",
      pdfLink: "/pdfs/combat-mechanics.pdf",
    },
    {
      id: 6,
      title: "Open World Environment",
      description: "Design concepts for an immersive open world environment with dynamic elements.",
      pdfLink: "/pdfs/open-world.pdf",
    },
  ]

  const handleProjectClick = (project) => {
    setSelectedProject(project.id === selectedProject ? null : project.id)
  }

  const handleScroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === "left" ? -300 : 300
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <main className="relative">
      {/* Geometric background pattern */}
      <div
        className="fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage: `url('/background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Fixed navigation */}
      <div className="fixed top-8 right-8 z-50">
        <div className="flex flex-col gap-4">
          {[
            { name: "Home", section: "home" },
            { name: "Projects", section: "projects" },
            { name: "About me", section: "about" },
            { name: "Contact", section: "contact" },
          ].map((item) => (
            <button key={item.name} onClick={() => scrollToSection(item.section)} className="block">
              <div className="green-button font-bold py-3 px-8">
                <span className="button-text text-center text-xl">{item.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col md-flex-row items-center justify-between gap-8">
            {/* Profile photo */}
            <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/profilepic.jpg"
                alt="Profile photo"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name and skills */}
            <div className="text-center md-text-left">
              <h1 className="text-4xl font-bold mb-2">Hubert Piwowarski</h1>
              <div className="green-underline w-full md-w-96 mb-8"></div>

              <ul className="space-y-6 text-2xl">
                <li className="flex items-center">
                  <span className="green-bullet mr-4 text-3xl">•</span> UX/UI
                </li>
                <li className="flex items-center">
                  <span className="green-bullet mr-4 text-3xl">•</span> Level design
                </li>
                <li className="flex items-center">
                  <span className="green-bullet mr-4 text-3xl">•</span> Quest design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col items-center justify-between gap-8">
            {/* Projects header */}
            <div className="text-center w-full mb-16">
              <h1 className="text-4xl font-bold mb-2">Projects</h1>
              <div className="green-underline w-full max-w-md mx-auto"></div>
            </div>

            {/* Project timeline */}
            <div className="w-full relative mb-8">
              {/* Scroll buttons */}
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full"
                style={{ color: "#00ff00" }}
              >
                ◀
              </button>

              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-black bg-opacity-50 p-2 rounded-full"
                style={{ color: "#00ff00" }}
              >
                ▶
              </button>

              {/* Scrollable container */}
              <div
                ref={scrollContainerRef}
                className="overflow-x-auto py-8 px-12 hide-scrollbar"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
              >
                <div className="relative min-w-max">
                  {/* Timeline line */}
                  <div className="absolute top-6 left-0 right-0 h-1" style={{ backgroundColor: "#00ff00" }}></div>

                  {/* Project points */}
                  <div className="flex items-center space-x-32 relative">
                    {projects.map((project) => (
                      <div key={project.id} className="relative">
                        {/* Project point */}
                        <button
                          onClick={() => handleProjectClick(project)}
                          className="w-12 h-12 rounded-full relative z-10 transition-transform transform hover:scale-110"
                          style={{ backgroundColor: "#00ff00" }}
                        ></button>

                        {/* Project popup */}
                        {selectedProject === project.id && (
                          <div
                            className="absolute top-16 left-1/2 transform -translate-x-1/2 w-64 p-4 rounded-lg z-20"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", border: "1px solid #00ff00" }}
                          >
                            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                            <p className="mb-4">{project.description}</p>
                            <a
                              href={project.pdfLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block py-2 px-4 rounded"
                              style={{ backgroundColor: "#00ff00", color: "black" }}
                            >
                              View PDF
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col md-flex-row items-center justify-between gap-8">
            {/* Profile photo */}
            <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/profilepic.jpg"
                alt="Profile photo"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            {/* About me content */}
            <div className="text-center md-text-left">
              <h1 className="text-4xl font-bold mb-2">About me</h1>
              <div className="green-underline w-full md-w-96 mb-8"></div>

              <div className="space-y-6 text-lg max-w-2xl">
                <p>
                  Hi! My name is Hubert Piwowarski, and I have a deep passion for gaming and game development. Ever
                  since I was young, I've been fascinated by the worlds that games can create and how players can fully
                  immerse themselves in them. This passion has driven me to explore UX/UI, level design, and quest
                  design.
                </p>

                <p>
                  Beyond game design, I'm a huge fan of fantasy stories. Books by authors like J.R.R. Tolkien and
                  Andrzej Sapkowski have fueled my love for immersive worlds and epic storytelling. I also enjoy anime
                  and manga, where I find the same rich narratives and deep character development.
                </p>

                <p>
                  In my free time, I play Dungeons & Dragons, where I let my creativity run wild, crafting intricate
                  stories and characters. This also helps me in game design, as it gives me insight into what captivates
                  players and how to shape interactive experiences.
                </p>

                <p>
                  My goal is to create engaging and meaningful gaming experiences. Whether it's a well-designed UI, a
                  challenging level, or an immersive quest, I want to provide players with something they can truly lose
                  themselves in.
                </p>

                <p>Ready to collaborate on awesome projects? Feel free to reach out!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col md-flex-row items-center justify-between gap-8">
            {/* Profile photo */}
            <div className="w-64 h-64 rounded-lg overflow-hidden">
              <Image
                src="/profilepic.jpg"
                alt="Profile photo"
                width={256}
                height={256}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Contact content */}
            <div className="text-center md-text-left">
              <h1 className="text-4xl font-bold mb-2">Contact</h1>
              <div className="green-underline w-full md-w-96 mb-8"></div>

              <p className="text-xl mb-8">
                Let's create something amazing together! Feel free to reach out and connect.
              </p>

              {/* Contact info box */}
              <div
                className="p-8 rounded-lg max-w-md"
                style={{ border: "2px solid #00ff00", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
              >
                <h2 className="text-2xl font-bold mb-6">How to reach me:</h2>

                <div className="mb-6">
                  <p className="text-lg font-bold">Tel:</p>
                  <p className="text-lg">+31 6 37276914</p>
                </div>

                <div className="mb-6">
                  <p className="text-lg font-bold">e-mail:</p>
                  <a
                    href="mailto:hubert3103@gmail.com"
                    className="text-lg hover-brightness transition-all"
                    style={{ color: "#00ff00" }}
                  >
                    hubert3103@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-lg font-bold mb-4">Socials:</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://linkedin.com/in/hubert-piwowarski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-brightness transition-all"
                    >
                      <div className="bg-white p-2 rounded-md">
                        <Linkedin size={32} color="#000000" />
                      </div>
                    </a>

                    <a
                      href="https://instagram.com/hubert_piwowarski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-brightness transition-all"
                    >
                      <div className="bg-white p-2 rounded-md">
                        <Instagram size={32} color="#000000" />
                      </div>
                    </a>

                    <a
                      href="https://youtube.com/@hubertpiwowarski"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover-brightness transition-all"
                    >
                      <div className="bg-white p-2 rounded-md">
                        <Youtube size={32} color="#000000" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles to hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </main>
  )
}

