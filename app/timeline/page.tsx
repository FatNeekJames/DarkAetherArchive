import Link from 'next/link';

const chronology = 'https://callofduty.fandom.com/wiki/Portal:Timeline/Dark_Aether_Saga';
const officialRecap = 'https://www.callofduty.com/blog/2021/07/call-of-duty-black-ops-cold-war-zombies-story-so-far';

const events = [
  ['7 MAR 1944', 'PROJEKT ENDSTATION', 'The first breach', 'At Endstation in Morasko, a cyclotron accident tears open a passage into another dimension. The facility is abandoned, but its machinery—and the dead left behind—remain the seed of the modern crisis.', 'die-maschine'],
  ['1 NOV 1983', 'OMEGA GROUP', 'Endstation reactivated', 'Omega Group restarts the cyclotron. Breaches begin appearing around the world, drawing the newly formed Requiem response force into a secret intelligence war.', 'die-maschine'],
  ['13 NOV 1983', 'OPERATION CERBERUS', 'Die Maschine', 'Requiem enters Morasko, learns what Endstation created and overloads the cyclotron. The local gateway closes, but Omega’s programme and the Dark Aether threat survive.', 'die-maschine'],
  ['15 JUN 1984', 'OUTPOST 25', 'Firebase Z', 'The strike team assaults Omega’s Vietnam facility and extracts Samantha Maxis from the Dark Aether. Requiem director Edward Richtofen has her confined rather than welcomed home.', 'firebase-z'],
  ['JUN–NOV 1984', 'OPERATION THRESHOLD', 'The Outbreak campaign', 'Across the Ural outbreak zones, Requiem recovers Aetherium, studies anomalies and contests Omega’s weaponisation programme. The campaign escalates through Ruka, Sanatorium and Zoo.', 'outbreak'],
  ['16 NOV 1984', 'OPERATION INVERSIYA', 'Omega’s inversion warhead', 'Requiem disrupts Omega’s attempt to use an inversion warhead at Test Site Anna during the wider Outbreak campaign.', 'outbreak'],
  ['14 DEC 1984', 'OPERATION EXCISION', 'Requiem is betrayed', 'After the Zoo operation, Requiem personnel are arrested on their director’s orders. The organisation that fought the breaches is dismantled from within.', 'outbreak'],
  ['2 FEB 1985', 'EAST BERLIN', 'Mauer der Toten', 'Kravchenko forces the captured strike team to stop Valentina. Klaus carries a nuclear device into the portal after her defeat, containing the immediate Berlin breach.', 'mauer-der-toten'],
  ['4 JUN 1985', 'OPERATION FIRST DOMINO', 'The Forsaken is contained', 'Zykov reveals himself as the Forsaken. Maxis absorbs and contains him; Richtofen arrests Requiem’s leadership and turns the captured entity into the foundation of Project Janus.', 'forsaken'],
  ['1985–1991', 'PROJECT JANUS', 'A secret programme matures', 'At Liberty Falls, Janus studies the Forsaken, Aetherium and dimensional travel. Panos, Modi and other researchers push the work toward a disaster Richtofen believes he can control.', 'liberty-falls'],
  ['18–19 FEB 1991', 'PHILIPPINE SEA', 'The Terminus prison break', 'Peck and Maya free Weaver, Grey, Carver and Strauss. Their search for Nathan exposes Modi’s experiments and launches the pursuit of Richtofen and the Sentinel Artifact.', 'terminus'],
  ['19 FEB 1991', 'WEST VIRGINIA', 'The Liberty Falls outbreak', 'A Janus breach overruns the town at effectively the same moment as the Terminus escape, accounting for the international date-line difference. Panos escapes while the response team is pulled into the Dark Aether.', 'liberty-falls'],
  ['25 FEB 1991', 'AVALON', 'Citadelle des Morts', 'The crew reaches Krafft’s castle and obtains the Obscurus Altilium. Krafft reveals his family connection to Richtofen and points toward the excavation containing the Door to Nowhere.', 'citadelle-des-morts'],
  ['25 FEB 1991', 'HOURS LATER', 'The Tomb', 'At the excavation site, the crew reconstructs the Staff of Ice, enters a Dark Aether Nexus and recovers the Sentinel Artifact.', 'the-tomb'],
  ['28 FEB 1991', 'COLTON HALL', 'Shattered Veil', 'S.A.M. manipulates the crew into freeing Richtofen at the Janus mansion. The Z-Rex experiment demonstrates how far the programme’s biological work has gone.', 'shattered-veil'],
  ['28 FEB 1991', 'SHORTLY AFTER', 'Reckoning', 'At Janus Towers, the choice between Richtofen and S.A.M. collapses into the same result: the crew is cast into the Dark Aether and encounters displaced figures from the old Aether story.', 'reckoning'],
  ['1993', 'JANUS LEGACY', 'Ava Jansen is born', 'Ava is created from the DNA of Samantha Maxis and Sergei Ravenov, with Elizabeth Grey acting as surrogate. Her origins later make her pivotal to Operation Deadbolt.', 'urzikstan'],
  ['15 AUG 1996', 'GREY’S MESSAGE', 'The truth is recorded', 'Grey leaves a message explaining Ava’s parentage. By this period the former Requiem crew has returned from the Dark Aether, though the exact route and cost remain part of the missing record.', 'urzikstan'],
  ['2021', 'OPERATION DEADBOLT', 'The Urzikstan outbreak', 'Zakhaev’s Aetherium operation triggers a new exclusion zone. Deadbolt’s investigation ties Ava to the Entity and confirms that Requiem’s unfinished history has reached the modern era.', 'urzikstan'],
  ['DATE UNKNOWN', 'DARK AETHER', 'Ashes of the Damned', 'After Reckoning, the combined crew awakens in the Warden’s realm. Veytharion falls and Maya and Dempsey are restored, beginning a sequence with no confirmed Earth calendar date.', 'ashes-of-the-damned'],
  ['SEQUENCE II', 'DARK AETHER', 'Astra Malorum', 'Caltheris becomes the next Shadowsmith obstacle. Nikolai and Grey return to the crew as the Warden’s design grows clearer.', 'astra-malorum'],
  ['SEQUENCE III', 'TEMPORAL PRISON', 'Paradox Junction', 'The crew and the Twins destroy the Dark Heart inside a looping Nuketown prison and move deeper into the Dark Aether.', 'paradox-junction'],
  ['SEQUENCE IV', 'DARK AETHER', 'Totenreich', 'Dravakar is defeated; Richtofen and Weaver are restored. The crew learns of the final captive Shadowsmith and the World Seed.', 'totenreich'],
  ['SEQUENCE V', 'DARK AETHER', 'Kowakujō', 'Nyxara’s fortress falls. Takeo and Carver return, and the recovered World Seed gives the assembled crew a path toward the Warden.', 'kowakujo'],
  ['FINAL SEQUENCE', 'DARK AETHER', 'Rex Infernus', 'The final round-based BO7 operation carries the restored crew into the Warden’s domain. Its setting does not supply a canonical Earth date, so this archive leaves the date unknown.', 'rex-infernus'],
] as const;

