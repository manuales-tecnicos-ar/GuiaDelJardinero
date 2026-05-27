import { useState } from 'react';
import { AlertTriangle, Clock, Play, RotateCcw, ShieldCheck, Check, ShoppingCart, ExternalLink } from 'lucide-react';

export default function BlockCortacesped() {
  const [machineHours, setMachineHours] = useState<number>(10);
  const [isZeroKm, setIsZeroKm] = useState<boolean>(false);

  // Calculate status of the oil based on hours
  const getMaxHours = isZeroKm ? 5 : 50;
  const currentUtilizationPct = Math.min((machineHours / getMaxHours) * 100, 100);

  const getOilAdvice = () => {
    if (isZeroKm) {
      if (machineHours >= 5) {
        return {
          status: 'urgente',
          message: '⚠️ ¡URGENTE! Tu máquina es cero kilómetro y ya cumplió las primeras 5 horas de ablande. Tenés que tirarle ese aceite sucio ya mismo para purgar las virutas de fábrica y llenarla con SAE 30 nuevo.',
          color: 'text-amber-900 bg-amber-50 border-amber-200'
        };
      } else {
        return {
          status: 'ok',
          message: `👍 Buen camino. Te faltan ${5 - machineHours} horas de uso para hacerle el primer cambio de asentamiento reglamentario de ablande.`,
          color: 'text-emerald-900 bg-emerald-50 border-emerald-200'
        };
      }
    } else {
      if (machineHours >= 50) {
        return {
          status: 'urgente',
          message: '⚠️ CAMBIO EXIGIDO. Llegaste o pasaste el límite de las 50 horas de trabajo típicas de temporada. Se recomienda reemplazar todo el aceite SAE 30 o 15W-40 para que trabaje fría y lubricada.',
          color: 'text-rose-905 bg-rose-50 border-rose-200 text-rose-900'
        };
      } else if (machineHours >= 25) {
        return {
          status: 'advertencia',
          message: `📊 Atención taller. Registrás ${machineHours} horas. Los mecánicos recomiendan cambiar el aceite entre las 25 y 50 horas de uso anuales según la exigencia física del césped duro.`,
          color: 'text-amber-800 bg-amber-50 border-amber-200'
        };
      } else {
        return {
          status: 'ok',
          message: `✅ Aceite saludable. Tenés ${machineHours} horas de uso registradas. Podés seguir cortando tranquilo. Monitoreá el nivel de la varilla antes de cada salida dominical.`,
          color: 'text-emerald-905 bg-emerald-50 border-emerald-205 text-emerald-800'
        };
      }
    }
  };

  const advice = getOilAdvice();

  return (
    <div className="flex flex-col gap-8">
      
      {/* Primary educational cards */}
      <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xs border border-slate-100 relative">
        <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="bg-emerald-100 text-emerald-850 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-200/50 font-mono font-bold">
            Bloque 4: Máquinas Cortacésped 4T
          </span>
          <span className="bg-amber-100 border border-amber-200 text-amber-800 text-xs font-semibold px-3 py-1 rounded-full font-mono">
            Mantenimiento de motores a explosión
          </span>
        </div>

        <h3 className="font-sans font-black text-slate-950 text-2xl md:text-3xl tracking-tight leading-tight mb-5">
          Máquinas a explosión (4T): Cada cuánto cambiarle el aceite al cortacésped
        </h3>

        <div className="text-slate-700 leading-relaxed space-y-4 text-sm sm:text-base">
          <p className="font-medium text-slate-800 text-base">
            Los motores de las máquinas de empujar a nafta son de 4 Tiempos (4T), laburan igual que el motor del auto: la nafta va en el tanque por un lado, y el aceite va abajo en el cárter por el otro.
          </p>

          <div className="bg-slate-50 border border-slate-205/40 rounded-2xl p-6 my-6">
            <h4 className="font-sans font-bold text-slate-900 text-md sm:text-lg mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-650 bg-emerald-600" />
              Mantenimiento básico elemental de jardín:
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Point 1 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] bg-red-100 text-red-800 font-bold px-2.5 py-0.5 rounded-full font-mono">
                    Peligro Latente
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-3 mb-1.5 flex items-center gap-1.5">
                    Revisá la varilla a conciencia
                  </h5>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Antes de darle arranque, sacá la varilla y mirá que tenga aceite. Si cortás el pasto en un terreno con pendiente y el aceite está por la mitad, <strong>la máquina chupa aire y fundís el motor al toque</strong>.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="bg-white p-5 rounded-xl border border-slate-200/50 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5 rounded-full font-mono">
                    Los Intervalos
                  </span>
                  <h5 className="font-bold text-slate-900 text-sm mt-3 mb-1.5">
                    ¿Cuándo se cambia el aceite?
                  </h5>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    Si la máquina es cero kilómetro, el primer cambio hacelo <strong>a las 5 horas</strong> para sacarle la mugre del ablande de metales. Después, cambialo <strong>cada 25 a 50 horas</strong> de uso, o directamente una vez por año antes de comenzar con la primavera fuerte de crecimiento.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Oil Type card */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-50 to-amber-100/50 border border-amber-200 flex gap-4 items-start">
            <span className="text-2xl mt-0.5">🛢️</span>
            <div>
              <p className="text-xs font-mono font-bold uppercase text-amber-800 tracking-wider">
                ¿Qué tipo de aceite lleva exactamente?
              </p>
              <p className="text-xs sm:text-sm text-slate-705 mt-1 font-semibold text-slate-800 leading-relaxed">
                Pedí específico en la ferretería o lubricentro como <strong>Aceite SAE 30</strong> o un <strong>15W-40</strong> apto para motores de jardín de 4 tiempos a explosión. Evitá usar aceites de moto comun (los de moto lubrican embragues húmedos y no sirven para enfriamiento por aire puro de jardín).
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Oil change tracker tool */}
      <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-xs">
        <h4 className="font-sans font-bold text-slate-800 text-base mb-1">
          📊 Calculador Dinámico de Cambio de Aceite 4T
        </h4>
        <p className="text-xs text-slate-500 mb-5">
          Ingresá las horas de uso estimadas de tu motor cortacésped para verificar si requiere service inmediato o si podés cortar tranquilo.
        </p>

        <div className="bg-slate-50 border border-slate-200/50 rounded-2xl p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          
          {/* Slider input */}
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">TIPO DE MÁQUINA:</span>
              <button
                type="button"
                onClick={() => {
                  setIsZeroKm(!isZeroKm);
                  setMachineHours(1);
                }}
                className={`py-1 px-3 rounded-full text-xs font-sans font-bold transition-all border
                  ${isZeroKm 
                    ? 'bg-rose-600 border-rose-700 text-white shadow-xs' 
                    : 'bg-slate-200 border-slate-300 text-slate-700 hover:bg-slate-300'
                  }`}
              >
                {isZeroKm ? '🔥 Cero Kilómetro (0km)' : 'Mantenimiento Regular de Horas'}
              </button>
            </div>

            <div>
              <div className="flex justify-between text-xs font-sans mb-1.5 font-semibold text-slate-700">
                <span>Horas de Uso Acumuladas:</span>
                <span className="text-amber-700 font-mono font-bold text-sm bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {machineHours} {machineHours === 1 ? 'Hora' : 'Horas'}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max={isZeroKm ? "10" : "80"}
                step="1"
                value={machineHours}
                onChange={(e) => setMachineHours(parseInt(e.target.value) || 0)}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                <span>0 hrs</span>
                <span>{isZeroKm ? '5 hrs (Ablande)' : '50 hrs (Interv. Máx)'}</span>
                <span>{isZeroKm ? '10 hrs' : '80 hrs'}</span>
              </div>
            </div>
          </div>

          {/* Gauge display & Advice */}
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex justify-between text-xs text-slate-500 font-mono mb-1">
                <span>Desgaste de Aceite Estimado:</span>
                <span className="font-bold">{currentUtilizationPct.toFixed(0)}%</span>
              </div>
              <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden flex">
                <div 
                  style={{ width: `${currentUtilizationPct}%` }}
                  className={`h-full transition-all duration-300
                    ${currentUtilizationPct > 80 ? 'bg-rose-500' : currentUtilizationPct > 50 ? 'bg-amber-400' : 'bg-emerald-500'}`}
                />
              </div>
            </div>

            <div className={`p-4 rounded-xl border text-xs sm:text-xs leading-relaxed font-sans ${advice.color}`}>
              {advice.message}
            </div>
          </div>

        </div>
      </div>

      {/* MercadoLibre Store Links for Cortacéspedes */}
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
              No dejes que tu cortacésped trabaje con grasa quemada o aceites inadecuados. Te dejamos la opción premium seleccionada para que mantengas tu motor 4T lubricado, frío y protegido todo el año:
            </p>
          </div>
          <span className="shrink-0 text-3xl hidden sm:block">🛢️</span>
        </div>

        <div className="max-w-md">
          <a
            href="https://meli.la/2SieNtN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-4 bg-white/90 hover:bg-white border border-slate-205 hover:border-amber-400 rounded-2xl transition-all shadow-xs hover:shadow-md group cursor-pointer"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-800 transition-colors">Lubricación Superior 4T</span>
              <span className="font-sans font-extrabold text-xs sm:text-sm text-slate-900 leading-tight">
                Aceite SAE 30 Premium
              </span>
              <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded w-fit mt-1">
                Especial para Cortacéspedes & Motores de Jardín
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
