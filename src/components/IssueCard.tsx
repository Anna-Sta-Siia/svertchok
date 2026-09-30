import { Link } from 'react-router-dom'

import Button from './ui/Button'

import './IssueCard.css'

type IssueCardAction = {
  label: string
  to?: string
  href?: string
  external?: boolean
  variant?: 'primary' | 'outline' | 'ghost'
}

type IssueCardProps = {
  slug: string
  monthLabel: string
  month: number
  year: number
  title: string
  coverImage: string
  description: string

  variant?: 'featured' | 'compact'

  primaryAction?: IssueCardAction
  secondaryAction?: IssueCardAction
}

export default function IssueCard({
  slug,
  monthLabel,
  month,
  year,
  title,
  coverImage,
  description,
  variant = 'compact',
  primaryAction,
  secondaryAction,
}: IssueCardProps) {
  const issueUrl = `/issues/${slug}`

  const hasActions =
    Boolean(primaryAction) ||
    Boolean(secondaryAction)

  /*
   * Une petite carte sans CTA peut être
   * entièrement cliquable.
   */
  if (variant === 'compact' && !hasActions) {
    return (
      <Link
        to={issueUrl}
        className="issue-card issue-card--compact issue-card--clickable"
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

          <h3 className="issue-card__title">
            {title}
          </h3>

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

        <h2 className="issue-card__title">
          <Link to={issueUrl}>
            {title}
          </Link>
        </h2>

        <p className="issue-card__description">
          {description}
        </p>

        {hasActions && (
          <div className="issue-card__actions">
            {primaryAction && (
              <Button
                variant={
                  primaryAction.variant ??
                  'primary'
                }
                to={primaryAction.to}
                href={primaryAction.href}
                external={
                  primaryAction.external
                }
              >
                {primaryAction.label}
              </Button>
            )}

            {secondaryAction && (
              <Button
                variant={
                  secondaryAction.variant ??
                  'outline'
                }
                to={secondaryAction.to}
                href={secondaryAction.href}
                external={
                  secondaryAction.external
                }
              >
                {secondaryAction.label}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  )
}