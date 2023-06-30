// Toggle sidebar
document.getElementById("menuButton").addEventListener("click", function() {
    document.getElementById("sidebar").classList.toggle("open");
});

// Close sidebar when close button is clicked
document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("open");
});

// Set current menu item as active
var menuItems = document.getElementsByClassName("menu-item");
for (var i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("current");
        if (current.length > 0) {
            current[0].classList.remove("current");
        }
        this.classList.add("current");
    });
};

document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const navListItems = document.querySelectorAll('nav ul li a');

    // Show the home section by default
    sections[0].style.display = 'block';

    // Add click event listeners to the navigation links
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = this.getAttribute('href').substring(1);
            // Hide all sections
            sections.forEach(function(section) {
                section.style.display = 'none';
            });
            // Show the target section
            document.getElementById(target).style.display = 'block';
        });
    });

    // Add "current" class to the first link (Home) by default
    navListItems[0].classList.add('current');

    // Add event listener to each link
    navListItems.forEach(link => {
        link.addEventListener('click', function(event) {
            // Remove "current" class from all links
            navListItems.forEach(link => {
                link.classList.remove('current');
            });
            // Add "current" class to the clicked link
            this.classList.add('current');
        });
    });
});

// Dice Roller Code
function createDiceRoller(diceType, diceImageCount) {
    const diceImages = [];
    for (let i = 1; i <= diceImageCount; i++) {
        diceImages.push(`img/${diceType}/${diceType}-${i}.png`);
    }
    const diceImage = document.getElementById(`${diceType}diceImage`);
    const rollButton = document.getElementById(`${diceType}rollButton`);
    let isRolling = false;
    let rollInterval;

    rollButton.addEventListener('click', function() {
        if (!isRolling) {
            isRolling = true;
            let rollCount = 0;
            rollInterval = setInterval(function() {
            diceImage.src = diceImages[rollCount % diceImageCount];
            rollCount++;
            }, 25);
        }
        else {
            clearInterval(rollInterval);
            isRolling = false;
        }
    });

    diceImage.addEventListener('click', function() {
        if (isRolling) {
            clearInterval(rollInterval);
            isRolling = false;
        }
    });
}

createDiceRoller('d4', 4);
createDiceRoller('d6', 6);
createDiceRoller('d8', 8);
createDiceRoller('d10', 10);
createDiceRoller('d12', 12);
createDiceRoller('d20', 20);


