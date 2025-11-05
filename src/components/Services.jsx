import React from 'react';
import { Palette, PenTool, Layers } from 'lucide-react';

const services = [
  {
    icon: Palette,
    title: 'Brand Identity',
    desc: 'Logos, color systems, typography, and visual languages that feel unmistakably you.',
  },
  {
    icon: PenTool,
    title: 'Graphic & Editorial',
    desc: 'Posters, covers, social content, and layouts with strong composition and rhythm.',
  },
  {
    icon: Layers,
    title: 'Motion & Interactives',
    desc: 'Micro-animations and interactive graphics that add delight without the noise.',
  },
];

const Services = () => {
  return (
    <section id="services" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">What I do</h2>
        <p className="mt-2 max-w-2xl text-white/70">
          A focused suite of design services built to ship distinct, enduring visuals.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {services.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
          >
            <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
              <div className="pointer-events-none absolute -inset-20 rotate-12 bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-amber-400/10 blur-2xl" />
            </div>
            <Icon className="h-6 w-6 text-white" />
            <h3 className="mt-4 text-xl font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
