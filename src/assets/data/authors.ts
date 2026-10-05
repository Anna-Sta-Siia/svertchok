export type AuthorType =
  | 'poet'
  | 'prose'

export type Author = {
  id: string
  firstName: string
  lastName: string

  shortBio?: string

  types: AuthorType[]

  interviews?: string[]
}

export const authors: Author[] = [
  {
    id: 'anna-cherkasova',
    firstName: 'Анна',
    lastName: 'Черкасова',
    types: ['prose'],
  },
  {
    id: 'anatoly-khrebtyugov',
    firstName: 'Анатолий',
    lastName: 'Хребтюгов',
    types: [],
  },
  {
    id: 'asya-petrova',
    firstName: 'Ася',
    lastName: 'Петрова',
    types: ['prose'],
  },

  {
    id: 'boris-vayner',
    firstName: 'Борис',
    lastName: 'Вайнер',
    types: ['poet', 'prose'],
  },
  {
    id: 'brothers-grimm',
    firstName: 'Братья',
    lastName: 'Гримм',
    types: ['prose'],
  },

  {
    id: 'denis-egorov',
    firstName: 'Денис',
    lastName: 'Егоров',
    types: [],
  },
  {
    id: 'denis-veselov',
    firstName: 'Денис',
    lastName: 'Веселов',
    types: [],
    interviews: ['06-2025'],
  },
  {
    id: 'dmitry-gasin',
    firstName: 'Дмитрий',
    lastName: 'Гасин',
    types: [],
    interviews: ['06-2025'],
  },

  {
    id: 'ekaterina-belches',
    firstName: 'Екатерина',
    lastName: 'Белчес',
    types: ['prose'],
  },
  {
    id: 'ekaterina-kagramanova',
    firstName: 'Екатерина',
    lastName: 'Каграманова',
    types: ['poet'],
  },
  {
    id: 'ekaterina-shelemetyeva',
    firstName: 'Екатерина',
    lastName: 'Шелеметьева',
    types: ['prose'],
  },
  {
    id: 'elena-ovsyannikova',
    firstName: 'Елена',
    lastName: 'Овсянникова',
    types: ['prose'],
  },
  {
    id: 'elena-pankratova',
    firstName: 'Елена',
    lastName: 'Панкратова',
    types: ['poet'],
  },
  {
    id: 'evgenia-shapiro',
    firstName: 'Евгения',
    lastName: 'Шапиро',
    types: ['prose'],
  },

  {
    id: 'galina-stetsenko',
    firstName: 'Галина',
    lastName: 'Стеценко',
    types: [],
  },
  {
    id: 'gulnara-miranova',
    firstName: 'Гульнара',
    lastName: 'Миранова',
    types: ['prose'],
  },

  {
    id: 'irina-pugina',
    firstName: 'Ирина',
    lastName: 'Пугина',
    types: ['prose'],
  },

  {
    id: 'ksenia-valakhanovich',
    firstName: 'Ксения',
    lastName: 'Валаханович',
    types: ['poet'],
  },

  {
    id: 'lena-repetur',
    firstName: 'Лена',
    lastName: 'Репетур',
    types: [],
  },
  {
    id: 'lilia-gazizova',
    firstName: 'Лилия',
    lastName: 'Газизова',
    types: ['poet'],
    interviews: ['10-2025'],
  },
  {
    id: 'lyubov-shubnaya',
    firstName: 'Любовь',
    lastName: 'Шубная',
    types: ['poet'],
  },

  {
    id: 'mikhail-yasnov',
    firstName: 'Михаил',
    lastName: 'Яснов',
    types: ['poet'],
  },
  {
    id: 'mila-vesnushkina',
    firstName: 'Мила',
    lastName: 'Веснушкина',
    types: ['poet'],
  },

  {
    id: 'nadya-krasovskaya',
    firstName: 'Надя',
    lastName: 'Красовская',
    types: [],
  },
  {
    id: 'natalia-volkova',
    firstName: 'Наталия',
    lastName: 'Волкова',
    types: ['poet', 'prose'],
  },
  {
    id: 'natalya-mavlevich',
    firstName: 'Наталья',
    lastName: 'Мавлевич',
    types: [],
  },
  {
    id: 'natalya-pesochinskaya',
    firstName: 'Наталья',
    lastName: 'Песочинская',
    types: ['prose'],
  },
  {
    id: 'nikolay-shamsutdinov',
    firstName: 'Николай',
    lastName: 'Шамсутдинов',
    types: ['poet'],
  },

  {
    id: 'rustam-karapetyan',
    firstName: 'Рустам',
    lastName: 'Карапетьян',
    types: ['poet'],
  },

  {
    id: 'sergey-makhotin',
    firstName: 'Сергей',
    lastName: 'Махотин',
    types: ['poet'],
  },
  {
    id: 'sergey-nikiforov',
    firstName: 'Сергей',
    lastName: 'Никифоров',
    types: ['poet'],
  },
  {
    id: 'svetlana-makaryina',
    firstName: 'Светлана',
    lastName: 'Макарьина',
    types: ['poet'],
  },
  {
    id: 'svetlana-son',
    firstName: 'Светлана',
    lastName: 'Сон',
    types: ['poet'],
  },
  {
    id: 'svetlana-soroka',
    firstName: 'Светлана',
    lastName: 'Сорока',
    types: ['prose'],
  },

  {
    id: 'tatyana-ermakova',
    firstName: 'Татьяна',
    lastName: 'Ермакова',
    types: ['poet'],
  },
  {
    id: 'tatyana-georg',
    firstName: 'Татьяна',
    lastName: 'Георг',
    types: ['prose'],
  },
  {
    id: 'tatyana-popova',
    firstName: 'Татьяна',
    lastName: 'Попова',
    types: ['prose'],
  },
  {
    id: 'tatyana-shiposhina',
    firstName: 'Татьяна',
    lastName: 'Шипошина',
    types: ['poet', 'prose'],
  },
  {
    id: 'tatyana-varlamova',
    firstName: 'Татьяна',
    lastName: 'Варламова',
    types: ['poet'],
  },

  {
    id: 'valentina-chernyaeva',
    firstName: 'Валентина',
    lastName: 'Черняева',
    types: [],
  },
  {
    id: 'valentina-chepiga',
    firstName: 'Валентина',
    lastName: 'Чепига',
    types: ['poet', 'prose'],
  },
  {
    id: 'viktoria-lederman',
    firstName: 'Виктория',
    lastName: 'Ледерман',
    types: ['prose'],
  },

  {
    id: 'yulia-simbirskaya',
    firstName: 'Юлия',
    lastName: 'Симбирская',
    types: [],
    interviews: ['12-2025'],
  },
  {
    id: 'yulia-timur',
    firstName: 'Юлия',
    lastName: 'Тимур',
    types: [],
    interviews: ['10-2025'],
  },
]