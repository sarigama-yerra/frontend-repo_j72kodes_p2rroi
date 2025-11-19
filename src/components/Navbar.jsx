import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLink = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-slate-200/90">
      <li><a className="hover:text-white transition" href="#features">Features</a></li>
      <li><a className="hover:text-white transition" href="#marketplace">Marketplace</a></li>
      <li><a className="hover:text-white transition" href="#coaching">Coaching</a></li>
      <li><a className="hover:text-white transition" href="#pricing">Pricing</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/80 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="text-xl font-extrabold tracking-tight text-white">GymOS</span>
            <span className="px-2 py-0.5 text-[10px] rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-400/30">beta</span>
          </a>

          <nav className="hidden md:block">{navLink}</nav>

          <div className="hidden md:block">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2 shadow-[0_0_0_1px_rgba(16,185,129,0.4)] hover:bg-emerald-400 transition">
              Start Free Trial
            </a>
          </div>

          <button className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-lg border border-white/10 text-slate-200" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 border-t border-white/5">
            <div className="py-4">{navLink}</div>
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-emerald-500 text-slate-900 font-semibold px-4 py-2">
              Start Free Trial
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
