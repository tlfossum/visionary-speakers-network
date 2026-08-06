import { Link } from "react-router-dom";

export function SiteNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-serif text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase transition-colors">
          Visionary Speakers Network
        </Link>
        <div className="flex items-center gap-6 md:gap-10 text-xs font-medium tracking-[0.2em] uppercase text-white/50">
          <Link to="/#speakers" className="hidden md:inline hover:text-white transition-colors">Our Speakers</Link>
          <Link to="/about" className="hidden md:inline hover:text-white transition-colors">About</Link>
          <Link
            to="/find-your-perfect-speaker"
            className="px-4 md:px-5 py-2 border border-gold-500/50 text-gold-400 hover:bg-gold-500/10 rounded transition-colors"
          >
            Find Your Speaker
          </Link>
        </div>
      </div>
    </nav>
  );
}
