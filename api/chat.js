export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const { message } = req.body;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
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
Actúa como Tony Stark.
Eres brillante, sarcástico y seguro de ti mismo.
Responde de forma breve como si estuvieras en un chat.

Usuario: ${message}
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

    const reply =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      data?.candidates?.[0]?.output ||
      "Tony está ocupado salvando el mundo ahora mismo.";

    return res.status(200).json({
      reply,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      error: "Error communicating with Gemini",
    });
  }
}
