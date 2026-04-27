import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Download, Play, Mail, ArrowRight } from "lucide-react";
import { speakers } from "../data/speakers";
import vsnLogo from "../assets/vsn-logo-transparent.png";

export function SpeakerProfile() {
  const { id } = useParams<{ id: string }>();
  const speaker = speakers.find((s) => s.id === id);

  if (!speaker) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center space-y-4">
          <p className="text-white/50">Speaker not found.</p>
          <Link to="/" className="text-gold-400 hover:text-gold-300 flex items-center gap-2 justify-center">
            <ArrowLeft className="w-4 h-4" /> Back to Network
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span className="font-serif tracking-wide">Visionary Speakers Network</span>
          </Link>
          <a
            href={`mailto:${speaker.email}?subject=Booking Inquiry: ${speaker.name}`}
            className="hidden md:flex items-center gap-2 px-5 py-2 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 rounded transition-colors text-xs uppercase tracking-widest font-medium"
          >
            Book {speaker.name.split(" ")[0]}
          </a>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-16 relative">
        <div
          className="h-72 md:h-96 relative overflow-hidden"
          style={{ backgroundImage: 'url(/photos/stage-pov-1.jpg)', backgroundSize: 'cover', backgroundPosition: 'center 40%' }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/60 via-navy-900/40 to-navy-900" />
        </div>

        {/* Speaker identity — overlaps the hero bottom */}
        <div className="max-w-5xl mx-auto px-6 -mt-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-end md:items-start"
          >
            {/* Headshot */}
            <div className="shrink-0">
              {speaker.headshotUrl ? (
                <img
                  src={speaker.headshotUrl}
                  alt={speaker.name}
                  className="w-36 h-36 md:w-48 md:h-48 rounded-xl object-cover object-top border-4 border-navy-900 shadow-2xl"
                />
              ) : (
                <div className="w-36 h-36 md:w-48 md:h-48 rounded-xl bg-navy-800 border-4 border-navy-900 shadow-2xl flex items-center justify-center">
                  <span className="text-6xl font-serif text-white/20">{speaker.name.charAt(0)}</span>
                </div>
              )}
            </div>

            {/* Name + credential + fee */}
            <div className="space-y-2 pb-2">
              <p className="text-xs uppercase tracking-[0.3em] text-gold-500 font-medium">{speaker.credential}</p>
              <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">{speaker.name}</h1>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <span className="text-gold-400 font-medium text-sm">{speaker.fee}</span>
                <span className="text-white/20">·</span>
                <a
                  href={`mailto:${speaker.email}?subject=Booking Inquiry: ${speaker.name}`}
                  className="flex items-center gap-1.5 text-sm text-white/50 hover:text-gold-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  Inquire About Booking
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">

            {/* Left column — bio + talk description */}
            <div className="md:col-span-2 space-y-12">

              {/* The Talk */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="space-y-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500 font-medium">The Talk</p>
                <h2 className="text-2xl md:text-3xl font-serif text-white leading-snug">
                  "{speaker.talkTitle}"
                </h2>
                <p className="text-white/50 text-sm leading-relaxed">{speaker.talkSubtitle}</p>
                <div className="h-px bg-white/8" />
                <p className="text-white/70 leading-relaxed">{speaker.description}</p>
              </motion.div>

              {/* Audience Takeaways */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="space-y-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500 font-medium">Audience Transformation</p>
                <p className="text-white/40 text-xs">Your audience will leave with:</p>
                <ul className="space-y-3">
                  {speaker.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-gold-500 mt-1 shrink-0 text-xs">✦</span>
                      <span className="text-white/70 text-sm leading-relaxed">{t}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="space-y-4"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-gold-500 font-medium">About {speaker.name.split(" ")[0]}</p>
                <p className="text-white/70 leading-relaxed">{speaker.bio}</p>
              </motion.div>
            </div>

            {/* Right column — actions sidebar */}
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="sticky top-24 space-y-4"
              >
                {/* Book CTA */}
                <div className="p-6 rounded-xl bg-navy-800 border border-white/8 space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/40 mb-1">Speaker Fee</p>
                    <p className="text-2xl font-serif text-gold-400">{speaker.fee}</p>
                  </div>
                  <a
                    href={`mailto:${speaker.email}?subject=Booking Inquiry: ${speaker.name}`}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold text-sm rounded transition-all hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                  >
                    <Mail className="w-4 h-4" />
                    Book {speaker.name.split(" ")[0]}
                  </a>
                  {speaker.oneSheetUrl && (
                    <a
                      href={speaker.oneSheetUrl}
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm rounded transition-all"
                    >
                      <Download className="w-4 h-4" />
                      Download One-Sheet
                    </a>
                  )}
                  {speaker.videoUrl && (
                    <a
                      href={speaker.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 px-5 py-3 border border-white/15 hover:border-white/30 text-white/60 hover:text-white text-sm rounded transition-all"
                    >
                      <Play className="w-4 h-4" />
                      Watch Speaker Reel
                    </a>
                  )}
                </div>

                {/* VSN badge */}
                <div className="p-5 rounded-xl bg-navy-800/50 border border-white/5 text-center space-y-3">
                  <img src={vsnLogo} alt="VSN" className="h-12 mx-auto opacity-60" />
                  <p className="text-white/30 text-xs leading-relaxed">
                    Every speaker in this network is personally vetted by Terry L. Fossum.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ── OTHER SPEAKERS ── */}
      <section className="py-16 px-6 border-t border-white/5 bg-navy-950">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-500 font-medium">More Speakers</p>
            <Link to="/#speakers" className="text-xs text-white/40 hover:text-white/70 transition-colors flex items-center gap-1.5">
              View all <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {speakers.filter((s) => s.id !== speaker.id).map((s) => (
              <Link
                key={s.id}
                to={`/speakers/${s.id}`}
                className="group p-5 rounded-xl bg-navy-800 border border-white/8 hover:border-gold-500/30 transition-all space-y-2"
              >
                <p className="text-xs text-gold-500/70 font-medium">{s.credential}</p>
                <p className="font-serif text-white group-hover:text-gold-300 transition-colors">{s.name}</p>
                <p className="text-white/40 text-xs leading-snug">"{s.talkTitle}"</p>
                <p className="text-gold-400 text-xs flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Profile <ArrowRight className="w-3 h-3" />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-10 px-6 bg-navy-950 border-t border-white/5">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <Link to="/">
            <img src={vsnLogo} alt="Visionary Speakers Network" className="h-16 opacity-70 hover:opacity-100 transition-opacity" />
          </Link>
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
