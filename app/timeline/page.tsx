import { Fragment } from 'react';
import Link from '@/app/components/SiteLink';

type StoryEvent = {
  date: string;
  label: string;
  title: string;
  body: string;
  slug: string;
  source: string;
};

type StoryConcept = {
  label: string;
  title: string;
  body: string;
};

type StoryTransition = {
  afterEvent: number;
  label: string;
  title: string;
  body: string;
  nextFile: string;
  source: string;
};

type StoryAfterword = {
  label: string;
  title: string;
  body: string;
  nextFile: string;
};

type StoryChapter = {
  number: string;
  game: string;
  era: string;
  range: string;
  summary: string;
  concepts: readonly StoryConcept[];
  events: readonly StoryEvent[];
  note?: string;
  transitions?: readonly StoryTransition[];
  afterword?: StoryAfterword;
};

const officialTimeline = 'https://www.callofduty.com/uk/en/zombieschronicles/timeline';
const coldWarRecap = 'https://www.callofduty.com/blog/2021/07/call-of-duty-black-ops-cold-war-zombies-story-so-far';
const vanguardStory = 'https://www.callofduty.com/blog/2021/10/call-of-duty-vanguard-zombies-dark-aether-next-chapter';
const deadboltStory = 'https://www.callofduty.com/blog/2023/09/call-of-duty-modern-warfare-III-zombies-operation-deadbolt-trailer';
const darkAetherChronology = 'https://callofduty.fandom.com/wiki/Portal:Timeline/Dark_Aether_Saga';

