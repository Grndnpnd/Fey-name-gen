// Fey Effects Table Data - Enhanced for D&D 5e 2024
// Based on verified research from D&D 5e 2024 sources and Feywild mechanics
// Research Date: September 16, 2025
// Enhanced with dice roll support (d4, d6, d10) and expanded effect pool
// Target: Organized for dice roll tables with appropriate effect counts

const feyEffects = {
  // Categories based on research from ./research/feywild_lore/fey_effects_research.md
  
  beneficial: [
    // Verified effects from D&D 5e 2024 research
    "You become invisible for 1 minute or until you attack or cast a spell.",
    "You regain 2d10 hit points immediately.",
    "One ally within 300 feet regains 2d10 hit points.",
    "You regain your lowest-level expended spell slot.",
    "Your skin turns a vibrant, beautiful color of your choice for 24 hours.",
    "You sprout butterfly wings and gain a flying speed of 30 feet for 10 minutes.",
    "Flowers bloom in your footsteps for the next hour.",
    "You can speak with animals for the next 24 hours.",
    "Your voice becomes melodious, giving you advantage on Charisma checks for 1 hour.",
    "You emit bright light in a 10-foot radius and dim light for an additional 10 feet for 1 hour.",
    
    // Additional verified beneficial effects from research
    "You gain resistance to one damage type of your choice for 1 hour.",
    "A friendly fey creature appears in an unoccupied space within 60 feet and serves you for 1 minute.",
    "You grow antlers that shed glittering dust, giving you advantage on Intimidation checks for 1 hour.",
    "Your eyes become kaleidoscopic, granting you truesight out to 60 feet for 10 minutes.",
    "You can walk on water for the next hour.",
    "You gain the ability to cast Misty Step at will for the next 10 minutes.",
    "Your hair becomes living vines that can manipulate objects within 5 feet for 1 hour.",
    "You can breathe underwater and gain a swimming speed equal to your walking speed for 8 hours.",
    "You grow a magnificent tail that grants you advantage on Acrobatics checks for 24 hours.",
    "Your shadow detaches and dances around you, granting advantage on Performance checks for 1 hour.",
    
    // Extended beneficial effects based on fey creature abilities research
    "You can cast Speak with Plants at will for the next hour.",
    "You gain charm immunity for the next 24 hours.",
    "You emanate a 30-foot aura of calm emotions for 10 minutes.",
    "You can cast Detect Magic at will for the next hour.",
    "Your movement speed increases by 10 feet for 8 hours.",
    "You gain advantage on all Wisdom (Perception) checks for 4 hours.",
    "You can communicate telepathically with fey creatures within 120 feet for 24 hours.",
    "You sprout small flowers that provide sustenance, removing the need to eat for 7 days.",
    "You gain the ability to see invisible creatures and objects for 1 hour.",
    "Your touch can cure diseases once per day for the next week."
  ],
  
  neutral: [
    // Verified effects from D&D 5e 2024 research
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
    
    // Additional verified neutral effects from Feywild research
    "You smell strongly of a random flower for 24 hours.",
    "Your reflection shows you as a different fey creature for 1 hour.",
    "You compulsively tell the truth for the next 10 minutes.",
    "Your hands become translucent for 1 hour but function normally.",
    "You can taste colors and see sounds for the next 30 minutes.",
    "A small rain cloud follows you around for 1 hour, occasionally drizzling.",
    "You speak in a different language (chosen randomly) for 1 hour.",
    "Your ears become pointed and elongated for 24 hours.",
    "You cast Mirror Image on yourself.",
    "You age backwards or forwards by 1d10 years in appearance only for 24 hours.",
    
    // Extended neutral effects based on wild magic and fey creature research
    "An eye appears somewhere on your body for 24 hours.",
    "You emanate a 30-foot radius Wild Magic aura for 10 minutes that affects spell casting.",
    "Time moves differently for you - you experience 1 hour as either 10 minutes or 6 hours.",
    "Your equipment changes color to match your mood for 24 hours.",
    "You grow small mushrooms on your clothing that glow faintly for 8 hours.",
    "Your footsteps make musical notes for the next 4 hours.",
    "You sprout small flowers from your hair that change with the seasons for 1 week.",
    "You can understand all languages but can only speak in questions for 1 hour.",
    "Your tears turn into small gems worth 1 gp each for the next 24 hours.",
    "You cast Detect Magic at will for the next hour, but see magic as swirling colors."
  ],
  
  challenging: [
    // Verified effects from D&D 5e 2024 Feywild research
    "Your skin glows brightly, causing you to have disadvantage on Stealth checks for 24 hours.",
    "You are affected by a Slow spell for 1 minute.",
    "You must make a DC 15 Constitution saving throw or be stunned for 1 round.",
    "You are frightened of the nearest creature for 1 minute.",
    "You can only move by skipping or hopping for the next hour.",
    "You are compelled to dance whenever you hear music for 24 hours.",
    "Your spells have a 25% chance to fail for the next hour (Feywild wild magic interference).",
    "You take 1d6 psychic damage and must make a Wisdom saving throw or be charmed by the nearest fey creature.",
    "You are cursed with bad luck, causing the next attack roll, ability check, or saving throw to be made with disadvantage.",
    "You become allergic to iron, taking 1 damage whenever you touch metal for 24 hours.",
    
    // Additional verified challenging effects from research
    "You are polymorphed into a harmless animal for 1 hour.",
    "You fall asleep for 1 minute and can only be awakened by taking damage.",
    "You are affected by a Suggestion spell to perform a harmless but embarrassing action.",
    "Your movement speed is reduced by half for 1 hour.",
    "You have disadvantage on all attack rolls for 10 minutes.",
    "You are blinded by swirling colors for 1 minute.",
    "You must succeed on a DC 15 Wisdom saving throw or use your action to attack a random creature within range.",
    "You are deafened by the sound of ethereal music for 1 hour.",
    "You have vulnerability to one damage type (chosen randomly) for 1 hour.",
    "You are affected by a Bestow Curse spell (DM's choice of effect) for 1 hour.",
    
    // Extended challenging effects based on fey creature abilities and wild magic research
    "You lose the ability to lie for 24 hours and must make a Wisdom save (DC 15) to avoid speaking uncomfortable truths.",
    "You are compelled to accept any reasonable challenge or dare for the next 4 hours.",
    "Your memory becomes unreliable - you have disadvantage on Intelligence checks for 8 hours.",
    "You become lost in your own thoughts, having disadvantage on Wisdom (Perception) checks for 2 hours.",
    "You are affected by an Entangle spell centered on yourself that moves with you for 10 minutes.",
    "You must make a DC 15 Charisma saving throw at the start of each turn or be compelled to use your action to compliment a random creature.",
    "You experience time distortion - your initiative count changes by 1d6 (+ or -) each round for 1 minute.",
    "You are cursed to speak only in questions for 2 hours.",
    "Your shadow acts independently and may give away your position or intentions for 1 hour.",
    "You become emotionally volatile, having disadvantage on Charisma saves for 4 hours."
  ],
  
  archfey: [
    // Severe effects based on D&D 5e 2024 Feywild and time distortion research
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
    
    // Additional verified archfey effects based on time distortion and planar research
    "Time distortion affects you: 3 days pass for you while only 3 minutes pass in the Material Plane.",
    "You experience reverse time flow: you must make a DC 15 Wisdom saving throw when leaving the Feywild or suffer temporal displacement.",
    "You are affected by a modified Time Stop spell that lasts for 2 rounds but only affects you.",
    "Your soul is temporarily bound to a fey lord, giving them the ability to scry on you at will for 30 days.",
    "You are compelled to complete a quest for an Archfey within 30 days or suffer a permanent curse.",
    "You gain the ability to cast one 9th-level spell of the DM's choice, but you age 10 years.",
    "You are transformed into a living plant for 1 hour, retaining your consciousness but unable to move or speak.",
    "An aspect of an Archfey possesses you for 10 minutes, acting through your body.",
    "You are cursed to experience all emotions as their opposite for 7 days.",
    "Your shadow becomes a separate entity that acts independently for 24 hours.",
    
    // Extended archfey effects based on official Feywild planar mechanics
    "You are transported to a pocket dimension created by an Archfey for 1 hour of real time (which feels like 1 day to you).",
    "You are affected by a Wish spell, but the wish is granted by a capricious Archfey with their own interpretation.",
    "You become emotionally bound to the Feywild, losing interest in the mortal world for 1d4 months.",
    "Your sleep patterns are permanently altered - you no longer need sleep but must spend 4 hours in a trance-like state.",
    "You are cursed with Feywild madness: roll on the Short-Term Madness table, effect lasts 30 days.",
    "An Archfey claims a debt from you that must be repaid within one year or face dire consequences.",
    "You are marked by the Wild Hunt and must evade fey hunters for 7 days and nights.",
    "Your memories become fluid - each day you forget one memory and gain one false memory of the Feywild.",
    "You are bound by an unbreakable fey contract that compels you to perform three favors for different fey creatures.",
    "Time becomes unstable around you: clocks run backwards, food spoils instantly, and magic items malfunction for 24 hours."
  ]
};

