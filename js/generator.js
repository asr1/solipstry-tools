	//Global Lists
	var words;
 	var places = ["Apple",
				"Autumn",
				"Babbler",
				"Back",
				"Band",
				"Bane",
				"Bang",
				"Bark",
				"Bay",
				"Beak",
				"Beam",
				"Bean",
				"Bell",
				"Bend",
				"Bird",
				"Birth",
				"Bite",
				"Black",
				"Blade",
				"Blast",
				"Blaster",
				"Blood",
				"Blue",
				"Blunder",
				"Board",
				"Boat",
				"Bolt",
				"Bolt",
				"Bone",
				"Born",
				"Break",
				"Briar",
				"Brisk",
				"Buck",
				"Bump",
				"Bunker",
				"Burn",
				"Burst",
				"Cap",
				"Chain",
				"Chander",
				"Chill",
				"Chime",
				"Chowder",
				"Chunder",
				"Clash",
				"Coal",
				"Com",
				"Crack",
				"Crash",
				"Crest",
				"Crimson",
				"Cross",
				"Crow",
				"Dark",
				"Dark",
				"Dawn",
				"Death",
				"Deep",
				"Dent",
				"Dome",
				"Doom",
				"Down",
				"Drain",
				"Dread",
				"Drive",
				"Dwarf",
				"Ear",
				"Elder",
				"Eve",
				"Ever",
				"Eyes",
				"Fall",
				"Fire",
				"Flab",
				"Flash",
				"Flip",
				"Fluid",
				"Folly",
				"Foot",
				"Fort",
				"Fox",
				"Free",
				"Frost",
				"Fruit",
				"Gate",
				"Glade",
				"Glass",
				"Glen",
				"Glory",
				"Golden",
				"Grab",
				"Grass",
				"Greed",
				"Green",
				"Grey",
				"Grid",
				"Ground",
				"Grove",
				"Growth",
				"Guard",
				"Hack",
				"Hallow",
				"Harvest",
				"Haven",
				"Hawk",
				"Hill",
				"Hole",
				"Hollow",
				"Horn",
				"House",
				"Hydra",
				"Ice",
				"Idle",
				"Jest",
				"Jolt",
				"Jump",
				"Keep",
				"Kill",
				"Knell",
				"Knight",
				"Knot",
				"Lake",
				"Lance",
				"Launch",
				"Lens",
				"Light",
				"Log",
				"Loop",
				"Maker",
				"March",
				"Mark",
				"Mirth",
				"Mist",
				"Musket",
				"Nail",
				"Need",
				"News",
				"Night",
				"Out",
				"Pasture",
				"Path",
				"Plant",
				"Port",
				"Pot",
				"Power",
				"Pressure",
				"Project",
				"Query",
				"Quest",
				"Quick",
				"Quip",
				"Rake",
				"Raven",
				"Red",
				"Regret",
				"Rend",
				"Render",
				"Ring",
				"Rock",
				"Rod",
				"Roll",
				"Roll",
				"Rumble",
				"Runner",
				"Sanctuary",
				"Seat",
				"Secret",
				"Seed",
				"Sentinel",
				"Shack",
				"Shade",
				"Shale",
				"Shallow",
				"Shame",
				"Shard",
				"Shave",
				"Shaven",
				"Shed",
				"Ship",
				"Short",
				"Short",
				"Shot",
				"Shutter",
				"Silver",
				"Slam",
				"Slip",
				"Spark",
				"Speed",
				"Spell",
				"Spin",
				"Spirit",
				"Spit",
				"Splint",
				"Split",
				"Spring",
				//"Spurt",
				"Staff",
				"Stag",
				"Steam",
				"Steel",
				"Stem",
				"Stick",
				"Still",
				"Star",
				"Stop",
				"String",
				"Sword",
				"Thorn",
				"Throw",
				"Thunder",
				"Tire",
				"Toll",
				"Ton",
				"Tooth",
				"Top",
				"Traveller",
				"Tree",
				"Tri",
				"Trim",
				"Troll",
				"Tumble",
				"Twist",
				"Under",
				"Vent",
				"View",
				"Vile",
				"Ville",
				"Wake",
				"Wand",
				"Ware",
				"Wary",
				"Watch",
				"Water",
				"Way",
				"Weather",
				"Weed",
				"While",
				"Whisk",
				"Whisker",
				"Wild",
				"Wish",
				"Wolf",
				"Wood",
				"Wrangle",
				"Yellow"];
				
	var fantasyNames = [
				"Ad",
				"Adin",
				"Ag",
				"Bek",
				"Berk",
				"Brim",
				"Brin",
				"Brun",
				"Cop",
				"Char",
				"Chur",
				"Cur",
				"Cus",
				"Dain",
				"Dar",
				"Dek",
				"Die",
				"Din",
				"Dis",
				"Dor",
				"Drak",
				"Drake",
				"Dred",
				"Drik",
				"Dun",
				"Ed",
				"Fin",
				"For",
				"Forg",
				"Frog",
				"Fum",
				"Fur",
				"Gar",
				"Ger",
				"Garth",
				"Gon",
				"Graf",
				"Grap",
				"Grat",
				"Grath",
				"Grid",
				"Grim",
				"Grind",
				"Grum",
				"Gun",
				"Hag",
				"Hap",
				"Hel",
				"Ica",
				"Icus",
				"Ja",
				"Kik",
				"Kil",
				"Kor",
				"Kris",
				"Mac",
				"Mar",
				"Max",
				"Mer",
				"Morg",
				"Or",
				"Rak",
				"Ren",
				"Rend",
				"Rick",
				"Rid",
				"Rik",
				"Rock",
				"Roy",
				"Run",
				"Rune",
				"Rus",
				"Sa",
				"Sik",
				"Steel",
				"Stell",
				"Seph",
				"Shea",
				"Sif",
				"Syf",
				"Syph",
				"Tan",
				"Ther",
				"Thor",
				"Thud",
				"Thun",
				"Tin",
				"Tor",
				"Tra",
				"Ul",
				"Vis",
				"Vok",
				"Wad",
				"Worth"];
				
//Wordlist objects contain the values of each entry in the select dropdown
var wordList = {"fantasy" : fantasyNames, "places" : places};
words = wordList[document.getElementById("genPick").value];//Initialize to the default.	
var generate = generateWord;

