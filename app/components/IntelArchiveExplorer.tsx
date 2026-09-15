'use client';

import Link from '@/app/components/SiteLink';
import { useMemo, useState } from 'react';

export type IntelExplorerRecord = { id: string; title: string; type: string; location: string; faction?: string; mapSlug: string; mapName: string; gameSlug: string; gameName: string; detailSlug: string };
type GameOption = { slug: string; name: string };

export default function IntelArchiveExplorer({ records, games }: { records: IntelExplorerRecord[]; games: GameOption[] }) {
  const [query, setQuery] = useState('');
  const [game, setGame] = useState('all');
  const [type, setType] = useState('All');
  const types = useMemo(() => ['All', ...Array.from(new Set(records.map((record) => record.type))).sort()], [records]);
  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return records.filter((record) => {
      const haystack = `${record.title} ${record.type} ${record.faction ?? ''} ${record.mapName} ${record.gameName} ${record.location}`.toLowerCase();
      return (game === 'all' || record.gameSlug === game) && (type === 'All' || record.type === type) && (!needle || haystack.includes(needle));
    });
  }, [game, query, records, type]);
  const visible = filtered.slice(0, 80);

  return <section className="intel-explorer">
    <div className="intel-explorer-heading"><div><span>LATEST INDEXED RECORDS</span><h2>Recent intel</h2></div><b>{filtered.length} MATCHING RECORDS</b></div>
    <div className="intel-explorer-controls">
      <label><span>SEARCH TITLE, MAP OR LOCATION</span><input type="search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Try Rex Infernus, audio log, or a room name…" /></label>
      <label><span>FILTER BY GAME</span><select value={game} onChange={(event) => setGame(event.target.value)}><option value="all">All games</option>{games.map((option) => <option key={option.slug} value={option.slug}>{option.name}</option>)}</select></label>
    </div>
    <div className="intel-type-filters" aria-label="Filter by intel type">{types.map((option) => <button key={option} className={type === option ? 'active' : ''} onClick={() => setType(option)}>{option}</button>)}</div>
    <div className="recent-intel-list">{visible.map((record, index) => <article key={record.id}>
      <span>{String(index + 1).padStart(2, '0')}</span><div><small>{record.gameName} · {record.mapName}</small><h3>{record.title}</h3><p>{record.location}</p><em>{record.type}{record.faction ? ` · ${record.faction}` : ''}</em></div>
      <div className="recent-intel-actions"><Link href={`/maps/${record.mapSlug}/intel/${record.detailSlug}`}>VIEW INTEL →</Link><Link href={`/maps/${record.mapSlug}`}>MAP DOSSIER →</Link></div>
    </article>)}</div>
    {!visible.length && <div className="intel-empty"><b>NO RECORDS FOUND</b><p>Clear the search or choose a different game or intel type.</p></div>}
    {filtered.length > visible.length && <p className="intel-result-note">Showing the first {visible.length} matches. Refine the search to narrow the archive.</p>}
  </section>;
}
