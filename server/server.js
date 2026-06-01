// ─── Importerar det vi behöver ────────────────────────────────
import express from "express";           // Express är själva servern
import cors from "cors";                 // CORS låter React prata med servern (olika portar)
import { readFileSync } from "fs";       // fs = file system, läser filer från disk
import { fileURLToPath } from "url";     // Hjälper oss hitta var server.js-filen ligger
import { dirname, join } from "path";    // Bygger filsökvägar som fungerar på alla datorer

// ─── Grundinställningar ───────────────────────────────────────
const __dirname = dirname(fileURLToPath(import.meta.url)); // Absolut sökväg till server/-mappen
const app = express();                   // Skapar själva Express-appen
const PORT = 3001;                       // Porten servern lyssnar på (localhost:3001)

app.use(cors());                         // Tillåter anrop från React (localhost:5173)
app.use(express.json());                 // Låter servern läsa JSON i inkommande anrop

// ─── Hjälpfunktion ────────────────────────────────────────────
// Läser en JSON-fil från data/-mappen och gör om den till ett JS-objekt
function readData(filename) {
  const filePath = join(__dirname, "data", filename); // Bygger sökvägen: server/data/filename
  return JSON.parse(readFileSync(filePath, "utf-8")); // Läser filen och parsar JSON
}

// ─── SkyVault routes ──────────────────────────────────────────

// Hämta alla projekt (eller filtrerade om ?difficulty=Easy/Medium/Hard skickas med)
// Exempel: GET /api/projects eller GET /api/projects?difficulty=Hard
app.get("/api/projects", (req, res) => {
  const projects = readData("projects.json"); // Läser projects.json
  const { difficulty } = req.query;           // Hämtar ev. ?difficulty= från URL:en

  if (difficulty && difficulty !== "All") {
    // Om difficulty skickades med — filtrera och skicka bara matchande projekt
    return res.json(projects.filter((p) => p.difficulty === difficulty));
  }

  res.json(projects); // Annars skicka alla projekt
});

// Hämta ett enskilt projekt via ID
// Exempel: GET /api/projects/1
app.get("/api/projects/:id", (req, res) => {
  const projects = readData("projects.json");
  const project = projects.find((p) => p.id === parseInt(req.params.id)); // Letar upp rätt projekt

  if (!project) return res.status(404).json({ error: "Project not found" }); // 404 om det inte finns

  res.json(project); // Skickar projektet
});

// ─── Ember Archive routes ─────────────────────────────────────

// Hämta alla spel (eller filtrerade om ?difficulty= skickas med)
// Exempel: GET /api/games eller GET /api/games?difficulty=Easy
app.get("/api/games", (req, res) => {
  const games = readData("games.json"); // Läser games.json
  const { difficulty } = req.query;     // Hämtar ev. ?difficulty= från URL:en

  if (difficulty && difficulty !== "All") {
    // Om difficulty skickades med — filtrera och skicka bara matchande spel
    return res.json(games.filter((g) => g.difficulty === difficulty));
  }

  res.json(games); // Annars skicka alla spel
});

// Hämta ett enskilt spel via ID
// Exempel: GET /api/games/2
app.get("/api/games/:id", (req, res) => {
  const games = readData("games.json");
  const game = games.find((g) => g.id === parseInt(req.params.id)); // Letar upp rätt spel

  if (!game) return res.status(404).json({ error: "Game not found" }); // 404 om det inte finns

  res.json(game); // Skickar spelet
});

// ─── Health check ─────────────────────────────────────────────
// Enkel route för att kolla om servern lever
// Exempel: GET /api/health → { status: "ok", message: "Fenix backend is alive 🔥" }
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Fenix backend is alive 🔥" });
});

// ─── Starta servern ───────────────────────────────────────────
// Börjar lyssna på PORT 3001 — utan detta händer ingenting
app.listen(PORT, () => {
  console.log(`🔥 Server running on http://localhost:${PORT}`);
});