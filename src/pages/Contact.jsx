import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Mail,
  User,
  MessageSquare,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

import contactBg from "../assets/contact/contact-bg.png";
import owl from "../assets/contact/owl.png";

export default function Contact() {
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);
    setSent(false);
    setError(false);

  emailjs
  .sendForm(
    "service_ay6m292",
    "template_yqfk48t",
    formRef.current,
    "STzw8NYBT3mbtVtxs"
  )
  .then(() => {
    setSending(false);
    setSent(true);
    formRef.current.reset();
  })
  .catch((err) => {
    console.error("EmailJS error:", err);
    setSending(false);
    setError(true);
  });
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#020617] pl-28 text-white">
      <img
        src={contactBg}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#020617]/95 via-[#020617]/65 to-[#020617]/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />

      <section className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-8 py-16 lg:grid-cols-[1fr_520px]">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-sm font-black uppercase tracking-[0.35em] text-orange-400">
            Let’s Connect
          </p>

          <h1 className="max-w-3xl text-6xl font-black leading-none tracking-tight md:text-7xl">
            Let’s build something{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
              meaningful.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Have an idea, opportunity or just want to say hi? Write a message
            and my little mail owl will deliver it.
          </p>

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="mt-10 rounded-[2rem] border border-white/10 bg-black/35 p-6 backdrop-blur-xl"
          >
            <Input icon={<User />} name="user_name" placeholder="Your Name" />
            <Input icon={<Mail />} name="user_email" placeholder="Your Email" />

            <div className="relative mt-4">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#06111f]/70 px-5 py-4 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/50"
              />
              <MessageSquare className="absolute right-4 top-4 h-5 w-5 text-slate-400" />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="mt-5 flex w-full items-center justify-center gap-3 rounded-2xl border border-orange-400/30 bg-orange-500/10 px-5 py-4 font-bold text-orange-300 transition hover:bg-orange-500/20 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {sending ? (
                <>
                  <Send className="h-5 w-5 animate-pulse" />
                  Sending message...
                </>
              ) : sent ? (
                <>
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Message delivered!
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" />
                  Send message
                </>
              )}
            </button>

            {error && (
              <p className="mt-4 flex items-center gap-2 text-sm text-red-300">
                <AlertCircle className="h-4 w-4" />
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <ContactCard
              icon={<Mail />}
              title="Email"
              text="felix.lfc.hansson@gmail.com"
              link="mailto:felix.lfc.hansson@gmail.com"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative hidden justify-center lg:flex"
        >
          <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-[120px]" />

          <img
            src={owl}
            alt="Mail owl"
            className="relative z-10 max-h-[720px] object-contain drop-shadow-[0_0_45px_rgba(255,120,0,0.2)]"
          />
        </motion.div>
      </section>
    </main>
  );
}

function Input({ icon, placeholder, name }) {
  return (
    <div className="relative mt-4 first:mt-0">
      <input
        name={name}
        placeholder={placeholder}
        required
        className="w-full rounded-2xl border border-white/10 bg-[#06111f]/70 px-5 py-4 pr-12 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-orange-400/50"
      />

      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
        {icon}
      </div>
    </div>
  );
}

function ContactCard({ icon, title, text, link }) {
  return (
    <a
      href={link}
      target={link?.startsWith("http") ? "_blank" : undefined}
      rel={link?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="rounded-2xl border border-white/10 bg-black/30 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-400/30"
    >
      <div className="mb-4 text-orange-400">{icon}</div>
      <h3 className="font-black">{title}</h3>
      <p className="mt-2 text-sm text-slate-400">{text}</p>
    </a>
  );
}