/* =========================
   2019
   ========================= */

import february2019Cover from './covers/Сверчок_cover_022019.png'
import october2019Cover from './covers/Сверчок_cover_102019.png'

/* =========================
   2020
   ========================= */

import january2020Cover from './covers/Сверчок_cover_012020.png'
import april2020Cover from './covers/Сверчок_cover_042020.png'
import september2020Cover from './covers/Сверчок_cover_092020.png'
import december2020Cover from './covers/Сверчок_cover_122020.png'

/* =========================
   2021
   ========================= */

import february2021Cover from './covers/Сверчок_cover_022021.png'
import may2021Cover from './covers/Сверчок_cover_052021.png'
import september2021Cover from './covers/Сверчок_cover_092021.png'
import december2021Cover from './covers/Сверчок_cover_122021.png'

/*
 * 09/2021 :
 * le numéro existe,
 * mais nous n'avons pas sa couverture.
 *
 * On le garde en draft
 * sans import de cover.
 */

/* =========================
   2022
   ========================= */

import march2022Cover from './covers/Сверчок_cover_032022.png'
import mayJune2022Cover from './covers/Сверчок_cover_05062022.png'
import october2022Cover from './covers/Сверчок_cover_102022.png'
import december2022Cover from './covers/Сверчок_cover_122022.png'

/* =========================
   2023
   ========================= */

import march2023Cover from './covers/Сверчок_cover_032023.png'
import june2023Cover from './covers/Сверчок_cover_062023.png'
import october2023Cover from './covers/Сверчок_cover_102023.png'
import december2023Cover from './covers/Сверчок_cover_122023.png'

/* =========================
   2024
   ========================= */

import march2024Cover from './covers/Сверчок_cover_032024.png'
import june2024Cover from './covers/Сверчок_cover_062024.png'
import october2024Cover from './covers/Сверчок_cover_102024.png'
import december2024Cover from './covers/Сверчок_cover_122024.png'

/* =========================
   2025
   ========================= */

import march2025Cover from './covers/Сверчок_cover_032025.png'
import june2025Cover from './covers/Сверчок_cover_062025.png'
import october2025Cover from './covers/Сверчок_cover_102025.png'
import december2025Cover from './covers/Сверчок_cover_122025.png'

/* =========================
   2026
   ========================= */
import may2026Cover from './covers/Сверчок_cover_052026.png'

/* =========================
   TYPES
   ========================= */

export type IssueStatus =
  | 'draft'
  | 'published'

export type IssueAccessType =
  | 'free'
  | 'paid'

export type IssueTheme =
  | 'Зима'
  | 'Весна'
  | 'Лето'
  | 'Осень'
  | 'Новый год'
  | 'Путешествия'
  | 'Подростки'
  | 'Животные'
  | 'Дружба'
  | 'Фантазия и сказки'
  | 'Школа'
  | 'Времена года'
  | 'Любовь'
  | 'Семья'
  | 'Музыка'
  | 'Творчество'
  | 'Другое'

export type Issue = {
  id: string
  slug: string

  month: number
  monthLabel: string
  year: number

  title: string

  editionLabel?: string
  theme: IssueTheme

  coverImage: string

  shortDescription: string

  accessType: IssueAccessType
  accessUrl?: string

  status: IssueStatus

  isCurrent: boolean
}

/* =========================
   PAID ACCESS
   ========================= */

const helloAssoShopUrl =
  'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/svertchok'

/* =========================
   ISSUES
   ========================= */

