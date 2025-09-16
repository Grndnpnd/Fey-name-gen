// api/translate.js — Vercel Serverless Function (Node 18+)

  export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "POST only" });
  }

  const { text, theme, court, system } = req.body || {};
  if (!text || !theme || !court) {
    return res.status(400).json({ error: "Missing text/theme/court" });
  }

  const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
  if (!OPENAI_API_KEY) {
    return res.status(500).json({ error: "OPENAI_API_KEY not set" });
  }

  try {
    // OpenAI Responses API
    const r = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: system || defaultSystem() },
      { role: "user", content: JSON.stringify({ text, theme, court }) }
    ],
    max_tokens: 400,
    temperature: theme === "riddle" ? 0.7 : 0.6
  })
    });

    if (!r.ok) {
      const detail = await r.text().catch(() => "");
      return res.status(502).json({ error: "OpenAI error", detail });
    }

    const data = await r.json();
    const out =
      data.output_text ||
      data.output?.[0]?.content?.[0]?.text ||
      data.choices?.[0]?.message?.content ||
      "";

    return res.status(200).json({ result: String(out || "").trim() });
  } catch (e) {
    return res.status(502).json({ error: "Proxy error", detail: String(e) });
  }
}

function defaultSystem() {
  return [
    "You are the Dialogue Translator for a D&D Feywild tool used by a Game Master.",
    "Your job is to REWRITE the user's text into a chosen style while preserving meaning and facts.",
    "Do not add lore, names, or invented details. Keep intent intact.",
    "",
    "STYLES:",
    "- theme='rhyming': readable couplets/tercets with light, consistent rhythm; avoid sing-song and forced rhyme.",
    "- theme='riddle': concise, clever, solvable riddle encoding the meaning; avoid obscure references.",
    "",
    "COURT TONE:",
    "- court='Seelie': luminous, hopeful, courtly; sunlit, dew, glade, gold; gentle wonder.",
    "- court='Unseelie': eerie, thorned, moongloom; iron, shadow-play, cold starlight; elegant menace.",
    "",
    "LENGTH: stay within ±20% of the original text unless shorter improves clarity.",
    "OUTPUT: return ONLY the rewritten text. No preface, no analysis, no extra lines."
  ].join("\n");
}
