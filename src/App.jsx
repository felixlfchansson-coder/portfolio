import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Journey from "./pages/Journey";
import SkyVault from "./pages/SkyVault";
import EmberArchive from "./pages/EmberArchive";
import FutureForge from "./pages/FutureForge";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FenixCV from "./pages/FenixCV";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/skyvault" element={<SkyVault />} />
        <Route path="/ember-archive" element={<EmberArchive />} />
        <Route path="/future-forge" element={<FutureForge />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<FenixCV />} />
      </Routes>
    </div>
  );
}