import Image from "next/image"
import Link from "next/link"

export default function Home() {
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

