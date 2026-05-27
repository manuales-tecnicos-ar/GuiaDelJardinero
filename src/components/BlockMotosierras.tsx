import { useState } from 'react';
import { calculateMixture } from '../data';
import { Fuel, RefreshCw, Sparkles, Check, AlertTriangle, Play, ShoppingCart, ExternalLink } from 'lucide-react';

export default function BlockMotosierras() {
  // Gasoline / oil mixture state
  const [liters, setLiters] = useState<number>(5);
  const [ratio, setRatio] = useState<'1_40' | '1_50'>('1_40');

  // Cold Start simulation state
  const [simStep, setSimStep] = useState<1 | 2 | 3 | 4 | 5>(1);
  const [didCough, setDidCough] = useState<boolean>(false);
  const [simMessage, setSimMessage] = useState<string>('Paso 1: Poné el contacto para darle energía.');

  const oilRequired = calculateMixture(liters, ratio);

  // Restart sequence simulation
  const handleRestartSim = () => {
    setSimStep(1);
    setDidCough(false);
    setSimMessage('Paso 1: Poné el contacto para darle energía.');
  };

  return (
    <div className="flex flex-col gap-8">
      
      {/* Primary content block */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-amber-100 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200/50 font-mono">
            Bloque 2: Motosierras
          </span>
          <span className="bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full font-mono">
            Evitá ahogos o roturas de motor
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl md:text-3xl tracking-tight leading-tight mb-5">
          Cómo arrancar la motosierra en frío sin ahogarla y qué aceite lleva la mezcla
        </h3>

        <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-medium text-slate-800 text-base">
            Prender una motosierra que estuvo tirada en el galpón todo el invierno puede ser un dolor de cabeza si no hacés los pasos correctos.
          </p>

          <div className="bg-slate-50 border border-slate-250/20 rounded-2xl p-6 my-6">
            <h4 className="font-sans font-bold text-slate-900 text-md sm:text-lg mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
              La secuencia de arranque correcta en frío:
            </h4>

            <div className="space-y-4 font-sans text-sm">
              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">1</span>
                <p>
                  <strong>Contacto:</strong> Poné el botón en contacto (en la "I").
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">2</span>
                <p>
                  <strong>Cebador y Bombín:</strong> Tirale del cebador (la perillita) todo para afuera. Si tiene bombín (la burbujita de nafta transparente), dale 5 o 6 bombazos.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-800 font-bold text-xs flex items-center justify-center shrink-0">3</span>
                <p>
                  <strong>El tirón del amague (¡Crucial!):</strong> Pegale el tirón a la soga con ganas hasta que la máquina "tosa" o haga el primer amague de arrancar. <strong>¡Ahí cortá!</strong> No le sigas dando porque la vas a recontra ahogar y vas a tener que sacar la bujía.
                </p>
              </div>

              <div className="flex gap-3 items-start">
                <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-800 font-bold text-xs flex items-center justify-center shrink-0">4</span>
                <p>
                  <strong>Arranque final:</strong> Meté el cebador para adentro, tirá de la soga de nuevo y ahí arranca joya. Dale un toque al gatillo del acelerador para que quede regulando sola.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl my-6">
            <h4 className="font-sans font-bold text-rose-950 text-sm sm:text-base mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0" />
              ⚠️ Ojo con los Aceites (No la fundas)
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm mt-2 text-rose-950/95">
              <div className="bg-white/80 p-4 rounded-xl border border-rose-200/40">
                <p className="font-bold text-rose-900 border-b border-rose-100 pb-2 mb-2">
                  El motor (Mezcla 2T):
                </p>
                <p className="leading-relaxed text-xs">
                  Lleva nafta súper con aceite 2 Tiempos. Poné la medida justa que te pide el tarrito (por lo general 1 en 40). Comprá un aceite 2T bueno, semisintético; no le pijotees acá porque el barato te llena el pistón y el escape de carbón.
                </p>
              </div>

              <div className="bg-white/80 p-4 rounded-xl border border-rose-200/40">
                <p className="font-bold text-rose-900 border-b border-rose-100 pb-2 mb-2">
                  La cadena de corte:
                </p>
                <p className="leading-relaxed text-xs">
                  Va en el otro tanquecito de adelante. Lleva aceite específico para cadena. <strong>Nunca le mandes aceite quemado del auto</strong>: tiene limaduras de hierro que te tapan la bomba de aceite y te hacen pelota la espada en un rato.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Oil Mixture Tool */}
      <div className="bg-gradient-to-br from-slate-900 to-zinc-950 text-slate-100 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-amber-500 text-slate-950 p-2.5 rounded-xl">
            <Fuel className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-sans font-bold text-base text-white">
              Calculadora de Taller: Relación de Mezcla 2T
            </h4>
            <p className="text-xs text-slate-400">
              Ingresá los litros de nafta y calculá la dosis justa de aceite para no empastar la bujía ni fundir la motosierra.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Controls Panel */}
          <div className="space-y-5">
            <div>
              <label htmlFor="liters-input" className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Cantidad de Nafta Súper en litros:
              </label>
              <div className="flex items-center gap-3">
                <input
                  id="liters-input"
                  type="range"
                  min="1"
                  max="20"
                  step="0.5"
                  value={liters}
                  onChange={(e) => setLiters(parseFloat(e.target.value))}
                  className="flex-1 accent-amber-500 cursor-pointer"
                />
                <span className="w-16 text-center font-mono font-bold text-lg bg-slate-800 border border-slate-700 py-1.5 rounded-lg text-amber-400">
                  {liters} L
                </span>
              </div>
            </div>

            <div>
              <span className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Relación de Mezcla (Aceite : Nafta):
              </span>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRatio('1_40')}
                  className={`py-3 px-4 rounded-xl font-bold text-xs transition-all border
                    ${ratio === '1_40' 
                      ? 'bg-amber-400 text-slate-950 border-white shadow-lg' 
                      : 'bg-slate-800 text-slate-400 border-slate-750 hover:bg-slate-750 hover:text-white'
                    }`}
                >
                  1 en 40 (2.5%) - Común
                </button>
                <button
                  type="button"
                  onClick={() => setRatio('1_50')}
                  className={`py-3 px-4 rounded-xl font-bold text-xs transition-all border
                    ${ratio === '1_50' 
                      ? 'bg-amber-400 text-slate-950 border-white shadow-lg' 
                      : 'bg-slate-800 text-slate-400 border-slate-750 hover:bg-slate-750 hover:text-white'
                    }`}
                >
                  1 en 50 (2.0%) - Sintético
                </button>
              </div>
            </div>
          </div>

          {/* Results Output */}
          <div className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 flex flex-col justify-between self-stretch text-center">
            <div>
              <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                DEBÉS AGREGAR EXACTAMENTE:
              </p>
              <p className="text-4xl font-mono font-black text-amber-400 my-3">
                {oilRequired.toFixed(0)} <span className="text-xl text-slate-300">ml</span>
              </p>
              <p className="text-xs text-slate-400 font-sans max-w-xs mx-auto leading-relaxed">
                de aceite semisintético para 2 Tiempos en tus {liters} litros de combustible.
              </p>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-800 text-[10px] text-amber-500 font-mono text-left bg-slate-900/30 p-2.5 rounded-lg flex items-start gap-2">
              <span className="shrink-0 mt-0.5">ℹ️</span>
              <span>
                <strong>Modo correcto:</strong> Poné primero el aceite en el bidón, sumale la nafta súper para que se mezcle sola por el torbellino de llenado. ¡Nunca directo al tanque!
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Simulator: Interactive click Cold-Start Sequence */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs relative">
        <h4 className="font-sans font-bold text-slate-800 text-base mb-1">
          🎮 Simulador Interactivo: ¿Podés arrancar el motor sin ahogarlo?
        </h4>
        <p className="text-xs text-slate-500 mb-5">
          Seguí los botones en el orden estricto del galpón para prender la motosierra de juguete.
        </p>

        <div className="bg-slate-50 border border-slate-200/40 rounded-2xl p-5 flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Virtual Chainsaw Dashboard */}
          <div className="flex flex-col gap-4 text-center justify-center bg-zinc-950 p-6 rounded-xl border border-slate-800 text-white min-w-[240px] shadow-inner font-mono">
            <span className="text-[10px] text-amber-400/80 uppercase tracking-widest block mb-2">TABLERO DE LA MÁQUINA</span>
            
            <div className="flex items-center justify-center gap-6 text-sm mb-2">
              {/* LED Status Indicator */}
              <div className="text-center">
                <span className={`inline-block w-4 h-4 rounded-full border border-black shadow-inner
                  ${simStep === 5 ? 'bg-emerald-500 animate-pulse' : 'bg-rose-600'}`} 
                />
                <span className="text-[9px] text-zinc-400 block mt-1">MOTOR</span>
              </div>

              {/* CEBADOR STATUS */}
              <div className="text-center">
                <span className={`inline-block w-6 h-6 rounded-lg text-xs font-bold flex items-center justify-center border border-zinc-700
                  ${(simStep === 2 || simStep === 3) ? 'bg-amber-400 text-slate-950' : 'bg-zinc-800 text-zinc-500'}`}>
                  {(simStep === 2 || simStep === 3) ? 'OUT' : 'IN'}
                </span>
                <span className="text-[9px] text-zinc-400 block mt-1">CEBADOR</span>
              </div>
            </div>

            <div className="text-xs font-sans font-semibold p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300">
              {simMessage}
            </div>
          </div>

          {/* Interactive Steps Buttons */}
          <div className="flex-1 flex flex-col gap-3">
            
            {/* Steps map */}
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => {
                  if (simStep === 1) {
                    setSimStep(2);
                    setSimMessage('Paso 2: cebador sacado y dale bombazos para cebar.');
                  } else {
                    setSimMessage('⚠️ Error: Debés poner primero la perilla de contacto en "I".');
                  }
                }}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center
                  ${simStep > 1 
                    ? 'bg-zinc-800 text-zinc-400 border-zinc-700' 
                    : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-200'}`}
              >
                1. Switch a "I" (Contacto)
              </button>

              <button
                type="button"
                onClick={() => {
                  if (simStep === 2) {
                    setSimStep(3);
                    setSimMessage('Paso 3: dale tirones de la soga con fuerza hasta que tosa.');
                  } else if (simStep < 2) {
                    setSimMessage('⚠️ ¡Pará! Te olvidaste de poner en contacto.');
                  } else {
                    setSimMessage('Cebador listo.');
                  }
                }}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center
                  ${simStep > 2 
                    ? 'bg-zinc-800 text-zinc-400 border-zinc-700' 
                    : simStep === 2 
                      ? 'bg-amber-400 text-slate-950 border-amber-500 scale-[1.02] animate-bounce' 
                      : 'bg-white text-slate-400 border-slate-200 cursor-not-allowed'}`}
                disabled={simStep < 2}
              >
                2. Tirar Cebador + Bombín
              </button>

              <button
                type="button"
                onClick={() => {
                  if (simStep === 3) {
                    setDidCough(true);
                    setSimStep(4);
                    setSimMessage('¡TOSIÓ! Es el primer amague. Meté el cebador para adentro antes de ahogar.');
                  } else if (simStep < 3) {
                    setSimMessage('⚠️ No tires de la soga sin cebar la nafta primero.');
                  } else {
                    setSimMessage('Ya se hizo el tirón inicial.');
                  }
                }}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center
                  ${simStep > 3 
                    ? 'bg-zinc-800 text-zinc-400 border-zinc-700' 
                    : simStep === 3
                      ? 'bg-rose-500 text-white border-rose-600 scale-[1.02] animate-pulse'
                      : 'bg-white text-slate-400 border-slate-200 cursor-not-allowed'}`}
                disabled={simStep < 3}
              >
                3. Tirar Soga hasta "Amague"
              </button>

              <button
                type="button"
                onClick={() => {
                  if (simStep === 4) {
                    setSimStep(5);
                    setSimMessage('🥳 ¡Arrancó! Dale un toque al acelerador para regular suavemente.');
                  } else if (simStep < 4) {
                    setSimMessage('⚠️ Si metés el cebador antes de que tosa, no succiona nafta suficente.');
                  }
                }}
                className={`py-3 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer border text-center
                  ${simStep === 5 
                    ? 'bg-emerald-600 text-white border-emerald-700' 
                    : simStep === 4
                      ? 'bg-amber-400 text-slate-950 border-amber-500 scale-[1.02] animate-bounce'
                      : 'bg-white text-slate-400 border-slate-200 cursor-not-allowed'}`}
                disabled={simStep < 4}
              >
                4. Meter Cebador + Tirón Final
              </button>
            </div>

            <button
              onClick={handleRestartSim}
              className="mt-3 text-xs text-slate-500 hover:text-slate-800 self-end flex items-center gap-1 font-mono hover:underline cursor-pointer"
            >
              <RefreshCw className="w-3 h-3" /> Reiniciar Simulación de Arranque
            </button>
          </div>
        </div>
      </div>

      {/* MercadoLibre Store Links for Motosierras */}
      <div className="bg-gradient-to-br from-[#fffdeb] via-[#fffde0] to-[#fffbc2]/40 rounded-3xl p-6 border border-amber-250/70 shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-amber-900">
              <ShoppingCart className="w-4 h-4 text-amber-800 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">¿Dónde comprar lubricantes originales?</span>
            </div>
            <h4 className="font-sans font-black text-slate-950 text-base md:text-lg tracking-tight mt-1 flex items-center gap-2">
              🛒 Adquirí tus Lubricantes en MercadoLibre 🇦🇷
            </h4>
            <p className="text-xs text-slate-655 mt-1 max-w-2xl leading-relaxed">
              No uses aceites genéricos sueltos o minerales de baja calidad que empastan la bujía y rayan el cilindro de tu motosierra. Te recomendamos usar aceite sintético para una combustión limpia y máxima vida útil:
            </p>
          </div>
          <span className="shrink-0 text-3xl hidden sm:block">🧴</span>
        </div>

        <div className="max-w-md">
          <a
            href="https://meli.la/32PX8uF"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-205 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Lubricación Premium 2T</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                Aceite 2T sintético de Alto Rendimiento
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Especial para Motosierras & Motoguadañas
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 font-mono">
              Comprar
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-1" />
            </div>
          </a>
        </div>
      </div>

    </div>
  );
}
