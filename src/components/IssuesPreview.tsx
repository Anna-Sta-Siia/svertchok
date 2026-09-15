import { Link } from 'react-router-dom'
import { issues } from '../data/issues'
import './IssuesPreview.css'

export default function IssuesPreview() {
  return (
    <section className="issues-preview">
      <div className="issues-preview__heading">
        <h2>Наши номера</h2>

        <p>
          У каждого номера — своё настроение и свои чудеса.
          <br />
          Выбирай тот, который зовёт тебя сегодня.
        </p>
      </div>

      <div className="issues-preview__grid">
     {issues.map((issue) => {
  const ctaLabel =
    issue.accessType === 'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'

  return (
    <article
      className="issue-preview-card"
      key={issue.id}
    >
      <Link
        to={`/issues/${issue.slug}`}
        className="issue-preview-card__cover-link"
      >
        <img
          src={issue.coverImage}
          alt={`Обложка журнала «Сверчок», ${issue.monthLabel} ${issue.year}`}
          className="issue-preview-card__cover"
        />
      </Link>

      <div className="issue-preview-card__body">
        <p className="issue-preview-card__date">
          №{String(issue.month).padStart(2, '0')} · {issue.year}
        </p>

        <p className="issue-preview-card__description">
          {issue.shortDescription}
        </p>

        <div className="issue-preview-card__actions">
          <Link
            to={`/issues/${issue.slug}`}
            className="issue-preview-card__details"
          >
            Перейти к номеру →
          </Link>

          {issue.accessUrl && (
            <a
              href={issue.accessUrl}
              className="issue-preview-card__button"
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
})}
      </div>

      <button
        type="button"
        className="issues-preview__all"
      >
        Посмотреть все номера →
      </button>
    </section>
  )
}