// Dice Roll Tables - Organized for deterministic dice roll results
// Each die size has appropriate number of effects for that die
feyEffects.diceRollTables = {
  d4: {
    beneficial: [
      "You regain 2d10 hit points immediately.",
      "You become invisible for 1 minute or until you attack or cast a spell.",
      "You sprout butterfly wings and gain a flying speed of 30 feet for 10 minutes.",
      "You gain resistance to one damage type of your choice for 1 hour."
    ],
    neutral: [
      "Your appearance changes to that of a different humanoid race for 24 hours.",
      "You can only speak in rhymes for the next hour.",
      "Your size increases or decreases by one category for 1 hour.",
      "You grow a beard of flowers (regardless of gender) for 24 hours."
    ],
    challenging: [
      "Your skin glows brightly, causing you to have disadvantage on Stealth checks for 24 hours.",
      "You are affected by a Slow spell for 1 minute.",
      "You can only move by skipping or hopping for the next hour.",
      "Your spells have a 25% chance to fail for the next hour (Feywild wild magic interference)."
    ],
    archfey: [
      "You are banished to the Feywild for 1 minute, returning to the same space (or nearest unoccupied space).",
      "Time moves differently for you. You age 1 year but gain the benefits of a long rest.",
      "An Archfey takes interest in you, marking you with their sigil (permanent until removed by Wish or similar magic).",
      "Time distortion affects you: 3 days pass for you while only 3 minutes pass in the Material Plane."
    ]
  },
  
  d6: {
    beneficial: [
      "You regain 2d10 hit points immediately.",
      "One ally within 300 feet regains 2d10 hit points.",
      "You regain your lowest-level expended spell slot.",
      "You become invisible for 1 minute or until you attack or cast a spell.",
      "You sprout butterfly wings and gain a flying speed of 30 feet for 10 minutes.",
      "You gain resistance to one damage type of your choice for 1 hour."
    ],
    neutral: [
      "You are affected by a Confusion spell for 1 minute.",
      "Your appearance changes to that of a different humanoid race for 24 hours.",
      "You can only speak in rhymes for the next hour.",
      "Your size increases or decreases by one category for 1 hour.",
      "You grow a beard of flowers (regardless of gender) for 24 hours.",
      "Your hair changes color every minute for the next hour."
    ],
    challenging: [
      "Your skin glows brightly, causing you to have disadvantage on Stealth checks for 24 hours.",
      "You are affected by a Slow spell for 1 minute.",
      "You must make a DC 15 Constitution saving throw or be stunned for 1 round.",
      "You can only move by skipping or hopping for the next hour.",
      "Your spells have a 25% chance to fail for the next hour (Feywild wild magic interference).",
      "You become allergic to iron, taking 1 damage whenever you touch metal for 24 hours."
    ],
    archfey: [
      "Reality warps around you. All creatures within 30 feet must make a DC 18 Wisdom saving throw or be transported to a random location within 1 mile.",
      "You are banished to the Feywild for 1 minute, returning to the same space (or nearest unoccupied space).",
      "Time moves differently for you. You age 1 year but gain the benefits of a long rest.",
      "An Archfey takes interest in you, marking you with their sigil (permanent until removed by Wish or similar magic).",
      "You are transformed into a fey creature of the same CR for 24 hours, retaining your mental abilities.",
      "Time distortion affects you: 3 days pass for you while only 3 minutes pass in the Material Plane."
    ]
  },
  
  d10: {
    beneficial: [
      "You regain 2d10 hit points immediately.",
      "One ally within 300 feet regains 2d10 hit points.",
      "You regain your lowest-level expended spell slot.",
      "You become invisible for 1 minute or until you attack or cast a spell.",
      "You sprout butterfly wings and gain a flying speed of 30 feet for 10 minutes.",
      "Flowers bloom in your footsteps for the next hour.",
      "You can speak with animals for the next 24 hours.",
      "You emit bright light in a 10-foot radius and dim light for an additional 10 feet for 1 hour.",
      "You gain resistance to one damage type of your choice for 1 hour.",
      "A friendly fey creature appears in an unoccupied space within 60 feet and serves you for 1 minute."
    ],
    neutral: [
      "You are affected by a Confusion spell for 1 minute.",
      "A Fireball spell appears as a harmless burst of glowing fey lights.",
      "Your appearance changes to that of a different humanoid race for 24 hours.",
      "You can only speak in rhymes for the next hour.",
      "Your size increases or decreases by one category for 1 hour.",
      "You grow a beard of flowers (regardless of gender) for 24 hours.",
      "Your voice changes to sound like a different creature type for 1 hour.",
      "You leave glittering footprints for the next 24 hours.",
      "Your hair changes color every minute for the next hour.",
      "You can only communicate through song for the next 30 minutes."
    ],
    challenging: [
      "Your skin glows brightly, causing you to have disadvantage on Stealth checks for 24 hours.",
      "You are affected by a Slow spell for 1 minute.",
      "You must make a DC 15 Constitution saving throw or be stunned for 1 round.",
      "You are frightened of the nearest creature for 1 minute.",
      "You can only move by skipping or hopping for the next hour.",
      "You are compelled to dance whenever you hear music for 24 hours.",
      "Your spells have a 25% chance to fail for the next hour (Feywild wild magic interference).",
      "You take 1d6 psychic damage and must make a Wisdom saving throw or be charmed by the nearest fey creature.",
      "You are cursed with bad luck, causing the next attack roll, ability check, or saving throw to be made with disadvantage.",
      "You become allergic to iron, taking 1 damage whenever you touch metal for 24 hours."
    ],
    archfey: [
      "Reality warps around you. All creatures within 30 feet must make a DC 18 Wisdom saving throw or be transported to a random location within 1 mile.",
      "You are banished to the Feywild for 1 minute, returning to the same space (or nearest unoccupied space).",
      "Time moves differently for you. You age 1 year but gain the benefits of a long rest.",
      "You swap places with a random creature within 60 feet.",
      "An Archfey takes interest in you, marking you with their sigil (permanent until removed by Wish or similar magic).",
      "You are affected by a Geas spell to complete a task for an Archfey.",
      "Your memories of the last 24 hours are replaced with false memories of a fey court gathering.",
      "You are transformed into a fey creature of the same CR for 24 hours, retaining your mental abilities.",
      "A portal to the Feywild opens beneath your feet, and you must make a DC 20 Dexterity saving throw or fall through.",
      "Time distortion affects you: 3 days pass for you while only 3 minutes pass in the Material Plane."
    ]
  }
};

