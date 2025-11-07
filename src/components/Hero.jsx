import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/m8wpIQzXWhEh9Yek/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Top gradient glow (non-blocking) */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-transparent"
      />
      {/* Bottom mist glow */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black via-black/60 to-transparent"
      />

      {/* Content Overlay */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-start justify-center px-6">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-red-500" />
          <span className="text-xs text-white/80">Cinematic 3D Clip</span>
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight md:text-6xl">
          BMW Night Runner
          <span className="block text-transparent bg-gradient-to-r from-white to-white/60 bg-clip-text">Sleek. Dynamic. Futuristic.</span>
        </h1>
        <p className="mt-4 max-w-xl text-white/70 md:text-lg">
          A dark, road-hugging silhouette with glowing red interiors cutting through the mist. Experience the motion.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#showcase"
            className="rounded-full bg-white px-6 py-3 text-black transition hover:bg-white/90"
          >
            Watch the clip
          </a>
          <a
            href="#specs"
            className="rounded-full border border-white/20 px-6 py-3 text-white transition hover:border-white/40 hover:bg-white/5"
          >
            View specs
          </a>
        </div>
      </div>
    </section>
  );
}
