export type IntelDetail = {
  description: string;
  transcript?: string;
  media?: { kind: 'image' | 'audio' | 'model'; url: string; alt: string; caption?: string };
};

export const intelRecordSlug = (title: string) => title
  .normalize('NFKD')
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, '-')
  .replace(/(^-|-$)/g, '');

export const curatedIntelDetails: Record<string, IntelDetail> = {
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
