import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SiteNav } from "../components/SiteNav";
import { SiteFooter } from "../components/SiteFooter";
import terryPhoto from "../assets/terry-keynote.jpg";

const founderCredentials = [
  "Highly-acclaimed International Keynote Speaker",
  "#2 New TEDx Talk in the World",
  "#1 Wall Street Journal, Amazon & Barnes & Noble Bestselling Author",
  "Author of the award-winning The S.I.M.P.L.E. Guide to Public Speaking — Without Losing Your Lunch",
  "Trained Persuasive Speaking internationally and at the MBA level",
  "Founder of The World Class Speaker Program, The Viral Stage Transformation Program, and the Visionary Speakers Network",
];

const differences = [
  {
    title: "Hand-Selected, Not Crowdsourced",
    body: "We curate a small roster on purpose. Admission requires rigorous vetting, live evaluations, and proof of transformation in the real world.",
  },
  {
    title: "Trained to Perform, Not Just Present",
    body: "Our speakers are graduates of the World Class Speaker Program™, a comprehensive system that hard-wires storytelling, audience psychology, and stagecraft for consistent, repeatable results.",
  },
  {
    title: "Outcome-Linked Messaging",
    body: "Talks are architected to drive the outcomes you care about — culture shifts, sales behaviors, leadership alignment, safety adherence, innovation momentum, and more.",
  },
  {
    title: "Concierge Matching",
    body: "We listen first. Then we shortlist the right speaker for your objectives, audience profile, and budget — often within 24 hours.",
  },
  {
    title: "Fossum Standard Quality Control",
    body: "Every engagement is prepared with a pre-brief, success metrics, and post-event debrief to ensure you see and feel the difference.",
  },
  {
    title: "Values-Aligned & Ethics-Forward",
    body: "We work with professionals who combine credibility with character. No hype. No shortcuts. Real expertise, real integrity.",
  },
];

const topics = [
  "Leadership & Culture", "High-Performance Sales", "Innovation & Change",
  "Customer Experience", "Communication & Influence", "Resilience & Mental Fitness",
  "DEI&B with Dignity", "Education & Youth Empowerment", "Veteran Leadership",
  "Purpose-Driven Business",
];

const curationSteps = [
  {
    title: "Personal Vetting by Terry L. Fossum",
    body: "Candidate speakers are reviewed for character, credibility, message, and market fit. Many are referred by trusted leaders.",
  },
  {
    title: "World Class Training",
    body: "Prospects complete advanced work on message architecture, delivery, and outcome design, meeting strict performance benchmarks.",
  },
  {
    title: "Proof of Impact",
    body: "We require stage footage, references, and evidence of measurable outcomes. Only then are speakers invited to join VSN.",
  },
];

const plannerSteps = [
  {
    title: "Brief us on your objective",
    body: "Catalyze change, launch an initiative, boost sales, retain talent — tell us what the room needs to do differently afterward.",
  },
  {
    title: "Receive a high-signal shortlist",
    body: "Bios, video, talk outlines, and fees — tailored to your brief.",
  },
  {
    title: "Prep with confidence",
    body: "We coordinate run-of-show, customization calls, and post-event assets so your message echoes long after the applause.",
  },
];

