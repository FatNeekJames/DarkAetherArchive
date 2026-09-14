import Link from 'next/link';

const locations = [
  {
    number: '01',
    site: 'Orlov Military Base',
    evidence: 'Russell Adler wanted poster',
    finding: 'The notice branded Adler an enemy of the state and accused him of killing U.S. personnel and supporting hostile regimes.',
  },
  {
    number: '02',
    site: 'Shanin Manor',
    evidence: 'CIA Memorial Wall photograph',
    finding: 'A handwritten accusation reframed the fallen officers as victims of an internal traitor.',
  },
  {
    number: '03',
    site: 'Bunker 5',
    evidence: 'Livingstone daily briefing',
    finding: 'The file carried Deputy Director Daniel Livingstone’s order to bring in the alleged traitor, Adler.',
  },
  {
    number: '04',
    site: 'Bunker 7 entrance',
    evidence: 'Sally graffiti',
    finding: 'The phrase “I will die with her in my hand” pointed investigators toward a weapon, a name, and ultimately a keypad code.',
  },
] as const;

const challenges = [
  {
    status: 'ARMORY',
    title: 'Get 1 Operator Kill with an Old Friend',
    objective: 'Find and use the “Sally” 9mm Daemon blueprint to eliminate another Operator.',
    reward: 'Sally weapon blueprint',
    note: 'Sally first appeared on Rebirth Island on 15 May and reached Urzikstan on 29 May. That early availability caused progression problems for some players.',
  },
  {
    status: 'INTEL',
    title: 'Discover Intel to Uncover the Mole',
    objective: 'Enter the submarine north of Bioweapons on Rebirth Island and inspect its evidence board.',
    reward: 'The Truth Lies calling card',
    note: 'The submarine was added on 6 June. Its board linked Iraq, Kuwait, Washington D.C., and Avalon around a photograph of the Kuwaiti oil fires dated 23 January 1991.',
  },
  {
    status: 'BUNKER',
    title: 'She Never Let Me Down',
    objective: 'Reach Bunker 7, enter 72559—SALLY on a telephone keypad—and activate the computer.',
    reward: 'Purge Sequence calling card',
    note: 'The code was also sent to creators who had received pagers. The terminal connected the Pantheon, Livingstone, Adler, Iraq, the Ministry of Defense, and Sayeed Alawi before purging its data.',
  },
  {
    status: 'COMPLETE',
    title: 'Gain the Exclusion Execution',
    objective: 'Complete all three field challenges in the Warzone investigation.',
    reward: 'You Can’t Kill Me finishing move',
    note: 'This was the completion reward and closed the playable investigation loop.',
  },
] as const;

