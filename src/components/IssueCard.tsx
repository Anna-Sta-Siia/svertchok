import { Link } from 'react-router-dom'

import './IssueCard.css'

type IssueCardProps = {
  slug: string
  monthLabel: string
  month: number
  year: number

  title?: string

  coverImage: string
  description: string

  variant?: 'featured' | 'compact' | 'detail'

  readMoreTo?: string
}

export default function IssueCard({
  slug,
  monthLabel,
  month,
  year,
  title,
  coverImage,
  description,
  variant = 'featured',
  readMoreTo,
}: IssueCardProps) {
  const issueUrl = `/issues/${slug}`

  /*
   * Les cartes compactes de l'archive
   * sont entièrement cliquables.
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
        <img
          src={coverImage}
          alt={`Обложка номера ${monthLabel} ${year}`}
          className="issue-card__cover"
        />

        <div className="issue-card__content">
          <p className="issue-card__date">
            №{String(month).padStart(2, '0')} · {year}
          </p>

          {title && (
            <h2 className="issue-card__title">
              {title}
            </h2>
          )}

          <p className="issue-card__description">
            {description}
          </p>
        </div>
      </Link>
    )
  }

  return (
    <article
      className={`issue-card issue-card--${variant}`}
    >
      <Link
        to={issueUrl}
        className="issue-card__cover-link"
      >
        <img
          src={coverImage}
          alt={`Обложка номера ${monthLabel} ${year}`}
          className="issue-card__cover"
        />
      </Link>

      <div className="issue-card__content">
        <p className="issue-card__date">
          №{String(month).padStart(2, '0')} · {year}
        </p>

        {title && (
          <h2 className="issue-card__title">
            {title}
          </h2>
        )}

        <p className="issue-card__description">
          {description}
        </p>

        {readMoreTo && (
          <Link
            to={readMoreTo}
            className="issue-card__read-more"
          >
            Читать далее →
          </Link>
        )}
      </div>
    </article>
  )
}