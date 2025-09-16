// api/translate.js — Vercel Serverless Function (Node 18+)

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. POST only." });
  }

  // Extract data from request body
  const { text, theme, court, system } = req.body || {};
  
  // Validate required fields
  if (!text || !theme || !court) {
    return res.status(400).json({ 
      error: "Missing required fields", 
      required: ["text", "theme", "court"],
      received: { text: !!text, theme: !!theme, court: !!court }
    });
  }

  // Check for OpenAI API key
  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY environment variable not set" });
  }

  try {
    // Create the user prompt
    const userPrompt = `Transform this text: "${text}"
Style: ${theme}
Court: ${court}`;

    // Make request to OpenAI Chat Completions API
    const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { 
            role: "system", 
            content: system || getDefaultSystemPrompt() 
          },
          { 
            role: "user", 
            content: userPrompt 
          }
        ],
        max_tokens: 400,
        temperature: theme === "riddle" ? 0.7 : 0.6
      })
    });

    // Check if OpenAI request was successful
    if (!openaiResponse.ok) {
      const errorText = await openaiResponse.text().catch(() => "Unknown error");
      console.error("OpenAI API Error:", openaiResponse.status, errorText);
      return res.status(502).json({ 
        error: "OpenAI API error", 
        status: openaiResponse.status,
        detail: errorText.substring(0, 200) // Limit error message length
      });
    }

    // Parse OpenAI response
    const data = await openaiResponse.json();
    
    // Extract the generated text
    const result = data.choices?.[0]?.message?.content;
    
    if (!result) {
      console.error("No content in OpenAI response:", data);
      return res.status(502).json({ 
        error: "No content received from OpenAI",
        response: data
      });
    }

    // Return successful response
    return res.status(200).json({ 
      result: result.trim(),
      usage: data.usage // Include usage stats if available
    });

  } catch (error) {
    console.error("Server error:", error);
    return res.status(500).json({ 
      error: "Internal server error", 
      detail: error.message 
    });
  }
}

function getDefaultSystemPrompt() {
  return [
    "You are the Dialogue Translator for a D&D Feywild tool used by a Game Master.",
    "Your job is to REWRITE the user's text into a chosen style while preserving meaning and facts.",
    "Do not add lore, names, or invented details. Keep intent intact.",
    "",
    "STYLES:",
    "- rhyming: Create readable couplets/tercets with light, consistent rhythm; avoid sing-song and forced rhyme.",
    "- riddle: Create a concise, clever, solvable riddle encoding the meaning; avoid obscure references.",
    "",
    "COURT TONE:",
    "- seelie: Use luminous, hopeful, courtly language; think sunlit, dew, glade, gold; gentle wonder.",
    "- unseelie: Use eerie, thorned, moongloom language; think iron, shadow-play, cold starlight; elegant menace.",
    "",
    "LENGTH: Stay within ±20% of the original text unless shorter improves clarity.",
    "OUTPUT: Return ONLY the rewritten text. No preface, no analysis, no extra lines."
  ].join("\n");
}
