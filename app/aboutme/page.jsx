import Image from "next/image"
import Link from "next/link"

export default function AboutMe() {
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
                <div className="flex flex-col md-flex-row items-center justify-between gap-8">
                    {/* Profile photo */}
                    <div className="w-64 h-64 rounded-lg overflow-hidden">
                        <Image
                            src="/profilepic.jpg?height=256&width=256"
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
                                Hi! My name is Hubert Piwowarski, and I have a deep passion for gaming and game development. Ever since
                                I was young, I've been fascinated by the worlds that games can create and how players can fully immerse
                                themselves in them. This passion has driven me to explore UX/UI, level design, and quest design.
                            </p>

                            <p>
                                Beyond game design, I'm a huge fan of fantasy stories. Books by authors like J.R.R. Tolkien and Andrzej
                                Sapkowski have fueled my love for immersive worlds and epic storytelling. I also enjoy anime and manga,
                                where I find the same rich narratives and deep character development.
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

                    {/* Navigation */}
                    <div className="flex flex-col gap-4">
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
        </main>
    )
}

