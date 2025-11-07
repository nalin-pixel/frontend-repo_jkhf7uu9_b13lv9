import React from 'react';

const specs = [
  { label: 'Body', value: 'Carbon-fiber, low-drag silhouette' },
  { label: 'Lighting', value: 'Red ambient cabin luminance' },
  { label: 'Dynamics', value: 'Track-tuned stance and aero' },
  { label: 'Atmosphere', value: 'Subtle exhaust + road mist' },
];

export default function Specs() {
  return (
    <section id="specs" className="w-full bg-black py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold md:text-4xl">Clip Specs</h2>
        <p className="mt-3 max-w-2xl text-white/70">
          Designed for a futuristic, sleek vibe. These parameters shape the
          look and feel of the scene.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {specs.map((s) => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-wide text-white/50">{s.label}</p>
              <p className="mt-1 text-white/90">{s.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
