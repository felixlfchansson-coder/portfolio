import React from "react";
import { Download, Mail, MapPin, Phone } from "lucide-react";

import bgCv from "../assets/cv/bg-cv.png";
import iconCv from "../assets/cv/icon-cv.png";

const techStack = [
  "JavaScript",
  "TypeScript",
  "Node.js",
  "SQL",
  "REST API",
  "Git/GitHub",
];

const skills = [
  "Backendutveckling",
  "Problemlösning",
  "Service & bemötande",
  "Ansvarstagande",
  "Säkerhetsmedvetenhet",
  "Samarbete",
  "Feedback & lärande",
];

const experience = [
  {
    role: "Kriminalvårdare",
    company: "Kriminalvården",
    period: "September 2025 – Januari 2026",
    text: "Arbetade med säkerhet, övervakning och daglig kontakt med klienter. Rollen krävde ansvarskänsla, stresstålighet och professionellt bemötande i komplexa situationer.",
  },
  {
    role: "Församlingsassistent",
    company: "Borgsjö-Haverö församling",
    period: "Februari 2024 – Maj 2024",
    text: "Arbetade med barn och ungdomar i verksamhet och på läger. Rollen innefattade planering, ansvarstagande och samarbete i grupp.",
  },
  {
    role: "Säsongsanställd vaktmästare",
    company: "Timrå församling",
    period: "Maj 2023 – November 2023",
    text: "Ansvarade för kyrkogårdsskötsel, gravvård och trädgårdsarbete samt bemötande av besökare.",
  },
];