var jobs = [
"Actor",
"Animal Tamer",
"Archeologist",
"Architect",
"Artisan",
"Artist",
"Assassin",
"Author",
"Ballerina",
"Barber",
"Bard",
"Bartender",
"Beggar",
"Birdkeeper",
"Blacksmith",
"Bookie",
"Bootlegger",
"Boxer",
"Boy",
"Brewman",
"Buckaroo",
"Businessman",
"Butcher",
"Butler",
"Centurion",
"Chandler",
"Chauffer",
"Chef",
"Child",
"Cleric",
"Clown",
"Cordwainer",
"Cowboy",
"Crime boss",
"Crime lord",
"Criminal",
"Cultist",
"Custodian",
"Dancer",
"Decker",
"Delinquent",
"Demon",
"Detective",
"Doctor",
"Drug lord",
"Drunkard",
"Duchess",
"Duke",
"Elder",
"Electrician",
"Engineer",
"Explorer",
"Fanatic",
"Farmer",
"Fireman",
"Fisherman",
"Garbage man",
"Gardener",
"Ghost",
"Girl",
"Gladiator",
"Glassblower",
"Goblin",
"Grave robber",
"Grocer",
"Groundskeeper",
"Guard",
"Gumshoe",
"Haberdasher",
"Henchman",
"Historian",
"Hobo",
"Hostess",
"Hunter",
"Inquisitor",
"Inventor",
"Janitor",
"Jester",
"Jeweler",
"Judge",
"Juggler",
"Juvenile",
"King",
"Knacker",
"Knight",
"Laborer",
"Lady",
"Lawyer",
"Lecturer",
"Legionnaire",
"Lenscrafter",
"Librarian",
"Lifeguard",
"Lord",
"Madam",
"Mafioso",
"Maid",
"Mailman",
"Maintancance worker",
"Man",
"Mayor",
"Mechanic",
"Merchant",
"Messenger",
"Mime",
"Miner",
"Miser",
"Monk",
"Mortician",
"Mountie",
"Necromancer",
"Newscaster",
"Ninja",
"Noble",
"Nun",
"Nurse",
"Painter",
"Parent",
"Pauper",
"Peasant",
"Performer",
"Person",
"Pharmicist",
"Philanthropist",
"Pickpocket",
"Pilot",
"Pimp",
"Pirate",
"Plumber",
"Police Officer",
"Politician",
"Priest",
"Prince",
"Princess",
"Prison Guard",
"Prisoner",
"Professor",
"Programmer",
"Prostitute",
"Protester",
"Queen",
"Ranch hand",
"Rancher",
"Rascal",
"Rigger",
"Rival",
"Samurai",
"Scholar",
"Scientist",
"Scientist",
"Scrivener",
"Sculptor",
"Seamstress",
"Servant",
"Signer",
"Singer",
"Slaver",
"Sleuth",
"Smuggler",
"Soldier",
"Spy",
"Spy",
"Stable boy",
"Storyteller",
"Stranger",
"Student",
"Surgeon",
"Swimmer",
"Tailor",
"Teacher",
"Theif",
"Thug",
"Time traveler",
"Tourist",
"Undertaker",
"Vet",
"Veteran",
"Wainsmith",
"Wainwright",
"Waiter",
"Warden",
"Warrior",
"Well-digger",
"Whitesmith",
"Witch",
"Widow",
"Widower",
"Wizard",
"Woman",
"Zealout",
"Zookeper"
]

var actions = [
]

var damageTypes =["Acid",
				"Air",
				"All",
				"Arcane",
				"Blunt",
				"Cold",
				"Falling",
				"Fire",
				"Fire",
				"Frost",
				"Ice",
				"Light",
				"Lightning",
				"Peircing",
				"Physical",
				"Plasma",
				"Shadow",
				"Sonic",
				"Water"]
	
var clothing=["Necklace",
	"Hat",
	"Belt",
	"Buckle",
	"Zipper",
	"Glasses",
	"Wristwatch",
	"Phone",
	"Shoes",
	"Pants",
	"Pantlegs",
	"Inseam",
	"Earrings",
	"Nose Ring",
	"Lip Ring",
	"Navel Ring",
	"Shirt",
	"Coat",
	"Jacket",
	"Tattoo",
	"Scar",
	"Socks",
	"Mask"]
	
var ingredientState=[
	"borrowed",
	"crushed",
	"cubed",
	"diced",
	"filleted",
	"ground",
	"hand-made",
	"minced",
	"stolen"
]	
	
var animals=["Ants",
			"Bears",
			"Bees",
			"Birds",
			"Bobcats",
			"Cats",
			"Cows",
			"Crows",
			"Deer",
			"Dogs",
			"Eagles",
			"Elephants",
			"Elk",
			"Falcons",
			"Fish",
			"Flies",
			"Gazelle",
			"Giraffes",
			"Goats",
			"Gorillas",
			"Hawks",
			"Horses",
			"Kangaroos",
			"Lions",
			"Moles",
			"Monkeys",
			"Moose",
			"Owls",
			"Panthers",
			"Pelicans",
			"Penguins",
			"Pigs",
			"Rodents",
			"Seal",
			"Sheep",
			"Tigers",
			"Walrii",
			"Wasps",
			"Wolves",
			"Zebras",]
			  
var mysticBeasts=["Dinosaurs",
				"Dragons",
				"Giants",
				"Centaurs",
				"Manticores",
				"Phoenices",
				"Sphinxes",
				"Unicorns"]				
	
var manDescrip=[
	"wicked",
	"poor",
	"honest",
	"righteous",
	"rich",
	"dead",
	"married",
	"unmarried"
]
	
var tangibles=[
	"Bones",
	"Blueberries",
	"Raspberries",
	"Berries",
	"Clothing, torn",
	"A possession, destroyed",
	"Noose, never used",
	"Bottles",
	"Copper",
	"Well-used noose",
	"Iron",
	"Diamonds",
	"Spices",
	"Heirlooms",
	"Thorns",
	inheritance,
	deadItem
]				

var givables=[
	"A secret",
	"A life"
]

var lifeTakeables=[
	"taken",
	"created",
	"spared"
	]

var intangibles=[
	"The anger of a gentle man",
	"a first act of corruption",
	"A wish",
	"An act of redemption",
	"Forgiveness",
	"The destruction of something  beautiful",
	"An apology",
	"A confession",
	"Sorrow",
	"A memory",
	"Tears",
	"A lie",
	"A vow, broken",
	"The facing of a fear",
	stormWater,
	given,
	lifeTake,
	concepts,//I want this to come up more often, and this is easier than changing getSomethingWeighted() to take in a function instead of an array.
	concepts,
	concepts,
	concepts,
	concepts,
	concepts,
	kiss
]
			
var ingredients=[
				flowers,
				getTangible,
				intangibles]				
				
var summonables =[
			  water,
			  animals,
			  ingredients,
			  mysticBeasts,
			  "Beetles",
			  "Bones",
			  "Trees",
			  "Smoke",
			  "Grass blades"]			  
		
