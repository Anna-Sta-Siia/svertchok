import { Link } from 'react-router-dom'

import Button from './ui/Button'
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
                  <Button
                    variant="primary"
                    to={`/issues/${issue.slug}`}
                  >
                    Перейти к номеру →
                  </Button>

                  {issue.accessUrl && (
                    <Button
                      variant="outline"
                      href={issue.accessUrl}
                      external
                    >
                      {ctaLabel}
                    </Button>
                  )}
                </div>
              </div>
            </article>
          )
        })}
      </div>

      <Button
        variant="primary"
        to="/issues"
        className="issues-preview__all"
      >
        Посмотреть все номера →
      </Button>
    </section>
  )
}