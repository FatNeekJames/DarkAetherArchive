import Link from 'next/link';
import IntelGameSidebar from '../components/IntelGameSidebar';
import { mapsForGame, zombieGames, zombieMaps } from '../data/maps';

export default function IntelArchive() {
  return <main className="route-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link className="selected" href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <div className="intel-hub-layout"><IntelGameSidebar /><section className="intel-hub-main">
      <section className="route-hero"><span>INTELLIGENCE INVENTORY {' // '} {zombieMaps.length} MAP DOSSIERS</span><h1>Intel archive</h1><p>Select a game to browse every map in that release, then open the map-specific Intel archive.</p></section>
      <div className="intel-game-board">{zombieGames.map(([slug, gameName, shortName], index) => <Link href={`/intel/${slug}`} key={slug}>
        <span>{String(index + 1).padStart(2, '0')}</span><small>{mapsForGame(gameName).length} MAPS INDEXED</small><h2>{shortName}</h2><b>VIEW GAME ARCHIVE →</b>
      </Link>)}</div>
    </section></div>
  </main>;
}
