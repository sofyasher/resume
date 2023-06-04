export enum LANGUAGE_LEVEL_CODES {
  A1 = 'A1',
  A2 = 'A2',
  B1 = 'B1',
  B2 = 'B2',
  C1 = 'C1',
  C2 = 'C2',
}

export interface LanguageModel {
  flagCode: string;
  langCode: string;
  levelCode: LANGUAGE_LEVEL_CODES;
}

export const LANGUAGE_LEVELS_IN_CZECH: Map<LANGUAGE_LEVEL_CODES, string> =
  new Map([
    [LANGUAGE_LEVEL_CODES.A1, 'Začátečník'],
    [LANGUAGE_LEVEL_CODES.A2, 'Mírně pokročilý'],
    [LANGUAGE_LEVEL_CODES.B1, 'Středně pokročilý'],
    [LANGUAGE_LEVEL_CODES.B2, 'Vyšší středně pokročilý'],
    [LANGUAGE_LEVEL_CODES.C1, 'Pokročilý'],
    [LANGUAGE_LEVEL_CODES.C2, 'Rodilý mluvčí'],
  ]);
