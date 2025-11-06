import { Phone, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/70 backdrop-blur supports-[backdrop-filter]:bg-slate-950/50 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-emerald-500 grid place-items-center font-bold text-slate-950">A</div>
            <span className="text-lg font-semibold tracking-tight">Al Haqq Ads</span>
          </a>

          <nav className="hidden gap-8 text-sm font-medium text-white/80 md:flex">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#order" className="hover:text-white">Start a Project</a>
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <a href="mailto:iitpath0@gmail.com" className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-3 py-1.5 text-sm text-white/90 hover:bg-white/10">
              <Mail className="h-4 w-4" /> iitpath0@gmail.com
            </a>
            <a href="tel:7030294964" className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-950 hover:bg-emerald-400">
              <Phone className="h-4 w-4" /> 7030294964
            </a>
          </div>

          <a href="#order" className="md:hidden rounded-lg bg-emerald-500 px-3 py-1.5 text-sm font-semibold text-slate-950">Start</a>
        </div>
      </div>
    </header>
  );
}
