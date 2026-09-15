import { Link } from 'react-router-dom'
import './IssueCard.css'

type IssueCardProps = {
  slug: string
  monthLabel: string
  month: number
  year: number
  title: string
  coverImage: string
  description: string
  accessType: 'free' | 'paid'
  accessUrl?: string
  featured?: boolean
}

export default function IssueCard({
  slug,
  monthLabel,
  month,
  year,
  title,
  coverImage,
  description,
  accessType,
  accessUrl,
  featured = false,
}: IssueCardProps) {
  const ctaLabel =
    accessType === 'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'

  return (
    <article
      className={`issue-card ${
        featured ? 'issue-card--featured' : ''
      }`}
    >
      <Link
        to={`/issues/${slug}`}
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
          {monthLabel} · {String(month).padStart(2, '0')}/{year}
        </p>

        <h2>{title}</h2>

        <p>{description}</p>

        <div className="issue-card__actions">
          <Link
            to={`/issues/${slug}`}
            className="issue-card__details"
          >
            Перейти к номеру →
          </Link>

          {accessUrl && (
            <a
              href={accessUrl}
              className="issue-card__purchase"
              target="_blank"
              rel="noreferrer"
            >
              {ctaLabel}
            </a>
          )}
        </div>
      </div>
    </article>
  )
}