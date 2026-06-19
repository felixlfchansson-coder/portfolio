import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  Home,
  Compass,
  Cloud,
  Flame,
  Hammer,
  User,
  Mail,
  FileText,
  Menu,
  X,
} from "lucide-react";

import { Desktop, TabletAndBelow } from "./Responsive";
import icon from "../assets/sidebar/icon.png";

const links = [
  { name: "Home",         path: "/",             icon: Home },
  { name: "The Path",     path: "/the-path",     icon: Compass },
  { name: "Projects",     path: "/projects",     icon: Cloud },
  { name: "The Forge",    path: "/the-forge",    icon: Flame },
  { name: "The Workshop", path: "/the-workshop", icon: Hammer },
  { name: "About",        path: "/about",        icon: User },
  { name: "Contact",      path: "/contact",      icon: Mail },
  { name: "CV",           path: "/cv",           icon: FileText },
];

export default function Sidebar() {
  return (
    <>
      <Desktop>
        <DesktopRail />
      </Desktop>
      <TabletAndBelow>
        <MobileNav />
      </TabletAndBelow>
    </>
  );
}

/* ---------------------------------------------------------------- */
/* Desktop: hover-to-expand rail (>= 1024px)                         */
/* ---------------------------------------------------------------- */

function DesktopRail() {
  return (
    <aside className="group fixed left-4 top-4 z-50 flex h-[calc(100vh-2rem)] w-20 flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-[#020617]/70 text-white shadow-2xl shadow-black/40 backdrop-blur-xl transition-all duration-300 hover:w-64">
      <NavLink to="/" className="flex h-28 items-center gap-4 px-5">
        <img
          src={icon}
          alt="Fenix"
          className="h-10 w-10 object-contain drop-shadow-[0_0_18px_rgba(255,122,0,0.5)]"
        />
        <div className="min-w-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">Felix</p>
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
                  "flex h-12 items-center gap-4 rounded-2xl px-4 text-sm transition",
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

/* ---------------------------------------------------------------- */
/* Mobile + tablet: top bar with a slide-in drawer (< 1024px)        */
/* ---------------------------------------------------------------- */

function MobileNav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close the drawer whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock background scroll and allow Escape to close while open.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Fixed top bar */}
      <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between border-b border-white/10 bg-[#020617]/85 px-4 backdrop-blur-xl">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={icon}
            alt="Fenix"
            className="h-8 w-8 object-contain drop-shadow-[0_0_18px_rgba(255,122,0,0.5)]"
          />
          <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
            Felix
          </span>
        </NavLink>

        <button
          type="button"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
        >
          <Menu className="h-5 w-5" />
        </button>
      </header>

      {/* Drawer + backdrop */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed right-0 top-0 z-50 flex h-full w-72 max-w-[80vw] flex-col border-l border-white/10 bg-[#020617]/95 text-white shadow-2xl shadow-black/50 backdrop-blur-xl"
            >
              <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-orange-400">
                  Menu
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3">
                {links.map((link) => {
                  const Icon = link.icon;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      className={({ isActive }) =>
                        [
                          "flex h-12 items-center gap-4 rounded-2xl px-4 text-sm transition",
                          isActive
                            ? "bg-orange-500/15 text-orange-300"
                            : "text-slate-300 hover:bg-white/5 hover:text-white",
                        ].join(" ")
                      }
                    >
                      <Icon className="h-5 w-5 shrink-0" />
                      <span className="whitespace-nowrap">{link.name}</span>
                    </NavLink>
                  );
                })}
              </nav>

              <div className="border-t border-white/10 p-5">
                <a
                  href="mailto:felix.lfc.hansson@gmail.com"
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-300"
                >
                  <Mail className="h-5 w-5" />
                  <span className="text-sm">felix.lfc.hansson@gmail.com</span>
                </a>
                <p className="mt-4 text-xs leading-5 text-orange-300/80">
                  Ideas are sparks. Systems are forged.
                </p>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}