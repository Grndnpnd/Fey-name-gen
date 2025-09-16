// Main application coordination and navigation
// Based on specifications from ./data/feature_specifications.md

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initializeNavigation();
    
    // Initialize all features after other scripts load
    setTimeout(() => {
        if (typeof window.initializeNameGenerator === 'function') {
            window.initializeNameGenerator();
        }
        if (typeof window.initializeDialogueTranslator === 'function') {
            window.initializeDialogueTranslator();
        }
        if (typeof window.initializeFeyEffects === 'function') {
            window.initializeFeyEffects();
        }
    }, 100);
});

/**
 * Initialize navigation system for single-page application
 */
function initializeNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const sections = document.querySelectorAll('.section');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSection = this.id.replace('nav-', 'section-');
            
            // Update active navigation button
            navButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show target section, hide others
            sections.forEach(section => {
                if (section.id === targetSection) {
                    section.classList.remove('hidden');
                    section.classList.add('active');
                } else {
                    section.classList.add('hidden');
                    section.classList.remove('active');
                }
            });
        });
    });
}

/**
 * Utility function to show loading state
 */
window.showLoading = function(element) {
    element.classList.add('loading');
    element.innerHTML = '<div class="bg-black bg-opacity-50 rounded-lg p-6 border border-gray-500 border-opacity-30"><p class="text-gray-400">Generating...</p></div>';
};

/**
 * Utility function to hide loading state
 */
window.hideLoading = function(element) {
    element.classList.remove('loading');
};

/**
 * Utility function to display results with fade-in animation
 */
window.displayResult = function(element, content) {
    window.hideLoading(element);
    element.innerHTML = content;
    element.classList.add('fade-in');
    
    // Remove fade-in class after animation completes
    setTimeout(() => {
        element.classList.remove('fade-in');
    }, 500);
};

/**
 * Utility function to get random element from array
 */
window.getRandomElement = function(array) {
    return array[Math.floor(Math.random() * array.length)];
};

/**
 * Utility function to get multiple random elements without duplicates
 */
window.getRandomElements = function(array, count) {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, Math.min(count, array.length));
};

/**
 * Utility function to capitalize first letter
 */
window.capitalizeFirst = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Utility function to format effect category for display
 */
window.formatEffectCategory = function(category) {
    const categoryMap = {
        'beneficial': 'Beneficial',
        'neutral': 'Neutral',
        'challenging': 'Challenging',
        'archfey': 'Archfey'
    };
    return categoryMap[category] || window.capitalizeFirst(category);
};

/**
 * Error handling utility
 */
window.handleError = function(error, element, fallbackMessage = 'An error occurred. Please try again.') {
    console.error('Application Error:', error);
    window.hideLoading(element);
    element.innerHTML = `
        <div class="bg-red-900 bg-opacity-50 rounded-lg p-6 border border-red-500 border-opacity-30">
            <p class="text-red-300">${fallbackMessage}</p>
        </div>
    `;
};

/**
 * Smooth scroll to element
 */
window.smoothScrollTo = function(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
};

// Global error handler
window.addEventListener('error', function(event) {
    console.error('Global error:', event.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', function(event) {
    console.error('Unhandled promise rejection:', event.reason);
    event.preventDefault();
});