var solvables=[
	animals,
	mysticBeasts,
	jobs
]
		
var items =["Amulet",
			"Armor",
			"Axe",
			"Badge",
			"Bar of soap",
			"Baseball bat",
			"Battery",
			"Battleaxe",
			"Bell",
			"Bone",
			"Boots",
			"Bottle",
			"Bowler Hat",
			"Bracelet",
			"Broach",
			"Can of spray paint",
			"Cane",
			"Cell phone",
			"Chalk",
			"Charm",
			"Chewing gum",
			"Club",
			"Codpiece",
			"Coin",
			"Compass",
			"Crossbows",
			"Cuff links",
			"Dagger",
			"Deck of cards",
			"Earring",
			"Emerald",
			"Fedora",
			"Fishing Rod",
			"Flail",
			"Flashlight",
			"Flute",
			"Gauntlet",
			"Gargoyle",
			"Gem",
			"Glasses",
			"Gloves",
			"Goggles",
			"Guitar",
			"Gun",
			"Hammer",
			"Hand mirror",
			"Hourglass",
			"Hat",
			"Headset",
			"Horn",
			"Jacket",
			"Key",
			"Kneepads",
			"Knife",
			"Lighter",
			"Locket",
			"Longbow",
			"Lute",
			"Mace",
			"Magnet",
			"Magnifying glass",
			"Monocle",
			"Motorcycle",
			"Necklace",
			"Painting",
			"Pebble",
			"Pelt",
			"Pickaxe",
			"Pin",
			"Pocketwatch",
			"Potion",
			"Rapier",
			"Ring",
			"Rod",
			"Sandals",
			"Screwdriver",
			"Shield",
			"Shorts",
			"Shovel",
			"Sombrerro",
			"Spear",
			"Staff",
			"Sweatervest",
			"Tin can",
			"Toupee",
			"Tophat",
			"Torch",
			"Totem",
			"Toy soldier",
			"Trident",
			"Twine",
			"Vest",
			"Wand",
			"Warhammer",
			"Whip",
			"Whistle",
			"Wristwatch"];
	
var senses=["taste",
			"feel",
			"smell",
			"see",
			"hear"]
	
var skills=["Alteration",
			"Athletics",
			"Block",
			"Chemistry",
			"Craft",
			"Creation",
			"Destruction",
			"Disguise",
			"Engineering",
			"Enlightenment",
			"Escape",
			"Heavy armor",
			"Interaction",
			"Knowledge",
			"Language",
			"Light armor",
			"Medicine",
			"Melee Weapon",
			"Perception",
			"Ranged",
			"Restoration",
			"Ride/Drive",
			"Security",
			"Sense Motive",
			"Sleight of Hand",
			"Survival",
			"Stealth",
			"Unarmed Combat"]			
			
//Enchantments	(including function calls), main effects.		
var postEffects=[resist,
				//breathe,
				deals,
				summon,
				ringing,
				extraHP,
				regen,
				ages,
				attr,
				knowNearest,
				growShrink,
				moveItem,
				shrinkCurse,
				ignition,
				pointDir,
				shapeshift,
				smells,
				sounds,
				lockpick,
				color,
				onMiss,
				drawings,
				skill,
				turnBack,
				bond,
				"of invisibility",
				"of night-vision",
				"of silence",
				"of fireballs",
				"of telepathy",
				"of illumination",
				"of incredible weight",
				"of underwater breathing",
				"of water-walking",
				"on a rope",
				"that makes the user appear unusually attractive",
				"that makes the user appear particularly unattractive",
				"that makes constables and law enforcement pay extra attention to the wielder",
				"that makes constables and law enforcement pay little attention to the wielder",
				"that allows the wielder to understand all languages",
				"that allows the wielder to listen while sleeping",
				"that gives the wielder the ability to teleport between mirrors",
				"that allows the wielder to automatically dodge one attack per day",
				"that allows the wielder to reroll one attack per day",
				"that allows the wielder to walk through walls",
				"that allows the wielder to teleport between any two visible shadows",
				"that can destroy all light sources in sight.",
				"that can create a mirror on any flat surface",
				"that ensures the wielder will win the next competition they enter",
				"that makes all creatues the wielder rides happy",
				"that renders the wielder unable to lie",
				"that makes the brightness of things correspond to their loudness",
				"that acts as a lightning rod",
				"that doubles all healing its wielder does",
				"that sings a faint lullaby every night",
				"that looks as if its seen better days",
				"that seems smaller than usual",
				"that allows the wielder to instantly appraise all gems",
				"that imparts upon the wielder specific details of how every corpse they see died",
				"that constantly chants the names of every body of water within a mile",
				"that makes merchants want to cut a bargain",
				"that amplifies every sound the wielder makes",
				"that muffles every sound the wielder makes",
				"that allows the wielder to attack from an additional square away",
				"that marks the wielder as a member of every known guild",
				"that ensures safe passage from all masons and builders",
				"that bears an emblem known to no man, but respected by all criminals",
				"that marks the wielder for death",
				"that infuriates all animals who see it",
				"that pushes anyone hit by it one square away",
				"that has an odd way of getting lost",
				"that renders the wielder incapable of walking in a straight line",
				"that gives off heat like a fire",
				"that can burrow into the ground",
				"that allows the wielder the ability to see through walls",
				"that renders the wielder impervious to the cold",
				"that removes the wielder's need to breathe",
				"that removes the wielder's need to eat",
				"that can be summoned or dismissed at will",
				"that knows the memories of everything the wielder touches",
				"that renders the wielder unable to speak the truth",
				"that has a strange pull towards items made of iron",
				"that buzzes faintly",
				"that is hot to the touch",
				"that forces the wielder to always grant combat advantage",
				"that allows the wielder to stand as a free action",
				"that allows the wielder to shift an extra square",
				"that renders the wielder immune to opportunity attacks",
				"that is cold to the touch",
				"that seems to grow and shrink at random times",
				"that is prettier at night",
				"that reminds you of your mother",
				"that knows and shares the secrets of its previous wielders",
				"that knows the location of all keys",
				"that renders the wielder fireproof",
				"that generates a perpetual raincloud above the user",
				"that renders the wielder imprevious to weather effects",
				"that always returns when thrown",
				"that seems to want to crawl away",
				"that allows the wielder to climb any surface at their normal walking speed",
				"that allows the wielder to walk on walls",
				"that renders the wielder impervious to the next five ranged attacks",
				"that can absorb the next spell cast at the wielder, and then cast it for free once a day",
				"that seems to be made from a series of impossible angles",
				"that deals whatever type of damage was last dealt to its wearer",
				"that makes animals friendly to the wielder.",
				"which cannot be willfully given away, only stolen",
				"which cannot be stolen, only willfully given away",
				"which cures all ails of those the wielder touches, transferring them to the wielder",
				"which grants flight to its wearer",
				"which makes the wielder appear invisible to mirrors and cameras",
				"which produces random weekly hallucinations in the wielder",
				"which reduces the wielder's HP by 10%",
				"which renders the wielder unable to become drunk",
				"which whispers the thoughts of everyone the wielder kills",
				"which will regenerate the last wielder 24 hours after his or her death, provided no one touches it in that time"]
 
