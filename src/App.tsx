import { useState } from 'react';
import Header from './components/Header';
import BlockBordeadoras from './components/BlockBordeadoras';
import BlockMotosierras from './components/BlockMotosierras';
import BlockCadenas from './components/BlockCadenas';
import BlockCortacesped from './components/BlockCortacesped';
import BlockTelaAntihelada from './components/BlockTelaAntihelada';
import ExpertChat from './components/ExpertChat';
import { 
  Scissors, 
  Flame, 
  Settings, 
  Workflow, 
  HelpCircle,
  Eye, 
  Compass, 
  Activity, 
  ShieldAlert, 
  Sparkles, 
  MessageSquare,
  Wrench,
  Snowflake,
  Gauge
} from 'lucide-react';

type TabId = 'bordeadoras' | 'motosierras' | 'cadenas' | 'cortacesped' | 'tela-antihelada';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('bordeadoras');

  const tabsConfig = [
    {
      id: 'bordeadoras' as const,
      label: '1. Bordeadoras',
      short: 'Bordeadoras',
      desc: 'Tanzas cortadas & carretel',
      icon: Scissors,
      color: 'bg-emerald-500/10 text-emerald-750 dark:text-emerald-800 border-emerald-200',
      activeStyle: 'border-emerald-600 bg-emerald-50 text-emerald-950 ring-2 ring-emerald-500/20 font-bold'
    },
    {
      id: 'motosierras' as const,
      label: '2. Motosierras',
      short: 'Motosierras',
      desc: 'Arranque en frío & mezcla',
      icon: Flame,
      color: 'bg-amber-500/10 text-amber-750 dark:text-amber-800 border-amber-200',
      activeStyle: 'border-amber-500 bg-amber-50 text-amber-950 ring-2 ring-amber-505/20 font-bold'
    },
    {
      id: 'cadenas' as const,
      label: '3. Cadenas 101',
      short: 'Cadenas',
      desc: 'Medidas de repuestos exactos',
      icon: Settings,
      color: 'bg-sky-500/10 text-sky-750 dark:text-sky-800 border-sky-205',
      activeStyle: 'border-sky-500 bg-sky-50 text-sky-950 ring-2 ring-sky-505/20 font-bold'
    },
    {
      id: 'cortacesped' as const,
      label: '4. Cortacésped 4T',
      short: 'Nafteras',
      desc: 'Varillas, pendientes & aceites',
      icon: Gauge,
      color: 'bg-lime-500/10 text-lime-750 dark:text-lime-800 border-lime-205',
      activeStyle: 'border-lime-500 bg-lime-50 text-lime-950 ring-2 ring-lime-505/20 font-bold'
    },
    {
      id: 'tela-antihelada' as const,
      label: '5. Tela Antihelada',
      short: 'Antihelada',
      desc: 'Cuidado invernal vs nylon',
      icon: Snowflake,
      color: 'bg-indigo-500/10 text-indigo-750 dark:text-indigo-800 border-indigo-205',
      activeStyle: 'border-indigo-600 bg-indigo-50/50 text-indigo-950 ring-2 ring-indigo-505/20 font-bold'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-8">
        
        {/* Main Application Header */}
        <Header />

        {/* Dashboard Grid System */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Classification Navigation & Active Panel Content (Col span 8) */}
          <main className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Classifications Menu Tab-Bar */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between">
                <h2 className="font-sans font-black text-slate-900 text-lg sm:text-xl tracking-tight flex items-center gap-2">
                  <span className="w-2.5 h-5 rounded-full bg-emerald-600" />
                  Módulos Clasificados
                </h2>
                <span className="text-xs text-slate-400 font-mono hidden sm:block">
                  Seleccioná una sección para abrir el manual de solución rápida
                </span>
              </div>

              {/* Grid of beautiful visual tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                {tabsConfig.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      type="button"
                      className={`text-left p-3 rounded-2xl border transition-all duration-150 cursor-pointer flex flex-col gap-2 group relative overflow-hidden
                        ${isActive 
                          ? tab.activeStyle 
                          : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className={`p-1.5 rounded-lg ${tab.color} group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        )}
                      </div>
                      <div>
                        <span className="font-bold text-xs sm:text-sm text-slate-800 block leading-tight tracking-tight">
                          <span className="hidden md:inline">{tab.label}</span>
                          <span className="md:hidden">{tab.short}</span>
                        </span>
                        <span className="text-[9px] text-slate-400 font-medium block mt-0.5 leading-tight group-hover:text-slate-500 transition-colors hidden sm:block truncate">
                          {tab.desc}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Render Active Block View */}
            <div className="transition-all duration-200">
              {activeTab === 'bordeadoras' && <BlockBordeadoras />}
              {activeTab === 'motosierras' && <BlockMotosierras />}
              {activeTab === 'cadenas' && <BlockCadenas />}
              {activeTab === 'cortacesped' && <BlockCortacesped />}
              {activeTab === 'tela-antihelada' && <BlockTelaAntihelada />}
            </div>

          </main>

          {/* Right Column: AI Live technical assistant (Col span 4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-8 flex flex-col gap-6">
            
            {/* Sidebar expert AI assistant widget */}
            <div className="bg-white rounded-3xl border border-slate-150 p-6 flex flex-col gap-5 shadow-xs relative overflow-hidden">
              <div className="absolute right-0 top-0 w-24 h-24 bg-lime-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-lime-600 bg-lime-50 px-2.5 py-0.5 rounded-full border border-lime-100">
                  Asesor de Taller con IA
                </span>
                <h3 className="font-sans font-black text-slate-900 text-xl tracking-tight mt-2.5 flex items-center gap-1.5">
                  <Wrench className="w-4.5 h-4.5 text-lime-600 shrink-0" />
                  Preguntale a Eduardo
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  ¿Buscás una medida rebelde o tenés dudas de mezcla naftera? Eduardo conoce los 5 bloques del manual a la perfección.
                </p>
              </div>

              {/* The live chat container integration */}
              <div className="border border-slate-100 rounded-2xl overflow-hidden bg-slate-50">
                <ExpertChat />
              </div>

              {/* Context label */}
              <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[10px] font-mono text-slate-400 leading-normal">
                📍 <strong>Auto-Sintonía activa:</strong> Eduardo sabe que estás leyendo la pestaña <strong>{activeTab.toUpperCase()}</strong> y te adaptará las mañas de ferretero del bloque correspondiente.
              </div>
            </div>

            {/* Neighborhood Safety Alert footer */}
            <div className="bg-amber-50 rounded-2xl p-5 border border-amber-200/60 text-xs text-amber-950 leading-relaxed shadow-xs relative overflow-hidden">
              <div className="absolute right-0 bottom-0 w-16 h-16 bg-amber-200/20 rounded-full blur-md pointer-events-none" />
              
              <div className="flex gap-3 items-start">
                <ShieldAlert className="w-5.5 h-5.5 text-amber-600 shrink-0 mt-0.5" />
                <div>
                  <h5 className="font-extrabold text-slate-900 text-xs mb-1">
                    Precaución en el Taller
                  </h5>
                  <p className="text-[11px] text-slate-650 leading-relaxed">
                    Antes de meter mano a bujías, ajustar tornillos de carburador, o desenredar tanzas calientes, <strong>desconectá siempre la energía o el cable de bobina</strong> de tu máquina. ¡Estar seguros es la regla número uno!
                  </p>
                </div>
              </div>
            </div>
          </aside>

        </div>

        {/* Footer info brand */}
        <footer className="mt-12 pt-6 border-t border-slate-200 text-center text-xs text-slate-400 font-mono pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Manual Técnico de Maquinarias, Tanzas & Jardín de Barrio.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-600 transition-colors">Norma de Seguridad IRAM ISO</span>
            <span>•</span>
            <span className="text-emerald-700 font-black">Hecho para Hobbistas Reales 🇦🇷</span>
          </div>
        </footer>

      </div>
    </div>
  );
}
