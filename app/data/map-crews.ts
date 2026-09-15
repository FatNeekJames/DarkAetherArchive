export type CrewRoster = {
  designation: string;
  members: readonly string[];
  note: string;
};

const crews = {
  ultimis: {
    designation: 'ULTIMIS',
    members: ['Edward Richtofen', '“Tank” Dempsey', 'Nikolai Belinski', 'Takeo Masaki'],
    note: 'The original four-character Aether crew.',
  },
  primis: {
    designation: 'PRIMIS',
    members: ['Edward Richtofen', '“Tank” Dempsey', 'Nikolai Belinski', 'Takeo Masaki'],
    note: 'The younger alternate-timeline incarnations of the original crew.',
  },
  victis: {
    designation: 'VICTIS',
    members: ['Abigail “Misty” Briarton', 'Marlton Johnson', 'Samuel Stuhlinger', 'Russman'],
    note: 'Four survivors drawn into the struggle between Maxis and Richtofen.',
  },
  mob: {
    designation: 'MOBSTERS',
    members: ['Albert “Weasel” Arlington', 'Billy Handsome', 'Michael “Finn” O’Leary', 'Salvatore “Sal” DeLuca'],
    note: 'The inmates trapped in Alcatraz’s repeating cycle.',
  },
  shadows: {
    designation: 'MORG CITY',
    members: ['Nero Blackstone', 'Jessica Rose', 'Floyd Campbell', 'Jack Vincent'],
    note: 'Four cursed residents of Morg City.',
  },
  chaos: {
    designation: 'CHAOS',
    members: ['Scarlett Rhodes', 'Diego Necalli', 'Bruno Delacroix', 'Stanton Shaw'],
    note: 'The expedition pursuing Alistair Rhodes and the Order.',
  },
  bo6: {
    designation: 'REQUIEM',
    members: ['Maya Aguinaldo', 'Grigori Weaver', 'Dr. Elizabeth Grey', 'Maj. Mackenzie Carver'],
    note: 'The dedicated Black Ops 6 crew formed after the Terminus prison break.',
  },
  bo7: {
    designation: 'EXPANDED CREW',
    members: ['Edward Richtofen', '“Tank” Dempsey', 'Takeo Masaki', 'Nikolai Belinski', 'Maya Aguinaldo', 'Grigori Weaver', 'Dr. Elizabeth Grey', 'Maj. Mackenzie Carver'],
    note: 'Eight dedicated crew characters brought together inside the Dark Aether.',
  },
  requiemOperators: {
    designation: 'REQUIEM STRIKE TEAM',
    members: ['Player-selected Operators'],
    note: 'Cold War operations use a player-selected strike team supported by Requiem command.',
  },
  vanguardOperators: {
    designation: 'VANGUARD SPECIAL FORCES',
    members: ['Player-selected Operators'],
    note: 'Operators channel allied Dark Aether entities during the Vanguard campaign.',
  },
  deadbolt: {
    designation: 'OPERATION DEADBOLT',
    members: ['Player-selected Strike Team'],
    note: 'A multinational task force deployed into the Urzikstan exclusion zone.',
  },
  exo: {
    designation: 'ATLAS SURVIVORS',
    members: ['Oz', 'Lilith', 'Decker', 'Kahn'],
    note: 'Atlas personnel caught inside the Exo Zombies outbreak.',
  },
  iw: {
    designation: 'WILLARD’S ACTORS',
    members: ['A.J.', 'Andre', 'Poindexter', 'Sally'],
    note: 'Four actors trapped inside Willard Wyler’s films.',
  },
  wwii: {
    designation: 'BUREAU OF ARCHAIC TECHNOLOGIES',
    members: ['Marie Fischer', 'Jefferson Potts', 'Drostan Hynd', 'Olivia Durant'],
    note: 'The Allied team confronting the Nazi occult weapons programme.',
  },
  extinction: {
    designation: 'SPECTRE-1',
    members: ['Player-selected CIF Soldiers'],
    note: 'The Cryptid-response unit deployed across the Extinction campaign.',
  },
  marines: {
    designation: 'SURVIVORS',
    members: ['Unnamed Marines'],
    note: 'The earliest Zombies operations predate a fixed named crew.',
  },
} satisfies Record<string, CrewRoster>;

const mapCrew: Record<string, CrewRoster> = {};

