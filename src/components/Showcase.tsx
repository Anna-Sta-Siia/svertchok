import type {
  ReactNode,
} from 'react'

import './Showcase.css'


export type ShowcaseLayout =
  | 'issue'
  | 'author'


type ShowcaseProps = {
  layout: ShowcaseLayout

  featured: ReactNode
  secondary: ReactNode

  featuredHeading?: ReactNode
  secondaryHeading?: ReactNode
}


export default function Showcase({
  layout,
  featured,
  secondary,
  featuredHeading,
  secondaryHeading,
}: ShowcaseProps) {
  return (
    <div
      className={`
        showcase
        showcase--${layout}
      `}
    >
      {featuredHeading && (
        <div className="showcase__featured-heading">
          {featuredHeading}
        </div>
      )}

      {secondaryHeading && (
        <div className="showcase__secondary-heading">
          {secondaryHeading}
        </div>
      )}

      <div className="showcase__featured">
        {featured}
      </div>

      <div className="showcase__secondary">
        {secondary}
      </div>
    </div>
  )
}
