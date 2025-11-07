import React from 'react';
import { Play } from 'lucide-react';

export default function Showcase() {
  return (
    <section id="showcase" className="relative w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold md:text-4xl">Cinematic Drift</h2>
            <p className="mt-3 text-white/70">
              Glide along an empty night highway. Subtle exhaust and road mist
              accentuate forward motion while the cabin glows in signature red.
            </p>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-red-500" /> Real-time 3D
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/60" /> Interactive
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-white/40" /> Ambient mist
              </span>
            </div>
          </div>
          <a
            href="#"
            className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-5 py-3 transition hover:border-white/40 hover:bg-white/5"
          >
            <Play className="h-4 w-4 text-white/80 transition group-hover:text-white" />
            Play short clip
          </a>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            'Motion-blur tuned for night scenes',
            'Low-slung stance highlights speed',
            'Road lines keep the pace and depth',
          ].map((t, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6">
              <p className="text-white/80">{t}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
