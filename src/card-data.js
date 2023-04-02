export const leaders = [
    {
        name: "Paul Atreides",
        difficulty: 1,
        house: "House Atreides",
        leaderAbility: {name: "Prescience", description: "You may look at the top card of your deck at any time."},
        signetRingAbility: {name: "Discipline", description: "Draw one card."}
    },
    {
        name: "Duke Leto Atreides",
        difficulty: 2,
        house: "House Atreides",
        leaderAbility: {name: "Landsraad Popularity", description: "Sending an agent to a Landsraad Council board space costs you one solari less."},
        signetRingAbility: {name: "Prudent Diplomacy", description: "Spend one spice to gain one influence with a Faction where an opponent has more influence than you."}
    },
    {
        name: "Baron Vladimir Harkonnen",
        difficulty: 3,
        house: "House Harkonnen",
        leaderAbility: {name: "Masterstroke", description: "At start of game, secretly choose two Factions.  When you deploy 4+ troops to the Conflict in a turn, reveal your choices and gain one influence with each."},
        signetRingAbility: {name: "Scheme", description: "Spend one solari to gain an intrigue card."}
    },
    {
        name: 'Glossu "The Beast" Rabban',
        difficulty: 1,
        house: "House Harkonnen",
        leaderAbility: {name: "Arrakis Fiefdom", description: "You start the game with additional resources: one spice and one solari."},
        signetRingAbility: {name: "Brutality", description: "Gain one or two soldiers if you have at least one Faction Alliance."}
    },  
    {
        name: 'Earl Memnon Thorvald',
        difficulty: 1,
        house: "House Thorvald",
        leaderAbility: {name: "Connections", description: "When you take a high council seat, gain one intrigue card."},
        signetRingAbility: {name: "Spice Hoard", description: "Gain one spice."}
    },
    {
        name: 'Countess Ariana Thorvald',
        difficulty: 3,
        house: "House Thorvald",
        leaderAbility: {name: "Spice Addict", description: "Whenever you harvest spice, gain one less and draw a card."},
        signetRingAbility: {name: "Hidden Resevoir", description: "Gain one water."}
    },
    {
        name: 'Count Ilban Richese',
        difficulty: 1,
        house: "House Richese",
        leaderAbility: {name: "Ruthless Neogtiator", description: "Whenever you pay solari for the cost of a board space, draw a card."},
        signetRingAbility: {name: "Manufacturing", description: "Gain one solari."}
    },
    {
        name: 'Countess Helena Richese',
        difficulty: 2,
        house: "House Richese",
        leaderAbility: {name: "Eyes Everywhere", description: "Enemy agents don't block your agents at green or purple board spaces."},
        signetRingAbility: {name: "Manipulate", description: "Remove and replace a card in the Imperium Row.  During your Reveal turn this round, you may aquire the rmeoved card for one influence less."}
    },
]


export const reserveCards = [
    {
        name: 'Foldspace',
        faction: null,
        agentIcon: ['emperor', 'spacingGuild', 'beneGesserit', 'fremen', 'landsraadCouncil', 'cities', 'deserts'],
        agentBox: "Trash this card",
        revealBox: null,
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Arrakis Liaison',
        faction: 'Fremen',
        agentIcon: ['landsraadCouncil', 'cities'],
        agentBox: null,
        revealBox: 'Gain 2 persuassion',
        persuassionCost: 2,
        aquireEffect: null
    },
    {
        name: 'The Spice Must Flow',
        faction: null,
        agentIcon: ['emperor', 'spacingGuild', 'beneGesserit', 'fremen', 'landsraadCouncil', 'cities', 'deserts'],
        agentBox: null,
        revealBox: 'Gain 1 spice',
        persuassionCost: 9,
        aquireEffect: 'Gain 1 victory point'
    },
]

export const starterDeck = [
    {
        name: 'Dune, the Desert Planet',
        faction: null,
        agentIcon: ['CHOAM', 'Deserts'],
        boardLocations: ['Sell Melange', 'Secure Contract', 'The Great Flat', 'Hagga Basin', 'Imperial Basin'],
        agentBox: null,
        revealBox: 'Gain 1 persuassion',
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Convincing Argument',
        faction: null,
        agentIcon: null,
        agentBox: null,
        revealBox: 'Gain 2 Influence',
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Dagger',
        faction: null,
        agentIcon: 'landsraadCouncil',
        agentBox: null,
        revealBox: 'Gain 1 Strength',
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Reconnaissance',
        faction: null,
        agentIcon: ['Cities'],
        agentBox: null,
        revealBox: 'Gain 1 persuassion',
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Seek Allies',
        faction: null,
        agentIcon: ['emperor', 'spacingGuild', 'beneGesserit', 'fremen'],
        agentBox: 'Trash this card.',
        revealBox: null,
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Diplomacy',
        faction: null,
        agentIcon: ['emperor', 'spacingGuild', 'beneGesserit', 'fremen'],
        agentBox: null,
        revealBox: 'Gain 1 persuassion',
        persuassionCost: null,
        aquireEffect: null
    },
    {
        name: 'Signet Ring',
        faction: null,
        agentIcon: ['CHOAM', 'deserts', 'cities', 'landsraadCouncil'],
        agentBox: 'Use SignetRing Ability',
        revealBox: 'Gain 1 persuassion',
        persuassionCost: null,
        aquireEffect: null
    }
]

export const imperiumRowCards = [
    {
        name: 'Arrakis Recruiter',
        faction: null,
        agentIcon: ['cities'],
        agentBox: 'Gain 1 soldier',
        revealBox: 'Gain 1 persuassion and 1 strength',
        persuassionCost: 2,
        aquireEffect: null
    },
    {
        name: 'Assassination Mission',
        faction: null,
        agentIcon: null,
        agentBox: null,
        revealBox: 'Gain 1 solari and 1 strength',
        persuassionCost: 1,
        aquireEffect: null,
        special: 'When this card is trashed, gain 4 solari.'
    },
    {
        name: 'Bene Gesserit Initiate',
        faction: 'Bene Gesserit',
        agentIcon: ['cities', 'landsraadCouncil', 'deserts', 'CHOAM'],
        agentBox: 'Draw 1 card',
        revealBox: 'Gain 1 persuassion',
        persuassionCost: 3,
        aquireEffect: null
    },
    {
        name: 'Bene Gesserit Sister',
        faction: 'Bene Gesserit',
        agentIcon: ['beneGesserit', 'landsraadCouncil'],
        agentBox: null,
        revealBox: '2 persuassion OR 2 strength',
        persuassionCost: 3,
        aquireEffect: null
    },
    {
        name: 'Carryall',
        faction: null,
        agentIcon: ['choam', 'desert'],
        agentBox: 'asdfasdf',
        revealBox: 'asdfasdf',
        persuassionCost: 5,
        aquireEffect: null
    },
]

export const houseHagalCards = [
    {
        name: 'Arrakeen',
        combatSpace: true,
        agentIcon: ['city'],
        cost: null,
        aquireEffect: 'Gain 1 troop and draw a card'
    },
    {
        name: 'Carthag',
        combatSpace: true,
        agentIcon: ['city'],
        cost: null,
        aquireEffect: 'Gain 1 troop and draw a card'
    },
    {
        name: 'Conspire',
        combatSpace: true,
        agentIcon: ['city'],
        cost: null,
        aquireEffect: 'Gain 1 troop and draw a card'
    },
]

export const intrigueCards = []

export const conflictDeck = [
    {
        name: 'Skirmish',
        firstPlace: '1 victory point',
        secondPlace: '2 solari and 1 intrigue card',
        thirdPlace: '2 solari'
    }
]