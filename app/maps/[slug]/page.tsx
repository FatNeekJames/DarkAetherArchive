import { mapIntel, coldWarIntelTotals } from '../../data/map-intel';
import { zombieMaps } from '../../data/maps';

export default async function MapDossier({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = zombieMaps.find(([id]) => id === slug);
  const name = map?.[1] ?? 'Map dossier';
  const game = map?.[2] ?? 'Zombies';
  const records = mapIntel[slug] ?? [];
  const coldWarTotal = coldWarIntelTotals[slug];

  return <main className="route-page map-dossier">
    <header><a href="/">DA / DARK AETHER ARCHIVE</a><nav><a className="selected" href="/maps">Maps</a><a href="/intel">Intel</a><a href="/timeline">Timeline</a><a href="/signals">Signals</a></nav></header>
    <section className="map-dossier-hero"><a href="/maps">← MAP INDEX</a><span>{game.toUpperCase()} // OPERATIONAL DOSSIER</span><h1>{name}</h1><p>Map-specific intelligence, collection locations, and evidence recovered from this operation.</p></section>
    <section className="dossier-content">
      <p className="section-kicker">INTELLIGENCE DATABASE</p>
      <h2>{name} Intel Archive</h2>
      {records.length > 0 ? <>
        <p className="section-intro">{records.length} recovered records are indexed for this map. Tick items off as you collect them in-game.</p>
        <div className="map-intel-list">{records.map((record, index) => <article key={`${record.title}-${index}`}>
          <span>{String(index + 1).padStart(2, '0')}</span><b>{record.title}</b><small>{record.type}</small><em>{record.location}</em><i>MAP-SPECIFIC INTEL</i>
        </article>)}</div>
      </> : coldWarTotal ? <>
        <p className="section-intro">This archive contains {coldWarTotal} Cold War intel items for {name}. Detailed location records are being prepared from the season tracker; the collection total and methods are already verified.</p>
        <div className="briefing"><b>COLLECTION METHODS</b><p>Search fixed pickups, enemy drops, radios, Trials, and main-quest artifacts throughout the operation.</p></div>
      </> : <p className="section-intro">The dossier structure is ready. Verified item-level locations for this map have not yet been entered into the archive.</p>}
    </section>
  </main>;
}
