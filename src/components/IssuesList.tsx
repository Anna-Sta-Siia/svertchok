import {
  useId,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import type {
  Issue,
} from '../assets/data/issues'

import IssueCard from './IssueCard'

import './IssuesList.css'


type IssuesListProps = {
  issues: Issue[]

  variant?:
    | 'recent'
    | 'sidebar'

  title?: string

  showAllLink?: boolean
}


export default function IssuesList({
  issues,
  variant = 'recent',
  title,
  showAllLink = false,
}: IssuesListProps) {
  const titleId =
    useId()

  if (
    issues.length === 0
  ) {
    return null
  }

  return (
    <section
      className={`
        issues-list
        issues-list--${variant}
      `}
      aria-labelledby={
        title
          ? titleId
          : undefined
      }
      aria-label={
        title
          ? undefined
          : 'Номера «Сверчка»'
      }
    >
      {title && (
        <h2
          id={titleId}
          className="issues-list__title"
        >
          {title}
        </h2>
      )}

      <div className="issues-list__items">
        {issues.map(
          (issue) => (
            <IssueCard
              key={
                issue.id
              }
              issue={
                issue
              }
              variant="compact"
            />
          ),
        )}
      </div>

      {showAllLink && (
        <div className="issues-list__footer">
          <Link
            to="/issues"
            className="issues-list__all-link"
          >
            Посмотреть все номера →
          </Link>
        </div>
      )}
    </section>
  )
}