import Link from 'next/link';
import { mapsForGame, zombieGames, zombieMaps } from '../data/maps';

export default function Maps() {
  return <main className="route-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="route-hero"><span>FIELD OPERATIONS {' // '} {zombieMaps.length} PLAYABLE MAPS</span><h1>Map index</h1><p>Choose a game, then open any operation to view its dedicated intelligence, story, and lore dossier.</p></section>
    <nav className="game-jump" aria-label="Jump to game">{zombieGames.map(([slug,,shortName]) => <a href={`#${slug}`} key={slug}>{shortName}</a>)}</nav>
    <div className="map-catalogue">{zombieGames.map(([gameSlug, gameName, shortName]) => {
      const maps = mapsForGame(gameName);
      return <section className="map-game-group" id={gameSlug} key={gameSlug}>
        <div className="map-game-heading"><span>{String(maps.length).padStart(2, '0')} OPERATIONS</span><h2>{shortName}</h2><Link href={`/intel/${gameSlug}`}>OPEN GAME INTEL →</Link></div>
        <div className="map-index">{maps.map(([slug, name,, edition]) => <Link href={`/maps/${slug}`} key={slug}><span>{edition?.toUpperCase() ?? 'ZOMBIES MAP'}</span><h3>{name}</h3><p>Intel, story and lore dossier</p><b>OPEN MAP DOSSIER →</b></Link>)}</div>
      </section>;
    })}</div>
  </main>;
}
