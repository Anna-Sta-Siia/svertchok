import { Link, useParams } from 'react-router-dom'

import { issues } from '../data/issues'
import { contentItems } from '../data/contentItems'
import { authors } from '../data/authors'

import './IssuePage.css'

const typeLabels = {
  poetry: 'Поэзия',
  prose: 'Проза',
  interview: 'Беседы',
  review: 'Рецензии',
  game: 'Игровая',
  methodical: 'Методкабинет',
  other: 'Другое',
}

export default function IssuePage() {
  const { slug } = useParams()

  const issue = issues.find((item) => item.slug === slug)

  if (!issue) {
    return (
      <section className="issue-page__not-found">
        <h1>Номер не найден</h1>

        <Link to="/">
          Вернуться на главную
        </Link>
      </section>
    )
  }

  const issueContent = contentItems
    .filter((item) => item.issueId === issue.id)
    .sort((a, b) => a.order - b.order)

  const ctaLabel =
    issue.accessType === 'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'

  return (
    <article className="issue-page">
      <Link to="/" className="issue-page__back">
        ← Вернуться на главную
      </Link>

      <header className="issue-page__hero">
        <div className="issue-page__cover-wrapper">
          <img
            src={issue.coverImage}
            alt={`Обложка «Сверчка», ${issue.monthLabel} ${issue.year}`}
            className="issue-page__cover"
          />
        </div>

        <div className="issue-page__hero-content">
          <p className="issue-page__date">
            №{String(issue.month).padStart(2, '0')} · {issue.year}
          </p>

          <h1>{issue.title}</h1>

          <p className="issue-page__description">
            {issue.longDescription}
          </p>

          <div className="issue-page__actions">
            <a href="#contents" className="issue-page__secondary-action">
              Посмотреть содержание ↓
            </a>

            <button type="button" className="issue-page__primary-action">
              {ctaLabel}
            </button>
          </div>
        </div>
      </header>

      {issue.introLabel && (
        <section className="issue-page__intro">
          <p className="issue-page__intro-label">
            {issue.introLabel}
          </p>

          {issue.introText && (
            <p className="issue-page__intro-text">
              {issue.introText}
            </p>
          )}
        </section>
      )}

      <section id="contents" className="issue-contents">
        <header className="issue-contents__header">
          <p>Заглянем внутрь?</p>
          <h2>Содержание номера</h2>
        </header>

        <div className="issue-contents__list">
          {issueContent.map((item) => {
            const author = authors.find(
              (author) => author.id === item.authorId,
            )

            return (
              <article
                className="issue-content-item"
                key={item.id}
              >
                <div>
                  <span className="issue-content-item__type">
                    {typeLabels[item.type]}
                  </span>

                  <h3>{item.title}</h3>

                  {author && (
                    <button
                      type="button"
                      className="issue-content-item__author"
                    >
                      {author.firstName} {author.lastName}
                    </button>
                  )}
                </div>

                {item.page && (
                  <span className="issue-content-item__page">
                    {item.page}
                  </span>
                )}
              </article>
            )
          })}
        </div>
      </section>
    </article>
  )
}