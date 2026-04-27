import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Download, Play, Mail, ArrowRight } from "lucide-react";

import terryKeynote from "../assets/terry-keynote.jpg";
import terryMainStage from "../assets/terry-main-stage.jpg";
import terryTedx from "../assets/terry-tedx.jpg";
import larryNamer from "../assets/larry-namer.jpg";

// ── Speaker Data ────────────────────────────────────────────────────────────

const speakers = [
  {
    id: "larry-namer",
    name: "Larry Namer",
    credential: "Co-Founder, E! Entertainment Television",
    headshot: larryNamer,
    talkTitle: "The OffScript Advantage",
    talkSubtitle: "How to recognize inflection points and move before competitors do",
    description:
      "Larry Namer built E! Entertainment from a single idea into a global media empire — before the internet, before streaming, before anyone knew what a cable network could become. He has spent five decades navigating disruption, recognizing the moments before industries shift, and moving first. This isn't theory. It's a master class in pattern recognition from someone who has lived it at the highest levels of American media.",
    takeaways: [
      "Identify inflection points before your competitors see them coming",
      "Reframe failure as the data that successful pivots are built from",
      "Make bold decisions with incomplete information — and why waiting costs more",
      "Build resilience into organizational culture, not just leadership",
      "Turn decades of disruption experience into a competitive advantage",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    email: "terry@thestageadvantage.com",
    bgPosition: "center 20%",
  },
  {
    id: "hap-klopp",
    name: "Hap Klopp",
    credential: "Founder, The North Face",
    headshot: null,
    talkTitle: "How Organizations Lose Their Edge — and How to Get It Back",
    talkSubtitle: "A framework for identifying momentum loss and rebuilding relevance",
    description:
      "Hap Klopp built The North Face from a small San Francisco climbing shop into one of the most recognized outdoor brands on the planet. He has spent decades studying why successful companies stall — and the answer is almost never the market. It's what happens inside when success breeds complacency. His talk gives leadership teams a clear framework for diagnosing organizational drift and the tools to reverse it before it becomes a crisis.",
    takeaways: [
      "Recognize the early warning signs of organizational stall before they become visible",
      "Understand why success itself is one of the greatest risks a company faces",
      "Build a culture of deliberate experimentation that outlasts any single leader",
      "Regain strategic clarity when the path forward stops looking obvious",
      "Inspire teams to move with the urgency of a startup inside an established organization",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    email: "terry@thestageadvantage.com",
    bgPosition: "center",
  },
  {
    id: "larry-kasanoff",
    name: "Larry Kasanoff",
    credential: "Hollywood Producer · Mortal Kombat · Terminator 2",
    headshot: null,
    talkTitle: "Innovation Demands a Touch of Madness",
    talkSubtitle: "How Hollywood's most creative pressure creates the world's best business lessons",
    description:
      "Larry Kasanoff has produced some of the most successful entertainment franchises in Hollywood history — including Mortal Kombat and Terminator 2. He has spent a career operating at the intersection of massive creative risk and massive commercial stakes, where the cost of playing it safe is extinction. His talk translates the creative chaos of Hollywood into practical frameworks for innovation, risk tolerance, and building the kind of bold organizational culture that produces breakthrough results.",
    takeaways: [
      "Reverse complacency by understanding what actually kills creative momentum",
      "Build habits of idea generation that survive pressure and deadlines",
      "Ask for what you want — and why most organizations are too timid to do it",
      "Bring productive play into high-stakes environments without losing accountability",
      "Make the case for bold bets when everyone around you wants to wait",
    ],
    fee: "$20,000 – $35,000",
    videoUrl: "",
    email: "terry@thestageadvantage.com",
    bgPosition: "center 30%",
  },
];

// ── Differentiators ─────────────────────────────────────────────────────────

const differentiators = [
  {
    number: "01",
    title: "Hand-Selected. No Exceptions.",
    body: "Every speaker in this network has been personally vetted — not by an algorithm, not by a submission form, but by someone who has stood on the same stages and understands what it takes to move a room. If they aren't exceptional, they aren't here.",
  },
  {
    number: "02",
    title: "Certified. Accountable. Professional.",
    body: "Our speakers hold themselves to a standard most bureaus don't demand. They represent your event with the same professionalism you'd expect from the keynote itself — from the first email to the final applause.",
  },
  {
    number: "03",
    title: "Your Event's Success Is the Metric.",
    body: "We don't measure success in bookings. We measure it in standing ovations, in the conversations that happen in the hallway after the talk, in the emails attendees send their colleagues the next morning. That's the standard every speaker in this network is held to.",
  },
];

// ── Component ───────────────────────────────────────────────────────────────

export function VSNLanding() {
  const [expandedSpeaker, setExpandedSpeaker] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 overflow-x-hidden">

      {/* ── NAV ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800/60 bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
              <span className="text-gold-400 text-xs font-bold">V</span>
            </div>
            <span className="font-serif text-zinc-100 text-sm tracking-wide">Visionary Speakers Network</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-widest uppercase text-zinc-400">
            <a href="#speakers" className="hover:text-zinc-100 transition-colors">Speakers</a>
            <a href="#about" className="hover:text-zinc-100 transition-colors">About</a>
            <a href="#contact" className="hover:text-zinc-100 transition-colors flex items-center gap-1.5">
              <span>Book a Speaker</span>
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <img
          src="/photos/stage-pov-1.jpg"
          aria-hidden="true"
          fetchPriority="high"
          className="absolute inset-0 w-full h-full object-cover object-center animate-hero-zoom"
        />
        <div className="absolute inset-0" style={{ background: 'rgba(9,9,11,0.65)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.7) 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 20% 30%, rgba(212,160,23,0.08), transparent 60%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-zinc-950 to-transparent pointer-events-none z-10" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500">
              Visionary Speakers Network
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.0] text-zinc-100">
              The Power of
              <span className="block animate-gold-shimmer mt-2">
                the Human Voice.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed max-w-3xl mx-auto">
              There is no more powerful force in the world.
            </p>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed">
              It's not just about teaching or entertaining.<br />
              It's about creating change — in cultures, in decisions, in outcomes.<br />
              It's about helping build a new future for the audience and the organization alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a
                href="#speakers"
                className="px-10 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-zinc-950 font-semibold text-base transition-all hover:shadow-[0_0_40px_rgba(212,160,23,0.4)] flex items-center justify-center gap-2 group"
              >
                Find Your Speaker
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="px-10 py-4 rounded-xl border border-zinc-700 hover:border-zinc-500 text-zinc-300 hover:text-zinc-100 font-medium text-base transition-all flex items-center justify-center gap-2"
              >
                About the Network
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-5 h-5 text-zinc-500 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* ── NOT JUST ANOTHER BUREAU ── */}
      <section id="about" className="py-24 px-4 relative" style={{ backgroundImage: `url(${terryKeynote})`, backgroundSize: 'cover', backgroundPosition: 'center 35%', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[rgba(9,9,11,0.84)] pointer-events-none" />
        <div className="max-w-5xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-6 mb-20"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500">The Standard</p>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-100 leading-tight">
              Make no mistake.
              <span className="block animate-gold-shimmer mt-1">
                This is not just another speaker bureau.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className="p-8 rounded-2xl bg-zinc-900/60 border border-zinc-800 hover:border-gold-500/30 transition-colors"
              >
                <p className="text-4xl font-serif text-gold-500/30 font-bold mb-4">{d.number}</p>
                <h3 className="text-lg font-serif text-zinc-100 mb-3 leading-snug">{d.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPEAKERS ── */}
      <section id="speakers" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-4 mb-16"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500">The Roster</p>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-100">
              Speakers Who Move Rooms.
            </h2>
            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              Every speaker here has built something real, led through real pressure, and earned the right to stand on your stage.
            </p>
          </motion.div>

          <div className="space-y-6">
            {speakers.map((speaker, i) => (
              <motion.div
                key={speaker.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="rounded-2xl border border-zinc-800 overflow-hidden bg-zinc-900/40 hover:border-zinc-700 transition-colors"
              >
                {/* Speaker header — always visible */}
                <div className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Headshot or monogram */}
                    <div className="shrink-0">
                      {speaker.headshot ? (
                        <img
                          src={speaker.headshot}
                          alt={speaker.name}
                          className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-zinc-700"
                        />
                      ) : (
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-zinc-800 border-2 border-zinc-700 flex items-center justify-center">
                          <span className="text-2xl font-serif text-zinc-500">
                            {speaker.name.charAt(0)}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Name + talk */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div>
                          <h3 className="text-2xl font-serif text-zinc-100">{speaker.name}</h3>
                          <p className="text-gold-500 text-sm font-medium mt-1">{speaker.credential}</p>
                          <div className="mt-3">
                            <p className="text-zinc-200 font-semibold">"{speaker.talkTitle}"</p>
                            <p className="text-zinc-500 text-sm mt-0.5">{speaker.talkSubtitle}</p>
                          </div>
                        </div>
                        <div className="flex flex-col items-start md:items-end gap-2 shrink-0">
                          <span className="text-xs font-bold uppercase tracking-widest text-zinc-500">Speaker Fee</span>
                          <span className="text-gold-400 font-semibold text-lg whitespace-nowrap">{speaker.fee}</span>
                        </div>
                      </div>

                      {/* Action row */}
                      <div className="flex flex-wrap gap-3 mt-5">
                        <button
                          onClick={() => setExpandedSpeaker(expandedSpeaker === speaker.id ? null : speaker.id)}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${expandedSpeaker === speaker.id ? 'rotate-180 text-gold-400' : ''}`} />
                          {expandedSpeaker === speaker.id ? 'Less Info' : 'Full Profile'}
                        </button>
                        {speaker.videoUrl && (
                          <a
                            href={speaker.videoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-sm font-medium transition-colors"
                          >
                            <Play className="w-4 h-4 text-gold-400" />
                            Speaker Reel
                          </a>
                        )}
                        <a
                          href={`mailto:${speaker.email}?subject=Booking Inquiry: ${speaker.name}`}
                          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-zinc-950 text-sm font-semibold transition-all hover:shadow-[0_0_20px_rgba(212,160,23,0.3)]"
                        >
                          <Mail className="w-4 h-4" />
                          Book {speaker.name.split(' ')[0]}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded profile */}
                {expandedSpeaker === speaker.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="border-t border-zinc-800"
                  >
                    <div className="p-6 md:p-8 grid md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500">About the Talk</h4>
                        <p className="text-zinc-300 leading-relaxed text-sm">{speaker.description}</p>
                      </div>
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-widest text-gold-500">Audience Transformation</h4>
                        <p className="text-zinc-500 text-xs uppercase tracking-wider mb-3">Your audience will leave with:</p>
                        <ul className="space-y-2">
                          {speaker.takeaways.map((t, ti) => (
                            <li key={ti} className="flex items-start gap-3 text-sm text-zinc-300">
                              <span className="text-gold-500 mt-0.5 shrink-0">✦</span>
                              {t}
                            </li>
                          ))}
                        </ul>
                        <div className="pt-4 flex flex-wrap gap-3">
                          <a
                            href={`/one-sheets/${speaker.id}.pdf`}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium transition-colors"
                          >
                            <Download className="w-4 h-4 text-gold-400" />
                            Download One-Sheet
                          </a>
                          <a
                            href={`mailto:${speaker.email}?subject=Booking Inquiry: ${speaker.name}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gold-500 hover:bg-gold-400 text-zinc-950 text-sm font-semibold transition-all"
                          >
                            <Mail className="w-4 h-4" />
                            Inquire About Booking
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FIND YOUR PERFECT SPEAKER CTA ── */}
      <section id="contact" className="py-24 px-4 relative" style={{ backgroundImage: `url(${terryTedx})`, backgroundSize: 'cover', backgroundPosition: 'center 25%', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[rgba(9,9,11,0.82)] pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent z-10" />
        <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500">Find Your Perfect Speaker</p>
            <h2 className="text-4xl md:text-5xl font-serif text-zinc-100 leading-tight">
              Not Sure Who's the Right Fit?
              <span className="block animate-gold-shimmer mt-2">We'll Find Them for You.</span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
              Tell us about your event — the audience, the outcome you're trying to create, the feeling you want people to leave with. We'll match you with the speaker who delivers exactly that.
            </p>
            <a
              href="mailto:terry@thestageadvantage.com?subject=Speaker Search for My Event"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-zinc-950 font-semibold text-lg transition-all hover:shadow-[0_0_40px_rgba(212,160,23,0.4)] group"
            >
              Tell Us About Your Event
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── THE STANDARD SECTION ── */}
      <section className="py-24 px-4 relative" style={{ backgroundImage: `url(${terryMainStage})`, backgroundSize: 'cover', backgroundPosition: 'center 30%', backgroundAttachment: 'fixed' }}>
        <div className="absolute inset-0 bg-[rgba(9,9,11,0.86)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <p className="text-xs font-bold uppercase tracking-[0.35em] text-gold-500">The Visionary Standard</p>
            <blockquote className="text-2xl md:text-3xl font-serif text-zinc-200 italic leading-relaxed">
              "The speakers in this network aren't here because they applied. They're here because I've watched them move a room — and I'd put my name on what they deliver."
            </blockquote>
            <div className="flex items-center justify-center gap-4 pt-2">
              <div className="h-px w-12 bg-zinc-700" />
              <div className="text-center">
                <p className="font-semibold text-zinc-100 text-sm">Terry L. Fossum</p>
                <p className="text-zinc-500 text-xs">Founder, Visionary Speakers Network</p>
                <p className="text-zinc-600 text-xs mt-0.5">#1 WSJ Bestselling Author · TEDx Speaker · 1,500+ Stages</p>
              </div>
              <div className="h-px w-12 bg-zinc-700" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-zinc-800 py-8 px-4 bg-zinc-950">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-gold-500/20 border border-gold-500/30 flex items-center justify-center">
              <span className="text-gold-400 text-xs font-bold">V</span>
            </div>
            <span className="text-zinc-500">Visionary Speakers Network</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="mailto:terry@thestageadvantage.com" className="hover:text-zinc-400 transition-colors flex items-center gap-1">
              <Mail className="w-3 h-3" /> terry@thestageadvantage.com
            </a>
            <span>© {new Date().getFullYear()} Visionary Speakers Network. All rights reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
