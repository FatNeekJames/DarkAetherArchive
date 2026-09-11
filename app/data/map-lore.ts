export type LoreSource = { label: string; url: string };

export type MapLore = {
  date: string;
  location: string;
  chapter: string;
  summary: string;
  outcome: string;
  sources: LoreSource[];
};

const coldWarRecap = 'https://www.callofduty.com/blog/2021/07/call-of-duty-black-ops-cold-war-zombies-story-so-far';
const darkAetherTimeline = 'https://callofduty.fandom.com/wiki/Portal:Timeline/Dark_Aether_Saga';
const bo7Official = 'https://www.callofduty.com/blackops7/zombies';

export const mapLore: Record<string, MapLore> = {
  'die-maschine': {
    date: '13 November 1983', location: 'Morasko, Poland', chapter: 'Operation Cerberus',
    summary: 'Requiem enters the abandoned Projekt Endstation complex after Omega Group reactivates the Nazi cyclotron. The strike team discovers that the machine tore open a dimensional breach and that the facility’s dead have been transformed by Dark Aether exposure.',
    outcome: 'The cyclotron is overloaded and the immediate breach is contained, but Omega has already learned how to weaponise the other dimension. The operation establishes Requiem, Omega, Samantha Maxis and the mysterious trapped agent later identified as Zykov as the central pieces of the conflict.',
    sources: [{ label: 'Official story recap', url: coldWarRecap }, { label: 'Intel dossier', url: 'https://callofduty.fandom.com/wiki/Die_Maschine/Intel' }],
  },
  'firebase-z': {
    date: '15 June 1984', location: 'A Shau Valley, Vietnam', chapter: 'Operation Firebase Z',
    summary: 'Following Maxis’s signal, Requiem assaults Omega’s Outpost 25. Doctor Peck has been opening gateways and using prisoners in Dark Aether experiments while Omega searches for a military advantage.',
    outcome: 'Maxis is recovered from the Dark Aether, but Requiem director Edward Richtofen orders her detained. Omega escapes with new intelligence and both organisations accelerate the race toward a larger outbreak.',
    sources: [{ label: 'Official story recap', url: coldWarRecap }, { label: 'Intel dossier', url: 'https://callofduty.fandom.com/wiki/Firebase_Z/Intel' }],
  },
  outbreak: {
    date: 'June–December 1984', location: 'Ural Mountains outbreak zones', chapter: 'Operation Threshold',
    summary: 'Requiem strike teams deploy across enormous Omega-controlled outbreak zones to escort rovers, recover Aetherium, investigate anomalies and disrupt dimensional research. The campaign unfolds through multiple operations rather than one isolated incident.',
    outcome: 'The operations expose Omega’s launch plans and lead through Ruka, Sanatorium and Zoo to Excision on 14 December 1984. Requiem personnel are betrayed and arrested, leaving the organisation vulnerable to its own director’s Project Janus agenda.',
    sources: [{ label: 'Official story recap', url: coldWarRecap }, { label: 'Intel dossier', url: 'https://callofduty.fandom.com/wiki/Outbreak_(Cold_War)/Intel' }],
  },
  'mauer-der-toten': {
    date: '2 February 1985', location: 'East Berlin, German Democratic Republic', chapter: 'Operation Mauer der Toten',
    summary: 'Under Kravchenko’s coercion, the captured Requiem strike team enters a sealed Berlin outbreak to stop Valentina, who has been manipulated by the Forsaken into opening a gateway beneath the city.',
    outcome: 'Valentina is defeated and Klaus carries a nuclear device into the portal. The victory blocks the immediate incursion, while the Forsaken’s influence and Zykov’s apparent offer of help pull both agencies toward the final confrontation.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }, { label: 'Intel dossier', url: 'https://callofduty.fandom.com/wiki/Mauer_der_Toten/Intel' }],
  },
  forsaken: {
    date: '4 June 1985', location: 'Test Site Anna, Ukraine', chapter: 'Operation First Domino',
    summary: 'Requiem attacks Omega’s training facility as Zykov reveals that he is the Forsaken. Maxis enters the Dark Aether, absorbs the entity and seals it inside Requiem’s containment chamber.',
    outcome: 'Richtofen has Weaver, Grey, Carver and Strauss arrested, shuts down Requiem and begins Project Janus. Maxis sacrifices her freedom to contain the threat; the Forsaken’s power becomes the foundation of Janus research.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }, { label: 'Intel dossier', url: 'https://callofduty.fandom.com/wiki/Forsaken/Intel' }],
  },
  onslaught: {
    date: '1983–1985', location: 'Global dimensional breach zones', chapter: 'Onslaught investigations',
    summary: 'Two-person Requiem teams investigate smaller breaches across familiar Cold War locations. The records expand the same Requiem–Omega intelligence war and are filed by multiplayer location rather than a single round-based operation.',
    outcome: 'The recovered transmissions and documents add operational context to the main Cold War campaign. This archive preserves all 57 currently indexed Onslaught records and their source-map associations.',
    sources: [{ label: 'Onslaught intel dossier', url: 'https://callofduty.fandom.com/wiki/Zombies_Onslaught/Intel' }],
  },
  'liberty-falls': {
    date: '19 February 1991', location: 'Liberty Falls, West Virginia, USA', chapter: 'Project Janus breach',
    summary: 'A catastrophic breach erupts around Project Janus headquarters. A response team enters the overrun town while former Janus scientist Dr Panos promises a route out through the dimensional inversion device.',
    outcome: 'Panos deceives the team and escapes while they are drawn into the Dark Aether. The disaster unfolds at the same time as the Terminus prison break, turning the surviving Requiem staff’s pursuit of Richtofen into a worldwide crisis.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }, { label: 'Official Zombies briefing', url: 'https://www.callofduty.com/blog/2024/08/call-of-duty-next-black-ops-6-zombies-liberty-falls-map-intel' }],
  },
  terminus: {
    date: '18–19 February 1991', location: 'Philippine Sea', chapter: 'Terminus prison break',
    summary: 'Peck and Maya Aguinaldo free Weaver, Grey, Carver and Strauss from a remote Project Janus prison. The crew searches for Maya’s brother Nathan and uncovers Modi’s biological experiments beneath the island.',
    outcome: 'The crew defeats the Patient 13 amalgam, but Nathan cannot be saved. Richtofen’s location and the Sentinel Artifact become the next objectives, sending the team to Avalon.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }, { label: 'Official Terminus briefing', url: 'https://www.callofduty.com/blog/2024/08/call-of-duty-black-ops-6-zombies-terminus-map' }],
  },
  'citadelle-des-morts': {
    date: '25 February 1991', location: 'Avalon, France', chapter: 'The Obscurus Altilium',
    summary: 'The crew follows Gabriel Krafft to an ancient castle and learns that the Sentinel Artifact can be reached only through the Obscurus Altilium. The fortress’s history links the modern Janus conspiracy to an older order of guardians.',
    outcome: 'Krafft identifies Richtofen as his son and points the crew toward an excavation site. The Obscurus Altilium becomes the key to opening the Door to Nowhere.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }],
  },
  'the-tomb': {
    date: '25 February 1991 — hours later', location: 'Avalon excavation site', chapter: 'The Door to Nowhere',
    summary: 'The crew enters a dig site built over ancient catacombs, reconstructs the Staff of Ice and crosses into a Dark Aether Nexus in pursuit of the Sentinel Artifact.',
    outcome: 'The Sentinel Artifact is recovered, giving the crew leverage in the hunt for Richtofen. Its power and the Doppelghast outbreak point toward the dangerous experiments waiting at Colton Hall.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }],
  },
  'shattered-veil': {
    date: '28 February 1991', location: 'Colton Hall, Liberty Falls, USA', chapter: 'S.A.M.’s betrayal',
    summary: 'At the Janus mansion, the crew uses the Sentinel Artifact while S.A.M. manoeuvres them into freeing Richtofen. The facility’s experiments culminate in the reanimated Z-Rex encounter.',
    outcome: 'Richtofen is freed and S.A.M.’s separate agenda becomes explicit. The chase moves to Janus Towers for the final confrontation over the Artifact and the fate of reality around the breach.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }],
  },
  reckoning: {
    date: '28 February 1991 — shortly after', location: 'Janus Towers, Liberty Falls, USA', chapter: 'The Janus reckoning',
    summary: 'The crew reaches Project Janus headquarters and is forced to choose between Richtofen and S.A.M. as the Sentinel Artifact destabilises the conflict.',
    outcome: 'Both endings converge on the crew being cast into the Dark Aether. There they encounter displaced counterparts from the old Aether story, creating the combined cast that begins Black Ops 7.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }, { label: 'Korborium complete BO6 story', url: 'https://www.youtube.com/watch?v=9Kvm2BJWvDc' }],
  },
  urzikstan: {
    date: '2021', location: 'Urzikstan', chapter: 'Operation Deadbolt',
    summary: 'Viktor Zakhaev’s forces trigger a new outbreak with Aetherium, prompting Operation Deadbolt to quarantine and investigate Urzikstan. Ava Jansen becomes central to the entity and the unresolved legacy of Requiem.',
    outcome: 'The operation reveals Ava as the biological child of Maxis and Ravenov, carried by Grey, and connects the deaths of the former Requiem senior staff to the modern outbreak.',
    sources: [{ label: 'Dark Aether chronology', url: darkAetherTimeline }],
  },
  'ashes-of-the-damned': {
    date: 'Unknown — inside the Dark Aether', location: 'A fractured Dark Aether frontier', chapter: 'The Warden’s game begins',
    summary: 'The BO6 crew and their displaced Aether counterparts awaken in a stitched-together wasteland. The Warden steals the Spiritus, forcing both crews into his contest while Shadowsmith Veytharion holds Maya and Dempsey.',
    outcome: 'Veytharion is defeated and the first two missing allies are restored, but the Warden retains control of the larger game. BO7 supplies no confirmed Earth calendar date for these operations.',
    sources: [{ label: 'Official BO7 Zombies hub', url: bo7Official }, { label: 'Map dossier', url: 'https://callofduty.fandom.com/wiki/Ashes_of_the_Damned' }],
  },
  'astra-malorum': {
    date: 'Unknown — after Ashes of the Damned', location: 'Dark Aether / Astra Malorum', chapter: 'The second Shadowsmith',
    summary: 'The combined crew follows the Warden’s path to an impossible observatory where Caltheris controls the next stage of the trial.',
    outcome: 'Nikolai and Grey are restored. The victory confirms that defeating the Warden’s Shadowsmiths can rebuild the scattered crew, but every recovery also advances his design.',
    sources: [{ label: 'Official BO7 Zombies hub', url: bo7Official }],
  },
  'paradox-junction': {
    date: 'Unknown — after Astra Malorum', location: 'Temporal Dark Aether prison', chapter: 'The Dark Heart',
    summary: 'The Warden traps the crew in a temporal prison built around a corrupted Nuketown. The Twins help the operators reach the Dark Heart at the centre of the loop.',
    outcome: 'The Dark Heart is destroyed and the crew breaks the prison’s immediate control, continuing deeper into the Warden’s realm.',
    sources: [{ label: 'Official BO7 Zombies hub', url: bo7Official }],
  },
  totenreich: {
    date: 'Unknown — after Paradox Junction', location: 'Dark Aether fortress', chapter: 'The World Seed',
    summary: 'Shadowsmith Dravakar oversees another fragment of the Warden’s realm. His warnings frame the Dark Aether itself as unstable rather than merely hostile.',
    outcome: 'Richtofen and Weaver are restored. The crew learns it must free the final Shadowsmith’s captive and recover the World Seed before the realm collapses.',
    sources: [{ label: 'Official BO7 Zombies hub', url: bo7Official }],
  },
  kowakujo: {
    date: 'Unknown — after Totenreich', location: 'Kowakujō, Dark Aether', chapter: 'Nyxara’s stronghold',
    summary: 'The crew assaults Nyxara’s Japanese fortress to release the last Shadowsmith and secure the World Seed.',
    outcome: 'Takeo and Carver are restored and the World Seed is recovered, assembling the players needed for the approach to the Warden’s final stronghold.',
    sources: [{ label: 'Official Kowakujō guide', url: 'https://www.callofduty.com/guides/blackops7/zombies/kowakujo' }],
  },
  'rex-infernus': {
    date: 'Unknown — final BO7 operation', location: 'The Warden’s Dark Aether domain', chapter: 'Final confrontation',
    summary: 'With the crew restored and the World Seed secured, the operators enter Rex Infernus for the culminating round-based operation against the Warden.',
    outcome: 'This dossier treats Rex Infernus as the final BO7 round-based chapter. Its historical imagery is not used as an Earth calendar date; the operation remains part of the undated Dark Aether sequence.',
    sources: [{ label: 'Official Season 05 notes', url: 'https://www.callofduty.com/patchnotes/2026/07/call-of-duty-black-ops-7-season-05-patch-notes' }],
  },
};
