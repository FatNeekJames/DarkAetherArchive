import Link from 'next/link';
import { mapIntel } from '../data/map-intel';
import { standardMapsForGame, standardZombieMaps, zombieGames } from '../data/maps';

const preferredOrder = ['black-ops-7', 'black-ops-6', 'cold-war', 'modern-warfare-zombies'];
const orderedGames = [...zombieGames].sort(([a], [b]) => {
  const ai = preferredOrder.indexOf(a);
  const bi = preferredOrder.indexOf(b);
  if (ai >= 0 || bi >= 0) return (ai < 0 ? 99 : ai) - (bi < 0 ? 99 : bi);
  return zombieGames.findIndex(([slug]) => slug === b) - zombieGames.findIndex(([slug]) => slug === a);
});

export default function Maps() {
  return <main className="route-page maps-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="route-hero compact-route-hero"><span>FIELD OPERATIONS {' // '} {standardZombieMaps.length} STANDARD MAPS</span><h1>Map index</h1><p>Open a game, choose its map, then enter the map-specific story and intel dossier.</p></section>
    <section className="map-accordion" aria-label="Zombies maps grouped by game">{orderedGames.map(([gameSlug, gameName, shortName], gameIndex) => {
      const maps = standardMapsForGame(gameName);
      const intelCount = maps.reduce((sum, [slug]) => sum + (mapIntel[slug]?.length ?? 0), 0);
      return <details key={gameSlug} open={gameIndex === 0}>
        <summary><div><span>{String(gameIndex + 1).padStart(2, '0')} // {gameName}</span><h2>{shortName}</h2></div><div className="map-summary-meta"><b>{maps.length} MAPS</b><small>{intelCount} INTEL INDEXED</small><i aria-hidden="true">⌄</i></div></summary>
        <div className="map-accordion-body"><div className="map-game-toolbar"><p>Choose an operation to open its intel, collection checklist, story and lore.</p><Link href={`/intel/${gameSlug}`}>VIEW {shortName} INTEL →</Link></div>
          <div className="map-card-grid">{maps.map(([slug, name,, edition], mapIndex) => <Link href={`/maps/${slug}`} key={slug}><span>{String(mapIndex + 1).padStart(2, '0')}</span><div><small>{edition?.toUpperCase() ?? 'ROUND-BASED / ZOMBIES'}</small><h3>{name}</h3><p>{mapIntel[slug]?.length ? `${mapIntel[slug].length} intel records` : 'Dossier awaiting verified intel'}</p></div><b>OPEN →</b></Link>)}</div>
        </div>
      </details>;
    })}</section>
  </main>;
}
