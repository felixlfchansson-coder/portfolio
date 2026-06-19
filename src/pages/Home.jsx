import { ArrowRight, Code2, Rocket, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import hemBg from "../assets/hem/hem-bg.png";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pt-16 lg:pt-0 lg:pl-28 text-white">
      <img src={hemBg} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/45 to-[#020617]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
      {/* Extra scrim on phones so text stays readable over the bright phoenix */}
      <div className="absolute inset-0 bg-[#020617]/55 md:hidden" />

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
            I'm building my journey through code, projects and hands-on learning —
            with a focus on backend development, system thinking and solutions that matter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/30 transition hover:scale-105"
            >
              View My Work
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>

        <div className="mt-20 grid max-w-5xl gap-5 md:grid-cols-3">
          <HomeCard
            icon={<Rocket />}
            title="Current project"
            value="Skafferi"
            text="A pantry server and app with a REST API for tracking food, recipes and a shopping list — built with Node, Express and SQLite, plus an Open Food Facts integration."
            href="https://github.com/felixlfchansson-coder/skafferi-App"
          />
          <HomeCard
            icon={<Trophy />}
            title="Featured Project"
            value="B-tzy"
            text="A game project published on GitHub, showcasing version control, structure and hands-on development."
            href="https://github.com/felixlfchansson-coder/B-tzy"
          />
          <HomeCard
            icon={<Code2 />}
            title="Right now"
            value="Summer break"
            text="Coursework paused for the summer — using the time to build real projects like Skafferi."
            to="/the-path"
          />
        </div>
      </section>
    </main>
  );
}

function HomeCard({ icon, title, value, text, to, href }) {
  const className =
    "rounded-[2rem] border border-white/10 bg-[#06111f]/65 p-6 shadow-2xl shadow-black/30 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-[#06111f]/80 block";

  const content = (
    <>
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-400">
        {icon}
      </div>
      <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">{title}</p>
      <h3 className="mt-3 text-2xl font-black text-white">{value}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{text}</p>
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 45 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={className}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={className}
    >
      <Link to={to} className="block h-full">
        {content}
      </Link>
    </motion.div>
  );
}