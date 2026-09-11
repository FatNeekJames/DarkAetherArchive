'use client';

import { useEffect, useMemo, useState } from 'react';
import type { IntelRecord, ResearchSource } from '../data/map-intel';

type Props = {
  mapSlug: string;
  mapName: string;
  records: IntelRecord[];
  sources: ResearchSource[];
};

const filters = ['All', 'Audio Log', 'Document', 'Transmission', 'Artifact'] as const;

export default function MapIntelArchive({ mapSlug, mapName, records, sources }: Props) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [collected, setCollected] = useState<string[]>([]);
  const storageKey = `dark-aether-archive:${mapSlug}:intel`;

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const stored = window.localStorage.getItem(storageKey);
      if (!stored) return;

      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          const validIds = new Set(records.map((record, index) => `${mapSlug}:${record.title}:${index}`));
          setCollected(parsed.filter((id): id is string => typeof id === 'string' && validIds.has(id)));
        }
      } catch {
        window.localStorage.removeItem(storageKey);
      }
    });

    return () => window.cancelAnimationFrame(frame);
  }, [mapSlug, records, storageKey]);

  const visible = useMemo(() => records.filter((record) => {
    const matchesType = filter === 'All' || record.type === filter;
    const haystack = `${record.title} ${record.type} ${record.location}`.toLowerCase();
    return matchesType && haystack.includes(query.toLowerCase().trim());
  }), [records, filter, query]);

  const toggle = (id: string) => {
    const next = collected.includes(id) ? collected.filter((item) => item !== id) : [...collected, id];
    setCollected(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
  };

  const primarySource = sources[0];

  return <>
    <div className="intel-progress" aria-label={`${collected.length} of ${records.length} collected`}>
      <div><span>FIELD PROGRESS</span><strong>{collected.length}<small> / {records.length}</small></strong></div>
      <div className="intel-progress-track"><i style={{ width: `${records.length ? collected.length / records.length * 100 : 0}%` }} /></div>
    </div>
    <div className="intel-tools">
      <label><span>SEARCH ARCHIVE</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={`Search ${mapName} intel or locations`} /></label>
      <div className="intel-filters" aria-label="Filter intel by type">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}</div>
    </div>
    <p className="intel-results">SHOWING {visible.length} OF {records.length} RECORDS</p>
    <div className="map-intel-list">{visible.map((record) => {
      const originalIndex = records.indexOf(record);
      const id = `${mapSlug}:${record.title}:${originalIndex}`;
      const isCollected = collected.includes(id);
      return <article key={id} className={isCollected ? 'collected' : ''}>
        <button className="intel-check" onClick={() => toggle(id)} aria-label={`${isCollected ? 'Mark uncollected' : 'Mark collected'}: ${record.title}`} aria-pressed={isCollected}>{isCollected ? '✓' : ''}</button>
        <span>{String(originalIndex + 1).padStart(2, '0')}</span>
        <div className="intel-record-copy"><b>{record.title}</b><small>{record.type}{record.faction ? ` · ${record.faction}` : ''}</small><p>{record.location}</p></div>
        {primarySource ? <a href={primarySource.url} target="_blank" rel="noreferrer">SOURCE ↗</a> : <i>VERIFIED RECORD</i>}
      </article>;
    })}</div>
    {visible.length === 0 && <div className="intel-empty"><b>NO MATCHING RECORDS</b><p>Clear the search or select another intel type.</p></div>}
    {sources.length > 0 && <section className="research-sources">
      <p className="section-kicker">SOURCE DESK</p><h3>Research and listening room</h3>
      <p>Location guides establish the collection data. Korborium videos add voice-line, relic, character, and story context without being presented as official transcripts.</p>
      <div>{sources.map((source) => <a key={source.url} href={source.url} target="_blank" rel="noreferrer"><span>{source.label}</span><b>{source.title}</b><i>OPEN SOURCE ↗</i></a>)}</div>
    </section>}
  </>;
}
