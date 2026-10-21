export type AuthorType =
  | 'poet'
  | 'prose'
  | 'other'

export type Author = {
  id: string
  firstName: string
  lastName: string

  shortBio?: string

  types: AuthorType[]
}

export const authors: Author[] = [
  {
    id: 'sergey-yesenin',
    firstName: 'Сергей',
    lastName: 'Есенин',
    types: ['poet'],
  },

  {
    id: 'anna-khvolson',
    firstName: 'Анна',
    lastName: 'Хвольсон',
    types: ['prose'],
  },

  {
    id: 'konstantin-balmont',
    firstName: 'Константин',
    lastName: 'Бальмонт',
    types: ['poet'],
  },

  {
    id: 'lev-tolstoy',
    firstName: 'Лев',
    lastName: 'Толстой',
    types: ['prose'],
  },

  {
    id: 'viktoria-lederman',
    firstName: 'Виктория',
    lastName: 'Ледерман',
    types: ['poet', 'prose'],
  },

  {
    id: 'tatyana-lyavan',
    firstName: 'Татьяна',
    lastName: 'Ляван',
    types: ['poet'],
  },

  {
    id: 'nataliya-ho',
    firstName: 'Наталия',
    lastName: 'Хо',
    types: ['prose'],
  },

  {
    id: 'eduard-vedyasov',
    firstName: 'Эдуард',
    lastName: 'Ведясов',
    types: ['prose'],
  },

  {
    id: 'tamara-kryukova',
    firstName: 'Тамара',
    lastName: 'Крюкова',
    types: ['poet', 'prose'],
  },

  {
    id: 'maria-agapova',
    firstName: 'Мария',
    lastName: 'Агапова',
    types: ['prose'],
  },

  {
    id: 'lyudmila-klemyat',
    firstName: 'Людмила',
    lastName: 'Клемят',
    types: ['prose'],
  },

  {
    id: 'nikolay-krasilnikov',
    firstName: 'Николай',
    lastName: 'Красильников',
    types: ['prose'],
  },

  {
    id: 'sergey-georgiev',
    firstName: 'Сергей',
    lastName: 'Георгиев',
    types: ['prose'],
  },

  {
    id: 'marina-druzhinina',
    firstName: 'Марина',
    lastName: 'Дружинина',
    types: ['prose'],
  },

  {
    id: 'mark-shvarts',
    firstName: 'Марк',
    lastName: 'Шварц',
    types: ['prose'],
  },

  {
    id: 'georgiy-naumenko',
    firstName: 'Георгий',
    lastName: 'Науменко',
    types: ['prose'],
  },

  {
    id: 'ekaterina-karetnikova',
    firstName: 'Екатерина',
    lastName: 'Каретникова',
    types: ['prose'],
  },

  {
    id: 'natalya-navrotskaya',
    firstName: 'Наталья',
    lastName: 'Навроцкая',
    types: ['prose'],
  },

  {
    id: 'elena-yakubsfeld',
    firstName: 'Елена',
    lastName: 'Якубсфельд',
    types: ['prose'],
  },

  {
    id: 'polina-zherebtsova',
    firstName: 'Полина',
    lastName: 'Жеребцова',
    types: ['poet'],
  },

  {
    id: 'nina-kulik',
    firstName: 'Нина',
    lastName: 'Кулик',
    types: ['poet', 'prose'],
  },

  {
    id: 'vladislav-filatov',
    firstName: 'Владислав',
    lastName: 'Филатов',
    types: ['prose'],
  },

  {
    id: 'mikhal-magidson',
    firstName: 'Михаль',
    lastName: 'Магидсон',
    types: ['prose'],
  },

  {
    id: 'arseniy-pestov',
    firstName: 'Арсений',
    lastName: 'Пестов',
    types: ['prose'],
  },

  {
    id: 'fransua-zhelibter',
    firstName: 'Франсуа',
    lastName: 'Желибтер',
    types: ['prose'],
  },

  {
    id: 'alyona-pogudina',
    firstName: 'Алёна',
    lastName: 'Погудина',
    types: ['prose'],
  },

  {
    id: 'richi-dehesus-koshel',
    firstName: 'Риччи Дехесус',
    lastName: 'Кошель',
    types: ['prose'],
  },

  {
    id: 'konstantin-stanyukovich',
    firstName: 'Константин',
    lastName: 'Станюкович',
    types: ['prose'],
  },

  {
    id: 'konstantin-ushinsky',
    firstName: 'Константин',
    lastName: 'Ушинский',
    types: ['prose'],
  },

  {
    id: 'vladimir-mayakovsky',
    firstName: 'Владимир',
    lastName: 'Маяковский',
    types: ['poet'],
  },

  {
    id: 'igor-malyshev',
    firstName: 'Игорь',
    lastName: 'Малышев',
    types: ['prose'],
  },

  {
    id: 'alexander-tkachenko',
    firstName: 'Александр',
    lastName: 'Ткаченко',
    types: ['prose'],
  },

  {
    id: 'fyodor-konyukhov',
    firstName: 'Фёдор',
    lastName: 'Конюхов',
    types: ['prose'],
  },

  {
    id: 'marina-ulybysheva',
    firstName: 'Марина',
    lastName: 'Улыбышева',
    types: ['prose'],
  },

  {
    id: 'olga-dvornyakova',
    firstName: 'Ольга',
    lastName: 'Дворнякова',
    types: ['prose'],
  },

  {
    id: 'elena-maksimova',
    firstName: 'Елена',
    lastName: 'Максимова',
    types: ['prose'],
  },

  {
    id: 'alyona-vasnetsova',
    firstName: 'Алёна',
    lastName: 'Васнецова',
    types: ['prose'],
  },

  {
    id: 'alexandra-zelenskaya',
    firstName: 'Александра',
    lastName: 'Зеленская',
    types: ['poet'],
  },

  {
    id: 'ilona-volynskaya',
    firstName: 'Илона',
    lastName: 'Волынская',
    types: ['prose'],
  },

  {
    id: 'yulia-kuznetsova',
    firstName: 'Юлия',
    lastName: 'Кузнецова',
    types: ['prose'],
  },

  {
    id: 'natalya-vishnyakova',
    firstName: 'Наталья',
    lastName: 'Вишнякова',
    types: ['prose'],
  },

  {
    id: 'lidia-charskaya',
    firstName: 'Лидия',
    lastName: 'Чарская',
    types: ['prose'],
  },

  {
    id: 'alexander-kuprin',
    firstName: 'Александр',
    lastName: 'Куприн',
    types: ['prose'],
  },

  {
    id: 'viktoria-taibova',
    firstName: 'Виктория',
    lastName: 'Таибова',
    types: ['poet', 'prose'],
  },

  {
    id: 'sergey-ulashev',
    firstName: 'Сергей',
    lastName: 'Улашев',
    types: ['prose'],
  },

  {
    id: 'marina-taranenko',
    firstName: 'Марина',
    lastName: 'Тараненко',
    types: ['poet', 'prose'],
  },

  {
    id: 'vera-shipunova',
    firstName: 'Вера',
    lastName: 'Шипунова',
    types: ['poet', 'prose'],
  },

  {
    id: 'tatyana-steinberg',
    firstName: 'Татьяна',
    lastName: 'Стейнберг',
    types: ['poet'],
  },

  {
    id: 'elena-khaetskaya',
    firstName: 'Елена',
    lastName: 'Хаецкая',
    types: ['prose'],
  },

  {
    id: 'igor-shlyapka',
    firstName: 'Игорь',
    lastName: 'Шляпка',
    types: ['poet', 'prose'],
  },

  {
    id: 'vasily-zhukovsky',
    firstName: 'Василий',
    lastName: 'Жуковский',
    types: ['poet'],
  },

  {
    id: 'aya-en',
    firstName: 'Ая',
    lastName: 'Эн',
    types: ['prose'],
  },

  {
    id: 'ivan-turgenev',
    firstName: 'Иван',
    lastName: 'Тургенев',
    types: ['prose'],
  },

  {
    id: 'dmitry-vedenyapin',
    firstName: 'Дмитрий',
    lastName: 'Веденяпин',
    types: ['poet'],
  },

  {
    id: 'ksenia-valakhanovich',
    firstName: 'Ксения',
    lastName: 'Валаханович',
    types: ['poet'],
  },

  {
    id: 'tata-snegur',
    firstName: 'Тата',
    lastName: 'Снегур',
    types: ['poet', 'prose'],
  },

  {
    id: 'teodoro-rossini',
    firstName: 'Теодоро',
    lastName: 'Россини',
    types: ['prose'],
  },

  {
    id: 'kirill-kashcheev',
    firstName: 'Кирилл',
    lastName: 'Кащеев',
    types: ['prose'],
  },

  {
    id: 'irina-motobryvtseva',
    firstName: 'Ирина',
    lastName: 'Мотобрывцева',
    types: ['poet', 'prose'],
  },

  {
    id: 'zulya-stadnik',
    firstName: 'Зуля',
    lastName: 'Стадник',
    types: ['prose'],
  },

  {
    id: 'tatyana-varlamova',
    firstName: 'Татьяна',
    lastName: 'Варламова',
    types: ['poet'],
  },

  {
    id: 'nadezhda-forostyan',
    firstName: 'Надежда',
    lastName: 'Форостян',
    types: ['prose'],
  },

  {
    id: 'nina-agoshkova',
    firstName: 'Нина',
    lastName: 'Агошкова',
    types: ['poet'],
  },

  {
    id: 'elena-ranneva',
    firstName: 'Елена',
    lastName: 'Раннева',
    types: ['poet'],
  },

  {
    id: 'sergey-nikiforov',
    firstName: 'Сергей',
    lastName: 'Никифоров',
    types: ['poet'],
  },

  {
    id: 'tatyana-stamova',
    firstName: 'Татьяна',
    lastName: 'Стамова',
    types: ['poet'],
  },

  {
    id: 'andrey-bogdarin',
    firstName: 'Андрей',
    lastName: 'Богдарин',
    types: ['poet', 'prose'],
  },

  {
    id: 'tatyana-shiposhina',
    firstName: 'Татьяна',
    lastName: 'Шипошина',
    types: ['poet', 'prose'],
  },

  {
    id: 'natalya-ivanova',
    firstName: 'Наталья',
    lastName: 'Иванова',
    types: ['poet'],
  },

  {
    id: 'oulouro-ado',
    firstName: 'Oulouro',
    lastName: 'Ado',
    types: ['prose'],
  },

  {
    id: 'yana-mori',
    firstName: 'Yana',
    lastName: 'Mori',
    types: ['prose'],
  },

  {
    id: 'irina-ivannikova',
    firstName: 'Ирина',
    lastName: 'Иванникова',
    types: ['poet', 'prose'],
  },

  {
    id: 'anastasia-antonova',
    firstName: 'Анастасия',
    lastName: 'Антонова',
    types: ['poet'],
  },

  {
    id: 'boris-vayner',
    firstName: 'Борис',
    lastName: 'Вайнер',
    types: ['poet', 'prose'],
  },

  {
    id: 'konstantin-vukolov',
    firstName: 'Константин',
    lastName: 'Вуколов',
    types: ['poet'],
  },

  {
    id: 'galina-ilyina',
    firstName: 'Галина',
    lastName: 'Ильина',
    types: ['poet'],
  },

  {
    id: 'elena-ovsyannikova',
    firstName: 'Елена',
    lastName: 'Овсянникова',
    types: ['poet', 'prose'],
  },

  {
    id: 'yuri-pusov',
    firstName: 'Юрий',
    lastName: 'Пусов',
    types: ['poet'],
  },

  {
    id: 'charles-ivan-levistre',
    firstName: 'Шарль-Иван',
    lastName: 'Левистр',
    types: ['prose'],
  },

  {
    id: 'tatyana-fedotova',
    firstName: 'Татьяна',
    lastName: 'Федотова',
    types: ['prose'],
  },

  {
    id: 'vlad-kudryashov',
    firstName: 'Влад',
    lastName: 'Кудряшов',
    types: ['prose'],
  },

  {
    id: 'ekaterina-timashpolskaya',
    firstName: 'Екатерина',
    lastName: 'Тимашпольская',
    types: ['prose'],
  },

  {
    id: 'elvira-smelik',
    firstName: 'Эльвира',
    lastName: 'Смелик',
    types: ['prose'],
  },

  {
    id: 'svetlana-son',
    firstName: 'Светлана',
    lastName: 'Сон',
    types: ['poet'],
  },

  {
    id: 'hanna-tosskaya',
    firstName: 'Ханна',
    lastName: 'Тосская',
    types: ['prose'],
  },

  {
    id: 'yulia-simbirskaya',
    firstName: 'Юлия',
    lastName: 'Симбирская',
    types: ['prose'],
  },

  {
    id: 'evgenia-rusinova',
    firstName: 'Евгения',
    lastName: 'Русинова',
    types: ['prose'],
  },

  {
    id: 'maya-lazarenskaya',
    firstName: 'Майя',
    lastName: 'Лазаренская',
    types: ['prose'],
  },

  {
    id: 'marina-mayboroda',
    firstName: 'Марина',
    lastName: 'Майборода',
    types: ['poet'],
  },

  {
    id: 'valentina-chepiga',
    firstName: 'Валентина',
    lastName: 'Чепига',
    types: ['poet', 'prose'],
  },

  {
    id: 'vyacheslav-burmistrov',
    firstName: 'Вячеслав',
    lastName: 'Бурмистров',
    types: ['prose'],
  },

  {
    id: 'anastasia-tsymbalova',
    firstName: 'Анастасия',
    lastName: 'Цимбалова',
    types: ['poet'],
  },

  {
    id: 'nadezhda-boltacheva',
    firstName: 'Надежда',
    lastName: 'Болтачёва',
    types: ['poet'],
  },

  {
    id: 'asia-petrova',
    firstName: 'Ася',
    lastName: 'Петрова',
    types: ['prose'],
  },

  {
    id: 'valentina-chernyaeva',
    firstName: 'Валентина',
    lastName: 'Черняева',
    types: ['poet'],
  },

  {
    id: 'sergey-makhotin',
    firstName: 'Сергей',
    lastName: 'Махотин',
    types: ['poet'],
  },

  {
    id: 'ekaterina-kagramanova',
    firstName: 'Екатерина',
    lastName: 'Каграманова',
    types: ['poet'],
  },

  {
    id: 'alexandra-ivoylova',
    firstName: 'Александра',
    lastName: 'Ивойлова',
    types: ['poet', 'prose'],
  },

  {
    id: 'viktoria-prokhorenko',
    firstName: 'Виктория',
    lastName: 'Прохоренко',
    types: ['poet'],
  },

  {
    id: 'igor-kalish',
    firstName: 'Игорь',
    lastName: 'Калиш',
    types: ['poet'],
  },

  {
    id: 'anna-starostina',
    firstName: 'Анна',
    lastName: 'Старостина',
    types: ['poet'],
  },

  {
    id: 'yulia-logvinenko',
    firstName: 'Юлия',
    lastName: 'Логвиненко',
    types: ['poet'],
  },

  {
    id: 'igor-shevchuk',
    firstName: 'Игорь',
    lastName: 'Шевчук',
    types: ['poet'],
  },

  {
    id: 'lyubov-shubnaya',
    firstName: 'Любовь',
    lastName: 'Шубная',
    types: ['poet', 'prose'],
  },

  {
    id: 'marina-shaposhnikova',
    firstName: 'Марина',
    lastName: 'Шапошникова',
    types: ['poet'],
  },

  {
    id: 'larisa-nazarova',
    firstName: 'Лариса',
    lastName: 'Назарова',
    types: ['poet'],
  },

  {
    id: 'galina-stetsenko',
    firstName: 'Галина',
    lastName: 'Стеценко',
    types: ['poet'],
  },

  {
    id: 'anton-chekhov',
    firstName: 'Антон',
    lastName: 'Чехов',
    types: ['prose'],
  },

  {
    id: 'nikolay-gogol',
    firstName: 'Николай',
    lastName: 'Гоголь',
    types: ['prose'],
  },

  {
    id: 'spiridon-drozhzhin',
    firstName: 'Спиридон',
    lastName: 'Дрожжин',
    types: ['poet'],
  },

  {
    id: 'ivan-bunin',
    firstName: 'Иван',
    lastName: 'Бунин',
    types: ['poet'],
  },

  {
    id: 'poliksena-solovyova',
    firstName: 'Поликсена',
    lastName: 'Соловьёва',
    types: ['poet'],
  },

  {
    id: 'vyacheslav-ivanov',
    firstName: 'Вячеслав',
    lastName: 'Иванов',
    types: ['poet'],
  },

  {
    id: 'alexander-blok',
    firstName: 'Александр',
    lastName: 'Блок',
    types: ['poet'],
  },

  {
    id: 'sasha-cherny',
    firstName: 'Саша',
    lastName: 'Чёрный',
    types: ['poet'],
  },

  {
    id: 'anna-krasilshchik',
    firstName: 'Анна',
    lastName: 'Красильщик',
    types: ['prose'],
  },

  {
    id: 'grigory-kruzhkov',
    firstName: 'Григорий',
    lastName: 'Кружков',
    types: ['poet'],
  },

  {
    id: 'yulia-timur',
    firstName: 'Юлия',
    lastName: 'Тимур',
    types: ['prose'],
  },

  {
    id: 'iosif-ilyin',
    firstName: 'Иосиф',
    lastName: 'Ильин',
    types: ['prose'],
  },

  {
    id: 'lyudmila-tkachenko',
    firstName: 'Людмила',
    lastName: 'Ткаченко',
    types: ['prose'],
  },

  {
    id: 'svetlana-soroka',
    firstName: 'Светлана',
    lastName: 'Сорока',
    types: ['prose'],
  },

  {
    id: 'viktoria-toponogova',
    firstName: 'Виктория',
    lastName: 'Топоногова',
    types: ['poet'],
  },

  {
    id: 'lidia-ogurtsova',
    firstName: 'Лидия',
    lastName: 'Огурцова',
    types: ['poet', 'prose'],
  },

  {
    id: 'elena-dolgikh',
    firstName: 'Елена',
    lastName: 'Долгих',
    types: ['poet'],
  },

  {
    id: 'tamara-gordienko',
    firstName: 'Тамара',
    lastName: 'Гордиенко',
    types: ['poet'],
  },

  {
    id: 'elena-gabova',
    firstName: 'Елена',
    lastName: 'Габова',
    types: ['prose'],
  },

  {
    id: 'svetlana-makaryina',
    firstName: 'Светлана',
    lastName: 'Макарьина',
    types: ['poet', 'prose'],
  },

  {
    id: 'tim-sobakin',
    firstName: 'Тим',
    lastName: 'Собакин',
    types: ['poet'],
  },

  {
    id: 'marat-gardanov',
    firstName: 'Марат',
    lastName: 'Гарданов',
    types: ['poet'],
  },

  {
    id: 'rimma-aldonina',
    firstName: 'Римма',
    lastName: 'Алдонина',
    types: ['poet'],
  },

  {
    id: 'irina-schastneva',
    firstName: 'Ирина',
    lastName: 'Счастнева',
    types: ['poet'],
  },

  {
    id: 'olga-sharkova',
    firstName: 'Ольга',
    lastName: 'Шаркова',
    types: ['poet'],
  },

  {
    id: 'irina-vekka',
    firstName: 'Ирина',
    lastName: 'Векка',
    types: ['poet'],
  },

  {
    id: 'evgenia-gunter',
    firstName: 'Евгения',
    lastName: 'Гюнтер',
    types: ['prose'],
  },

  {
    id: 'igor-zhuk',
    firstName: 'Игорь',
    lastName: 'Жуков',
    types: ['prose'],
  },

  {
    id: 'maria-voeykova-kiseleva',
    firstName: 'Мария',
    lastName: 'Воейкова-Киселёва',
    types: ['prose'],
  },

  {
    id: 'veronika-jobert',
    firstName: 'Вероника',
    lastName: 'Жобер',
    types: ['prose'],
  },

  {
    id: 'irina-pukhalevich',
    firstName: 'Ирина',
    lastName: 'Пухалевич',
    types: ['poet'],
  },

  {
    id: 'anastasia-glazunova',
    firstName: 'Анастасия',
    lastName: 'Глазунова',
    types: ['poet'],
  },

  {
    id: 'elena-ponomaryova',
    firstName: 'Елена',
    lastName: 'Пономарёва',
    types: ['poet'],
  },

  {
    id: 'nadezhda-shemyakina',
    firstName: 'Надежда',
    lastName: 'Шемякина',
    types: ['poet'],
  },

  {
    id: 'dmitry-fomin',
    firstName: 'Дмитрий',
    lastName: 'Фомин',
    types: ['prose'],
  },

  {
    id: 'alexander-sheller-mikhailov',
    firstName: 'Александр',
    lastName: 'Шеллер-Михайлов',
    types: ['prose'],
  },

  {
    id: 'filipp-shkulyov',
    firstName: 'Филипп',
    lastName: 'Шкулёв',
    types: ['poet'],
  },

  {
    id: 'maria-moravskaya',
    firstName: 'Мария',
    lastName: 'Моравская',
    types: ['poet'],
  },

  {
    id: 'mohamed-el-mehdi-shahed',
    firstName: 'Мохамед эль-Мехди',
    lastName: 'Шахед',
    types: ['prose'],
  },

  {
    id: 'mikhail-yasnov',
    firstName: 'Михаил',
    lastName: 'Яснов',
    types: ['poet'],
  },

  {
    id: 'natalya-bochechko',
    firstName: 'Наталья',
    lastName: 'Бочечко',
    types: ['prose'],
  },

  {
    id: 'natalya-elizarova',
    firstName: 'Наталья',
    lastName: 'Елизарова',
    types: ['prose'],
  },

  {
    id: 'viktoria-tsarinnaya',
    firstName: 'Виктория',
    lastName: 'Царинная',
    types: ['poet', 'prose'],
  },

  {
    id: 'natalya-volkova',
    firstName: 'Наталия',
    lastName: 'Волкова',
    types: ['poet', 'prose'],
  },

  {
    id: 'darya-mikhailova',
    firstName: 'Дарья',
    lastName: 'Михайлова',
    types: ['poet'],
  },

  {
    id: 'irina-pugina',
    firstName: 'Ирина',
    lastName: 'Пугина',
    types: ['poet', 'prose'],
  },

  {
    id: 'anna-cherkasova',
    firstName: 'Анна',
    lastName: 'Черкасова',
    types: ['poet', 'prose'],
  },

  {
    id: 'svetlana-pankova',
    firstName: 'Светлана',
    lastName: 'Панкова',
    types: ['poet'],
  },

  {
    id: 'rustam-karapetyan',
    firstName: 'Рустам',
    lastName: 'Карапетьян',
    types: ['poet'],
  },

  {
    id: 'svetlana-volkova',
    firstName: 'Светлана',
    lastName: 'Волкова',
    types: ['prose'],
  },

  {
    id: 'alyona-kashura',
    firstName: 'Алёна',
    lastName: 'Кашура',
    types: ['prose'],
  },

  {
    id: 'ekaterina-bordon',
    firstName: 'Екатерина',
    lastName: 'Бордон',
    types: ['prose'],
  },

  {
    id: 'yulia-ivanova',
    firstName: 'Юлия',
    lastName: 'Иванова',
    types: ['prose'],
  },

  {
    id: 'elena-lipatova',
    firstName: 'Елена',
    lastName: 'Липатова',
    types: ['poet'],
  },

  {
    id: 'elena-musatova',
    firstName: 'Елена',
    lastName: 'Мусатова',
    types: ['prose'],
  },

  {
    id: 'madina-razzonova',
    firstName: 'Мадина',
    lastName: 'Раззонова',
    types: ['prose'],
  },

  {
    id: 'ulyana-dementyeva',
    firstName: 'Ульяна',
    lastName: 'Дементьева',
    types: ['prose'],
  },

  {
    id: 'viktoria-gurtan',
    firstName: 'Виктория',
    lastName: 'Гуртан',
    types: ['prose'],
  },

  {
    id: 'ksenia-vishnevetskaya',
    firstName: 'Ксения',
    lastName: 'Вишневецкая',
    types: ['poet'],
  },

  {
    id: 'olga-andriyanova',
    firstName: 'Ольга',
    lastName: 'Андриянова',
    types: ['poet'],
  },

  {
    id: 'asya-kravchenko',
    firstName: 'Ася',
    lastName: 'Кравченко',
    types: ['prose'],
  },

  {
    id: 'nikolay-garin-mikhailovsky',
    firstName: 'Николай',
    lastName: 'Гарин-Михайловский',
    types: ['prose'],
  },

  {
    id: 'masha-lukashkina',
    firstName: 'Маша',
    lastName: 'Лукашкина',
    types: ['poet'],
  },

  {
    id: 'zinaida-popova',
    firstName: 'Зинаида',
    lastName: 'Попова',
    types: ['poet'],
  },

  {
    id: 'lyudmila-duryagina',
    firstName: 'Людмила',
    lastName: 'Дурягина',
    types: ['poet'],
  },

  {
    id: 'elena-seranova',
    firstName: 'Елена',
    lastName: 'Серанова',
    types: ['poet'],
  },

  {
    id: 'anastasia-sukgoeva',
    firstName: 'Анастасия',
    lastName: 'Сукгоева',
    types: ['poet'],
  },

  {
    id: 'margarita-zaitseva',
    firstName: 'Маргарита',
    lastName: 'Зайцева',
    types: ['poet'],
  },

  {
    id: 'marina-yurina',
    firstName: 'Марина',
    lastName: 'Юрина',
    types: ['poet'],
  },

  {
    id: 'artur-givargizov',
    firstName: 'Артур',
    lastName: 'Гиваргизов',
    types: ['poet', 'prose'],
  },

  {
    id: 'maria-sigaeva',
    firstName: 'Мария',
    lastName: 'Сигаева',
    types: ['poet'],
  },

  {
    id: 'tatyana-romanova',
    firstName: 'Татьяна',
    lastName: 'Романова',
    types: ['poet'],
  },

  {
    id: 'inga-soms',
    firstName: 'Инга',
    lastName: 'Сомс',
    types: ['poet', 'prose'],
  },

  {
    id: 'irina-surikova',
    firstName: 'Ирина',
    lastName: 'Сурикова',
    types: ['poet'],
  },

  {
    id: 'larisa-pribrezhnaya',
    firstName: 'Лариса',
    lastName: 'Прибрежная',
    types: ['prose'],
  },

  {
    id: 'brothers-grimm',
    firstName: 'Братья',
    lastName: 'Гримм',
    types: ['prose'],
  },

  {
    id: 'ekaterina-belches',
    firstName: 'Екатерина',
    lastName: 'Белчес',
    types: ['prose'],
  },

  {
    id: 'ekaterina-shelemetyeva',
    firstName: 'Екатерина',
    lastName: 'Шелеметьева',
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
    id: 'gulnara-miranova',
    firstName: 'Гульнара',
    lastName: 'Миранова',
    types: ['prose'],
  },

  {
    id: 'lilia-gazizova',
    firstName: 'Лилия',
    lastName: 'Газизова',
    types: ['poet'],
  },

  {
    id: 'mila-vesnushkina',
    firstName: 'Мила',
    lastName: 'Веснушкина',
    types: ['poet'],
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
    id: 'mikhail-lukashevich',
    firstName: 'Михаил',
    lastName: 'Лукашевич',
    types: ['poet'],
  },

  {
    id: 'irina-zartayskaya',
    firstName: 'Ирина',
    lastName: 'Зартайская',
    types: ['prose'],
  },

  {
    id: 'natalya-kapustyuk',
    firstName: 'Наталья',
    lastName: 'Капустюк',
    types: ['poet'],
  },

  {
    id: 'angelika-stynka',
    firstName: 'Анжелика',
    lastName: 'Стынка',
    types: ['prose'],
  },

  {
    id: 'oleg-kornienko',
    firstName: 'Олег',
    lastName: 'Корниенко',
    types: ['poet'],
  },

  {
    id: 'lyubava-gornitskaya',
    firstName: 'Любава',
    lastName: 'Горницкая',
    types: ['prose'],
  },

  {
    id: 'maria-agapina',
    firstName: 'Мария',
    lastName: 'Агапина',
    types: ['prose'],
  },

  {
    id: 'ariadni-rova',
    firstName: 'Ариадни',
    lastName: 'Рова',
    types: ['prose'],
  },

  {
    id: 'evelina-burbakh',
    firstName: 'Эвелина',
    lastName: 'Бурбах',
    types: ['prose'],
  },

  {
    id: 'natalya-semyonova',
    firstName: 'Наталья',
    lastName: 'Семёнова',
    types: ['poet'],
  },

  {
    id: 'anna-muzykantova',
    firstName: 'Анна',
    lastName: 'Музыкантова',
    types: ['poet'],
  },

  {
    id: 'irina-druzhaeva',
    firstName: 'Ирина',
    lastName: 'Дружаева',
    types: ['poet'],
  },

  {
    id: 'lev-rakhlis',
    firstName: 'Лев',
    lastName: 'Рахлис',
    types: ['poet'],
  },

  {
    id: 'dina-sabitova',
    firstName: 'Дина',
    lastName: 'Сабитова',
    types: ['prose'],
  },

  {
    id: 'nakip-kashtanov',
    firstName: 'Накип',
    lastName: 'Каштанов',
    types: ['poet'],
  },
  {
  id: 'olga-lalazhel',
  firstName: 'Ольга',
  lastName: 'Лалажель',
  types: ['prose','other'],
},

{
  id: 'lesya-tyshkovska',
  firstName: 'Леся',
  lastName: 'Тышковска',
  types: ['poet'],
},

{
  id: 'natalya-shostak',
  firstName: 'Наталья',
  lastName: 'Шостак',
  types: ['prose'],
},
{
  id: 'folk',
  firstName: 'Народное',
  lastName: 'творчество',
  types: ['poet', 'prose'],
},
{
  id: 'anonymous',
  firstName: 'Автор',
  lastName: 'неизвестен',
  types: ['poet', 'prose'],
},
{
  id: 'ekaterina-asonova',
  firstName: 'Екатерина',
  lastName: 'Асонова',
  types: ['other'],
},

{
  id: 'lena-barsin',
  firstName: 'Лена',
  lastName: 'Барсин',
  types: ['other'],
},

{
  id: 'dmitry-oreshkin',
  firstName: 'Дмитрий',
  lastName: 'Орешкин',
  types: ['other'],
},

{
  id: 'olga-artemyeva',
  firstName: 'Ольга',
  lastName: 'Артемьева',
  types: ['other'],
},

{
  id: 'darya-krivoborskaya',
  firstName: 'Дарья',
  lastName: 'Кривоборская',
  types: ['other'],
},

{
  id: 'yulia-utochkina',
  firstName: 'Юлия',
  lastName: 'Уточкина',
  types: ['other'],
},

{
  id: 'elena-shustova',
  firstName: 'Елена',
  lastName: 'Шустова',
  types: ['other'],
},

{
  id: 'yulia-amlinskaya',
  firstName: 'Юлия',
  lastName: 'Амлинская',
  types: ['other'],
},
{
  id: 'maria-bershadskaya',
  firstName: 'Мария',
  lastName: 'Бершадская',
  types: ['other'],
},

{
  id: 'polina-sorel',
  firstName: 'Полина',
  lastName: 'Сорель',
  types: ['other'],
},

{
  id: 'anna-zenkova',
  firstName: 'Анна',
  lastName: 'Зенькова',
  types: ['other'],
},

{
  id: 'sergey-belozerov',
  firstName: 'Сергей',
  lastName: 'Белозёров',
  types: ['other'],
},

{
  id: 'alexandra-vasilkova',
  firstName: 'Александра',
  lastName: 'Василькова',
  types: ['other'],
},

{
  id: 'alexandra-rubinstein',
  firstName: 'Александра',
  lastName: 'Рубинштейн',
  types: ['other'],
},

{
  id: 'galina-kabakova',
  firstName: 'Галина',
  lastName: 'Кабакова',
  types: ['other'],
},

{
  id: 'olga-gromova',
  firstName: 'Ольга',
  lastName: 'Громова',
  types: ['other'],
},

{
  id: 'maria-boteva',
  firstName: 'Мария',
  lastName: 'Ботева',
  types: ['other'],
},

{
  id: 'maya-bessonova',
  firstName: 'Майя',
  lastName: 'Бессонова',
  types: ['other'],
},

{
  id: 'alina-popova',
  firstName: 'Алина',
  lastName: 'Попова',
  types: ['other'],
},

{
  id: 'boris-kuznetsov',
  firstName: 'Борис',
  lastName: 'Кузнецов',
  types: ['other'],
},

{
  id: 'vitaliy-zyusko',
  firstName: 'Виталий',
  lastName: 'Зюсько',
  types: ['other'],
},

{
  id: 'larisa-tulupova',
  firstName: 'Лариса',
  lastName: 'Тулупова',
  types: ['other'],
},

{
  id: 'alyona-turtie',
  firstName: 'Алёна',
  lastName: 'Туртье',
  types: ['other'],
},

{
  id: 'elena-bolgova',
  firstName: 'Елена',
  lastName: 'Болгова',
  types: ['other'],
},

{
  id: 'ksenia-kovalenko',
  firstName: 'Ксения',
  lastName: 'Коваленко',
  types: ['other'],
},

{
  id: 'nikolay-dzhumakuliev',
  firstName: 'Николай',
  lastName: 'Джумакулиев',
  types: ['other'],
},

{
  id: 'sofya-remez',
  firstName: 'Софья',
  lastName: 'Ремез',
  types: ['other'],
},

{
  id: 'evgeniy-rudashevskiy',
  firstName: 'Евгений',
  lastName: 'Рудашевский',
  types: ['other'],
},

{
  id: 'olga-de-lakrua',
  firstName: 'Ольга',
  lastName: 'дё Лакруа',
  types: ['other'],
},

{
  id: 'dmitry-gasin',
  firstName: 'Дмитрий',
  lastName: 'Гасин',
  types: ['other'],
},

{
  id: 'nataliya-mavlevich',
  firstName: 'Наталия',
  lastName: 'Мавлевич',
  types: ['other'],
},
{
  id: 'denis-veselov',
  firstName: 'Денис',
  lastName: 'Веселов',
  types: ['other'],
},
]