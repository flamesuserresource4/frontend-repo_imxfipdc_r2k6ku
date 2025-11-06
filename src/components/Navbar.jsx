import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#stack', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition ${scrolled ? 'backdrop-blur bg-slate-950/70 border-b border-white/10' : 'bg-transparent'}`}>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="text-white font-semibold tracking-tight">dev.backend()</a>

        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-slate-300 hover:text-white transition">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/15">Hire Me</a>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(v => !v)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-white/10 bg-slate-950/90 backdrop-blur">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="text-slate-300 hover:text-white" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" className="rounded-lg bg-white/10 px-4 py-2 text-white hover:bg-white/15" onClick={() => setOpen(false)}>Hire Me</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
