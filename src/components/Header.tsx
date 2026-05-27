import { Sprout, Wrench, ShieldCheck, Heart } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-emerald-950 text-emerald-50 py-8 px-6 rounded-3xl shadow-xl border border-emerald-900/50 mb-8 relative overflow-hidden">
      {/* Decorative foliage backgrounds */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-emerald-800/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
      <div className="absolute left-1/3 bottom-0 w-48 h-48 bg-emerald-800/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-500/30 font-mono tracking-wider uppercase">
              El Manual del Hobbista de Barrio 🇦🇷
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-sans font-black tracking-tight text-white leading-tight">
            Guía de Máquinas & <span className="text-rose-300">Cuidado del Jardín</span>
          </h1>
          <p className="mt-2 text-emerald-200/90 max-w-xl text-sm leading-relaxed">
            Las verdades del taller simplificadas para que no se te trabe la tanza, arranques la motosierra de un tirón, elijas la cadena exacta sin clavarte, cuides el aceite del motor y salves tus plantas de las heladas.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 bg-emerald-900/40 p-4 rounded-2xl border border-emerald-800/40 backdrop-blur-sm self-start md:self-auto">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-lg text-rose-300">
              <Sprout className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <p className="text-xs text-emerald-300 font-mono">ENFOQUE DE HOY</p>
              <p className="text-sm font-bold text-white">5 Pilares de Trabajo</p>
            </div>
          </div>
          <div className="h-8 w-[1px] bg-emerald-800 hidden sm:block" />
          <div className="flex items-center gap-3">
            <div className="p-2 bg-emerald-800 rounded-lg text-lime-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-emerald-300 font-mono">CONSEJERO ACTIVO</p>
              <p className="text-sm font-semibold text-white">Taller de Eduardo</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
