import { useState } from "react";
import type { FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle } from "lucide-react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import { speakers } from "../data/speakers";
import Email, { SA } from '../components/Email'

const ENDPOINT = "https://vbonmckhfvvijbxdoqis.supabase.co/functions/v1/vsn-speaker-request";

const inputClass =
  "w-full px-4 py-3 rounded bg-navy-800 border border-white/10 focus:border-gold-500/60 focus:outline-none text-white text-sm placeholder-white/25 transition-colors";
const labelClass = "block text-xs uppercase tracking-widest text-white/40 mb-2";

function Field({ label, name, required, type = "text", placeholder }: {
  label: string; name: string; required?: boolean; type?: string; placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className={labelClass}>
        {label} {required && <span className="text-gold-500">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} placeholder={placeholder} className={inputClass} />
    </div>
  );
}

export function FindYourSpeaker() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const resp = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!resp.ok) throw new Error(await resp.text());
      setStatus("sent");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <SiteNav />

      {/* ── HEADER ── */}
      <section className="pt-36 pb-12 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-5"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">Find Your Perfect Speaker</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            The Perfect Speaker
            <span className="block text-gold-400">Is Hard to Find.</span>
          </h1>
          <div className="h-px w-24 bg-gold-500/40 mx-auto" />
          <div className="space-y-3 text-white/60 leading-relaxed">
            <p>
              The perfect speaker understands the needs of the event organizer, the organization
              hosting the event, and the audience themselves.
            </p>
            <p>
              They're well-organized, well-versed, and well-rehearsed. They understand their job
              isn't just to give out information — it's to inspire transformation.
            </p>
            <p className="font-serif italic text-white/80">
              You'll find them here — by telling us about your event below.
            </p>
          </div>
        </motion.div>
      </section>

      {/* ── FORM ── */}
      <section className="pb-24 px-6">
        <div className="max-w-2xl mx-auto">
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-10 rounded-xl bg-navy-800 border border-gold-500/30 text-center space-y-4"
            >
              <CheckCircle className="w-10 h-10 text-gold-400 mx-auto" />
              <h2 className="text-2xl font-serif text-white">Request received.</h2>
              <p className="text-white/60 text-sm leading-relaxed">
                We'll review your event and come back with a high-signal shortlist — often within 24
                hours. If anything is urgent, email us directly at{" "}
                <Email user="terry" host={SA} className="text-gold-400 hover:text-gold-300" />.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              onSubmit={handleSubmit}
              className="space-y-6 p-8 md:p-10 rounded-xl bg-navy-950 border border-white/8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="First Name" name="first_name" required />
                <Field label="Last Name" name="last_name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Email" name="email" type="email" required />
              </div>
              <Field label="Name of Organization" name="organization" required />
              <div className="grid md:grid-cols-2 gap-6">
                <Field label="Name of Event" name="event_name" />
                <Field label="Where will the event take place?" name="event_location" />
              </div>
              <Field label="Number in Attendance" name="attendance" />
              <div>
                <label htmlFor="event_details" className={labelClass}>Tell us more about the event</label>
                <textarea id="event_details" name="event_details" rows={4} className={inputClass} />
              </div>
              <div>
                <label htmlFor="speaker_interest" className={labelClass}>
                  Is there a specific speaker you're interested in?
                </label>
                <select id="speaker_interest" name="speaker_interest" className={inputClass} defaultValue="">
                  <option value="">Not sure — recommend the right fit</option>
                  {speakers.map((s) => (
                    <option key={s.id} value={s.name}>{s.name} — {s.credential}</option>
                  ))}
                </select>
              </div>
              <Field label="What subject would you like the speaker to talk about?" name="topic" />
              <div>
                <label htmlFor="desired_outcome" className={labelClass}>
                  What results or outcome would you like from the audience?
                </label>
                <textarea id="desired_outcome" name="desired_outcome" rows={3} className={inputClass} />
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="format" className={labelClass}>
                    Format <span className="text-gold-500">*</span>
                  </label>
                  <select id="format" name="format" required className={inputClass} defaultValue="">
                    <option value="" disabled>Select…</option>
                    <option>Keynote</option>
                    <option>Workshop</option>
                    <option>Seminar</option>
                  </select>
                </div>
                <Field label="Expected Duration" name="duration" required placeholder="e.g. 60 minutes" />
                <Field label="Speaker Budget" name="budget" required placeholder="e.g. $20,000" />
              </div>

              {/* Honeypot — hidden from humans, bots fill it */}
              <div className="hidden" aria-hidden="true">
                <label htmlFor="website">Website</label>
                <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400/90 leading-relaxed">
                  Something went wrong sending your request. Please try again, or email us directly
                  at{" "}
                  <Email user="terry" host={SA} subject="Speaker Request" className="text-gold-400 hover:text-gold-300" />.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-400 disabled:opacity-60 disabled:cursor-not-allowed text-navy-900 font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] rounded text-sm uppercase"
              >
                {status === "sending" ? "Sending…" : (<><Send className="w-4 h-4" /> Request Your Speaker</>)}
              </button>
              <p className="text-center text-white/30 text-xs flex items-center justify-center gap-1.5">
                <Mail className="w-3 h-3" />
                Prefer email? <Email user="terry" host={SA} subject="Speaker Request" className="text-white/50 hover:text-white/80 transition-colors" />
              </p>
            </motion.form>
          )}
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