const sources = [
  ['Call of Duty editorial', 'Black Ops Cold War Zombies: The Story So Far', officialRecap],
  ['Call of Duty Wiki', 'Dark Aether Saga timeline portal', chronology],
  ['Call of Duty editorial', 'Liberty Falls map intel', 'https://www.callofduty.com/blog/2024/08/call-of-duty-next-black-ops-6-zombies-liberty-falls-map-intel'],
  ['Call of Duty editorial', 'Terminus map briefing', 'https://www.callofduty.com/blog/2024/08/call-of-duty-black-ops-6-zombies-terminus-map'],
  ['Call of Duty', 'Black Ops 7 Zombies hub', 'https://www.callofduty.com/blackops7/zombies'],
  ['Call of Duty guides', 'Kowakujō guide', 'https://www.callofduty.com/guides/blackops7/zombies/kowakujo'],
  ['The Korborium', 'Complete Black Ops 6 Zombies Storyline', 'https://www.youtube.com/watch?v=9Kvm2BJWvDc'],
  ['r/CODZombies', 'Community research and guide index', 'https://www.reddit.com/r/CODZombies/'],
] as const;

export default function Timeline(){return <main className="route-page timeline-page"><header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link className="selected" href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
  <section className="route-hero"><span>DARK AETHER // STORYLINE BRIEFING</span><h1>The complete field chronology</h1><p>A source-cited reading order from Projekt Endstation through Requiem, Project Janus, Operation Deadbolt and the Warden’s Black Ops 7 trials.</p></section>
  <section className="timeline-method"><p className="section-kicker">ANALYST’S NOTE</p><h2>How to read this archive</h2><p>The large date is the <b>in-universe story date</b>, not the game’s release year. Cold War and Black Ops 6 events can be anchored to explicit intelligence. Black Ops 7’s maps occur in sequence inside the Dark Aether, but the currently available story does not establish an Earth calendar date; assigning one would be speculation. Official material is preferred, the community chronology connects individual records, and creator analysis is used as interpretation—not as a replacement for canon.</p></section>
  <section className="timeline-factions"><article><span>REQUIEM</span><h2>Containment force</h2><p>Created to investigate the new breaches, then dismantled by its own director when its senior staff threatened Project Janus.</p></article><article><span>OMEGA GROUP</span><h2>Weaponisation programme</h2><p>The Soviet counterpart that reactivated Endstation and pursued Aetherium as a strategic weapon.</p></article><article><span>PROJECT JANUS</span><h2>Richtofen’s design</h2><p>A post-Requiem programme built around the captured Forsaken, dimensional research and the Sentinel Artifact.</p></article><article><span>THE WARDEN</span><h2>Dark Aether architect</h2><p>The force who scatters the BO7 crew through Shadowsmith-controlled trials and takes the Spiritus.</p></article></section>
  <section className="timeline-list">{events.map(([date, label, title, body, slug], index) => <article key={`${date}-${title}`}><time>{date}</time><div><span>{String(index + 1).padStart(2, '0')} // {label}</span><h2><Link href={`/maps/${slug}`}>{title}</Link></h2><p>{body}</p><p className="timeline-citation"><a href={index < 9 ? officialRecap : chronology} target="_blank" rel="noreferrer">SOURCE NOTE ↗</a> · <Link href={`/maps/${slug}`}>OPEN MAP DOSSIER →</Link></p></div></article>)}</section>
  <section className="timeline-sources"><p className="section-kicker">FULL REFERENCES</p><h2>Sources and further reading</h2><p>These references were used to reconcile dates, map order, character outcomes and the distinction between confirmed chronology and community interpretation.</p><ol>{sources.map(([publisher, title, url]) => <li key={url}><span>{publisher}</span><a href={url} target="_blank" rel="noreferrer">{title} ↗</a></li>)}</ol></section>
  </main>}
