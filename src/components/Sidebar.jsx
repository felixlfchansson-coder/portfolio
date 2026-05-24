import { NavLink } from "react-router-dom";
import {
  Home,
  Compass,
  Cloud,
  Trophy,
  User,
  Mail,
  FileText,
} from "lucide-react";

import icon from "../assets/sidebar/icon.png";

const links = [
  { name: "Home", path: "/", icon: Home },
  { name: "Journey", path: "/journey", icon: Compass },
  { name: "SkyVault", path: "/skyvault", icon: Cloud },
  { name: "Future Forge", path: "/future-forge", icon: Trophy },
  { name: "About", path: "/about", icon: User },
  { name: "Contact", path: "/contact", icon: Mail },
  { name: "CV", path: "/cv", icon: FileText },
];

export default function Sidebar() {
  return (
    <aside className="group fixed left-4 top-4 z-50 flex h-[calc(100vh-2rem)] w-20 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/70 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:w-64">
      <NavLink to="/" className="flex h-28 items-center gap-4 px-5">
      <img
        src={icon}
        alt="Fenix"
        className="h-10 w-10 object-contain drop-shadow-[0_0_18px_rgba(255,122,0,0.5)]"
      />

      <div className="min-w-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
          Felix
        </p>
        <p className="text-xs text-slate-400">Developer</p>
      </div>
    </NavLink>

      <nav className="mt-4 flex flex-1 flex-col gap-2 px-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                [
                  "group/link flex h-12 items-center gap-4 rounded-2xl px-4 text-sm transition",
                  isActive
                    ? "bg-orange-500/15 text-orange-300 shadow-[0_0_25px_rgba(255,122,0,0.12)]"
                    : "text-slate-400 hover:bg-white/5 hover:text-white",
                ].join(" ")
              }
            >
              <Icon className="h-5 w-5 shrink-0" />

              <span className="whitespace-nowrap opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {link.name}
              </span>
            </NavLink>
          );
        })}
      </nav>

      <div className="border-t border-white/10 p-4">
        <div className="mb-4 flex gap-4 px-1 text-slate-400">
          <a href="mailto:felix.lfc.hansson@gmail.com" className="hover:text-orange-300">
            <Mail className="h-5 w-5" />
          </a>
        </div>

        <p className="hidden text-xs leading-5 text-orange-300/80 group-hover:block">
          Ideas are sparks. Systems are forged.
        </p>
      </div>
    </aside>
  );
}