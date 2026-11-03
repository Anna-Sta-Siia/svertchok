export type QuestionCategory =
  | 'magazine'
  | 'issues'
  | 'authors'
  | 'interviews'
  | 'boukovki'
  | 'contact'

export type Question = {
  id: string
  question: string
  answer: string
  category: QuestionCategory
  featured?: boolean
  order: number
}

export const questionCategoryLabels: Record<
  QuestionCategory,
  string
> = {
  magazine: 'О Сверчке',
  issues: 'О номерах',
  authors: 'Об авторах',
  interviews: 'О беседах',
  boukovki: 'О Буковках',
  contact: 'Связаться с нами',
}

export const questions: Question[] = [
  {
    id: 'where-to-start',
    question:
      'С чего начать знакомство со «Сверчком»?',
    answer:
      'Можно заглянуть в раздел «Наши номера», выбрать выпуск и посмотреть его содержание. А дальше — идти туда, куда позовёт любопытство.',
    category: 'magazine',
    featured: true,
    order: 1,
  },

  {
    id: 'all-issues',
    question:
      'Где посмотреть все номера «Сверчка»?',
    answer:
      'Все опубликованные выпуски собраны на странице «Наши номера». Там их можно фильтровать и открывать отдельно.',
    category: 'issues',
    order: 2,
  },

  {
    id: 'find-author',
    question:
      'Как найти произведения конкретного автора?',
    answer:
      'Зайдите в раздел «Авторы» и выберите имя. На странице автора собраны номера и публикации, в которых он встречается.',
    category: 'authors',
    order: 3,
  },

  {
    id: 'interviews',
    question:
      'Где найти беседы с писателями?',
    answer:
      'Для них есть отдельный раздел «Интервью». Там собраны беседы из разных выпусков альманаха.',
    category: 'interviews',
    order: 4,
  },

  {
    id: 'boukovki',
    question:
      'Кто такие «Буковки»?',
    answer:
      '«Буковки» — ассоциация любителей русскоязычной литературы для детей и юношества, которая создаёт и поддерживает литературные проекты, в том числе альманах «Сверчок».',
    category: 'boukovki',
    order: 5,
  },

  {
    id: 'own-question',
    question:
      'А если моего вопроса здесь нет?',
    answer:
      'Тогда обязательно задайте его Сверчку. Ниже на странице есть кнопка, которая откроет форму для сообщения.',
    category: 'contact',
    order: 6,
  },
]