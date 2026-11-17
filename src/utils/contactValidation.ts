import {
  CONTACT_PROFANITY,
} from './profanityLists'


export const CONTACT_LIMITS = {
  nameMin: 2,
  nameMax: 80,
  emailMax: 254,
  messageMin: 10,
  messageMax: 2000,
} as const


export type ContactField =
  | 'name'
  | 'email'
  | 'subject'
  | 'message'


export type ContactValidationInput = {
  name: string
  email: string
  subject: string
  message: string
}


export type ContactValidationErrors =
  Partial<
    Record<
      ContactField,
      string
    >
  >


const NAME_RE =
  /^(?!.*[ '\-’]{2})(?!.*[ '\-’]$)[\p{L}\p{M}]+(?:[ '\-’][\p{L}\p{M}]+)*$/u


const EMAIL_RE =
  /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/u


const HTML_TAG_RE =
  /<\s*\/?\s*[a-z][^>]*>/iu


const KEYBOARD_MASH_RE =
  /(qwerty|asdfg|zxcvb|azerty|qsdfg|йцукен|фывап|ячсми)/iu


const REPEATED_CHAR_RE =
  /(.)\1{5,}/u


const LATIN_VOWELS_RE =
  /[aeiouy]/giu


const CYRILLIC_VOWELS_RE =
  /[аеёиоуыэюя]/giu


const LATIN_CONSONANT_RUN_RE =
  /[bcdfghjklmnpqrstvwxyz]{6,}/iu


const CYRILLIC_CONSONANT_RUN_RE =
  /[бвгджзйклмнпрстфхцчшщ]{6,}/iu


const PROFANITY_SEPARATOR =
  String.raw`[\s._-]{0,2}`


const LATIN_SOFT_MAP:
  Record<
    string,
    string
  > = {
    a: '[a@4]+',
    e: '[e3]+',
    i: '[i1!]+',
    o: '[o0]+',
    s: '[s$5]+',
    t: '[t7]+',
    b: '[b8]+',
    g: '[g9]+',
    c: '[ck]+',
  }


function escapeRegex(
  value: string,
) {
  return value.replace(
    /[.*+?^${}()|[\]\\]/g,
    '\\$&',
  )
}


function normalizeForMatch(
  value: string,
) {
  return value
    .normalize('NFKD')
    .replace(
      /\p{M}/gu,
      '',
    )
    .toLowerCase()
}


function makeProfanityPattern(
  word: string,
) {
  const normalized =
    normalizeForMatch(
      word,
    )


  const chars =
    Array.from(
      normalized,
    ).map(
      (char) =>
        LATIN_SOFT_MAP[
          char
        ] ??
        escapeRegex(
          char,
        ),
    )


  const body =
    chars.join(
      PROFANITY_SEPARATOR,
    )


  return new RegExp(
    `(?:^|[^\\p{L}\\p{N}])${body}(?=$|[^\\p{L}\\p{N}])`,
    'iu',
  )
}


const PROFANITY_PATTERNS =
  CONTACT_PROFANITY.map(
    makeProfanityPattern,
  )


export function containsProfanity(
  input: string,
) {
  const normalized =
    normalizeForMatch(
      input,
    )


  return PROFANITY_PATTERNS.some(
    (pattern) =>
      pattern.test(
        normalized,
      ),
  )
}


function graphemeLength(
  value: string,
) {
  if (
    typeof Intl !==
      'undefined' &&
    'Segmenter' in Intl
  ) {
    return Array.from(
      new Intl.Segmenter(
        undefined,
        {
          granularity:
            'grapheme',
        },
      ).segment(
        value,
      ),
    ).length
  }


  return Array.from(
    value,
  ).length
}


function getLetterCount(
  value: string,
) {
  return (
    value.match(
      /\p{L}/gu,
    ) ??
    []
  ).length
}


function getNonLetterSymbolCount(
  value: string,
) {
  return (
    value.match(
      /[^\p{L}\p{N}\s.,!?;:'"()\-—–…]/gu,
    ) ??
    []
  ).length
}


function isSuspiciousWord(
  word: string,
) {
  const lettersCount =
    getLetterCount(
      word,
    )


  if (
    lettersCount <
    7
  ) {
    return false
  }


  const latinCount =
    (
      word.match(
        /\p{Script=Latin}/gu,
      ) ??
      []
    ).length


  const cyrillicCount =
    (
      word.match(
        /\p{Script=Cyrillic}/gu,
      ) ??
      []
    ).length


  /*
   * A long token mixing Latin and
   * Cyrillic heavily is usually
   * accidental keyboard noise
   */
  if (
    lettersCount >=
      9 &&
    latinCount >=
      3 &&
    cyrillicCount >=
      3
  ) {
    return true
  }


  const isMostlyLatin =
    latinCount >=
    cyrillicCount


  const vowels =
    isMostlyLatin
      ? (
          word.match(
            LATIN_VOWELS_RE,
          ) ??
          []
        ).length
      : (
          word.match(
            CYRILLIC_VOWELS_RE,
          ) ??
          []
        ).length


  const vowelRatio =
    vowels /
    Math.max(
      lettersCount,
      1,
    )


  const longConsonantRun =
    isMostlyLatin
      ? LATIN_CONSONANT_RUN_RE.test(
          word,
        )
      : CYRILLIC_CONSONANT_RUN_RE.test(
          word,
        )


  return (
    longConsonantRun ||
    vowelRatio <
      0.11
  )
}


/*
 * Deliberately conservative
 * multilingual gibberish checker
 *
 * It catches obvious keyboard noise
 * without trying to act as a spelling
 * dictionary
 */
export function looksLikeGibberish(
  input: string,
) {
  const source =
    normalizeForMatch(
      input,
    ).trim()


  if (!source) {
    return false
  }


  if (
    KEYBOARD_MASH_RE.test(
      source,
    ) ||
    REPEATED_CHAR_RE.test(
      source,
    )
  ) {
    return true
  }


  const letterCount =
    getLetterCount(
      source,
    )


  const strangeSymbols =
    getNonLetterSymbolCount(
      source,
    )


  if (
    letterCount >=
      8 &&
    strangeSymbols /
      (
        letterCount +
        strangeSymbols
      ) >
      0.3
  ) {
    return true
  }


  const words =
    source.match(
      /[\p{L}]{3,}/gu,
    ) ??
    []


  if (
    words.length ===
    0
  ) {
    return false
  }


  const suspiciousWords =
    words.filter(
      isSuspiciousWord,
    )


  /*
   * One long clearly suspicious token
   * is enough
   */
  if (
    suspiciousWords.some(
      (word) =>
        getLetterCount(
          word,
        ) >=
        10,
    )
  ) {
    return true
  }


  return (
    suspiciousWords.length >=
      2 &&
    suspiciousWords.length /
      words.length >=
      0.5
  )
}


export function normalizeContactName(
  value: string,
) {
  return value
    .replace(
      /\s+/g,
      ' ',
    )
    .trim()
}


export function normalizeContactEmail(
  value: string,
) {
  return value
    .trim()
    .toLowerCase()
}


export function normalizeContactMessage(
  value: string,
) {
  return value
    .replace(
      /\r\n/g,
      '\n',
    )
    .replace(
      /\n{4,}/g,
      '\n\n\n',
    )
    .trim()
}


export function validateContactField(
  field: ContactField,
  input:
    ContactValidationInput,
): string | undefined {
  const name =
    normalizeContactName(
      input.name,
    )

  const email =
    normalizeContactEmail(
      input.email,
    )

  const message =
    normalizeContactMessage(
      input.message,
    )


  if (
    field ===
    'name'
  ) {
    if (!name) {
      return 'Пожалуйста, укажите ваше имя'
    }


    const length =
      graphemeLength(
        name,
      )


    if (
      length <
      CONTACT_LIMITS.nameMin
    ) {
      return 'Имя слишком короткое'
    }


    if (
      length >
      CONTACT_LIMITS.nameMax
    ) {
      return `Имя не должно превышать ${CONTACT_LIMITS.nameMax} символов`
    }


    if (
      !NAME_RE.test(
        name,
      )
    ) {
      return 'Используйте только буквы, пробел, дефис или апостроф'
    }


    if (
      containsProfanity(
        name,
      )
    ) {
      return 'Пожалуйста, проверьте указанное имя'
    }


    if (
      KEYBOARD_MASH_RE.test(
        name,
      ) ||
      REPEATED_CHAR_RE.test(
        name,
      )
    ) {
      return 'Пожалуйста, проверьте указанное имя'
    }


    return undefined
  }


  if (
    field ===
    'email'
  ) {
    if (!email) {
      return 'Пожалуйста, укажите e-mail'
    }


    if (
      !EMAIL_RE.test(
        email,
      )
    ) {
      return 'E-mail должен содержать символ @ и домен, например name@example.com'
    }


    return undefined
  }


  if (
    field ===
    'subject'
  ) {
    if (
      !input.subject
    ) {
      return 'Пожалуйста, выберите тему вопроса'
    }


    return undefined
  }


  if (
    field ===
    'message'
  ) {
    if (!message) {
      return 'Пожалуйста, напишите сообщение'
    }


    const length =
      graphemeLength(
        message,
      )


    if (
      length <
      CONTACT_LIMITS.messageMin
    ) {
      return `Сообщение должно содержать хотя бы ${CONTACT_LIMITS.messageMin} символов`
    }


    if (
      length >
      CONTACT_LIMITS.messageMax
    ) {
      return `Сообщение не должно превышать ${CONTACT_LIMITS.messageMax} символов`
    }


    if (
      HTML_TAG_RE.test(
        message,
      )
    ) {
      return 'Пожалуйста, отправьте обычный текст без HTML-кода'
    }


    if (
      containsProfanity(
        message,
      )
    ) {
      return 'Пожалуйста, переформулируйте сообщение без оскорбительной лексики'
    }


    if (
      looksLikeGibberish(
        message,
      )
    ) {
      return 'Пожалуйста, проверьте сообщение — текст похож на случайный набор символов'
    }


    return undefined
  }


  return undefined
}


export function validateContactForm(
  input:
    ContactValidationInput,
): ContactValidationErrors {
  const fields:
    ContactField[] = [
      'name',
      'email',
      'subject',
      'message',
    ]


  const errors:
    ContactValidationErrors =
      {}


  for (
    const field
    of fields
  ) {
    const error =
      validateContactField(
        field,
        input,
      )


    if (error) {
      errors[
        field
      ] = error
    }
  }


  return errors
}


export function getContactMessageLength(
  value: string,
) {
  return graphemeLength(
    value,
  )
}
