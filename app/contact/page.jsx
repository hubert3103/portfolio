import Image from "next/image"
import Link from "next/link"
import { Linkedin, Instagram, Youtube } from "lucide-react"

export default function Contact() {
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

                        <p className="text-xl mb-8">Let's create something amazing together! Feel free to reach out and connect.</p>

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
        </main>
    )
}

