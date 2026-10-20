import {
  Link,
  Navigate,
  useParams,
} from 'react-router-dom'

import RelatedAuthors from '../components/RelatedAuthors'
import RelatedIssues from '../components/RelatedIssues'

import {
  getAuthorById,
  getAuthorsByIssueId,
  getAuthorsByType,
  getContentItemsByAuthorId,
  getIssueById,
  getIssuesByAuthorId,
} from '../assets/data/selectors'

import './AuthorPage.css'

const typeLabels = {
  poet: 'Поэзия',
  prose: 'Проза',
} as const

export default function AuthorPage() {
  const { authorId } = useParams<{
    authorId: string
  }>()

  if (!authorId) {
    return (
      <Navigate
        to="/authors"
        replace
      />
    )
  }

  const author =
    getAuthorById(authorId)

  if (!author) {
    return (
      <Navigate
        to="/authors"
        replace
      />
    )
  }

  const publications =
    getContentItemsByAuthorId(
      author.id,
    )

  const authorIssues =
    getIssuesByAuthorId(
      author.id,
      3,
    )

  const primaryType =
    author.types[0]

  const sameTypeAuthors =
    primaryType
      ? getAuthorsByType(
          primaryType,
          author.id,
        ).slice(0, 3)
      : []

  const latestAuthorIssue =
    authorIssues[0]

  const sameIssueAuthors =
    latestAuthorIssue
      ? getAuthorsByIssueId(
          latestAuthorIssue.id,
          author.id,
        ).slice(0, 3)
      : []

  return (
    <section className="author-page">
      <Link
        to="/authors"
        className="author-page__back"
      >
        ← Все авторы
      </Link>

      <div className="author-page__layout">
        <aside className="author-page__sidebar">
          <RelatedIssues
            title="Номера с автором"
            issues={authorIssues}
            variant="sidebar"
          />
        </aside>

        <main className="author-page__main">
          <header className="author-page__header">
            <p className="author-page__eyebrow">
              Автор «Сверчка»
            </p>

            <h1 className="author-page__title">
              {author.firstName}{' '}
              {author.lastName}
            </h1>

            <div className="author-page__types">
              {author.types.map(
                (type) => (
                  <span
                    key={type}
                    className="author-page__type"
                  >
                    {typeLabels[type]}
                  </span>
                ),
              )}
            </div>

            {author.shortBio && (
              <p className="author-page__bio">
                {author.shortBio}
              </p>
            )}
          </header>

          <section className="author-page__publications">
            <h2 className="author-page__section-title">
              Публикации в «Сверчке»
            </h2>

            {publications.length > 0 ? (
              <div className="author-page__publication-list">
                {publications.map(
                  (publication) => {
                    const issue =
                      getIssueById(
                        publication.issueId,
                      )

                    return (
                      <article
                        key={publication.id}
                        className="author-page__publication"
                      >
                        <div className="author-page__publication-content">
                          <h3 className="author-page__publication-title">
                            {publication.title}
                          </h3>

                          {publication.section && (
                            <p className="author-page__publication-section">
                              {
                                publication.section
                              }
                            </p>
                          )}
                        </div>

                        {issue && (
                          <Link
                            to={`/issues/${issue.slug}`}
                            className="author-page__publication-issue"
                          >
                            {
                              issue.monthLabel
                            }{' '}
                            {issue.year} →
                          </Link>
                        )}
                      </article>
                    )
                  },
                )}
              </div>
            ) : (
              <p className="author-page__empty">
                Публикации пока не
                добавлены.
              </p>
            )}
          </section>

          <div className="author-page__related">
            {sameTypeAuthors.length > 0 && (
              <RelatedAuthors
                title={
                  primaryType === 'poet'
                    ? 'Другие авторы поэзии'
                    : 'Другие авторы прозы'
                }
                authors={
                  sameTypeAuthors
                }
              />
            )}

            {latestAuthorIssue &&
              sameIssueAuthors.length >
                0 && (
                <RelatedAuthors
                  title={`Также в номере ${latestAuthorIssue.monthLabel} ${latestAuthorIssue.year}`}
                  authors={
                    sameIssueAuthors
                  }
                />
              )}
          </div>
        </main>
      </div>
    </section>
  )
}