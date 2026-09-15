'use client';

import { useEffect, useRef, useState } from 'react';

const channels = [
  { number: '01', file: '/arg/truth-lies-tv/channel-01.mp4', source: '8sjxk2v' },
  { number: '02', file: '/arg/truth-lies-tv/channel-02.mp4', source: '9sdfpbf' },
  { number: '03', file: '/arg/truth-lies-tv/channel-03.mp4', source: '86jxbd5' },
  { number: '04', file: '/arg/truth-lies-tv/channel-04.mp4', source: '431f88p' },
  { number: '05', file: '/arg/truth-lies-tv/channel-05.mp4', source: 'fb3kts6' },
  { number: '06', file: '/arg/truth-lies-tv/channel-06.mp4', source: 'pfk63rn' },
  { number: '07', file: '/arg/truth-lies-tv/channel-07.mp4', source: 'r3tqw2h' },
  { number: '08', file: '/arg/truth-lies-tv/channel-08.mp4', source: 'xrwvq73' },
] as const;

export default function TruthLiesTelevision() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [channelIndex, setChannelIndex] = useState(0);
  const [powered, setPowered] = useState(true);
  const [paused, setPaused] = useState(false);
  const [muted, setMuted] = useState(true);
  const [volume, setVolume] = useState(.65);
  const [recording, setRecording] = useState(false);
  const channel = channels[channelIndex];

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.volume = volume;
    video.muted = muted;
    if (!powered || paused) {
      video.pause();
      return;
    }
    video.play().catch(() => setPaused(true));
  }, [channelIndex, muted, paused, powered, volume]);

  const changeChannel = (direction: number) => {
    if (!powered) return;
    setMuted(false);
    setChannelIndex((current) => (current + direction + channels.length) % channels.length);
    setPaused(false);
  };

  const changeVolume = (difference: number) => {
    if (!powered) return;
    setMuted(false);
    setVolume((current) => Math.min(1, Math.max(0, Number((current + difference).toFixed(1)))));
  };

  const togglePower = () => {
    setPowered((current) => !current);
    setPaused(false);
  };

  const togglePause = () => {
    if (!powered) return;
    setMuted(false);
    setPaused((current) => !current);
  };

  const signalRecord = () => {
    setRecording(true);
    window.setTimeout(() => setRecording(false), 850);
  };

  return <section className="broadcast-console" aria-label="Interactive Truth Lies television">
    <div className={`truth-tv ${powered ? 'is-powered' : 'is-off'}`}>
      <img className="truth-tv-reference" src="/arg/truth-lies-tv/tv-console-reference.png" alt="1990s-style Truth Lies television console" />
      <div className="truth-tv-screen">
        <video ref={videoRef} key={channel.file} src={channel.file} loop playsInline preload="auto" aria-label={`Truth Lies channel ${channel.number}`} />
        {!powered && <div className="truth-tv-off-screen" aria-live="polite"><span>NO SIGNAL</span></div>}
      </div>

      <button className="tv-hotspot tv-volume-up" type="button" onClick={() => changeVolume(.1)} disabled={!powered} aria-label="Volume up" title="Volume up" />
      <button className="tv-hotspot tv-volume-down" type="button" onClick={() => changeVolume(-.1)} disabled={!powered} aria-label="Volume down" title="Volume down" />
      <button className="tv-hotspot tv-channel-up" type="button" onClick={() => changeChannel(1)} disabled={!powered} aria-label="Next channel" title="Next channel" />
      <button className="tv-hotspot tv-channel-down" type="button" onClick={() => changeChannel(-1)} disabled={!powered} aria-label="Previous channel" title="Previous channel" />
      <button className="tv-hotspot tv-power" type="button" onClick={togglePower} aria-label={powered ? 'Turn television off' : 'Turn television on'} title="Power" />
      <a className="tv-hotspot tv-record" href={channel.file} download={`truth-lies-channel-${channel.number}.mp4`} onClick={signalRecord} aria-label={`Download channel ${channel.number}`} title="Download current channel" />
      <button className="tv-hotspot tv-pause" type="button" onClick={togglePause} disabled={!powered} aria-label={paused ? 'Resume channel' : 'Pause channel'} title={paused ? 'Resume' : 'Pause'} />
    </div>

    <div className="tv-mobile-controls" aria-label="Television controls">
      <button type="button" onClick={() => changeVolume(.1)} disabled={!powered}>VOL +</button>
      <button type="button" onClick={() => changeVolume(-.1)} disabled={!powered}>VOL −</button>
      <button type="button" onClick={() => changeChannel(1)} disabled={!powered}>CH +</button>
      <button type="button" onClick={() => changeChannel(-1)} disabled={!powered}>CH −</button>
      <button type="button" onClick={togglePower}>{powered ? 'POWER OFF' : 'POWER ON'}</button>
      <a href={channel.file} download={`truth-lies-channel-${channel.number}.mp4`} onClick={signalRecord}>DOWNLOAD</a>
      <button type="button" onClick={togglePause} disabled={!powered}>{paused ? 'RESUME' : 'PAUSE'}</button>
    </div>

    <div className="broadcast-readout">
      <div><span>ACTIVE CHANNEL</span><b>{channel.number} / {String(channels.length).padStart(2, '0')}</b></div>
      <div><span>VOLUME</span><b>{muted ? 'MUTED · USE VOL' : `${Math.round(volume * 100)}%`}</b></div>
      <div><span>SOURCE RECORD</span><b>{channel.source.toUpperCase()}</b></div>
      <div><span>PLAYBACK</span><b aria-live="polite">{!powered ? 'POWER OFF' : recording ? 'DOWNLOADING' : paused ? 'PAUSED' : 'LOOPING'}</b></div>
    </div>
  </section>;
}