export default function TheTruthLiesCaseFile() {
  return <main className="route-page truth-lies-page">
    <header>
      <Link href="/">DA / DARK AETHER ARCHIVE</Link>
      <nav><Link href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link className="selected" href="/signals">Signals</Link></nav>
    </header>

    <section className="truth-lies-hero">
      <div className="intel-breadcrumbs"><Link href="/signals">SIGNALS ARCHIVE</Link><b>/</b><span>CASE 02</span></div>
      <span>BLACK OPS 6 // PRE-LAUNCH INVESTIGATION</span>
      <h1>The Truth <em>Lies</em></h1>
      <p>A campaign dossier connecting the analogue broadcasts, real-world advertising, creator pager drops, and the playable Warzone search for a mole inside the CIA.</p>
      <dl>
        <div><dt>CAMPAIGN</dt><dd>22 May–9 June 2024</dd></div>
        <div><dt>WARZONE OPERATION</dt><dd>3–6 June 2024</dd></div>
        <div><dt>PRIMARY SUBJECTS</dt><dd>Adler · Livingstone · The Pantheon</dd></div>
      </dl>
    </section>

    <section className="truth-lies-overview">
      <div>
        <p className="section-kicker">CASE SUMMARY</p>
        <h2>A reveal staged as a conspiracy</h2>
        <p>“The Truth Lies” was Black Ops 6’s pre-launch marketing campaign: part public advertisement, part alternate-reality investigation. Its television-style website and monument interventions established a world of altered history and institutional deception. Warzone then converted that fiction into evidence players could physically recover.</p>
      </div>
      <aside><span>ARCHIVE NOTE</span><p>This dossier records the observed clue trail and completion requirements. Interpretations are kept separate from the items, messages, and rewards that appeared in game.</p></aside>
    </section>

    <section className="truth-lies-chapter woods-briefing">
      <div className="truth-lies-chapter-head"><span>CHAPTER 01 // 3 JUNE 2024</span><h2>New orders in Urzikstan</h2></div>
      <div className="woods-briefing-grid">
        <div className="classified-paper">
          <span>IN-FIL BRIEFING // FRANK WOODS</span>
          <blockquote>“New orders, kids.”</blockquote>
          <p>Woods told Operators that intelligence capable of exposing the mole might be hidden in the combat zone, transforming the standard infil sequence into the mission briefing for the ARG.</p>
          <b>SUBJECT // INTERNAL MOLE INVESTIGATION</b>
        </div>
        <div className="operation-context"><p>New Black Ops 6 challenges appeared in Warzone while a wheelchair-bound Frank Woods began addressing squads during the Urzikstan infil. Four interactable clues distributed the accusation across the map.</p><span>FIELD EVIDENCE // FOUR RECOVERY SITES</span></div>
      </div>
    </section>

    <section className="truth-lies-locations">
      {locations.map((location) => <article key={location.number}>
        <div><span>{location.number}</span><small>URZIKSTAN // {location.site.toUpperCase()}</small></div>
        <h3>{location.evidence}</h3>
        <p>{location.finding}</p>
      </article>)}
    </section>

    <section className="truth-lies-chapter">
      <div className="truth-lies-chapter-head"><span>CHAPTER 02 // 5–6 JUNE 2024</span><h2>The playable investigation</h2></div>
      <p className="truth-lies-chapter-intro">Three objectives tested separate parts of the clue network—weapon, evidence, and code. Completing the set unlocked a fourth reward. One objective depended on a Rebirth Island submarine that arrived on 6 June, so the rollout did not become fully accessible at the same moment for every player.</p>
      <div className="truth-challenge-list">
        {challenges.map((challenge, index) => <article key={challenge.title}>
          <aside><span>{String(index + 1).padStart(2, '0')}</span><b>{challenge.status}</b></aside>
          <div><small>CHALLENGE</small><h3>{challenge.title}</h3><p>{challenge.objective}</p><dl><dt>REWARD</dt><dd>{challenge.reward}</dd></dl><p className="challenge-note">{challenge.note}</p></div>
        </article>)}
      </div>
    </section>

    <section className="truth-lies-chapter bunker-terminal">
      <div className="truth-lies-chapter-head"><span>CHAPTER 03 // BUNKER 7</span><h2>SALLY opens the purge terminal</h2></div>
      <div className="terminal-grid">
        <div className="keypad-file"><span>ACCESS CODE</span><strong>72559</strong><p>S A L L Y</p></div>
        <div className="terminal-output"><span>RECOVERED KEYWORDS</span><p>THE PANTHEON <i>/</i> SAD <i>/</i> DEPUTY DIRECTOR LIVINGSTONE <i>/</i> MOLE <i>/</i> INFILTRATION <i>/</i> RUSSELL ADLER <i>/</i> IRAQ <i>/</i> MINISTRY OF DEFENSE <i>/</i> SAYEED ALAWI</p><b>ERROR // ERASING ALL DATA</b></div>
      </div>
      <p className="terminal-analysis">The solution joined three forms of evidence: the “Sally” weapon blueprint, the graffiti outside Bunker 7, and pagers delivered to creators. The terminal’s final burst of names seeded the conspiracy at the centre of the Black Ops 6 campaign without resolving whether Adler was traitor, target, or both.</p>
    </section>

    <section className="truth-lies-sources">
      <p className="section-kicker">SOURCES / CONTEXT</p>
      <h2>Attached references</h2>
      <div>
        <a href="https://callofduty.fandom.com/wiki/The_Truth_Lies" target="_blank" rel="noreferrer"><span>CAMPAIGN ARCHIVE</span><b>The Truth Lies — chronology and ARG record</b><i>OPEN SOURCE ↗</i></a>
        <a href="https://callofduty.fandom.com/wiki/Call_of_Duty:_Warzone_2.0" target="_blank" rel="noreferrer"><span>GAME CONTEXT</span><b>Call of Duty: Warzone</b><i>OPEN SOURCE ↗</i></a>
        <a href="https://callofduty.fandom.com/wiki/Urzikstan_(map)" target="_blank" rel="noreferrer"><span>OPERATION AREA</span><b>Urzikstan map record</b><i>OPEN SOURCE ↗</i></a>
        <a href="https://callofduty.fandom.com/wiki/Russell_Adler" target="_blank" rel="noreferrer"><span>PERSON OF INTEREST</span><b>Russell Adler</b><i>OPEN SOURCE ↗</i></a>
      </div>
    </section>

    <footer className="prelaunch-footer"><span>END OF FILE // DA-ARG-TTL-2024</span><Link href="/signals">RETURN TO SIGNALS ARCHIVE →</Link></footer>
  </main>;
}
