import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import { Link } from "react-router-dom";

const DIFFICULTY_COLORS = {
  Easy:   { badge: "border-green-400/30 bg-green-400/10 text-green-300", dot: "bg-green-400" },
  Medium: { badge: "border-yellow-400/30 bg-yellow-400/10 text-yellow-300", dot: "bg-yellow-400" },
  Hard:   { badge: "border-red-400/30 bg-red-400/10 text-red-300", dot: "bg-red-400" },
};

const STATUS_COLORS = {
  Completed:      "border-green-400/20 bg-green-400/10 text-green-300",
  Ongoing:        "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "In Development": "border-slate-400/20 bg-slate-400/10 text-slate-300",
};

const FILTERS = ["All", "Easy", "Medium", "Hard"];

export default function EmberArchive() {
  const [games, setGames] = useState([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const url =
      filter === "All"
        ? "http://localhost:3001/api/games"
        : `http://localhost:3001/api/games?difficulty=${filter}`;

    setLoading(true);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setGames(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not connect to server.");
        setLoading(false);
      });
  }, [filter]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#09050e] pl-28 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/src/assets/ember/ember-bg.png')] bg-cover bg-center opacity-50" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#09050e]/90 via-[#09050e]/50 to-[#09050e]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#09050e]/95 via-transparent to-[#09050e]/40" />

      {/* Floating embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-orange-400"
            style={{
              left: `${10 + i * 7}%`,
              top: `${30 + (i % 5) * 12}%`,
            }}
            animate={{ y: [-20, -60], opacity: [0.8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.4,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <section className="relative z-10 mx-auto max-w-7xl px-8 py-16">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            to="/skyvault"
            className="inline-flex items-center gap-2 text-sm text-orange-300/60 transition hover:text-orange-300"
          >
            ← Back to SkyVault
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 max-w-4xl"
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-400/80">
            炎の記録 — Records of Flame
          </p>

          <h1 className="text-6xl font-black leading-none tracking-tight md:text-8xl">
            Ember{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-red-400 bg-clip-text text-transparent">
              Archive
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-orange-100/70">
            Games I build. Worlds I believe in. Stories that burn.
          </p>
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.2em] text-orange-400/50">
            Three worlds. Three stories. One archive.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-5 py-2 text-sm font-bold transition-all ${
                filter === f
                  ? "border-orange-400 bg-orange-400/20 text-orange-300"
                  : "border-white/10 bg-white/5 text-slate-400 hover:border-orange-400/40 hover:text-orange-200"
              }`}
            >
              {f === "All" ? "All Games" : f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {loading && (
            <p className="col-span-3 text-center text-orange-400/50">
              Stoking the flames...
            </p>
          )}
          {error && (
            <p className="col-span-3 text-center text-red-400">{error}</p>
          )}
          {!loading && !error && games.length === 0 && (
            <p className="col-span-3 text-center text-slate-500">
              No games found for this difficulty.
            </p>
          )}
          {!loading &&
            !error &&
            games.map((game, index) => (
              <GameCard key={game.id} game={game} index={index} />
            ))}
        </div>

        {/* Footer tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 flex flex-col items-center gap-4 pb-16"
        >
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-orange-400/40 to-transparent" />
          <Flame className="h-5 w-5 text-orange-400/50" />
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-orange-400/40">
            Built with heart. Played with fire.
          </p>
          <p className="text-xs text-orange-900/60">
            炎は記憶する。我らもまた、炎となる。
          </p>
        </motion.div>
      </section>
    </main>
  );
}

function GameCard({ game, index }) {
  const diff = DIFFICULTY_COLORS[game.difficulty] ?? DIFFICULTY_COLORS.Easy;
  const statusStyle = STATUS_COLORS[game.status] ?? STATUS_COLORS.Completed;

  return (
    <motion.a
      href={game.link !== "#" ? game.link : undefined}
      target={game.link !== "#" ? "_blank" : undefined}
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 80 }}
      className="group relative overflow-hidden rounded-[2rem] border border-orange-900/30 bg-[#100808]/70 p-7 shadow-2xl shadow-black/60 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-400/40 hover:bg-[#180a0a]/80"
    >
      {/* Bottom ember glow */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-orange-900/20 to-transparent" />
      {/* Top corner glow */}
      <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-orange-500/5 blur-2xl" />

      <div className="relative z-10">
        {/* Top row */}
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-400/10 text-orange-300 ring-1 ring-orange-400/20">
            <Flame className="h-7 w-7" />
          </div>

          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold ${diff.badge}`}>
              <span className={`h-1.5 w-1.5 rounded-full ${diff.dot}`} />
              {game.difficulty}
            </span>
            <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold ${statusStyle}`}>
              {game.status}
            </span>
          </div>
        </div>

        <p className="text-xs font-black uppercase tracking-[0.25em] text-orange-400">
          {game.genre}
        </p>

        <h2 className="mt-3 text-2xl font-black text-white">{game.title}</h2>

        <p className="mt-4 min-h-[72px] text-sm leading-6 text-orange-100/60">
          {game.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {game.stack.map((item) => (
            <span
              key={item}
              className="rounded-full border border-orange-900/40 bg-orange-900/10 px-3 py-1 text-xs text-orange-200/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}