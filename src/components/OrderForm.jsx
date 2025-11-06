import { useState } from "react";
import { Send } from "lucide-react";

export default function OrderForm() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Paid Ads Management",
    budget: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK || "";
      const payload = { ...form, submittedAt: new Date().toISOString() };

      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      } else {
        // Fallback: send as email link
        const body = encodeURIComponent(
          `New project inquiry for Al Haqq\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nService: ${form.service}\nBudget: ${form.budget}\nMessage: ${form.message}`
        );
        window.location.href = `mailto:iitpath0@gmail.com?subject=New%20Project%20Inquiry%20-%20Al%20Haqq&body=${body}`;
      }

      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "Paid Ads Management", budget: "", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="order" className="bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Start Your Project</h2>
            <p className="mt-3 text-white/70">
              Tell us about your goals and we'll get back within 24 hours. You can also
              reach us directly at 7030294964 or iitpath0@gmail.com
            </p>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/80">Name</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Your full name"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/80">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="you@example.com"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/80">Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="7030294964"
                />
              </div>
              <div className="sm:col-span-1">
                <label className="block text-sm text-white/80">Service</label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option>Paid Ads Management</option>
                  <option>Performance Analytics</option>
                  <option>Landing Pages</option>
                  <option>Creatives & Copy</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Estimated Monthly Budget</label>
                <input
                  name="budget"
                  value={form.budget}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="$2,000 - $10,000"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-white/80">Project Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="mt-1 w-full rounded-lg border border-white/10 bg-slate-900 px-3 py-2 text-white placeholder-white/40 outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us about your business, audience, and goals."
                />
              </div>
            </div>

            <div className="mt-6 flex items-center gap-4">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:opacity-60"
              >
                <Send className="h-5 w-5" /> Submit Inquiry
              </button>
              {status === "success" && (
                <p className="text-sm text-emerald-300">Thanks! We'll be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="text-sm text-red-300">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
