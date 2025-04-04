"use client"
import { useState, useRef } from "react"
import Link from "next/link"

export default function Projects() {
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

    return (
        <main className="min-h-screen relative">
            {/* Geometric background pattern */}
            <div
                className="absolute inset-0 z-0 opacity-40"
                style={{
                    backgroundImage: `url('/background.png')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

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

                    {/* Navigation */}
                    <div className="flex flex-col gap-4 self-end">
                        {[
                            { name: "Home", path: "/" },
                            { name: "About me", path: "/aboutme" },
                            { name: "Projects", path: "/projects" },
                            { name: "Contact", path: "/contact" },
                        ].map((item) => (
                            <Link key={item.name} href={item.path} className="block">
                                <div className="green-button font-bold py-3 px-8">
                                    <span className="button-text text-center text-xl">{item.name}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Custom styles to hide scrollbar */}
            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </main>
    )
}

