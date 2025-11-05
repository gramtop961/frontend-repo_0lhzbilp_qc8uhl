import React from 'react';

const projects = [
  {
    title: 'KINETIC POSTERS',
    tags: ['motion', 'type', 'poster'],
    color: 'from-fuchsia-500 via-violet-500 to-cyan-400',
    image:
      'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%25%22 stop-color=%22%23FF00FF%22/><stop offset=%2250%25%22 stop-color=%22%238A2BE2%22/><stop offset=%22100%25%22 stop-color=%22%2300FFFF%22/></linearGradient></defs><rect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22Inter,Arial%22 font-size=%2272%22 font-weight=%22700%22>POSTER</text></svg>',
  },
  {
    title: 'BRAND SYSTEMS',
    tags: ['identity', 'color', 'grid'],
    color: 'from-amber-400 via-orange-500 to-rose-500',
    image:
      'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%25%22 stop-color=%22%23FFC107%22/><stop offset=%2250%25%22 stop-color=%22%23FF7043%22/><stop offset=%22100%25%22 stop-color=%22%23FF1744%22/></linearGradient></defs><rect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22Inter,Arial%22 font-size=%2272%22 font-weight=%22700%22>BRAND</text></svg>',
  },
  {
    title: 'ALBUM ART',
    tags: ['cover', 'illustration', 'type'],
    color: 'from-cyan-400 via-sky-500 to-indigo-500',
    image:
      'data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22800%22 height=%22500%22><defs><linearGradient id=%22g%22 x1=%220%22 y1=%220%22 x2=%221%22 y2=%221%22><stop offset=%220%25%22 stop-color=%22%2300BCD4%22/><stop offset=%2250%25%22 stop-color=%22%2303A9F4%22/><stop offset=%22100%25%22 stop-color=%22%233F51B5%22/></linearGradient></defs><rect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23g)%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 fill=%22white%22 font-family=%22Inter,Arial%22 font-size=%2272%22 font-weight=%22700%22>ALBUM</text></svg>',
  },
];

const Showcase = () => {
  return (
    <section id="work" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-6">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Selected Work</h2>
          <p className="mt-2 max-w-2xl text-white/70">A small mix of projects that show range and playfulness.</p>
        </div>
        <a href="#contact" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:bg-white/10 md:block">
          Get a custom piece
        </a>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="aspect-[4/3] w-full overflow-hidden">
              <img
                src={p.image}
                alt={p.title}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold tracking-wide">{p.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-2 py-1 text-xs text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className={`pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100`}>
              <div className={`absolute inset-0 bg-gradient-to-tr ${p.color} mix-blend-overlay`} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Showcase;
