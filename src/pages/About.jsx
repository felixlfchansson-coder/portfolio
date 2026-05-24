import { motion } from "framer-motion";
import { BookOpen, Code2, ShieldCheck, Target } from "lucide-react";

import aboutBg from "../assets/about/about-bg.png";
import profile from "../assets/about/profile1.png";

const drivers = [
  {
    icon: Target,
    title: "Problem Solving",
    text: "I enjoy analyzing, understanding and solving problems — no matter how complex they are.",
  },
  {
    icon: BookOpen,
    title: "Knowledge",
    text: "I’m constantly curious and always looking for new things to learn and improve.",
  },
  {
    icon: ShieldCheck,
    title: "Quality",
    text: "I aim to write clean, reliable and maintainable code that lasts over time.",
  },
  {
    icon: Code2,
    title: "Responsibility",
    text: "I take ownership, follow through and build solutions people can trust.",
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      
      {/* BACKGROUND */}
      <img
        src={aboutBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/90 via-[#020617]/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-16">
        
        {/* HERO */}
        <div className="grid min-h-[620px] items-center gap-12 lg:grid-cols-[1fr_520px]">
          
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
              About Me
            </p>

            <h1 className="max-w-3xl text-6xl font-black leading-none tracking-tight md:text-7xl">
              Who is{" "}
              <span className="bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
                Felix Hansson?
              </span>
            </h1>

            <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 to-transparent" />

            <div className="mt-8 max-w-xl space-y-6 text-base leading-8 text-slate-300">
              <p>
                I’m a curious and goal-driven backend developer student with a
                strong interest in problem solving, system thinking and building
                reliable solutions.
              </p>

              <p>
                My previous experience in service and security has shaped me
                into someone who is responsible, calm under pressure and used to
                working with people in different situations.
              </p>

              <p>
                I enjoy learning new things, taking on challenges and improving
                both as a developer and as a person.
              </p>
            </div>

            <div className="mt-10">
              <p className="text-3xl text-orange-400">
                Felix Hansson
              </p>

              <p className="mt-2 text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                Backend Developer Student
              </p>
            </div>
          </motion.div>

          {/* RIGHT PROFILE */}
          <motion.div
  initial={{ opacity: 0, scale: 0.92 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.9 }}
  className="relative hidden lg:flex items-end justify-center overflow-visible"
>
  {/* GLOW */}
  <div className="absolute bottom-10 h-[420px] w-[420px] rounded-full bg-orange-500/20 blur-[120px]" />

  {/* IMAGE */}
  <img
    src={profile}
    alt="Felix Hansson"
    className="
      relative z-10
      max-h-[760px]
      w-auto
      object-contain
      drop-shadow-[0_0_45px_rgba(255,120,0,0.18)]
    "
  />
</motion.div>
        </div>

        {/* DRIVERS */}
        <section className="mt-10">
          <p className="mb-6 text-sm font-black uppercase tracking-[0.3em] text-white">
            What Drives Me
          </p>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {drivers.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 45 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="rounded-[2rem] border border-white/10 bg-[#06111f]/65 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/30"
                >
                  <Icon className="mb-6 h-9 w-9 text-orange-400" />

                  <h3 className="text-lg font-black uppercase tracking-[0.12em]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* FACTS */}
        <section className="mt-10 grid gap-5 rounded-[2rem] border border-white/10 bg-black/30 p-8 backdrop-blur-xl md:grid-cols-5">
          <Fact title="Age" value="26" />
          <Fact title="Based In" value="Sweden" />
          <Fact title="Direction" value="Backend Development" />
          <Fact title="Education" value="Grit Academy" />
          <Fact title="Goal" value="Build systems that matter." />
        </section>

        {/* QUOTE */}
        <section className="mt-10 rounded-[2rem] border border-orange-400/20 bg-black/30 p-8 text-center backdrop-blur-xl">
          <p className="text-5xl font-black text-orange-400">”</p>

          <p className="text-xl italic text-slate-200">
            I don’t just build code.
          </p>

          <p className="mt-2 text-2xl font-black text-orange-400">
            I build solutions, trust and future.
          </p>
        </section>
      </section>
    </main>
  );
}

function Fact({ title, value }) {
  return (
    <div className="border-white/10 py-2 md:border-r md:last:border-r-0">
      <p className="text-xs font-black uppercase tracking-[0.25em] text-slate-400">
        {title}
      </p>

      <p className="mt-3 text-lg font-bold text-white">
        {value}
      </p>
    </div>
  );
}