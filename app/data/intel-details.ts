export type IntelMedia = {
  kind: 'image' | 'audio' | 'model' | 'source';
  url: string;
  alt: string;
  caption?: string;
  sourceUrl?: string;
};

export type IntelDetail = {
  description: string;
  transcript?: string;
  transcriptSource?: { url: string; label: string };
  media?: IntelMedia[];
};

export const intelRecordSlug = (title: string) => title
  .normalize('NFKD')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

const rexGuide = 'https://gamingally.net/black-ops-7-all-rex-infernus-intel-locations/';
const rexRecording = 'https://www.youtube.com/watch?v=OYC6YPNo5gI';
const rexImage = (index?: number) => `https://gamingally.net/content/images/2026/08/black-ops-7--all-rex-infernus-intel-locations-GamingAlly${index === undefined ? '' : `-${index}`}.webp`;
const sourceImage = (title: string, index?: number): IntelMedia => ({
  kind: 'image',
  url: rexImage(index),
  alt: `${title} Intel location in Rex Infernus`,
  caption: 'Location evidence from GamingAlly’s Rex Infernus Intel guide.',
  sourceUrl: rexGuide,
});
const sourceRecording = (title: string, seconds: number): IntelMedia => ({
  kind: 'source',
  url: `${rexRecording}&t=${seconds}s`,
  alt: `Open the source recording for ${title}`,
  caption: 'Source showcase timestamp; transcription still requires audio verification.',
  sourceUrl: rexRecording,
});

const rexIntelDetails: Record<string, IntelDetail> = Object.fromEntries([
  ['the-long-game', {
    description: 'One of five Rex Infernus audio logs. It is recovered in Nyxara’s Sanctuary, in the rear room beside the Arsenal and the cliff edge.',
    media: [sourceImage('The Long Game'), sourceRecording('The Long Game', 83)],
  }],
  ['pecking-order', {
    description: 'A sanctuary audio log found on a rock pile in the rear section of Veytharion’s Sanctuary.',
    media: [sourceImage('Pecking Order', 1), sourceRecording('Pecking Order', 70)],
  }],
  ['a-game-of-cat-and-strauss', {
    description: 'A piano-triggered recording in Her House. Playing 8-6-7-5-6-5-3-5-4 reveals the Blueprint document and starts this audio log.',
    media: [sourceImage('A Game of Cat and Strauss', 2), sourceRecording('A Game of Cat and Strauss', 24)],
  }],
  ['the-mark', {
    description: 'An audio log positioned just inside Caltheris’ Sanctuary, immediately left of the entrance.',
    media: [sourceImage('The Mark', 4), sourceRecording('The Mark', 100)],
  }],
  ['spa-day', {
    description: 'An elevated audio log in Dravakar’s Sanctuary. It is reached by climbing beside the wall-buy and following the stairs to the upper ledge.',
    media: [sourceImage('Spa Day', 5), sourceRecording('Spa Day', 110)],
  }],
  ['the-first-to-fall', {
    description: 'A document on the floating rock above the Ammo Crate near Juggernog on Spira Insula. The Void Claw is required to reach it.',
    media: [sourceImage('The First to Fall', 7)],
  }],
  ['the-others-that-followed', {
    description: 'A document concealed behind webbing near Widow’s Wine on Aranea Insula. Fire or explosive damage clears the obstruction.',
    media: [sourceImage('The Others That Followed', 8)],
  }],
  ['the-inevitable-end', {
    description: 'A document above the rear entrance to Dravakar’s Sanctuary from Runas Insula. Use the Void Claw to grapple onto the wall above the doorway.',
    media: [sourceImage('The Inevitable End', 9)],
  }],
  ['longterm-goals', {
    description: 'A randomized document recovered by opening bone piles with the Void Claw. The piles can change between rounds, so it has no single fixed pickup point.',
    media: [sourceImage('Longterm Goals', 10)],
  }],
  ['blueprint', {
    description: 'A document produced by the Her House piano puzzle. Enter 8-6-7-5-6-5-3-5-4, then collect it from the piano.',
    media: [sourceImage('Blueprint', 11)],
  }],
  ['squish', {
    description: 'A document hidden beneath the bed in the children’s room of Her House. Jump on the bed five times to make it appear.',
    media: [sourceImage('Squish', 13)],
  }],
  ['world-seed', {
    description: 'A main-quest artifact registered when the World Seed is placed on the central Nexus Forge altar during Pack-a-Punch progression.',
    media: [sourceImage('World Seed', 15)],
  }],
  ['void-claw', {
    description: 'A traversal and quest artifact collected from its pedestal on the lower Nexus Forge floor after Pack-a-Punch is activated.',
    media: [sourceImage('Void Claw', 16)],
  }],
  ['warden-s-blight', {
    description: 'The map’s Wonder Weapon and final artifact. It is registered after completing the Void Claw sequence, Dravakar puzzles, forest trial, and final crafting step.',
    media: [sourceImage('Warden’s Blight', 17)],
  }],
].map(([slug, detail]) => {
  const typedDetail = detail as IntelDetail;
  const recording = typedDetail.media?.find((item) => item.kind === 'source');
  return [`rex-infernus:${slug}`, {
    ...typedDetail,
    ...(recording ? { transcriptSource: { url: recording.url, label: 'Review source recording at the indexed timestamp' } } : {}),
  }];
}));

export const curatedIntelDetails: Record<string, IntelDetail> = {
  ...rexIntelDetails,
  'liberty-falls:aetherella-statue': {
    description: 'A collection of nine Aetherella figurines hidden across Liberty Falls. Drawing every figure in with the Thrustodyne activates the Aetherella side quest and temporarily transforms the player into the comic-book heroine, complete with flight and heat-vision attacks.',
  },
  'liberty-falls:quantum-mechanical-failure': {
    description: 'A recovered audio log connected to the dimensional research surrounding Liberty Falls. It is filed as one of the operation’s narrative recordings and can be collected inside Olly’s Comics.',
  },
};

export const defaultIntelDescription = (title: string, type: string, mapName: string) => {
  if (type === 'Audio Log') return `${title} is a recovered audio recording from ${mapName}. Its entry preserves the collection point and provides a dedicated place for verified audio and transcript material.`;
  if (type === 'Document') return `${title} is a written intelligence record recovered during the ${mapName} operation. Its dossier separates the document itself, its verified transcript, and the field collection instructions.`;
  if (type === 'Transmission') return `${title} is a transmitted intelligence record associated with ${mapName}. This dossier tracks its narrative faction, recovery method, and verified transcription status.`;
  if (type === 'Artifact') return `${title} is a physical artifact connected to the ${mapName} operation. Its dossier records what it is, how it relates to the map, and where or how it is recovered.`;
  return `${title} is an indexed intelligence record from ${mapName}. This dossier preserves its classification, context, and collection method.`;
};
