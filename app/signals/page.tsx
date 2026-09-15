import Link from 'next/link';

const cases = [
  {
    number: '01', title: 'Pawn Takes Pawn', subtitle: 'Black Ops Cold War reveal archive', date: 'August–October 2020',
    summary: 'Activision sent locked crates, projectors and 35mm slides to creators including NoahJ456 and MrDalekJD. Their combined clues led to PawnTakesPawn.com, a deliberately unstable Cold War-era television terminal that turned historical footage, ciphers and Warzone locations into a shared investigation.',
    chapters: [
      ['The crates arrive', 'Six creator boxes contained projectors and labelled slide sets. The community had to compare separate evidence packs rather than solve the opening alone. A hidden phrase directed players to the Pawn Takes Pawn site.'],
      ['The television goes live', 'Timed VHS broadcasts mixed historical news footage with numbers, map coordinates and coded messages. Solves pointed squads into Warzone bunkers and gradually exposed the “Know Your History” campaign.'],
      ['Reveal and continuation', 'The hunt culminated in the Black Ops Cold War reveal on 26 August 2020. Later updates kept the same fiction alive through Zombies teasers and the William Bowman material in October.'],
    ],
    sources: [
      ['Pawn Takes Pawn archive and chronology', 'https://callofduty.fandom.com/wiki/Pawn_Takes_Pawn'],
      ['Contemporary report: NoahJ456’s opening solve', 'https://www.nme.com/news/gaming-news/a-new-call-of-duty-alternate-reality-game-has-launched-2725183'],
      ['Community preservation thread', 'https://www.callofdutyzombies.com/topic/207921-know-your-history-pawn-takes-pawn-black-ops-cold-war-viral/'],
    ],
  },
  {
    number: '02', title: 'The Truth Lies', subtitle: 'Black Ops 6 reveal investigation', date: '22 May–9 June 2024',
    summary: 'TheTruthLies.com opened as a six-channel analogue television feed. Its masked activists, altered monuments and Cerberus imagery framed the new Black Ops conspiracy before Activision formally named Black Ops 6.',
    chapters: [
      ['The first broadcast', 'The campaign began with a clandestine video of Mount Rushmore being covered with “The Truth Lies.” Subsequent channels extended the message across real political imagery and international landmarks.'],
      ['Clues enter Warzone', 'Official communications directed Urzikstan players toward marked weapons, challenges and Bunker 7. The audience moved between the broadcast fiction and playable evidence instead of watching a conventional trailer sequence.'],
      ['The mask comes off', 'Call of Duty confirmed Black Ops 6 on 23 May, released the live-action reveal trailer on 28 May, and completed the worldwide reveal during the 9 June Xbox showcase and Black Ops 6 Direct.'],
    ],
    sources: [
      ['Official Black Ops 6 communications log', 'https://www.callofduty.com/uk/en/blog/2024/05/call-of-duty-black-ops-6-official-comms.html'],
      ['Official “The Truth Lies” reveal trailer', 'https://www.youtube.com/watch?v=V08UPqchVgQ'],
      ['Official worldwide reveal briefing', 'https://www.callofduty.com/blog/2024/06/call-of-duty-black-ops-6-worldwide-reveal-announcement'],
    ],
  },
  {
    number: '03', title: 'The Die Is Cast', subtitle: 'Black Ops 6 Zombies evidence log', date: '2024 investigation',
    summary: 'The Die Is Cast material shifted the investigation from the broader campaign conspiracy into a Zombies-focused trail. Preserved videos and creator breakdowns are treated as evidence records: the archive describes what each step contributed and links back to the original upload rather than reproducing it.',
    chapters: [
      ['A separate Zombies trail', 'The clues build anticipation through staged evidence and puzzle-solving rather than a single map trailer. Names, symbols and recovered material are most useful when viewed in release order.'],
      ['Community reconstruction', 'Creator coverage preserves solve order, failed theories and discoveries that official promotional pages no longer expose cleanly. Interpretations are labelled as analysis when they go beyond the source footage.'],
      ['Archive rule', 'This case remains linked to the supplied playlist and opening video. Future additions should preserve the upload date, original source and the distinction between an observed clue and a community conclusion.'],
    ],
    sources: [
      ['The Die Is Cast — complete supplied playlist', 'https://www.youtube.com/playlist?list=PL0Kq_R5fGtfydzy3-dch2SS4HkPYullLp'],
      ['The Die Is Cast — opening supplied video', 'https://www.youtube.com/watch?v=FX3MgR_JZ8g'],
      ['The Korborium — Zombies story analysis', 'https://www.youtube.com/@thekorborium115'],
      ['BlackOpsAmazing — Zombies archive coverage', 'https://www.youtube.com/@BlackOpsAmazing'],
    ],
  },
] as const;

export default function Signals(){return <main className="route-page signals-page"><header><Link href="/">DA / DARK AETHER ARCHIVE</Link><nav><Link href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link className="selected" href="/signals">Signals</Link></nav></header>
  <section className="route-hero compact-route-hero"><span>BLACK SITE ARCHIVE // ARG CASE FILES</span><h1>Covert investigations</h1><p>Open each compartmentalized file to follow the evidence in order, with original and preserved sources attached to every chapter.</p></section>
  <section className="signal-case-list">{cases.map((entry, caseIndex) => <details key={entry.title} open={caseIndex === 0}>
    <summary><div><span>CASE {entry.number} // {entry.date}</span><h2>{entry.title}</h2><p>{entry.subtitle}</p></div><i aria-hidden="true">OPEN FILE ⌄</i></summary>
    <div className="signal-case-body"><p className="signal-case-summary">{entry.summary}</p>{entry.number === '02' && <Link className="signal-full-file" href="/signals/the-truth-lies">OPEN COMPLETE CASE FILE →</Link>}<div className="signal-chapters">{entry.chapters.map(([title, body], index) => <article key={title}><b>{String(index + 1).padStart(2, '0')}</b><div><h3>{title}</h3><p>{body}</p></div></article>)}</div>
      <footer><span>SOURCES / ORIGINAL EVIDENCE</span>{entry.sources.map(([label, url]) => <a key={url} href={url} target="_blank" rel="noreferrer">{label} ↗</a>)}</footer>
    </div>
  </details>)}</section>
  </main>}