export const issues: Issue[] = [
  /* =====================
     2019
     ===================== */

  {
    id: '02-2019',
    slug: '02-2019',

    month: 2,
    monthLabel: 'Февраль',
    year: 2019,

    title: 'Сверчок',

    theme: 'Зима',

    coverImage:
      february2019Cover,

    shortDescription:
      'Первый «Сверчок» — зимние истории о реальном и воображаемом мире, сказках, воспоминаниях и волшебстве.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '10-2019',
    slug: '10-2019',

    month: 10,
    monthLabel: 'Октябрь',
    year: 2019,

    title: 'Сверчок',


    theme: 'Путешествия',

    coverImage:
      october2019Cover,

    shortDescription:
      'Путешествие по миру вокруг нас — от облаков и звёзд до человеческих чувств, открытий и неожиданных вопросов.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2020
     ===================== */

  {
    id: '01-2020',
    slug: '01-2020',

    month: 1,
    monthLabel: 'Январь',
    year: 2020,

    title: 'Сверчок',


    theme: 'Подростки',

    coverImage:
      january2020Cover,

    shortDescription:
      'Номер о подростках — дружбе и первой любви, сомнениях, ошибках, серьёзных решениях и поиске собственного пути.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '04-2020',
    slug: '04-2020',

    month: 4,
    monthLabel: 'Апрель',
    year: 2020,

    title: 'Сверчок',


    theme: 'Животные',

    coverImage:
      april2020Cover,

    shortDescription:
      '«Звериный калейдоскоп» — смешные, трогательные и неожиданные истории о животных и о том, как они меняют наш взгляд на мир.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '09-2020',
    slug: '09-2020',

    month: 9,
    monthLabel: 'Сентябрь',
    year: 2020,

    title: 'Сверчок',


    theme: 'Фантазия и сказки',

    coverImage:
      september2020Cover,

    shortDescription:
      'На границе реальности и вымысла: фантастика, мистика, сны и воображение, которые помогают увидеть привычный мир иначе.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '12-2020',
    slug: '12-2020',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2020,

    title: 'Сверчок',


    theme: 'Фантазия и сказки',

    coverImage:
      december2020Cover,

    shortDescription:
      'Зимний номер о сказке — чудесах, превращениях и скрытых смыслах, которые сопровождают нас от детства к взрослой жизни.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2021
     ===================== */

  {
    id: '02-2021',
    slug: '02-2021',

    month: 2,
    monthLabel: 'Февраль',
    year: 2021,

    title: 'Сверчок',


    theme: 'Путешествия',

    coverImage:
      february2021Cover,

    shortDescription:
      'Путешествие на Север — к снегам, северному сиянию, древним легендам и тёплым историям среди зимнего холода.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '05-2021',
    slug: '05-2021',

    month: 5,
    monthLabel: 'Май',
    year: 2021,

    title: 'Сверчок',


    theme: 'Школа',

    coverImage:
      may2021Cover,

    shortDescription:
      'Номер о школе как маленькой модели большого мира — о дружбе, ошибках, открытиях, чувствах и уроках, которые не заканчиваются со звонком.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  /*
   * Пока не публикуем:
   * нет обложки.
   */

 {
  id: '09-2021',
  slug: '09-2021',

  month: 9,
  monthLabel: 'Сентябрь',
  year: 2021,

  title: 'Сверчок',


  theme: 'Осень',

  coverImage:
    september2021Cover,

  shortDescription:
    'Солнечный номер о тепле, которое хочется сохранить внутри на всю осень и зиму — до самой новой весны.',

  accessType: 'free',

  status: 'published',

  isCurrent: false,
},

  {
    id: '12-2021',
    slug: '12-2021',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2021,

    title: 'Сверчок',


    theme: 'Новый год',

    coverImage:
      december2021Cover,

    shortDescription:
      'Праздничный номер о радости и грусти, волшебстве и том, как праздник можно придумать, подарить и создать своими руками.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2022
     ===================== */

  {
  id: '02-03-2022',
  slug: '02-03-2022',

  month: 3,
  monthLabel: 'Февраль–Март',
  year: 2022,

  title: 'Сверчок',


  theme: 'Другое',

  coverImage: march2022Cover,

  shortDescription:
    'Маленькое и большое меняются местами: номер о масштабе, значении и точке зрения, которая способна перевернуть привычный мир.',

  accessType: 'free',

  status: 'published',

  isCurrent: false,
},

  {
    id: '05-06-2022',
    slug: '05-06-2022',

    /*
     * Pour le tri chronologique
     * on utilise le dernier mois
     * du numéro double.
     */
    month: 6,

    monthLabel: 'Май–Июнь',
    year: 2022,

    title: 'Сверчок',


    theme: 'Дружба',

    coverImage:
      mayJune2022Cover,

    shortDescription:
      'Номер о «других» — различиях и сходстве, дружбе и любви, уникальности каждого и умении смотреть на другого открыто.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '10-2022',
    slug: '10-2022',

    month: 10,
    monthLabel: 'Октябрь',
    year: 2022,

    title: 'Сверчок',


    theme: 'Лето',

    coverImage:
      october2022Cover,

    shortDescription:
      'Возвращение в лето — море и леса, каникулы, приключения, птицы и насекомые, свобода и счастливые воспоминания.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  {
    id: '12-2022',
    slug: '12-2022',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2022,

    title: 'Сверчок',


    theme: 'Времена года',

    coverImage:
      december2022Cover,

    shortDescription:
      'Номер о времени — минутах и годах, прошлом и будущем, временах года и том, как мы чувствуем его внутри себя.',

    accessType: 'free',

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2023
     ===================== */

  {
    id: '03-2023',
    slug: '03-2023',

    month: 3,
    monthLabel: 'Март',
    year: 2023,

    title: 'Сверчок',


    theme: 'Весна',

    coverImage:
      march2023Cover,

    shortDescription:
      'Весенний номер о пробуждении природы — птицах, первых листьях, тающем снеге, солнце и ожидании нового.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '06-2023',
    slug: '06-2023',

    month: 6,
    monthLabel: 'Июнь',
    year: 2023,

    title: 'Сверчок',


    theme: 'Любовь',

    coverImage:
      june2023Cover,

    shortDescription:
      'Номер о любви во всех её лицах — к людям, дому, семье, животным, воспоминаниям и целому миру.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '10-2023',
    slug: '10-2023',

    month: 10,
    monthLabel: 'Октябрь',
    year: 2023,

    title: 'Сверчок',


    theme: 'Животные',

    coverImage:
      october2023Cover,

    shortDescription:
      'Кошачий номер — о нежности и независимости, смелости и осторожности, характере кошек и их загадочном соседстве с человеком.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '12-2023',
    slug: '12-2023',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2023,

    title: 'Сверчок',


    theme: 'Семья',

    coverImage:
      december2023Cover,

    shortDescription:
      'Номер о семье — близости, поддержке, родстве и том круге тепла и надёжности, который может становиться всё шире.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2024
     ===================== */

  {
    id: '03-2024',
    slug: '03-2024',

    month: 3,
    monthLabel: 'Март',
    year: 2024,

    title: 'Сверчок',


    theme: 'Весна',

    coverImage:
      march2024Cover,

    shortDescription:
      'Весенний номер о радости — большой и маленькой, семейной и повседневной, особенно заметной рядом с грустью.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '06-2024',
    slug: '06-2024',

    month: 6,
    monthLabel: 'Июнь',
    year: 2024,

    title: 'Сверчок',

    editionLabel:
      'Подросток',


    theme: 'Подростки',

    coverImage:
      june2024Cover,

    shortDescription:
      'Летний выпуск о радости и грусти — двух чувствах, которые сменяют друг друга и помогают тоньше чувствовать жизнь.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '10-2024',
    slug: '10-2024',

    month: 10,
    monthLabel: 'Октябрь',
    year: 2024,

    title: 'Сверчок',


    theme: 'Животные',

    coverImage:
      october2024Cover,

    shortDescription:
      'Собачий номер — о храбрости и страхе, шуме и тишине, независимости и преданности, а ещё о том, что собаки могут рассказать о нас самих.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '12-2024',
    slug: '12-2024',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2024,

    title: 'Сверчок',


    theme: 'Музыка',

    coverImage:
      december2024Cover,

    shortDescription:
      'Зимний номер о музыке — звуках повседневности, свете и надежде, воображении и встрече литературы с музыкой.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  /* =====================
     2025
     ===================== */

  {
    id: '03-2025',
    slug: '03-2025',

    month: 3,
    monthLabel: 'Март',
    year: 2025,

    title: 'Сверчок',


    theme: 'Дружба',

    coverImage:
      march2025Cover,

    shortDescription:
      'Номер о дружбе — настоящей, неожиданной, весёлой и непростой.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '06-2025',
    slug: '06-2025',

    month: 6,
    monthLabel: 'Июнь',
    year: 2025,

    title: 'Сверчок',


    theme: 'Подростки',

    coverImage:
      june2025Cover,

    shortDescription:
      'Для тех, кто уже почти взрослый и всё ещё немного ребёнок.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '10-2025',
    slug: '10-2025',

    month: 10,
    monthLabel: 'Октябрь',
    year: 2025,

    title: 'Сверчок',


    theme: 'Путешествия',

    coverImage:
      october2025Cover,

    shortDescription:
      'Стихи, истории, путешествия и новые встречи со «Сверчком».',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },

  {
    id: '12-2025',
    slug: '12-2025',

    month: 12,
    monthLabel: 'Декабрь',
    year: 2025,

    title: 'Сверчок',


    theme: 'Зима',

    coverImage:
      december2025Cover,

    shortDescription:
      'Там, где начинается чудо. Сказки, стихи и истории для зимних вечеров.',

    accessType: 'paid',

    accessUrl:
      helloAssoShopUrl,

    status: 'published',

    isCurrent: false,
  },
  {
  id: '05-2026',
  slug: '05-2026',

  month: 5,
  monthLabel: 'Май',
  year: 2026,

  title: 'Сверчок',

  theme: 'Творчество',

  coverImage: may2026Cover,

  shortDescription:
    'Номер о творчестве — фантазии, смелости пробовать, радости придумывать и свободе создавать свой собственный мир.',

  accessType: 'paid',

  accessUrl:
    helloAssoShopUrl,

  status: 'published',

  isCurrent: true,
},
]

/* =========================
   PUBLICATION CHECK
   ========================= */

export function isIssueReady(
  issue: Issue,
) {
  return Boolean(
    issue.status ===
      'published' &&
    issue.id &&
    issue.slug &&
    issue.month &&
    issue.monthLabel &&
    issue.year &&
    issue.title &&
    issue.theme &&
    issue.coverImage &&
    issue.shortDescription &&
    issue.accessType,
  )
}

/* =========================
   PUBLIC ISSUES
   ========================= */

export const publishedIssues =
  issues.filter(isIssueReady)

/* =========================
   CURRENT ISSUE
   ========================= */

export const currentIssue =
  publishedIssues.find(
    (issue) =>
      issue.isCurrent,
  ) ??
  publishedIssues[0]