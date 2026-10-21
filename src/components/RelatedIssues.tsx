import { useId } from 'react'

import type { Issue } from '../assets/data/issues'
import IssueCard from './IssueCard'

import './RelatedIssues.css'

type RelatedIssuesProps = {
  title: string
  issues: Issue[]
  variant?: 'row' | 'sidebar'
}

export default function RelatedIssues({
  title,
  issues,
  variant = 'row',
}: RelatedIssuesProps) {
  const titleId = useId()

  if (issues.length === 0) {
    return null
  }

  return (
    <section
      className={`related-issues related-issues--${variant}`}
      aria-labelledby={titleId}
    >
      <h2
        id={titleId}
        className="related-issues__title"
      >
        {title}
      </h2>

      <div className="related-issues__list">
        {issues.map((issue) => (
          <IssueCard
  key={issue.id}
  issue={issue}
  variant="compact"
/>
        ))}
      </div>
    </section>
  )
}