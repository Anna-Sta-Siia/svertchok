import { Link } from 'react-router-dom'

import type { Issue } from '../assets/data/issues'

import RelatedIssues from './RelatedIssues'

import './RecentIssues.css'

type RecentIssuesProps = {
  issues: Issue[]
  title?: string
}

export default function RecentIssues({
  issues,
  title = 'Наши  номера',
}: RecentIssuesProps) {
  if (issues.length === 0) {
    return null
  }

  return (
    <section className="recent-issues">
      <RelatedIssues
        title={title}
        issues={issues}
        variant="row"
      />

      <div className="recent-issues__footer">
        <Link
          to="/issues"
          className="recent-issues__all-link"
        >
          Посмотреть все номера →
        </Link>
      </div>
    </section>
  )
}