const faqs = [
  {
    q: "Is VSN an open directory?",
    a: "No. VSN is a curated network. Admission is by invitation following rigorous evaluation and training.",
  },
  {
    q: "Can speakers customize to our initiative?",
    a: "Yes. Every engagement begins with a discovery call to align on outcomes, language, and success metrics.",
  },
  {
    q: "Do you support workshops and extended programs?",
    a: "Absolutely. We design stacked formats — keynotes, breakouts, manager toolkits, and rollout sequences — for lasting behavior change.",
  },
  {
    q: "How are fees structured?",
    a: "We work across tiers. After your brief, we present aligned options with transparent pricing.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.8 },
};

export function AboutVSN() {
  return (
    <div className="min-h-screen bg-navy-900 text-white overflow-x-hidden">
      <SiteNav />

      {/* ── HEADER ── */}
      <section className="pt-36 pb-16 px-6 bg-navy-900 text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">About Our Organization</p>
          <h1 className="text-4xl md:text-5xl font-serif text-white leading-tight">
            Not Just Another
            <span className="block text-gold-400">Speaker Bureau.</span>
          </h1>
          <div className="h-px w-24 bg-gold-500/40 mx-auto" />
          <p className="text-white/60 leading-relaxed">
            Curated voices that change rooms — and outcomes. The Visionary Speakers Network is an
            invitation-only collective of leading minds, accomplished innovators, and world-class
            communicators. Every speaker here has been personally vetted by Terry L. Fossum and
            trained to the Fossum Standard™ through his World Class Speaker Program™ — an intensive,
            results-driven curriculum that forges stage presence, message clarity, and measurable
            audience impact.
          </p>
        </motion.div>
      </section>

      {/* ── FOUNDER ── */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp}>
            <img
              src={terryPhoto}
              alt="Terry L. Fossum speaking on stage"
              className="rounded-xl border border-white/10 shadow-2xl w-full object-cover"
            />
          </motion.div>
          <motion.div {...fadeUp} className="space-y-5">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">Run By</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Terry L. Fossum</h2>
            <div className="h-px w-16 bg-gold-500/30" />
            <ul className="space-y-3">
              {founderCredentials.map((c, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="text-gold-500 mt-1 shrink-0 text-xs">✦</span>
                  <span className="text-white/70 text-sm leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* ── WHY WE EXIST ── */}
      <section className="py-20 px-6 bg-navy-900">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">Why We Exist</p>
          <h2 className="text-3xl font-serif text-white leading-snug">
            Decision-makers don't need more noise. They need certainty.
          </h2>
          <p className="text-white/60 leading-relaxed">
            Certainty that the person on stage will move people to think, feel, and act. VSN was
            built to remove guesswork and elevate outcomes for event producers, associations, and
            enterprise leaders who won't settle for "good enough."
          </p>
        </motion.div>
      </section>

      {/* ── THE VSN DIFFERENCE ── */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">The VSN Difference</p>
            <h2 className="text-3xl md:text-4xl font-serif text-white">Six Commitments. Zero Compromise.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {differences.map((d, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="p-6 rounded-xl bg-navy-800 border border-white/8 space-y-3"
              >
                <div className="w-8 h-px bg-gold-500/50" />
                <h3 className="font-serif text-white text-lg leading-snug">{d.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{d.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE CURATE ── */}
      <section className="py-20 px-6 bg-navy-900">
        <motion.div {...fadeUp} className="max-w-4xl mx-auto text-center space-y-8">
          <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">What We Curate</p>
          <div className="flex flex-wrap justify-center gap-3">
            {topics.map((t, i) => (
              <span key={i} className="px-4 py-2 rounded-full border border-white/15 text-white/60 text-sm">
                {t}
              </span>
            ))}
          </div>
          <p className="text-white/40 text-sm">
            Ask about custom topics and multi-speaker formats — keynote + workshop + panel — designed
            for sustained impact.
          </p>
        </motion.div>
      </section>

      {/* ── HOW CURATION WORKS ── */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">How Our Curation Works</p>
            <h2 className="text-3xl font-serif text-white">Three Gates. Every Speaker.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {curationSteps.map((s, i) => (
              <motion.div key={i} {...fadeUp} className="space-y-3 text-center">
                <p className="text-4xl font-serif text-gold-500/60">{i + 1}</p>
                <h3 className="font-serif text-white text-lg leading-snug">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOR EVENT LEADERS ── */}
      <section className="py-20 px-6 bg-navy-900">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-14 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">For Event Leaders & Meeting Planners</p>
            <h2 className="text-3xl font-serif text-white">A Process Built Around Your Outcome.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {plannerSteps.map((s, i) => (
              <motion.div key={i} {...fadeUp} className="space-y-3">
                <div className="w-8 h-px bg-gold-500/50" />
                <h3 className="font-serif text-white text-lg leading-snug">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 px-6 bg-navy-950">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-12 space-y-4">
            <p className="text-xs uppercase tracking-[0.35em] text-gold-500 font-medium">Common Questions</p>
          </motion.div>
          <div className="space-y-6">
            {faqs.map((f, i) => (
              <motion.div key={i} {...fadeUp} className="p-6 rounded-xl bg-navy-800 border border-white/8 space-y-2">
                <h3 className="font-serif text-white text-lg">{f.q}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{f.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMITMENT + CTA ── */}
      <section className="py-24 px-6 bg-navy-900 text-center">
        <motion.div {...fadeUp} className="max-w-3xl mx-auto space-y-8">
          <div className="w-12 h-px bg-gold-500/40 mx-auto" />
          <blockquote className="text-2xl md:text-3xl font-serif text-white/90 italic leading-relaxed">
            "To every planner, leader, and audience we serve: we will protect your stage, honor your
            mission, and deliver measurable value. That's the Fossum Standard.™"
          </blockquote>
          <div className="w-12 h-px bg-gold-500/40 mx-auto" />
          <Link
            to="/find-your-perfect-speaker"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-semibold tracking-wide transition-all hover:shadow-[0_0_30px_rgba(212,160,23,0.4)] rounded group text-sm uppercase"
          >
            Find Your Perfect Speaker
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <SiteFooter />
    </div>
  );
}
