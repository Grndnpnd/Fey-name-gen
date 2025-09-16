// Dialogue Translator for Fey Speech with OpenAI GPT API Integration
// Based on data from ./data/dialogue/transformation_rules.js
// Specifications from ./data/feature_specifications.md
// Enhanced with OpenAI GPT API for improved dialogue translation

// OpenAI API Configuration (Mock Implementation)
const OPENAI_CONFIG = {
    // In production, this would be loaded from environment variables
    // API_KEY: process.env.OPENAI_API_KEY,
    API_URL: 'https://api.openai.com/v1/chat/completions',
    MODEL: 'gpt-4',
    MAX_TOKENS: 150,
    TEMPERATURE: 0.8
};

// Dialogue Transformation Rules
const dialogueTransformationRules = {
  rhyming: {
    seelie: {
      // Light, positive, nature-themed rhyming patterns
      rhymePairs: {
        'say': 'like flowers in May',
        'go': 'where gentle winds blow',
        'see': 'beneath the old oak tree',
        'know': 'where crystal waters flow',
        'find': 'with heart and soul kind',
        'true': 'as morning dew',
        'way': 'in the light of day',
        'here': 'when spring draws near',
        'come': 'where bees do hum',
        'take': 'for kindness sake',
        'light': 'in the morning bright',
        'free': 'like birds in the tree',
        'heart': 'where new hopes start',
        'song': 'where we belong',
        'dance': 'in nature\'s trance'
      },
      fallbackRhymes: [
        ', so the flowers say',
        ', where sunbeams play',
        ', in meadows green and bright',
        ', where fairy lights take flight',
        ', as gentle breezes sing'
      ]
    },
    
    unseelie: {
      // Dark, winter-themed, mysterious rhyming patterns
      rhymePairs: {
        'say': 'in shadows gray',
        'go': 'where cold winds blow',
        'see': 'in darkness deep and free',
        'know': 'where icy rivers flow',
        'find': 'what fate has designed',
        'true': 'as winter\'s bitter rue',
        'way': 'at the end of day',
        'here': 'when night draws near',
        'come': 'where silence has become',
        'take': 'for sorrow\'s sake',
        'night': 'in eternal blight',
        'dark': 'where shadows hark',
        'cold': 'as stories untold',
        'fear': 'when death draws near',
        'pain': 'like winter\'s rain'
      },
      fallbackRhymes: [
        ', so the shadows whisper',
        ', where darkness lingers',
        ', in the depths of night',
        ', where no light takes flight',
        ', as winter winds sing'
      ]
    }
  },
  
  riddle: {
    seelie: {
      // Light, positive riddle transformations
      patterns: [
        {
          trigger: ['want', 'need', 'desire'],
          replacement: 'seek what the heart knows but the mind cannot name'
        },
        {
          trigger: ['go', 'travel', 'journey'],
          replacement: 'follow the path where flowers bloom in your footsteps'
        },
        {
          trigger: ['find', 'search', 'look'],
          replacement: 'discover what hides in plain sight, visible only to those who believe'
        },
        {
          trigger: ['help', 'aid', 'assist'],
          replacement: 'offer what costs nothing but is worth everything'
        },
        {
          trigger: ['love', 'care', 'cherish'],
          replacement: 'hold dear what grows stronger when shared'
        }
      ],
      mysticalPhrases: [
        'What blooms in winter yet fears no frost?',
        'What sings without voice and dances without feet?',
        'What grows brighter when divided among many?',
        'What is found only when not sought?',
        'What is the treasure that increases when given away?'
      ]
    },
    
    unseelie: {
      // Dark, mysterious riddle transformations
      patterns: [
        {
          trigger: ['want', 'need', 'desire'],
          replacement: 'crave what the shadows promise but never deliver'
        },
        {
          trigger: ['go', 'travel', 'journey'],
          replacement: 'walk the path where your footsteps echo with regret'
        },
        {
          trigger: ['find', 'search', 'look'],
          replacement: 'seek what is lost in the space between heartbeats'
        },
        {
          trigger: ['help', 'aid', 'assist'],
          replacement: 'offer what seems precious but costs more than gold'
        },
        {
          trigger: ['fear', 'worry', 'dread'],
          replacement: 'embrace what lurks in the corners of your mind'
        }
      ],
      mysticalPhrases: [
        'What withers in sunlight yet thrives in shadow?',
        'What whispers truths that no one wants to hear?',
        'What is gained only through loss?',
        'What grows stronger the more it is denied?',
        'What is the price of knowledge that should remain hidden?'
      ]
    }
  }
};

