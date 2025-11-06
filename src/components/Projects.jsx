import React from 'react';
import { Code2, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Realtime Chat Service',
    desc: 'WebSocket gateway with presence, typing indicators, and horizontal sharding.',
    stack: ['FastAPI', 'Redis', 'PostgreSQL', 'Docker'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Payments API',
    desc: 'Idempotent payment flows with retries, webhooks, and observability.',
    stack: ['Python', 'Stripe', 'Celery', 'Sentry'],
    repo: 'https://github.com/',
    demo: '#',
  },
  {
    title: 'Feature Flags Service',
    desc: 'Multi-tenant flags with SDKs, rollout rules, and audit trails.',
    stack: ['Node', 'MongoDB', 'K8s', 'Grafana'],
    repo: 'https://github.com/',
    demo: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-20 bg-slate-950/95">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <Code2 className="text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Highlighted Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur hover:bg-white/10 transition">
              <div className="flex items-start justify-between">
                <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                <div className="flex items-center gap-2 text-slate-300">
                  <a href={p.repo} className="hover:text-white" aria-label="GitHub">
                    <Github size={18} />
                  </a>
                  <a href={p.demo} className="hover:text-white" aria-label="Live demo">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <p className="mt-3 text-slate-300">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
