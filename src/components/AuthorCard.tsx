import {
  Link,
} from 'react-router-dom'

import type {
  Author,
} from '../assets/data/authors'

import type {
  Issue,
} from '../assets/data/issues'

import './AuthorCard.css'


export type AuthorCardVariant =
  | 'archive'
  | 'featured'
  | 'compact'


export type AuthorPublication = {
  id: string
  title: string
  issueId: string
  section?: string | null
}


type AuthorCardProps = {
  author: Author
  variant?: AuthorCardVariant
  authorIssues?: Issue[]
  publications?: AuthorPublication[]
}


const typeLabels = {
  poet: 'Поэзия',
  prose: 'Проза',
  other: 'Другое',
} as const


function getIssueLabel(
  issue: Issue,
) {
  return `№${String(
    issue.month,
  ).padStart(
    2,
    '0',
  )} · ${issue.year}`
}


export default function AuthorCard({
  author,
  variant = 'archive',
  authorIssues = [],
  publications = [],
}: AuthorCardProps) {
  const authorUrl =
    `/authors/${author.id}`


  /* =========================
     COMPACT

     Used later in:
     RelatedAuthors
     ========================= */

  if (
    variant ===
    'compact'
  ) {
    return (
      <Link
        to={authorUrl}
        className="
          author-card
          author-card--compact
        "
      >
        <p className="author-card__compact-name">
          {author.lastName}{' '}
          {author.firstName}
        </p>

        {author.types.length >
          0 && (
          <div className="author-card__types author-card__types--compact">
            {author.types.map(
              (type) => (
                <span
                  key={
                    type
                  }
                  className="author-card__compact-type"
                >
                  {
                    typeLabels[
                      type
                    ]
                  }
                </span>
              ),
            )}
          </div>
        )}
      </Link>
    )
  }


  /* =========================
     FEATURED

     Used later on:
     AuthorPage
     ========================= */

  if (
    variant ===
    'featured'
  ) {
    return (
      <article className="author-card author-card--featured">

        {/* ===================
            HEADER
            =================== */}

        <header className="author-card__featured-header">
          <h1 className="author-card__featured-name">
            {author.lastName}{' '}
            {author.firstName}
          </h1>

          {author.types.length >
            0 && (
            <div className="author-card__types author-card__types--featured">
              {author.types.map(
                (type) => (
                  <span
                    key={
                      type
                    }
                    className="author-card__type"
                  >
                    {
                      typeLabels[
                        type
                      ]
                    }
                  </span>
                ),
              )}
            </div>
          )}

          {author.shortBio && (
            <p className="author-card__featured-bio">
              {
                author.shortBio
              }
            </p>
          )}
        </header>


        {/* ===================
            CONTENT
            =================== */}

        <div className="author-card__featured-content">

          {/* =================
              PUBLICATIONS
              ================= */}

          <section className="author-card__featured-publications">
            <h2 className="author-card__featured-section-title">
              Публикации в «Сверчке»
            </h2>

            {publications.length >
            0 ? (
              <div className="author-card__publication-list">
                {publications.map(
                  (
                    publication,
                  ) => {
                    const issue =
                      authorIssues.find(
                        (
                          item,
                        ) =>
                          item.id ===
                          publication.issueId,
                      )

                    return (
                      <article
                        key={
                          publication.id
                        }
                        className="author-card__publication"
                      >
                        <div className="author-card__publication-content">
                          <h3 className="author-card__publication-title">
                            {
                              publication.title
                            }
                          </h3>

                          {publication.section && (
                            <p className="author-card__publication-section">
                              {
                                publication.section
                              }
                            </p>
                          )}
                        </div>

                        {issue && (
                          <Link
                            to={`/issues/${issue.slug}`}
                            className="author-card__publication-issue"
                          >
                            {
                              issue.monthLabel
                            }{' '}
                            {
                              issue.year
                            } →
                          </Link>
                        )}
                      </article>
                    )
                  },
                )}
              </div>
            ) : (
              <p className="author-card__empty">
                Публикации пока не
                добавлены.
              </p>
            )}
          </section>


          {/* =================
              ISSUES
              ================= */}

          {authorIssues.length >
            0 && (
            <aside className="author-card__featured-issues">
              <h2 className="author-card__featured-section-title author-card__featured-section-title--issues">
                В номерах
              </h2>

              <div className="author-card__featured-issue-list">
                {authorIssues.map(
                  (issue) => (
                    <Link
                      key={
                        issue.id
                      }
                      to={`/issues/${issue.slug}`}
                      className="author-card__featured-issue"
                    >
                      <span className="author-card__featured-issue-number">
                        {
                          getIssueLabel(
                            issue,
                          )
                        }
                      </span>

                      <span className="author-card__featured-issue-title">
                        {
                          issue.shortDescription
                        }
                      </span>
                    </Link>
                  ),
                )}
              </div>
            </aside>
          )}
        </div>
      </article>
    )
  }


  /* =========================
     ARCHIVE

     Default variant.
     Keeps AuthorsPage working.
     ========================= */

  return (
    <article className="author-card author-card--archive">

      {/* ===================
          HEADER
          =================== */}

      <header className="author-card__header">
        <h2 className="author-card__name">
          <Link
            to={authorUrl}
            className="author-card__name-link"
          >
            {author.lastName}{' '}
            {author.firstName}
          </Link>
        </h2>

        {author.types.length >
          0 && (
          <div className="author-card__types">
            {author.types.map(
              (type) => (
                <span
                  key={
                    type
                  }
                  className="author-card__type"
                >
                  {
                    typeLabels[
                      type
                    ]
                  }
                </span>
              ),
            )}
          </div>
        )}
      </header>


      {/* ===================
          BIO
          =================== */}

      {author.shortBio && (
        <p className="author-card__bio">
          {
            author.shortBio
          }
        </p>
      )}


      {/* ===================
          ISSUES
          =================== */}

      {authorIssues.length >
        0 && (
        <div className="author-card__issues">
          <p className="author-card__label">
            В номерах
          </p>

          <div className="author-card__issue-links author-card__issue-links--scroll">
            {authorIssues.map(
              (issue) => (
                <Link
                  key={
                    issue.id
                  }
                  to={`/issues/${issue.slug}`}
                  className="author-card__issue-link"
                >
                  {
                    getIssueLabel(
                      issue,
                    )
                  }
                </Link>
              ),
            )}
          </div>
        </div>
      )}


      {/* ===================
          AUTHOR PAGE
          =================== */}

      <Link
        to={authorUrl}
        className="author-card__details-link"
      >
        Страница автора →
      </Link>
    </article>
  )
}
