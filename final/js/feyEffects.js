// Fey Effects Table - Enhanced with Dice Roll Table Generation
// Based on data from ./data/effects/fey_effects.js
// Specifications from ./data/feature_specifications.md
// Enhanced with D&D 5e 2024 compliant effects and dice roll table functionality

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
    const generateButton = document.getElementById('roll-effects');
    const resultDiv = document.getElementById('effects-result');
    
    if (generateButton && resultDiv) {
        generateButton.addEventListener('click', function() {
            generateEffectsTable();
        });
    }
};

/**
 * Generate a dice roll table based on selected parameters
 */
function generateEffectsTable() {
    try {
        const resultDiv = document.getElementById('effects-result');
        window.showLoading(resultDiv);
        
        // Get selected effect type
        const effectTypeSelect = document.getElementById('effect-type');
        const selectedType = effectTypeSelect.value;
        
        // Get selected dice type
        const diceTypeSelect = document.getElementById('dice-type');
        const selectedDiceType = diceTypeSelect.value;
        
        // Get the number of rows based on dice type
        const diceMax = {
            'd4': 4,
            'd6': 6,
            'd10': 10
        };
        
        const numRows = diceMax[selectedDiceType];
        
        // Get effects for the table
        const effects = getEffectsForTable(selectedType, numRows);
        
        // Display table with animation delay
        setTimeout(() => {
            const tableHTML = generateTableHTML(effects, selectedType, selectedDiceType, numRows);
            window.displayResult(resultDiv, tableHTML);
        }, 800);
        
    } catch (error) {
        window.handleError(error, document.getElementById('effects-result'), 'Failed to generate effects table. Please try again.');
    }
}

/**
 * Get a list of effects for the table
 */
function getEffectsForTable(category, count) {
    let sourceEffects = [];
    
    if (category === 'all') {
        sourceEffects = [
            ...effectsData.beneficial.map(effect => ({text: effect, category: 'beneficial'})),
            ...effectsData.neutral.map(effect => ({text: effect, category: 'neutral'})),
            ...effectsData.challenging.map(effect => ({text: effect, category: 'challenging'})),
            ...effectsData.archfey.map(effect => ({text: effect, category: 'archfey'}))
        ];
    } else {
        const categoryEffects = effectsData[category] || [];
        sourceEffects = categoryEffects.map(effect => ({text: effect, category: category}));
    }
    
    // Shuffle the effects to get random selection
    const shuffled = [...sourceEffects].sort(() => 0.5 - Math.random());
    
    // Take the required number of effects
    const selectedEffects = shuffled.slice(0, count);
    
    // If we don't have enough effects, fill with repeats
    while (selectedEffects.length < count && sourceEffects.length > 0) {
        const randomEffect = sourceEffects[Math.floor(Math.random() * sourceEffects.length)];
        selectedEffects.push(randomEffect);
    }
    
    return selectedEffects.slice(0, count);
}

/**
 * Generate HTML for the dice roll table
 */
function generateTableHTML(effects, selectedType, diceType, numRows) {
    const typeText = selectedType === 'all' ? 'Mixed' : formatEffectCategory(selectedType);
    
    const tableRows = effects.map((effect, index) => {
        const rollNumber = index + 1;
        const categoryBadge = selectedType === 'all' 
            ? `<span class="inline-block px-2 py-1 text-xs rounded-full bg-${getCategoryColor(effect.category)}-500 bg-opacity-20 text-${getCategoryColor(effect.category)}-300 mr-2">${formatEffectCategory(effect.category)}</span>`
            : '';
        
        return `
            <tr class="border-b border-purple-500 border-opacity-20">
                <td class="py-3 px-4 text-center font-bold text-purple-300 text-lg">
                    ${rollNumber}
                </td>
                <td class="py-3 px-4 text-gray-300">
                    ${categoryBadge}${effect.text}
                </td>
            </tr>
        `;
    }).join('');
    
    return `
        <div class="bg-black bg-opacity-50 rounded-lg p-6 border border-purple-500 border-opacity-30">
            <div class="text-center mb-6">
                <h3 class="text-purple-300 text-xl font-bold mb-2">
                    ${diceType.toUpperCase()} ${typeText} Effects Table
                </h3>
                <p class="text-gray-400 text-sm">
                    Roll a ${diceType} and find the corresponding effect below
                </p>
            </div>
            
            <div class="overflow-x-auto">
                <table class="w-full">
                    <thead>
                        <tr class="border-b-2 border-purple-500 border-opacity-40">
                            <th class="py-3 px-4 text-left text-purple-300 font-semibold w-16">
                                ${diceType.toUpperCase()}
                            </th>
                            <th class="py-3 px-4 text-left text-purple-300 font-semibold">
                                Effect
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        ${tableRows}
                    </tbody>
                </table>
            </div>
            
            <div class="mt-4 text-center">
                <button onclick="generateEffectsTable()" 
                        class="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Generate New Table
                </button>
            </div>
        </div>
    `;
}

/**
 * Get color class for effect category
 */
function getCategoryColor(category) {
    const colorMap = {
        'beneficial': 'green',
        'neutral': 'yellow',
        'challenging': 'red',
        'archfey': 'purple'
    };
    return colorMap[category] || 'gray';
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
