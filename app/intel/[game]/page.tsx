import Link from '@/app/components/SiteLink';
import IntelGameSidebar from '../../components/IntelGameSidebar';
import { mapIntel, coldWarIntelTotals } from '../../data/map-intel';
import { standardMapsForGame, zombieGames } from '../../data/maps';

export default async function GameIntelArchive({ params }: { params: Promise<{ game: string }> }) {
  const { game } = await params;
  const selectedGame = zombieGames.find(([slug]) => slug === game);
  const gameName = selectedGame?.[1] ?? 'Unknown game';
  const shortName = selectedGame?.[2] ?? 'INTEL ARCHIVE';
  const maps = selectedGame ? standardMapsForGame(gameName) : [];

  return <main className="route-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link className="selected" href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <div className="intel-hub-layout"><IntelGameSidebar activeGame={game} /><section className="intel-hub-main">
      <section className="route-hero"><span>{shortName}{' // '}INTELLIGENCE DATABASE</span><h1>{shortName}</h1><p>Select a map to open its dedicated Intel archive, recovered locations, story briefing, and lore record.</p></section>
      {maps.length > 0 ? <div className="intel-map-board">{maps.map(([slug, name,, edition], index) => {
        const detailedCount = mapIntel[slug]?.length ?? 0;
        const verifiedTotal = coldWarIntelTotals[slug];
        const count = detailedCount || verifiedTotal;
        return <Link href={`/maps/${slug}`} key={slug}>
          <span>{String(index + 1).padStart(2, '0')}</span><div><small>{edition?.toUpperCase() ?? 'MAP INTEL ARCHIVE'}</small><h2>{name}</h2><p>{count ? `${count} Intel records indexed` : 'Dedicated dossier ready for indexing'}</p></div><b>OPEN DOSSIER →</b>
        </Link>;
      })}</div> : <div className="intel-empty"><b>GAME ARCHIVE NOT FOUND</b><p>Return to the Intel index and select another game.</p></div>}
    </section></div>
  </main>;
}
