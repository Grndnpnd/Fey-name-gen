// Unseelie Court Name Generation Data
// Based on verified research from D&D 5e sources and naming convention analysis
// Research Date: September 16, 2025

const unseelieNames = {
  // Unseelie Court characteristics: Dark, winter-themed, poisonous plant inspirations
  // Based on research findings from ./research/feywild_lore/naming_conventions.md
  
  // First name components - dark and winter themed
  firstNamePrefixes: [
    "Mor", "Nyx", "Sha", "Vel", "Grim", "Thorn", "Raven", "Frost", "Night", "Dark",
    "Bane", "Vex", "Hex", "Mal", "Dusk", "Gloom", "Chill", "Ice", "Mist", "Fog",
    "Ash", "Bone", "Scar", "Woe", "Pain", "Fear"
  ],
  
  firstNameSuffixes: [
    "oth", "yx", "ex", "ix", "ax", "eth", "ith", "uth", "yth", "ath",
    "orn", "arn", "ern", "irn", "urn", "ash", "esh", "ish", "osh", "ush"
  ],
  
  // House names - dark and mysterious based on research
  houseNames: [
    "House of Shadows", "House of Winter's End", "House of Thorned Crown",
    "House of Midnight", "House of Frozen Tears", "House of Dark Moon",
    "House of Withered Rose", "House of Silent Snow", "House of Black Ice",
    "House of Poisoned Vine", "House of Bitter Cold", "House of Endless Night",
    "House of Fallen Leaves", "House of Barren Branch", "House of Hollow Wind"
  ],
  
  // Species-specific last name patterns for Unseelie
  speciesLastNames: {
    pixie: [
      "Shadowwing", "Darkdust", "Nightfly", "Poisonsting", "Thornprick",
      "Blackbell", "Grimwhisper", "Vexwing", "Hexdancer", "Cursedust",
      "Banewing", "Sorrowfly", "Gloomsprite", "Duskdancer", "Nightbell"
    ],
    
    dryad: [
      "Deadbark", "Witherbough", "Thornheart", "Poisonroot", "Blackleaf",
      "Rotwood", "Cursedtree", "Blightbark", "Shadowbough", "Darkgrove",
      "Nightshade", "Hemlock", "Wolfsbane", "Deathcap", "Belladonna"
    ],
    
    satyr: [
      "Darkhorn", "Shadowhoof", "Nightstep", "Grimleap", "Thornfoot",
      "Blackpan", "Cursedhorn", "Vexhoof", "Hexstep", "Baneleap",
      "Sorrowpipe", "Gloomprancer", "Duskdancer", "Nightrunner", "Shadowbound"
    ],
    
    firbolg: [
      "Grimheart", "Shadowguard", "Darkwarden", "Nightkeeper", "Thornspirit",
      "Blackstone", "Cursedstep", "Vexvoice", "Hexwhisper", "Banewalker",
      "Sorrowkeeper", "Gloomwarden", "Duskguard", "Nightwatch", "Shadowfoot"
    ],
    
    centaur: [
      "Darkgallop", "Shadowhoof", "Nightstride", "Grimrunner", "Thornmane",
      "Blackhoof", "Cursedstep", "Vexgallop", "Hexrunner", "Baneleaper",
      "Sorrowstride", "Gloomhoof", "Duskrunner", "Nightgallop", "Shadowmane"
    ],
    
    hag: [
      "Grandmother Nightshade", "Auntie Poisonroot", "Elder Darkbane", "Mother Thornheart", "Wise Shadowweaver",
      "Grandmother Hexbrew", "Auntie Cursedclaw", "Elder Grimwhisper", "Mother Vexbane", "Wise Darkblight"
    ],
    
    drow: [
      "Shadowweaver", "Darkblade", "Nightborn", "Voidheart", "Blackmoon",
      "Grimwhisper", "Vexbane", "Hexborn", "Cursedstep", "Shadowdancer"
    ],
    
    highelf: [
      "Darkstar", "Shadowweaver", "Nightbane", "Grimlight", "Vexborn",
      "Hexwhisper", "Cursedmoon", "Blackcrystal", "Shadowgem", "Darkflower"
    ],
    
    woodelf: [
      "Deadleaf", "Shadowbark", "Nightwood", "Grimroot", "Thornbranch",
      "Blacktree", "Cursedleaf", "Vexbark", "Hexwood", "Darkbough"
    ],
    
    dragonborn: [
      "Blackscale", "Shadowflame", "Nightwing", "Grimfire", "Darkhorn",
      "Vexclaw", "Hexscale", "Cursedflame", "Shadowborn", "Nightfire"
    ],
    
    eladrin: [
      "Winterfrost", "Autumndeath", "Springblight", "Summerdark", "Seasonbane",
      "Grimdream", "Shadowfey", "Nightemotion", "Darkmagic", "Vexweaver"
    ],
    
    changeling: [
      "Shadowface", "Darkshape", "Nightform", "Grimask", "Vexshifter",
      "Hexface", "Cursedform", "Blackmask", "Shadowshape", "Darkshift"
    ]
  },
  
  // Court titles and honorifics based on research
  titles: [
    "of the Winter Court",
    "of the Dark Glade",
    "of the Thorned Grove",
    "of the Midnight Meadow",
    "of the Frozen Stream",
    "of the Poison Crown",
    "of the Evening Mist",
    "of the Silent Woods"
  ],
  
  // Notable Unseelie figures from research
  notableFigures: [
    "Queen of Air and Darkness",
    "Potentate Sammanar"
  ]
};

// Export for use in web application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = unseelieNames;
}