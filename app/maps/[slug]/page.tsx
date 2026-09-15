import { mapIntel, coldWarIntelTotals } from '../../data/map-intel';
import { zombieMaps } from '../../data/maps';
import { mapResearchSources } from '../../data/research-sources';
import MapIntelArchive from '../../components/MapIntelArchive';
import { mapLore } from '../../data/map-lore';
import { crewForMap } from '../../data/map-crews';
import Link from '@/app/components/SiteLink';

export default async function MapDossier({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = zombieMaps.find(([id]) => id === slug);
  const name = map?.[1] ?? 'Map dossier';
  const game = map?.[2] ?? 'Zombies';
  const records = mapIntel[slug] ?? [];
  const sources = mapResearchSources[slug] ?? [];
  const coldWarTotal = coldWarIntelTotals[slug];
  const lore = mapLore[slug];
  const crew = crewForMap(slug);

  return <main className="route-page map-dossier">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="map-dossier-hero"><div className="map-dossier-hero-layout">
      <div className="map-dossier-hero-copy"><Link href="/maps">← MAP INDEX</Link><span>{game.toUpperCase()}{' // '}OPERATIONAL DOSSIER</span><h1>{name}</h1><p>Follow the operation in play order, then open the sealed outcome only when you are ready for the ending.</p></div>
      <aside className="map-crew-file"><div><span>PLAYABLE CREW</span><b>{crew.designation}</b></div><ul>{crew.members.map((member) => <li key={member}>{member}</li>)}</ul><p>{crew.note}</p><small>PERSONNEL PROFILES // PLANNED</small></aside>
    </div></section>
    {slug === 'liberty-falls' && <section className="prelaunch-file-callout">
      <div><span>SUPPLEMENTAL FILE // AUGUST 2024</span><h2>Liberty Falls Pre-Launch Intel</h2><p>Trace the original phone campaign through redacted documents, keyword unlocks, a playable Project Janus audio log, and the first Dark Aether reconnaissance images.</p></div>
      <Link href="/maps/liberty-falls/pre-launch-intel">OPEN PRE-LAUNCH FILE →</Link>
    </section>}
    <section className="dossier-content map-story-dossier">
      <p className="section-kicker">MISSION NARRATIVE // SPOILER-SAFE ORDER</p>
      <h2>Story and main quest</h2>
      {lore ? <>
        <div className="lore-grid">
          <div><span>STORY DATE</span><b>{lore.date}</b><p>In-universe chronology, not the game release year.</p></div>
          <div><span>LOCATION</span><b>{lore.location}</b><p>{lore.chapter}</p></div>
          <div><span>ARCHIVE STATUS</span><b>Source-cited</b><p>{records.length} map-specific intel records indexed.</p></div>
        </div>
        <div className="opening-brief"><span>01 // OPENING CUTSCENE &amp; MISSION SETUP</span><h3>{lore.chapter}</h3><p>{lore.summary}</p></div>
        <div className="quest-walkthrough">
          <div className="quest-walkthrough-heading"><span>02 // MAIN QUEST</span><h3>Easter egg progression</h3><p>Player actions and their story meaning are paired in the order they occur.</p></div>
          {lore.questSteps?.length ? <ol>{lore.questSteps.map((step, index) => <li key={step.title} className={step.boss ? 'boss-step' : ''}>
            <span>{String(index + 1).padStart(2, '0')}</span><div><small>{step.boss ? 'BOSS ENCOUNTER' : 'QUEST STEP'}</small><h4>{step.title}</h4><p>{step.playerAction}</p><aside><b>STORY IMPLICATION</b><p>{step.storyBeat}</p></aside></div>
          </li>)}</ol> : <div className="quest-verification"><b>STEP FILE UNDER VERIFICATION</b><p>The playable walkthrough for this operation is being checked against quest footage and reliable guides. The ending remains sealed below while the ordered steps are prepared.</p></div>}
        </div>
        <details className="operation-outcome"><summary><span>03 // SPOILER FILE</span><div><b>Operation outcome</b><small>SELECT TO REVEAL THE ENDING</small></div><i aria-hidden="true">⌄</i></summary><div><p>{lore.outcome}</p></div></details>
        <p className="map-story-sources">{lore.sources.map((source, index) => <span key={source.url}>{index ? ' · ' : ''}<a href={source.url} target="_blank" rel="noreferrer">{source.label} ↗</a></span>)}</p>
      </> : <div className="map-story-copy"><h3>Archive context</h3><p>This operation has a dedicated dossier and collection ledger. A source-verified narrative briefing has not yet been released into the public archive; unverified community claims are deliberately excluded.</p></div>}
    </section>
    <section className="dossier-content intel-dossier-section">
      <p className="section-kicker">INTELLIGENCE DATABASE</p>
      <h2>{name} Intel Archive</h2>
      {records.length > 0 ? <>
        <p className="section-intro">{records.length} recovered records are indexed for this map, with collection locations and supporting research.</p>
        <MapIntelArchive mapSlug={slug} mapName={name} records={records} sources={sources} />
      </> : coldWarTotal ? <>
        <p className="section-intro">This archive contains {coldWarTotal} Cold War intel items for {name}. Detailed location records are being prepared from the season tracker; the collection total and methods are already verified.</p>
        <div className="briefing"><b>COLLECTION METHODS</b><p>Search fixed pickups, enemy drops, radios, Trials, and main-quest artifacts throughout the operation.</p></div>
      </> : <p className="section-intro">The dossier structure is ready. Verified item-level locations for this map have not yet been entered into the archive.</p>}
    </section>
  </main>;
}