export default function FenixCV() {
  return (
    <main className="min-h-screen bg-[#020617] px-4 py-10 text-white">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,122,0,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(59,164,255,0.12),transparent_35%)]" />

      <section className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-[#06111f]/95 shadow-2xl shadow-orange-500/10 ring-1 ring-white/10 backdrop-blur-xl">
        <div className="grid md:grid-cols-[420px_1fr]">
          {/* SIDEBAR */}
          <aside className="relative overflow-hidden bg-[#08111f]/90 p-9 text-slate-300 backdrop-blur-sm">
            <img
              src={bgCv}
              alt=""
             className="
                absolute
                inset-0
                h-full
                w-full
                object-cover
                object-[35%_top]
                scale-110
                opacity-70
                pointer-events-none
                "
                />

           <div className="
                absolute inset-0
                bg-gradient-to-b
                from-[#08111f]/30
                via-[#08111f]/60
                to-[#08111f]/92
                " />

            <div className="absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-orange-500/20 blur-3xl" />

            <div className="relative z-10">
              {/* BRAND */}
              <div className="mb-12">
                <div className="mb-5 flex items-center gap-3">
                  <img
                    src={iconCv}
                    alt="Fenix Icon"
                    className="h-10 w-10 object-contain"
                  />

                  <span className="text-sm font-black uppercase tracking-[0.3em] text-orange-400">
                    Felix CV
                  </span>
                </div>

                <h1 className="text-5xl font-black leading-none tracking-tight drop-shadow-[0_0_25px_rgba(255,122,0,0.15)]">
                  Felix{" "}
                  <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-sky-300 bg-clip-text text-transparent">
                    Hansson
                  </span>
                </h1>

                <p className="mt-5 text-sm leading-7 text-slate-300">
                  Backendutvecklare under utbildning • Service • Säkerhet •
                  Problemlösning
                </p>

                <a
                  href="/Felix-Hansson-CV.pdf"
                  download
                  className="print:hidden mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-5 py-3 text-xs font-black uppercase tracking-wide text-white shadow-lg shadow-orange-500/20 transition hover:scale-105 hover:from-orange-400 hover:to-orange-500"
                >
                  <Download className="h-4 w-4" />
                  Ladda ner CV
                </a>
              </div>

              <SectionDark title="Kontakt">
                <div className="space-y-3 text-sm">
                  <p className="flex gap-3">
                    <MapPin className="h-4 w-4 text-orange-400" />
                    Ånge, Sverige
                  </p>
                  <p className="flex gap-3">
                    <Mail className="h-4 w-4 text-orange-400" />
                    felix.lfc.hansson@gmail.com
                  </p>
                  <p className="flex gap-3">
                    <Phone className="h-4 w-4 text-orange-400" />
                    079-313 47 06
                  </p>
                </div>
              </SectionDark>

              <SectionDark title="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {techStack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-xs text-slate-100 backdrop-blur-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </SectionDark>

              <SectionDark title="Kompetenser">
                <ul className="space-y-2 text-sm text-slate-300">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex gap-2 before:mt-2 before:h-1.5 before:w-1.5 before:rounded-full before:bg-orange-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </SectionDark>

              <SectionDark title="Profil i korthet">
                <p className="text-sm leading-7 text-slate-400">
                  Jag lär mig genom att testa, analysera och förbättra.
                  Misstag, feedback och utmaningar ser jag som verktyg för att
                  utvecklas och komma tillbaka starkare.
                </p>
              </SectionDark>
            </div>
          </aside>

          {/* MAIN CONTENT */}
          <section className="bg-[#EAEFF5] p-10 text-slate-950">
            <Section title="Profil">
              <p>
                Nyfiken och självgående person med erfarenhet inom service,
                säkerhet och arbete med människor. Studerar idag till
                backendutvecklare på distans via Grit Academy och drivs av
                problemlösning, systemutveckling och praktiskt lärande.
              </p>

              <p>
                Jag lär mig bäst genom att testa, analysera och utvecklas av
                både framgångar och misstag. Feedback och konstruktiv kritik ser
                jag som viktiga verktyg för att ständigt förbättra mitt arbete
                och mina kunskaper.
              </p>
            </Section>

            <Section title="Utbildning">
              <TimelineItem
                title="Grit Academy — Backendutvecklare, distans"
                period="Januari 2026 – Pågående"
              >
                Studerar backendutveckling med fokus på moderna webbtjänster,
                databaser, API-utveckling och programmering.
              </TimelineItem>

              <TimelineItem
                title="Timrå vuxenutbildning"
                period="Januari 2019 – Augusti 2020"
              >
                Programmering 1, Entreprenörskap, Privatjuridik och
                Administration 1.
              </TimelineItem>

              <TimelineItem
                title="Österänggymnasiet, Kristianstad — Samhällsvetenskaplig inriktning"
                period="Augusti 2012 – Juni 2015"
              />
            </Section>

            <Section title="Erfarenhet">
              {experience.map((item) => (
                <TimelineItem
                  key={item.company}
                  title={`${item.company} — ${item.role}`}
                  period={item.period}
                >
                  {item.text}
                </TimelineItem>
              ))}
            </Section>

            <Section title="Projekt">
              <TimelineItem
                title="Fenix Portfolio — React/Tailwind"
                period="Under utveckling"
              >
                Personlig portfolio med fokus på modern UI, komponentstruktur,
                visuell identitet och nedladdningsbart CV.
              </TimelineItem>
            </Section>

            <Section title="Tidigare erfarenhet & referenser">
              <p>
                Tidigare erfarenhet från försäljning, restaurang, vård och
                evenemangsarbete. Referenser lämnas på begäran.
              </p>
            </Section>
          </section>
        </div>
      </section>
    </main>
  );
}

function Section({ title, children }) {
  return (
    <section className="mb-8 border-b border-slate-300/70 pb-6 last:border-b-0">
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-[#0B1020]">
        {title}
      </h2>

      <div className="space-y-4 text-sm leading-7 text-slate-700">
        {children}
      </div>
    </section>
  );
}

function SectionDark({ title, children }) {
  return (
    <section className="mb-10">
      <h2 className="mb-4 text-sm font-black uppercase tracking-[0.18em] text-white">
        {title}
      </h2>

      {children}
    </section>
  );
}

function TimelineItem({ title, period, children }) {
  return (
    <article className="relative mb-6 pl-6 before:absolute before:left-0 before:top-2 before:h-2 before:w-2 before:rounded-full before:bg-orange-500">
      <h3 className="font-black text-slate-950">{title}</h3>

      <p className="text-xs font-bold uppercase tracking-wide text-sky-600">
        {period}
      </p>

      {children && (
        <p className="mt-2 text-sm leading-7 text-slate-700">{children}</p>
      )}
    </article>
  );
}