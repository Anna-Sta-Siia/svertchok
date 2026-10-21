import { Link } from 'react-router-dom'

import type { Issue } from '../assets/data/issues'

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
  const issueUrl =
    `/issues/${issue.slug}`

  const issueNumber =
    `№${String(issue.month).padStart(2, '0')} · ${issue.year}`

  /*
   * =========================
   * COMPACT
   *
   * RelatedIssues / RecentIssues
   * Auteur sidebar
   *
   * Toujours shortDescription.
   * Toute la carte est cliquable.
   * =========================
   */

  if (variant === 'compact') {
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

        <div className="issue-card__compact-cover">
          <img
            src={issue.coverImage}
            alt={`Обложка номера ${issue.monthLabel} ${issue.year}`}
            className="issue-card__cover"
          />
        </div>

        <p className="issue-card__description">
          {issue.shortDescription}
        </p>
      </Link>
    )
  }

  /*
   * =========================
   * FEATURED / ARCHIVE
   *
   * Archive aura sa propre
   * structure à l'étape suivante.
   *
   * Pour l'instant il n'est pas
   * encore utilisé dans le site.
   * =========================
   */

  const description =
    variant === 'featured'
      ? longDescription ??
        issue.shortDescription
      : issue.shortDescription

  return (
    <article
      className={`issue-card issue-card--${variant}`}
    >
      <Link
        to={issueUrl}
        className="issue-card__cover-link"
      >
        <img
          src={issue.coverImage}
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