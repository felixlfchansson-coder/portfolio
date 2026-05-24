import { Check, Lock, Flame, Code2 } from "lucide-react";
import { motion } from "framer-motion";

import { journeyCourses } from "../data/journey";

import journeyBg from "../assets/journey/journey-bg.png";
import phoenix from "../assets/journey/phoenix-silhouette.png";

const heatStyles = {
  red: "border-red-400 bg-red-500/20 text-red-200 shadow-red-500/40",
  orange:
    "border-orange-400 bg-orange-500/20 text-orange-200 shadow-orange-500/40",
  yellow:
    "border-yellow-300 bg-yellow-400/20 text-yellow-100 shadow-yellow-400/40",
  white: "border-white bg-white/20 text-white shadow-white/40",
  lightblue:
    "border-cyan-300 bg-cyan-400/20 text-cyan-100 shadow-cyan-400/40",
  blue: "border-blue-400 bg-blue-500/20 text-blue-100 shadow-blue-500/40",
};

const completed = journeyCourses.filter((c) => c.status === "done").length;
const current = journeyCourses.find((c) => c.status === "current");

export default function Journey() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      {/* BG */}
      <img
        src={journeyBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />

      <div className="absolute inset-0 bg-[#020617]/50" />

      {/* PHOENIX */}
      <img
        src={phoenix}
        alt=""
     className="phoenix-breath pointer-events-none absolute bottom-[-120px] left-[-180px] w-[1200px] mix-blend-screen"/>

      <section className="relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 xl:grid-cols-[260px_1fr_320px] gap-8 px-8 py-10">
        {/* LEFT PANEL */}
        <aside className="xl:sticky xl:top-8 h-fit rounded-[2rem] border border-white/10 bg-black/30 p-6 backdrop-blur-xl">
          <h2 className="text-2xl font-black">
            FELIX <span className="text-orange-400">HANSSON</span>
          </h2>

          <p className="mt-1 text-sm uppercase tracking-[0.2em] text-slate-400">
            Backend Developer
          </p>

          <div className="mt-10">
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Current Heatlvl
            </p>

            <p className="mt-3 text-6xl font-black text-orange-400">
              {completed}
              <span className="ml-2 text-3xl text-slate-500">/ 15</span>
            </p>
          </div>

          <div className="mt-8">
            <div className="flex justify-between text-sm text-slate-400">
              <span>Progression</span>
              <span>{Math.round((completed / 15) * 100)}%</span>
            </div>

            <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-orange-500"
                style={{ width: `${(completed / 15) * 100}%` }}
              />
            </div>
          </div>

          <div className="mt-10 rounded-3xl border border-orange-400/20 bg-orange-500/10 p-5">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-300">
              Current Focus
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/20 text-yellow-300">
                <Code2 />
              </div>

              <div>
                <p className="font-bold text-yellow-100">
                  {current?.title}
                </p>

                <p className="text-sm text-slate-400">
                  {current?.points} YhP | {current?.weeks}
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* CENTER */}
        <div className="relative rounded-[2rem] border border-white/10 bg-black/20 p-10 backdrop-blur-sm">
          <div className="text-center">
            <p className="text-sm font-black uppercase tracking-[0.4em] text-slate-400">
              Backend
            </p>

            <h1 className="mt-3 text-5xl font-black uppercase tracking-[0.25em]">
              Ascension{" "}
              <span className="text-yellow-300">Journey</span>
            </h1>

            <p className="mt-4 text-lg text-slate-300">
              Every orb brings you closer to mastery.
            </p>
          </div>

          {/* PATH AREA */}
          <div className="relative mt-12 space-y-4 md:space-y-5">
            <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-red-500 via-yellow-300 to-blue-400 md:left-1/2" />

            {journeyCourses.map((course, index) => (
                <Orb key={course.id} course={course} index={index} />
            ))}
            </div>
        </div>

        {/* RIGHT PANEL */}
        <aside className="sticky top-8 h-fit rounded-[2rem] border border-yellow-400/20 bg-black/30 p-6 backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.25em] text-yellow-300">
            Current Focus
          </p>

          <div className="mt-8 flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border border-yellow-300 bg-yellow-400/10 text-yellow-100 shadow-[0_0_40px_rgba(255,220,80,0.45)]">
              <Code2 className="h-14 w-14" />
            </div>
          </div>

          <h2 className="mt-8 text-center text-3xl font-black">
            {current?.title}
          </h2>

          <p className="mt-2 text-center text-slate-400">
            {current?.points} YhP | {current?.weeks}
          </p>

          <div className="mt-8 space-y-4 text-slate-300">
            <p>✔ Git & GitHub</p>
            <p>✔ Branches & Merging</p>
            <p>✔ Pull Requests</p>
            <p>✔ Conflict Resolution</p>
            <p>✔ Team Collaboration</p>
          </div>
        </aside>
      </section>
    </main>
  );
}

function Orb({ course, index }) {
  const isLeft = index % 2 === 0;
  const isCurrent = course.status === "current";
  const isLocked = course.status === "locked";

  return (
    <motion.article
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.04 }}
      className={[
        "group relative grid items-start gap-5 md:grid-cols-[1fr_72px_1fr]",
        isLeft ? "" : "",
      ].join(" ")}
    >
      <div className={isLeft ? "hidden md:block" : "md:col-start-1"}>
        {!isLeft && <CourseCard course={course} />}
      </div>

      <div className="relative z-10 flex justify-start md:col-start-2 md:justify-center">
        <div
          className={[
            "flex h-16 w-16 items-center justify-center rounded-full border-2 shadow-2xl backdrop-blur-md transition duration-300 group-hover:scale-110 md:h-16 md:w-16",
            heatStyles[course.heat],
            isLocked && "opacity-50 grayscale",
            isCurrent && "animate-pulse ring-8 ring-yellow-300/20",
          ].join(" ")}
        >
          {course.status === "done" && <Check className="h-7 w-7 md:h-9 md:w-9" />}
          {course.status === "current" && <Flame className="h-7 w-7 md:h-9 md:w-9" />}
          {course.status === "locked" && <Lock className="h-7 w-7 md:h-8 md:w-8" />}
        </div>
      </div>

      <div className={isLeft ? "md:col-start-3" : "hidden md:block"}>
        {isLeft && <CourseCard course={course} />}
      </div>

      <div className="ml-24 md:hidden">
        <CourseCard course={course} />
      </div>
    </motion.article>
  );
}
function CourseCard({ course }) {
  return (
    <div className="max-w-md rounded-2xl border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition-all duration-300 group-hover:border-orange-400/30 group-hover:bg-black/50">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-base font-black leading-tight md:text-lg">
            {course.title}
          </h3>

          <p className="mt-1 text-xs text-slate-400">
            {course.points} YhP | {course.weeks}
          </p>
        </div>

        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-widest text-slate-300">
          {course.status}
        </span>
      </div>

      <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-80 group-hover:opacity-100 md:group-hover:max-h-96">
        <p className="text-sm leading-6 text-slate-300">
          {course.description}
        </p>

        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {course.includes?.map((item) => (
            <li
              key={item}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}