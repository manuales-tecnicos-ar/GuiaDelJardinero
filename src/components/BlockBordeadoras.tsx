import { useState } from 'react';
import PowerMatcher from './PowerMatcher';
import WindingGuide from './WindingGuide';
import { HelpCircle, AlertTriangle, Play, Sparkles, Check, ChevronDown, ChevronUp, ShoppingCart, ExternalLink } from 'lucide-react';

export default function BlockBordeadoras() {
  const [showAdvanceGuide, setShowAdvanceGuide] = useState<boolean>(false);
  const [selectedYuyoType, setSelectedYuyoType] = useState<'baja' | 'media' | 'dura'>('media');

  return (
    <div className="flex flex-col gap-8">
      {/* Primary Content Hero style Card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-emerald-100 text-emerald-800 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/50 font-mono">
            Bloque 1: Bordeadoras de Césped
          </span>
          <span className="bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full font-mono">
            Evitá atascos y cortes abruptos
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl md:text-3xl tracking-tight leading-tight mb-5">
          ¿La bordeadora te corta la tanza a cada rato o se te trabó el carretel?
        </h3>

        <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-medium text-slate-800 text-base">
            No hay nada más de terror que estar cortando el pasto el domingo a la mañana y que la tanza se te corte al ras o se trabe adentro. Casi siempre es por cómo enroscamos el hilo.
          </p>

          <div className="bg-rose-50/70 border border-rose-100 p-4 rounded-xl text-rose-950 flex gap-3 text-xs sm:text-sm my-4">
            <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            <div>
              <strong>¿Por qué se corta al ras o se pega?</strong> Cuando acelerás el motor a tope y golpeás directamente piedras o paredes duras con la base del cabezal, la tanza sufre un sobrecalentamiento instantáneo por fricción que funde los hilos adyacentes adentro de tu carretel doble.
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-250/20 rounded-2xl p-6 mt-6">
            <h4 className="font-sans font-bold text-slate-900 text-md sm:text-lg mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              El paso a paso para que no se trabe en el jardín:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Step 1 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/50 relative flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Paso 1: Sentido
                  </span>
                  <h5 className="font-sans font-bold text-slate-900 text-sm mt-3 mb-1.5">
                    Para qué lado enroscar
                  </h5>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Mirá la flechita que tiene el carretel de plástico. Si lo enroscás al revés, cuando aceleres te va a escupir toda la tanza junta.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                  Sigue la flecha grabada
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/50 relative flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Paso 2: Tensión
                  </span>
                  <h5 className="font-sans font-bold text-slate-900 text-sm mt-3 mb-1.5">
                    Ni muy flojo ni muy a lo bestia
                  </h5>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Enroscá firme pero sin matarlo. Si lo apretás mucho, con el mismo calor del motor la tanza se funde, se pega toda adentro y no sale más.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                  Tensión firme pero holgada
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-white p-4 rounded-xl border border-slate-200/50 relative flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full">
                    Paso 3: El Ojal
                  </span>
                  <h5 className="font-sans font-bold text-slate-900 text-sm mt-3 mb-1.5">
                    El tip de ferretero
                  </h5>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Dejá siempre unos 10 centímetros de tanza asomando por los ojalitos de aluminio antes de cerrar la tapa a presión.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-mono">
                  Ojal metálico de bronce/aluminio
                </div>
              </div>

            </div>
          </div>

          <div className="bg-amber-450/10 text-amber-950 p-5 rounded-2xl border border-amber-500/20 flex gap-4 mt-6 items-start">
            <div className="p-2.5 bg-amber-400 text-amber-950 rounded-xl shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-mono font-bold uppercase text-amber-800 tracking-wider">
                💡 Tip de Oro del Taller
              </p>
              <p className="text-xs sm:text-sm font-medium mt-1 leading-relaxed">
                La tanza redonda común zafa, pero se gasta al toque. Si tenés yuyos duros o le das mucho contra el tejido o la pared de ladrillos, pasate a la <strong>tanza cuadrada de 2mm o 2.4mm</strong>. Pega mucho mejor, corta limpio y dura el triple.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Selector of Tanza with visual recommendation */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
        <h4 className="font-sans font-bold text-slate-800 text-base mb-1">
          ⚙️ Calculadora Rápida: Elegí tu Tanza Correcta de Barrio
        </h4>
        <p className="text-xs text-slate-550 mb-5">
          Seleccioná qué tipo de maleza o yuyo vas a enfrentar para calcular la tanza recomendada:
        </p>

        <div className="grid grid-cols-3 gap-3 mb-6">
          {(['baja', 'media', 'dura'] as const).map((yuyo) => (
            <button
              key={yuyo}
              onClick={() => setSelectedYuyoType(yuyo)}
              className={`py-3 px-4 rounded-xl text-center font-bold text-xs capitalize transition-all cursor-pointer border
                ${selectedYuyoType === yuyo 
                  ? 'bg-emerald-600 text-white border-emerald-700 shadow-md scale-[1.02]' 
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
            >
              Yuyos {yuyo === 'baja' ? 'Blandos' : yuyo === 'media' ? 'Tupidos' : 'Duros / Tejido'}
            </button>
          ))}
        </div>

        <div className="p-4 rounded-2xl bg-emerald-950 text-emerald-50 border border-emerald-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-amber-400 text-emerald-950 text-xl flex items-center justify-center font-black">
              {selectedYuyoType === 'baja' ? '●' : selectedYuyoType === 'media' ? '✦' : '■'}
            </span>
            <div>
              <p className="text-[10px] text-emerald-300 font-mono tracking-wider">TANZA RECOMENDADA</p>
              <p className="text-sm font-bold text-white">
                {selectedYuyoType === 'baja' ? 'Tanza Redonda Común (1.6mm)' : 
                 selectedYuyoType === 'media' ? 'Tanza Estrella / Helicoidal (2.0mm)' : 
                 'Tanza Cuadrada Profesional Amarilla (2.4mm)'}
              </p>
            </div>
          </div>
          <div className="text-xs text-emerald-200/90 max-w-sm border-l border-emerald-800/60 pl-4 py-1">
            {selectedYuyoType === 'baja' && 'Suficiente para gramilla o retoques hogareños sencillos en vereda limpia.'}
            {selectedYuyoType === 'media' && 'Gran balance de rapidez sin exigir tanto torque a motores eléctricos estándar.'}
            {selectedYuyoType === 'dura' && '¡Excelente! El perfil de 4 filos rebanará cardones, cardos y tallos leñosos sin romperse al golpear la pared.'}
          </div>
        </div>
      </div>

      {/* Accordion list details buttons */}
      <div className="border border-slate-100 bg-white rounded-3xl overflow-hidden shadow-xs">
        <button
          onClick={() => setShowAdvanceGuide(!showAdvanceGuide)}
          className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors text-left"
        >
          <div className="flex items-center gap-3">
            <span className="p-2 bg-emerald-50 rounded-xl text-emerald-700 shrink-0">
              📖
            </span>
            <div>
              <h5 className="font-sans font-bold text-slate-900 text-sm">
                Mostrar Guía de Watts vs Tanza & Bobinado
              </h5>
              <p className="text-xs text-slate-400 mt-0.5">Hacé click para ver cuántos Watts corresponden de tanza, cuándo saltar a desbrozadora, y el cuidado del carretel.</p>
            </div>
          </div>
          {showAdvanceGuide ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
        </button>

        {showAdvanceGuide && (
          <div className="border-t border-slate-100 p-6 bg-slate-50/50 flex flex-col gap-8 animate-fade-in">
            <PowerMatcher />
            <WindingGuide />
          </div>
        )}
      </div>

      {/* MercadoLibre Store Links Footer Section */}
      <div className="bg-gradient-to-br from-[#fffdeb] via-[#fffde0] to-[#fffbc2]/40 rounded-3xl p-6 border border-amber-250/70 shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-amber-900">
              <ShoppingCart className="w-4 h-4 text-amber-800 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">¿Dónde comprar tanzas de calidad?</span>
            </div>
            <h4 className="font-sans font-black text-slate-950 text-base md:text-lg tracking-tight mt-1 flex items-center gap-2">
              🛒 Adquirí tus Repuestos en MercadoLibre 🇦🇷
            </h4>
            <p className="text-xs text-slate-650 mt-1 max-w-2xl leading-relaxed">
              No uses tanzas genéricas y resecas de ferretería de barrio que se cortan enseguida. Te dejamos los enlaces seleccionados para que compres de forma directa y segura las tanzas originales:
            </p>
          </div>
          <span className="shrink-0 text-3xl hidden sm:block">📦</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <a
            href="https://meli.la/2Wk2YZL"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-200/80 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Inicial - Hogar</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                Tanza Redonda Común (1.6mm)
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Ideal Eléctricas Chicas
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-2 animate-bounce-horizontal" />
          </a>

          <a
            href="https://meli.la/2DgRfYZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-200/80 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Equilibrio Perfecto</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                Tanza Estrella (2.4mm)
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Óptima Durabilidad & Filo
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-2" />
          </a>

          <a
            href="https://meli.la/1a1a74t"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-200/80 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Profundo / Desmonte</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                Tanza Cuadrada Prof. (3.0mm)
              </span>
              <span className="text-[10px] text-rose-850 font-bold bg-rose-50 px-2 py-0.5 rounded w-fit mt-1">
                Solo Desbrozadoras Nafta
              </span>
            </div>
            <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-2" />
          </a>

        </div>
      </div>
    </div>
  );
}
