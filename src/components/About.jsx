export default function About() {
  return (
    <section id="about" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-4xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-center">
          About Al Haqq
        </h2>
        <p className="mt-6 text-white/80 leading-7">
          Al Haqq is a performance-driven advertising agency built on a simple principle: marketing should be truthful, measurable, and growth-focused. We blend strategy, creative, and data to build campaigns that earn attention and convert it into revenue. From startups to established brands, we’ve helped businesses scale profitably across search, social, and video platforms.
        </p>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 text-white/80">
          <li className="rounded-lg border border-white/10 bg-white/5 p-4">Dedicated account strategist</li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-4">Weekly performance reporting</li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-4">Creative testing frameworks</li>
          <li className="rounded-lg border border-white/10 bg-white/5 p-4">Proven ROAS improvement</li>
        </ul>
      </div>
    </section>
  );
}
