import {
  Link,
} from 'react-router-dom'

import type {
  Author,
} from '../assets/data/authors'

import type {
  Issue,
} from '../assets/data/issues'

import type {
  Interview,
} from '../assets/data/interviews/types'

import './InterviewCard.css'


type InterviewCardProps = {
  interview: Interview
  author: Author
  issue: Issue
}


const typeLabels = {
  poet: 'Поэзия',
  prose: 'Проза',
  other: 'Другое',
} as const


function getIssueLabel(
  issue: Issue,
) {
  return `№${String(
    issue.month,
  ).padStart(
    2,
    '0',
  )} · ${issue.year}`
}


export default function InterviewCard({
  interview,
  author,
  issue,
}: InterviewCardProps) {
  const isFree =
    issue.accessType ===
    'free'

  const pdfUrl =
    `${import.meta.env.BASE_URL}interviews/${interview.id}.pdf`

  return (
    <article
      id={interview.id}
      className="interview-card"
    >
      <header className="interview-card__header">
        <h2 className="interview-card__author">
          <Link
            to={`/authors/${author.id}`}
            className="interview-card__author-link"
          >
            {author.lastName}{' '}
            {author.firstName}
          </Link>
        </h2>

        {author.types.length >
          0 && (
          <div className="interview-card__types">
            {author.types.map(
              (type) => (
                <span
                  key={type}
                  className="interview-card__type"
                >
                  {
                    typeLabels[
                      type
                    ]
                  }
                </span>
              ),
            )}
          </div>
        )}
      </header>

      <div className="interview-card__body">
        <h3 className="interview-card__topic">
          {interview.topic}
        </h3>

        <p className="interview-card__description">
          {
            interview.shortDescription
          }
        </p>
      </div>

      <footer className="interview-card__footer">
        <Link
          to={`/issues/${issue.slug}`}
          className="interview-card__issue"
        >
          {getIssueLabel(issue)}
          {' — '}
          {issue.monthLabel}
        </Link>

        <div className="interview-card__action-wrap">
          {isFree ? (
            <>
              <a
                href={pdfUrl}
                target="_blank"
                rel="noreferrer"
                className="interview-card__action"
              >
                Читать далее →
              </a>

              <p className="interview-card__note">
                PDF можно читать,
                распечатать или скачать.
              </p>
            </>
          ) : (
            <>
              <Link
                to={`/issues/${issue.slug}`}
                className="interview-card__action"
              >
                Читать далее →
              </Link>

              <p className="interview-card__note">
                Полная версия беседы
                доступна в платном номере.
              </p>
            </>
          )}
        </div>
      </footer>
    </article>
  )
}
