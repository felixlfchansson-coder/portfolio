import { motion } from "framer-motion";
import {
  Hammer,
  ArrowRight,
  Sparkles,
  Layers,
  Rocket,
  Server,
} from "lucide-react";

import ideas from "../data/ideas";
import forgeBg from "../assets/future-forge/future-forge-bg.png";

const statusStyles = {
  Planning: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300",
  "In Development": "border-green-400/30 bg-green-400/10 text-green-300",
  "Future Project": "border-purple-400/30 bg-purple-400/10 text-purple-300",
};

export default function FuturePlans() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      <img
        src={forgeBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-55"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/80 to-[#020617]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-14">
        <header className="max-w-4xl">
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Ideas. Plans. Future builds.
          </p>

          <h1 className="text-6xl font-black leading-none tracking-[0.18em] md:text-8xl">
            The{" "}
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              Workshop
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Planned projects and technical ideas I want to build to grow as a
            backend developer.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 rounded-2xl border border-white/10 bg-black/25 p-3 backdrop-blur-xl">
            <Legend color="bg-green-400" label="In Development" />
            <Legend color="bg-yellow-400" label="Planning" />
            <Legend color="bg-purple-400" label="Future Project" />
          </div>
        </header>

        <section className="mt-12 grid gap-6 lg:grid-cols-3">
          {ideas.map((idea, index) => (
            <ForgeCard key={idea.id} idea={idea} index={index} />
          ))}
        </section>

        <footer className="mx-auto mt-12 max-w-3xl rounded-2xl border border-orange-400/20 bg-black/30 px-6 py-4 text-center text-slate-300 backdrop-blur-xl">
          <span className="text-orange-400">Ideas are sparks.</span> Systems are
          what bring them to life.
        </footer>
      </section>
    </main>
  );
}

function ForgeCard({ idea, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.12, type: "spring", stiffness: 80 }}
      className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#06111f]/75 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/30 hover:bg-[#06111f]/90"
    >
      <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-orange-500/10 blur-3xl transition group-hover:bg-orange-500/20" />

      <div className="relative z-10">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-orange-400/20 bg-orange-500/10 text-orange-300">
            <Hammer className="h-7 w-7" />
          </div>

          <span
            className={[
              "rounded-full border px-3 py-1 text-xs font-bold",
              statusStyles[idea.status] ||
                "border-white/10 bg-white/5 text-slate-300",
            ].join(" ")}
          >
            {idea.status}
          </span>
        </div>

        <h2 className="text-2xl font-black text-white">{idea.name}</h2>

        <p className="mt-4 min-h-[96px] text-sm leading-6 text-slate-300">
          {idea.description}
        </p>

        <Block title="Backend Goals" icon={<Rocket className="h-4 w-4" />}>
          {idea.goals.map((goal) => (
            <Tag key={goal}>{goal}</Tag>
          ))}
        </Block>

        <Block title="Tech Stack" icon={<Server className="h-4 w-4" />}>
          {idea.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </Block>

        {idea.services && (
          <Block title="Services" icon={<Layers className="h-4 w-4" />}>
            {idea.services.map((service) => (
              <Tag key={service}>{service}</Tag>
            ))}
          </Block>
        )}

        <Block
          title="Future Features"
          icon={<Sparkles className="h-4 w-4" />}
        >
          {idea.futureFeatures.map((feature) => (
            <Tag key={feature}>{feature}</Tag>
          ))}
        </Block>

        <div className="mt-7 flex items-center justify-end text-orange-300">
          <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
        </div>
      </div>
    </motion.article>
  );
}

function Block({ title, icon, children }) {
  return (
    <div className="mt-6">
      <div className="mb-3 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-orange-300">
        {icon}
        {title}
      </div>

      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

function Tag({ children }) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
      {children}
    </span>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-2 px-3 py-1 text-sm text-slate-300">
      <span className={`h-2.5 w-2.5 rounded-full ${color}`} />
      {label}
    </div>
  );
}