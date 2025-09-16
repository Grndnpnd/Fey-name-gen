// Fey Effects Table Generator - Uses data from ../data/effects/fey_effects.js
// This file assumes feyEffects is already loaded from the data file

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
 * Get a list of effects for the table using the loaded feyEffects data
 */
function getEffectsForTable(category, count) {
    let sourceEffects = [];
    
    // Use the loaded feyEffects data
    if (typeof feyEffects === 'undefined') {
        console.error('feyEffects data not loaded');
        return [];
    }
    
    if (category === 'all') {
        sourceEffects = [
            ...feyEffects.beneficial.map(effect => ({text: effect, category: 'beneficial'})),
            ...feyEffects.neutral.map(effect => ({text: effect, category: 'neutral'})),
            ...feyEffects.challenging.map(effect => ({text: effect, category: 'challenging'})),
            ...feyEffects.archfey.map(effect => ({text: effect, category: 'archfey'}))
        ];
    } else {
        const categoryEffects = feyEffects[category] || [];
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
