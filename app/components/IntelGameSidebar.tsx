import Link from '@/app/components/SiteLink';
import { standardMapsForGame, zombieGameGroups } from '../data/maps';

export default function IntelGameSidebar({ activeGame }: { activeGame?: string }) {
  return <aside className="intel-game-sidebar" aria-label="Intel archives by game">
    <p>INTEL ARCHIVES</p>
    <Link className={!activeGame ? 'active' : ''} href="/intel"><span>ALL</span><b>All games</b></Link>
    {zombieGameGroups.map((group) => <div className="intel-sidebar-group" key={group.label}>
      <strong>{group.label}</strong>
      {group.games.map(([slug, name, shortName]) => <Link className={activeGame === slug ? 'active' : ''} href={`/intel/${slug}`} key={slug}>
        <span>{String(standardMapsForGame(name).length).padStart(2, '0')}</span><b>{shortName}</b>
      </Link>)}
    </div>)}
  </aside>;
}