const chapters: readonly StoryChapter[] = [
  {
    number: 'I',
    game: 'World at War',
    era: 'AETHER STORY',
    range: '1940s–1945',
    summary: 'The archive begins with Element 115, Group 935 and the experiments that turn a weapons programme into the first playable undead outbreaks. Ultimis forms as Richtofen’s betrayal of Maxis comes to light.',
    concepts: [
      { label: 'SUBSTANCE', title: 'Element 115', body: 'The extraterrestrial element powers teleportation, weapons research and the reanimation experiments behind the original outbreak.' },
      { label: 'ORGANISATION', title: 'Group 935', body: 'Maxis’s research collective develops teleporters and Wunderwaffe technology while Richtofen secretly pursues a different agenda.' },
    ],
    events: [
      { date: '1940s', label: 'OUTBREAK RECORD', title: 'Nacht der Untoten', body: 'A crashed aircrew is trapped at an airfield bunker amid the earliest playable results of Element 115 contamination.', slug: 'nacht-der-untoten', source: officialTimeline },
      { date: '1945', label: 'EXTRACTION FAILURE', title: 'Verrückt', body: 'A Marine team enters Wittenau Sanatorium to extract Peter McCain. The rescue collapses, Dempsey is captured and the facility’s human experiments are exposed.', slug: 'verruckt', source: officialTimeline },
      { date: '1945', label: 'DIVISION 9', title: 'Shi No Numa', body: 'Richtofen, Dempsey, Takeo and Nikolai converge at the Rising Sun facility. The four become Ultimis and follow Richtofen’s trail.', slug: 'shi-no-numa-waw', source: officialTimeline },
      { date: '28 OCT 1945', label: 'GROUP 935', title: 'Der Riese', body: 'At the Giant, the crew activates the teleporters and discovers recordings of Richtofen’s betrayal. An overload throws Ultimis forward through time.', slug: 'der-riese', source: officialTimeline },
    ],
  },
  {
    number: 'II',
    game: 'Black Ops',
    era: 'AETHER STORY',
    range: '1963–2025 destination chain',
    summary: 'Ultimis pursues Richtofen’s Grand Scheme. Each operation supplies another component until the Moon Pyramid Device changes control of the undead and Maxis devastates Earth.',
    concepts: [
      { label: 'DIRECTIVE', title: 'The Grand Scheme', body: 'Richtofen guides the crew toward the Golden Rod, Focusing Stone and Moon so he can replace Samantha inside the MPD.' },
      { label: 'OBJECT', title: 'Golden Rod', body: 'Recovered through the Call of the Dead film crew and combined with the Focusing Stone at Griffin Station.' },
      { label: 'OBJECT', title: 'Focusing Stone', body: 'Claimed at Shangri-La after Ultimis manipulates the site’s eclipse and time-loop machinery.' },
      { label: 'CONTROL SYSTEM', title: 'Moon Pyramid Device', body: 'The MPD transfers control of the undead from Samantha to Richtofen, completing the scheme—but not saving Earth.' },
    ],
    events: [
      { date: '28 OCT 1963', label: 'TIME DISPLACEMENT', title: 'Kino der Toten', body: 'Ultimis arrives at a Group 935 theatre decades after Der Riese and repairs another teleporter while Richtofen keeps the true mission concealed.', slug: 'kino-der-toten', source: officialTimeline },
      { date: '1963', label: 'SOVIET COSMODROME', title: 'Ascension', body: 'The crew frees Gersh from the Casimir mechanism while the concurrent Pentagon outbreak unfolds in Five.', slug: 'ascension', source: officialTimeline },
      { date: '2011', label: 'SIBERIAN FACILITY', title: 'Call of the Dead', body: 'A film crew survives George Romero’s undead production and retrieves the Golden Rod for Ultimis, trapped behind a sealed door.', slug: 'call-of-the-dead', source: officialTimeline },
      { date: 'DATE DISPUTED', label: 'TIME LOOP', title: 'Shangri-La', body: 'Ultimis exploits an eclipse and Brock and Gary’s repeating expedition to secure the Focusing Stone. Its sequence is firm even though its calendar date is not.', slug: 'shangri-la', source: officialTimeline },
      { date: '13 OCT 2025', label: 'GRIFFIN STATION', title: 'Moon', body: 'Richtofen exchanges bodies with Samantha and seizes the Aether. Maxis retaliates by directing missiles at Earth, fracturing the planet.', slug: 'moon', source: officialTimeline },
    ],
  },
  {
    number: 'III',
    game: 'Black Ops II',
    era: 'AETHER STORY',
    range: '2025–2035, then Dimension 63',
    summary: 'The ruined Earth belongs to Victis and two competing voices. The Maxis ending at Buried closes that branch before the archive hands the story to Primis at Origins, then explains the Mob cycle that governs what follows.',
    concepts: [
      { label: 'CREW', title: 'Victis', body: 'Misty, Marlton, Russman and Stuhlinger cross the broken Earth while Maxis and Richtofen compete for their obedience.' },
      { label: 'NETWORK', title: 'Polarization Devices', body: 'The towers at Green Run, Die Rise and Buried become a global control system for whichever voice Victis chooses.' },
      { label: 'CREW', title: 'Primis', body: 'The younger alternate Richtofen, Dempsey, Takeo and Nikolai first unite at Origins in Dimension 63.' },
      { label: 'CAUSAL PRISON', title: 'The Mob Cycle', body: 'Alcatraz repeats until Weasel survives. Whether the cycle continues or breaks determines Primis’s later route.' },
    ],
    events: [
      { date: '13 OCT 2025', label: 'CONCURRENT IMPACT', title: 'Nuketown Zombies', body: 'The Nevada site falls during the Moon catastrophe. The control transition and missile impact connect Nuketown directly to Griffin Station.', slug: 'nuketown-zombies', source: officialTimeline },
      { date: '2035', label: 'POLARIZATION I', title: 'TranZit / Green Run', body: 'Victis crosses a devastated region while Maxis and Richtofen issue incompatible instructions for the first tower.', slug: 'tranzit', source: officialTimeline },
      { date: '2035', label: 'POLARIZATION II', title: 'Die Rise', body: 'The crew is displaced to Shanghai and activates a second tower. Richtofen speaks through Stuhlinger after his consumption of zombie flesh.', slug: 'die-rise', source: officialTimeline },
      { date: '31 DEC 2035', label: 'MAXIS CONTINUATION', title: 'Buried', body: 'The Maxis super Easter egg ending is the branch continued by later Aether material: Maxis takes control, casts Richtofen into a zombie and begins destroying what remains.', slug: 'buried', source: officialTimeline },
      { date: '4 JUN 1918', label: 'DIMENSION 63', title: 'Origins', body: 'The narrative now shifts to Primis. The four build the elemental staffs, free Samantha and receive the mission that drives the next cycle.', slug: 'origins', source: officialTimeline },
      { date: '31 DEC 1933', label: 'PURGATORIAL LOOP', title: 'Mob of the Dead', body: 'Four prisoners repeat their failed Alcatraz escape. The archive places Mob after Origins because its broken cycle is the lock that diverts Primis in Black Ops 4.', slug: 'mob-of-the-dead', source: officialTimeline },
    ],
    note: 'FILE A // ORIGINAL UNIVERSE — Nuketown, Victis and the three polarization towers continue the Ultimis-era Earth after Moon. This branch ends with the continuity-leading Maxis victory at Buried.',
    transitions: [{
      afterEvent: 4,
      label: 'DIMENSIONAL HANDOFF // ORIGINAL EARTH → DIMENSION 63',
      title: 'Samantha reaches another Maxis',
      body: 'Maxis wins the tower struggle at Buried, enters the Aether and begins destroying the ruined Earth while searching for Samantha in Agartha. From there, Samantha reaches across realities to Dimension 63: her voice contacts that world’s Maxis and guides the four younger counterparts who converge at Excavation Site 64. Victis has not travelled back to 1918—the archive has changed universes and crews.',
      nextFile: 'FILE B // DIMENSION 63 + THE ALCATRAZ CYCLE',
      source: officialTimeline,
    }],
  },
  {
    number: 'IV',
    game: 'Black Ops III',
    era: 'AETHER STORY',
    range: 'The repeating Primis route',
    summary: 'Richtofen collects the souls of the alternate crew while the Shadowman and Dr. Monty reveal the larger Keeper–Apothicon conflict. Revelations closes the loop by sending Primis back to the Great War.',
    concepts: [
      { label: 'KEY ARTIFACT', title: 'Summoning Key', body: 'A Keeper device that can contain souls and worlds; Richtofen takes it from Morg City to complete his collection.' },
      { label: 'COSMIC FACTION', title: 'Apothicons', body: 'Corrupted Keepers led through the Shadowman’s influence, seeking entry into Monty’s constructed world.' },
      { label: 'ARCHITECT', title: 'Dr. Monty', body: 'A powerful Keeper-aligned manipulator who preserves his perfect world by returning Primis to the Great War.' },
      { label: 'STATE', title: 'The Cycle', body: 'Origins, the soul mission, Revelations and the Great War feed back into one another until Alcatraz changes.' },
    ],
    events: [
      { date: 'SEQUENCE I', label: 'MORG CITY', title: 'Shadows of Evil', body: 'The Shadowman deceives four marked residents into opening his route. Primis Richtofen takes the Summoning Key and leaves with the mission in motion.', slug: 'shadows-of-evil', source: officialTimeline },
      { date: 'SEQUENCE II', label: 'DER RIESE FRACTURE', title: 'The Giant', body: 'Primis confronts an older Richtofen. The younger Richtofen kills him and begins securing the souls of the alternate four.', slug: 'the-giant', source: officialTimeline },
      { date: 'SEQUENCE III', label: 'DEMPSEY', title: 'Der Eisendrache', body: 'Primis destroys the Moon installation in this fracture and captures Ultimis Dempsey’s soul after his death.', slug: 'der-eisendrache', source: officialTimeline },
      { date: 'SEQUENCE IV', label: 'TAKEO', title: 'Zetsubou No Shima', body: 'Takeo confronts his betrayed older self while Richtofen retrieves the Alcatraz blood vials that underpin his insurance policy.', slug: 'zetsubou-no-shima', source: officialTimeline },
      { date: 'CYCLE ROUTE', label: 'NIKOLAI', title: 'Gorod Krovi', body: 'Primis kills the Ultimis Nikolai whose soul has not been preserved, completing the collection used to build the House.', slug: 'gorod-krovi', source: officialTimeline },
      { date: 'CYCLE ROUTE', label: 'THE HOUSE', title: 'Revelations', body: 'The Shadowman invades Monty’s world. After he is contained, Monty sends the paradox-bound Primis to the Great War, completing the loop.', slug: 'revelations', source: officialTimeline },
    ],
  },
  {
    number: 'V',
    game: 'Black Ops 4',
    era: 'AETHER FINALE + CHAOS FILE',
    range: 'The broken cycle',
    summary: 'When Weasel breaks the Mob cycle, Primis is diverted into Blood of the Dead. Nikolai takes command, unites Primis and Ultimis, and ends the multiverse at Tag der Toten. The separate Chaos continuity is preserved as its own side file.',
    concepts: [
      { label: 'DIVERGENCE', title: 'Broken Cycle', body: 'The changed Kronorium traps Primis at Alcatraz and prevents the familiar Gorod Krovi–Revelations route.' },
      { label: 'ALLIANCE', title: 'Primis + Ultimis', body: 'The two incarnations finally travel together after the Classified ending brings the post-Moon crew into Nikolai’s plan.' },
      { label: 'FINAL DEVICE', title: 'Agarthan Device', body: 'Victis constructs the mechanism Nikolai needs to collapse the corrupted multiverse into the Dark Aether.' },
      { label: 'SEPARATE CONTINUITY', title: 'Chaos Story', body: 'Scarlett’s crew follows Sentinel Artifacts and Prima Materia through its own chronology; it is not folded into Aether release order.' },
    ],
    events: [
      { date: 'BETWEEN ZETSUBOU + GOROD', label: 'ALCATRAZ DIVERGENCE', title: 'Blood of the Dead', body: 'In the repeating route, Primis briefly stops at Alcatraz after Zetsubou No Shima to collect blood vials before travelling to Gorod Krovi. Because Weasel has broken Mob’s cycle, the Kronorium changes and this same stop becomes Blood of the Dead: the Warden traps Primis, Richtofen dies, Nikolai takes command and the Gorod–Revelations route is abandoned.', slug: 'blood-of-the-dead', source: officialTimeline },
      { date: '1963 / POST-BLOOD', label: 'TWO TIME LAYERS', title: 'Classified', body: 'The playable Pentagon outbreak follows Ultimis in 1963, before Moon. Its ending jumps forward: after Blood of the Dead, Primis reaches Groom Lake and collects the post-Moon Ultimis crew. Both moments belong to Classified, but they occur decades—and a broken cycle—apart.', slug: 'classified', source: officialTimeline },
      { date: 'BROKEN-CYCLE ROUTE', label: 'ELEMENTAL SHARD // CAMP EDWARD', title: 'Alpha Omega', body: 'Primis and Ultimis uncover Broken Arrow, Rushmore, the Avogadro and the Elemental Shard while Samantha and Eddie escape the American MPD.', slug: 'alpha-omega', source: officialTimeline },
      { date: 'AETHER FINALE', label: 'AGARTHAN DEVICE // SIBERIA', title: 'Tag der Toten', body: 'Victis assembles the Agarthan Device. Nikolai destroys the Summoning Key and ends Primis and Ultimis so the paradox-bound multiverse can collapse into the Dark Aether.', slug: 'tag-der-toten', source: 'https://callofduty.fandom.com/wiki/Tag_der_Toten' },
      { date: '20 MAR 1912', label: 'CHAOS PROLOGUE', title: 'Dead of the Night', body: 'At Alistair Rhodes’s estate, the Order kidnaps him and corrupts the guests. This is the chronological opening of the Chaos investigation.', slug: 'dead-of-the-night', source: 'https://callofduty.fandom.com/wiki/Chaos_Story' },
      { date: '14–15 APR 1912', label: 'CHAOS EXPEDITION', title: 'Voyage of Despair', body: 'Scarlett’s crew boards Titanic to steal the Odin Artifact. The Order activates it, transforming those aboard while the ship continues toward disaster.', slug: 'voyage-of-despair', source: 'https://callofduty.fandom.com/wiki/Chaos_Story' },
      { date: 'AFTER VOYAGE', label: 'INDUCED VISION', title: 'IX', body: 'At Delphi, the crew inhales a vapour and experiences an arena trial set in antiquity. The setting is ancient, but the crew undergoes the vision after Titanic.', slug: 'ix', source: 'https://callofduty.fandom.com/wiki/Chaos_Story' },
      { date: 'AFTER 15 APR 1912', label: 'DELPHI', title: 'Ancient Evil', body: 'The crew enters the hidden city, defeats Perseus and discovers that the Oracle is Medusa. She seizes Scarlett and the Library, leaving Chaos unresolved.', slug: 'ancient-evil', source: 'https://callofduty.fandom.com/wiki/Chaos_Story' },
    ],
    transitions: [{
      afterEvent: 4,
      label: 'CONTINUITY SEAL // AETHER STORY ENDS',
      title: 'The multiverse is banished to the Dark Aether',
      body: 'Nikolai’s solution does not repair the old branches. The corrupted multiverse, Element 115 and its repeating paradoxes are collapsed and cast into the Dark Aether. Samantha and Eddie alone walk into a newly formed, single universe. The records below are therefore not the next Aether mission: they are the separate Chaos continuity released alongside the finale.',
      nextFile: 'SEPARATE FILE // CHAOS STORY',
      source: 'https://www.callofduty.com/en/blog/2018-10/new-zombies-adventures.html',
    }],
    afterword: {
      label: 'UNIVERSE RESET // OLD AETHER SEALED',
      title: 'A new universe begins',
      body: 'The Aether story’s multiverse is gone, but everything banished from it remains inside the Dark Aether. The next connected chapter starts in this single universe during 1944, when the Endstation breach lets ancient Dark Aether entities and their artifacts reach humanity.',
      nextFile: 'NEXT CONTINUITY // DARK AETHER STORY',
    },
  },
  {
    number: 'VI',
    game: 'Vanguard Zombies',
    era: 'DARK AETHER PREQUEL',
    range: '1944',
    summary: 'The new universe’s Second World War reveals that Dark Aether entities contacted humanity long before Requiem. The Endstation breach awakens their artifacts and lets Kortifex turn Stalingrad into an undead prison.',
    concepts: [
      { label: 'NAZI BATTALION', title: 'Die Wahrheit', body: 'Von List’s occult unit searches for artifacts and uses the Endstation breach to turn forbidden research into a weapon.' },
      { label: 'DARK AETHER LORD', title: 'Kortifex', body: 'Kortifex the Deathless bonds with Von List, raises the dead and seeks to restore his power through the Construct.' },
      { label: 'HUMAN ALLY', title: 'Gabriel Krafft', body: 'The demonologist forced to recover the artifacts becomes the operators’ guide and later survives into the Black Ops 6 era.' },
      { label: 'ENTITY ALLIANCE', title: 'The Dark Aether Four', body: 'Saraxis, Norticus, Inviktor and Bellekar bond with the operators in opposition to Kortifex.' },
    ],
    events: [
      { date: '1944', label: 'STALINGRAD', title: 'Der Anfang', body: 'Von List and Kortifex seal the city with dark magic. Allied operators bond with rival entities and answer Krafft’s call for help.', slug: 'der-anfang', source: vanguardStory },
      { date: '1944', label: 'EASTERN DESERT', title: 'Terra Maledicta', body: 'The operators recover Vercanna’s artifact and the Decimator Shield while searching for the lost page of the Tome of Rituals.', slug: 'terra-maledicta', source: 'https://www.callofduty.com/blog/2022/02/call-of-duty-vanguard-warzone-season-two-multiplayer-zombies' },
      { date: '1944', label: 'SWAMP OF DEATH', title: 'Shi No Numa Reborn', body: 'At the Division 9 swamp, the team recovers the relic capable of separating Kortifex from Von List and exposes more of Kortifex’s past.', slug: 'shi-no-numa', source: 'https://www.callofduty.com/blog/2022/06/call-of-duty-vanguard-zombies-shi-no-numa-survival-guide-map' },
      { date: '1944', label: 'DARK AETHER', title: 'The Archon', body: 'The operators pass the Construct’s trials and defeat the Archon, destroying Kortifex and ending Von List’s attempt to command an undead army.', slug: 'the-archon', source: 'https://www.callofduty.com/blog/2022/08/call-of-duty-vanguard-warzone-season-five-last-stand-maps-zombies-update' },
    ],
  },
  {
    number: 'VII',
    game: 'Black Ops Cold War',
    era: 'DARK AETHER STORY',
    range: '1983–1985',
    summary: 'Projekt Endstation is reopened and a Cold War intelligence conflict begins. Requiem and Omega weaponise the same disaster while Samantha Maxis and the Forsaken are moved into position for Richtofen’s Project Janus.',
    concepts: [
      { label: 'CIA TASK FORCE', title: 'Requiem', body: 'A containment and research group led in secret by Edward Richtofen, with Weaver directing its field response.' },
      { label: 'SOVIET PROGRAMME', title: 'Omega Group', body: 'Requiem’s counterpart, pursuing portals, Aetherium and the Forsaken as strategic weapons.' },
      { label: 'ENTITY', title: 'The Forsaken', body: 'Kazimir Zykov survives the Dark Aether by consuming rival beings, then manipulates both factions into enabling his return.' },
      { label: 'ANOMALY', title: 'Samantha Maxis', body: 'A field operative whose time in the Dark Aether awakens extraordinary power and makes her central to Richtofen’s private agenda.' },
    ],
    events: [
      { date: '13 NOV 1983', label: 'OPERATION CERBERUS', title: 'Die Maschine', body: 'Requiem enters Morasko, helps Orlov destroy the cyclotron and closes the local gateway without ending the global breach crisis.', slug: 'die-maschine', source: coldWarRecap },
      { date: '15 JUN 1984', label: 'OUTPOST 25', title: 'Firebase Z', body: 'The strike team assaults Omega’s Vietnam facility, defeats Orda and extracts Samantha from the Dark Aether.', slug: 'firebase-z', source: coldWarRecap },
      { date: '1984–1985', label: 'OPERATION THRESHOLD', title: 'Outbreak', body: 'Across the Ural zones, Requiem contests Omega’s Reality Inversion warheads and is ultimately captured during Operation Excision.', slug: 'outbreak', source: coldWarRecap },
      { date: '2 FEB 1985', label: 'EAST BERLIN', title: 'Mauer der Toten', body: 'Kravchenko forces the captured strike team to stop Valentina. Klaus carries the inversion warhead into the portal after her defeat.', slug: 'mauer-der-toten', source: coldWarRecap },
      { date: '4 JUN 1985', label: 'FIRST DOMINO', title: 'Forsaken', body: 'Zykov reveals himself as the Forsaken. Samantha contains him in the Dark Aether while Richtofen arrests Requiem’s leadership and closes the organisation.', slug: 'forsaken', source: 'https://www.callofduty.com/blog/2021/10/call-of-duty-black-ops-cold-war-zombies-forsaken-map-guide' },
    ],
  },
  {
    number: 'VIII',
    game: 'Black Ops 6',
    era: 'DARK AETHER STORY',
    range: 'February 1991',
    summary: 'Six years after Requiem falls, its imprisoned leaders escape Terminus while Project Janus collapses at Liberty Falls. Their pursuit of Richtofen becomes a race for the Sentinel Artifact and ends inside the Dark Aether.',
    concepts: [
      { label: 'BLACK PROGRAMME', title: 'Project Janus', body: 'Richtofen’s programme uses the captured Forsaken, Aetherium and dimensional research to pursue the restoration of his family.' },
      { label: 'FORMER DIRECTORS', title: 'Ex-Requiem', body: 'Weaver, Grey, Carver and Strauss escape imprisonment with Maya and Peck, then hunt the director who betrayed them.' },
      { label: 'ARTIFACT', title: 'Sentinel Artifact', body: 'The Door to Nowhere becomes the crew’s path through Avalon and the catalyst for the final Janus confrontation.' },
      { label: 'ARTIFICIAL PERSON', title: 'S.A.M.', body: 'Janus’s system carries Samantha’s memories but develops an independent agenda and demands a body of her own.' },
    ],
    events: [
      { date: '18 FEB 1991', label: 'PHILIPPINE SEA', title: 'Terminus', body: 'Peck and Maya free the Requiem prisoners. The crew defeats Patient 13 and follows Krafft’s name toward Avalon.', slug: 'terminus', source: 'https://www.callofduty.com/blog/2024/08/call-of-duty-black-ops-6-zombies-terminus-map' },
      { date: '19 FEB 1991', label: 'WEST VIRGINIA', title: 'Liberty Falls', body: 'A Project Janus breach consumes the town. Panos escapes by exchanging places with the response team while Richtofen disappears.', slug: 'liberty-falls', source: 'https://www.callofduty.com/blog/2024/08/call-of-duty-next-black-ops-6-zombies-liberty-falls-map-intel' },
      { date: '25 FEB 1991', label: 'AVALON', title: 'Citadelle des Morts', body: 'The crew awakens four elemental swords, defeats the Guardian and receives Krafft’s final direction toward the Artifact excavation.', slug: 'citadelle-des-morts', source: darkAetherChronology },
      { date: '25 FEB 1991', label: 'EXCAVATION', title: 'The Tomb', body: 'The team rebuilds the Staff of Ice, enters a Dark Aether Nexus and identifies the true Odin Artifact among false copies.', slug: 'the-tomb', source: darkAetherChronology },
      { date: '28 FEB 1991', label: 'COLTON HALL', title: 'Shattered Veil', body: 'S.A.M. manipulates the crew into using the Artifact. Richtofen reveals her nature and forms a temporary alliance against the system.', slug: 'shattered-veil', source: darkAetherChronology },
      { date: '28 FEB 1991', label: 'JANUS TOWERS', title: 'Reckoning', body: 'Whether the Artifact reconstructs Richtofen’s family or S.A.M.’s body, the paths converge: the crew enters the Dark Aether and meets four alternate soldiers.', slug: 'reckoning', source: darkAetherChronology },
    ],
  },
  {
    number: 'IX',
    game: 'Black Ops 7',
    era: 'DARK AETHER STORY',
    range: 'Crew sequence; Earth date unknown',
    summary: 'Immediately after Reckoning by the crew’s experience, eight survivors are stripped of their essence and scattered through memory-built locations. Dates are intentionally replaced with sequence markers because time inside the Dark Aether is non-linear.',
    concepts: [
      { label: 'ARCHITECT', title: 'The Warden', body: 'A would-be ruler who imposes order on the Dark Aether by draining the crew and controlling the Shadowsmiths.' },
      { label: 'ENTITY ORDER', title: 'Shadowsmiths', body: 'Veytharion, Caltheris, Dravakar and Nyxara each hold part of the route to the Warden and the means to oppose him.' },
      { label: 'STOLEN ESSENCE', title: 'Spiritus', body: 'The crew’s divided soul-energy is restored operation by operation as the Warden’s prison is dismantled.' },
      { label: 'KEY OBJECT', title: 'World Seed', body: 'Recovered at Kowakujō and used to open the route into the Warden’s final domain.' },
    ],
    events: [
      { date: 'SEQUENCE I', label: 'MEMORY GEOGRAPHY', title: 'Ashes of the Damned', body: 'The combined crews awaken in the Warden’s realm, free Veytharion and restore Maya and Dempsey.', slug: 'ashes-of-the-damned', source: 'https://www.callofduty.com/blackops7/zombies' },
      { date: 'SEQUENCE II', label: 'SATURN ORBIT', title: 'Astra Malorum', body: 'At an observatory suspended in Saturn’s rings, the crew frees Caltheris before the Warden recaptures the travellers.', slug: 'astra-malorum', source: 'https://www.callofduty.com/blackops7/zombies' },
      { date: 'SEQUENCE III', label: 'TEMPORAL PRISON', title: 'Paradox Junction', body: 'The group follows the Twins’ games through a looping Nuketown prison and destroys the Dark Heart.', slug: 'paradox-junction', source: 'https://www.callofduty.com/blackops7/zombies' },
      { date: 'SEQUENCE IV', label: 'EIDSKALLEN', title: 'Totenreich', body: 'The crew confronts the memory of a Group 935 giant programme, defeats Dravakar and restores Richtofen and Weaver.', slug: 'totenreich', source: 'https://www.callofduty.com/blackops7/zombies' },
      { date: 'SEQUENCE V', label: 'FORTRESS', title: 'Kowakujō', body: 'Nyxara is freed, Takeo and Carver return, and the World Seed provides access to the final Shadowsmith places of power.', slug: 'kowakujo', source: 'https://www.callofduty.com/guides/blackops7/zombies/kowakujo' },
      { date: 'FINAL SEQUENCE', label: 'WARDEN DOMAIN', title: 'Rex Infernus', body: 'The restored crew cleanses the remaining places of power and defeats the Warden, closing Ex-Requiem’s causal loop while the alternate four depart.', slug: 'rex-infernus', source: 'https://www.callofduty.com/blackops7/zombies' },
    ],
  },
  {
    number: 'X',
    game: 'Modern Warfare Zombies',
    era: 'DARK AETHER — MATERIAL-WORLD FUTURE',
    range: '2021',
    summary: 'Operation Deadbolt is the material-world consequence of Requiem’s unfinished history. Zakhaev releases enriched Aetherium in Urzikstan, Ava Jansen confronts her connection to Samantha, and the Entity draws the story back into the Dark Aether.',
    concepts: [
      { label: 'CIA CONTINGENCY', title: 'Operation Deadbolt', body: 'A multinational containment force activated after Zakhaev creates the Urzikstan Exclusion Zone.' },
      { label: 'PMC', title: 'Terminus Outcomes', body: 'Jack Fletcher’s mercenaries recover Aetherium for Zakhaev and repeatedly pursue Deadbolt into the Dark Aether.' },
      { label: 'SCIENTIST', title: 'Ava Jansen', body: 'The daughter created from Samantha Maxis and Sergei Ravenov’s DNA becomes psychically linked to the Entity.' },
      { label: 'DARK REFLECTION', title: 'The Entity', body: 'A powerful being tied to Ava and Samantha’s legacy, seeking to spread the Dark Aether through the Exclusion Zone.' },
    ],
    note: 'NON-LINEAR LINK // MWZ occurs in 2021 on Earth, but Ava’s Dark Aether involvement intersects with the BO7 crew’s post-1991 journey. The archive preserves both clocks instead of forcing them into a false single date.',
    events: [
      { date: '2021', label: 'URZIKSTAN', title: 'The Exclusion Zone', body: 'Zakhaev breaks an enriched Aetherium vial during his escape, creating a massive incursion. The CIA activates Operation Deadbolt to contain it.', slug: 'urzikstan', source: deadboltStory },
      { date: 'ACTS I–III', label: 'ZAKHAEV OPERATION', title: 'Deadbolt versus Terminus', body: 'Strike teams recover intelligence, rescue Ava and dismantle Zakhaev’s ability to exploit the zone while learning that the Requiem legacy is still active.', slug: 'urzikstan', source: 'https://www.callofduty.com/guides/zombies/call-of-duty-guides-modern-warfare-zombies-overview-and-lore' },
      { date: 'ACT IV', label: 'DARK AETHER RIFTS', title: 'Bad Signal and Countermeasures', body: 'Deadbolt enters the Dark Aether, confronts further anomalies and finds Terminus willing to follow the strike team across the dimensional boundary.', slug: 'urzikstan', source: 'https://www.callofduty.com/blog/2024/03/call-of-duty-modern-warfare-iii-warzone-wzm-season-2-reloaded-maps-modes-zombies-announcement' },
      { date: 'ACT IV', label: 'RESCUE OPERATION', title: 'Union', body: 'Ava is lured into a new region by a psychic force. Ravenov and the strike team retrieve her, but her connection to the Entity continues to deepen.', slug: 'urzikstan', source: 'https://www.callofduty.com/blog/2024/04/call-of-duty-modern-warfare-iii-warzone-wzm-season-3-reloaded-maps-modes-zombies-announcement' },
      { date: 'FINAL MISSION', label: 'ENTITY CONFRONTATION', title: 'Ascension', body: 'Ava, Ravenov and the strike team sever the Entity’s connection and end the immediate Exclusion Zone outbreak. The Entity’s warning points toward the Shadowsmiths.', slug: 'urzikstan', source: 'https://www.callofduty.com/blog/2024/08/call-of-duty-modern-warfare-iii-warzone-wzm-season-5-reloaded-maps-modes-zombies-announcement' },
    ],
  },
];

