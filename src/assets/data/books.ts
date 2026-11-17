import poeticWalksCover
  from '../images/lesbaladespoetiques.jpg'

import corbeauCover
  from '../images/corbeaupie.jpg'

import gatheringsCover
  from '../images/posidelki.jpg'


export type Book = {
  id: string
  titleRu: string
  titleFr?: string
  description: string
  cover: string
  purchaseUrl: string
}


export const BOUKOVKI_KIOSK_URL =
  'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/boutiques/kiosk-boukovok'


export const books:
  Book[] = [
    {
      id:
        'corbeau-pie-dame-tartine',

      titleRu:
        'Сорока-ворона, мадам Тарталетка и весёлая компания',

      titleFr:
        'Corbeau-pie, dame Tartine et joyeuse compagnie',

      description:
        'Двуязычный сборник русских и французских детских фольклорных стихов с лучшими переводами конкурса памяти М. Яснова. Альбомный формат, 44 страницы, цветные иллюстрации.',

      cover:
        corbeauCover,

      purchaseUrl:
        BOUKOVKI_KIOSK_URL,
    },

    {
      id:
        'poetic-walks',

      titleRu:
        'Поэтические прогулки Сверчка и его друзей',

      titleFr:
        'Les balades poétiques du Grillon et de ses amis',

      description:
        'Двуязычный сборник стихов для детей по итогам конкурса им. М. Яснова 2024: переводы с французского на русский и с русского на французский.',

      cover:
        poeticWalksCover,

      purchaseUrl:
        BOUKOVKI_KIOSK_URL,
    },

    {
      id:
        'gatherings-at-svertchok',

      titleRu:
        'Посиделки у Сверчка',

      description:
        'Сборник детских стихов и сказок шести современных писательниц, ранее опубликованных в разных номерах электронного альманаха «Сверчок» в 2019–2022 годах. Мягкая обложка, 40 страниц, цветные иллюстрации.',

      cover:
        gatheringsCover,

      purchaseUrl:
        BOUKOVKI_KIOSK_URL,
    },
  ]