var fears=[
	animals,
	mysticBeasts,
]

var fear=[
	items,
	jobs,
]	

var questVerbs=[
	"Asks",
	"Appoints you as a champion",
	"Assigns",
	"Begs",
	"Blackmails",
	"Bribes",
	"Convinces",
	"Demands",
	"Desires",
	"Dictates that",
	"Encourages",
	"Extorts",
	"Hires",
	"Implores",
	"Offers you riches",
	"Orders",
	"Requests",
	"Requires",
	"Threatens",
	"Will pay",]
	
var questMeat=[
	apocalypse,
	assassinate,
	avenge,
	infiltrate,
	investigate,
	itemQuest,
	scout,
	solve,
	"Act as courier, no questions asked",
	"Collect taxes",
	"Conduct a census",
	"Escort them across the land",
	"Find them a spouse",
	"Fix an election",
	"Free a convict",
	"Serve as bodyguard at a wedding",
	"Settle their debts"
]

var investigatables=[
	"Murder",
	"Theft",
	"Crime",
	abandonned,
	missing,
	haunted,
]

var abandonables=[
	"House",
	"Village",
	"Boat",
	"Shop",
	"Outhouse",
	"Bathhouse",
	"Schoolhouse",
	"Schoolbus",
	"Space ship",
	"Space station",
	"Bus station",
	"Bus stop",
	"Library",
	"Hotel",
	"Apartment",
	"Sewer",
	"Graveyard"
]

var missables=[
	abandonables,
	animals
]

var questGiver=[
	jobs,
	face,
	"Ancient law",
	"Anonymous benefactor",
	"Corpse",
	"Disembodied voice",
	"Dream",
	"Email",
	"Former lover",
	"Frequent hallucination",
	"Government officer",
	"Letter",
	"Letter in your bed",
	"Message in a bottle",
	"Missive",
	"Mistress",
	"Mysterious painting",
	"Neighbor",
	"Note in your pocket",
	"Old flame",
	"Phone call",
	"Piece of graffiti",
	"Poster",
	"Persistent nightmare",
	"Rival from your past",
	"Sudden urge",
	"Superior officer",
	"Telegram",
	"Text message",
	"Threat of violence",
	"Unavaidable pain",
]

var apocalypseInteracts=[
	"Start",
	"Delay",
	"End",
	"Lead",
	"Prevent",
	"Restart",
	"Survive"
]

var familyMembers=[
	"Aunt",
	"Brother",
	"Child",
	"Children",
	"Daughter",
	"Father",
	"Grandfather",
	"Grandmother",
	"Husband",
	"Mother",
	"Sister",
	"Son",
	"Spouse",
	"Twin"
]

var avengables=[
	animals,
	familyMembers,
	"Ancestors",
	"Business",
	"Family",
	"Honor",
	"Sacrifice",
	"Self"
]

var faceLocations=[
	"Air",
	"Dirt",
	"Fire",
	"Mud",
	"Sky",
	"Water",
]

var infiltrateable=[
	"A secret organization",
	enemyLoc
]

var directions=[
	"North",
	"East",
	"South",
	"West",
	"Northeast",
	"Northwest",
	"Southwest",
	"Southeast"
]

var adjectives=[
getHair,
getEyes,
"Ambitious",
"Amorous",
"Angry",
"Angular",
"Attractive",
"Beautiful",
"Benevolent",
"Birdlike",
"Blind",
"Blistered",
"Boorish",
"Brave",
"Brisk",
"Bubbly",
"Charismatic",
"Charming",
"Cheery",
"Chivalrous",
"Chubby",
"Cunning",
"Dark-skinned",
"Deaf",
"Deformed",
"Dexterous",
"Dishonorable",
"Downtrodden",
"Enigmatic",
"Exuberant",
"Fat",
"Fearless",
"Firm",
"Flabby",
"Flighty",
"Foppish",
"Freckled",
"Gainly",
"Gnarled",
"Happy",
"Hawkish",
"Hideous",
"Homeless",
"Honorable",
"Honorable",
"Hungry",
"Impoverished",
"Intelligent",
"Kind",
"Lazy",
"Lecherous",
"Leprous",
"Light-skinned",
"Handsome",
"Meticulous",
"Methodical",
"Driven",
"Insane",
"Loving",
"Malevolent",
"Merciless",
"Mole-pocked",
"Muscular",
"Naked",
"Old",
"One-armed",
"One-handed",
"Optimistic",
"Ornery",
"Pale",
"Pessimistic",
"Poor",
"Portly",
"Pregnant",
"Racist",
"Ruthless",
"Sarcastic",
"Scarred",
"Scrawny",
"Short",
"Sick",
"Sleepy",
"Slim",
"Slobby",
"Sloppy",
"Snappy",
"Sneezy",
"Snippy",
"Spectacled",
"Stern",
"Strong",
"Stumpy",
"Stupid",
"Tall",
"Thin",
"Ugly",
"Volumptuous",
"Wealthy",
"Well-dressed",
"Wide",
"Wise",
"Witty",
"Wolfish",
"Wrinkly",
"Young"]
 
var colors=["Red",
			"Blue",
			"Green",
			"Yellow",
			"Orange",
			"Indigo",
			"Violet",
			"Fuchsia",
			"Cyan",
			"Maroon",
			"Black",
			"White",
			"Crimson",
			"Brown",
			"Rainbow",
			"Grey",
			"Turqouise",
			"Teal",
			"Pink",
			"Purple",
			"Piss-yellow"];
 
 //Mostly adjectives
var preEffects=[
				"Ancient",
				"Bent",
				colors,
				"Bejeweled",
				 "Broken",
				"Cloth",
				 "Cold",
				 "Crystal",
				 "Cursed",
				 "Enormous",
				 "Ever-glowing",
				"Flamethrowing",
				"Flying",
				"Grotesque",
				"Hairy",
				"Heavy",
				"Haunted",
				"Hot",
				"Intelligent",
				"Jagged",
				"Old-fashioned",
				"Regal",
				"Rusty",
				"Sacrificial",
				"Singing",
				"Smooth",
				"Soft",
				"Stone",
				"Talking",
				"Tacky",
				"Thorny",
				"Tiny",
				"Ugly",
				"Wet",
				"Wooden"];

