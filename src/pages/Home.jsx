import { ArrowRight, Code2, Flame, Rocket, Trophy } from "lucide-react";
import { motion } from "framer-motion";

import hemBg from "../assets/hem/hem-bg.png";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      <img
        src={hemBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/45 to-[#020617]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Welcome
            </p>

            <h1 className="max-w-5xl text-6xl font-black leading-tight tracking-tight md:text-8xl">
            Building Through{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Curiosity
            </span>
            </h1>

            <p className="mt-5 text-2xl font-semibold text-slate-300 md:text-3xl">
            A backend developer journey.
            </p>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            I’m building my journey through code, projects and hands-on learning —
with a focus on backend development, system thinking and solutions that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/skyvault"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/30 transition hover:scale-105"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>

        <div className="mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
          <HomeCard
            icon={<Rocket />}
            title="Current project"
            value="Fenix Portfolio"
            text="Currently building my personal portfolio universe using React and Tailwind.."
          />

          <HomeCard
  icon={<Trophy />}
  title="Featured Project"
  value="B-tzy"
  text="A game project published on GitHub, showcasing version control, structure and hands-on development."
  link="https://github.com/felixlfchansson-coder/B-tzy"
/>

          <HomeCard
            icon={<Code2 />}
            title="Current Course"
            value="Version Control with Git"
            text="Focused on Git, GitHub, branches, commits and collaborative development."
            />
        </div>
      </section>
    </main>
  );
}

function HomeCard({ icon, title, value, text, link }) {
  return (
    <motion.a
  href={link}
  target="_blank"
  rel="noopener noreferrer"
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-[2rem] border border-white/10 bg-[#06111f]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-[#06111f]/80"
    >
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
        {icon}
      </div>

      <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
        {title}
      </p>

      <h3 className="mt-3 text-2xl font-black text-white">{value}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </motion.a>
  );
}