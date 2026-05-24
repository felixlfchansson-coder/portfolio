import { motion } from "framer-motion";
import { ExternalLink, Cloud, Check } from "lucide-react";

import skyBg from "../assets/skyvault/skyvault-bg.png";

const projects = [
  {
    title: "B-tzy",
    type: "Game Project",
    description:
      "A game project published on GitHub, showcasing version control, structure and hands-on development.",
    stack: ["JavaScript", "Git", "GitHub"],
    status: "Completed",
    link: "https://github.com/felixlfchansson-coder/B-tzy",
  },
  {
    title: "Portfolio V1",
    type: "Web Project",
    description:
      "My first personal portfolio universe built with React, Tailwind and cinematic UI design.",
    stack: ["React", "Tailwind", "Vite"],
    status: "Completed",
    link: "#",
  },
  {
    title: "CLI Todo App",
    type: "Backend Practice",
    description:
      "A command-line todo application focused on structure, logic and version control practice.",
    stack: ["Node.js", "CLI", "Git"],
    status: "Completed",
    link: "#",
  },
];

export default function SkyVault() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      <img
        src={skyBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/25 to-[#020617]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-300">
            Completed Projects
          </p>

          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            Sky
            <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-sky-200 bg-clip-text text-transparent">
              Vault
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            A cloud archive of projects I have completed, learned from and
            stored along my developer journey.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCloudCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCloudCard({ project, index }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 90, scale: 0.92 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        type: "spring",
        stiffness: 80,
      }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#06111f]/65 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-300/40 hover:bg-[#06111f]/80"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent opacity-40" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200 ring-1 ring-sky-200/20">
            <Cloud className="h-7 w-7" />
          </div>

          <span className="inline-flex items-center gap-2 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
            <Check className="h-3 w-3" />
            {project.status}
          </span>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">
          {project.type}
        </p>

        <h2 className="mt-3 text-2xl font-black text-white">
          {project.title}
        </h2>

        <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}