const assign = (crew: CrewRoster, slugs: string[]) => slugs.forEach((slug) => { mapCrew[slug] = crew; });

assign(crews.marines, ['nacht-der-untoten', 'verruckt', 'bo1-nacht-der-untoten', 'bo1-verruckt', 'bo3-nacht-der-untoten', 'bo3-verruckt']);
assign(crews.ultimis, ['shi-no-numa-waw', 'der-riese', 'kino-der-toten', 'ascension', 'shangri-la', 'moon', 'bo1-shi-no-numa', 'bo1-der-riese', 'bo3-shi-no-numa', 'bo3-kino-der-toten', 'bo3-ascension', 'bo3-shangri-la', 'bo3-moon']);
assign(crews.victis, ['tranzit', 'bus-depot', 'farm', 'town', 'die-rise', 'buried', 'tag-der-toten']);
assign(crews.mob, ['mob-of-the-dead']);
assign(crews.primis, ['origins', 'bo3-origins', 'the-giant', 'der-eisendrache', 'zetsubou-no-shima', 'gorod-krovi', 'revelations', 'blood-of-the-dead']);
assign(crews.shadows, ['shadows-of-evil']);
assign(crews.chaos, ['voyage-of-despair', 'ix', 'ancient-evil']);
assign(crews.requiemOperators, ['die-maschine', 'firebase-z', 'outbreak', 'mauer-der-toten', 'forsaken', 'onslaught']);
assign(crews.vanguardOperators, ['der-anfang', 'terra-maledicta', 'shi-no-numa', 'the-archon']);
assign(crews.deadbolt, ['urzikstan']);
assign(crews.bo6, ['terminus', 'citadelle-des-morts', 'the-tomb', 'shattered-veil', 'reckoning']);
assign(crews.bo7, ['ashes-of-the-damned', 'astra-malorum', 'paradox-junction', 'totenreich', 'kowakujo', 'rex-infernus']);
assign(crews.exo, ['exo-outbreak', 'infection', 'carrier', 'descent']);
assign(crews.iw, ['zombies-in-spaceland', 'rave-in-the-redwoods', 'shaolin-shuffle', 'attack-of-the-radioactive-thing', 'the-beast-from-beyond']);
assign(crews.wwii, ['groesten-haus', 'the-final-reich', 'the-darkest-shore', 'the-shadowed-throne', 'the-tortured-path', 'the-frozen-dawn']);
assign(crews.extinction, ['point-of-contact', 'nightfall', 'mayday', 'awakening', 'exodus']);

mapCrew.five = {
  designation: 'PENTAGON',
  members: ['John F. Kennedy', 'Robert McNamara', 'Richard Nixon', 'Fidel Castro'],
  note: 'World leaders defending the Pentagon during the outbreak.',
};
mapCrew['call-of-the-dead'] = {
  designation: 'CELEBRITY CAST',
  members: ['Sarah Michelle Gellar', 'Robert Englund', 'Danny Trejo', 'Michael Rooker'],
  note: 'A film crew forced into a real Siberian outbreak.',
};
mapCrew['nuketown-zombies'] = {
  designation: 'NUKETOWN RESPONSE',
  members: ['CIA Agents', 'CDC Agents'],
  note: 'Player-selected government response teams.',
};
mapCrew.classified = crews.ultimis;
mapCrew['alpha-omega'] = {
  designation: 'PRIMIS + ULTIMIS',
  members: ['Richtofen', 'Dempsey', 'Takeo', 'Nikolai', 'Primis counterparts', 'Ultimis counterparts'],
  note: 'Both versions of the original crew converge at Camp Edward.',
};
mapCrew['dead-of-the-night'] = {
  designation: 'GODFREY MANOR',
  members: ['Gideon Jones', 'Christina Fowler', 'Jonathan Warwick', 'Godfrey'],
  note: 'Guests trapped in the Order’s assault on Godfrey Manor.',
};
mapCrew['liberty-falls'] = {
  designation: 'JANUS RESPONSE TEAM',
  members: ['Player-selected Operators'],
  note: 'Liberty Falls supports the broader Operator roster rather than a fixed dedicated crew.',
};

export function crewForMap(slug: string): CrewRoster {
  return mapCrew[slug] ?? {
    designation: 'ARCHIVE PENDING',
    members: ['Crew roster under verification'],
    note: 'A source-verified playable roster has not yet been attached to this dossier.',
  };
}
