import { useState } from 'react';
import { COMMON_CHAINS } from '../data';
import { Check, Clipboard, Search, Sparkles, Sliders, Info, AlertCircle } from 'lucide-react';

export default function BlockCadenas() {
  const [selectedPreset, setSelectedPreset] = useState<number>(0);
  const [customPitch, setCustomPitch] = useState<string>('3/8');
  const [customGauge, setCustomGauge] = useState<number>(1.3);
  const [customLinks, setCustomLinks] = useState<number>(52);
  const [copiedCode, setCopiedCode] = useState<boolean>(false);

  const activePreset = COMMON_CHAINS[selectedPreset];

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8">
      
      {/* Main text block card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-sky-100 text-sky-850 text-xs font-semibold px-3 py-1 rounded-full border border-sky-200/50 font-mono font-bold">
            Bloque 3: Cadenas de Corte
          </span>
          <span className="bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full font-mono">
            Repuesto exacto sin equivocarse
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl md:text-3xl tracking-tight leading-tight mb-5">
          Qué medidas mirar para comprar la cadena de la motosierra y no clavarte
        </h3>

        <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-medium text-slate-800 text-base">
            Ir a la ferretería y pedir <em>"una cadena para una máquina chica"</em> es la típica. Hay mil medidas y marcas. Para comprar el repuesto exacto por internet y que te ande, anotate estos 3 datos que por lo general vienen grabados en la espada:
          </p>

          {/* Three Parameters Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            
            {/* Param 1 */}
            <div className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl relative">
              <span className="text-2xl mb-2 block">📏</span>
              <h4 className="font-sans font-extrabold text-slate-900 text-base mb-1.5">
                1. El Paso
              </h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Es la distancia entre tres remaches partidos por la mitad. Para máquinas hobbistas casi siempre es <strong>3/8" (perfil bajo o LP)</strong> o <strong>.325"</strong>.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono">
                Ej: 3/8" LP o .325"
              </div>
            </div>

            {/* Param 2 */}
            <div className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl relative">
              <span className="text-2xl mb-block text-left mb-2 block">⛓️</span>
              <h4 className="font-sans font-extrabold text-slate-900 text-base mb-1.5">
                2. El Espesor (la canaleta)
              </h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Es el grosor de la patita interna que calza y corre por adentro de la ranura de la espada. Por lo general es <strong>1.1 mm (.043")</strong> o <strong>1.3 mm (.050")</strong>. Si comprás la más gruesa, se te va a trabar y no entra.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono">
                Ej: 1.1 mm o 1.3 mm
              </div>
            </div>

            {/* Param 3 */}
            <div className="bg-slate-50 border border-slate-200/50 p-5 rounded-2xl relative">
              <span className="text-2xl mb-2 block">🔢</span>
              <h4 className="font-sans font-extrabold text-slate-900 text-base mb-1.5">
                3. Cantidad de Eslabones
              </h4>
              <p className="text-xs text-slate-650 leading-relaxed">
                Sacá la cadena vieja, estirala en la mesa y contá cuántas "patitas" (los eslabones de arrastre que van del lado de adentro) tiene en total.
              </p>
              <div className="mt-4 pt-3 border-t border-slate-200/40 text-[10px] text-slate-400 font-mono">
                Ej: 52, 56 o 60 eslabones
              </div>
            </div>

          </div>

          <div className="p-4 rounded-xl bg-sky-50 border border-sky-100 text-slate-700 font-medium text-xs sm:text-sm mt-6">
            ✨ <strong>Conclusión:</strong> Con esos 3 números comprás tranquilo y calza de una. Si ponés cualquiera de ellos mal, la motosierra no cortará o desgastará los engranajes de tracción del piñón.
          </div>
        </div>
      </div>

      {/* Interactive Tool: Preset Matcher & Code builder */}
      <div className="bg-slate-900 text-slate-100 rounded-3xl p-6 md:p-8 border border-slate-800 shadow-sm">
        <h4 className="font-sans font-bold text-base text-white mb-1.5 flex items-center gap-1.5">
          <Search className="w-5 h-5 text-sky-400" />
          Buscador de Códigos de Repuesto Homologados
        </h4>
        <p className="text-xs text-slate-400 mb-6">
          Elegí tu modelo común de máquina o ingresá las de tu motosierra para compilar el código de repuesto correcto para buscar en MercadoLibre o ferreterías.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Presets Sidebar List */}
          <div className="lg:col-span-4 flex flex-col gap-2.5">
            <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
              Máquinas Populares de Barrio:
            </span>
            {COMMON_CHAINS.map((chain, index) => (
              <button
                key={chain.brand}
                onClick={() => {
                  setSelectedPreset(index);
                  setCustomPitch(chain.pitch);
                  setCustomGauge(chain.gauge);
                  setCustomLinks(chain.links);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all text-xs cursor-pointer flex flex-col gap-1
                  ${selectedPreset === index 
                    ? 'bg-sky-500 text-slate-950 border-white font-bold shadow-md' 
                    : 'bg-slate-850 hover:bg-slate-800 text-slate-350 border-slate-800'
                  }`}
              >
                <span className="text-white block font-sans font-bold">{chain.brand}</span>
                <span className="text-[10px] opacity-90">{chain.desc}</span>
              </button>
            ))}
          </div>

          {/* Interactive Custom Tuning Specs form */}
          <div className="lg:col-span-8 flex flex-col gap-6 bg-slate-950 p-5 md:p-6 rounded-2xl border border-slate-800">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-mono text-sky-400 flex items-center gap-1">
                <Sliders className="w-3.5 h-3.5" /> AJUSTADOR DE ESPECIFICACIONES
              </span>
              <span className="text-[10px] text-slate-400 font-mono bg-slate-905 px-2.5 py-0.5 rounded border border-slate-80o uppercase">
                Manual / Personalizado
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Pitch */}
              <div>
                <label htmlFor="pitch" className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-2">Paso (Pulgadas)</label>
                <select
                  id="pitch"
                  value={customPitch}
                  onChange={(e) => {
                    setCustomPitch(e.target.value);
                    setSelectedPreset(-1);
                  }}
                  className="w-full bg-slate-900 border border-slate-750 text-slate-100 py-2.5 px-3 rounded-lg text-xs font-mono cursor-pointer"
                >
                  <option value="3/8">3/8" Perfil Bajo (LP)</option>
                  <option value=".325">.325"</option>
                  <option value=".404">.404" Profesional</option>
                  <option value="1/4">1/4" Podador</option>
                </select>
              </div>

              {/* Gauge */}
              <div>
                <label htmlFor="gauge" className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-2">Espesor Canaleta (mm)</label>
                <select
                  id="gauge"
                  value={customGauge}
                  onChange={(e) => {
                    setCustomGauge(parseFloat(e.target.value));
                    setSelectedPreset(-1);
                  }}
                  className="w-full bg-slate-900 border border-slate-750 text-slate-100 py-2.5 px-3 rounded-lg text-xs font-mono cursor-pointer"
                >
                  <option value="1.1">1.1 mm (.043")</option>
                  <option value="1.3">1.3 mm (.050")</option>
                  <option value="1.5">1.5 mm (.058")</option>
                  <option value="1.6">1.6 mm (.063")</option>
                </select>
              </div>

              {/* Links count */}
              <div>
                <label htmlFor="links" className="block text-[10px] text-slate-400 uppercase tracking-widest font-mono mb-2">Eslabones ("Patitas")</label>
                <input
                  id="links"
                  type="number"
                  min="30"
                  max="100"
                  value={customLinks}
                  onChange={(e) => {
                    setCustomLinks(parseInt(e.target.value) || 52);
                    setSelectedPreset(-1);
                  }}
                  className="w-full bg-slate-900 border border-slate-750 text-slate-100 py-2.5 px-3 rounded-lg text-xs font-mono"
                />
              </div>

            </div>

            {/* Generated results box */}
            <div className="bg-slate-900 p-5 rounded-xl border border-slate-800 text-center flex flex-col md:flex-row items-center justify-between gap-4 mt-2">
              <div className="text-left">
                <span className="text-[9px] text-slate-500 font-mono block mb-0.5 uppercase tracking-wider">CÓDIGO DE BÚSQUEDA GENERADO:</span>
                <span className="text-sm md:text-md font-mono font-black text-amber-300">
                  Cadena Motosierra {customPitch} LP {customGauge}mm {customLinks}E
                </span>
                <p className="text-[10px] text-slate-400 mt-1 leading-relaxed">
                  Usá este código tal cual para repuestos Oregon, Stihl o marca genérica.
                </p>
              </div>

              <button
                type="button"
                onClick={() => handleCopyCode(`Cadena Motosierra ${customPitch} ${customGauge}mm ${customLinks} eslabones`)}
                className="bg-slate-800 hover:bg-slate-750 hover:text-white px-4 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 cursor-pointer text-slate-300 shrink-0 transition-colors"
              >
                {copiedCode ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" /> Copiado joya
                  </>
                ) : (
                  <>
                    <Clipboard className="w-3.5 h-3.5" /> Copiar Código
                  </>
                )}
              </button>
            </div>

            {/* Warn block */}
            <div className="text-[10px] text-slate-500 flex items-start gap-2 pt-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
              <span>
                <strong>Aclaración dócil:</strong> 3/8" "Perfil Bajo" (LP) es muy diferente a un 3/8" común estándar pesado de motosierra forestal de 70cc. Corrobora siempre si tu piñón de arrastre tiene puntas chicas. Las cadenas hobbistas hogareñas siempre llevan el sello "Picco" o perfil bajo.
              </span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
