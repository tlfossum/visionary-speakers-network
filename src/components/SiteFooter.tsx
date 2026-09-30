import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import vsnLogo from "../assets/vsn-logo-transparent.png";
import Email, { SA, Addr } from './Email'

export function SiteFooter() {
  return (
    <footer className="py-10 px-6 bg-navy-950 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/">
          <img src={vsnLogo} alt="Visionary Speakers Network" className="h-16 opacity-70 hover:opacity-100 transition-opacity" />
        </Link>
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-xs text-white/30">
          <Link to="/about" className="hover:text-white/60 transition-colors">About Our Organization</Link>
          <Link to="/find-your-perfect-speaker" className="hover:text-white/60 transition-colors">Find Your Perfect Speaker</Link>
          <Email user="terry" host={SA} className="hover:text-white/60 transition-colors flex items-center gap-1.5">
            <Mail className="w-3 h-3" />
            <Addr user="terry" host={SA} />
          </Email>
          <span>© {new Date().getFullYear()} Visionary Speakers Network. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
