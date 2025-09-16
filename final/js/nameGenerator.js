// Fey Name Generator
// Based on data from ./data/names/seelie_names.js and ./data/names/unseelie_names.js
// Specifications from ./data/feature_specifications.md

// Seelie Court Name Data
const seelieNames = {
  firstNamePrefixes: [
    "Aur", "Bri", "Cel", "Dae", "Eil", "Fae", "Gil", "Hal", "Ith", "Jol",
    "Kel", "Lum", "Mel", "Nor", "Oak", "Pix", "Qui", "Ros", "Syl", "Thi",
    "Una", "Vel", "Wil", "Xan", "Yel", "Zel"
  ],
  
  firstNameSuffixes: [
    "wen", "lyn", "ara", "iel", "oth", "ina", "eth", "wyn", "iel", "ora",
    "lia", "nia", "ria", "sia", "tia", "via", "xia", "yla", "zara", "ella"
  ],
  
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

// Unseelie Court Name Data
const unseelieNames = {
  firstNamePrefixes: [
    "Mor", "Nyx", "Sha", "Vel", "Grim", "Thorn", "Raven", "Frost", "Night", "Dark",
    "Bane", "Vex", "Hex", "Mal", "Dusk", "Gloom", "Chill", "Ice", "Mist", "Fog",
    "Ash", "Bone", "Scar", "Woe", "Pain", "Fear"
  ],
  
  firstNameSuffixes: [
    "oth", "yx", "ex", "ix", "ax", "eth", "ith", "uth", "yth", "ath",
    "orn", "arn", "ern", "irn", "urn", "ash", "esh", "ish", "osh", "ush"
  ],
  
  houseNames: [
    "House of Shadows", "House of Winter's End", "House of Thorned Crown",
    "House of Midnight", "House of Frozen Tears", "House of Dark Moon",
    "House of Withered Rose", "House of Silent Snow", "House of Black Ice",
    "House of Poisoned Vine", "House of Bitter Cold", "House of Endless Night",
    "House of Fallen Leaves", "House of Barren Branch", "House of Hollow Wind"
  ],
  
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
  
  titles: [
    "of the Winter Court",
    "of the Dark Glade",
    "of the Thorned Grove",
    "of the Midnight Meadow",
    "of the Frozen Stream",
    "of the Poison Crown",
    "of the Evening Mist",
    "of the Silent Woods"
  ]
};

/**
 * Initialize the name generator functionality
 */
window.initializeNameGenerator = function() {
    const generateButton = document.getElementById('generate-name');
    const resultDiv = document.getElementById('name-result');
    
    if (generateButton && resultDiv) {
        generateButton.addEventListener('click', function() {
            generateFeyName();
        });
    }
};

/**
 * Generate a fey name based on selected court and species
 */
function generateFeyName() {
    try {
        const resultDiv = document.getElementById('name-result');
        window.showLoading(resultDiv);
        
        // Get selected court
        const courtRadios = document.querySelectorAll('input[name="court"]');
        let selectedCourt = 'seelie';
        for (const radio of courtRadios) {
            if (radio.checked) {
                selectedCourt = radio.value;
                break;
            }
        }
        
        // Get selected species
        const speciesSelect = document.getElementById('species-select');
        const selectedSpecies = speciesSelect.value;
        
        // Generate name based on court
        let generatedName;
        if (selectedCourt === 'seelie') {
            generatedName = generateSeelieName(selectedSpecies);
        } else {
            generatedName = generateUnseelieName(selectedSpecies);
        }
        
        // Display result with animation delay for better UX
        setTimeout(() => {
            const resultHTML = `
                <div class="bg-black bg-opacity-50 rounded-lg p-6 border border-yellow-500 border-opacity-30">
                    <div class="generated-name mb-4">${generatedName.name}</div>
                    <div class="text-yellow-300 text-lg font-semibold mb-2">${generatedName.title}</div>
                    <div class="text-gray-400 text-sm">
                        ${window.capitalizeFirst(selectedSpecies)} of the ${window.capitalizeFirst(selectedCourt)} Court
                    </div>
                </div>
            `;
            window.displayResult(resultDiv, resultHTML);
        }, 800);
        
    } catch (error) {
        window.handleError(error, document.getElementById('name-result'), 'Failed to generate name. Please try again.');
    }
}

/**
 * Generate a Seelie Court name
 */
function generateSeelieName(species) {
    const firstName = window.getRandomElement(seelieNames.firstNamePrefixes) + 
                     window.getRandomElement(seelieNames.firstNameSuffixes);
    
    const lastName = window.getRandomElement(seelieNames.speciesLastNames[species]);
    const title = window.getRandomElement(seelieNames.titles);
    
    return {
        name: `${firstName} ${lastName}`,
        title: title
    };
}

/**
 * Generate an Unseelie Court name
 */
function generateUnseelieName(species) {
    // Unseelie names can be either house names or constructed names
    const useHouseName = Math.random() < 0.4; // 40% chance for house name
    
    let name, title;
    
    if (useHouseName) {
        const firstName = window.getRandomElement(unseelieNames.firstNamePrefixes) + 
                         window.getRandomElement(unseelieNames.firstNameSuffixes);
        const houseName = window.getRandomElement(unseelieNames.houseNames);
        name = `${firstName} of ${houseName}`;
        title = window.getRandomElement(unseelieNames.titles);
    } else {
        const firstName = window.getRandomElement(unseelieNames.firstNamePrefixes) + 
                         window.getRandomElement(unseelieNames.firstNameSuffixes);
        const lastName = window.getRandomElement(unseelieNames.speciesLastNames[species]);
        name = `${firstName} ${lastName}`;
        title = window.getRandomElement(unseelieNames.titles);
    }
    
    return {
        name: name,
        title: title
    };
}