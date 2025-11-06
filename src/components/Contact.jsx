import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <Mail className="text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-slate-300">
              Have an interesting backend challenge or need help scaling your systems? I’d love to chat.
            </p>
            <div className="mt-6 space-y-3 text-slate-300">
              <p><span className="text-white">Email:</span> you@example.com</p>
              <p><span className="text-white">Location:</span> Remote • UTC±0 to UTC+5</p>
              <p><span className="text-white">Freelance:</span> Available for contracting</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="grid gap-4">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                className="w-full rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project"
                rows={5}
                className="w-full rounded-md border border-white/10 bg-slate-900/50 px-4 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
            >
              <Send size={18} />
              Send Message
            </button>
            {sent && (
              <p className="mt-3 text-sm text-emerald-400">Thanks! Your message is noted locally for now.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
