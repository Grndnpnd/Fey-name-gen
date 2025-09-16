// dialogueTranslator.js — Frontend for /api/translate (Vercel function)

// Correct IDs from your HTML
const INPUT_ID = "translator-input";
const OUTPUT_ID = "translator-output";
const BUTTON_ID = "translate-dialogue";

// Read theme/court from your actual HTML radio inputs
function getThemeAndCourtFromUI() {
  // These match your HTML input names
  const theme = document.querySelector('input[name="translation-style"]:checked')?.value || "rhyming";
  const court = document.querySelector('input[name="court-style"]:checked')?.value || "seelie";
  return { theme, court };
}

// Call the API endpoint
async function gptRewrite(text, theme, court) {
  const res = await fetch("/api/translate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, theme, court })
  });

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}));
    throw new Error(`API Error ${res.status}: ${errorData.error || 'Unknown error'}`);
  }

  const data = await res.json();
  if (!data?.result) {
    throw new Error("No result received from API");
  }
  
  return String(data.result).trim();
}

// UI Helper functions
function setLoading(isLoading) {
  const btn = document.getElementById(BUTTON_ID);
  if (btn) {
    btn.disabled = isLoading;
    btn.textContent = isLoading ? "Transforming..." : "Transform to Fey Speech";
  }
}

function getInput() {
  const el = document.getElementById(INPUT_ID);
  return (el?.value || "").trim();
}

function setOutput(text) {
  const outputDiv = document.getElementById(OUTPUT_ID);
  if (outputDiv) {
    // Create the result HTML to match your styling
    const resultHTML = `
      <div class="bg-black bg-opacity-50 rounded-lg p-6 border border-green-500 border-opacity-30">
        <div class="generated-dialogue">${text}</div>
      </div>
    `;
    outputDiv.innerHTML = resultHTML;
  }
}

function showError(message) {
  const outputDiv = document.getElementById(OUTPUT_ID);
  if (outputDiv) {
    const errorHTML = `
      <div class="bg-red-900 bg-opacity-50 rounded-lg p-6 border border-red-500 border-opacity-30">
        <p class="text-red-300">${message}</p>
      </div>
    `;
    outputDiv.innerHTML = errorHTML;
  }
}

// Main translation handler
async function translateHandler() {
  const text = getInput();
  
  if (!text) {
    showError("Please enter some text to translate.");
    return;
  }

  const { theme, court } = getThemeAndCourtFromUI();
  console.log("Translating with:", { text, theme, court }); // Debug log
  
  setLoading(true);

  try {
    const result = await gptRewrite(text, theme, court);
    setOutput(result);
  } catch (error) {
    console.error("Translation failed:", error);
    showError(`Translation failed: ${error.message}`);
  } finally {
    setLoading(false);
  }
}

// Initialize the dialogue translator
window.initializeDialogueTranslator = function() {
  const button = document.getElementById(BUTTON_ID);
  
  if (button && !button.dataset.bound) {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      translateHandler();
    });
    button.dataset.bound = "1";
    console.log("Dialogue translator initialized"); // Debug log
  }
};

// Auto-initialize if button exists
document.addEventListener('DOMContentLoaded', function() {
  const button = document.getElementById(BUTTON_ID);
  if (button && !button.dataset.bound) {
    window.initializeDialogueTranslator();
  }
});

// Expose for manual calling
window.translateHandler = translateHandler;
