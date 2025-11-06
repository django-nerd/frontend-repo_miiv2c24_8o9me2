import { Megaphone, BarChart3, Brush, Video } from "lucide-react";

const services = [
  {
    icon: Megaphone,
    title: "Paid Media Management",
    desc: "Full-funnel campaigns across Google, Meta, YouTube & LinkedIn with relentless optimization.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    desc: "Dashboards and insights that tie ad spend to revenue with clear KPIs and ROAS tracking.",
  },
  {
    icon: Brush,
    title: "Creative Studio",
    desc: "Thumb-stopping ad creatives, brand kits, landing pages and conversion-first copywriting.",
  },
  {
    icon: Video,
    title: "Video & UGC Production",
    desc: "Story-driven content designed for scroll-stopping engagement and conversions.",
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            What We Do
          </h2>
          <p className="mt-3 text-white/70">
            From strategy to execution, we build systems that turn attention into outcomes.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0 p-6 transition hover:translate-y-[-2px] hover:shadow-xl hover:shadow-emerald-500/10"
            >
              <div className="inline-flex rounded-lg bg-emerald-500/10 p-2 ring-1 ring-emerald-500/30">
                <Icon className="h-5 w-5 text-emerald-400" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
