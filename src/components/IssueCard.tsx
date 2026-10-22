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

  const issueNumber =
    `№${String(
      issue.month,
    ).padStart(
      2,
      '0',
    )} · ${issue.year}`


  /* =========================
     COMPACT

     RecentIssues
     RelatedIssues

     Date
     Cover | shortDescription

     Toute la carte est cliquable.
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

     Desktop :
     front / back.

     Mobile :
     même structure,
     mais le CSS la transformera
     en accordéon.

     Toujours shortDescription.
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

          {/* FRONT */}

          <div
            className="
              issue-card__archive-face
              issue-card__archive-front
            "
          >
            <p className="issue-card__date">
              {issueNumber}
            </p>

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
                <span>
                  Подробнее
                </span>

                <span
                  className="issue-card__archive-chevron"
                  aria-hidden="true"
                >
                  ⌄
                </span>
              </button>

              <Link
                to={issueUrl}
                className="issue-card__archive-link"
              >
                Перейти к номеру →
              </Link>
            </div>
          </div>


          {/* BACK */}

          <div
            className="
              issue-card__archive-face
              issue-card__archive-back
            "
          >
            <p className="issue-card__date">
              {issueNumber}
            </p>

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
                ← Вернуться
              </button>

              <Link
                to={issueUrl}
                className="issue-card__archive-link"
              >
                Перейти к номеру →
              </Link>
            </div>
          </div>
        </div>
      </article>
    )
  }


  /* =========================
     FEATURED

     HomePage / IssuePage

     La carte ne contient
     aucun titre de page.

     HomePage décide elle-même
     d'afficher par exemple :
     "А вот и мой новый номер".

     Ici :
     Cover | longDescription
     ========================= */

  const description =
    longDescription ??
    issue.shortDescription

  return (
    <article
      className="
        issue-card
        issue-card--featured
      "
    >
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