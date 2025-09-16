// Fey Effects Table - Enhanced with Dice Roll Support
// Based on data from ./data/effects/fey_effects.js
// Specifications from ./data/feature_specifications.md
// Enhanced with D&D 5e 2024 compliant effects and dice roll functionality

// Use external fey effects data loaded from ../data/effects/fey_effects.js
// If external data is not available, use fallback data
const effectsData = (typeof feyEffects !== 'undefined') ? feyEffects : {
  beneficial: [
    // Verified effects from research
    "You become invisible for 1 minute or until you attack or cast a spell.",
    "You gain the ability to sense non-friendly creatures within 120 feet for 1 hour.",
    "Your skin turns a vibrant, beautiful color of your choice for 24 hours.",
    "You sprout butterfly wings and gain a flying speed of 30 feet for 10 minutes.",
    "Flowers bloom in your footsteps for the next hour.",
    "You can speak with animals for the next 24 hours.",
    "Your voice becomes melodious, giving you advantage on Charisma checks for 1 hour.",
    "You emit bright light in a 10-foot radius and dim light for an additional 10 feet for 1 hour.",
    "You gain resistance to one damage type of your choice for 1 hour.",
    "A fairy familiar appears and serves you for 24 hours.",
    
    // Additional beneficial effects based on research patterns
    "You grow antlers that shed glittering dust, giving you advantage on Intimidation checks for 1 hour.",
    "Your eyes become kaleidoscopic, granting you truesight out to 60 feet for 10 minutes.",
    "You can walk on water for the next hour.",
    "Healing energy surrounds you, restoring 2d4+2 hit points.",
    "You gain the ability to cast Misty Step at will for the next 10 minutes.",
    "Your hair becomes living vines that can manipulate objects within 5 feet.",
    "You can breathe underwater and gain a swimming speed equal to your walking speed for 8 hours.",
    "You grow a magnificent tail that grants you advantage on Acrobatics checks for 24 hours.",
    "Your shadow detaches and dances around you, granting advantage on Performance checks for 1 hour.",
    "You can cast Speak with Plants at will for the next hour."
  ],
  
  neutral: [
    // Verified effects from research
    "You are affected by a Confusion spell for 1 minute.",
    "A Fireball spell appears as a harmless burst of glowing fey lights.",
    "Your appearance changes to that of a different humanoid race for 24 hours.",
    "You can only speak in rhymes for the next hour.",
    "Your size increases or decreases by one category for 1 hour.",
    "You grow a beard of flowers (regardless of gender) for 24 hours.",
    "Your voice changes to sound like a different creature type for 1 hour.",
    "You leave glittering footprints for the next 24 hours.",
    "Your hair changes color every minute for the next hour.",
    "You can only communicate through song for the next 30 minutes.",
    
    // Additional neutral effects based on research patterns
    "You smell strongly of a random flower for 24 hours.",
    "Your reflection shows you as a different fey creature for 1 hour.",
    "You cast Detect Magic at will for the next hour, but you see magic as swirling colors.",
    "Your equipment changes color to match your mood for 24 hours.",
    "You grow small mushrooms on your clothing that glow faintly for 8 hours.",
    "You can taste colors and see sounds for the next hour.",
    "Your footsteps make musical notes for the next 4 hours.",
    "You sprout small flowers from your hair that change with the seasons for 1 week.",
    "You can understand all languages but can only speak in questions for 1 hour.",
    "Your tears turn into small gems worth 1 gp each for the next 24 hours."
  ],
  
  challenging: [
    // Verified effects from research including the specific "glowing skin causing disadvantage" mentioned in requirements
    "Your skin glows brightly, causing you to have disadvantage on Stealth checks for 24 hours.",
    "You are affected by a Slow spell for 1 minute.",
    "You must make a DC 15 Constitution saving throw or be stunned for 1 round.",
    "You are frightened of the nearest creature for 1 minute.",
    "You can only move by skipping or hopping for the next hour.",
    "You are compelled to dance whenever you hear music for 24 hours.",
    "Your spells have a 25% chance to fail for the next hour.",
    "You take 1d6 psychic damage and must make a Wisdom saving throw or be charmed by the nearest fey creature.",
    "You are cursed with bad luck, causing the next attack roll, ability check, or saving throw to be made with disadvantage.",
    "You become allergic to iron, taking 1 damage whenever you touch metal for 24 hours.",
    
    // Additional challenging effects based on research patterns
    "You are polymorphed into a harmless animal for 1 hour.",
    "You fall asleep for 1 minute and can only be awakened by taking damage.",
    "You are affected by a Suggestion spell to perform a harmless but embarrassing action.",
    "Your movement speed is reduced by half for 1 hour.",
    "You have disadvantage on all attack rolls for 10 minutes.",
    "You are blinded by swirling colors for 1 minute.",
    "You must succeed on a DC 15 Wisdom saving throw or use your action to attack a random creature within range.",
    "You are deafened by the sound of ethereal music for 1 hour.",
    "You have vulnerability to one damage type (chosen randomly) for 1 hour.",
    "You are affected by a Bestow Curse spell (DM's choice of effect) for 1 hour."
  ],
  
  archfey: [
    // Severe effects based on research patterns
    "Reality warps around you. All creatures within 30 feet must make a DC 18 Wisdom saving throw or be transported to a random location within 1 mile.",
    "You are banished to the Feywild for 1 minute, returning to the same space (or nearest unoccupied space).",
    "Time moves differently for you. You age 1 year but gain the benefits of a long rest.",
    "You swap places with a random creature within 60 feet.",
    "An Archfey takes interest in you, marking you with their sigil (permanent until removed by Wish or similar magic).",
    "You are affected by a Geas spell to complete a task for an Archfey.",
    "Your memories of the last 24 hours are replaced with false memories of a fey court gathering.",
    "You are transformed into a fey creature of the same CR for 24 hours, retaining your mental abilities.",
    "A portal to the Feywild opens beneath your feet, and you must make a DC 20 Dexterity saving throw or fall through.",
    "You are cursed to speak only in riddles for 7 days.",
    
    // Additional archfey effects based on research patterns
    "You are affected by a modified Time Stop spell that lasts for 2 rounds but only affects you.",
    "Your soul is temporarily bound to a fey lord, giving them the ability to scry on you at will for 30 days.",
    "You are compelled to complete a quest for an Archfey within 30 days or suffer a permanent curse.",
    "You gain the ability to cast one 9th-level spell of the DM's choice, but you age 10 years.",
    "You are transformed into a living plant for 1 hour, retaining your consciousness but unable to move or speak.",
    "An aspect of an Archfey possesses you for 10 minutes, acting through your body.",
    "You are cursed to experience all emotions as their opposite for 7 days.",
    "Your shadow becomes a separate entity that acts independently for 24 hours.",
    "You are transported to a pocket dimension created by an Archfey for 1 hour of real time (which feels like 1 day to you).",
    "You are affected by a Wish spell, but the wish is granted by a capricious Archfey with their own interpretation."
  ]
};