var oftenness=[
	"Always",
	"Frantically",
	"Idly",
	"Constantly",
	"Occassionally",
	"Once in a while",
	"Every now and then",
	"More often than not"
]				
				
var frequency=["Per day",
			   "Per hour",
			   "Per year",
			   "Per second",
			   "At once",
			   "Per minute",
			   "Per round",
			   "Per lifetime",
			   "Each time a crime is committed by the wielder",
			   "Until everyone who witnessed it has died",
			   "Per week"];

var person=[
	"Man",
	"Murderer",
	"Woman"
]
			   
var units=[
	"Cups",
	"Drops",
	"Gallons",
	"Grams",
	"Ounces",
	"Pinches",
	"Pounds",
	"Tablespoons",
	"Teaspoons"
			]		   
 
 var waterUnits=["Gallons",
				 "Buckets",
				 "Puddles",
				 "Lakes",
				 "Ounces",
				 "Liters",
				 "Milliliters",
				 "Pounds",
				 "Tons",
				 "Bathtubs",
				 "Bottles"];

var seekables=[
	"Comfort",
	"Love",
	"Revenge",
	"Solace",
	"Answers",
	"Money"
]
				 
var timeUnits=["Seconds",
			   "Minutes",
			   "Hours"]
			   
var lengthUnits=["Inches",
				"Millimeters",
				"Feet",
				"Centimeters",
				"Meters",
				"Yards",
				"Miles"]
			
//Any non skill that can be increased mostly			
var attr=["Speed",
		  "Strength",
		  "Armor Class",
		  "Fortitude",
		  "Luck",
		  "Charisma",
		  "Will",
		  "Reflex",
		  "Dexterity",
		  "Intelligence",
		  "Wisdom",
		  "Constitution"];

//The state of flowers				
var flowerState=["Crushed",
				 "Freshly-Picked",
				 "Ground",
				 "Rare",
				 "Common",
				 "Exotic",
				 "Dying",
				 "Newly-sprouted",
				 "Ancient",
				 "Foreign"]
		  
var flowerTypes=["Tulips",
				 "Roses",
				 "Daffodils",
				 "Sunflowers",
				 "Dandelions",
				 "Lillies",
				 "Thorns",
				 "Oak Petals",
				 "Willow Leaves",
				 "Maple Leaves",
				 "Bark",
				 "Baby's breath",
				 "Carnations",
				 "Forget-me-not",
				 "Foxgloves",
				 "Thistles",
				 "Poison Oak",
				 "Poison Ivy",
				 "Fern",
				 "Hyacinth",
				 "Iris",
				 "Larkspurs",
				 "Lavenders",
				 "Marigolds",
				 "Orchids",
				 "Peony",
				 "Snapdragon",
				 "Tulips",
				 "Wildflower",
				 "Chrysanthemums"]
	
var boneSourceType=["Freshly-killed",
					"Living",
					"Newborn",
					"Ancient"]
	
var speakStyle=[
	"Loud",
	"Quietly",
	"Often", 
]
	
var boneSource=[animals,
				mysticBeasts,
				"Human"]
		
var npcNatReact=[
	"Sweating",
	"Drooling",
	"Blinknig",
	"Glancing around",
	"Breathing heavily",
	"Holding their breath",
	"Staring",
	"Drifting off",
	"Falling asleep",
	"Daydreaming",
	"Licking their lips",
	"Barring their teeth",
	"Smiling",
	"Frowning",
	"Grinning",
	"Glaring",
	"Scowling",
	"Furrowing"]
	
var adverbs=["Alluringly",
	"Almost",
	"Apparently",
	"Appealingly",
	"Barely",
	"Blatantly",
	"Cautiously",
	"Discretely",
	"Disturbingly",
	"Extremely",
	"Extremely",
	"Fairly",
	"Ironically",
	"Methodically",
	"Nearly",
	"Noticeably",
	"Obsessively",
	"Obviously",
	"Oddly",
	"Overly",
	"Overtly",
	"Overwhelmingly",
	"Patiently",
	"Plainly",
	"Predictably",
	"Quietly",
	"Quite",
	"Rather",
	"Reasonably",
	"Ruthlessly",
	"Seemingly",
	"Strangely",
	"Subtly",
	"Uncompromisingly",
	"Unusually",
	"Very",
	"Warmly"]	
	
var races=[
	"Humans",
	"Elves",
	"Dwarves",
	"Halfings",
	"Aliens",
	"Vampires",
	"Animals",
	"Minotaurs",
	mysticBeasts,
	animals
]
	
var firstable=[
	"first",
	"last",
	"most recent"
	]	
	
var groups=[
	"The youth",
	"The old",
	"The righteous",
	"The innocent",
	"The damned",
	"Females",
	"Males",
	"Adults",
	races,
	getBiomePeople
]	
	
var language =[
	speakTo,
	"French",
	"German",
	"English",
	"Incomprehensible grunts",
	"A series of grunts and moans",
	"Incomprehensible jargon",
	"antiquated terms",
	"Longwinded stories",
	"complex similies",
	"Quaint anachroisms",
	"Intricate symbols and complex equations",
	"silence",
	"dreams",
	"the dark",
	"Murderers",
	"the light",
	"silence",
	"the shadows",
	"riddles",
	"questions", 
	"whispers", 
	"shouts"
]	
	
var language2=[
	"love", 
	"Alcohol",
	"their people",
	"The shadows",
	"racism", 
	getBiomePeople,
	"The traveling folk",
	"Drifters",
	"the lost ones",
	"The enlightened",
	"The youth",
	"infants",
	"babes",
	"The righteous",
	"The trees",
	"The animals",
	"Pragmatism",
	"hobos",
	"animals",
	mysticBeasts
]	
	
var countables=["Fingers",
		"Limbs",
		"Money",
		"Blessings",
		"Friends",
		"Exits",
		"Witnesses",
		"Crimes",
		"Debts",
		"Blessings",
		"Enemies",
		"Watches",
		"Children",
		"Days",
		"Faults"]
	
var limbs=[
	"Arm",
	"Ear",
	"Elbow",
	"Eye",
	"Face",
	"Finger",
	"Foot",
	"Hand",	
	"Head",
	"Knee",
	"Leg",
	"Lip",
	"Neck",
	"Nose",
	"Shoulder",
	"Toe",
	"Tongue",
	"Torso",
	"Wrist"
	]
	
