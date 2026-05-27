import { useState } from 'react';
import { Play, Check, AlertCircle, Droplets, Shield, ArrowRight } from 'lucide-react';

interface Step {
  id: number;
  title: string;
  desc: string;
  tip: string;
  highlight: string;
}

export default function WindingGuide() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Medición y Corte de Tanza",
      desc: "Cortá una longitud aproximada de 3 a 5 metros del rollo de tanza recomendada (p. ej., tanza cuadrada amarilla de 2.0mm o 2.4mm). Evitá longitudes excesivas ya que pueden amontonarse adentro de la bobina y atascar el autoalimentador.",
      tip: "Tip Técnico: Si la tanza se siente dura o quebradiza, dejala sumergida en agua por unas horas. Aumentará su elasticidad y resistencia al quiebre radicalmente.",
      highlight: "Longitud máxima recomendada: 5 metros."
    },
    {
      id: 2,
      title: "Anclaje en el Tabique Separador",
      desc: "Doblá la tanza por la mitad de su longitud. Encontrá la ranura o gancho de sujeción que se ubica en el tabique separador interno de tu carretel doble. Enganchá el bucle central de manera firme para fijar el punto departial.",
      tip: "Para carreteles de una sola vía, simplemente pasá la tanza hasta su tope en el orificio central de retención.",
      highlight: "Asegurá que no se zafe el nudo inicial."
    },
    {
      id: 3,
      title: "Bobinado en Dirección Opuesta",
      desc: "Enrollá la tanza alrededor del carretel en la dirección indicada por la flecha grabada en el plástico (generalmente de forma opuesta al giro del motor de la bordeadora). Mantené la tensión firme y rellená de forma uniforme ambas pistas paralelamente para evitar rozamiento cruzado.",
      tip: "¡Fundamental! Mantener las pistas separadas impide que las tanzas se encimen y se fundan entre sí por la fricción calorífica del motor con el suelo.",
      highlight: "Seguí la dirección de la flecha grabada."
    },
    {
      id: 4,
      title: "Enhebrado en los Ojales Metálicos",
      desc: "Tomá los extremos libres de la tanza y pasálos de adentro hacia afuera a través de los ojales metálicos laterales (los casquillos de salida) del cabezal. Colocá el muelle central y encastrá la tapa del carrete presionando firmemente hasta escuchar el 'click' de trabado.",
      tip: "Una vez cerrada, tirá fuertemente de ambos extremos para soltar la tanza de los clips temporales e igualar el balance rotativo antes de encender.",
      highlight: "Paso obligado por los ojales metálicos de salida."
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-xs border border-slate-100 flex flex-col gap-6">
      <div>
        <div className="flex items-center gap-2 mb-1.5">
          <span className="bg-emerald-100 text-emerald-800 text-[10px] font-mono tracking-wider font-bold px-2.5 py-0.5 rounded-full uppercase">
            Paso a Paso Seguro
          </span>
          <span className="text-xs text-slate-400 font-mono">• Manual del Operador</span>
        </div>
        <h3 className="font-sans font-bold text-slate-900 text-lg">
          La Correcta Técnica de Bobinado (Carretel Doble)
        </h3>
        <p className="text-xs text-slate-500 max-w-xl leading-relaxed mt-1">
          Un 90% de los problemas de arranques bruscos, fusión de tanza por calor o rotura excesiva se originan en un bobinado desordenado u omitiendo el ojal metálico.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Navigation Columns (Col span 4) */}
        <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 scrollbar-none">
          {steps.map((st) => {
            const isActive = st.id === activeStep;
            return (
              <button
                key={st.id}
                onClick={() => setActiveStep(st.id)}
                className={`text-left p-3.5 rounded-2xl border transition-all duration-200 shrink-0 lg:shrink-1 w-[210px] lg:w-full flex gap-3 items-center
                  ${isActive 
                    ? 'border-emerald-600 bg-emerald-50/50 shadow-xs' 
                    : 'border-slate-100 hover:border-slate-200 hover:bg-slate-50/50'
                  }`}
              >
                <span className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center shrink-0
                  ${isActive 
                    ? 'bg-emerald-600 text-white' 
                    : 'bg-slate-100 text-slate-500'
                  }`}>
                  {st.id}
                </span>
                <span className="text-xs font-semibold text-slate-700 font-sans block truncate max-w-[150px]">
                  {st.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content Viewer (Col span 8) */}
        <div className="lg:col-span-8 bg-slate-50/50 rounded-2xl p-5 border border-slate-100 flex flex-col justify-between min-h-[220px]">
          <div>
            <div className="flex items-center justify-between mb-3.5 pb-2 border-b border-slate-200/40">
              <span className="text-xs font-mono text-emerald-800 font-bold">
                PASO {activeStep} DE {steps.length}
              </span>
              <span className="text-xs text-slate-400 font-mono tracking-tighter flex items-center gap-1">
                Fijación manual <Check className="w-3.5 h-3.5 text-emerald-500" />
              </span>
            </div>

            <h4 className="font-sans font-extrabold text-slate-800 text-base mb-2">
              {steps[activeStep - 1].title}
            </h4>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {steps[activeStep - 1].desc}
            </p>

            <div className="bg-white/80 p-3 rounded-xl border border-slate-200/40 text-xs font-mono font-medium text-emerald-800 mt-3.5 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span><strong>Clave:</strong> {steps[activeStep - 1].highlight}</span>
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200/40 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-amber-50/50 border border-amber-200/40 p-4 rounded-xl">
            <p className="text-amber-900 leading-relaxed">
              <strong>Consejo Técnico:</strong> {steps[activeStep - 1].tip}
            </p>
          </div>
        </div>
      </div>

      {/* Safety recommendations list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100">
        <div className="flex gap-3 p-3 rounded-xl bg-slate-50/50">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Droplets className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800 font-sans mb-0.5">La hidratación lo es todo</h5>
            <p className="text-[11px] text-slate-500 leading-relaxed">Sumergir tanzas secas en agua un día antes recupera la humedad normal del nailon y previene quiebres súbitos.</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 rounded-xl bg-slate-50/50">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800 font-sans mb-0.5">Protección ante todo</h5>
            <p className="text-[11px] text-slate-500 leading-relaxed">La rotación a 10.000 RPM catapulta piedras u hojarasca. El uso de antiparras oscuras y canilleras evita lesiones.</p>
          </div>
        </div>
        <div className="flex gap-3 p-3 rounded-xl bg-slate-50/50">
          <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <AlertCircle className="w-4 h-4" />
          </div>
          <div>
            <h5 className="text-xs font-bold text-slate-800 font-sans mb-0.5">Corte a nivel distal</h5>
            <p className="text-[11px] text-slate-500 leading-relaxed">Dejá trabajar sólo el extremo libre de la tanza. Si rozás con el cabezal de lleno, derretirás los bucles internos.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
