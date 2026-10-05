import { Link } from 'react-router-dom'

import type { Author } from '../assets/data/authors'
import type { Issue } from '../assets/data/issues'

import './AuthorCard.css'

type AuthorCardProps = {
  author: Author
  authorIssues: Issue[]
}

const typeLabels = {
  poet: 'Поэзия',
  prose: 'Проза',
} as const

export default function AuthorCard({
  author,
  authorIssues,
}: AuthorCardProps) {
  return (
    <article className="author-card">
      <header className="author-card__header">
        <h2 className="author-card__name">
          {author.firstName}{' '}
          {author.lastName}
        </h2>

        {author.types.length > 0 && (
          <div className="author-card__types">
            {author.types.map((type) => (
              <span
                key={type}
                className="author-card__type"
              >
                {typeLabels[type]}
              </span>
            ))}
          </div>
        )}
      </header>

      {author.shortBio && (
        <p className="author-card__bio">
          {author.shortBio}
        </p>
      )}

      {authorIssues.length > 0 && (
        <div className="author-card__issues">
          <p className="author-card__label">
            В номерах
          </p>

          <div className="author-card__issue-links">
            {authorIssues.map((issue) => (
              <Link
                key={issue.id}
                to={`/issues/${issue.slug}`}
                className="author-card__issue-link"
              >
                №
                {String(issue.month).padStart(
                  2,
                  '0',
                )}
                {' · '}
                {issue.year}
              </Link>
            ))}
          </div>
        </div>
      )}

      {author.interviews &&
        author.interviews.length > 0 && (
          <div className="author-card__interviews">
            <p className="author-card__label">
              Беседы «Сверчка»
            </p>

            <div className="author-card__issue-links">
              {author.interviews.map(
                (issueId) => {
                  const issue =
                    authorIssues.find(
                      (item) =>
                        item.id === issueId,
                    )

                  if (!issue) {
                    return null
                  }

                  return (
                    <Link
                      key={issueId}
                      to={`/issues/${issue.slug}`}
                      className="author-card__interview-link"
                    >
                      Беседа в №
                      {String(
                        issue.month,
                      ).padStart(2, '0')}
                      ·{issue.year} →
                    </Link>
                  )
                },
              )}
            </div>
          </div>
        )}
    </article>
  )
}