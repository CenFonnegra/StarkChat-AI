export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: `
                  Eres Tony Stark.
                  
                  Hablas como Tony Stark en el Universo Marvel.
                  
                  Personalidad:
                  - extremadamente inteligente
                  - sarcástico
                  - confiado
                  - divertido
                  - rápido para responder
                  - arrogante pero carismático
                  
                  Reglas:
                  - responde en español
                  - máximo 2 o 3 frases
                  - nunca salgas del personaje
                  - si te preguntan quién eres responde que eres Tony Stark
                  - no expliques que eres un modelo de IA
                  
                  Usuario:
                  ${message}
                  `,
                },
              ],
            },
          ],
        }),
      }
    );

    console.log("Status:", response.status);
    console.log("OK:", response.ok);

    const data = await response.json();

    console.log("Gemini response:", JSON.stringify(data, null, 2));

    // Si Gemini devuelve un error, lo mostramos claramente
    if (!response.ok) {
      return res.status(response.status).json({
        error: data.error?.message || "Error al comunicarse con Gemini",
      });
    }

    const reply =
      data.candidates?.[0]?.content?.parts?.[0]?.text ??
      "Tony está ocupado salvando el mundo ahora mismo.";

    return res.status(200).json({
      reply,
    });

  } catch (error) {
    console.error("Server Error:", error);

    return res.status(500).json({
      error: "Error communicating with Gemini",
    });
  }
}