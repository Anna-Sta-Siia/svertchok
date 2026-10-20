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

export type Issue = {
  id: string
  slug: string

  month: number
  monthLabel: string
  year: number

  title: string

  editionLabel?: string
  theme?: string

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

    theme: 'Зимние истории',

    coverImage:
      february2019Cover,

    shortDescription:
      'Первый номер литературного альманаха «Сверчок». Зимние истории, классическая и современная детская литература.',

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

    coverImage:
      october2019Cover,

    shortDescription:
      'Архивный осенний номер «Сверчка» — стихи, проза, путешествия, открытия и беседы.',

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

    coverImage:
      january2020Cover,

    shortDescription:
      'Архивный номер литературного альманаха «Сверчок» за январь 2020 года.',

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

    coverImage:
      april2020Cover,

    shortDescription:
      'Архивный номер литературного альманаха «Сверчок» за апрель 2020 года.',

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

    coverImage:
      september2020Cover,

    shortDescription:
      'Архивный номер литературного альманаха «Сверчок» за сентябрь 2020 года.',

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

    coverImage:
      december2020Cover,

    shortDescription:
      'Архивный зимний номер литературного альманаха «Сверчок» за 2020 год.',

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

    coverImage:
      february2021Cover,

    shortDescription:
      'Архивный номер литературного альманаха «Сверчок» за февраль 2021 года.',

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

    coverImage:
      may2021Cover,

    shortDescription:
      'Архивный весенний номер литературного альманаха «Сверчок» за 2021 год.',

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

  coverImage:
    september2021Cover,

  shortDescription:
    'Архивный номер литературного альманаха «Сверчок» за сентябрь 2021 года.',

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

    coverImage:
      december2021Cover,

    shortDescription:
      'Архивный зимний номер литературного альманаха «Сверчок» за 2021 год.',

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

  coverImage: march2022Cover,

  shortDescription:
    'Номер о маленьком и большом — о том, как всё зависит от точки зрения.',

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

    coverImage:
      mayJune2022Cover,

    shortDescription:
      'Объединённый майско-июньский номер литературного альманаха «Сверчок».',

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

    coverImage:
      october2022Cover,

    shortDescription:
      'Архивный осенний номер литературного альманаха «Сверчок» за 2022 год.',

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

    coverImage:
      december2022Cover,

    shortDescription:
      'Архивный зимний номер литературного альманаха «Сверчок» за 2022 год.',

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

    coverImage:
      march2023Cover,

    shortDescription:
      'Весенний номер литературного альманаха «Сверчок» за 2023 год.',

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

    coverImage:
      june2023Cover,

    shortDescription:
      'Летний номер литературного альманаха «Сверчок» за 2023 год.',

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

    coverImage:
      october2023Cover,

    shortDescription:
      'Осенний номер литературного альманаха «Сверчок» за 2023 год.',

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

    coverImage:
      december2023Cover,

    shortDescription:
      'Зимний номер литературного альманаха «Сверчок» за 2023 год.',

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

    coverImage:
      march2024Cover,

    shortDescription:
      'Весенний номер о радости и грусти, семье, дружбе и маленьких событиях, которые делают нас счастливыми.',

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

    coverImage:
      june2024Cover,

    shortDescription:
      'Летний выпуск со стихами, прозой, играми, конкурсными работами и беседами с писателями.',

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

    coverImage:
      october2024Cover,

    shortDescription:
      'Осенний номер «Сверчка» — новые стихи, рассказы, игры и литературные встречи.',

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

    coverImage:
      december2024Cover,

    shortDescription:
      'Зимний номер с литературой, музыкой, стихами, прозой и новыми встречами со «Сверчком».',

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

  theme: 'Творить, натворить и сотворить',

  coverImage: may2026Cover,

  shortDescription:
    'Номер о творчестве, фантазии, рисунках, поделках, музыке и радости создавать что-то своё.',

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