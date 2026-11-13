import {
  useLocation,
} from 'react-router-dom'

import NavItem from './NavItem'

import springFlower from '../../assets/images/seasons/spring-flower.png'
import summerStrawberry from '../../assets/images/seasons/summer-berry.png'
import autumnLeaf from '../../assets/images/seasons/autumn-leaf.png'
import winterSnowflake from '../../assets/images/seasons/winter-snowflake.png'

import type {
  Season,
} from '../../utils/getCurrentSeason'

import './SeasonalNavbar.css'


export type SeasonalNavItem = {
  label:
    string

  to:
    string
}


type SeasonalNavbarProps = {
  season:
    Season

  items:
    SeasonalNavItem[]
}


const seasonIcons: Record<
  Season,
  string
> = {
  spring:
    springFlower,

  summer:
    summerStrawberry,

  autumn:
    autumnLeaf,

  winter:
    winterSnowflake,
}


function getPathname(
  to: string,
) {
  if (
    to.startsWith('#')
  ) {
    return ''
  }

  return (
    to
      .split('#')[0]
      .split('?')[0] ||
    '/'
  )
}


function matchesPath(
  currentPathname: string,
  to: string,
) {
  const targetPathname =
    getPathname(
      to,
    )


  if (!targetPathname) {
    return false
  }


  if (
    targetPathname ===
    '/'
  ) {
    return (
      currentPathname ===
      '/'
    )
  }


  return (
    currentPathname ===
      targetPathname ||
    currentPathname.startsWith(
      `${targetPathname}/`,
    )
  )
}


export default function SeasonalNavbar({
  season,
  items,
}: SeasonalNavbarProps) {
  const location =
    useLocation()


  const activeItem =
    items
      .filter(
        (item) =>
          matchesPath(
            location.pathname,
            item.to,
          ),
      )
      .sort(
        (a, b) =>
          getPathname(
            b.to,
          ).length -
          getPathname(
            a.to,
          ).length,
      )[0]


  const activeTo =
    activeItem?.to


  const repeatedItems = [
    ...items,
    ...items,
    ...items,
  ]


  const seasonalImage =
    seasonIcons[
      season
    ]


  return (
    <nav
      className="seasonal-navbar"
      aria-label="Основная навигация"
    >

      {/* =====================
          SEASONAL LAYER
          ===================== */}

      <div
        className="seasonal-navbar__season-layer"
        aria-hidden="true"
      >
        {Array.from({
          length:
            4,
        }).map(
          (
            _,
            index,
          ) => (
            <img
              key={
                index
              }
              src={
                seasonalImage
              }
              alt=""
              className={`
                seasonal-navbar__season-image
                seasonal-navbar__season-image--${index + 1}
              `}
            />
          ),
        )}
      </div>


      {/* =====================
          MARQUEE VIEWPORT
          ===================== */}

      <div className="seasonal-navbar__viewport">
        <div className="seasonal-navbar__track">
          {repeatedItems.map(
            (
              item,
              index,
            ) => (
              <div
                className="seasonal-navbar__entry"
                key={`${item.to}-${index}`}
              >
                <NavItem
                  label={
                    item.label
                  }
                  to={
                    item.to
                  }
                  isActive={
                    item.to ===
                    activeTo
                  }
                />

                <img
                  src={
                    seasonalImage
                  }
                  alt=""
                  aria-hidden="true"
                  className="seasonal-navbar__separator"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </nav>
  )
}