import Link from '@/app/components/SiteLink';

const archiveRoot = '/intel/prelaunch-bo6';

export default function LibertyFallsPreLaunchIntel() {
  return <main className="route-page prelaunch-dossier">
    <header>
      <Link href="/">DA / DARK AETHER ARCHIVE</Link>
      <nav><Link className="selected" href="/maps">Maps</Link><Link href="/intel">Intel</Link><Link href="/timeline">Timeline</Link><Link href="/signals">Signals</Link></nav>
    </header>

    <section className="prelaunch-hero">
      <div className="intel-breadcrumbs">
        <Link href="/maps">MAP INDEX</Link><b>/</b><Link href="/maps/liberty-falls">LIBERTY FALLS</Link><b>/</b><span>PRE-LAUNCH FILE</span>
      </div>
      <span>DECLASSIFIED // PHONE INTEL // AUGUST 2024</span>
      <h1>Liberty Falls Pre-Launch Intel</h1>
      <p>A reconstruction of the Black Ops 6 text-message trail that began with a Call of Duty Message of the Day and culminated in the first clear look inside Liberty Falls.</p>
      <dl>
        <div><dt>CAMPAIGN WINDOW</dt><dd>12–25 August 2024</dd></div>
        <div><dt>ENTRY PHRASE</dt><dd>CLEARANCE</dd></div>
        <div><dt>ARCHIVE CONTENTS</dt><dd>7 images · 1 audio log</dd></div>
      </dl>
    </section>

    <section className="prelaunch-intro">
      <p className="section-kicker">CASE OVERVIEW</p>
      <h2>The clearance line</h2>
      <p>On 12 August, a Message of the Day appeared across Call of Duty titles. It invited players to text <b>CLEARANCE</b> to <b>97122</b> or <b>+1 (202) 918-3022</b> and connect an Activision account. Over the following two weeks, reply keywords removed redactions and exposed Project Janus material connected to Terminus, Liberty Falls, and Director Richtofen.</p>
      <p className="archive-provenance">The media below is preserved from the original promotional drop supplied to this archive. Descriptions separate what is visible or audible in the files from the archive’s connective commentary.</p>
    </section>

    <div className="prelaunch-timeline">
      <article className="prelaunch-entry">
        <aside><time dateTime="2024-08-12">12 AUG 2024</time><span>REPLY // ZOMBIES</span><b>FILE 01</b></aside>
        <div className="prelaunch-entry-body">
          <p className="section-kicker">PROJECT JANUS ENGINEERING</p>
          <h2>Organosilicate Aetherium Breeder Reactor</h2>
          <p>The first response arrived partially censored. Replying <b>ZOMBIES</b> exposed the document title and approval block: a Project Janus blueprint for the Aetherium breeder reactor later seen on Terminus. The clear sheet is dated 21 June 1988 and bears E. Richtofen’s approval.</p>
          <div className="evidence-comparison">
            <figure><span>ORIGINAL // REDACTED</span><img src={`${archiveRoot}/reactor-redacted.webp`} alt="Redacted blueprint of the Organosilicate Aetherium Breeder Reactor" /><figcaption>Initial phone-intel transmission.</figcaption></figure>
            <figure><span>KEYWORD UNLOCK // CLEAR</span><img src={`${archiveRoot}/reactor-clear.webp`} alt="Clear blueprint of the Organosilicate Aetherium Breeder Reactor" /><figcaption>Recovered after the reply “ZOMBIES”.</figcaption></figure>
          </div>
          <a className="archive-reference" href="https://callofduty.fandom.com/wiki/Terminus_(Zombies)" target="_blank" rel="noreferrer">REFERENCE // TERMINUS ↗</a>
        </div>
      </article>

      <article className="prelaunch-entry">
        <aside><time dateTime="2024-08-16">16 AUG 2024</time><span>REPLY // ADLER</span><b>FILE 02</b></aside>
        <div className="prelaunch-entry-body">
          <p className="section-kicker">CAPITOL STATION CREDENTIAL</p>
          <h2>Jess Burke Press Pass</h2>
          <p>A second redacted transmission concealed the holder and publication. Replying <b>ADLER</b> revealed a press credential issued to Jess Burke of The Washington Telegraph for the National Democratic Commission’s “Meeting the Future” event on 2 February 1991—the setting of the Black Ops 6 campaign mission Most Wanted.</p>
          <div className="evidence-comparison portrait-evidence">
            <figure><span>ORIGINAL // REDACTED</span><img src={`${archiveRoot}/press-pass-redacted.webp`} alt="Redacted Capitol Station press pass" /><figcaption>Identity and press designation concealed.</figcaption></figure>
            <figure><span>KEYWORD UNLOCK // CLEAR</span><img src={`${archiveRoot}/press-pass-clear.webp`} alt="Clear Capitol Station press pass for Jess Burke" /><figcaption>Recovered after the reply “ADLER”.</figcaption></figure>
          </div>
          <a className="archive-reference" href="https://callofduty.fandom.com/wiki/Most_Wanted" target="_blank" rel="noreferrer">REFERENCE // MOST WANTED ↗</a>
        </div>
      </article>

      <article className="prelaunch-entry audio-entry">
        <aside><time dateTime="2024-08-22">22 AUG 2024</time><span>REPLY // LIBERTY FALLS<br />OR RICHTOFEN</span><b>FILE 03</b></aside>
        <div className="prelaunch-entry-body">
          <p className="section-kicker">PROJECT JANUS AUDIO INTERCEPT</p>
          <h2>Panos Warns of Richtofen’s Hubris</h2>
          <p>The transmitted recording was initially distorted. Either reply keyword—<b>LIBERTY FALLS</b> or <b>RICHTOFEN</b>—returned this clear fourteen-second recording.</p>
          <div className="archive-audio-player">
            <span>AUDIO LOG // CLEAR VERSION // 00:14</span>
            <audio controls preload="metadata" src={`${archiveRoot}/panos-message-clear.ogg`}>Your browser does not support OGG audio.</audio>
          </div>
          <div className="prelaunch-transcript">
            <span>VERIFIED TRANSCRIPT</span>
            <blockquote>“Doctor Pericles Panos, Project Janus Energy Research Division. It has become abundantly clear Director Richtofen is slipping. If we fail, it will be all down to Richtofen and his hubris.”</blockquote>
            <cite>— Dr. Pericles Panos</cite>
          </div>
        </div>
      </article>

      <article className="prelaunch-entry">
        <aside><time dateTime="2024-08-25">25 AUG 2024</time><span>REPLY // WEST VIRGINIA</span><b>FILE 04</b></aside>
        <div className="prelaunch-entry-body">
          <p className="section-kicker">LIBERTY FALLS VISUAL RECON</p>
          <h2>The Town, the Thrustodyne, and the Church</h2>
          <p>Two new images exposed Liberty Falls and the Thrustodyne Aeronautics Model 23. Replying <b>WEST VIRGINIA</b> unlocked the final view: Operators inside a church after it had been swallowed by the Dark Aether.</p>
          <div className="recon-gallery">
            <figure><img src={`${archiveRoot}/liberty-falls-church.webp`} alt="Liberty Falls church with Project Janus structures in the distance" /><figcaption><b>01 // LIBERTY FALLS</b><span>The town’s church and damaged Project Janus facility.</span></figcaption></figure>
            <figure><img src={`${archiveRoot}/thrustodyne-model-23.webp`} alt="Close view of the Thrustodyne Aeronautics Model 23" /><figcaption><b>02 // THRUSTODYNE M23</b><span>The improvised wonder weapon in operation.</span></figcaption></figure>
            <figure><img src={`${archiveRoot}/dark-aether-church.webp`} alt="Operators inside the Liberty Falls church in the Dark Aether" /><figcaption><b>03 // KEYWORD UNLOCK</b><span>The church inside the Dark Aether.</span></figcaption></figure>
          </div>
          <div className="archive-reference-row">
            <a className="archive-reference" href="https://callofduty.fandom.com/wiki/Liberty_Falls" target="_blank" rel="noreferrer">REFERENCE // LIBERTY FALLS ↗</a>
            <a className="archive-reference" href="https://callofduty.fandom.com/wiki/Thrustodyne_Aeronautics_Model_23" target="_blank" rel="noreferrer">REFERENCE // THRUSTODYNE M23 ↗</a>
          </div>
        </div>
      </article>
    </div>

    <footer className="prelaunch-footer">
      <span>END OF FILE // DA-BO6-PRE-0824</span>
      <Link href="/maps/liberty-falls">RETURN TO LIBERTY FALLS DOSSIER →</Link>
    </footer>
  </main>;
}
