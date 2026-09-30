import NavItem from './NavItem'

import './SeasonalNavbar.css'

type Season =
  | 'spring'
  | 'summer'
  | 'autumn'
  | 'winter'

export type SeasonalNavItem = {
  label: string
  to: string
}

type SeasonalNavbarProps = {
  season: Season
  items: SeasonalNavItem[]
}

const seasonIcons: Record<Season, string> = {
  spring: '🌸',
  summer: '🌿',
  autumn: '🍂',
  winter: '❄️',
}

export default function SeasonalNavbar({
  season,
  items,
}: SeasonalNavbarProps) {
  return (
    <nav
      className="seasonal-navbar"
      aria-label="Основная навигация"
    >
      <div className="seasonal-navbar__track">
        {items.map((item) => (
          <NavItem
            key={item.to}
            label={item.label}
            to={item.to}
            icon={seasonIcons[season]}
          />
        ))}
      </div>
    </nav>
  )
}