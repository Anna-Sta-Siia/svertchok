export type QuestionCategory =
  | 'magazine'
  | 'issues'
  | 'authors'
  | 'publications'
  | 'subscription'
  | 'boukovki'
  | 'other'


export type Question = {
  id: string

  question: string
  subject: string
  answer: string

  category: QuestionCategory

  authorName?: string
  authorLocation?: string

  askedAt: string

  featured?: boolean

  likes?: number

  order: number
}


export const questionCategoryLabels:
  Record<
    QuestionCategory,
    string
  > = {
    magazine:
      'О Сверчке',

    issues:
      'О номерах',

    authors:
      'Об авторах',

    publications:
      'О публикациях',

    subscription:
      'О подписке',

    boukovki:
      'О Буковках',

    other:
      'Другое',
  }


/*
 * Пока это демонстрационные вопросы.
 *
 * Позже сюда будут попадать
 * реальные вопросы читателей,
 * одобренные для публикации.
 */

export const questions:
  Question[] = [
    {
      id:
        'where-to-start',

      question:
        'С чего начать знакомство со «Сверчком»?',

      subject:
        'Первое знакомство с альманахом',

      answer:
        'Можно начать с раздела «Наши номера»: выбрать выпуск, открыть его содержание и отправиться туда, куда позовёт любопытство.',

      category:
        'magazine',

      authorName:
        'Читатель «Сверчка»',

      askedAt:
        '2026-11-01',

      featured:
        true,

      likes:
        12,

      order:
        1,
    },

    {
      id:
        'all-issues',

      question:
        'Где посмотреть все номера «Сверчка»?',

      subject:
        'Архив выпусков',

      answer:
        'Все выпуски собраны в разделе «Наши номера». Там можно выбрать год, доступ и тему, а затем открыть страницу конкретного номера.',

      category:
        'issues',

      authorName:
        'Марина',

      authorLocation:
        'Лион',

      askedAt:
        '2026-10-27',

      likes:
        8,

      order:
        2,
    },

    {
      id:
        'find-author',

      question:
        'Как найти произведения конкретного автора?',

      subject:
        'Поиск автора',

      answer:
        'В разделе «Авторы» можно найти нужного человека и открыть его страницу. Там собраны номера и публикации, связанные с этим автором.',

      category:
        'authors',

      authorName:
        'Анна',

      authorLocation:
        'Париж',

      askedAt:
        '2026-10-24',

      likes:
        15,

      order:
        3,
    },

    {
      id:
        'interviews',

      question:
        'Где искать беседы с писателями?',

      subject:
        'Интервью и беседы',

      answer:
        'Беседы собраны в отдельном разделе «Интервью». Их также можно встретить на страницах авторов, если с автором есть опубликованная беседа.',

      category:
        'authors',

      authorName:
        'Читатель «Сверчка»',

      askedAt:
        '2026-10-18',

      likes:
        6,

      order:
        4,
    },

    {
      id:
        'who-are-boukovki',

      question:
        'Кто такие «Буковки»?',

      subject:
        'Об ассоциации',

      answer:
        '«Буковки» — ассоциация любителей русскоязычной литературы для детей и юношества, созданная во Франции. Один из её проектов — литературный альманах «Сверчок».',

      category:
        'boukovki',

      authorName:
        'Светлана',

      askedAt:
        '2026-10-10',

      likes:
        9,

      order:
        5,
    },

    {
      id:
        'own-question',

      question:
        'Что делать, если моего вопроса здесь нет?',

      subject:
        'Связаться со Сверчком',

      answer:
        'Задайте его Сверчку. Внизу страницы есть кнопка, которая откроет форму. Если вопрос будет интересен другим читателям и вы разрешите публикацию, он сможет появиться здесь.',

      category:
        'other',

      authorName:
        'Читатель «Сверчка»',

      askedAt:
        '2026-10-04',

      likes:
        4,

      order:
        6,
    },
  ]