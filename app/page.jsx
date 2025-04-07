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
      image: "/neondusk.jpg?height=300&width=600",
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

      {/* Fixed navigation */}
      <nav className="fixed top-1/2 right-12 transform -translate-y-1/2 z-50 flex flex-col items-end space-y-6">
        {[
          { name: "Home", section: "home" },
          { name: "Projects", section: "projects" },
          { name: "About me", section: "about" },
          { name: "Contact", section: "contact" },
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

      {/* PROJECTS SECTION - Updated to match new design */}
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

      {/* CONTACT SECTION */}
      <section id="contact" className="min-h-screen relative flex items-center">
        <div className="container py-12 relative z-10">
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto">
            {/* Green line at top */}
            <div className="w-64 h-1 mb-6" style={{ backgroundColor: "#00ff00" }}></div>

            {/* Contact message */}
            <div className="text-lg mb-16 max-w-md">
              <p>Let's create something amazing together! Feel free to reach out and connect.</p>
            </div>

            {/* Socials section */}
            <div className="text-center mb-8">
              <h2 className="text-2xl mb-6">Socials:</h2>

              <div className="flex justify-center space-x-8">
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/in/hubert-piwowarski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:opacity-80"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 3H5C3.895 3 3 3.895 3 5V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V5C21 3.895 20.105 3 19 3ZM9 17H6.477V10H9V17ZM7.694 8.717C6.923 8.717 6.408 8.203 6.408 7.517C6.408 6.831 6.922 6.317 7.779 6.317C8.55 6.317 9.065 6.831 9.065 7.517C9.065 8.203 8.551 8.717 7.694 8.717ZM18 17H15.558V13.174C15.558 12.116 14.907 11.872 14.663 11.872C14.419 11.872 13.605 12.035 13.605 13.174C13.605 13.337 13.605 17 13.605 17H11.082V10H13.605V10.977C13.93 10.407 14.581 10 15.802 10C17.023 10 18 10.977 18 13.174V17Z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/hubert_piwowarski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:opacity-80"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.8305 4.1779 21.224 4.78259 21.475 5.45C21.722 6.087 21.89 6.813 21.94 7.878C21.987 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.722 17.912 21.475 18.55C21.2247 19.2178 20.8311 19.8226 20.322 20.322C19.822 20.8303 19.2173 21.2238 18.55 21.475C17.913 21.722 17.187 21.89 16.122 21.94C15.056 21.987 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.722 5.45 21.475C4.78233 21.2245 4.17753 20.8309 3.678 20.322C3.16941 19.8222 2.77593 19.2175 2.525 18.55C2.277 17.913 2.11 17.187 2.06 16.122C2.013 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.812 2.277 6.088 2.525 5.45C2.77524 4.78218 3.1688 4.17732 3.678 3.678C4.17767 3.16923 4.78243 2.77573 5.45 2.525C6.088 2.277 6.812 2.11 7.878 2.06C8.944 2.013 9.283 2 12 2ZM12 7C10.6739 7 9.40215 7.52678 8.46447 8.46447C7.52678 9.40215 7 10.6739 7 12C7 13.3261 7.52678 14.5979 8.46447 15.5355C9.40215 16.4732 10.6739 17 12 17C13.3261 17 14.5979 16.4732 15.5355 15.5355C16.4732 14.5979 17 13.3261 17 12C17 10.6739 16.4732 9.40215 15.5355 8.46447C14.5979 7.52678 13.3261 7 12 7ZM18.5 6.75C18.5 6.41848 18.3683 6.10054 18.1339 5.86612C17.8995 5.6317 17.5815 5.5 17.25 5.5C16.9185 5.5 16.6005 5.6317 16.3661 5.86612C16.1317 6.10054 16 6.41848 16 6.75C16 7.08152 16.1317 7.39946 16.3661 7.63388C16.6005 7.8683 16.9185 8 17.25 8C17.5815 8 17.8995 7.8683 18.1339 7.63388C18.3683 7.39946 18.5 7.08152 18.5 6.75ZM12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9Z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@hubertpiwowarski"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all hover:opacity-80"
                >
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0708 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92925 4.59318 2.50198 4.84824 2.16135 5.19941C1.82072 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988687 13.537 1.14266 15.3213 1.46 17.08C1.57879 17.5546 1.82072 17.9894 2.16135 18.3406C2.50198 18.6918 2.92925 18.9468 3.4 19.08C5.12 19.54 12 19.54 12 19.54C12 19.54 18.88 19.54 20.6 19.08C21.0708 18.9468 21.498 18.6918 21.8387 18.3406C22.1793 17.9894 22.4212 17.5546 22.54 17.08C22.8524 15.3427 23.0063 13.5733 23 11.8C23.0113 10.0113 22.8573 8.22708 22.54 6.46V6.42ZM9.75 15.12V8.38L15.5 11.75L9.75 15.12Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Contact info - email and phone */}
            <div className="text-center">
              <p className="mb-2">
                <span className="font-bold">Tel:</span> +31 6 37276914
              </p>
              <p>
                <span className="font-bold">e-mail:</span>{" "}
                <a
                  href="mailto:hubert3103@gmail.com"
                  className="transition-all hover:text-green-500"
                  style={{ color: "#00ff00" }}
                >
                  hubert3103@gmail.com
                </a>
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

