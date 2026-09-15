import Link from '@/app/components/SiteLink';
import TruthLiesTelevision from '../../../components/TruthLiesTelevision';

export default function TruthLiesChannels() {
  return <main className="route-page broadcast-page">
    <header>
      <Link href="/">DA / DARK AETHER ARCHIVE</Link>
      <nav><Link href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link className="selected" href="/signals">Signals</Link></nav>
    </header>
    <section className="broadcast-heading">
      <div className="intel-breadcrumbs"><Link href="/signals">SIGNALS</Link><b>/</b><Link href="/signals/the-truth-lies">THE TRUTH LIES</Link><b>/</b><span>BROADCAST CONSOLE</span></div>
      <span>ARCHIVED TRANSMISSIONS // EIGHT-CHANNEL LOOP</span>
      <h1>The Truth Lies Television</h1>
      <p>Operate the recovered console. Every channel loops its original transmission; REC downloads the channel currently on screen.</p>
    </section>
    <TruthLiesTelevision />
    <footer className="broadcast-footer"><p>The archive preserves each supplied channel as a separate position, including repeated transmissions.</p><Link href="/signals/the-truth-lies">RETURN TO CASE FILE →</Link></footer>
  </main>;
}
