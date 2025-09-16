// Seelie Court Name Generation Data
// Based on verified research from D&D 5e sources and naming convention analysis
// Research Date: September 16, 2025

const seelieNames = {
  // Seelie Court characteristics: Light, positive themes, floral names, nature-inspired
  // Based on research findings from ./research/feywild_lore/naming_conventions.md
  
  // First name components - nature and light themed
  firstNamePrefixes: [
    "Aur", "Bri", "Cel", "Dae", "Eil", "Fae", "Gil", "Hal", "Ith", "Jol",
    "Kel", "Lum", "Mel", "Nor", "Oak", "Pix", "Qui", "Ros", "Syl", "Thi",
    "Una", "Vel", "Wil", "Xan", "Yel", "Zel"
  ],
  
  firstNameSuffixes: [
    "wen", "lyn", "ara", "iel", "oth", "ina", "eth", "wyn", "iel", "ora",
    "lia", "nia", "ria", "sia", "tia", "via", "xia", "yla", "zara", "ella"
  ],
  
  // Species-specific last name patterns based on research
  speciesLastNames: {
    pixie: [
      "Brightdust", "Glimmerwing", "Sparklefly", "Dewdrop", "Sunbeam",
      "Petaldance", "Moonwhisper", "Starlight", "Goldleaf", "Silverbell",
      "Crystalwing", "Rainbowdust", "Shimmerfly", "Lightdancer", "Fairybell"
    ],
    
    dryad: [
      "Oakenheart", "Willowbough", "Birchsong", "Elmwhisper", "Mapledance",
      "Ashgrove", "Cedarwind", "Pinecone", "Ivytwist", "Fernfrond",
      "Mosscloak", "Rootwalker", "Leafsinger", "Barkweaver", "Treeheart"
    ],
    
    satyr: [
      "Hornedpan", "Wildstep", "Meadowdance", "Vinetwist", "Grasshopper",
      "Hillrunner", "Streamleap", "Forestbound", "Natureheart", "Earthsong",
      "Windpiper", "Sunprancer", "Moonleaper", "Stargazer", "Flowercrown"
    ],
    
    firbolg: [
      "Gentleheart", "Forestguard", "Naturefriend", "Peacekeep", "Kindspirit",
      "Earthwarden", "Treekeeper", "Stonewhisper", "Cloudwalker", "Mistweaver",
      "Shadowstep", "Quietvoice", "Calmwind", "Softfoot", "Trueheart"
    ],
    
    centaur: [
      "Mossscreamer", "Timberlaugh", "Birchconqueror", "Bloomrunner", "Meadowgallop",
      "Sunstride", "Goldenhoof", "Starleaper", "Windrunner", "Flowerdancer",
      "Brightmane", "Swiftbrook", "Dawnracer", "Lightbringer", "Springheart"
    ],
    
    hag: [
      "Auntie Brightblossom", "Grandmother Honeydew", "Wise Moonbeam", "Elder Starwhisper", "Mother Sunflower",
      "Auntie Goldleaf", "Grandmother Dewdrop", "Wise Lightweaver", "Elder Brightmoon", "Mother Rosepetal"
    ],
    
    drow: [
      "Moonwhisper", "Starweaver", "Lightbringer", "Dawnbreaker", "Silverleaf",
      "Brightblade", "Sunseeker", "Goldenheart", "Crystalborn", "Lightdancer"
    ],
    
    highelf: [
      "Gemflower", "Starflower", "Moonwhisper", "Diamonddew", "Goldleaf",
      "Silverwind", "Crystalborn", "Brightstar", "Sunweaver", "Lightbringer"
    ],
    
    woodelf: [
      "Leafwhisper", "Treewalker", "Forestborn", "Greenleaf", "Wildwood",
      "Natureheart", "Earthsong", "Windrunner", "Sunbranch", "Moonbark"
    ],
    
    dragonborn: [
      "Goldscale", "Brightflame", "Sunwing", "Lightbringer", "Starborn",
      "Crystalclaw", "Dawnfire", "Silverscale", "Brighthorn", "Sunheart"
    ],
    
    eladrin: [
      "Springbloom", "Summerlight", "Autumnleaf", "Winterstar", "Seasonheart",
      "Emotionweaver", "Magicborn", "Feylight", "Dreamdancer", "Starweaver"
    ],
    
    changeling: [
      "Brightface", "Trueshape", "Lightform", "Goldmask", "Starshifter",
      "Sunweaver", "Crystalface", "Dawnshape", "Silverform", "Brightmask"
    ]
  },
  
  // Court titles and honorifics based on research
  titles: [
    "of the Summer Court",
    "of the Bright Glade",
    "of the Golden Grove",
    "of the Sunlit Meadow",
    "of the Crystal Stream",
    "of the Flower Crown",
    "of the Morning Dew",
    "of the Singing Birds"
  ]
};

// Export for use in web application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = seelieNames;
}