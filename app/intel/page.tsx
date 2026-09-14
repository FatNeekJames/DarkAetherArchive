import Link from 'next/link';
import IntelArchiveExplorer, { type IntelExplorerRecord } from '../components/IntelArchiveExplorer';
import { mapIntel } from '../data/map-intel';
import { intelRecordSlug } from '../data/intel-details';
import { zombieGames, zombieMaps } from '../data/maps';

const newestMapOrder = ['rex-infernus', 'kowakujo', 'totenreich', 'paradox-junction', 'astra-malorum', 'ashes-of-the-damned', 'reckoning', 'shattered-veil', 'the-tomb', 'citadelle-des-morts', 'terminus', 'liberty-falls', 'forsaken', 'mauer-der-toten', 'outbreak', 'firebase-z', 'die-maschine', 'onslaught'];

export default function IntelArchive() {
  const gameSlugByName = new Map(zombieGames.map(([slug, name]) => [name, slug]));
  const mapsBySlug = new Map(zombieMaps.map((map) => [map[0], map]));
  const records: IntelExplorerRecord[] = newestMapOrder.flatMap((mapSlug) => {
    const map = mapsBySlug.get(mapSlug);
    if (!map) return [];
    const [, mapName, gameName] = map;
    const gameSlug = gameSlugByName.get(gameName) ?? '';
    return (mapIntel[mapSlug] ?? []).map((record, index) => ({ ...record, id: `${mapSlug}:${index}`, mapSlug, mapName, gameSlug, gameName, detailSlug: intelRecordSlug(record.title) }));
  });
  const games = zombieGames.filter(([, gameName]) => zombieMaps.some(([slug,, mapGame]) => mapGame === gameName && (mapIntel[slug]?.length ?? 0) > 0)).map(([slug,, shortName]) => ({ slug, name: shortName }));

  return <main className="route-page intel-page">
    <header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link className="selected" href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav></header>
    <section className="route-hero compact-route-hero"><span>INTELLIGENCE INVENTORY {' // '} {records.length} SOURCE-LINKED RECORDS</span><h1>Intel archive</h1><p>Search the latest indexed intel across Black Ops 7, Black Ops 6 and Cold War, then open its map dossier to track collection progress.</p></section>
    <IntelArchiveExplorer records={records} games={games} />
  </main>;
}
