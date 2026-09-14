import Link from 'next/link';
import { standardMapsForGame, zombieGames } from '../data/maps';

export default function IntelGameSidebar({ activeGame }: { activeGame?: string }) {
  return <aside className="intel-game-sidebar" aria-label="Intel archives by game">
    <p>INTEL ARCHIVES</p>
    <Link className={!activeGame ? 'active' : ''} href="/intel"><span>ALL</span><b>All games</b></Link>
    {zombieGames.map(([slug, name, shortName]) => <Link className={activeGame === slug ? 'active' : ''} href={`/intel/${slug}`} key={slug}>
      <span>{String(standardMapsForGame(name).length).padStart(2, '0')}</span><b>{shortName}</b>
    </Link>)}
  </aside>;
}
