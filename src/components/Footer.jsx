import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full bg-black py-12 text-white/70">
      <div className="mx-auto max-w-6xl px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Night Runner — A BMW-inspired 3D clip.</p>
        <div className="flex items-center gap-4 text-sm">
          <a href="#showcase" className="hover:text-white">Showcase</a>
          <a href="#specs" className="hover:text-white">Specs</a>
          <a href="#" className="hover:text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
}