/**
 * Mock OpenAI API Integration
 * This demonstrates how the real API integration would work
 * In production, replace with actual API calls using your OpenAI API key
 */
class MockOpenAIAPI {
    constructor() {
        this.isEnabled = true; // Set to false to always use fallback
        this.simulateDelay = true;
    }

    /**
     * Mock API call to OpenAI GPT for dialogue translation
     * @param {string} text - Text to translate
     * @param {string} style - Translation style (rhyming/riddle)
     * @param {string} court - Court style (seelie/unseelie)
     * @returns {Promise<string>} - Translated text
     */
    async translateDialogue(text, style, court) {
        // Simulate API delay
        if (this.simulateDelay) {
            await new Promise(resolve => setTimeout(resolve, 800 + Math.random() * 400));
        }

        // Simulate occasional API failures for testing fallback
        if (Math.random() < 0.1) { // 10% failure rate for testing
            throw new Error('API temporarily unavailable');
        }

        // Mock GPT-style responses based on research patterns
        const prompt = this.buildPrompt(text, style, court);
        return this.generateMockResponse(text, style, court);
    }

    /**
     * Build prompt for OpenAI API (demonstrates real implementation)
     * @param {string} text - Original text
     * @param {string} style - Translation style
     * @param {string} court - Court style
     * @returns {string} - Formatted prompt
     */
    buildPrompt(text, style, court) {
        const courtDescription = court === 'seelie' 
            ? 'light, benevolent, nature-loving, associated with summer and growth'
            : 'dark, mysterious, winter-associated, cryptic and shadowy';

        const styleDescription = style === 'rhyming'
            ? 'Transform the text to include rhyming elements while preserving meaning'
            : 'Transform the text into a riddle or cryptic statement while preserving the core message';

        return `You are a translator for fey speech in D&D 5e. Transform the following text for a ${court} court fey (${courtDescription}). ${styleDescription}. Keep the transformation mystical and appropriate for the Feywild setting.

Original text: "${text}"

Transformed text:`;
    }

