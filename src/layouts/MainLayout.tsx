import { Outlet } from 'react-router-dom'
import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SeasonalNavbar from '../components/navigation/SeasonalNavbar'
import { getNavItems } from '../assets/data/navItems'
import springFlower from '../assets/seasons/spring-flower.png'
import summerStrawberry from '../assets/seasons/summer-berry.png'
import autumnLeaf from '../assets/seasons/autumn-leaf.png'
import winterSnowflake from '../assets/seasons/winter-snowflake.png'

import { issues } from '../assets/data/issues'
import {
  getCurrentSeason,
  type Season,
} from '../utils/getCurrentSeason'

import './MainLayout.css'

const seasonImages: Record<Season, string> = {
  spring: springFlower,
  summer: summerStrawberry,
  autumn: autumnLeaf,
  winter: winterSnowflake,
}

export default function MainLayout() {
  const season = getCurrentSeason()

  const currentIssue =
    issues.find((issue) => issue.isCurrent) ?? issues[0]

  const navItems = getNavItems(currentIssue.slug)

  const seasonalImage = seasonImages[season]

  return (
    <div
      className="site-shell"
      data-season={season}
    >
      <div
        className="season-background"
        aria-hidden="true"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <img
            key={index}
            src={seasonalImage}
            alt=""
            className={`season-background__image season-background__image--${index + 1}`}
          />
        ))}
      </div>

      <SiteHeader />

      <SeasonalNavbar
        season={season}
        items={navItems}
      />

      <main className="site-layout">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  )
}