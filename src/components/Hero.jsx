import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/30 to-slate-950/80" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-slate-200 shadow-sm backdrop-blur">
          <Rocket size={14} className="text-cyan-300" />
          Backend Engineer Portfolio
        </div>

        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
          Building reliable, scalable backends
          <span className="block bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">with clean APIs & data systems</span>
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-slate-300">
          I design and ship production‑ready services with a focus on performance, security, and delightful developer experience.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-110"
          >
            View Projects
            <ArrowRight size={18} className="transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 font-medium text-white/90 backdrop-blur transition hover:bg-white/10"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
