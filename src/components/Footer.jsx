export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-white/70">© {year} Al Haqq Ads Agency. All rights reserved.</p>
        <nav className="flex gap-6 text-white/70 text-sm">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#order" className="hover:text-white">Start a Project</a>
        </nav>
      </div>
    </footer>
  );
}