var sizes=[
	"Small",
	"Large",
	"Sizeable",
	"Miniscule",
	"Commendable",
	"Enormous",
	"Considerable",
	"Intimidating",
	"Tiny",
	"Blossoming",
	"Huge",
	"Big"]
		
var collectables=[
	items,
	limbs,
	"Secrets",
	"Diseases",
	"Animals",
	"Rodents",
	"Test subjects",
	"Names",
	"Batteries",
	"Tools",
	"Stories"
]		
		
var npcActions=[
	adjust,
	moistLimb,
	county,
	twitchLimb,
	oddLimb,
	oddCloth,
	npcLooks,
	InteractItem,
	npcCollect,
	AnimalCollection,
	npcConstActions,
	missingLimb,
	npcSeek,
	npcLimbVerb,
	npcLikes,
	npcTalking,
	npcAfriad,
	npcSpeakStyle,
	getNPCSpeakLang,
	smoking,
	"Who won’t make eye contact",
	"Who won’t stop asking questions",
	"Who refuses to speak",
	"Who seems distracted",
	"Who keeps stumbling",
	"Who keeps tripping",
	"Who keeps falling",
	"Who seems to slip into the shadows"
]

var questItemVerbs=[
	"Break",
	"Create",
	"Destroy",
	"Hide",
	"Obtain",
	"Recover",
	"Repair",
	"Steal"
]
		
var smokables=["Cigar",
	"Pipe",
	"Cigarette",
	"New drug",
	"Strange substance"]
		
var conceptables=[
	"blessing",
	"blood",
	"bluff",
	"breath",
	"breath",
	"comprimise",
	"inhritance",
	"knife",
	"lie",
	"oath",
	"promise",
	"secret",
	"vice",
	"weakness",
	"weapon",
	"whisper",
	"wish",
	"word"
]
		
var npcLimbVerbs=[
	"Scratching",
	"Staring at",
	"Shaking",
	"Biting",
	"Licking",
	"Touching", 
	"Massaging",
	"Tapping"
]		
		
var topics=[
	"Microbrewing",
	"History",
	"Their diet",
	"The Weather",
	"Current events",
	"Themselves",
	"Their children",
	"Nothing at all",
	summonables,
	items]
	
var biome=[
	"Sea",
	"Swamp",
	"Dessert",
	"Arctic"
]		
		
var actionItem=[
	"Holding",
	"Shining",
	"Cleaning",
	"Fixing",
	"Adjusting",
	"Dropping",
	"Fidgeting with"
]		
		
var likables=[
	"The cut of your jib",
	"The way you think",
	"The way your hips shake", 
	"The way things are going",
	"The odds",
	"The dancers",
	"The music",
	"The way you move",
	"Money",
	"Misbheaving",
	"Voicing their opinions",
	"Watching old men die",
	"Watching the world burn",
	"The old establishment better",
	"Movers and shakers",
	"Being understood",
	"A little respect once in a while",
	"Attention",
	"When bad men get what's coming",
	"Justice delivered swiftly",
	"The weather"
]
				
//Start here if adding new
function setWords(){
	document.getElementById('display').innerHTML = "<br>";//Clear the list
	var dropdownValue = document.getElementById("genPick").value;
	words = wordList[dropdownValue];
	if(dropdownValue === "items")
	{
		generate = generateItem;
	}
	else if(dropdownValue === "ingredients")
	{
		generate = generateIngredient
	}
	else if(dropdownValue == "people")
	{
		generate = generatePeople
	}
	else if(dropdownValue == "quests")
	{
		generate = generateQuests
	}
	else
	{
		generate = generateWord;
	}
}
  
function face(){
	return "Face that appears in " + getSomething(faceLocations);
}
  
function investigate(){
	return "To investigate a " + getSomething(investigatables);
}	
  
function infiltrate(){
	return "Infiltrate " + getSomething(infiltrateable)
}	
  
function avenge(){
	return "Avenge their " + getSomething(avengables);
}
  
function speakTo(){
	return "To " + getSomething(groups);
}	

function getLanguageOf(){
	return "The language of " + getSomething(language2);
}	
  
function given(){
	var ret = getSomething(givables);
	if(0 == Math.round(Math.random() * 3)){
		if(0 == Math.round(Math.random() * 2)){
			ret += ", willingly given"
		}else{
			ret += ", forcibly taken"
		}
	}
	return ret;
}  
  
function abandonned(){
	return "abandoned " + getSomething(abandonables);
}	

function haunted(){
	return "haunted " + getSomething(abandonables);	
}

function missing(){
	return "missing " + getSomething(missables);	
}
  
function moistLimb(){
	return "Whose " + getSomething(limbs).toLowerCase() + " is unreasonably moist";
}

function scout(){
	return "Scout out land to the " + getSomething(directions);
}

function inheritance(){
	return "Inherited " + getSomething(items);
}


function deadItem(){
	return "Dead " + getSomething(person).toLowerCase() + "'s " + getSomething(items);
}

function twitchLimb(){
	return "Whose " + getSomething(limbs).toLowerCase() + " keeps twitching";
}

function oddLimb(){
	return "With a " + getSomething(adverbs) + " " + getSomething(adjectives) + " " + getSomething(limbs);
}

function enemyLoc(){
	return "Enemies to the " + getSomething(directions);
}

function assassinate(){
	return "assassinate a " + getSomething(jobs);
}

function smoking(){
	return "Who is " + getSomething(adverbs) + " smoking a " + getSomething(smokables);
}

function pointDir(){
	return "that always points " + getSomething(directions);
}

// Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
function reduce(numerator,denominator){
  var gcd = function gcd(a,b){
    return b ? gcd(b, a%b) : a;
  };
  gcd = gcd(numerator,denominator);
  return [numerator/gcd, denominator/gcd];
}

function getTangible(){
	var ret = "";
	if(Math.round(Math.random() * 10) < 8){
		var denom = Math.round(Math.random() * 4) + 2;//generate number between 2 and 5
		do{
			var num = getLowNum();
			var frac = reduce(num, denom);
			num = frac[0];
			denom = frac[1] == 1 ? 3 : frac[1];//Denominator should never be 1, force thirds.
		}while(num == denom);
		ret += num + "/" + denom + " " + getSomething(units).toLowerCase() + " of ";
		if(Math.round(Math.random() * 10) < 8){
			ret += getSomething(ingredientState).toLowerCase() + " ";
		}
	}
	ret += getSomething(tangibles).toLowerCase();
	return ret;
}

function solve(){
		return "Solve a " + getSomething(solvables) + " problem"
}

function itemQuest(){
	return getSomething(questItemVerbs) + " a " + getSomething(items).toLowerCase();
}

function oddCloth(){
	return "With a " + getSomething(adverbs) + " " + getSomething(adjectives) + " " + getSomething(clothing);
}
  
