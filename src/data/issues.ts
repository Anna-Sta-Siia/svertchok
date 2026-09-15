import march2025Cover from '../assets/Сверчок_cover_032025.png'
import june2025Cover from '../assets/Сверчок_cover_062025.png'
import october2025Cover from '../assets/Сверчок_cover_102025.png'
import december2025Cover from '../assets/Сверчок_cover_122025.png'

export type Issue = {
  id: string
  slug: string
  month: number
  monthLabel: string
  year: number
  title: string
  coverImage: string
  shortDescription: string
  longDescription: string
  introLabel?: string
  introText?: string

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
    title: 'Сверчок',
    coverImage: march2025Cover,

    shortDescription:
      'Если с другом вышел в путь... Весёлые и мудрые истории о настоящей дружбе.',

    longDescription:
      'Весёлые и мудрые истории о дружбе, взаимопомощи и тех, кто всегда рядом.',

    accessType: 'paid',
    isCurrent: false,
  },

  {
    id: '06-2025',
    slug: '06-2025',
    month: 6,
    monthLabel: 'Июнь',
    year: 2025,
    title: 'Сверчок — Подросток',
    coverImage: june2025Cover,

    shortDescription:
      'Для тех, кто уже почти взрослый и всё ещё немного ребёнок.',

    longDescription:
      'Этот номер — о подростках и для подростков. О дружбе и первой любви, школьной жизни, выборе, обидах и примирениях. А ещё здесь вас ждут стихи и рассказы, игры, книжные рекомендации, «Методкабинет» и новые беседы «Сверчка».',

    accessType: 'paid',
    isCurrent: false,
    introLabel: 'Друзья мои',

introText:
  'Отрывок из стихотворения «19 октября».',
  },

  {
    id: '10-2025',
    slug: '10-2025',
    month: 10,
    monthLabel: 'Октябрь',
    year: 2025,
    title: 'Сверчок',
    coverImage: october2025Cover,

    shortDescription:
      'Стихи, истории, путешествия и новые встречи со «Сверчком».',

    longDescription:
      'Осенний номер со стихами, прозой, литературными путешествиями и беседами с авторами.',

    accessType: 'paid',
    isCurrent: false,
  },

  {
    id: '12-2025',
    slug: '12-2025',
    month: 12,
    monthLabel: 'Декабрь',
    year: 2025,
    title: 'Сверчок',
    coverImage: december2025Cover,

    shortDescription:
      'Там, где начинается чудо. Сказки, стихи и истории для зимних вечеров.',

    longDescription:
      'Зимний выпуск со сказками, стихами и историями для долгих уютных вечеров.',

    accessType: 'paid',
    isCurrent: true,
  },
]

export const currentIssue =
  issues.find((issue) => issue.isCurrent) ?? issues[0]