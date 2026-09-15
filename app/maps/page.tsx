import Link from '@/app/components/SiteLink';
import { mapIntel } from '../data/map-intel';
import { standardMapsForGame, standardZombieMaps, zombieGames, type ZombieGame } from '../data/maps';

const treyarchOrder = ['black-ops-7', 'black-ops-6', 'modern-warfare-zombies', 'vanguard', 'cold-war', 'black-ops-4', 'black-ops-3', 'black-ops-2', 'black-ops', 'world-at-war'];
const nonTreyarchOrder = ['wwii', 'infinite-warfare', 'advanced-warfare', 'ghosts-extinction'];

const gamesInOrder = (order: string[]) => order
  .map((slug) => zombieGames.find(([gameSlug]) => gameSlug === slug))
  .filter((game): game is ZombieGame => Boolean(game));

function GameAccordion({ games, numberOffset = 0 }: { games: readonly ZombieGame[]; numberOffset?: number }) {
  return <>{games.map(([gameSlug, gameName, shortName], gameIndex) => {
    const maps = standardMapsForGame(gameName);
    const intelCount = maps.reduce((sum, [slug]) => sum + (mapIntel[slug]?.length ?? 0), 0);
    return <details key={gameSlug} open={gameIndex === 0 && numberOffset === 0}>
      <summary><div><span>{String(gameIndex + numberOffset + 1).padStart(2, '0')} // {gameName}</span><h2>{shortName}</h2></div><div className="map-summary-meta"><b>{maps.length} MAPS</b><small>{intelCount} INTEL INDEXED</small><i aria-hidden="true">⌄</i></div></summary>
      <div className="map-accordion-body"><div className="map-game-toolbar"><p>Choose an operation to open its intel, collection checklist, story and lore.</p><Link href={`/intel/${gameSlug}`}>VIEW {shortName} INTEL →</Link></div>
        <div className="map-card-grid">{maps.map(([slug, name,, edition], mapIndex) => <Link href={`/maps/${slug}`} key={slug}><span>{String(mapIndex + 1).padStart(2, '0')}</span><div><small>{edition?.toUpperCase() ?? 'ROUND-BASED / ZOMBIES'}</small><h3>{name}</h3><p>{mapIntel[slug]?.length ? `${mapIntel[slug].length} intel records` : 'Dossier awaiting verified intel'}</p></div><b>OPEN →</b></Link>)}</div>
      </div>
    </details>;
  })}</>;
}

export default function Maps() {
  return <main className="route-page maps-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="route-hero compact-route-hero"><span>FIELD OPERATIONS {' // '} {standardZombieMaps.length} CORE MAPS</span><h1>Map index</h1><p>The Dark Aether and Treyarch story archive comes first. Separate non-Treyarch operations are retained below for later expansion.</p></section>
    <section className="map-archive-group" aria-labelledby="treyarch-map-heading">
      <div className="map-archive-heading"><span>PRIMARY ARCHIVE // DARK AETHER &amp; AETHER STORYLINES</span><h2 id="treyarch-map-heading">Treyarch Zombies</h2><p>Black Ops 7 through World at War, ordered from the newest operation backwards.</p></div>
      <div className="map-accordion"><GameAccordion games={gamesInOrder(treyarchOrder)} /></div>
    </section>
    <section className="map-archive-group non-treyarch-archive" aria-labelledby="non-treyarch-map-heading">
      <div className="map-archive-heading"><span>SECONDARY ARCHIVE // EXPANSION QUEUE</span><h2 id="non-treyarch-map-heading">Non-Treyarch Zombies</h2><p>WWII Zombies, Infinite Warfare Zombies, Exo Zombies, and Ghosts Extinction remain available while the primary archive is completed.</p></div>
      <div className="map-accordion"><GameAccordion games={gamesInOrder(nonTreyarchOrder)} numberOffset={treyarchOrder.length} /></div>
    </section>
  </main>;
}