const sources = [
  ['Call of Duty', 'Official Zombies Chronicles timeline', officialTimeline],
  ['Call of Duty', 'Black Ops Cold War: The Story So Far', coldWarRecap],
  ['Call of Duty', 'Vanguard: The Next Dark Aether Chapter', vanguardStory],
  ['Call of Duty', 'Operation Deadbolt lore introduction', deadboltStory],
  ['Call of Duty Wiki', 'Dark Aether Saga chronology', darkAetherChronology],
  ['The Korborium', 'Treyarch Zombies narrative analysis', 'https://www.youtube.com/@thekorborium115'],
  ['r/CODZombies', 'Community research and cipher discussion', 'https://www.reddit.com/r/CODZombies/'],
] as const;

export default function Timeline() {
  return (
    <main className="route-page timeline-page">
      <header>
        <Link href="/">DA / DARK AETHER ARCHIVE</Link>
        <nav><Link href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link className="selected" href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav>
      </header>

      <section className="route-hero timeline-hero">
        <span>COMPLETE STORYLINE // RECOMMENDED READING ORDER</span>
        <h1>From Group 935 to the Warden</h1>
        <p>The Treyarch Zombies story from World at War onward, organised by narrative chapter rather than beginning halfway through with Requiem.</p>
      </section>

      <section className="timeline-method">
        <p className="section-kicker">ANALYST’S NOTE</p>
        <h2>One story, several clocks</h2>
        <p>This archive follows the order in which the story is easiest to understand: the original Aether chain, the Primis cycle and its collapse, then the Dark Aether universe. Dates remain visible inside each record, but time travel, fractures and the Dark Aether mean that a simple oldest-to-newest sort would put key explanations in the wrong place.</p>
      </section>

      <section className="continuity-spine" aria-label="Story continuity guide">
        <div><span>01</span><b>Aether story</b><small>World at War → Black Ops 4</small></div>
        <i aria-hidden="true">→</i>
        <div><span>02</span><b>Multiverse collapse</b><small>Tag der Toten</small></div>
        <i aria-hidden="true">→</i>
        <div><span>03</span><b>Dark Aether story</b><small>Vanguard → Black Ops 7 / MWZ</small></div>
        <div className="continuity-branch"><span>SIDE FILE</span><b>Chaos story</b><small>Independent Black Ops 4 chronology</small></div>
      </section>

      <section className="timeline-chapters">
        {chapters.map((chapter) => (
          <Fragment key={chapter.number}>
          <article className="timeline-chapter">
            <div className="timeline-chapter-head">
              <div>
                <span>CHAPTER {chapter.number}{' // '}{chapter.era}</span>
                <h2>{chapter.game}</h2>
                <small>{chapter.range}</small>
              </div>
              <p>{chapter.summary}</p>
            </div>

            <div className="timeline-concepts" aria-label={`${chapter.game} key organisations and concepts`}>
              {chapter.concepts.map((concept) => (
                <article key={concept.title}>
                  <span>{concept.label}</span>
                  <h3>{concept.title}</h3>
                  <p>{concept.body}</p>
                </article>
              ))}
            </div>

            {chapter.note ? <aside className="timeline-branch-note"><b>ARCHIVE NOTE</b><p>{chapter.note}</p></aside> : null}

            <div className="timeline-list">
              {chapter.events.map((event, index) => {
                const transition = chapter.transitions?.find((item) => item.afterEvent === index + 1);

                return <Fragment key={`${chapter.number}-${event.title}-${index}`}>
                <article>
                  <time>{event.date}</time>
                  <div>
                    <span>{String(index + 1).padStart(2, '0')}{' // '}{event.label}</span>
                    <h3><Link href={`/maps/${event.slug}`}>{event.title}</Link></h3>
                    <p>{event.body}</p>
                    <p className="timeline-citation"><a href={event.source} target="_blank" rel="noreferrer">SOURCE FILE ↗</a> · <Link href={`/maps/${event.slug}`}>OPEN MAP DOSSIER →</Link></p>
                  </div>
                </article>
                {transition ? (
                  <aside className="timeline-transition">
                    <span>{transition.label}</span>
                    <div>
                      <h3>{transition.title}</h3>
                      <p>{transition.body}</p>
                      <a href={transition.source} target="_blank" rel="noreferrer">REFERENCE FILE ↗</a>
                    </div>
                    <b>{transition.nextFile}</b>
                  </aside>
                ) : null}
                </Fragment>;
              })}
            </div>
          </article>
          {chapter.afterword ? (
            <aside className="timeline-era-reset">
              <span>{chapter.afterword.label}</span>
              <h2>{chapter.afterword.title}</h2>
              <p>{chapter.afterword.body}</p>
              <b>{chapter.afterword.nextFile}</b>
            </aside>
          ) : null}
          </Fragment>
        ))}
      </section>

      <section className="timeline-sources">
        <p className="section-kicker">REFERENCE DESK</p>
        <h2>Sources and further reading</h2>
        <p>Official timelines, story briefings and in-game records lead the archive. Community research is used to connect ciphers and disputed sequencing, and is kept separate from confirmed material.</p>
        <ol>{sources.map(([publisher, title, url]) => <li key={url}><span>{publisher}</span><a href={url} target="_blank" rel="noreferrer">{title} ↗</a></li>)}</ol>
      </section>
    </main>
  );
}