// Utility function to get random effect by category
feyEffects.getRandomEffect = function(category = 'all') {
  if (category === 'all') {
    const allEffects = [
      ...this.beneficial,
      ...this.neutral,
      ...this.challenging,
      ...this.archfey
    ];
    return allEffects[Math.floor(Math.random() * allEffects.length)];
  }
  
  const categoryEffects = this[category];
  if (categoryEffects) {
    return categoryEffects[Math.floor(Math.random() * categoryEffects.length)];
  }
  
  return "No effect occurs.";
};

// Get multiple random effects
feyEffects.getMultipleEffects = function(count = 1, category = 'all') {
  const effects = [];
  for (let i = 0; i < count; i++) {
    effects.push(this.getRandomEffect(category));
  }
  return effects;
};

// Get effect by dice roll (deterministic)
feyEffects.getEffectByDiceRoll = function(diceType, category, rollResult) {
  if (!this.diceRollTables[diceType] || !this.diceRollTables[diceType][category]) {
    return "No effect occurs.";
  }
  
  const effects = this.diceRollTables[diceType][category];
  const index = Math.max(0, Math.min(rollResult - 1, effects.length - 1));
  return effects[index];
};

// Roll dice and get effect
feyEffects.rollDiceForEffect = function(diceType, category) {
  const diceMax = {
    'd4': 4,
    'd6': 6,
    'd10': 10
  };
  
  const rollResult = Math.floor(Math.random() * diceMax[diceType]) + 1;
  const effect = this.getEffectByDiceRoll(diceType, category, rollResult);
  
  return {
    diceRoll: rollResult,
    diceType: diceType,
    effect: effect,
    category: category
  };
};

// Export for use in web application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = feyEffects;
}