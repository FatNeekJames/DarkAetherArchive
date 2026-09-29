import Link from '@/app/components/SiteLink';
import { curatedIntelDetails, defaultIntelDescription, intelRecordSlug } from '../../../../data/intel-details';
import { mapIntel } from '../../../../data/map-intel';
import { mapResearchSources } from '../../../../data/research-sources';
import { zombieMaps } from '../../../../data/maps';

const transcriptTypes = new Set(['Audio Log', 'Document', 'Transmission']);

export default async function IntelDossier({ params }: { params: Promise<{ slug: string; record: string }> }) {
  const { slug, record: recordSlug } = await params;
  const map = zombieMaps.find(([mapSlug]) => mapSlug === slug);
  const intel = (mapIntel[slug] ?? []).find((entry) => intelRecordSlug(entry.title) === recordSlug);

  if (!map || !intel) return <main className="route-page intel-record-page"><header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link className="selected" href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header><section className="intel-record-missing"><span>ARCHIVE ERROR</span><h1>Intel record not found</h1><p>The requested record is not present in this map archive.</p><Link href={`/maps/${slug}`}>RETURN TO MAP DOSSIER →</Link></section></main>;

  const [, mapName, gameName] = map;
  const detail = curatedIntelDetails[`${slug}:${recordSlug}`];
  const media = detail?.media ?? [];
  const description = detail?.description ?? defaultIntelDescription(intel.title, intel.type, mapName);
  const hasTranscript = transcriptTypes.has(intel.type);
  const sources = (mapResearchSources[slug] ?? []).filter((source) => !source.url.includes('docs.google.com'));

  return <main className="route-page intel-record-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link className="selected" href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="intel-record-hero"><div className="intel-breadcrumbs"><Link href="/intel">INTEL</Link><span>/</span><Link href={`/maps/${slug}`}>{mapName.toUpperCase()}</Link><span>/</span><b>{intel.type.toUpperCase()}</b></div><span>{gameName.toUpperCase()} // {intel.type.toUpperCase()}</span><h1>{intel.title}</h1><p>{intel.faction ? `${intel.faction} intelligence record` : `${mapName} intelligence record`}</p></section>
    <div className="intel-record-layout">
      <aside className="intel-evidence-media"><span>EVIDENCE MEDIA</span>{media.length > 0 ? <div className="evidence-media-list">{media.map((item, index) => <figure key={`${item.url}:${index}`}>{item.kind === 'image' && <img src={item.url} alt={item.alt} />}{item.kind === 'audio' && <audio controls src={item.url} />}{item.kind === 'model' && <a href={item.url}>OPEN 3D MODEL ↗</a>}{item.kind === 'source' && <a className="evidence-source-link" href={item.url} target="_blank" rel="noreferrer"><b>SOURCE RECORDING</b><span>{item.alt} ↗</span></a>}{item.caption && <figcaption>{item.caption}{item.sourceUrl && <> <a href={item.sourceUrl} target="_blank" rel="noreferrer">View source ↗</a></>}</figcaption>}</figure>)}</div> : <div className="media-pending"><b>{intel.type === 'Audio Log' ? 'AUDIO' : intel.type === 'Document' ? 'DOCUMENT SCAN' : intel.type === 'Artifact' ? 'ARTIFACT IMAGE / MODEL' : 'EVIDENCE IMAGE'}</b><strong>AWAITING VERIFIED MEDIA</strong><p>No rights-cleared file has been deposited for this record yet.</p></div>}</aside>
      <article className="intel-case-paper"><div className="paper-classification">DECLASSIFIED // MAP INTEL</div><p className="paper-folio">CASE {slug.toUpperCase()} / {recordSlug.toUpperCase()}</p><h2>{intel.title}</h2><dl><div><dt>INTEL TYPE</dt><dd>{intel.type}</dd></div><div><dt>OPERATION</dt><dd>{mapName}</dd></div><div><dt>GAME</dt><dd>{gameName}</dd></div>{intel.faction && <div><dt>FACTION</dt><dd>{intel.faction}</dd></div>}</dl><hr/><h3>Description</h3><p>{description}</p></article>
    </div>
    {hasTranscript && <section className="intel-detail-section transcript-section"><span>TRANSCRIPT</span><h2>{detail?.transcript ? 'Verified transcript' : 'Transcription pending'}</h2>{detail?.transcript ? <blockquote>{detail.transcript}</blockquote> : <div className="transcript-pending"><b>NO VERIFIED TRANSCRIPT ON FILE</b><p>The record is indexed, but its spoken or written text still needs to be checked against a source file.</p>{detail?.transcriptSource && <a href={detail.transcriptSource.url} target="_blank" rel="noreferrer">{detail.transcriptSource.label.toUpperCase()} ↗</a>}</div>}</section>}
    <section className="intel-detail-section location-section"><span>COLLECTION LOCATION</span><h2>Where to recover it</h2><p>{intel.location}</p><Link href={`/maps/${slug}`}>← RETURN TO {mapName.toUpperCase()} INTEL</Link></section>
    {sources.length > 0 && <section className="intel-detail-section intel-detail-sources"><span>PUBLIC RESEARCH SOURCES</span><h2>References</h2><p>Personal working sheets are intentionally excluded from public dossier links.</p><div>{sources.map((source) => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}><small>{source.label}</small><b>{source.title}</b><i>OPEN EXTERNAL SOURCE ↗</i></a>)}</div></section>}
  </main>;
}
