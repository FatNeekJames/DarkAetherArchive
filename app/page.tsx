import Link from 'next/link';
import { mapIntel } from './data/map-intel';
import { mapsForGame, zombieGames, zombieMaps } from './data/maps';

const featuredGames = ['black-ops-6', 'black-ops-7', 'cold-war', 'modern-warfare-zombies'];

export default function Home() {
  const indexedIntel = Object.values(mapIntel).reduce((total, records) => total + records.length, 0);

  return <main className="archive-shell">
    <header className="topbar"><Link className="brand" href="/"><span className="brand-mark">DA</span><span>DARK AETHER<br/><b>ARCHIVE</b></span></Link><nav><Link className="active" href="/">Dashboard</Link><Link href="/maps">Maps</Link><Link href="/intel">Intel archive</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals archive</Link></nav><button className="profile-button">SIGN IN <span>↗</span></button></header>
    <section className="home-dashboard"><aside className="dashboard-rail"><span className="rail-title">CALL OF DUTY INTEL</span><Link className="rail-current" href="/">❯ Welcome</Link><Link href="/maps">❯ All Zombies Maps</Link><span className="rail-heading">INTEL BY GAME</span>{zombieGames.map(([slug,,shortName]) => <Link href={`/intel/${slug}`} key={slug}>❯ {shortName} Intel</Link>)}</aside>
      <section className="dashboard-main"><span className="eyebrow">DARK AETHER ZOMBIES INTEL INDEX</span><h1>Welcome, <em>operative.</em></h1><p className="dashboard-lede">Open a game archive, choose a map, and review every indexed document, transmission, artifact, and audio log without leaving the map dossier.</p>
        <div className="dashboard-status"><span>ARCHIVE STATUS</span><b>{zombieMaps.length} MAP DOSSIERS <i>ONLINE</i></b><div className="dashboard-progress"><i style={{width:'100%'}}/></div><small>{indexedIntel} ITEM-LEVEL INTEL RECORDS CURRENTLY INDEXED</small></div>
        <div className="game-cards">{featuredGames.map((gameSlug) => {
          const game = zombieGames.find(([slug]) => slug === gameSlug)!;
          const mapCount = mapsForGame(game[1]).length;
          return <Link href={`/intel/${gameSlug}`} key={gameSlug}><span>{game[2]}</span><strong>Intel Index</strong><b>{mapCount} maps</b><i style={{width:'100%'}}/></Link>;
        })}</div>
        <div className="dashboard-actions"><Link href="/maps">OPEN MAP INDEX →</Link><Link href="/intel">BROWSE INTEL BY GAME →</Link></div>
        <div className="home-featured-map"><div><span className="eyebrow">FEATURED OPERATION // BLACK OPS 6</span><h2>Liberty Falls</h2><p>Open its dedicated dossier to browse Intel locations and track recovered evidence.</p></div><Link href="/maps/liberty-falls">OPEN LIBERTY FALLS INTEL →</Link></div>
      </section>
      <aside className="dashboard-links"><span>ARCHIVE SECTIONS</span><Link href="/maps">Map dossiers <b>→</b></Link><Link href="/intel">Intel index <b>→</b></Link><Link href="/timeline">Dark Aether timeline <b>→</b></Link><Link href="/signals">ARG signals <b>→</b></Link><div className="credits"><span>CREDITS</span><p>Unofficial community intelligence archive.</p><p>Research remains sourced and attributable.</p></div></aside>
    </section>
  </main>;
}
