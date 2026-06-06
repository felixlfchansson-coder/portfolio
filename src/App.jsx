import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";

import Home from "./pages/Home";
import Journey from "./pages/Journey";
import SkyVault from "./pages/Projects";
import EmberArchive from "./pages/GameLab";
import FutureForge from "./pages/FuturePlans";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FenixCV from "./pages/FenixCV";

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Sidebar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/the-path" element={<Journey />} />
        <Route path="/projects" element={<SkyVault />} />
        <Route path="/the-forge" element={<EmberArchive />} />
        <Route path="/the-workshop" element={<FutureForge />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cv" element={<FenixCV />} />
      </Routes>
    </div>
  );
}