// Generators
function generateSentence(generatorId) {
    let wordBank1, wordBank2, wordBank3, wordBank4, wordBank5;

    if (generatorId === 1) { // Feminine Names
        wordBank1 = ["Selest", "Merr", "Fel", "Clair", "Ant", "Nyn", "Yur", "Vir", "Ash", "Luc", "Jo",
            "Valer", "Joce", "Am", "Bay", "Arl", "Mon", "Mir", "Kasan", "Lin", "Iwa", "Neri", "Nep",
            "Ambro", "Pud", "Pun", "O", "Sage", "Barbar", "Sy", "Evo", "I", "Rose", "Fer", "D", "Fae",
            "Gr", "Haz", "Quin", "Rav", "Til", "U", "Wren", "Xen", "Zu"];
        wordBank2 = ["ina", "anna", "in", "igold", "ida", "ess", "ice", "ette", "ia", "seth", "la",
            "anne", "iana", "line", "lee", "eigh", "etha", "ique", "iam", "ica", "dra", "lin", "na",
            "ssa", "ta", "sia", "sage", "O", "ca", "dine", "ris", "ria", "", "nis", "ace"];
        wordBank3 = ["Silent", "Truth", "Young", "Heart", "Terra", "Stone", "Wild", "Glory", "Meadow",
            "Titan", "Cele", "Begi", "Fern", "Hawk", "Wood", "Spirit", "Bronze", "Claw", "Storm",
            "Proud", "Green", "Snake", "Dead", "Till", "Far", "Lion", "Sul", "Jarl", "Thrall"];
        wordBank4 = ["brook", "moon", "breeze", "blood", "maw", "walker", "binder", "blight", "fallow",
            "shade", "brimbor", "son", "way", "crag", "toe", "sworn", "brand", "sun", "beam", "thorne",
            "spark", "woods", "borne", "man", "singer", "brace", "ly", "bearer", "rot", ""];
        wordBank5 = ["The Wise", "The Strong", "The Fearless", "The Old", "The Hopeless", "The Child",
            "The Pathetic", "The Coward", "The Gardener", "The Torch", "The Pitchfork", "The Shield",
            "The Sword", "The Lustrous", "The Rotting", "The Master", "The Skinless", "The Strange",
            "The Flayed", "The Singer", "The Reaper", "The Mage", "The Soilder", "The Priest", "The Grave Digger",
            "The Giver", "The Inventor", "The Leader", "The Whisperer", "The Sharptoothed", "The Dancer",
            "The Young", "The Brave", "The Mangled", "The Fair", "The Blade", "The Chosen", "The Sunbeam",
            "The Shadow", "The Cruel", "The Rich", "The Poor", "The Pure"];
    }
    else if (generatorId === 2) { // Masculine Names
        wordBank1 = ["Nir", "Ka", "Keg", "Oma", "Nor", "Tas", "Kar", "Li", "Wel", "Wic", "Ji", "Ja",
            "Ash", "Art", "Ado", "Rey", "U", "Dome", "Dami", "Ha", "Sa", "Hay", "Ox", "Deve", "Y",
            "Rans", "Wyn", "Chan", "La", "New", "Mal", "Bald", "Pack", "Nico", "K", "Guada", "Dra",
            "Don", "Dawn", "Stra", "Crow", "Med", "Shad", "Zin", "Bar", "Stan", "Mor", "Nord", "Fin",
            "Road", "Bil", "O", "Mit", "Bow", "Cri", "El", "Ilor", "Pon", "Quil", "Va", "Xe"];
        wordBank2 = ["din", "mu", "an", "ri", "well", "so", "el", "am", "borne", "lif", "ley", "ke",
            "us", "nis", "mond", "do", "nic", "ano", "io", "ul", "den", "ford", "rell", "dam", "ler",
            "ne", "bold", "win", "ard", "las", "nox", "lupa", "go", "",];
        wordBank3 = ["Silent", "Truth", "Young", "Heart", "Terra", "Stone", "Wild", "Glory", "Meadow",
            "Titan", "Cele", "Begi", "Fern", "Hawk", "Wood", "Spirit", "Bronze", "Claw", "Storm",
            "Proud", "Green", "Snake", "Dead", "Till", "Far", "Lion", "Sul", "Jarl", "Thrall"];
        wordBank4 = ["brook", "moon", "breeze", "blood", "maw", "walker", "binder", "blight", "fallow",
            "shade", "brimbor", "son", "way", "crag", "toe", "sworn", "brand", "sun", "beam", "thorne",
            "spark", "woods", "borne", "man", "singer", "brace", "ly", "bearer", "rot", ""];
        wordBank5 = ["The Wise", "The Strong", "The Fearless", "The Old", "The Hopeless", "The Child",
            "The Pathetic", "The Coward", "The Gardener", "The Torch", "The Pitchfork", "The Shield",
            "The Sword", "The Lustrous", "The Rotting", "The Master", "The Skinless", "The Strange",
            "The Flayed", "The Singer", "The Reaper", "The Mage", "The Soilder", "The Priest", "The Grave Digger",
            "The Giver", "The Inventor", "The Leader", "The Whisperer", "The Sharptoothed", "The Dancer",
            "The Young", "The Brave", "The Mangled", "The Fair", "The Blade", "The Chosen", "The Sunbeam",
            "The Shadow", "The Cruel", "The Rich", "The Poor", "The Pure"];
    }
    else if (generatorId === 3) { // Race
        wordBank1 = ["Aarakocra", "Aasimar", "Autognome", "Bugbear", "Centaur",
            "Changeling", "Dhampir Lineage", "Dragonborn", "Duergar", "Dwarf",
            "Elf", "Astral Elf", "Eladrin", "Sea Elf", "Shadar-Kai", "Fairy",
            "Firbolg", "Genasi", "Air Genasi", "Earth Genasi", "Fire Genasi",
            "Water Genasi", "Giff", "Gith", "Githyanki", "Githzerai", "Gnome",
            "Deep Gnome", "Goblin", "Goliath", "Grung", "Hadozee", "Half-Elf",
            "Half-Orc", "Halfling", "Harengon", "Hexblood Lineage", "Hobgoblin",
            "Human", "Kalashtar", "Kender", "Kenku", "Kobold", "Leonin",
            "Lizardfolk", "Locathah", "Loxodon", "Minotaur", "Orc", "Owlin",
            "Plasmoid", "Reborn Lineage", "Satyr", "Shadar-Kai", "Shifter",
            "Simic Hybrid", "Tabaxi", "Thri-Kreen", "Tiefling", "Tortle",
            "Triton", "Vedalken", "Verdan", "Warforged", "Yuan-Ti"];
    }
    else if (generatorId === 4) { // Class
        wordBank1 = ["Artificer", "Barbarian", "Bard", "Blood Hunter", "Cleric", "Druid",
            "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"];
    }
    else if (generatorId === 5) { // Background
        wordBank1 = ["Acolyte", "Anthropologist", "Archaeologist", "Astral Drifter", "Athlete",
            "Celebrity Adventurers Scion", "Charlatan", "City Watch / Investigator", "Clan Crafter",
            "Cloistered Scholar", "Courtier", "Criminal", "Entertainer", "Faceless", "Failed Merchant",
            "Far Traveler", "Feylost", "Fisher", "Folk Hero", "Gambler", "Gladiator", "Grinner",
            "Guild Artisan", "Haunted One", "Hermit", "Inheritor", "Investigator", "Knight", "Marine",
            "Mercenary Veteran", "Noble", "Outlander", "Pirate", "Plaintiff", "Rakdos Cultist", "Sage",
            "Sailor", "Shipwright", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Wildspacer"];
    }
    else if (generatorId === 6) { // Alignment
        wordBank1 = ["Lawful", "Neutral", "Chaotic"];
        wordBank2 = ["Good", "Neutral", "Evil"];
    }
    else if (generatorId === 7) { // Grass Forage
        wordBank1 = ["1", "2", "3", "1", "2", "3", "4", "5", "10"];
        wordBank2 = ["Apple(s)", "Carrot(s)", "Tomato(es)", "Pear(s)", "Potato(es)",
            "Pumpkin(s)  (1 Equals 3 Food Items)", "Beetle(s)", "Bee(s)", "Pebble(s)",
            "Stick(s)", "Red Toadstool(s)", "Sunflower(s)", "Rope(s)  (10ft each)",
            "Animal Hide(s)", "Wild Garlic Bulb(s)", "Lizard(s)", "Snail(s)"];
    }
    else if (generatorId === 8) { // Rocky Forage
        wordBank1 = ["1", "2", "3", "1", "2", "3", "4", "5", "10"];
        wordBank2 = ["Angry Scorpion(s), 1 Piercing Damage (each)!", "Small Stone(s), could be good for throwing",
            "Skull-Sized Boulder(s)", "Herb(s)", "Empty Glass Bottle(s)", "Handful(s) of Dirt", "Geode Chunk(s)",
            "Piece(s) of Obsidian", "Piece(s) of Quarts", "Piece(s) of Scrap Metal"];
    }
    else if (generatorId === 9) { // Aquatic Forage
        wordBank1 = ["1", "2", "3", "1", "2", "3", "4", "5", "10"];
        wordBank2 = ["Chunk(s) of Moss", "Seashell(s)", "Pebble(s)", "Fish", "Frog(s)", "Snail(s)",
            "Shrimp", "Crab(s)", "Fish Hook(s)", "Bone(s)", "Gold Coin(s)", "Sprig(s) of Seaweed",
            "Tooth/Teeth", "Bite(s) From Aquatic Worms, 2 piercing damage (each)!",
            "Bite(s) From Leeches, 1 piercing damage (each)!"];
    }
    else if (generatorId === 10) { // Cave Forage
        wordBank1 = ["1", "2", "3", "1", "2", "3", "4", "5", "10"];
        wordBank2 = ["Brief Glimpse(s) Of Something Moving In The Darkness", "Bone(s)",
            "Eyeless Salamander(s). Edible?", "Small Stone(s), could be good for throwing",
            "Unlit Candle(s)", "Chunk(s) of Peat Moss",
            "Many-Legged, Pale creature(s) Brush Past Your Hands", "Edible Mushroom(s)"];
    }
    else {
        // Add more conditions for additional generators if needed
        return;
    }

    const randomWord1 = wordBank1[Math.floor(Math.random() * wordBank1.length)];


    let randomSentence;
    if (generatorId === 1) { // Fem Name
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        const randomWord3 = wordBank3[Math.floor(Math.random() * wordBank3.length)];
        const randomWord4 = wordBank4[Math.floor(Math.random() * wordBank4.length)];
        const randomWord5 = wordBank5[Math.floor(Math.random() * wordBank5.length)];
        randomSentence = `${randomWord1}${randomWord2} ${randomWord3}${randomWord4}  ${randomWord5}`;
    }
    else if (generatorId === 2) { // Masc Name
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        const randomWord3 = wordBank3[Math.floor(Math.random() * wordBank3.length)];
        const randomWord4 = wordBank4[Math.floor(Math.random() * wordBank4.length)];
        const randomWord5 = wordBank5[Math.floor(Math.random() * wordBank5.length)];
        randomSentence = `${randomWord1}${randomWord2} ${randomWord3}${randomWord4}  ${randomWord5}`;
    }
    else if (generatorId === 3) { // Race
        randomSentence = `${randomWord1}`;
    }
    else if (generatorId === 4) { // Class
        randomSentence = `${randomWord1}`;
    }
    else if (generatorId === 5) { // Background
        randomSentence = `${randomWord1}`;
    }
    else if (generatorId === 6) { // Alignment
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        randomSentence = `${randomWord1} ${randomWord2}`;
    }
    else if (generatorId === 7) { // Grass Forage
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        randomSentence = `${randomWord1} ${randomWord2}`;
    }
    else if (generatorId === 8) { // Rocky Forage
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        randomSentence = `${randomWord1} ${randomWord2}`;
    }
    else if (generatorId === 9) { // Water Forage
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        randomSentence = `${randomWord1} ${randomWord2}`;
    }
    else if (generatorId === 10) { // Cave Forage
        const randomWord2 = wordBank2[Math.floor(Math.random() * wordBank2.length)];
        randomSentence = `${randomWord1} ${randomWord2}`;
    }


    if (generatorId === 1) {
        document.getElementById("randomSentence1").textContent = randomSentence;
    }
    else if (generatorId === 2) {
        document.getElementById("randomSentence2").textContent = randomSentence;
    }
    else if (generatorId === 3) {
        document.getElementById("randomSentence3").textContent = randomSentence;
    }
    else if (generatorId === 4) {
        document.getElementById("randomSentence4").textContent = randomSentence;
    }
    else if (generatorId === 5) {
        document.getElementById("randomSentence5").textContent = randomSentence;
    }
    else if (generatorId === 6) {
        document.getElementById("randomSentence6").textContent = randomSentence;
    }
    else if (generatorId === 7) {
        document.getElementById("randomSentence7").textContent = randomSentence;
    }
    else if (generatorId === 8) {
        document.getElementById("randomSentence8").textContent = randomSentence;
    }
    else if (generatorId === 9) {
        document.getElementById("randomSentence9").textContent = randomSentence;
    }
    else if (generatorId === 10) {
        document.getElementById("randomSentence10").textContent = randomSentence;
    }
}
