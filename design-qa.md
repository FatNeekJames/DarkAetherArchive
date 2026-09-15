# Design QA — The Truth Lies Television

## Comparison target

- Source visual truth: `/tmp/codex-clipboard-ab17a36e-77a7-40ad-899d-21f64c9549df.png`
- Tracked source reference: `public/arg/truth-lies-tv/tv-console-reference.png`
- Source pixels: 1314 × 733 at 1× density
- Implementation: Codex in-app browser capture, tab 11, `http://localhost:3001/signals/the-truth-lies/channels`
- Desktop viewport: 1280 × 720 CSS px at device-pixel ratio 1
- Desktop console bounds: 878.56 × 490.09 CSS px; source normalized proportionally to the same 1.793:1 aspect ratio
- Mobile comparison: 390 × 844 CSS px at device-pixel ratio 1; console normalized to the full 390 px viewport width
- State: Channel 01 powered on and looping; final desktop capture taken at page top

## Full-view comparison evidence

The implementation uses the supplied television photograph as the console itself, preserving the source bezel, curved glass, control labels, button spacing, power lamp, table edge, black surround, and 1314:733 silhouette. The live channel is clipped into the measured inner-screen aperture. At 1280 × 720, the full photographed control panel remains visible in the first viewport. The archive heading and readout are intentional product additions outside the reference console.

The 390 × 844 comparison confirms that the reference television scales without horizontal overflow. Since the photographed button hit areas become too small for touch at this width, a separate 48 px-high mobile control bank appears immediately below the set.

## Focused region comparison evidence

- Screen aperture: the live video aligns with the photographed CRT opening and retains the rounded screen edge. Channel 01 is cropped to its inner broadcast, eliminating the recorded TV-inside-TV frame.
- Physical controls: transparent semantic controls align with VOL up/down, CH up/down, POWER, REC, and PAUSE in the source photograph. Keyboard focus produces a visible outline without replacing the photographed buttons.
- Typography: labels embedded in the source photograph remain raster-authentic. Archive-only text uses the existing Dark Aether serif/technical type system and stays outside the console.
- Color: the near-black console, muted CRT footage, purple archive accent, and restrained grey readout preserve the source’s low-light hierarchy.
- Image quality: the original console image is used at its native aspect ratio. Videos were web-optimized to H.264/AAC and retain their original crops except Channel 01’s user-requested screen isolation.
- Copy: control instructions match the implemented behavior; REC downloads the active channel rather than implying live recording.

## Findings

No actionable P0, P1, or P2 differences remain.

- P3 — The archive readout sits below the physical set on short desktop viewports. This is acceptable because all reference controls remain visible and operable in the first viewport; the readout is supplemental rather than part of the source visual.

## Interaction and accessibility checks

- Channel up advances the active source and unmutes playback after user interaction.
- Channel down wraps from Channel 01 to Channel 08.
- Volume controls update the media volume in 10% steps.
- Pause toggles pause/resume and updates the accessible label.
- Power replaces the broadcast with “NO SIGNAL” and disables irrelevant controls until restored.
- REC exposes the active MP4 through a descriptive `download` link.
- Desktop controls are keyboard-reachable with visible focus; mobile controls use practical touch targets.
- Browser console: no warnings or errors.

## Comparison history

1. Initial capture: Channel 01 contained a recording of the original television interface, producing a nested TV. Fix: cropped the supplied first video to its CRT picture area and re-encoded only that channel.
2. Short-desktop capture: the physical control row fell below the fold and an added channel-status overlay competed with footage. Fix: removed the overlay, compacted the archive heading, and sized the set against viewport height.
3. Final desktop and mobile captures: the complete console and controls are visible, the video occupies the correct aperture, Channel 01 is isolated, and the mobile control bank does not overflow.

## Follow-up polish

- Future supplied channel names or broadcast dates can replace the opaque source IDs in the supplemental readout without changing the television interaction.

final result: passed
