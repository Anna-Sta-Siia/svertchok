import './SeasonalNavbar.css'

type Season = 'spring' | 'summer' | 'autumn' | 'winter'
type Side = 'left' | 'right'

type SeasonalNavbarProps = {
  season: Season
  side: Side
  items: string[]
}

const seasonIcons: Record<Season, string> = {
  spring: '🌸',
  summer: '🌿',
  autumn: '🍂',
  winter: '❄️',
}

export default function SeasonalNavbar({
  season,
  side,
  items,
}: SeasonalNavbarProps) {
  return (
    <nav
      className={`seasonal-navbar seasonal-navbar--${side}`}
      aria-label={`Navigation ${side}`}
    >
      {items.map((item) => (
        <button
          key={item}
          type="button"
          className="seasonal-nav-item"
        >
          <span className="seasonal-icon">
            {seasonIcons[season]}
          </span>

          <span>{item}</span>
        </button>
      ))}
    </nav>
  )
}