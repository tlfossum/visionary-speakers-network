import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { speakers } from "../data/speakers";
import vsnLogo from "../assets/vsn-logo-transparent.png";

export function VSNLanding() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-serif text-white/80 text-sm tracking-[0.2em] uppercase">
            Visionary Speakers Network
          </span>
          <div className="hidden md:flex items-center gap-10 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
            <a href="#speakers" className="hover:text-white transition-colors">Our Speakers</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a
              href="mailto:terry@thestageadvantage.com?subject=Speaker Search"
              className="px-5 py-2 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 rounded transition-colors"
            >
              Book a Speaker
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
        <img
          src="/photos/stage-pov-1.jpg"
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0" style={{ background: 'rgba(10,10,30,0.72)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(5,5,20,0.8) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 60%, rgba(212,160,23,0.06), transparent 60%)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-navy-900 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="space-y-8"
          >
            <img
              src={vsnLogo}
              alt="Visionary Speakers Network"
              className="w-64 md:w-80 mx-auto drop-shadow-2xl"
            />
            <div className="space-y-4">
              <div className="h-px w-24 bg-gold-500/40 mx-auto" />
              <p className="text-lg md:text-xl font-serif text-white/70 tracking-[0.15em] uppercase">
                Where Vision Meets Voice,
              </p>
              <p className="text-lg md:text-xl font-serif text-white/70 tracking-[0.15em] uppercase">
                and Voice Creates Change.
              </p>
              <div className="h-px w-24 bg-gold-500/40 mx-auto" />
            </div>
            <a
              href="#speakers"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] rounded group text-sm uppercase"
            >
              Meet Our Speakers
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── DIFFERENTIATOR ── */}
      <section id="about" className="py-24 px-6 bg-navy-900">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">The Standard</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white leading-tight">
              Make no mistake.
              <span className="block text-gold-400 mt-1">
                This is not just another speaker bureau.
              </span>
            </h2>
            <div className="h-px w-16 bg-gold-500/30 mx-auto" />
            <div className="grid md:grid-cols-3 gap-10 text-left pt-6">
              {[
                {
                  title: "Hand-Selected. No Exceptions.",
                  body: "Every speaker in this network has been personally vetted — not by an algorithm, not by a submission form, but by someone who has stood on the same stages and understands what it takes to move a room.",
                },
                {
                  title: "Certified. Accountable. Professional.",
                  body: "Our speakers hold themselves to a standard most bureaus don't demand. They represent your event professionally — from the first email to the final applause.",
                },
                {
                  title: "Your Event's Success Is the Metric.",
                  body: "We don't measure success in bookings. We measure it in standing ovations, hallway conversations, and the emails attendees send their colleagues the next morning.",
                },
              ].map((d, i) => (
                <div key={i} className="space-y-3">
                  <div className="w-8 h-px bg-gold-500/50" />
                  <h3 className="font-serif text-white text-lg leading-snug">{d.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SPEAKERS GRID ── */}
      <section id="speakers" className="py-24 px-6 bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 space-y-4"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">The Roster</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">
              Speakers Who Move Rooms.
            </h2>
            <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
              Every speaker here has built something real, led through real pressure,
              and earned the right to stand on your stage.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link
                  to={`/speakers/${speaker.id}`}
                  className="group block bg-navy-800 border border-white/8 hover:border-gold-500/40 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_8px_40px_rgba(212,160,23,0.12)] hover:-translate-y-1"
                >
                  {/* Headshot */}
                  <div className="aspect-[4/3] bg-navy-700 relative overflow-hidden">
                    {speaker.headshotUrl ? (
                      <img
                        src={speaker.headshotUrl}
                        alt={speaker.name}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-6xl font-serif text-white/10">
                          {speaker.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-800/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-xs font-medium text-gold-400 uppercase tracking-widest">{speaker.fee}</p>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-serif text-white leading-tight">{speaker.name}</h3>
                      <p className="text-gold-500/80 text-xs font-medium mt-1 leading-snug">{speaker.credential}</p>
                    </div>
                    <div className="h-px bg-white/8" />
                    <div>
                      <p className="text-white/90 text-sm font-medium leading-snug">"{speaker.talkTitle}"</p>
                      <p className="text-white/40 text-xs mt-1 leading-snug">{speaker.talkSubtitle}</p>
                    </div>
                    <div className="pt-2 flex items-center gap-1.5 text-gold-400 text-xs font-medium group-hover:gap-3 transition-all">
                      <span>View Full Profile</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Find your speaker CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center mt-16 pt-16 border-t border-white/8"
          >
            <p className="text-white/40 text-sm mb-4">Don't see exactly what you need?</p>
            <a
              href="mailto:terry@thestageadvantage.com?subject=Speaker Search for My Event"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors group"
            >
              <Mail className="w-4 h-4" />
              Tell us about your event — we'll find the right speaker
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── FOUNDER QUOTE ── */}
      <section
        className="py-24 px-6 relative"
        style={{ backgroundImage: `url(/photos/stage-pov-2.jpg)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed' }}
      >
        <div className="absolute inset-0 bg-[rgba(8,8,25,0.88)] pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="w-12 h-px bg-gold-500/40 mx-auto" />
            <blockquote className="text-2xl md:text-3xl font-serif text-white/90 italic leading-relaxed">
              "The speakers in this network aren't here because they applied.
              They're here because I've watched them move a room — and I'd put my name on what they deliver."
            </blockquote>
            <div className="w-12 h-px bg-gold-500/40 mx-auto" />
            <div className="space-y-1">
              <p className="font-semibold text-white text-sm tracking-wide">Terry L. Fossum</p>
              <p className="text-white/40 text-xs">Founder, Visionary Speakers Network</p>
              <p className="text-white/30 text-xs">#1 WSJ Bestselling Author · TEDx Speaker · 1,500+ Stages Worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 bg-navy-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <img src={vsnLogo} alt="Visionary Speakers Network" className="h-16 opacity-70" />
          <div className="flex flex-col md:flex-row items-center gap-6 text-xs text-white/30">
            <a href="mailto:terry@thestageadvantage.com" className="hover:text-white/60 transition-colors flex items-center gap-1.5">
              <Mail className="w-3 h-3" />
              terry@thestageadvantage.com
            </a>
            <span>© {new Date().getFullYear()} Visionary Speakers Network. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
