// dialogueTranslator.js — GPT-only via /api/translate (Vercel function)

// --- IDs used in your HTML (adjust if yours differ) ---
const INPUT_ID   = "translator-input";   // textarea/input for source text
const OUTPUT_ID  = "translator-output";  // textarea for result
const BUTTON_ID  = "translate-dialogue";      // button that triggers translation

// Build the system instructions; you can keep it here OR let the server use its defaultSystem()
function buildSystemInstructions() {
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

// Read theme/court from your existing radio inputs
function getThemeAndCourtFromUI() {
  const theme = document.querySelector('input[name="theme"]:checked')?.value || "rhyming";  // "rhyming" | "riddle"
  const court = document.querySelector('input[name="court"]:checked')?.value || "Seelie";   // "Seelie" | "Unseelie"
  return { theme, court };
}

// Call the secure serverless route (keeps your key off the client)
async function gptRewrite(text, theme, court) {
  const system = buildSystemInstructions();
  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, theme, court, system })
  });

  if (!res.ok) {
    const msg = await res.text().catch(() => "");
    throw new Error(`Translator API ${res.status}: ${msg.slice(0, 300)}`);
  }
  const data = await res.json();
  if (!data?.result) throw new Error("Translator API returned no result");
  return String(data.result).trim();
}

// Little UI helpers (safe if elements don’t exist)
function setLoading(b) {
  const btn = document.getElementById(BUTTON_ID);
  if (btn) {
    btn.disabled = !!b;
    btn.textContent = b ? "Translating…" : "Translate";
  }
}
function getInput() {
  const el = document.getElementById(INPUT_ID);
  return (el?.value || "").trim();
}
function setOutput(text) {
  const el = document.getElementById(OUTPUT_ID);
  if (el) el.value = text;
}

// Main handler (attach this to your existing button or call from main.js)
async function translateHandler() {
  const text = getInput();
  if (!text) return;

  const { theme, court } = getThemeAndCourtFromUI();
  setLoading(true);

  try {
    const out = await gptRewrite(text, theme, court);
    setOutput(out);
  } catch (err) {
    console.error("Dialogue translation failed:", err);
    setOutput("[Translation error — check server logs / API key.]");
  } finally {
    setLoading(false);
  }
}

// Expose globally if you wire it from inline HTML or other scripts
window.translateHandler = translateHandler;

// Auto-wire button if present
(function attach() {
  const btn = document.getElementById(BUTTON_ID);
  if (btn && !btn.dataset.bound) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      translateHandler();
    });
    btn.dataset.bound = "1";
  }
})();
