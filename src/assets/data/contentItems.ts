export type ContentType =
  | 'poetry'
  | 'prose'
  | 'interview'
  | 'review'
  | 'game'
  | 'methodical'
  | 'other'

export type ContentItem = {
  id: string
  issueId: string
  authorId?: string
  title: string
  type: ContentType
  page?: number
  order: number
  excerpt?: string
  previewAllowed?: boolean
}

export const contentItems: ContentItem[] = [
  {
    id: 'june-2025-1',
    issueId: '06-2025',
    authorId: 'asya-petrova',
    title: 'Моя жизнь — сериал',
    type: 'prose',
    page: 12,
    order: 1,
  },
  {
    id: 'june-2025-2',
    issueId: '06-2025',
    authorId: 'asya-petrova',
    title: 'Я ей не нравлюсь',
    type: 'prose',
    page: 15,
    order: 2,
  },
  {
    id: 'june-2025-3',
    issueId: '06-2025',
    authorId: 'asya-petrova',
    title: 'Инстаграм Марины Станиславовны',
    type: 'prose',
    page: 20,
    order: 3,
  },

  {
    id: 'june-2025-4',
    issueId: '06-2025',
    authorId: 'svetlana-soroka',
    title: 'Золотая девчонка',
    type: 'prose',
    page: 23,
    order: 4,
  },
  {
    id: 'june-2025-5',
    issueId: '06-2025',
    authorId: 'svetlana-soroka',
    title: 'Маринка-половинка',
    type: 'prose',
    page: 32,
    order: 5,
  },

  {
    id: 'june-2025-6',
    issueId: '06-2025',
    authorId: 'sergey-makhotin',
    title: 'Местный кот',
    type: 'poetry',
    page: 43,
    order: 6,
  },

  {
    id: 'june-2025-7',
    issueId: '06-2025',
    authorId: 'mikhail-yasnov',
    title: 'Предлоги',
    type: 'poetry',
    page: 50,
    order: 7,
  },

  {
    id: 'june-2025-8',
    issueId: '06-2025',
    authorId: 'dmitry-gasin',
    title: 'Беседа с Дмитрием Гасиным',
    type: 'interview',
    page: 101,
    order: 8,
  },
  {
    id: 'june-2025-9',
    issueId: '06-2025',
    authorId: 'denis-veselov',
    title: 'Беседа с Денисом Веселовым',
    type: 'interview',
    page: 114,
    order: 9,
  },
]