import { mapIntel, coldWarIntelTotals } from '../../data/map-intel';
import { zombieMaps } from '../../data/maps';
import { mapResearchSources } from '../../data/research-sources';
import MapIntelArchive from '../../components/MapIntelArchive';
import Link from 'next/link';

export default async function MapDossier({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const map = zombieMaps.find(([id]) => id === slug);
  const name = map?.[1] ?? 'Map dossier';
  const game = map?.[2] ?? 'Zombies';
  const records = mapIntel[slug] ?? [];
  const sources = mapResearchSources[slug] ?? [];
  const coldWarTotal = coldWarIntelTotals[slug];

  return <main className="route-page map-dossier">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="map-dossier-hero"><Link href="/maps">← MAP INDEX</Link><span>{game.toUpperCase()}{' // '}OPERATIONAL DOSSIER</span><h1>{name}</h1><p>Map-specific intelligence, collection locations, and evidence recovered from this operation.</p></section>
    <section className="dossier-content">
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
