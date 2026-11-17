/*
 * Contact form profanity lists
 *
 * Source: the user's existing
 * RU / FR / EN dictionaries
 */

export const PROFANITY_EN = [
  'ass',
  'asshole',
  'bastard',
  'bitch',
  'bollocks',
  'bullshit',
  'cocksucker',
  'crap',
  'cunt',
  'dick',
  'dickhead',
  'douche',
  'dumbass',
  'fuck',
  'fucker',
  'fucking',
  'goddamn',
  'jerk',
  'motherfucker',
  'piss',
  'prick',
  'shit',
  'shithead',
  'slut',
  'whore',
  'wanker',
] as const


export const PROFANITY_FR = [
  'abruti',
  'andouille',
  'batard',
  'batar',
  'batre',
  'beauf',
  'bete',
  'bouffon',
  'bougnoule',
  'branleur',
  'con',
  'conasse',
  'connard',
  'connasse',
  'conne',
  'crevard',
  'encule',
  'fdp',
  'gouine',
  'merde',
  'merdeux',
  'minus',
  'naze',
  'pd',
  'pede',
  'pouffiasse',
  'pute',
  'salopard',
  'salope',
  'tafiole',
  'tapette',
  'trouduc',
  'vaurien',
] as const


export const PROFANITY_RU = [
  'сука',
  'суки',
  'сучка',
  'блядь',
  'бля',
  'хуй',
  'хер',
  'пизда',
  'пиздец',
  'ебать',
  'заебал',
  'ебаный',
  'нахуй',
  'мудак',
  'долбоеб',
  'дебил',
  'идиот',
  'пидор',
  'пидорас',
  'шлюха',
  'проститутка',
  'гондон',
  'говно',
  'сраный',
  'срань',
] as const


export const CONTACT_PROFANITY = [
  ...PROFANITY_EN,
  ...PROFANITY_FR,
  ...PROFANITY_RU,
] as const
