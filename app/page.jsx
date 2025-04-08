"use client"
import { useState, useRef, useEffect } from "react"
import Image from "next/image"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedProject, setSelectedProject] = useState(null)
  const aboutParagraphRefs = useRef([])

  // Reset paragraph refs array
  aboutParagraphRefs.current = []

  // Add to paragraph refs
  const addToAboutRefs = (el) => {
    if (el && !aboutParagraphRefs.current.includes(el)) {
      aboutParagraphRefs.current.push(el)
    }
  }

  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Neon Dusk",
      type: "Personal project",
      tags: ["Pixel Art", "RPG", "Cyberpunk"],
      image: "/placeholder.svg?height=300&width=600",
      description:
        "Neon Dusk is a pixel art RPG set in a gritty cyberpunk metropolis where players navigate a branching narrative filled with moral choices, hidden agendas, and augmented dangers.",
      focusPoints: [
        "UX/UI design to ensure a smooth and immersive player experience.",
        "Level design to craft layered environments with both vertical and narrative depth.",
        "Quest design centered around meaningful player decisions and world-building.",
      ],
      inspiration:
        "Inspired by tabletop RPGs and classic fantasy storytelling, I aimed to blend rich narrative elements with sleek, retro visuals.",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Forest Maze",
      type: "Level Design",
      tags: ["Adventure", "Puzzle", "Fantasy"],
      image: "/placeholder.svg?height=300&width=600",
      description:
        "An intricate forest maze level design with multiple paths and hidden secrets, challenging players to explore and discover.",
      focusPoints: [
        "Environmental storytelling through careful placement of visual elements.",
        "Puzzle design that integrates naturally with the forest environment.",
        "Navigation systems that guide players subtly without explicit markers.",
      ],
      inspiration:
        "Drawing inspiration from classic adventure games and natural labyrinths, this project explores the balance between challenge and discovery.",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Quest System",
      type: "Game Design",
      tags: ["Narrative", "Branching", "Choices"],
      image: "/placeholder.svg?height=300&width=600",
      description:
        "A branching quest system with multiple outcomes based on player choices, creating a personalized story experience.",
      focusPoints: [
        "Narrative design with meaningful consequences for player decisions.",
        "Character development that responds to player choices throughout the game.",
        "Reward systems that acknowledge different play styles and moral choices.",
      ],
      inspiration:
        "Influenced by choice-driven RPGs and interactive fiction, this system aims to create truly personalized player experiences.",
      readMoreLink: "#",
    },
  ]

  // Handle intersection observer to detect active section
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10% 0px", // Slightly adjust when the animation triggers
      threshold: 0.2, // Lower threshold for earlier detection
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)

          // Add animation for about section text
          if (entry.target.id === "about") {
            // Use requestAnimationFrame for smoother animation handling
            requestAnimationFrame(() => {
              animateAboutText(true)
            })
          }
        } else if (entry.target.id === "about" && !entry.isIntersecting) {
          // Only reset animation when leaving the about section
          requestAnimationFrame(() => {
            animateAboutText(false)
          })
        }
      })
    }, options)

    // Observe all sections
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section)
    })

    return () => {
      document.querySelectorAll("section[id]").forEach((section) => {
        observer.unobserve(section)
      })
    }
  }, [])

  // Function to animate about text paragraphs
  const animateAboutText = (isVisible) => {
    aboutParagraphRefs.current.forEach((paragraph, index) => {
      // Use setTimeout with requestAnimationFrame for smoother transitions
      setTimeout(() => {
        requestAnimationFrame(() => {
          if (isVisible) {
            paragraph.style.transition = "opacity 800ms ease"
            paragraph.style.opacity = "1"
          } else {
            paragraph.style.transition = "opacity 500ms ease"
            paragraph.style.opacity = "0"
          }
        })
      }, 120 * index) // Slightly reduced delay between paragraphs
    })
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

      {/* Fixed navigation with social icons */}
      <nav className="fixed top-1/2 right-12 transform -translate-y-1/2 z-50 flex flex-col items-end">
        {/* Menu items */}
        <div className="flex flex-col items-end space-y-6 mb-16">
          {[
            { name: "Home", section: "home" },
            { name: "Projects", section: "projects" },
            { name: "About me", section: "about" },
          ].map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.section)}
              className={`text-xl transition-all duration-300 relative bg-transparent border-none cursor-pointer ${activeSection === item.section ? "text-white font-bold text-2xl" : "text-gray-400 hover:text-white"
                }`}
            >
              {item.name}
              {activeSection === item.section && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-green-500"
                  style={{ backgroundColor: "#00ff00" }}
                ></div>
              )}
            </button>
          ))}
        </div>

        {/* Social icons - Updated to match the reference image */}
        <div className="flex flex-col items-center space-y-4">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/hubert-piwowarski"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-80"
            aria-label="LinkedIn"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" />
            </svg>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/hubert_piwowarski"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-80"
            aria-label="Instagram"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" stroke="black" strokeWidth="2" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="black" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com/@hubertpiwowarski"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-all hover:opacity-80"
            aria-label="YouTube"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.543 6.498C22 8.28 22 12 22 12C22 12 22 15.72 21.543 17.502C21.289 18.487 20.546 19.262 19.605 19.524C17.896 20 12 20 12 20C12 20 6.107 20 4.395 19.524C3.45 19.258 2.708 18.484 2.457 17.502C2 15.72 2 12 2 12C2 12 2 8.28 2.457 6.498C2.711 5.513 3.454 4.738 4.395 4.476C6.107 4 12 4 12 4C12 4 17.896 4 19.605 4.476C20.55 4.742 21.292 5.516 21.543 6.498ZM10 15.5L16 12L10 8.5V15.5Z" />
            </svg>
          </a>
        </div>
      </nav>

      {/* HOME SECTION */}
      <section id="home" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col md-flex-row items-center justify-center gap-12">
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
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">Hubert Piwowarski</h1>
              <p className="text-xl">UX/UI - Quest design - Level design</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="min-h-screen relative">
        <div className="container py-12 relative z-10">
          {projects.map((project, index) => (
            <div key={project.id} className="mb-16">
              {/* Project header */}
              <div className="text-center mb-4">
                <div className="w-64 h-1 mx-auto mb-4" style={{ backgroundColor: "#00ff00" }}></div>
                <h2 className="text-2xl font-bold mb-1">
                  {project.type} - {project.title}
                </h2>
                <p className="text-gray-400">{project.tags.join(" | ")}</p>
              </div>

              {/* Project image */}
              <div className="w-full mb-1 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={400}
                  className="w-full object-cover"
                />
              </div>

              {/* Blue separator line */}
              <div className="w-full h-0.5 mb-6" style={{ backgroundColor: "#0088ff" }}></div>

              {/* Project description */}
              <div className="max-w-3xl mx-auto">
                <p className="mb-4">{project.description}</p>

                <p className="mb-2">For this project, I focused on:</p>
                <ul className="list-none mb-4">
                  {project.focusPoints.map((point, i) => (
                    <li key={i} className="mb-2 flex items-start">
                      <span className="mr-2 text-lg" style={{ color: "#00ff00" }}>
                        •
                      </span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <p className="mb-6">{project.inspiration}</p>

                <a
                  href={project.readMoreLink}
                  className="inline-block font-medium hover:underline"
                  style={{ color: "#e2e2e2" }}
                >
                  Read more
                </a>
              </div>

              {/* Add spacing between projects */}
              {index < projects.length - 1 && <div className="w-full h-px my-16 bg-gray-800"></div>}
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col items-start justify-center max-w-2xl mx-auto">
            {/* Green line at top */}
            <div className="green-underline w-full max-w-md mb-8"></div>

            {/* About me content */}
            <div className="text-lg">
              <p ref={addToAboutRefs} className="mb-6" style={{ opacity: 0, transition: "opacity 800ms ease" }}>
                Hi! I'm Hubert Piwowarski, and I have a deep passion for gaming and game development. Since childhood,
                I've been fascinated by the immersive worlds games can create, which led me to explore UX/UI, level
                design, and quest design.
              </p>

              <p ref={addToAboutRefs} className="mb-6" style={{ opacity: 0, transition: "opacity 800ms ease" }}>
                I'm also a big fan of fantasy stories—especially the works of Tolkien and Sapkowski—as well as anime,
                manga, and tabletop RPGs like Dungeons & Dragons. These influences fuel my creativity and shape how I
                approach storytelling in games.
              </p>

              <p ref={addToAboutRefs} className="mb-6" style={{ opacity: 0, transition: "opacity 800ms ease" }}>
                My goal is to craft meaningful, engaging experiences—whether through intuitive UI, compelling quests, or
                rich environments.
              </p>

              <p ref={addToAboutRefs} style={{ opacity: 0, transition: "opacity 800ms ease" }}>
                Ready to team up on something awesome? Let's connect!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom styles */}
      <style jsx>{`
  .hide-scrollbar::-webkit-scrollbar {
    display: none;
  }
`}</style>
    </main>
  )
}