function InteractItem(){
	return "who is " + getSomething(oftenness).toLowerCase() + " " + getSomething(actionItem).toLowerCase()  + " a " + getSomething(items).toLowerCase();
}

function adjust(){
	return "Who keeps adjusting their " + getSomething(clothing);
}

function getNPCSpeakLang(){
	var ret = "Who only speaks ";
	var rand = Math.round(Math.random() * 100);
	if (rand %2 == 0){
		ret += "in " + getSomething(language);
	}
	else
	{
		ret += getLanguageOf();
	}
	return ret;
}

function apocalypse(){
	return getSomething(apocalypseInteracts) + " the apocalypse";
}

function npcLooks(){
	return "Who looks " + getSomething(adjectives);
}

function npcConstActions(){
	return "who is " + getSomething(npcNatReact).toLowerCase()  + " " + getSomething(oftenness).toLowerCase();
}

function county(){
	return "Who continually counts their " + getSomething(countables);
}

function npcCollect(){
	return "who has a " +  getSomething(collectables).toLowerCase() + " collection";
}

function npcLimbVerb(){
	return "who is  " + getSomething(oftenness).toLowerCase() + " " + getSomething(npcLimbVerbs).toLowerCase() + " their " + getSomething(limbs).toLowerCase();
}

function getHair(){
	return getSomething(colors) + "-haired";
}

function getEyes(){
	return getSomething(colors) + "-eyed";
}

function AnimalCollection(){
	var anim;
	var rand = Math.round(Math.random() * 100);
	if(rand % 2 == 0){
		anim = getSomething(animals).toLowerCase();
	}
	else{
		anim = getSomething(mysticBeasts).toLowerCase();
	}
	rand = Math.round(Math.random() * 100);
	if(rand % 2 == 0){
		return "who has a " + getSomething(sizes).toLowerCase() + " menagerie of " + anim;
	}
	else{
		return "who has " + getLowNum() + 1 +" pet " + anim;
	}
	
}

function npcTalking(){
	var rand = Math.round(Math.random() * 100);
	var ret = "who won't stop talking";
	if(rand %2 == 0){
		ret += " about " + getSomething(topics);
	}
	return ret;
}

function npcSpeakStyle(){
	return "Who speaks just a little too " + getSomething(speakStyle).toLowerCase();
}

function npcSeek(){
	return "who is seeking " + getSomething(seekables).toLowerCase();
}

function getBiomePeople(){
	return "The " + getSomething(biome).toLowerCase(); + "people"
}

function generateQuests(){
		return "A " + getSomethingWeighted(questGiver, 50).toLowerCase() + " " +  getSomething(questVerbs).toLowerCase() + " you to " + getSomething(questMeat).toLowerCase();
		}

function generatePeople(){
	var rand = Math.round(Math.random() * 100);
	var first = true; // Keep track of capitilization.
	var ret = "";
	if(rand % 2  == 1){//Adjective
		if(rand < 50){//Adverb
			ret += getSomething(adverbs) + " ";
			first = false;
		}
		var adj = getSomething(adjectives) + " ";
		if(!first){
			adj = adj.toLowerCase();
		}
		first = false;
		ret += adj;
	}
	var job = getSomething(jobs);
	if(!first){
			job = job.toLowerCase();
	}
	
	ret+= job + " ";
	
	if(Math.round(Math.random() * 100) < 80){ //One effect, most of the time.
		var action = getSomething(npcActions).toLowerCase();
		ret += action;
		var secAcc;
		if(Math.round(Math.random() * 100) < 20){ //Second effect, 20% of the time.
			do{
				secAcc = getSomething(npcActions).toLowerCase();
			}while(action === secAcc);
			ret += " and " + secAcc;
		}
	}
	
	
	return ret;
}
  
 //Used for places, names, and other combinations of two items.
function generateWord(){
					var word1 = getSomething(words);
					do
					{
						var word2 = getSomething(words);
					}
					while(word1 === word2);
					return word1 + word2.toLowerCase();			
}
 
 //This function could be avoided and we could invoke the other one directly IF
 //We could figure out how to pass in an argument when invoking a function by reference.
 function generateIngredient(){
	return getSomething(ingredients);
}
			
//Start here
function updateText(num){
		document.getElementById('display').innerHTML = "<br>";
		for(var i = 0; i< num; i++)
		{
			document.getElementById('display').innerHTML += fixGrammar(generate()) + "<br>";
		}
}
					
function missingLimb(){
	return "who is missing a " +  getSomething(limbs).toLowerCase();
}	
					
//Piece together item, description, and enchantment	
function generateItem(){
		var rand = Math.round(Math.random() * 100);
		var obj = getSomething(items) + " ";
		var ret = obj;
		var single = false;//Used to keep track of multiple conditions (do we need an "and"?)
		if(rand < 60)//adjective
		{
			ret = getSomething(preEffects) +  " " + obj.toLowerCase();
		}
		rand = Math.round(Math.random() * 100);
		if(rand < 30)//Add a description
		{
			ret = ret + getSomething(postEffects);
			single = true;
		}
		rand = Math.round(Math.random() * 100);
		if(rand < 30)//Add a description
		{
			if(single)
			{
				do//Keep resetting until it isn't the same effect.
				{
					var secEff = getSomething(postEffects);
				}
				while(secEff === ret);
				ret = ret + " and " + secEff;
			}
			else
			{
				ret = ret + getSomething(postEffects);
			}
		}
		return ret;
}	

//Effect functions
  function extraHP(){
  	return " that grants the wielder " + getHighNum() + " extra hit points";
  }
  
  function growShrink(){
	var rand = Math.round(Math.random());
	var action;
	if(rand % 2 == 0)
	{
		action = "grow";
	}
	else
	{
		action = "shrink"
	}
	return "which allows the user to " + action.toLowerCase() + " any item they are touching by " + getLowNum() + " " + getSomething(lengthUnits).toLowerCase();
	
  }
  
  function moveItem(){
	return "that allows the user to teleport any item or person they can see by " + getLowNum() + " " + getSomething(lengthUnits).toLowerCase();
  }
  
  function shrinkCurse(){
	return "which shrinks the user by " + getLowNum() + " " + getSomething(lengthUnits).toLowerCase() + " whenever it is used"
  }
 