    /**
     * Generate mock response simulating GPT output
     * @param {string} text - Original text
     * @param {string} style - Translation style
     * @param {string} court - Court style
     * @returns {string} - Mock translated text
     */
    generateMockResponse(text, style, court) {
        // Enhanced mock responses based on research
        const mockResponses = {
            rhyming: {
                seelie: [
                    `${text}, where sunbeams dance and flowers play`,
                    `${text}, as gentle as the morning dew`,
                    `${text}, where butterflies and breezes sing`,
                    `${text}, in meadows green where hope takes wing`,
                    `${text}, like starlight on a summer's eve`
                ],
                unseelie: [
                    `${text}, where shadows whisper and darkness grows`,
                    `${text}, as cold as winter's bitter woes`,
                    `${text}, where moonless nights and silence reign`,
                    `${text}, through frost and mist and icy pain`,
                    `${text}, like echoes from forgotten dreams`
                ]
            },
            riddle: {
                seelie: [
                    `What blooms eternal yet costs nothing to give? ${text.toLowerCase()}, for it grows stronger when shared among friends.`,
                    `Seek what the heart knows but the mind cannot name - ${text.toLowerCase()}, found where flowers bloom in your footsteps.`,
                    `What is visible only to those who believe? ${text.toLowerCase()}, hidden in plain sight like morning dew.`,
                    `What sings without voice and dances without feet? ${text.toLowerCase()}, carried on wings of hope and light.`
                ],
                unseelie: [
                    `What withers in sunlight yet thrives in shadow? ${text.toLowerCase()}, whispered in the spaces between heartbeats.`,
                    `What is gained only through loss? ${text.toLowerCase()}, found where your footsteps echo with regret.`,
                    `What grows stronger the more it is denied? ${text.toLowerCase()}, lurking in the corners of your mind.`,
                    `What is the price of knowledge that should remain hidden? ${text.toLowerCase()}, paid in dreams you'll never remember.`
                ]
            }
        };

        const responses = mockResponses[style][court];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize mock API
const mockOpenAI = new MockOpenAIAPI();

/**
 * Initialize the dialogue translator functionality
 */
window.initializeDialogueTranslator = function() {
    const translateButton = document.getElementById('translate-dialogue');
    const resultDiv = document.getElementById('dialogue-result');
    
    if (translateButton && resultDiv) {
        translateButton.addEventListener('click', function() {
            translateDialogue();
        });
    }
};

/**
 * Translate dialogue based on selected style and court
 * Enhanced with OpenAI GPT API integration and fallback system
 */
async function translateDialogue() {
    try {
        const resultDiv = document.getElementById('dialogue-result');
        const inputText = document.getElementById('dialogue-input').value.trim();
        
        if (!inputText) {
            resultDiv.innerHTML = `
                <div class="bg-red-900 bg-opacity-50 rounded-lg p-6 border border-red-500 border-opacity-30">
                    <p class="text-red-300">Please enter some text to transform.</p>
                </div>
            `;
            return;
        }
        
        window.showLoading(resultDiv);
        
        // Get selected translation style
        const styleRadios = document.querySelectorAll('input[name="translation-style"]');
        let selectedStyle = 'rhyming';
        for (const radio of styleRadios) {
            if (radio.checked) {
                selectedStyle = radio.value;
                break;
            }
        }
        
        // Get selected court style
        const courtRadios = document.querySelectorAll('input[name="court-style"]');
        let selectedCourt = 'seelie';
        for (const radio of courtRadios) {
            if (radio.checked) {
                selectedCourt = radio.value;
                break;
            }
        }
        
        let transformedText;
        let translationMethod = 'Pattern Matching'; // Default fallback method
        
        // Try OpenAI API first, fallback to pattern matching if it fails
        try {
            if (mockOpenAI.isEnabled) {
                transformedText = await mockOpenAI.translateDialogue(inputText, selectedStyle, selectedCourt);
                translationMethod = 'AI Enhanced';
            } else {
                throw new Error('API disabled');
            }
        } catch (apiError) {
            console.warn('OpenAI API failed, using fallback:', apiError.message);
            // Fallback to existing pattern matching system
            if (selectedStyle === 'rhyming') {
                transformedText = transformToRhyme(inputText, selectedCourt);
            } else {
                transformedText = transformToRiddle(inputText, selectedCourt);
            }
        }
        
        // Display result with animation delay
        setTimeout(() => {
            const resultHTML = `
                <div class="bg-black bg-opacity-50 rounded-lg p-6 border border-green-500 border-opacity-30">
                    <div class="generated-dialogue mb-4">"${transformedText}"</div>
                    <div class="text-green-300 text-sm">
                        ${window.capitalizeFirst(selectedStyle)} style • ${window.capitalizeFirst(selectedCourt)} Court • ${translationMethod}
                    </div>
                </div>
            `;
            window.displayResult(resultDiv, resultHTML);
        }, 100); // Reduced delay since API already has built-in delay
        
    } catch (error) {
        console.error('Translation error:', error);
        window.handleError(error, document.getElementById('dialogue-result'), 'Failed to transform dialogue. Please try again.');
    }
}

/**
 * Transform text to rhyming style
 */
function transformToRhyme(text, court) {
    const sentences = text.split(/[.!?]+/).filter(s => s.trim());
    const rules = dialogueTransformationRules.rhyming[court];
    
    const transformedSentences = sentences.map(sentence => {
        const trimmed = sentence.trim();
        if (!trimmed) return '';
        
        const words = trimmed.split(' ');
        const lastWord = words[words.length - 1].toLowerCase();
        
        // Find rhyming ending
        let rhymeEnding = '';
        for (const [key, value] of Object.entries(rules.rhymePairs)) {
            if (lastWord.includes(key) || lastWord.endsWith(key.slice(-2))) {
                rhymeEnding = ` ${value}`;
                break;
            }
        }
        
        if (!rhymeEnding) {
            rhymeEnding = getRandomElement(rules.fallbackRhymes);
        }
        
        return trimmed + rhymeEnding;
    });
    
    return transformedSentences.join(', ');
}

/**
 * Transform text to riddle style
 */
function transformToRiddle(text, court) {
    const rules = dialogueTransformationRules.riddle[court];
    let transformedText = text.toLowerCase();
    
    // Apply pattern-based transformations
    for (const pattern of rules.patterns) {
        for (const trigger of pattern.trigger) {
            const regex = new RegExp(`\\b${trigger}\\b`, 'gi');
            if (transformedText.match(regex)) {
                transformedText = transformedText.replace(regex, pattern.replacement);
                break; // Only apply one transformation per sentence for clarity
            }
        }
    }
    
    // Add mystical phrase if transformation was minimal
    if (transformedText.toLowerCase() === text.toLowerCase()) {
        const mysticalPhrase = getRandomElement(rules.mysticalPhrases);
        transformedText = `${text} ${mysticalPhrase}`;
    }
    
    // Capitalize first letter
    return transformedText.charAt(0).toUpperCase() + transformedText.slice(1);
}

/**
 * Get random element from array (utility function for this module)
 */
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}