import type { IntelRecord } from './map-intel';

type ColdWarRow = readonly [title: string, type: string, faction: string, area?: string];

const rows: Record<string, readonly ColdWarRow[]> = {
  "die-maschine": [
    [
      "The Incident",
      "Audio Log",
      "Requiem"
    ],
    [
      "Parallel World",
      "Audio Log",
      "Requiem"
    ],
    [
      "Exo-Element 1",
      "Audio Log",
      "Requiem"
    ],
    [
      "New Orders",
      "Audio Log",
      "Requiem"
    ],
    [
      "Endstation Approval Letter",
      "Document",
      "Requiem"
    ],
    [
      "Spacetime Breach Sketch",
      "Document",
      "Requiem"
    ],
    [
      "D.I.E Blueprints",
      "Document",
      "Requiem"
    ],
    [
      "Der Wechsler Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "V Cipher #1",
      "Document",
      "Requiem"
    ],
    [
      "V Cipher #2",
      "Document",
      "Requiem"
    ],
    [
      "Doctor Vogel Entry 203",
      "Document",
      "Requiem"
    ],
    [
      "Officer Weaver",
      "Transmission",
      "Requiem"
    ],
    [
      "Doctor Grey",
      "Transmission",
      "Requiem"
    ],
    [
      "Dimension of Death",
      "Transmission",
      "Requiem"
    ],
    [
      "Doctor Strauss",
      "Transmission",
      "Requiem"
    ],
    [
      "Aetherium",
      "Transmission",
      "Requiem"
    ],
    [
      "Major Carver",
      "Transmission",
      "Requiem"
    ],
    [
      "New Arms Race",
      "Transmission",
      "Requiem"
    ],
    [
      "D.I.E Remote Control",
      "Artifact",
      "Requiem"
    ],
    [
      "D.I.E Machine",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherscope",
      "Artifact",
      "Requiem"
    ],
    [
      "Doctor Vogel's Diary",
      "Artifact",
      "Requiem"
    ],
    [
      "Decontamination Agent",
      "Artifact",
      "Requiem"
    ],
    [
      "8th Guard's First Contact",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Volunteer",
      "Audio Log",
      "Omega Group"
    ],
    [
      "For Mother Russia",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Turning Point",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Next Phase",
      "Audio Log",
      "Omega Group"
    ],
    [
      "An Explanation",
      "Document",
      "Omega Group"
    ],
    [
      "Before the Devil Arrives",
      "Document",
      "Omega Group"
    ],
    [
      "K Cipher",
      "Document",
      "Omega Group"
    ],
    [
      "G Cipher",
      "Document",
      "Omega Group"
    ],
    [
      "Omega Group Foundation",
      "Document",
      "Omega Group"
    ],
    [
      "Operation Undertaker",
      "Document",
      "Omega Group"
    ],
    [
      "Khe Sanh Site",
      "Document",
      "Omega Group"
    ],
    [
      "Orlov Family Photo",
      "Artifact",
      "Omega Group"
    ],
    [
      "Cold War Paranoia",
      "Audio Log",
      "Maxis"
    ],
    [
      "Game Changer",
      "Audio Log",
      "Maxis"
    ],
    [
      "The VHS Tape",
      "Audio Log",
      "Maxis"
    ],
    [
      "KGB Videotape Note",
      "Document",
      "Maxis"
    ],
    [
      "Dieter's Note",
      "Document",
      "Maxis"
    ],
    [
      "Message for Weaver",
      "Document",
      "Maxis"
    ],
    [
      "Agent Maxis",
      "Transmission",
      "Maxis"
    ],
    [
      "Scorpions from Frogs",
      "Transmission",
      "Maxis"
    ],
    [
      "Why You're Here",
      "Transmission",
      "Maxis"
    ],
    [
      "The New Threat",
      "Transmission",
      "Maxis"
    ],
    [
      "Divided Loyalties",
      "Transmission",
      "Maxis"
    ],
    [
      "Shared History / Old Friends",
      "Transmission",
      "Maxis"
    ],
    [
      "Lost Souls: Johannes",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Mariska",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: David",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Approach",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Alice",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Barbara",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Fritz",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Pyotr",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "$!%()$3@!",
      "Document",
      "Dark Aether"
    ],
    [
      "I @N#B%D! O% T@#&",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 95",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 175",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 213",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 937",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 1,108",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 1,646",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 2,873",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 3,289",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 4,100",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,121",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 13,773",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 13,784",
      "Document",
      "Dark Aether"
    ],
    [
      "Hello?",
      "Document",
      "Dark Aether"
    ],
    [
      "Alive",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Gathering",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Behemoth",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Dominion",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Horde",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Mutated Fungus",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Plaguehound Gas",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Dark Aether Crystal",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Dark Aether Wrench",
      "Artifact",
      "Dark Aether"
    ]
  ],
  "firebase-z": [
    [
      "Ravenov",
      "Audio Log",
      "Requiem"
    ],
    [
      "They Took Her",
      "Audio Log",
      "Requiem"
    ],
    [
      "Meeting Of Minds",
      "Audio Log",
      "Requiem"
    ],
    [
      "Focal Point",
      "Audio Log",
      "Requiem"
    ],
    [
      "Outbreak Zones Timeline",
      "Document",
      "Requiem"
    ],
    [
      "Requiem Formation Memo",
      "Document",
      "Requiem"
    ],
    [
      "Requiem Staffing Announcement",
      "Document",
      "Requiem"
    ],
    [
      "C Cipher",
      "Document",
      "Requiem"
    ],
    [
      "RE: Funding Allocation 1",
      "Document",
      "Requiem"
    ],
    [
      "RE: Funding Allocation 2",
      "Document",
      "Requiem"
    ],
    [
      "Berlin COMINT",
      "Document",
      "Requiem"
    ],
    [
      "Omega's Advantage",
      "Transmission",
      "Requiem"
    ],
    [
      "This Is Personal",
      "Transmission",
      "Requiem"
    ],
    [
      "Peck",
      "Transmission",
      "Requiem"
    ],
    [
      "Between Us",
      "Transmission",
      "Requiem"
    ],
    [
      "W.A.N.D.",
      "Transmission",
      "Requiem"
    ],
    [
      "The Stick",
      "Transmission",
      "Requiem"
    ],
    [
      "Blacksmiths and Architects",
      "Transmission",
      "Requiem"
    ],
    [
      "Not Unlike Oxygen",
      "Transmission",
      "Requiem"
    ],
    [
      "A Storied Career",
      "Transmission",
      "Requiem"
    ],
    [
      "The Thick Of It",
      "Transmission",
      "Requiem"
    ],
    [
      "Transformative Properties",
      "Transmission",
      "Requiem"
    ],
    [
      "Genetic Secrets",
      "Transmission",
      "Requiem"
    ],
    [
      "Nose to Nose",
      "Transmission",
      "Requiem"
    ],
    [
      "RAI K-84 Blueprint",
      "Artifact",
      "Requiem"
    ],
    [
      "Weapon Trial Folder",
      "Artifact",
      "Requiem"
    ],
    [
      "Kuhlklay's Diary",
      "Artifact",
      "Requiem"
    ],
    [
      "RAI K-84 Prototype",
      "Artifact",
      "Requiem"
    ],
    [
      "Dimensional Fertility",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Let It Ride",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Aethernauts",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Anatomy Lesson",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Kuhlklay's Payback",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Gorev",
      "Audio Log",
      "Omega Group"
    ],
    [
      "To Dust You Will Return",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Outpost 25 Has Fallen",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Half Of The Reason",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Authorization to Conscript",
      "Document",
      "Omega Group"
    ],
    [
      "Omega Teleporter Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Specimen K7-1924",
      "Document",
      "Omega Group"
    ],
    [
      "Aetherium Production Report",
      "Document",
      "Omega Group"
    ],
    [
      "G Cipher",
      "Document",
      "Omega Group"
    ],
    [
      "P Cipher",
      "Document",
      "Omega Group"
    ],
    [
      "Good Little Lemmings",
      "Transmission",
      "Omega Group"
    ],
    [
      "Not Built To Last",
      "Transmission",
      "Omega Group"
    ],
    [
      "Do Try To Stay Alive",
      "Transmission",
      "Omega Group"
    ],
    [
      "Gorev's Disappointment",
      "Transmission",
      "Omega Group"
    ],
    [
      "The Colonel",
      "Transmission",
      "Omega Group"
    ],
    [
      "Kuhlklay's Eye",
      "Artifact",
      "Omega Group"
    ],
    [
      "Ravenov ID Badge",
      "Artifact",
      "Omega Group"
    ],
    [
      "Agent Delivery System",
      "Artifact",
      "Omega Group"
    ],
    [
      "Essence Trap",
      "Artifact",
      "Omega Group"
    ],
    [
      "Aethermeter",
      "Artifact",
      "Omega Group"
    ],
    [
      "Not Who We Are",
      "Audio Log",
      "Maxis"
    ],
    [
      "Workers Of The Worlds",
      "Audio Log",
      "Maxis"
    ],
    [
      "Worse Than Baton Rogue",
      "Audio Log",
      "Maxis"
    ],
    [
      "More Bad News",
      "Audio Log",
      "Maxis"
    ],
    [
      "Omega Portal Blueprint",
      "Document",
      "Maxis"
    ],
    [
      "Omega Propaganda Poster",
      "Document",
      "Maxis"
    ],
    [
      "Aetherium Effects Report",
      "Document",
      "Maxis"
    ],
    [
      "Aetherium Reactor Blueprint",
      "Document",
      "Maxis"
    ],
    [
      "Code In",
      "Transmission",
      "Maxis"
    ],
    [
      "Relentless",
      "Transmission",
      "Maxis"
    ],
    [
      "Monsters are Real",
      "Transmission",
      "Maxis"
    ],
    [
      "The Perpetual Night",
      "Transmission",
      "Maxis"
    ],
    [
      "The Light Within",
      "Transmission",
      "Maxis"
    ],
    [
      "Blood On My Hands",
      "Transmission",
      "Maxis"
    ],
    [
      "A Bad Dream",
      "Transmission",
      "Maxis"
    ],
    [
      "A Tangled Web",
      "Transmission",
      "Maxis"
    ],
    [
      "I Made A Promise",
      "Transmission",
      "Maxis"
    ],
    [
      "Lost Souls: Fedorov",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Koslov",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Tobias",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Olga",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Federov #2",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "My Friend!",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 291",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 2,944",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 3,789",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 4,010",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,157",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,289",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,142",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,416",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,418",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,421",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 6,457",
      "Document",
      "Dark Aether"
    ],
    [
      "Much More To Tell You",
      "Document",
      "Dark Aether"
    ],
    [
      "Without Orders",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Crooked House",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Omega Canister",
      "Artifact",
      "Dark Aether"
    ]
  ],
  "outbreak": [
    [
      "Like Flies to Honey (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "A Grisly Affair (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "I See A Hierarchy (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Quantum Entanglement (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Recon Rover Blues (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Killer Crystals (S2R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "The Beacon",
      "Audio Log",
      "Requiem"
    ],
    [
      "Embarrassment Of Riches",
      "Audio Log",
      "Requiem"
    ],
    [
      "Doubts",
      "Audio Log",
      "Requiem"
    ],
    [
      "Death Squads (S3R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Eyes Only (S3R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Operation Baldr (S3R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Dissent and Division (S3R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "News From Upstairs (S3R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Aftermath",
      "Audio Log",
      "Requiem"
    ],
    [
      "You Knew Better",
      "Audio Log",
      "Requiem"
    ],
    [
      "What Tomorrow Brings (S4R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Goes Without Saying (S4R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "The Berlin Situation (S4R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Desperate Measures (S5R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Peacemakers (S5R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Butterscotch (S5R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Soul Searching (S5R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Unto the Breach (S5R)",
      "Audio Log",
      "Requiem"
    ],
    [
      "Operation Threshold Authorization",
      "Document",
      "Requiem"
    ],
    [
      "Domino Effect",
      "Document",
      "Requiem"
    ],
    [
      "Recon Rover Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Disruptor Satellite Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Extraction Rocket Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Dark Aether Object Report",
      "Document",
      "Requiem"
    ],
    [
      "Crate Memo",
      "Document",
      "Requiem"
    ],
    [
      "E.C.M. Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Investigation Request (S3R)",
      "Document",
      "Requiem"
    ],
    [
      "Zykov Assessment (S3R)",
      "Document",
      "Requiem"
    ],
    [
      "Power Nodes Report (S3R)",
      "Document",
      "Requiem"
    ],
    [
      "J Cipher (S3R)",
      "Document",
      "Requiem"
    ],
    [
      "DASA Station Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "The Omega Eight",
      "Document",
      "Requiem"
    ],
    [
      "The Child's Note",
      "Document",
      "Requiem"
    ],
    [
      "Operation Excision Report (S4R)",
      "Document",
      "Requiem"
    ],
    [
      "Where's My Robot? (S4R)",
      "Document",
      "Requiem"
    ],
    [
      "CRBR-S Report (S4R)",
      "Document",
      "Requiem"
    ],
    [
      "E Cipher (S4R)",
      "Document",
      "Requiem"
    ],
    [
      "Dark Aether Vortex Report",
      "Document",
      "Requiem"
    ],
    [
      "Krafft Journal Page",
      "Document",
      "Requiem"
    ],
    [
      "Outbreak Expansions Report (S5R)",
      "Document",
      "Requiem"
    ],
    [
      "Operation First Domino (S5R)",
      "Document",
      "Requiem"
    ],
    [
      "Krafft Journal Page 2 (S5R)",
      "Document",
      "Requiem"
    ],
    [
      "Page Six",
      "Document",
      "Requiem"
    ],
    [
      "B-14 Wiretap Transcript",
      "Document",
      "Requiem"
    ],
    [
      "Race Against Time (S2R)",
      "Transmission",
      "Requiem"
    ],
    [
      "How We Win (S2R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Under Observation (S2R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Progress Update",
      "Transmission",
      "Requiem"
    ],
    [
      "A Visceral Process",
      "Transmission",
      "Requiem"
    ],
    [
      "Fish Out Of Water",
      "Transmission",
      "Requiem"
    ],
    [
      "Commander-In-Chief (S3R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Welcome Back",
      "Transmission",
      "Requiem"
    ],
    [
      "Patterns",
      "Transmission",
      "Requiem"
    ],
    [
      "Eye for an Eye (S4R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Marked Man (S4R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Updates (S5R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Busy Bees (S5R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Walking Notso (S5R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Act Three Time (S5R)",
      "Transmission",
      "Requiem"
    ],
    [
      "Zombie Head",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherium Canister",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherium Crystal Shard",
      "Artifact",
      "Requiem"
    ],
    [
      "Frost Blast Canister",
      "Artifact",
      "Requiem"
    ],
    [
      "Energy Mine Canister",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherium Explosive",
      "Artifact",
      "Requiem"
    ],
    [
      "Requiem Patch",
      "Artifact",
      "Requiem"
    ],
    [
      "Aether Shroud Canister (S3R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Transformed Apple Crate (S3R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Beacon Device Component (S3R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Healing Aura Canister",
      "Artifact",
      "Requiem"
    ],
    [
      "Recon Rover Model",
      "Artifact",
      "Requiem"
    ],
    [
      "Ring of Fire Canister (S4R)",
      "Artifact",
      "Requiem"
    ],
    [
      "ECM Model (S4R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Frenzied Guard Container",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherium Rocket Model",
      "Artifact",
      "Requiem"
    ],
    [
      "Raptor One's Helmet",
      "Artifact",
      "Requiem"
    ],
    [
      "Toxic Growth Canister (S5R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Agent Klaus Model (S5R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Requiem Helicopter Model (S5R)",
      "Artifact",
      "Requiem"
    ],
    [
      "Tesla Storm Canister",
      "Artifact",
      "Requiem"
    ],
    [
      "Weaver's Eyepatch",
      "Artifact",
      "Requiem"
    ],
    [
      "Director Mug",
      "Artifact",
      "Requiem"
    ],
    [
      "Ghost Stories (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Something I Can Use (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Off The Hook (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Do What You Must (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "In The Wild (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Proposed Targets (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Lightning Bugs (S2R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Leadership Techniques",
      "Audio Log",
      "Omega Group"
    ],
    [
      "This Isn't My Work",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Witching Hour",
      "Audio Log",
      "Omega Group"
    ],
    [
      "His Plan, Our Plan",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Greater Threat",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Day of Victory",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Survivors",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Device",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Trap",
      "Audio Log",
      "Omega Group"
    ],
    [
      "A Trap is Set (S4R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Play Your Part (S4R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Peace Is Our Profession (S4R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Change of Plans (S5R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "New Frontiers (S5R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Growing Concerns (S5R)",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Codename Whiskers",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Lineage",
      "Audio Log",
      "Omega Group"
    ],
    [
      "New Frontiers",
      "Document",
      "Omega Group"
    ],
    [
      "Omega Staffing Report",
      "Document",
      "Omega Group"
    ],
    [
      "Omega Records Review",
      "Document",
      "Omega Group"
    ],
    [
      "Boost Module Report",
      "Document",
      "Omega Group"
    ],
    [
      "Phase Report",
      "Document",
      "Omega Group"
    ],
    [
      "Krasny Soldat Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Valentina Diary Entry",
      "Document",
      "Omega Group"
    ],
    [
      "Operatsiya Inversiya Proposal (S3R)",
      "Document",
      "Omega Group"
    ],
    [
      "Aetherium Warhead Blueprint (S3R)",
      "Document",
      "Omega Group"
    ],
    [
      "R Cipher (S3R)",
      "Document",
      "Omega Group"
    ],
    [
      "Ravenov Burn Notice",
      "Document",
      "Omega Group"
    ],
    [
      "Aetherium Neutralizer Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Necro-Analytics (S4R)",
      "Document",
      "Omega Group"
    ],
    [
      "Berlin Report",
      "Document",
      "Omega Group"
    ],
    [
      "Enemy Engagement Report",
      "Document",
      "Omega Group"
    ],
    [
      "Operatsiya Izbavitel Orders (S5R)",
      "Document",
      "Omega Group"
    ],
    [
      "Kravchenko Letter (S5R)",
      "Document",
      "Omega Group"
    ],
    [
      "Test Site Anna Report (S5R)",
      "Document",
      "Omega Group"
    ],
    [
      "Up To Speed (S2R)",
      "Transmission",
      "Omega Group"
    ],
    [
      "Fiasco (S2R)",
      "Transmission",
      "Omega Group"
    ],
    [
      "Trespassers (S2R)",
      "Transmission",
      "Omega Group"
    ],
    [
      "Uncle",
      "Transmission",
      "Omega Group"
    ],
    [
      "Made Of Fire",
      "Transmission",
      "Omega Group"
    ],
    [
      "Chasing Ghosts",
      "Transmission",
      "Omega Group"
    ],
    [
      "Something Is Coming (S3R)",
      "Transmission",
      "Omega Group"
    ],
    [
      "Omega's Reputation",
      "Transmission",
      "Omega Group"
    ],
    [
      "The One-Eyed Cowboy",
      "Transmission",
      "Omega Group"
    ],
    [
      "Kravchenko's Knife",
      "Artifact",
      "Omega Group"
    ],
    [
      "Omega Group Patch",
      "Artifact",
      "Omega Group"
    ],
    [
      "Mangler Cannon",
      "Artifact",
      "Omega Group"
    ],
    [
      "Peck's ID Badge",
      "Artifact",
      "Omega Group"
    ],
    [
      "Boost Module Monitor",
      "Artifact",
      "Omega Group"
    ],
    [
      "Tempest Head (S3R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "ICBM Launch Key (S3R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Modified Essence Trap (S3R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Inversion Warhead Model",
      "Artifact",
      "Omega Group"
    ],
    [
      "Aether Reactor Model",
      "Artifact",
      "Omega Group"
    ],
    [
      "Omega Flag (S4R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Dark Aether Photos (S4R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Krasny Soldat Flamethrower (S4R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Valentina's ID Badge",
      "Artifact",
      "Omega Group"
    ],
    [
      "Mimic Tentacle",
      "Artifact",
      "Omega Group"
    ],
    [
      "Boost Module Model",
      "Artifact",
      "Omega Group"
    ],
    [
      "Gorev's ID Badge (S5R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Teleporter Model (S5R)",
      "Artifact",
      "Omega Group"
    ],
    [
      "Jager's ID Badge",
      "Artifact",
      "Omega Group"
    ],
    [
      "Contaminated Crystal",
      "Artifact",
      "Omega Group"
    ],
    [
      "Call Me Mac (S2R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "My Reputation Precedes Me (S2R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "It's All Relative (S2R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "We've Both Been To Hell (S2R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "It's Always Dark",
      "Audio Log",
      "Maxis"
    ],
    [
      "Outbursts",
      "Audio Log",
      "Maxis"
    ],
    [
      "A New Friend",
      "Audio Log",
      "Maxis"
    ],
    [
      "Isolated",
      "Audio Log",
      "Maxis"
    ],
    [
      "Someone We Can Trust",
      "Audio Log",
      "Maxis"
    ],
    [
      "The Ally",
      "Audio Log",
      "Maxis"
    ],
    [
      "The Confrontation",
      "Audio Log",
      "Maxis"
    ],
    [
      "Take Her",
      "Audio Log",
      "Maxis"
    ],
    [
      "Interrogation",
      "Audio Log",
      "Maxis"
    ],
    [
      "Test",
      "Audio Log",
      "Maxis"
    ],
    [
      "Fifteen Days",
      "Audio Log",
      "Maxis"
    ],
    [
      "Thirty Seconds (S5R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "Sixty-Two Days (S5R)",
      "Audio Log",
      "Maxis"
    ],
    [
      "I Am Alive",
      "Audio Log",
      "Maxis"
    ],
    [
      "Maxis Status Report",
      "Document",
      "Maxis"
    ],
    [
      "Maxis Diary Entry",
      "Document",
      "Maxis"
    ],
    [
      "Arrival (S3R)",
      "Document",
      "Maxis"
    ],
    [
      "Maxis Progress Report (S3R)",
      "Document",
      "Maxis"
    ],
    [
      "Quarantine Diary 1 (S3R)",
      "Document",
      "Maxis"
    ],
    [
      "Quarantine Diary 2 (S3R)",
      "Document",
      "Maxis"
    ],
    [
      "Quarantine Diary 9",
      "Document",
      "Maxis"
    ],
    [
      "Week 1 Summary",
      "Document",
      "Maxis"
    ],
    [
      "Subject Rules",
      "Document",
      "Maxis"
    ],
    [
      "Weaver Letter (S5R)",
      "Document",
      "Maxis"
    ],
    [
      "Grey Letter (S5R)",
      "Document",
      "Maxis"
    ],
    [
      "Ability Assessment",
      "Document",
      "Maxis"
    ],
    [
      "Samantha Letter",
      "Document",
      "Maxis"
    ],
    [
      "Lab Rat (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "Three Out Of Four (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "Both Ways (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "I've Changed (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "Why I Fight (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "True Courage (S2R)",
      "Transmission",
      "Maxis"
    ],
    [
      "New Frequency (S5R)",
      "Transmission",
      "Maxis"
    ],
    [
      "Understand Me (S5R)",
      "Transmission",
      "Maxis"
    ],
    [
      "Power (S5R)",
      "Transmission",
      "Maxis"
    ],
    [
      "The Boy",
      "Transmission",
      "Maxis"
    ],
    [
      "The Promise",
      "Transmission",
      "Maxis"
    ],
    [
      "Endstation Video Tape",
      "Artifact",
      "Maxis"
    ],
    [
      "Maxis BND Badge",
      "Artifact",
      "Maxis"
    ],
    [
      "Maxis' Katana",
      "Artifact",
      "Maxis"
    ],
    [
      "Maxis' Scarf",
      "Artifact",
      "Maxis"
    ],
    [
      "Maxis' Goggles",
      "Artifact",
      "Maxis"
    ],
    [
      "Maxis' Watch",
      "Artifact",
      "Maxis"
    ],
    [
      "Beacon Listening Device (S3R)",
      "Artifact",
      "Maxis"
    ],
    [
      "Microfilm Slides (S3R)",
      "Artifact",
      "Maxis"
    ],
    [
      "Lost Souls: Fedorov 1",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Fedorov 2",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Federov 3",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Great and Terrible (S3R)",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "We are Waiting",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Piotr 1",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Piotr 2 (S5R)",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Piotr 3",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Piotr 4",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Hello Again",
      "Document",
      "Dark Aether"
    ],
    [
      "Divided World",
      "Document",
      "Dark Aether"
    ],
    [
      "Trust Me",
      "Document",
      "Dark Aether"
    ],
    [
      "More to Follow",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 1",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 3",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 7",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 9 (S3R)",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 11 (S3R)",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 12 (S3R)",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 4,513",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 4,729",
      "Document",
      "Dark Aether"
    ],
    [
      "Testing... Testing... (S2R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "New Enemies (S2R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Who I Am",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Great Patriotic",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Tethered",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Changes (S3R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Junkyard (S3R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Invasion (S3R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Bring Me Home (S3R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Secret Contact",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Bring Me Home 2",
      "Transmission",
      "Dark Aether"
    ],
    [
      "The Machine",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Broken Trust (S5R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Make This Right (S5R)",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Empty Jugger-Nog",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Cymbal Monkey Toy",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Ivan's Head",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Mystery Box Bunny",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Speed Cola",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Dragon Head Trophy",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Broken Essence Capsule",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Quick Revive (S3R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Broken Essence Canister (S3R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Aetherium Crystal Chunks (S3R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Stamin-Up",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Fury Crystal",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Elemental Pop (S4R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Elemental Pop Poster (S4R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Deadshot Daiquiri",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Demented Echo Head",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Tombstone Soda (S5R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Mule Kick (S5R)",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty Death Perception",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Empty PhD Slider",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Zykov's Mask",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Archaic Goblet",
      "Artifact",
      "Dark Aether"
    ]
  ],
  "mauer-der-toten": [
    [
      "Final Order",
      "Audio Log",
      "Requiem"
    ],
    [
      "Who's Laughing Now?",
      "Audio Log",
      "Requiem"
    ],
    [
      "A Handful",
      "Audio Log",
      "Requiem"
    ],
    [
      "Bad Days",
      "Audio Log",
      "Requiem"
    ],
    [
      "Lost In Transit",
      "Audio Log",
      "Requiem"
    ],
    [
      "CRBR-S Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Klaus Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Berlin Outbreak Report",
      "Document",
      "Requiem"
    ],
    [
      "Rico's Note",
      "Document",
      "Requiem"
    ],
    [
      "Subject: Strange Communique",
      "Document",
      "Requiem"
    ],
    [
      "Subject: Urgent",
      "Document",
      "Requiem"
    ],
    [
      "J Cipher 2",
      "Document",
      "Requiem"
    ],
    [
      "EE-1 Harvester Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "EE-1 Conversion Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Vogel's Letter",
      "Document",
      "Requiem"
    ],
    [
      "Klaus's Hands",
      "Artifact",
      "Requiem"
    ],
    [
      "CRBR-S",
      "Artifact",
      "Requiem"
    ],
    [
      "Warhead",
      "Artifact",
      "Requiem"
    ],
    [
      "Rico's Keycard",
      "Artifact",
      "Requiem"
    ],
    [
      "Hacking Helm",
      "Artifact",
      "Requiem"
    ],
    [
      "Improvised Collider",
      "Artifact",
      "Requiem"
    ],
    [
      "A Decent Proposal",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Letter",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Turn",
      "Audio Log",
      "Omega Group"
    ],
    [
      "LT53 Kazimir Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Angelika Vogel Summary",
      "Document",
      "Omega Group"
    ],
    [
      "Operation Baldr Approval",
      "Document",
      "Omega Group"
    ],
    [
      "Valentina Diary 15-07-83",
      "Document",
      "Omega Group"
    ],
    [
      "Statement of Intent",
      "Document",
      "Omega Group"
    ],
    [
      "F Cipher",
      "Document",
      "Omega Group"
    ],
    [
      "Your Problem Now",
      "Transmission",
      "Omega Group"
    ],
    [
      "Secrets Harbored",
      "Transmission",
      "Omega Group"
    ],
    [
      "5-Star Treatment",
      "Transmission",
      "Omega Group"
    ],
    [
      "Not For Me",
      "Transmission",
      "Omega Group"
    ],
    [
      "Leverage",
      "Transmission",
      "Omega Group"
    ],
    [
      "Battery",
      "Artifact",
      "Omega Group"
    ],
    [
      "Endstation Lure",
      "Artifact",
      "Omega Group"
    ],
    [
      "Lost Souls: Valentina 1",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Valentina 2",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Lost Souls: Valentina 3",
      "Audio Log",
      "Dark Aether"
    ],
    [
      "Day 4,527",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 4,771",
      "Document",
      "Dark Aether"
    ],
    [
      "Day 5,169",
      "Document",
      "Dark Aether"
    ],
    [
      "The Forsaken",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Consumed",
      "Transmission",
      "Dark Aether"
    ],
    [
      "Electrical Fuse",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Tempest Essence",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Corrupted Uranium",
      "Artifact",
      "Dark Aether"
    ]
  ],
  "forsaken": [
    [
      "The Zakarpatska Oblast",
      "Audio Log",
      "Requiem"
    ],
    [
      "Symbotic Relationship",
      "Audio Log",
      "Requiem"
    ],
    [
      "Russian to Russian",
      "Audio Log",
      "Requiem"
    ],
    [
      "For Health",
      "Audio Log",
      "Requiem"
    ],
    [
      "Ancient Parchment",
      "Document",
      "Requiem"
    ],
    [
      "Collapse Report",
      "Document",
      "Requiem"
    ],
    [
      "Ancient Parchment 2",
      "Document",
      "Requiem"
    ],
    [
      "Requiem Neutralizer Blueprint",
      "Document",
      "Requiem"
    ],
    [
      "Memorandum for the Board",
      "Document",
      "Requiem"
    ],
    [
      "Progress Report",
      "Document",
      "Requiem"
    ],
    [
      "The Chrysalax",
      "Artifact",
      "Requiem"
    ],
    [
      "Housing Unit",
      "Artifact",
      "Requiem"
    ],
    [
      "Monitoring Device",
      "Artifact",
      "Requiem"
    ],
    [
      "Fuel Tank",
      "Artifact",
      "Requiem"
    ],
    [
      "Aetherium Neutralizer",
      "Artifact",
      "Requiem"
    ],
    [
      "Fully Operational",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Deja Vu",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Agreement",
      "Audio Log",
      "Omega Group"
    ],
    [
      "The Magnificent Two",
      "Audio Log",
      "Omega Group"
    ],
    [
      "Operatsiya Izbavitel Approval",
      "Document",
      "Omega Group"
    ],
    [
      "Order of Operations",
      "Document",
      "Omega Group"
    ],
    [
      "Test Site Construction Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Containment Chamber Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Location Targets",
      "Document",
      "Omega Group"
    ],
    [
      "Aetherium Gun Turret Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Forsaken Photograph",
      "Document",
      "Omega Group"
    ],
    [
      "ARC-XD Blueprint",
      "Document",
      "Omega Group"
    ],
    [
      "Anton Note",
      "Document",
      "Omega Group"
    ],
    [
      "My Control",
      "Audio Log",
      "Maxis"
    ],
    [
      "My Orders",
      "Audio Log",
      "Maxis"
    ],
    [
      "My Choice",
      "Audio Log",
      "Maxis"
    ],
    [
      "Maxis Approval Memo",
      "Document",
      "Maxis"
    ],
    [
      "Polymorphic Crystal Core",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Energetic Geode",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Tempered Crystal Heart",
      "Artifact",
      "Dark Aether"
    ],
    [
      "Catalyzed Crystal Shard",
      "Artifact",
      "Dark Aether"
    ]
  ],
  "onslaught": [
    [
      "Late Checkout",
      "Document",
      "Requiem",
      "Miami"
    ],
    [
      "Tourist Trap",
      "Document",
      "Requiem",
      "Miami"
    ],
    [
      "Eighty-Sixed",
      "Document",
      "Requiem",
      "Miami"
    ],
    [
      "Angola Breach Report",
      "Document",
      "Requiem",
      "Satellite"
    ],
    [
      "Morasko Satellite Capture 08.83",
      "Document",
      "Requiem",
      "Satellite"
    ],
    [
      "Morasko Satellite Capture 09.83",
      "Document",
      "Requiem",
      "Satellite"
    ],
    [
      "Memorandum from Moscow",
      "Document",
      "Requiem",
      "Moscow"
    ],
    [
      "Redpoll Interview Excerpt",
      "Document",
      "Requiem",
      "Moscow"
    ],
    [
      "To Whom It May Concern",
      "Document",
      "Requiem",
      "Nuketown '84"
    ],
    [
      "Punks Ain't Pacifists",
      "Document",
      "Requiem",
      "Nuketown '84"
    ],
    [
      "Cellar Dwellers",
      "Document",
      "Requiem",
      "Nuketown '84"
    ],
    [
      "Game Over",
      "Document",
      "Requiem",
      "The Pines"
    ],
    [
      "Breakup",
      "Document",
      "Requiem",
      "The Pines"
    ],
    [
      "Respect",
      "Document",
      "Requiem",
      "The Pines"
    ],
    [
      "State Your Emergency",
      "Document",
      "Requiem",
      "Express"
    ],
    [
      "Lightning Rod",
      "Document",
      "Requiem",
      "Express"
    ],
    [
      "Los Angeles Outbreak AAR",
      "Document",
      "Requiem",
      "Express"
    ],
    [
      "Comet-Cannibals",
      "Document",
      "Requiem",
      "Rush"
    ],
    [
      "Game Plan",
      "Document",
      "Requiem",
      "Rush"
    ],
    [
      "Done And Dusted",
      "Document",
      "Requiem",
      "Rush"
    ],
    [
      "The Devil's Mountain",
      "Document",
      "Requiem",
      "Echelon"
    ],
    [
      "A Lovely Addition",
      "Document",
      "Requiem",
      "Echelon"
    ],
    [
      "Echelon Breach Report",
      "Document",
      "Requiem",
      "Echelon"
    ],
    [
      "Dear Dad",
      "Document",
      "Requiem",
      "Drive-In"
    ],
    [
      "The Beasts from Below",
      "Document",
      "Requiem",
      "Drive-In"
    ],
    [
      "Movie Night Flyer",
      "Document",
      "Requiem",
      "Drive-In"
    ],
    [
      "Querdia Madre - Soldiers of Death",
      "Document",
      "Omega Group",
      "Cartel"
    ],
    [
      "Querida Madre - Raul's Wrath",
      "Document",
      "Omega Group",
      "Cartel"
    ],
    [
      "Querida Madre - Manuel's Fate",
      "Document",
      "Omega Group",
      "Cartel"
    ],
    [
      "The Last Post: Convoy",
      "Document",
      "Omega Group",
      "Crossroads"
    ],
    [
      "The Last Post: Cursed",
      "Document",
      "Omega Group",
      "Crossroads"
    ],
    [
      "The Last Post: Consequences",
      "Document",
      "Omega Group",
      "Crossroads"
    ],
    [
      "A Formal Request",
      "Document",
      "Omega Group",
      "Moscow"
    ],
    [
      "Housewarming: Canyon Fire",
      "Document",
      "Omega Group",
      "Raid"
    ],
    [
      "Housewarming: Stash Room",
      "Document",
      "Omega Group",
      "Raid"
    ],
    [
      "Housewarming: Friends of the Owner",
      "Document",
      "Omega Group",
      "Raid"
    ],
    [
      "Laos Breach Report",
      "Document",
      "Omega Group",
      "Apocalypse"
    ],
    [
      "A Luxury I Cannot Afford",
      "Document",
      "Omega Group",
      "Apocalypse"
    ],
    [
      "Laos Operational Map",
      "Document",
      "Omega Group",
      "Apocalypse"
    ],
    [
      "Exclusion Zone",
      "Document",
      "Omega Group",
      "Yamantau"
    ],
    [
      "Field Promotion",
      "Document",
      "Omega Group",
      "Yamantau"
    ],
    [
      "Yamantau Breach Report",
      "Document",
      "Omega Group",
      "Yamantau"
    ],
    [
      "Eyes Only: Valentina",
      "Document",
      "Omega Group",
      "Standoff"
    ],
    [
      "3 Surprises",
      "Document",
      "Omega Group",
      "Standoff"
    ],
    [
      "Kyrgyzstan Breach Report",
      "Document",
      "Omega Group",
      "Standoff"
    ],
    [
      "Algeria Aid Request",
      "Document",
      "Omega Group",
      "Collateral"
    ],
    [
      "Krupin Field Report",
      "Document",
      "Omega Group",
      "Collateral"
    ],
    [
      "After-Action: Algeria",
      "Document",
      "Omega Group",
      "Collateral"
    ],
    [
      "Hausmeisterin: The Secret",
      "Document",
      "Maxis",
      "Checkmate"
    ],
    [
      "Hausmeisterin: The Lie",
      "Document",
      "Maxis",
      "Checkmate"
    ],
    [
      "Hausmeisterin: The Visitor",
      "Document",
      "Maxis",
      "Checkmate"
    ],
    [
      "KGB Contact Note",
      "Document",
      "Maxis",
      "Garrison"
    ],
    [
      "Soviet War Hero",
      "Document",
      "Maxis",
      "Garrison"
    ],
    [
      "Red Army Encounter",
      "Document",
      "Maxis",
      "Garrison"
    ],
    [
      "I Know",
      "Document",
      "Maxis",
      "Deprogram"
    ],
    [
      "I Dream",
      "Document",
      "Maxis",
      "Deprogram"
    ],
    [
      "I Live",
      "Document",
      "Maxis",
      "Deprogram"
    ]
  ]
};

export const coldWarIntel = Object.fromEntries(
  Object.entries(rows).map(([map, records]) => [map, records.map(([title, type, faction, area]) => ({
    title,
    type,
    faction,
    location: area ? 'Recovered on ' + area + ' through Zombies Onslaught. Faction: ' + faction + '.' : 'Faction: ' + faction + '. The linked source dossier records its pickup, Trial, radio, or quest requirement.',
  }))]),
) as Record<string, IntelRecord[]>;

