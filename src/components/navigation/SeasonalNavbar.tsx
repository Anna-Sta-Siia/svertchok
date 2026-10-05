import NavItem from './NavItem'

import springFlower from '../../assets/images/seasons/spring-flower.png'
import summerStrawberry from '../../assets/images/seasons/summer-berry.png'
import autumnLeaf from '../../assets/images/seasons/autumn-leaf.png'
import winterSnowflake from '../../assets/images/seasons/winter-snowflake.png'

import type { Season } from '../../utils/getCurrentSeason'

import './SeasonalNavbar.css'

export type SeasonalNavItem = {
  label: string
  to: string
}

type SeasonalNavbarProps = {
  season: Season
  items: SeasonalNavItem[]
}

const seasonIcons: Record<Season, string> = {
  spring: springFlower,
  summer: summerStrawberry,
  autumn: autumnLeaf,
  winter: winterSnowflake,
}

export default function SeasonalNavbar({
  season,
  items,
}: SeasonalNavbarProps) {
  const repeatedItems = [
    ...items,
    ...items,
    ...items,
  ]

  return (
    <nav
      className="seasonal-navbar"
      aria-label="Основная навигация"
    >
      <div className="seasonal-navbar__track">
        {repeatedItems.map((item, index) => (
          <div
            className="seasonal-navbar__entry"
            key={`${item.to}-${index}`}
          >
            <NavItem
              label={item.label}
              to={item.to}
            />

            <img
              src={seasonIcons[season]}
              alt=""
              aria-hidden="true"
              className="seasonal-navbar__separator"
            />
          </div>
        ))}
      </div>
    </nav>
  )
}