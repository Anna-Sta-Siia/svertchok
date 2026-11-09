export type AnnouncementType =
  | 'news'
  | 'event'
  | 'contest'
  | 'new-issue'

export type Announcement = {
  id: string

  type: AnnouncementType

  title: string
  text: string

  startsAt?: string
  endsAt?: string

  link?: string
  linkLabel?: string

  active: boolean
  order: number
}


export const announcementTypeLabels:
  Record<
    AnnouncementType,
    string
  > = {
    news:
      'Новости «Буковок»',

    event:
      'Событие',

    contest:
      'Конкурс',

    'new-issue':
      'Новый номер',
  }


/*
 * DEMO
 *
 * Когда появится настоящее
 * объявление — просто меняем
 * этот объект.
 */

export const announcements:
  Announcement[] = [
    {
      id:
        'welcome-demo',

      type:
        'news',

      title:
        'У Сверчка есть новости!',

      text:
        'Здесь можно рассказать читателям о новом конкурсе, встрече, книжной выставке или другом событии «Буковок».',

      link:
        'https://www.facebook.com/BoukovkiFrance/',

      linkLabel:
        'Узнать подробнее →',

      active:
        true,

      order:
        1,
    },
  ]


export function getCurrentAnnouncement() {
  const now =
    new Date().getTime()

  return [...announcements]
    .filter(
      (announcement) => {
        if (!announcement.active) {
          return false
        }

        if (
          announcement.startsAt &&
          new Date(
            announcement.startsAt,
          ).getTime() >
            now
        ) {
          return false
        }

        if (
          announcement.endsAt &&
          new Date(
            announcement.endsAt,
          ).getTime() <
            now
        ) {
          return false
        }

        return true
      },
    )
    .sort(
      (a, b) =>
        a.order - b.order,
    )[0]
}