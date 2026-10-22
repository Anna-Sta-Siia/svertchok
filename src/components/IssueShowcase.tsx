import type {
  ReactNode,
} from 'react'

import './IssueShowcase.css'


type IssueShowcaseProps = {
  featured: ReactNode
  secondary: ReactNode

  featuredHeading?: ReactNode
  secondaryHeading?: ReactNode
}


export default function IssueShowcase({
  featured,
  secondary,
  featuredHeading,
  secondaryHeading,
}: IssueShowcaseProps) {
  return (
    <div className="issue-showcase">

      {featuredHeading && (
        <div className="issue-showcase__featured-heading">
          {featuredHeading}
        </div>
      )}

      {secondaryHeading && (
        <div className="issue-showcase__secondary-heading">
          {secondaryHeading}
        </div>
      )}

      <div className="issue-showcase__featured">
        {featured}
      </div>

      <div className="issue-showcase__secondary">
        {secondary}
      </div>
    </div>
  )
}