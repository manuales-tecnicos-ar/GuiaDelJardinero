import { useState } from 'react';
import { ShieldCheck, Snowflake, Calculator, HelpCircle, Wind, Sparkles, Leaf, Thermometer, Droplets, Layers, ShoppingCart, ExternalLink } from 'lucide-react';

export default function BlockTelaAntihelada() {
  const [plantType, setPlantType] = useState<'individual' | 'cantero' | 'arbolito'>('individual');
  const [plantCount, setPlantCount] = useState<number>(3);
  const [hedgeLength, setHedgeLength] = useState<number>(5);

  // States for Chip de Corteza Calculator
  const [mulchLength, setMulchLength] = useState<number>(4);
  const [mulchWidth, setMulchWidth] = useState<number>(2);
  const [mulchDepth, setMulchDepth] = useState<number>(5); // depth in cm

  const calculateFabricNeeded = () => {
    if (plantType === 'individual') {
      // average 1.5 meters per medium plant
      return plantCount * 1.8;
    } else if (plantType === 'cantero') {
      // 1.2x length of hedge to wrap and tuck
      return hedgeLength * 1.5;
    } else {
      // arbolito needs 4 meters to wrap main crown
      return plantCount * 4.5;
    }
  };

  const fabricMeters = calculateFabricNeeded();

  // Calculate chip/mulch volume
  const mulchArea = mulchLength * mulchWidth;
  // Volume in cubic meters = Area (m2) * Depth (m)
  const cubicMeters = mulchArea * (mulchDepth / 100);
  // 1 m3 = 1000 Liters
  const litersNeeded = cubicMeters * 1000;
  // 50L bags
  const typicalBags = Math.ceil(litersNeeded / 50);

  return (
    <div className="flex flex-col gap-8">
      
      {/* Primary educational card */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-sky-150 bg-sky-100 text-sky-850 text-xs font-semibold px-3 py-1 rounded-full border border-sky-205/50 font-mono font-bold text-sky-800">
            Bloque 5: Protección de Invierno
          </span>
          <span className="bg-rose-100 border border-rose-200 text-rose-800 text-xs font-semibold px-3 py-1 rounded-full font-mono">
            Tela Antihelada vs Nylon
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl md:text-3xl tracking-tight leading-tight mb-5">
          Cómo cuidar las plantas de las heladas (y por qué no tenés que usar bolsas de consorcio)
        </h3>

        <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-medium text-slate-800 text-base">
            Llegan las primeras heladas fuertes de mayo y junio, y la reacción que tenemos todos es tapar las plantas con nylon negro o bolsas de consorcio. <strong>¡Error grosero!</strong> El nylon transpira a la noche, esa humedad se congela, y le terminás quemando las hojas a la planta peor que si no le pusieras nada.
          </p>

          {/* Contrast design cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            
            {/* The wrong way */}
            <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl">
              <span className="text-xl">❌ EL GRAVE ERROR:</span>
              <h4 className="font-bold text-rose-950 text-sm mt-3 mb-1.5">
                Nylon Negro / Bolsa de Consorcio
              </h4>
              <p className="text-xs text-rose-900 leading-relaxed">
                El plástico no tiene poros respiratorios. Atrapa la condensación de la evaporación del suelo húmedo durante el frío extremo de la madrugada. Esa humedad retenida en las hojas se congela a cero grados, creando cristales de hielo que queman de muerte celular el follaje tierno de tus plantas.
              </p>
            </div>

            {/* The correct way */}
            <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl">
              <span className="text-xl">☀️ LA SOLUCIÓN TÉCNICA:</span>
              <h4 className="font-bold text-emerald-950 text-sm mt-3 mb-1.5">
                Tela Antihelada Profesional (Manta)
              </h4>
              <p className="text-xs text-emerald-900 leading-relaxed">
                Es un textil no tejido (Spunbond de polipropileno blanco muy poroso). Permite que la planta respire y absorba la luz solar diurna de domingo, incrementando el microclima interno de la canopia de <strong>4 a 5 grados adicionales</strong>. ¡No tenés que andar sacándola cada mañana!
              </p>
            </div>

          </div>

          <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 mt-6">
            <h4 className="font-sans font-bold text-slate-900 text-md sm:text-lg mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-500 animate-pulse" />
              Beneficios directos e instalación fácil:
            </h4>

            <ul className="space-y-3.5 text-xs sm:text-sm font-sans">
              <li className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Deja que la planta respire y le entra el sol:</strong> No tenés que andar sacándola a la mañana y poniéndola a la noche todo el invierno.
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Deja pasar el agua si llueve:</strong> Mantiene la hidratación superficial sana del sustrato.
                </span>
              </li>
              <li className="flex gap-2.5 items-start">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Fácil de colocar en minutos:</strong> Cortás el pedazo que necesitás con tijera doméstica común, la envolvés cómodamente y le metés unos broches de la ropa comunes o unas piedras abajo para que el viento de ráfaga no se la vuele. Santo remedio.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fabric size calculator */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
        <h4 className="font-sans font-bold text-slate-800 text-base mb-1">
          📏 Calculadora de Tela Antihelada para tu Jardín
        </h4>
        <p className="text-xs text-slate-500 mb-5">
          Calculá instantáneamente cuántos metros lineales de tela antihelada necesitás comprar para tapar tus frutales, canteros o plantas individuales de forma segura.
        </p>

        <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Controls */}
          <div className="space-y-5">
            <div>
              <span className="block text-xs font-mono text-slate-450 uppercase tracking-wider mb-2 font-semibold text-slate-600">Disposición de las Plantas:</span>
              <div className="grid grid-cols-3 gap-2">
                {(['individual', 'cantero', 'arbolito'] as const).map((type) => (
                  <button
                    key={type}
                    onClick={() => setPlantType(type)}
                    className={`py-2 px-3 rounded-xl font-bold text-[10px] md:text-xs capitalize transition-all border cursor-pointer
                      ${plantType === type 
                        ? 'bg-sky-600 border-sky-700 text-white shadow-xs' 
                        : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                      }`}
                  >
                    {type === 'individual' ? '🌾 Macetas' : type === 'cantero' ? '🌿 Cercos' : '🌳 Árboles'}
                  </button>
                ))}
              </div>
            </div>

            {plantType !== 'cantero' ? (
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5 font-semibold text-slate-600">
                  <span>Cant. de Plantas / Macetas:</span>
                  <span className="text-sky-700 font-bold">{plantCount} unidades</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={plantCount}
                  onChange={(e) => setPlantCount(parseInt(e.target.value) || 1)}
                  className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-250 rounded-lg"
                />
              </div>
            ) : (
              <div>
                <div className="flex justify-between text-xs font-mono mb-1.5 font-semibold text-slate-600">
                  <span>Largo del cerco / cantero (Meters):</span>
                  <span className="text-sky-700 font-bold">{hedgeLength} metros</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={hedgeLength}
                  onChange={(e) => setHedgeLength(parseInt(e.target.value) || 1)}
                  className="w-full accent-sky-600 cursor-pointer h-2 bg-slate-250 rounded-lg"
                />
              </div>
            )}
          </div>

          {/* Results outputs */}
          <div className="bg-sky-950 text-white p-5 rounded-2xl border border-sky-900 flex flex-col justify-between self-stretch text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 p-3 opacity-10 font-black text-6xl select-none">❄️</div>
            <div>
              <p className="text-sky-300 text-[10px] font-mono uppercase tracking-wider">CANTIDAD RECOMENDADA A COMPRAR:</p>
              <p className="text-3xl font-mono font-black text-amber-300 my-2">
                {fabricMeters.toFixed(1)} <span className="text-lg text-slate-200">Metros</span>
              </p>
              <p className="text-xs text-sky-200 max-w-xs mx-auto leading-relaxed font-medium">
                Suficiente para cubrir con holgura segura. Las bobinas de ferretería suelen venir de 1.5 a 2 metros de ancho de rollo.
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-sky-900 text-[10px] text-sky-300 font-mono text-left bg-sky-900/30 p-2 rounded-lg">
              📌 <strong>Sugerencia de colocación:</strong> Envolvé la planta sin presionar las ramitas internas, cerrá la funda abajo con broches de madera o piedras del cantero para que la ráfaga de viento no la use como vela náutica.
            </div>
          </div>

        </div>
      </div>

      {/* NEW: Chip de Corteza Decorativo & Mulching Section */}
      <div className="bg-white rounded-3xl p-6 md:p-8 border border-slate-100 shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-amber-100 text-amber-900 text-xs font-semibold px-3 py-1 rounded-full border border-amber-200 font-mono font-bold">
            Mulching Orgánico
          </span>
          <span className="bg-[#efebe9] text-[#5d4037] text-xs font-semibold px-3 py-1 rounded-full border border-[#d7ccc8] font-mono">
            Chip de Corteza de Pino
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl tracking-tight leading-tight mb-4">
          Chip de Corteza de Árbol: El "Abrigo" Secreto de las Raíces
        </h3>
        
        <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
          Mientras la <strong>tela antihelada</strong> protege la copa y las hojas del aire helado y la escarcha, el mulching o acolchado de <strong>chip de corteza de pino</strong> protege el motor vital de la planta: sus raíces. En invierno, un suelo desnudo se enfría hasta congelarse, matando los pelos absorbentes de las plantas medianas y jóvenes.
        </p>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          
          <div className="bg-amber-50/50 border border-amber-100 p-4 rounded-2xl flex flex-col gap-2.5">
            <div className="p-2 bg-amber-100 text-amber-800 rounded-xl w-fit">
              <Thermometer className="w-5 h-5 text-[#8d6e63]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Escudo Térmico</h4>
              <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                Estabiliza la temperatura del suelo. Evita heladas radiculares en invierno y mantiene frescas las raíces en veranos sofocantes.
              </p>
            </div>
          </div>

          <div className="bg-sky-50/50 border border-sky-100 p-4 rounded-2xl flex flex-col gap-2.5">
            <div className="p-2 bg-sky-100 text-sky-800 rounded-xl w-fit">
              <Droplets className="w-5 h-5 text-sky-600" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm font-sans">Retiene la Humedad</h4>
              <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                Reduce la evaporación del agua de riego hasta un 70%. Regás menos y mantenés una humedad constante muy sana.
              </p>
            </div>
          </div>

          <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl flex flex-col gap-2.5">
            <div className="p-2 bg-emerald-100 text-emerald-800 rounded-xl w-fit">
              <Leaf className="w-5 h-5 text-emerald-700" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Frena las Malezas</h4>
              <p className="text-xs text-slate-650 mt-1 leading-relaxed">
                Al bloquear la luz del sol sobre la tierra, inhibe casi por completo la germinación de yuyos invasores sin usar agroquímicos.
              </p>
            </div>
          </div>

          <div className="bg-amber-100/10 border border-[#d7ccc8] p-4 rounded-2xl flex flex-col gap-2.5">
            <div className="p-2 bg-[#efebe9] text-[#5d4037] rounded-xl w-fit">
              <Layers className="w-5 h-5 text-[#5d4037]" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Estética & pH Sano</h4>
              <p className="text-xs text-[#5d4037] mt-1 leading-relaxed">
                Da una terminación estética impecable y prolija al cantero. Al descomponerse lentamente, aporta nutrientes y acidifica levemente el suelo.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Chip Estimator (Mulch Calculator) */}
        <div className="bg-[#efebe9]/40 border border-[#d7ccc8]/40 rounded-2xl p-6">
          <h4 className="font-sans font-bold text-slate-800 text-base mb-1 flex items-center gap-2">
            🪵 Calculadora de Bolsas de Chip de Corteza
          </h4>
          <p className="text-xs text-slate-550 mb-5">
            Ingresá las medidas de tu cantero o el cantero alrededor de tu planta y calculá cuántas bolsas comerciales de chip (comprimido habitual de 50 Litros) necesitás comprar para una cobertura profesional.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Inputs sliders */}
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-slate-700">
                  <span>Largo del Cantero / Superficie:</span>
                  <span className="font-mono text-[#5d4037] font-bold">{mulchLength} metros</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  value={mulchLength}
                  onChange={(e) => setMulchLength(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#8d6e63] cursor-pointer h-2 bg-slate-200 rounded-lg animate-pulse"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-slate-700">
                  <span>Ancho del Cantero:</span>
                  <span className="font-mono text-[#5d4037] font-bold">{mulchWidth} metros</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  value={mulchWidth}
                  onChange={(e) => setMulchWidth(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#8d6e63] cursor-pointer h-2 bg-slate-200 rounded-lg"
                />
              </div>

              <div>
                <div className="flex justify-between text-xs mb-1 font-semibold text-slate-700">
                  <span>Espesor de la Capa Recomendado:</span>
                  <span className="font-mono text-[#5d4037] font-bold">{mulchDepth} cm {mulchDepth === 5 ? '(Óptimo común)' : mulchDepth > 5 ? '(Severo/Especial)' : ' (Delgado)'}</span>
                </div>
                <div className="grid grid-cols-3 gap-1.5 mt-2">
                  {[3, 5, 8].map((depth) => (
                    <button
                      key={depth}
                      type="button"
                      onClick={() => setMulchDepth(depth)}
                      className={`py-1 text-xs font-bold rounded-lg border transition-all cursor-pointer
                        ${mulchDepth === depth 
                          ? 'bg-[#5d4037] text-white border-[#4e342e]' 
                          : 'bg-white hover:bg-slate-100 text-slate-700 border-slate-200'
                        }`}
                    >
                      {depth} cm
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Visual bag calculator output */}
            <div className="bg-[#3e2723] text-[#efebe9] p-5 rounded-2xl border border-[#2d1b18] flex flex-col justify-between self-stretch text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-3 opacity-5 font-black text-6xl select-none">🌲</div>
              
              <div>
                <p className="text-[#d7ccc8] text-[10px] font-mono uppercase tracking-wider">REQUERIMIENTO TOTAL ESTIMADO:</p>
                <div className="my-3">
                  <p className="text-3xl font-mono font-black text-amber-300">
                    {typicalBags} <span className="text-lg text-slate-200">Bolsas</span>
                  </p>
                  <p className="text-[10px] font-mono text-[#d7ccc8] mt-1">
                    Equivale a unos <strong>{litersNeeded.toFixed(0)} Litros</strong> de volumen o <strong>{mulchArea} m²</strong> de superficie.
                  </p>
                </div>
                <p className="text-xs text-[#efebe9]/90 max-w-xs mx-auto leading-relaxed">
                  Cálculo basado en bolsas de sustrato/chip comerciales de <strong>50 Litros estándar argentino</strong>.
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#4e342e] text-[10px] text-[#efebe9]/80 text-left bg-[#2c1b18]/40 p-2 rounded-lg leading-relaxed">
                💡 <strong>Tip Profesional de Eduardo:</strong> Para canteros donde sople mucho viento de ráfaga, elegí siempre el <strong>Chip Entero Mediano/Grande</strong> en vez del mulching de pino molido o resaca fina, ya que el peso del chip entero evita que el viento lo barra por el jardín.
              </div>
            </div>

          </div>
        </div>

      </div>

      {/* MercadoLibre Store Links for Protection & Mulching */}
      <div className="bg-gradient-to-br from-[#fffdeb] via-[#fffde0] to-[#fffbc2]/40 rounded-3xl p-6 border border-amber-250/70 shadow-xs relative overflow-hidden">
        <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-amber-900">
              <ShoppingCart className="w-4 h-4 text-amber-800 animate-pulse" />
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider">¿Dónde comprar protección de confianza?</span>
            </div>
            <h4 className="font-sans font-black text-slate-950 text-base md:text-lg tracking-tight mt-1 flex items-center gap-2">
              🛒 Adquirí tus Productos en MercadoLibre 🇦🇷
            </h4>
            <p className="text-xs text-slate-655 mt-1 max-w-2xl leading-relaxed">
              Resguardá tus plantas de las heladas más crudas con la manta térmica adecuada y dale a tus raíces el abrigo natural que merecen para que tu jardín reluzca impecable:
            </p>
          </div>
          <span className="shrink-0 text-3xl hidden sm:block">❄️🪵</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <a
            href="https://meli.la/33NF8ZZ"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-205 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1 w-3/4">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Protección Aérea</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight pb-0.5">
                Tela Antihelada De Calidad
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Filtro UV & Porosa Respirable
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 font-mono shrink-0">
              Comprar
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-1" />
            </div>
          </a>

          <a
            href="https://meli.la/33wYHXC"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-205 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1 w-3/4">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Abrigo Subterráneo</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight pb-0.5">
                Chip de Corteza de Pino Orgánico
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Acolchado 100% Puro Mulch
              </span>
            </div>
            <div className="flex items-center gap-1 text-xs font-bold text-amber-700 font-mono shrink-0">
              Comprar
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-amber-600 shrink-0 ml-1" />
            </div>
          </a>

        </div>
      </div>

    </div>
  );
}
