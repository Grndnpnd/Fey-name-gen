// Dialogue Transformation Rules for Fey Speech
// Based on verified research from D&D 5e sources and fey court characteristics
// Research Date: September 16, 2025

const dialogueTransformationRules = {
  // Based on research from ./research/feywild_lore/naming_conventions.md
  // Seelie Court: Light, positive themes, floral associations
  // Unseelie Court: Dark, winter-themed, mysterious associations
  
  rhyming: {
    seelie: {
      // Light, positive, nature-themed rhyming patterns
      patterns: [
        {
          description: "Add nature-themed rhyming couplets",
          transformation: function(text) {
            const sentences = text.split(/[.!?]+/).filter(s => s.trim());
            const transformed = sentences.map(sentence => {
              const trimmed = sentence.trim();
              if (!trimmed) return '';
              
              // Simple rhyming transformation with nature themes
              const words = trimmed.split(' ');
              const lastWord = words[words.length - 1].toLowerCase();
              
              // Nature-themed rhyming pairs based on Seelie characteristics
              const rhymePairs = {
                'say': 'like flowers in May',
                'go': 'where gentle winds blow',
                'see': 'beneath the old oak tree',
                'know': 'where crystal waters flow',
                'find': 'with heart and soul kind',
                'true': 'as morning dew',
                'way': 'in the light of day',
                'here': 'when spring draws near',
                'come': 'where bees do hum',
                'take': 'for kindness sake'
              };
              
              // Find rhyming ending
              let rhymeEnding = '';
              for (const [key, value] of Object.entries(rhymePairs)) {
                if (lastWord.includes(key) || lastWord.endsWith(key.slice(-2))) {
                  rhymeEnding = ` ${value}`;
                  break;
                }
              }
              
              if (!rhymeEnding) {
                rhymeEnding = ', so the flowers say';
              }
              
              return trimmed + rhymeEnding;
            });
            
            return transformed.join('. ') + '.';
          }
        }
      ],
      
      // Seelie-specific vocabulary replacements
      vocabularyReplacements: {
        'hello': 'greetings bright',
        'goodbye': 'farewell sweet',
        'yes': 'aye, as sure as spring',
        'no': 'nay, as winter fades',
        'friend': 'dear companion',
        'enemy': 'troubled soul',
        'fight': 'dance of conflict',
        'death': 'eternal rest',
        'magic': 'the bright weaving',
        'power': 'nature\'s gift'
      }
    },
    
    unseelie: {
      // Dark, mysterious, winter-themed rhyming patterns
      patterns: [
        {
          description: "Add dark, mysterious rhyming couplets",
          transformation: function(text) {
            const sentences = text.split(/[.!?]+/).filter(s => s.trim());
            const transformed = sentences.map(sentence => {
              const trimmed = sentence.trim();
              if (!trimmed) return '';
              
              const words = trimmed.split(' ');
              const lastWord = words[words.length - 1].toLowerCase();
              
              // Dark-themed rhyming pairs based on Unseelie characteristics
              const rhymePairs = {
                'say': 'in shadows gray',
                'go': 'where cold winds blow',
                'see': 'in darkness deep and free',
                'know': 'where thorned roses grow',
                'find': 'what fate has designed',
                'true': 'as midnight\'s hue',
                'way': 'at end of day',
                'here': 'when winter\'s near',
                'come': 'when all is numb',
                'take': 'for sorrow\'s sake'
              };
              
              let rhymeEnding = '';
              for (const [key, value] of Object.entries(rhymePairs)) {
                if (lastWord.includes(key) || lastWord.endsWith(key.slice(-2))) {
                  rhymeEnding = ` ${value}`;
                  break;
                }
              }
              
              if (!rhymeEnding) {
                rhymeEnding = ', so whispers the night';
              }
              
              return trimmed + rhymeEnding;
            });
            
            return transformed.join('. ') + '.';
          }
        }
      ],
      
      // Unseelie-specific vocabulary replacements
      vocabularyReplacements: {
        'hello': 'dark greetings',
        'goodbye': 'until shadows meet again',
        'yes': 'aye, as certain as winter',
        'no': 'nay, as the dying light',
        'friend': 'shadowed ally',
        'enemy': 'bitter foe',
        'fight': 'the dance of thorns',
        'death': 'the final frost',
        'magic': 'the dark weaving',
        'power': 'winter\'s bite'
      }
    }
  },
  
  riddles: {
    seelie: {
      // Light, nature-themed riddle patterns
      patterns: [
        {
          description: "Transform statements into nature-themed riddles",
          transformation: function(text) {
            const sentences = text.split(/[.!?]+/).filter(s => s.trim());
            const transformed = sentences.map(sentence => {
              const trimmed = sentence.trim();
              if (!trimmed) return '';
              
              // Simple riddle transformation templates
              const riddleTemplates = [
                `What blooms in spring yet speaks these words: "${trimmed}"?`,
                `Like a flower that opens at dawn, what might say: "${trimmed}"?`,
                `As the sun rises through the leaves, what whispers: "${trimmed}"?`,
                `What dances with the morning breeze and declares: "${trimmed}"?`,
                `Like honey from the sweetest flower, what offers: "${trimmed}"?`
              ];
              
              return riddleTemplates[Math.floor(Math.random() * riddleTemplates.length)];
            });
            
            return transformed.join(' ');
          }
        }
      ]
    },
    
    unseelie: {
      // Dark, mysterious riddle patterns
      patterns: [
        {
          description: "Transform statements into dark, mysterious riddles",
          transformation: function(text) {
            const sentences = text.split(/[.!?]+/).filter(s => s.trim());
            const transformed = sentences.map(sentence => {
              const trimmed = sentence.trim();
              if (!trimmed) return '';
              
              // Dark riddle transformation templates
              const riddleTemplates = [
                `What lurks in winter's shadow and speaks thus: "${trimmed}"?`,
                `Like frost that forms in darkness, what might whisper: "${trimmed}"?`,
                `As the moon hides behind clouds, what murmurs: "${trimmed}"?`,
                `What walks where thorns grow thickest and declares: "${trimmed}"?`,
                `Like poison in a silver cup, what offers: "${trimmed}"?`
              ];
              
              return riddleTemplates[Math.floor(Math.random() * riddleTemplates.length)];
            });
            
            return transformed.join(' ');
          }
        }
      ]
    }
  },
  
  // Utility functions for transformation
  transformText: function(text, style, court) {
    if (!text || !style || !court) return text;
    
    const rules = this[style] && this[style][court];
    if (!rules) return text;
    
    let transformed = text;
    
    // Apply vocabulary replacements first
    if (rules.vocabularyReplacements) {
      for (const [original, replacement] of Object.entries(rules.vocabularyReplacements)) {
        const regex = new RegExp(`\\b${original}\\b`, 'gi');
        transformed = transformed.replace(regex, replacement);
      }
    }
    
    // Apply pattern transformations
    if (rules.patterns && rules.patterns.length > 0) {
      const pattern = rules.patterns[0]; // Use first pattern for now
      transformed = pattern.transformation(transformed);
    }
    
    return transformed;
  },
  
  // Get available transformation options
  getAvailableStyles: function() {
    return ['rhyming', 'riddles'];
  },
  
  getAvailableCourts: function() {
    return ['seelie', 'unseelie'];
  }
};

// Export for use in web application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = dialogueTransformationRules;
}