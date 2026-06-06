import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cloud, Check, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

import gamelabBtn from "../assets/skyvault/gamelab-btn.png";

const DIFFICULTY_COLORS = {
  Easy:   "border-green-400/30 bg-green-400/10 text-green-300",
  Medium: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  Hard:   "border-red-400/30 bg-red-400/10 text-red-300",
};

const FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      filter === "All"
        ? "https://felix-backend-production-50fa.up.railway.app/api/projects"
        : `https://felix-backend-production-50fa.up.railway.app/api/projects?difficulty=${filter}`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not connect to server.");
        setLoading(false);
      });
  }, [filter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#020617] via-[#0a1628] to-[#020617]" />
      <div className="absolute inset-0 bg-[url('/src/assets/skyvault/skyvault-bg.png')] bg-cover bg-center opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/80 via-[#020617]/25 to-[#020617]/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/90 via-transparent to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-300">
            My Projects
          </p>

          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            <span className="bg-gradient-to-r from-orange-300 via-yellow-200 to-sky-200 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-200">
            Learned from. Built from. Risen from.
          </p>
          <p className="mt-2 max-w-2xl text-base leading-7 text-slate-400">
            A collection of projects I have completed and learned from along my developer journey.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-bold transition-all ${
                filter === f
                  ? "border-orange-300 bg-orange-300/20 text-orange-300"
                  : "border-white/20 bg-white/5 text-slate-300 hover:border-white/40 hover:text-white"
              }`}
            >
              {f === "All" ? "All Projects" : f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {loading && <p className="col-span-3 text-center text-slate-400">Loading projects...</p>}
          {error && <p className="col-span-3 text-center text-red-400">{error}</p>}
          {!loading && !error && projects.length === 0 && (
            <p className="col-span-3 text-center text-slate-400">No projects found for this difficulty.</p>
          )}
          {!loading && !error && projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Banner – The Forge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-24"
        >
          <Link to="/the-forge">
            <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl shadow-black/60 transition hover:scale-[1.01]">
              {/* Background image */}
              <img
                src={gamelabBtn}
                alt="The Forge"
                className="absolute inset-0 h-full w-full object-cover opacity-60 transition group-hover:opacity-75"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/80 via-transparent to-[#1a0a05]/80" />
              {/* Embers */}
              <div className="absolute right-0 top-0 h-full w-1/2 overflow-hidden opacity-60">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-orange-400"
                    style={{ right: `${10 + i * 10}%`, top: `${20 + (i % 4) * 20}%` }}
                    animate={{ y: [-10, -30], opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 2 + i * 0.3, delay: i * 0.4 }}
                  />
                ))}
              </div>

              <div className="relative z-10 flex items-center justify-between px-12 py-10">
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.3em] text-slate-300">
                    The mountain awaits
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Where the fire never fades
                  </p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="text-4xl"></span>
                  <div className="mt-1 h-px w-16 bg-gradient-to-r from-transparent via-orange-400/60 to-transparent" />
                </div>

                <div className="text-right">
                  <h2 className="bg-gradient-to-r from-orange-300 via-amber-200 to-orange-400 bg-clip-text text-3xl font-black text-transparent">
                    The Forge
                  </h2>
                  <p className="mt-1 text-sm text-orange-300/60 transition group-hover:text-orange-300">
                    Explore projects forged in deeper flames →
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      </section>
    </main>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.link !== "#" ? project.link : undefined}
      target={project.link !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/15 bg-[#06111f]/65 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-300/40 hover:bg-[#06111f]/80"
    >
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/5 to-transparent" />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-sky-400/10 text-sky-200 ring-1 ring-sky-200/20">
            <Cloud className="h-7 w-7" />
          </div>
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${DIFFICULTY_COLORS[project.difficulty]}`}>
              {project.difficulty}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full border border-green-400/20 bg-green-400/10 px-3 py-1 text-xs font-bold text-green-300">
              <Check className="h-3 w-3" />
              {project.status}
            </span>
          </div>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-300">{project.type}</p>
        <h2 className="mt-3 text-2xl font-black text-white">{project.title}</h2>
        <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-300">{project.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
              {item}
            </span>
          ))}
        </div>

        {project.link !== "#" && (
          <div className="mt-4 flex items-center gap-1 text-xs text-orange-300/60 transition group-hover:text-orange-300">
            <ExternalLink className="h-3 w-3" />
            View project
          </div>
        )}
      </div>
    </motion.a>
  );
}