/**
 * Initialize the fey effects functionality
 */
window.initializeFeyEffects = function() {
    const rollButton = document.getElementById('roll-effects');
    const resultDiv = document.getElementById('effects-result');
    
    if (rollButton && resultDiv) {
        rollButton.addEventListener('click', function() {
            rollFeyEffects();
        });
    }
};

/**
 * Roll fey effects based on selected type, dice type, and count
 */
function rollFeyEffects() {
    try {
        const resultDiv = document.getElementById('effects-result');
        window.showLoading(resultDiv);
        
        // Get selected effect type
        const effectTypeSelect = document.getElementById('effect-type');
        const selectedType = effectTypeSelect.value;
        
        // Get selected dice type
        const diceTypeSelect = document.getElementById('dice-type');
        const selectedDiceType = diceTypeSelect.value;
        
        // Get selected effect count
        const effectCountSelect = document.getElementById('effect-count');
        const selectedCount = parseInt(effectCountSelect.value);
        
        // Generate effects based on dice type
        let effects = [];
        let rollResults = [];
        
        if (selectedDiceType === 'random') {
            // Use existing random generation
            effects = getMultipleEffects(selectedCount, selectedType);
        } else {
            // Use dice roll generation
            for (let i = 0; i < selectedCount; i++) {
                const rollResult = rollDiceForEffect(selectedDiceType, selectedType);
                effects.push(rollResult);
                rollResults.push(rollResult.diceRoll);
            }
        }
        
        // Display results with animation delay
        setTimeout(() => {
            const resultHTML = generateEffectsHTML(effects, selectedType, selectedDiceType, rollResults);
            window.displayResult(resultDiv, resultHTML);
        }, 1200);
        
    } catch (error) {
        window.handleError(error, document.getElementById('effects-result'), 'Failed to roll effects. Please try again.');
    }
}

/**
 * Get random effect by category using external data
 */