function npcAfriad(){
	if(Math.round(Math.random() * 100) % 2 == 0){
		return "Who is afraid of " + getSomething(fears).toLowerCase();
	}
	else{
		return "Who is afraid of every " + getSomething(fear).toLowerCase();
	}
} 
  
  function regen(){
	var time = getSomething(timeUnits);
	time = time.substring(0, time.length-1).toLowerCase();
	return " that allows the wielder to regenerate " + getLowNum() + " hit points per " + time;
  }
  
    function turnBack(){
	var time = getSomething(timeUnits);
	return " that allows the wielder to go back in time " + getHighNum() + " " + time.toLowerCase() + " per day";
  }
  
 //Returns a string containing damage type and amount
 function summon(){
	return " that can summon " + getLowNum() + " " + getSomething(summonables).toLowerCase() + " " + getSomething(frequency).toLowerCase();
 }
 
 function knowNearest(){
	return "which allows the wielder to know the location of the closest "+ getSomething(summonables).toLowerCase();
 }
 
 function ignition(){
	return "which allows the wielder to set fire to any flammable object once "+ getSomething(frequency).toLowerCase();
 }
 
 function color(){
  return "that makes everything appear " + getSomething(colors).toLowerCase();
 }
 
 function onMiss(){
	return "that deals " + getLowNum() + " " + getSomething(damageTypes).toLowerCase() + " damage to an enemy when they miss you with an attack"
 }
 
function concepts(){
	var ret = "";
	if(Math.round(Math.random() * 10) < 7){
		ret += getSomething(manDescrip) + " ";
	}
	ret += getSomething(person).toLowerCase() + "'s ";
	
	if(0 ==Math.round(Math.random() * 3)){
		ret += getSomething(firstable) + " ";
	}
	ret += getSomething(conceptables);
	return ret;	
} 
 
 function drawings(){
	var time = getSomething(timeUnits);
	time = time.substring(0, time.length-1).toLowerCase();
	if (time === "hour")
	{
	
		time = "n hour"; //grammar is important 
	}
	else
	{//Remove awkward "a n hour" from 'fix' above.
		time = " " + time;
	}
	return 	"that can make the wielder's drawings come alive for a" + time;
 }
 
 function skill(){
	return "that gives the wielder a + " + getLowNum() + " bonus to " + getSomething(skills);
 }
 
 function bond(){
	var temp = getSomething(senses);
	return "that lets the user " + temp + " whatever it could " + temp
 }
 
 function shapeshift(){
	return "that allows the wielder the ability to transform into a " + getSomething(summonables).toLowerCase() + " (and back!)";
 }
 
 function smells(){
	return "that destroys all smells within " + getLowNum() + " " + getSomething(lengthUnits).toLowerCase();
 }
 
 function sounds(){
	return "that destroys all sounds within " + getLowNum() + " " + getSomething(lengthUnits).toLowerCase();
 }
 
 function lockpick(){
  return "that can automatically pick a lock " + getSomething(frequency).toLowerCase();
 }
 
 function ages(){
	return "that ages anything it touches " + getLowNum() + " years";
 }
 
 function attr(){
	return "that increases the " + getSomething(attr) + " of its wielder by " + getLowNum();
 }
 
 //Returns a string containing damage type and amount
 function resist(){
	return " of resist " + getLowNum() + " " + getSomething(damageTypes).toLowerCase();
 }
 
 function npcLikes(){
	return "who likes " + getSomething(likables).toLowerCase();
}
 
 function deals(){
	return "which deals " + getSomething(damageTypes).toLowerCase() + " damage";
 }
 
/* function breathe()
 {
	return "which allows the wielder to breathe " + getSomething(damageTypes).toLowerCase() + " energy";
 }
 */
  function ringing(){
	 return "which emits a loud ringing for " + getHighNum() + " " + getSomething(timeUnits).toLowerCase() + " at noon sharp";
 }
 
//Getters	
	
//Rturns a random element of a list (something), unless that element is a list itself, then
//it returns a random element of THAT list, unless that element is a function, then
//it invokes that function.
 function getSomething(something){
	var ret =  something[Math.round(Math.random()*(something.length-1))]
	if (typeof ret === "string")
	{
		return ret;
	}
	else if( Object.prototype.toString.call( ret ) === '[object Array]' ) {
		return getSomething(ret);
	}
	else
	{
		return ret();
	}
 }
 
 //Has a perc % chance of returning the first element.
 //Useful for elemnts that have a list and then a couple other entries
 function getSomethingWeighted(something, perc){
	 if(Math.round(Math.random()*100) < perc){
		return getSomething(something[0]);
	 }
	 else{
		return getSomething(something); 
	 }
 }
 
 //Ingredient Helpers
 function flowers(){
	return getLowNum() + " " + getSomething(flowerState).toLowerCase() + " " + getSomething(flowerTypes).toLowerCase();
 }
 
 
 //These are sometimes invoked directly, and I don't know how to pass in an argument like that.
 //Returns an amount of water
 function water(){
	return getSomething(waterUnits) + " of water";
 }	
 
 function stormWater(){
	return getLowNum() + " " + getSomething(waterUnits) + " of water, taken from the sea in a storm.";
 }	
 
 function kiss(){
	 var modifier = "";
	 if(0 == Math.round(Math.random() * 2)){
		 modifier = "first ";
	 }
	 return "a " + modifier + "kiss";
 }
			
function lifeTake(){
	return "A life, " + getSomething(lifeTakeables);
}			
			
//Returns a number between 1 and 6
function getLowNum(){
return Math.round(Math.random()*(6)) + 1;
}

//Returns a number between 5 and 25
function getHighNum(){
	return (Math.round(Math.random()*(5))) * 5 + 1;
}

//Fixes grammatical mistakes
//many of these are lazy and can be prevented elsewhere
 function fixGrammar(str) {
	str = str.replace(" in to ", " to ");
	str = str.replace("french", "French");
	str = str.replace("german", "German");
	str = str.replace(" north", " North");
	str = str.replace(" south", " South");
	str = str.replace(" east", " East");
	str = str.replace(" west", " West");
	str = str.replace("A ballerina require", "A ballerina requires");//corner case for plurals
	str = str.replace("demands you to", "demands you");
	str = str.replace("dictates that you to", "dictates that you");
	str = str.replace("appoints you as a champion you", "appoints you as a champion");
	str = str.replace("offers you riches you", "offers you riches");
	//Change a to an if followed by a vowel, and capitol
	var re = /( a )([aeiou])/g
	str = str.replace(re, " an $2");
	re = /(A )([aeiou])/g
	str = str.replace(re, "An $2");
	//Fix "a bones" quantity disagreement errors
	//Search for any letter ending in an s, but not
	//Ending in 'ss' or 'us' or starting wtih s (grass, series)
	re = /(a [^s][a-z]+[^us])s\b/igm
	str = str.replace(re, "$1")
	//Replace "a smoke" with "smoke"
	str.replace("a smoke","smoke");
	return str;
 }