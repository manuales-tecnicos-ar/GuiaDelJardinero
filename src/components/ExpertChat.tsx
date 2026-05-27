import React, { useState, useRef, useEffect } from 'react';
import { HelpCircle, Send, Sparkles, MessageSquare, RefreshCw, ChevronRight } from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'expert';
  text: string;
  timestamp: Date;
}

interface SetupContext {
  motorName: string;
  vegName: string;
  recommendedProfile: string;
  recommendedDiameter: number;
}

export default function ExpertChat() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'expert',
      text: `¡Hola! Soy tu **Asesor Técnico de Bordeadoras y Corte**. 

¿Tenés alguna duda sobre qué tanza te conviene comprar, por qué tu máquina calienta o cómo bobinar correctamente el carretel? 

Escribí tu consulta abajo o seleccioná una de las preguntas sugeridas comunes.`,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "¿Por qué la tanza se derrite y se funde sola dentro del cabezal?",
    "¿La tanza cuadrada gasta más combustible o batería que la redonda?",
    "¿Qué tanza recomiendan para una desbrozadora potente de 33cc?",
    "¿Cómo evito que la tanza se corte al chocar contra las paredes de piedra?"
  ];

  // Auto scroll
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = {
      id: `m-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setLoading(true);

    try {
      const response = await fetch('/api/ask-expert', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          question: textToSend,
          // Optional current setup state can be sent
          currentSetup: {
            motorName: "Genérico",
            vegName: "Hierba General",
            recommendedProfile: "Tanza Cuadrada",
            recommendedDiameter: 2.4
          }
        })
      });

      const data = await response.json();
      
      const expertMessage: Message = {
        id: `m-${Date.now()}-expert`,
        sender: 'expert',
        text: data.reply || "Disculpas, no obtuve respuesta del experto. Por favor, reintentá.",
        timestamp: new Date()
      };

      setMessages(prev => [...prev, expertMessage]);
    } catch (error) {
      console.error("Error communicating with chat backend:", error);
      const errorMessage: Message = {
        id: `m-${Date.now()}-error`,
        sender: 'expert',
        text: `⚠️ **Error de Conexión**
No pudimos contactar al servidor técnico. Asegurate de que el servidor esté corriendo de forma óptima en el puerto 3000.`,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false);
    }
  };

  // Convert basic markdown formatting like **bold** to structured HTML blocks safely
  const formatMarkdown = (text: string) => {
    // Escape or split safely by lines to render readable paragraphs and lists
    const lines = text.split('\n');
    return lines.map((line, index) => {
      let content = line;
      
      // Parse strong tags **text** -> <strong>text</strong>
      const boldRegex = /\*\*(.*?)\*\*/g;
      const parsedElements: React.ReactNode[] = [];
      let lastIndex = 0;
      let match;

      while ((match = boldRegex.exec(line)) !== null) {
        // Add text before match
        if (match.index > lastIndex) {
          parsedElements.push(line.substring(lastIndex, match.index));
        }
        // Add bolded text
        parsedElements.push(
          <strong key={`b-${match.index}`} className="font-bold text-slate-900 border-b border-amber-200">
            {match[1]}
          </strong>
        );
        lastIndex = boldRegex.lastIndex;
      }
      
      if (lastIndex < line.length) {
        parsedElements.push(line.substring(lastIndex));
      }

      const isListItem = line.trim().startsWith('-') || line.trim().startsWith('•') || line.trim().startsWith('*');
      const isNumberedItem = /^\d+\./.test(line.trim());

      if (isListItem) {
        // Clean prefix
        const cleanContent = line.replace(/^[-•*]\s*/, '');
        return (
          <li key={index} className="ml-4 list-disc text-xs sm:text-sm text-slate-800 leading-relaxed my-1">
            {parsedElements.length > 0 ? parsedElements : cleanContent}
          </li>
        );
      }

      if (isNumberedItem) {
        return (
          <div key={index} className="ml-2 pl-2 border-l-2 border-amber-400 font-sans text-xs sm:text-sm text-slate-800 leading-relaxed my-2">
            {parsedElements.length > 0 ? parsedElements : line}
          </div>
        );
      }

      if (line.trim() === '') {
        return <div key={index} className="h-2" />;
      }

      return (
        <p key={index} className="text-xs sm:text-sm text-slate-650 leading-relaxed my-1.5">
          {parsedElements.length > 0 ? parsedElements : line}
        </p>
      );
    });
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-md overflow-hidden flex flex-col h-[580px]">
      
      {/* Chat header */}
      <div className="bg-emerald-950 text-white p-5 flex items-center justify-between border-b border-emerald-900 shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-lime-400 text-emerald-950 flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-sans font-bold text-sm tracking-tight text-white flex items-center gap-1.5">
              Asesor Técnico de Jardín
              <span className="w-2 py-0.5 px-2 bg-emerald-800 text-[9px] text-lime-300 font-mono rounded-full uppercase font-bold animate-pulse">
                Online
              </span>
            </h3>
            <p className="text-[11px] text-emerald-300/80">Gemini 3.5 Assistant • Sabiduría de Tanza</p>
          </div>
        </div>
        <button 
          onClick={() => setMessages([
            {
              id: 'welcome',
              sender: 'expert',
              text: "¡Sesión de consulta reiniciada! ¿Qué otra duda técnica tenés?",
              timestamp: new Date()
            }
          ])}
          className="text-emerald-300 hover:text-white p-2 rounded-lg hover:bg-emerald-900/30 transition-colors"
          title="Reiniciar chat"
        >
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50/50">
        {messages.map((m) => {
          const isExpert = m.sender === 'expert';
          return (
            <div 
              key={m.id} 
              className={`flex gap-3 max-w-[85%] ${isExpert ? 'mr-auto' : 'ml-auto flex-row-reverse'}`}
            >
              {isExpert && (
                <div className="w-8 h-8 rounded-lg bg-emerald-800 text-lime-300 flex items-center justify-center font-bold text-xs shrink-0 self-end">
                  AI
                </div>
              )}
              
              <div 
                className={`p-4 rounded-2xl text-slate-800 shadow-inner-sm text-sm border
                  ${isExpert 
                    ? 'bg-white border-slate-100 rounded-bl-xs' 
                    : 'bg-emerald-600 text-white border-emerald-700 rounded-br-xs'
                  }`}
              >
                {isExpert ? (
                  <div className="space-y-1">{formatMarkdown(m.text)}</div>
                ) : (
                  <p className="text-white text-xs sm:text-sm font-medium">{m.text}</p>
                )}
                
                <span className={`text-[9px] block text-right mt-1.5 font-mono
                  ${isExpert ? 'text-slate-400' : 'text-emerald-250/70'}`}>
                  {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </span>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex gap-3 max-w-[80%] mr-auto">
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-lime-300 flex items-center justify-center font-bold text-xs shrink-0 self-end animate-pulse">
              AI
            </div>
            <div className="bg-white border border-slate-100 p-4 rounded-2xl rounded-bl-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
              <span className="text-xs text-slate-400 ml-1.5 font-mono">El experto está analizando tu caso...</span>
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Suggested chips panel (shrink fit) */}
      <div className="p-4 bg-slate-100 border-t border-slate-100 overflow-x-auto whitespace-nowrap shrink-0 flex gap-2 scrollbar-none">
        {suggestedQuestions.map((q, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(q)}
            className="inline-block text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 hover:border-slate-350 text-[11px] px-3 py-1.5 rounded-full font-medium transition-all duration-150 shadow-xs cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input controls form */}
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage(inputText);
        }}
        className="p-4 bg-white border-t border-slate-100 flex gap-3 shrink-0"
      >
        <input 
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Ej: ¿La tanza cuadrada de 2.4mm rompe el cabezal?"
          disabled={loading}
          className="flex-1 bg-slate-50 hover:bg-slate-100/55 focus:bg-white border border-slate-200 focus:border-emerald-600 rounded-xl px-4 text-xs sm:text-sm font-medium outline-hidden transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={!inputText.trim() || loading}
          className="w-11 h-11 shrink-0 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-100 text-white disabled:text-slate-400 flex items-center justify-center transition-all shadow-sm active:scale-95 cursor-pointer"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
}
