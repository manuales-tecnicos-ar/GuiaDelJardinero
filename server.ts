import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize Gemini SDK with User-Agent header for telemetry
// It will fail safely if GEMINI_API_KEY is missing
const getGeminiClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    console.warn("WARNING: GEMINI_API_KEY environment variable is missing.");
    return null;
  }
  return new GoogleGenAI({
    apiKey: apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      }
    }
  });
};

// API endpoint to handle expert advisor questions specifically about our 5 blocks
app.post("/api/ask-expert", async (req, res) => {
  try {
    const { question, currentSetup } = req.body;
    if (!question) {
      return res.status(400).json({ error: "Por favor, ingresá una consulta para el experto." });
    }

    const ai = getGeminiClient();
    if (!ai) {
      // Return a graceful, detailed local fallback if the API key is missing so the user is never blocked
      return res.json({
        reply: `⚠️ **[Modo de Demostración Local]**

¡Hola, hobbista! Parase que no está cargada tu clave de API de Gemini todavía en la sección Secrets de AI Studio. No pasa nada, acá te doy una ayuda del librito del ferretero del barrio:

*(Preguntaste: "${question}")*

**Resumen rápido de nuestros 5 pilares de taller:**
1. **Bordeadoras & Watts:** No le metas tanza de más espesor del que soportan los Watts de tu motor para no quemarlo por sobreesfuerzo del aire. Bordeadoras hogareñas chicas (300W-500W) bancan hasta 1.5mm; las reforzadas (600W-900W) bancan 1.6mm o 2.0mm estirando poco; para tanza de 2.4mm necesitás más de 1200W-1500W, y si vas a cortar yuyos duros de más de 30cm o lote grande, tenés que saltar a una **Desbrozadora a nafta** con eje rígido y embrague.
2. **Motosierras en frío:** Poné la perilla en "I", tira el cebador, dale 5 bombazos si tiene bombín, y pegale el tirón fuerte. Cuando haga una "tos", **meté el cebador** antes de seguir tirando, o la vas a recontra ahogar. La mezcla 2T lleva aceite semisintético bueno (relación 1 en 40).
3. **Cadenas de Motosierra:** Para no clavarte al comprar, contá los **eslabones internos de arrastre** estirados en la mesa (ej: 52, 56) y fijate el paso (ej: 3/8" LP o .325") y grosor de patita (ej: 1.1 o 1.3 mm).
4. **Cortacéspedes 4T:** Controlá la varilla de nivel de aceite antes de arrancar. El aceite se cambia cada **25 a 50 horas de uso** (o una vez al año antes de primavera). Usa aceite SAE 30 o 15W-40 de buena marca.
5. **Tela Antihelada & Mulch de Chip:** ¡Nunca le pongas bolsas de consorcio o nylon! Transpira de noche y quema la copa. Usa **tela antihelada porosa** e instalá **chip de corteza de pino de 5cm** en la tierra: es el abrigo de las raíces que evita que el suelo helado mate la planta por abajo, reteniendo humedad y frenando yuyos sin veneno.

*Para interactuar de forma ilimitada con inteligencia artificial avanzada en tiempo real, configurá tu clave GEMINI_API_KEY.*`
      });
    }

    // Comprehensive expert system instructions aligning precisely with the user's slang and content
    const systemPrompt = `Eres don Eduardo, un sabio ferretero y técnico de jardín jubilado que conoce todos los trucos de taller en Argentina (Río de la Plata). Tu lenguaje es directo, sabio, rústico pero técnico, repleto de localismos sanos ("tanza", "yuyos", "clavar", "ahogar una máquina", "soga", "bolsa de consorcio"). 

Tenés un conocimiento absoluto sobre estos 5 temas específicos y debés responder consultas sobre ellos usando las verdades prácticas del manual del hobbista:

1. BORDEADORAS: El espesor versus Watts del motor. Explicar que usar tanza muy gruesa en un motor chico lo frena por resistencia aerodinámica, no ventila y quema el inducido/bobinado (300W-500W banca hasta 1.5mm de tanza, 600W-900W banca hasta 1.6mm o 2.0mm cuidando el largo de la colita, y 2.4mm requiere más de 1200W o motoguadaña). Explicar cuándo es obligatorio saltar a Desbrozadora profesional a nafta (si tenés malezas duras de más de 30cm, superficie mayor de 100-150m², o si querés usar cuchillas de acero desmalezadoras, ya que las desbrozadoras traen eje rígido de acero con caja de engranajes abajo y embrague para proteger la máquina, mientras que las bordeadoras tienen eje flexible de alambre que se corta por torsión). Evitar que la tanza se derrita adentro por tensión o soga apretada. Enroscar según la flecha del carretel. Puntos fuertes del paso a paso técnico.
2. MOTOSIERRAS EN FRÍO: Paso a paso para no ahogarla. Contacto en "I", tirar cebador al tope, 5 o 6 bombazos si hay burbuja transparente, tirar fuerte de la soga hasta que "tosa" (primer amague), apagar cebador inmediatamente, volver a tirar y arranca de una. El gatillazo de aceleración para regular. Diferencia entre mezcla 2T (nafta súper + semisintético de calidad, mezcla 1 en 40) y lubricante de cadena (aceite específico de cadena, ¡nunca aceite negro de cárter usado que arruina la espada y tapa la bomba!).
3. CADENAS DE MOTOSIERRA: Explicar cómo medir el Paso (3/8" LP o .325"), el Espesor/canaleta (1.1mm o 1.3mm) y contar los eslabones ("patitas") de arrastre estiradas en la mesa para comprar el repuesto de cadena exacto en internet.
4. CORTACÉSPED 4 TIEMPOS: Revisar nivel de varilla antes de cortar en pendiente. El peligro catastrófico de fundir el motor por falta de lubricación lateral. Cambiar el primer aceite de ablande a las 5 horas de uso cero kilómetro, luego cada 25 o 50 horas o anualmente antes de la primavera. Usar aceite SAE 30 o un buen 15W-40 multigrado para parque.
5. TELA ANTIHELADA Y CHIP DE CORTEZA: El grave error de las bolsas de consorcio o nylon negro que acumula transpiración nocturna que se congela y quema las hojas. Beneficio de la tela antihelada blanca, porosa. Sumar mulching o cubierta orgánica con chip de corteza de árbol (pino) con una cobertura ideal de 5 cm: actúa de abrigo térmico de la raíz en invierno, regula y retiene hasta un 70% de la humedad del suelo reduciendo la evaporación, frena casi por completo la germinación de malezas y yuyos indeseados sin usar venenos, y embellece el jardín con un look natural. Recomendar chip mediano/grande entero si hay ráfagas de viento fuertes en la zona para que no se vuele.

Ofrecé respuestas cortas, bien estructuradas, con negritas coloquiales, consejos de abuelo técnico y buena maña. ¡Nada de discursos aburridos o corporativos!`;

    const contextStr = currentSetup 
      ? `\n[Contexto del módulo activo actual: ${currentSetup}]`
      : "";

    const response = await ai.models.generateContent({
      model: "gemini-3.5-flash",
      contents: [
        {
          role: "user",
          parts: [{ text: `Hola Don Eduardo. Pregunta técnica de galpón: ${question}${contextStr}` }]
        }
      ],
      config: {
        systemInstruction: systemPrompt,
        temperature: 0.65,
      }
    });

    res.json({ reply: response.text });
  } catch (error: any) {
    console.error("Gemini API error during consultation:", error);
    res.status(500).json({ error: error.message || "Ocurrió un error al contactar al experto." });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
