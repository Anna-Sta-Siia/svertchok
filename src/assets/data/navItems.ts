export type NavItemData = {
  label: string
  to: string
}

export function getNavItems(
): NavItemData[] {
  return [
    {
      label: 'О Буковках',
      to: '/about',
    },
    {
      label: 'Новый номер',
      to: '/#current-issue',
    },
    {
      label: 'Авторы',
      to: '/authors',
    },
    {
      label: 'Наши номера',
      to: '/issues',
    },
    {
      label: 'Интервью',
      to: '/interviews',
    },
    {
      label: 'Написать Сверчку',
      to: '#contact',
    },
  ]
}