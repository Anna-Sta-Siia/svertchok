import march2025Cover from './covers/Сверчок_cover_032025.png'
import june2025Cover from './covers/Сверчок_cover_062025.png'
import october2025Cover from './covers/Сверчок_cover_102025.png'
import december2025Cover from './covers/Сверчок_cover_122025.png'

export type Issue = {
  id: string
  slug: string

  month: number
  monthLabel: string
  year: number
  coverImage: string

  shortDescription: string

  accessType: 'free' | 'paid'
  accessUrl?: string

  isCurrent: boolean
}

export const issues: Issue[] = [
  {
    id: '03-2025',
    slug: '03-2025',
    month: 3,
    monthLabel: 'Март',
    year: 2025,
    coverImage: march2025Cover,

    shortDescription:
  'Номер о дружбе — настоящей, неожиданной, весёлой и непростой.',
    accessType: 'paid',
     accessUrl: 'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/svertchok',
    isCurrent: false,
  },

  {
    id: '06-2025',
    slug: '06-2025',
    month: 6,
    monthLabel: 'Июнь',
    year: 2025,
    coverImage: june2025Cover,
    shortDescription:
      'Для тех, кто уже почти взрослый и всё ещё немного ребёнок.',
    accessType: 'paid',
     accessUrl: 'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/svertchok',
    isCurrent: false,
  },

  {
    id: '10-2025',
    slug: '10-2025',
    month: 10,
    monthLabel: 'Октябрь',
    year: 2025,
    coverImage: october2025Cover,

    shortDescription:
      'Стихи, истории, путешествия и новые встречи со «Сверчком».',

    accessType: 'paid',
     accessUrl: 'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/svertchok',
    isCurrent: false,
  },

  {
    id: '12-2025',
    slug: '12-2025',
    month: 12,
    monthLabel: 'Декабрь',
    year: 2025,
    coverImage: december2025Cover,

    shortDescription:
      'Там, где начинается чудо. Сказки, стихи и истории для зимних вечеров.',

    accessType: 'paid',
     accessUrl: 'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/svertchok',
    isCurrent: true,
  },
]

export const currentIssue =
  issues.find((issue) => issue.isCurrent) ?? issues[0]