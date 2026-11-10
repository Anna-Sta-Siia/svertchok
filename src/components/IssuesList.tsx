import {
  useId,
} from 'react'

import type {
  Issue,
} from '../assets/data/issues'

import IssueCard from './IssueCard'
import Button from '../components/ui/Button'

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

      {/* =====================
          TITLE
          ===================== */}

      {title && (
        <h2
          id={titleId}
          className="issues-list__title"
        >
          {title}
        </h2>
      )}


      {/* =====================
          ISSUES
          ===================== */}

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


      {/* =====================
          ALL ISSUES
          ===================== */}

      {showAllLink && (
        <div className="issues-list__footer">
          <Button
            variant="tertiary"
            to="/issues"
            className="issues-list__all-button"
          >
            Посмотреть все номера →
          </Button>
        </div>
      )}

    </section>
  )
}