import {
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import type {
  Issue,
} from '../assets/data/issues'

import './IssueCard.css'


type IssueCardProps = {
  issue: Issue

  variant?:
    | 'featured'
    | 'compact'
    | 'archive'

  longDescription?: string
}


type ArchiveNumberProps = {
  monthNumber: string
  year: number
  issueNumber: string
}


/* =========================
   ARCHIVE NUMBER

   Important:
   ce composant reste EN DEHORS
   de IssueCard.

   Ainsi React ne le recrée pas
   à chaque render.
   ========================= */

function ArchiveNumber({
  monthNumber,
  year,
  issueNumber,
}: ArchiveNumberProps) {
  return (
    <div
      className="issue-card__archive-number"
      aria-label={
        issueNumber
      }
    >
      <span className="issue-card__archive-number-symbol">
        №
      </span>

      {monthNumber
        .split('')
        .map(
          (
            digit,
            index,
          ) => (
            <span
              key={`month-${index}`}
              className="issue-card__archive-number-digit"
            >
              {digit}
            </span>
          ),
        )}

      <span
        className="issue-card__archive-separator"
        aria-hidden="true"
      >
        ·
      </span>

      {String(year)
        .split('')
        .map(
          (
            digit,
            index,
          ) => (
            <span
              key={`year-${index}`}
              className="issue-card__archive-year-digit"
            >
              {digit}
            </span>
          ),
        )}
    </div>
  )
}


/* =========================
   ISSUE CARD
   ========================= */

export default function IssueCard({
  issue,
  variant = 'featured',
  longDescription,
}: IssueCardProps) {
  const [
    isArchiveOpen,
    setIsArchiveOpen,
  ] = useState(false)


  const issueUrl =
    `/issues/${issue.slug}`


  const monthNumber =
    String(
      issue.month,
    ).padStart(
      2,
      '0',
    )


  const issueNumber =
    `№${monthNumber} · ${issue.year}`


  /* =========================
     COMPACT
     ========================= */

  if (
    variant ===
    'compact'
  ) {
    return (
      <Link
        to={issueUrl}
        className="
          issue-card
          issue-card--compact
          issue-card--clickable
        "
      >
        <p className="issue-card__date">
          {issueNumber}
        </p>

        <div className="issue-card__compact-body">
          <div className="issue-card__compact-cover">
            <img
              src={
                issue.coverImage
              }
              alt={`Обложка номера ${issue.monthLabel} ${issue.year}`}
              className="issue-card__cover"
            />
          </div>

          <p className="issue-card__description">
            {
              issue.shortDescription
            }
          </p>
        </div>
      </Link>
    )
  }


  /* =========================
     ARCHIVE
     ========================= */

  if (
    variant ===
    'archive'
  ) {
    return (
      <article
        className={`
          issue-card
          issue-card--archive
          ${
            isArchiveOpen
              ? 'issue-card--archive-open'
              : ''
          }
        `}
      >
        <div className="issue-card__archive-inner">

          {/* =================
              FRONT
              ================= */}

          <div className="issue-card__archive-face issue-card__archive-front">
            <ArchiveNumber
              monthNumber={
                monthNumber
              }
              year={
                issue.year
              }
              issueNumber={
                issueNumber
              }
            />

            <div className="issue-card__archive-cover">
              <img
                src={
                  issue.coverImage
                }
                alt={`Обложка номера ${issue.monthLabel} ${issue.year}`}
                className="issue-card__cover"
              />
            </div>

            <div className="issue-card__archive-actions">
              <button
                type="button"
                className="issue-card__archive-toggle"
                aria-expanded={
                  isArchiveOpen
                }
                onClick={() =>
                  setIsArchiveOpen(
                    true,
                  )
                }
              >
                Подробнее
              </button>
            </div>
          </div>


          {/* =================
              BACK
              ================= */}

          <div className="issue-card__archive-face issue-card__archive-back">
            <ArchiveNumber
              monthNumber={
                monthNumber
              }
              year={
                issue.year
              }
              issueNumber={
                issueNumber
              }
            />

            <p className="issue-card__archive-description">
              {
                issue.shortDescription
              }
            </p>

            <div className="issue-card__archive-actions">
              <button
                type="button"
                className="
                  issue-card__archive-toggle
                  issue-card__archive-toggle--back
                "
                onClick={() =>
                  setIsArchiveOpen(
                    false,
                  )
                }
              >
                Вернуться
              </button>

              <Link
                to={issueUrl}
                className="issue-card__archive-link"
              >
                Перейти к номеру
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }


  /* =========================
     FEATURED
     ========================= */

  const description =
    longDescription ??
    issue.shortDescription


  return (
    <article className="issue-card issue-card--featured">
      <Link
        to={issueUrl}
        className="issue-card__cover-link"
      >
        <img
          src={
            issue.coverImage
          }
          alt={`Обложка номера ${issue.monthLabel} ${issue.year}`}
          className="issue-card__cover"
        />
      </Link>

      <div className="issue-card__content">
        <p className="issue-card__date">
          {issueNumber}
        </p>

        <p className="issue-card__description">
          {description}
        </p>
      </div>
    </article>
  )
}