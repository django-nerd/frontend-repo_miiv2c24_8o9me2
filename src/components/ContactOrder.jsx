import { useState } from "react";
import { Phone, Mail, CheckCircle2 } from "lucide-react";

export default function ContactOrder() {
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Paid Media Management",
    budget: "",
    message: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", message: "Submitting..." });

    try {
      // In this static version we send an email draft via mailto for quick contact
      const body = encodeURIComponent(
        `New Project Inquiry (Al Haqq)\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\n\nMessage:\n${form.message}`
      );
      const subject = encodeURIComponent("New Project Inquiry – Al Haqq");
      window.location.href = `mailto:iitpath0@gmail.com?subject=${subject}&body=${body}`;

      setStatus({ type: "success", message: "Thanks! We’ll be in touch shortly." });
      setForm({ name: "", email: "", phone: "", service: "Paid Media Management", budget: "", message: "" });
    } catch (err) {
      setStatus({ type: "error", message: "Something went wrong. Please try again." });
    }
  };

  return (
    <section id="order" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Start a Project</h2>
          <p className="mt-3 text-white/70">
            Tell us about your goals and we’ll craft a plan tailored to your brand.
            Prefer talking? Email us at <a href="mailto:iitpath0@gmail.com" className="underline decoration-emerald-400">iitpath0@gmail.com</a> or call <a href="tel:7030294964" className="underline decoration-emerald-400">7030294964</a>.
          </p>

          <div className="mt-8 rounded-xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-emerald-500/10 p-2 ring-1 ring-emerald-500/30">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
              </div>
              <p className="text-sm text-white/80">Quick response within 24 hours.</p>
            </div>
          </div>
        </div>

        <form onSubmit={submit} className="rounded-xl border border-white/10 bg-white/5 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Name</label>
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Phone</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                placeholder="7030294964"
              />
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Service</label>
              <select
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white focus:border-emerald-400 focus:outline-none"
              >
                <option>Paid Media Management</option>
                <option>Creative Studio</option>
                <option>Performance Analytics</option>
                <option>Video & UGC Production</option>
              </select>
            </div>
            <div className="sm:col-span-1">
              <label className="text-sm text-white/70">Budget (USD)</label>
              <input
                value={form.budget}
                onChange={(e) => setForm({ ...form, budget: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                placeholder="e.g. 2000 - 5000"
              />
            </div>
            <div className="sm:col-span-2">
              <label className="text-sm text-white/70">Project Brief</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 focus:border-emerald-400 focus:outline-none"
                placeholder="Tell us about your goals, audience, and timelines"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-lg bg-emerald-500 px-4 py-2 font-semibold text-slate-950 hover:bg-emerald-400"
            disabled={status.type === "loading"}
          >
            {status.type === "loading" ? "Submitting..." : "Request Proposal"}
          </button>

          {status.type === "success" && (
            <p className="mt-3 text-sm text-emerald-400">{status.message}</p>
          )}
          {status.type === "error" && (
            <p className="mt-3 text-sm text-red-400">{status.message}</p>
          )}
        </form>
      </div>

      <div className="bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-6 py-10 grid gap-6 sm:grid-cols-2">
          <a href="mailto:iitpath0@gmail.com" className="flex items-center gap-3 text-white/90 hover:text-white">
            <Mail className="h-5 w-5 text-emerald-400" /> iitpath0@gmail.com
          </a>
          <a href="tel:7030294964" className="flex items-center gap-3 text-white/90 hover:text-white">
            <Phone className="h-5 w-5 text-emerald-400" /> 7030294964
          </a>
        </div>
      </div>
    </section>
  );
}
