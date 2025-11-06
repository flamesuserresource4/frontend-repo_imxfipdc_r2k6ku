import React from 'react';
import { Database, Server, Cloud, Shield, TerminalSquare } from 'lucide-react';

const skills = [
  {
    icon: <Server className="text-cyan-400" size={22} />,
    title: 'APIs & Services',
    items: ['FastAPI', 'Node/Express', 'GraphQL', 'gRPC'],
  },
  {
    icon: <Database className="text-emerald-400" size={22} />,
    title: 'Datastores',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka'],
  },
  {
    icon: <Cloud className="text-indigo-400" size={22} />,
    title: 'Cloud & Infra',
    items: ['Docker', 'Kubernetes', 'AWS', 'CI/CD'],
  },
  {
    icon: <Shield className="text-pink-400" size={22} />,
    title: 'Security & Quality',
    items: ['OAuth2/JWT', 'Rate Limiting', 'Testing', 'Observability'],
  },
];

const TechStack = () => {
  return (
    <section id="stack" className="relative py-20 bg-slate-950">
      <div className="container mx-auto px-6">
        <div className="mb-10 flex items-center gap-3">
          <TerminalSquare className="text-cyan-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Core Skills</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="flex items-center gap-3">
                {s.icon}
                <h3 className="font-semibold text-white">{s.title}</h3>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-slate-300">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
