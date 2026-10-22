import type {
  ReactNode,
} from 'react'

import './IssueShowcase.css'

type IssueShowcaseProps = {
  featured: ReactNode
  secondary: ReactNode
}

export default function IssueShowcase({
  featured,
  secondary,
}: IssueShowcaseProps) {
  return (
    <div className="issue-showcase">
      <div className="issue-showcase__featured">
        {featured}
      </div>

      <div className="issue-showcase__secondary">
        {secondary}
      </div>
    </div>
  )
}