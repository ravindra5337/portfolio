import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white text-gray-900 px-6 md:px-24 py-14">
      <div className="max-w-6xl mx-auto">

        {/* HERO */}
        <section className="mb-24 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
            Ravindra S Mahale
          </h1>

          <p className="mt-6 text-xl text-gray-700">
            Senior Game Developer | Unity • Unreal • Multiplayer Systems | 10+ Years Experience
          </p>

          <p className="mt-6 max-w-3xl text-gray-600 leading-relaxed">
            Senior game developer with 10+ years of experience building mobile, multiplayer and puzzle games using Unity and C#. 
            Strong expertise in gameplay architecture, optimization and scalable systems. 
            Currently expanding into Unreal Engine and advanced gameplay programming with C++ and Blueprints.
          </p>

          <div className="mt-8 flex gap-5 flex-wrap items-center justify-center md:justify-start">
            <a
              href="/Advanced_Software_Engineer_Ravindra_Mahale_Resume.pdf"
              target="_blank"
              className="bg-black text-white px-7 py-3 rounded-xl font-semibold hover:scale-105 transition shadow-lg"
            >
              Download Resume
            </a>

            <a
              href="https://github.com/ravindra5337"
              target="_blank"
              className="bg-white border border-gray-300 p-3 rounded-full text-xl hover:bg-black hover:text-white transition shadow"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ravindra5337/"
              target="_blank"
              className="bg-white border border-gray-300 p-3 rounded-full text-xl hover:bg-blue-600 hover:text-white transition shadow"
            >
              <FaLinkedin />
            </a>
          </div>
        </section>

        {/* SKILLS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Technical Skills</h2>

          <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
            {[
              "Unity",
              "Unreal Engine",
              "C#",
              "C++",
              "Python",
              "Multiplayer Networking",
              "Photon Networking",
              "Game Architecture",
              "Mobile Game Development",
              "Optimization",
              "Game AI & Algorithms",
              "Git & SVN",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-white border border-gray-200 p-4 rounded-2xl text-center shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Work Experience</h2>

          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Light & Wonder — Advance Software Engineer</h3>
              <p className="text-gray-500">May 2024 – Present</p>
              <ul className="list-disc ml-6 mt-3 text-gray-700">
                <li>Developed multigame application for slot games</li>
                <li>Scriptable-object based layout system</li>
                <li>Mentoring and managing team</li>
                <li>Involved in product design decisions</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">99Games — Technical Specialist</h3>
              <p className="text-gray-500">2021 – 2024</p>
              <ul className="list-disc ml-6 mt-3 text-gray-700">
                <li>Designed core gameplay systems</li>
                <li>Architected scalable game features</li>
                <li>Optimised performance and algorithms</li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Juego Studio — Lead Game Developer</h3>
              <p className="text-gray-500">2020 – 2021</p>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">99Games — Game Developer</h3>
              <p className="text-gray-500">2014 – 2020</p>
            </div>
          </div>
        </section>

        {/* PROFESSIONAL PROJECTS */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Professional Game Experience</h2>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              {
                title: "SpellUp",
                desc: "Word puzzle game with 2D grid word search.",
                points: [
                  "Implemented trie/search word validation",
                  "Optimized grid performance",
                  "Integrated analytics tools",
                ],
              },
              {
                title: "FAN (YRF Franchise)",
                desc: "Match-3 puzzle game inspired by Bollywood FAN movie.",
                points: [
                  "Designed UI and gameplay systems",
                  "Implemented match mechanics",
                  "Built caching for faster loading",
                ],
              },
              {
                title: "Fantastic Chef",
                desc: "Recipe-based puzzle game.",
                points: [
                  "Developed core gameplay",
                  "AI solver using flood-fill algorithm",
                  "Created designer tools",
                ],
              },
              {
                title: "Sheroes",
                desc: "Business simulation game similar to Fallout Shelter.",
                points: [
                  "Gameplay systems & progression",
                  "UI & feature implementation",
                  "Performance optimization",
                ],
              },
              {
                title: "Star Chef 2",
                desc: "Multiplayer cooking game.",
                points: [
                  "Implemented group chat using sockets",
                  "Re-architected asset bundle system",
                  "Game economy balancing",
                  "Crash analysis & optimization",
                ],
              },
              {
                title: "Game Gully",
                desc: "Real money multiplayer platform.",
                points: [
                  "Designed server API workflow",
                  "Encryption & compression",
                  "Multiplayer carrom & ludo",
                ],
              },
              {
                title: "Multiplayer Carrom (Photon)",
                desc: "Real-time multiplayer carrom game.",
                points: [
                  "Photon networking implementation",
                  "Physics & turn sync",
                  "Matchmaking & reconnection",
                ],
              },
              {
                title: "Tribal Ludo",
                desc: "Multiplayer ludo using Photon.",
                points: [
                  "Multiplayer networking modules",
                  "Handled disconnections",
                ],
              },
              {
                title: "Kards Kasino",
                desc: "Multiplayer casino game.",
                points: [
                  "Unity IAP implementation",
                  "Multiple game modes",
                  "Bug fixing & maintenance",
                ],
              },
            ].map((project) => (
              <div
                key={project.title}
                className="bg-white border border-gray-200 p-6 rounded-2xl shadow hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-gray-600 mt-2">{project.desc}</p>
                <ul className="text-gray-600 text-sm mt-3 list-disc ml-5">
                  {project.points.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-6 text-sm">
            *Some projects are proprietary and not publicly available due to company NDAs.
          </p>
        </section>

        {/* HOBBY */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold mb-8">Hobby & Algorithm Projects</h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">Klotski Solver</h3>
              <p className="text-gray-600 mt-2">
                BFS-based optimal puzzle solver.
              </p>
              <a
                href="https://github.com/ravindra5337/klotski_solver"
                target="_blank"
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                View on GitHub
              </a>
            </div>

            <div className="bg-white border border-gray-200 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-bold">TicTacToe AI (Minimax)</h3>
              <p className="text-gray-600 mt-2">
                Python AI using Minimax algorithm.
              </p>
              <a
                href="https://github.com/ravindra5337/TicTacToeMiniMax"
                target="_blank"
                className="inline-block mt-4 bg-black text-white px-4 py-2 rounded-lg text-sm font-semibold"
              >
                View on GitHub
              </a>
            </div>

          </div>
        </section>

        {/* CONTACT */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold mb-6">Contact</h2>
          <p className="text-gray-700">📧 ravindra5337@gmail.com</p>
          <p className="text-gray-700">📱 +91 8147414274</p>
          <p className="text-gray-700">📍 India</p>
        </section>

        <footer className="mt-24 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Ravindra Mahale • Senior Game Developer
        </footer>

      </div>
    </main>
  );
}
