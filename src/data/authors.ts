export type Author = {
  id: string
  firstName: string
  lastName: string
  shortBio?: string
  types: ('poet' | 'prose')[]
}

export const authors: Author[] = [
  {
    id: 'asya-petrova',
    firstName: 'Ася',
    lastName: 'Петрова',
    types: [],
  },
  {
    id: 'svetlana-soroka',
    firstName: 'Светлана',
    lastName: 'Сорока',
    types: [],
  },
  {
    id: 'sergey-makhotin',
    firstName: 'Сергей',
    lastName: 'Махотин',
    types: [],
  },
  {
    id: 'mikhail-yasnov',
    firstName: 'Михаил',
    lastName: 'Яснов',
    types: [],
  },
  {
    id: 'dmitry-gasin',
    firstName: 'Дмитрий',
    lastName: 'Гасин',
    types: [],
  },
  {
    id: 'denis-veselov',
    firstName: 'Денис',
    lastName: 'Веселов',
    types: [],
  },
]