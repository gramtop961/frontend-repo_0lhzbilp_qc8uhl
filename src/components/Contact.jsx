import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -inset-32 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-fuchsia-500/10 via-transparent to-transparent" />
        </div>

        <h2 className="text-3xl font-semibold sm:text-4xl">Have a wild idea?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-white/70">
          I love briefs that feel like experiments. Tell me what you want to feel, not just what you want to see.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="mailto:hello@yourname.design?subject=Project%20Inquiry%20—%20Graphic%20Design"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
          >
            Email me
          </a>
          <a
            href="#work"
            className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
          >
            View more work
          </a>
        </div>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 text-xs text-white/50 sm:flex-row">
        <p>© {new Date().getFullYear()} Your Name — Graphic Designer</p>
        <p>Built with love, color, and a bit of motion.</p>
      </footer>
    </section>
  );
};

export default Contact;
