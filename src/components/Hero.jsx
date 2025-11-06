import { Rocket, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-32 right-1/2 h-96 w-[40rem] translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20 sm:pt-32 sm:pb-24">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm font-medium text-emerald-300 ring-1 ring-white/15 backdrop-blur">
            <Sparkles className="h-4 w-4" /> Elevate Your Brand
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-6xl">
            Al Haqq Ads Agency
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            We craft high-converting ad campaigns and brand experiences across
            digital and offline channels. Strategy. Creative. Performance. Truthful
            results.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#order"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-3 font-medium text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:translate-y-[-1px] hover:bg-emerald-400"
            >
              <Rocket className="h-5 w-5" /> Start Your Campaign
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3 font-medium text-white/90 transition hover:bg-white/10"
            >
              Explore Services
            </a>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: "Clients Served", value: "120+" },
            { label: "Avg. ROAS", value: "4.8x" },
            { label: "Ad Spend Managed", value: "$3.2M" },
            { label: "Years of Trust", value: "6+" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/10 bg-white/5 p-4 text-center"
            >
              <div className="text-2xl font-semibold text-white">{stat.value}</div>
              <div className="mt-1 text-xs text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