function getRandomEffect(category = 'all') {
    if (category === 'all') {
        const allEffects = [
            ...effectsData.beneficial.map(effect => ({text: effect, category: 'beneficial'})),
            ...effectsData.neutral.map(effect => ({text: effect, category: 'neutral'})),
            ...effectsData.challenging.map(effect => ({text: effect, category: 'challenging'})),
            ...effectsData.archfey.map(effect => ({text: effect, category: 'archfey'}))
        ];
        return allEffects[Math.floor(Math.random() * allEffects.length)];
    }
    
    const categoryEffects = effectsData[category];
    if (categoryEffects) {
        const effect = categoryEffects[Math.floor(Math.random() * categoryEffects.length)];
        return {text: effect, category: category};
    }
    
    return {text: "No effect occurs.", category: 'neutral'};
}

/**
 * Get multiple random effects without duplicates
 */
function getMultipleEffects(count = 1, category = 'all') {
    const effects = [];
    const usedEffects = new Set();
    
    let attempts = 0;
    const maxAttempts = 100; // Prevent infinite loop
    
    while (effects.length < count && attempts < maxAttempts) {
        const effect = getRandomEffect(category);
        
        if (!usedEffects.has(effect.text)) {
            effects.push(effect);
            usedEffects.add(effect.text);
        }
        
        attempts++;
    }
    
    return effects;
}

/**
 * Roll dice for effect using external data with dice roll tables
 */
function rollDiceForEffect(diceType, category) {
    const diceMax = {
        'd4': 4,
        'd6': 6,
        'd10': 10
    };
    
    const rollResult = Math.floor(Math.random() * diceMax[diceType]) + 1;
    
    let effect;
    let effectCategory = category;
    
    // Use dice roll tables if available in external data
    if (effectsData.diceRollTables && effectsData.diceRollTables[diceType]) {
        if (category === 'all') {
            const categories = ['beneficial', 'neutral', 'challenging', 'archfey'];
            effectCategory = categories[Math.floor(Math.random() * categories.length)];
        }
        
        const diceTable = effectsData.diceRollTables[diceType][effectCategory];
        if (diceTable && diceTable.length > 0) {
            const index = Math.max(0, Math.min(rollResult - 1, diceTable.length - 1));
            effect = diceTable[index];
        } else {
            // Fallback to regular effects
            const categoryEffects = effectsData[effectCategory];
            if (categoryEffects && categoryEffects.length > 0) {
                const index = (rollResult - 1) % categoryEffects.length;
                effect = categoryEffects[index];
            } else {
                effect = "No effect occurs.";
            }
        }
    } else {
        // Fallback to regular effects if dice tables not available
        if (category === 'all') {
            const categories = ['beneficial', 'neutral', 'challenging', 'archfey'];
            effectCategory = categories[Math.floor(Math.random() * categories.length)];
        }
        
        const categoryEffects = effectsData[effectCategory];
        if (categoryEffects && categoryEffects.length > 0) {
            const index = (rollResult - 1) % categoryEffects.length;
            effect = categoryEffects[index];
        } else {
            effect = "No effect occurs.";
        }
    }
    
    return {
        diceRoll: rollResult,
        diceType: diceType,
        text: effect,
        category: effectCategory
    };
}

/**
 * Generate HTML for displaying effects with dice roll support
 */
function generateEffectsHTML(effects, selectedType, diceType = 'random', rollResults = []) {
    const effectsHTML = effects.map((effect, index) => {
        const diceRollDisplay = diceType !== 'random' && effect.diceRoll 
            ? `<div class="dice-roll text-yellow-400 text-sm mb-1">🎲 ${effect.diceType.toUpperCase()}: ${effect.diceRoll}</div>`
            : '';
            
        return `
            <div class="effect-item mb-4">
                ${diceRollDisplay}
                <div class="effect-category ${effect.category} mb-2">
                    ${formatEffectCategory(effect.category)} Effect
                </div>
                <div class="effect-text text-gray-300">
                    ${effect.text}
                </div>
            </div>
        `;
    }).join('');
    
    const typeText = selectedType === 'all' ? 'Mixed' : formatEffectCategory(selectedType);
    const countText = effects.length === 1 ? '1 Effect' : `${effects.length} Effects`;
    const methodText = diceType !== 'random' ? `${diceType.toUpperCase()} Roll` : 'Random';
    
    return `
        <div class="bg-black bg-opacity-50 rounded-lg p-6 border border-purple-500 border-opacity-30">
            <div class="generated-effects">
                <div class="text-purple-300 text-lg font-semibold mb-4 text-center">
                    ${countText} • ${typeText} • ${methodText}
                </div>
                ${effectsHTML}
            </div>
        </div>
    `;
}

/**
 * Format effect category for display
 */
function formatEffectCategory(category) {
    const categoryMap = {
        'beneficial': 'Beneficial',
        'neutral': 'Neutral',
        'challenging': 'Challenging',
        'archfey': 'Archfey'
    };
    return categoryMap[category] || window.capitalizeFirst(category);
}