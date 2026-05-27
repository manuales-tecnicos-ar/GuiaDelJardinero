import { useState } from 'react';
import { Sparkles, Zap, ShieldAlert, Cpu, Check, HelpCircle, ArrowRight, Gauge, AlertTriangle } from 'lucide-react';

interface TanzaLevel {
  thickness: string;
  recommendedWatts: string;
  recommendedCC: string;
  toolType: string;
  dangerLevel: 'Bajo' | 'Moderado' | 'Crítico';
  dangerText: string;
  canUseBlade: boolean;
  idealFor: string;
}

interface PowerLevel {
  range: string;
  maxTanza: string;
  limitExplanation: string;
  typicalTools: string;
  recoilWarning: string;
}

export default function PowerMatcher() {
  const [selectedThickness, setSelectedThickness] = useState<string>('2.0');
  const [selectedPowerSrc, setSelectedPowerSrc] = useState<string>('800W');

  const tanzaConfig: Record<string, TanzaLevel> = {
    '1.2': {
      thickness: '1.2 mm - 1.5 mm',
      recommendedWatts: '250W a 500W',
      recommendedCC: 'No recomendado a nafta',
      toolType: 'Bordeadora Eléctrica Hogareña (Recortadora de bordes muy liviana)',
      dangerLevel: 'Bajo',
      dangerText: 'Es el hilo original de fábrica para bordeadoras chicas. El motor gira libre sin esfuerzo térmico.',
      canUseBlade: false,
      idealFor: 'Césped fino de jardín chico, gramilla tierna, orillas de macetas y canteros limpios.',
    },
    '1.6': {
      thickness: '1.6 mm',
      recommendedWatts: '500W a 800W',
      recommendedCC: 'No recomendado a nafta',
      toolType: 'Bordeadora Eléctrica Estructura Media',
      dangerLevel: 'Bajo',
      dangerText: 'Excelente equilibrio para bordeadoras comunes de pasillo o vereda. No recalienta los bobinados.',
      canUseBlade: false,
      idealFor: 'Pasto de patio común, malezas recién brotadas, zanjas residenciales cuidadas.',
    },
    '2.0': {
      thickness: '2.0 mm',
      recommendedWatts: '900W a 1200W',
      recommendedCC: '22cc a 26cc',
      toolType: 'Bordeadora Eléctrica Potente / Motoguadaña ultra-liviana a nafta',
      dangerLevel: 'Moderado',
      dangerText: 'Si colocás esta tanza en una bordeadora de menos de 600W, el motor bajará drásticamente de vueltas, la hélice interna de refrigeración no ventilará a tiempo y se quemará el motor.',
      canUseBlade: false,
      idealFor: 'Césped tupido, malezas medianas, bordes de caminos rurales sin piedras.',
    },
    '2.4': {
      thickness: '2.4 mm',
      recommendedWatts: 'Mínimo 1200W - 1500W (Uso Precavido)',
      recommendedCC: '26cc a 33cc',
      toolType: 'Motoguadaña Hogareña / Desbrozadora Semi-Profesional',
      dangerLevel: 'Crítico',
      dangerText: '¡La zona caliente de peligro! Nunca uses 2.4mm en bordeadoras eléctricas comunes de plástico de 300W-500W. El peso y arrastre del aire las frenan al instante y se funden en menos de 5 minutos de uso continuo.',
      canUseBlade: true,
      idealFor: 'Yuyos duros, bordes de alambrados gruesos, carditas, maleza madura en lotes baldíos.',
    },
    '3.0': {
      thickness: '3.0 mm - 3.3 mm',
      recommendedWatts: 'No apto para eléctricas estándar (>2000W especiales)',
      recommendedCC: '33cc, 43cc a 52cc o superior',
      toolType: 'Desbrozadora Profesional de Alta Cilindrada (Motoguadaña pesada)',
      dangerLevel: 'Crítico',
      dangerText: 'Exclusivo uso severo de combustión. En bordeadoras eléctricas convencionales es un "suicidio" garantizado para la herramienta en la primera acelerada.',
      canUseBlade: true,
      idealFor: 'Matorrales espesos, tallos leñosos lejanos, desmonte, campos abiertos, banquinas viales.',
    }
  };

  const powerConfig: Record<string, PowerLevel> = {
    '350W': {
      range: '300W - 500W (Bordeadora Eléctrica Básica)',
      maxTanza: '1.5 mm de diámetro máximo',
      limitExplanation: 'La bobina tiene un devanado eléctrico muy fino y baja inducción magnética. Si superás los 1.5mm de tanza, la resistencia aerodinámica de rotación impide que el motor llegue a sus RPM de régimen óptimo, consumiendo amperes excesivos y derritiendo los aislantes de cobre.',
      typicalTools: 'Bordeadoras livianas con motor arriba y eje flexible curvo.',
      recoilWarning: '⚠️ PROHIBIDO TOTALMENTE usar cuchillas plásticas o de metal de repuesto.'
    },
    '800W': {
      range: '600W - 900W (Bordeadora Reforzada)',
      maxTanza: '1.6 mm / 2.0 mm (Este último con tramos cortos)',
      limitExplanation: 'Poseen mejor par mecánico de torsión. Podés usar tanza estrella de 1.6mm o tanza redonda de 2.0mm cuidando la distancia de corte (no la dejes más larga que la cuchilla de la carcasa protectora, ya que el largo de tanza es el enemigo número uno del motor eléctrico).',
      typicalTools: 'Bordeadoras con mango telescópico o empuñadura doble mediana.',
      recoilWarning: '⚠️ No aptas para cuchillas de acero. El eje flexible interno se deshilacha y corta por torsión si la cuchilla golpea un tronco.'
    },
    '1200W': {
      range: '1000W - 1500W (Súper Bordeadoras / Desbrozadoras Eléctricas)',
      maxTanza: '2.0 mm / Límitado 2.4 mm en trayectos cortos',
      limitExplanation: 'Tienen una fuerza de torque formidable para ser eléctricas, pero siguen ventilando por el flujo de aire del cabezal. No abuses del grosor de la tanza para no forzar la transmisión integrada.',
      typicalTools: 'Equipos profesionales de eje recto desmontable.',
      recoilWarning: '🛠️ Algunas marcas premium permiten colocar cuchillas de corte liviano de plástico dentadas.'
    },
    'Combustion': {
      range: 'Motores de Combustión Naftera (2T de 26cc a 52cc)',
      maxTanza: 'Pata Ancha: Soporta tanzas de 2.4mm, 3.0mm y hasta ojal doble trenzado.',
      limitExplanation: 'La fuerza se transmite mediante embrague centrífugo mecánico y eje de acero rígido montado sobre rulemanes. El motor puede patinar el embrague si se frena, protegiendo el pistón, pero igual un exceso de peso de tanza cansa y desgasta los resortes del embrague.',
      typicalTools: 'Motoguadañas profesionales mochileras, de manillar abierto tipo asimétrico.',
      recoilWarning: '✅ TOTALMENTE PERMITIDO usar cuchillas desmalezadoras de acero (2, 3 o 4 puntas) y sierras circulares vídia.'
    }
  };

  const selectedTanzaValue = tanzaConfig[selectedThickness] || tanzaConfig['2.0'];
  const selectedPowerValue = powerConfig[selectedPowerSrc] || powerConfig['800W'];

  return (
    <div className="bg-slate-50 border border-slate-250/20 rounded-3xl p-6 md:p-8 flex flex-col gap-8 animate-fade-in">
      
      {/* Title block */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="p-1.5 bg-rose-100 text-rose-800 rounded-lg text-xs font-bold font-mono">
            NUEVA SECCIÓN DE COMPATIBILIDAD
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">| Reemplaza Análisis de Corte Macro</span>
        </div>
        <h4 className="font-sans font-black text-slate-900 text-xl tracking-tight leading-tight">
          La Relación Sagrada: Watts del Motor vs. Espesor de Tanza (mm)
        </h4>
        <p className="text-xs text-slate-550 mt-1.5 max-w-2xl leading-relaxed">
          Ponerle un hilo sobredimensionado a una bordeadora eléctrica es el <strong>camino más rápido a fundirla</strong>. Las tanzas gruesas exigen un torque aerodinámico tremendo que frena el motor de golpe, elevando la temperatura de los bobinados hasta quemarlos.
        </p>
      </div>

      {/* Grid of the interactive matching tools */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Interactive Side: Select Tanza, See recommended Watts */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-black uppercase text-amber-600 tracking-wider flex items-center gap-1">
                <Gauge className="w-3.5 h-3.5 text-amber-500" />
                Herramienta de Diagnóstico 1
              </span>
              <span className="text-xs text-slate-400 font-medium">Por Espesor de Tanza</span>
            </div>

            <h5 className="font-sans font-bold text-slate-900 text-sm mb-3">
              1. Seleccioná el espesor de tanza que querés comprar:
            </h5>

            {/* Thickness selector buttons */}
            <div className="grid grid-cols-5 gap-1.5 mb-5">
              {(Object.keys(tanzaConfig)).map((tk) => (
                <button
                  key={tk}
                  onClick={() => setSelectedThickness(tk)}
                  type="button"
                  className={`py-2 text-center rounded-xl font-mono text-xs font-bold transition-all border cursor-pointer
                    ${selectedThickness === tk 
                      ? 'bg-rose-600 text-white border-rose-700 shadow-xs scale-105' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                >
                  {tk} mm
                </button>
              ))}
            </div>

            {/* Target Display Results */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 space-y-3.5">
              <div className="flex justify-between items-center text-xs border-b border-slate-200/70 pb-2">
                <span className="text-slate-450 font-bold">Espesor Elegido:</span>
                <span className="font-mono font-black text-rose-600 text-sm">{selectedTanzaValue.thickness}</span>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Potencia Eléctrica Requerida:</span>
                <p className="text-sm font-bold text-slate-900 mt-0.5 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-600 inline-block" />
                  {selectedTanzaValue.recommendedWatts}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Potencia Naftera Equivalente:</span>
                <p className="text-sm font-medium text-slate-800 mt-0.5">{selectedTanzaValue.recommendedCC}</p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Tipo de Máquina Ideal:</span>
                <p className="text-xs text-slate-700 font-semibold bg-white p-2 rounded border border-slate-100 mt-1">
                  {selectedTanzaValue.toolType}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Mejor uso en el pasto:</span>
                <p className="text-xs text-slate-650 leading-relaxed mt-0.5">{selectedTanzaValue.idealFor}</p>
              </div>
            </div>
          </div>

          {/* Danger rating badge with explain text */}
          <div className="mt-5 pt-4 border-t border-slate-100">
            <div className="flex items-center justify-between mb-2">
              <span className="text-[10px] text-slate-450 font-mono uppercase tracking-wider font-bold">Riesgo de Recalentamiento:</span>
              <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase border
                ${selectedTanzaValue.dangerLevel === 'Bajo' 
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200' 
                  : selectedTanzaValue.dangerLevel === 'Moderado'
                  ? 'bg-amber-50 text-amber-700 border-amber-200 animate-pulse'
                  : 'bg-rose-50 text-rose-700 border-rose-200 animate-bounce'
                }`}
              >
                ⚠️ {selectedTanzaValue.dangerLevel}
              </span>
            </div>
            <p className="text-xs text-slate-600 bg-amber-50/50 p-2.5 rounded-lg border border-amber-100/30 leading-relaxed">
              {selectedTanzaValue.dangerText}
            </p>
          </div>
        </div>

        {/* Right Interactive Side: Select your actual motor Power, see limits */}
        <div className="bg-white rounded-2xl p-5 border border-slate-200/60 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[11px] font-mono font-black uppercase text-rose-600 tracking-wider flex items-center gap-1">
                <Cpu className="w-3.5 h-3.5 text-rose-500" />
                Herramienta de Diagnóstico 2
              </span>
              <span className="text-xs text-slate-400 font-medium">Por Potencia de tu Máquina</span>
            </div>

            <h5 className="font-sans font-bold text-slate-900 text-sm mb-3">
              2. ¿Qué potencia de motor tiene tu máquina actual?
            </h5>

            {/* Power selector buttons */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {(Object.keys(powerConfig)).map((pwr) => (
                <button
                  key={pwr}
                  onClick={() => setSelectedPowerSrc(pwr)}
                  type="button"
                  className={`py-1.5 px-3 rounded-xl font-bold text-[11px] md:text-xs transition-all border cursor-pointer
                    ${selectedPowerSrc === pwr 
                      ? 'bg-emerald-700 text-white border-emerald-800 shadow-xs scale-102' 
                      : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                >
                  {pwr} {pwr !== 'Combustion' ? 'ecl.' : ''}
                </button>
              ))}
            </div>

            {/* Power Target Display Results */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-150 space-y-3.5">
              <div className="flex justify-between items-center text-xs border-b border-slate-200/70 pb-2">
                <span className="text-slate-450 font-bold">Rango de Potencia:</span>
                <span className="font-mono font-bold text-slate-900">{selectedPowerValue.range}</span>
              </div>

              <div>
                <span className="text-[10px] text-rose-700 bg-rose-50 border border-rose-100 px-2 py-0.5 rounded font-mono font-bold uppercase tracking-wider inline-block">
                  LÍMITE MÁXIMO DE HILO:
                </span>
                <p className="text-sm font-black text-rose-950 mt-1.5">
                  🛑 {selectedPowerValue.maxTanza}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Explicación Física del Límite:</span>
                <p className="text-xs text-slate-650 leading-relaxed mt-1">
                  {selectedPowerValue.limitExplanation}
                </p>
              </div>

              <div>
                <span className="text-[10px] text-slate-400 font-mono block uppercase">Modelos de bordeadoras típicos:</span>
                <p className="text-xs text-slate-700 mt-0.5 font-medium">{selectedPowerValue.typicalTools}</p>
              </div>
            </div>
          </div>

          {/* Recoil Warning/Blade availability badge */}
          <div className="mt-5 pt-4 border-t border-slate-100 bg-amber-500/5 p-3 rounded-xl border border-amber-500/10">
            <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-amber-800 block mb-1">
              ⚠️ Uso de Cosechadoras & Cuchillas de Acero de Taller:
            </span>
            <p className="text-xs text-amber-950 leading-normal font-medium">
              {selectedPowerValue.recoilWarning}
            </p>
          </div>
        </div>

      </div>

      {/* The Crucial Segment: When to "Leap" to a Desbrozadora (Brushcutter) */}
      <div className="bg-emerald-950 text-white rounded-2xl p-6 border border-emerald-900 relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-2">
            <span className="bg-amber-400 text-slate-950 text-xs font-black px-3 py-1 rounded-full border border-amber-300 font-mono">
              ⚠️ GUÍA DE DECISIÓN CRÍTICA
            </span>
            <h5 className="font-sans font-black text-white text-md sm:text-lg">
              ¿Cuándo es necesario saltar de Bordeadora a una Desbrozadora?
            </h5>
          </div>

          <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed max-w-4xl">
            La <strong>Bordeadora Eléctrica</strong> es una máquina de retoques, diseñada solo para perfeccionar los cortes donde la cortadora rotativa de 4 ruedas no llega (cantos de paredes, contornos de troncos y canteros). No está diseñada para "cortar el pasto de todo el lote completo". Si le metés un trabajo duro para el cual no da abasto, la vas a derretir en semanas.
          </p>

          {/* Table comparison cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-2">
            
            <div className="bg-emerald-900/40 border border-emerald-800/40 p-4 rounded-xl">
              <span className="text-amber-300 font-bold text-xs uppercase tracking-wider font-mono">Bordeadora Eléctrica Común</span>
              <ul className="space-y-2 text-xs text-emerald-100 mt-3 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0">✕</span>
                  <span><strong>Eje interno libre/flexible:</strong> Una tripa de acero delgada que zapatea y se degüella si se traba.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0">✕</span>
                  <span><strong>Cabezal plástico liviano:</strong> Funde el nylon por su propio calentamiento. Relación Watt/Corte escasa para tanza de más de 2mm.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-rose-400 shrink-0">✕</span>
                  <span><strong>Exclusivo tanza fina:</strong> Diseñada para girar a 10.000 RPM sin carga agresiva. Sin embrague de protección.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-900/80 border border-emerald-700/60 p-4 rounded-xl">
              <span className="text-teal-300 font-bold text-xs uppercase tracking-wider font-mono">Desbrozadora Profesional (Motoguadaña)</span>
              <ul className="space-y-2 text-xs text-emerald-100 mt-3 font-medium">
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <span><strong>Transmisión Cardánica Rígida:</strong> Barra sólida de acero de alta torsión con caja reductora y engranajes cónicos templados.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <span><strong>Embrague Centrífugo:</strong> El motor acelera pero el cabezal patina mecánicamente si la cuchilla choca contra una piedra gruesa. Evita la rotura del motor.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-emerald-400 shrink-0">✓</span>
                  <span><strong>Apto Tanza Gruesa y Cuchillas de Acero:</strong> Corta troncos, yuyos leñosos compactos, rastrojos duros, paja brava brava de lagunas, sin titubear.</span>
                </li>
              </ul>
            </div>

          </div>

          <div className="bg-amber-400 text-emerald-950 p-4 rounded-xl mt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border border-amber-300">
            <div className="space-y-1">
              <p className="font-extrabold text-xs sm:text-sm">
                📌 La Regla de Oro Práctica de Taller de Eduardo:
              </p>
              <p className="text-[11px] sm:text-xs leading-relaxed font-semibold">
                ¿Tu patio/terreno tiene malezas gruesas de más de 30 cm de alto o una superficie mayor de 150m²? <br />
                <strong>Dejá de renegar:</strong> No queme más bordeadoras eléctricas. Saltá a una desbrozadora a nafta de por lo menos 33cc o 43cc. Va a ser el mejor gasto que hagas para cuidar tu espalda y tu bolsillo del service oficial.
              </p>
            </div>
            <div className="shrink-0 font-black text-2xl hidden md:block">
              🚨⚙️
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
