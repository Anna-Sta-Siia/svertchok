import {
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import type {
  Author,
} from '../assets/data/authors'

import type {
  Issue,
} from '../assets/data/issues'

import {
  getInterviewsByAuthorId,
  getIssueById,
} from '../assets/data/selectors'

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


const INITIAL_ISSUE_COUNT =
  3

const INITIAL_PUBLICATION_COUNT =
  3


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


function getIssueHeading(
  issue: Issue,
) {
  return `${getIssueLabel(
    issue,
  )} — ${issue.monthLabel}`
}


export default function AuthorCard({
  author,
  variant = 'archive',
  authorIssues = [],
  publications = [],
}: AuthorCardProps) {
  const authorUrl =
    `/authors/${author.id}`


  const authorInterviews =
    getInterviewsByAuthorId(
      author.id,
    )


  const hasInterview =
    authorInterviews.length >
    0


  /*
   * Accordion state.
   *
   * The keys include author.id so state from one
   * author's page does not visually leak into
   * another author's card.
   */

  const [
    openIssueKeys,
    setOpenIssueKeys,
  ] = useState<Set<string>>(
    () =>
      new Set(),
  )


  const [
    expandedPublicationKeys,
    setExpandedPublicationKeys,
  ] = useState<Set<string>>(
    () =>
      new Set(),
  )


  const [
    expandedIssueListAuthorId,
    setExpandedIssueListAuthorId,
  ] = useState<
    string | null
  >(
    null,
  )


  function makeIssueKey(
    issueId: string,
  ) {
    return `${author.id}:${issueId}`
  }


  function toggleIssue(
    issueId: string,
  ) {
    const key =
      makeIssueKey(
        issueId,
      )

    setOpenIssueKeys(
      (
        current,
      ) => {
        const next =
          new Set(
            current,
          )

        if (
          next.has(
            key,
          )
        ) {
          next.delete(
            key,
          )
        } else {
          next.add(
            key,
          )
        }

        return next
      },
    )
  }


  function togglePublications(
    issueId: string,
  ) {
    const key =
      makeIssueKey(
        issueId,
      )

    setExpandedPublicationKeys(
      (
        current,
      ) => {
        const next =
          new Set(
            current,
          )

        if (
          next.has(
            key,
          )
        ) {
          next.delete(
            key,
          )
        } else {
          next.add(
            key,
          )
        }

        return next
      },
    )
  }


  /* =========================
     COMPACT
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

        <div className="author-card__compact-meta">
          {author.types.map(
            (
              type,
              index,
            ) => (
              <span
                key={
                  type
                }
                className="author-card__compact-meta-item"
              >
                {index >
                  0 && (
                  <span
                    className="author-card__compact-separator"
                    aria-hidden="true"
                  >
                    ·
                  </span>
                )}

                {
                  typeLabels[
                    type
                  ]
                }
              </span>
            ),
          )}

          {hasInterview && (
            <span className="author-card__compact-meta-item">
              {author.types.length >
                0 && (
                <span
                  className="author-card__compact-separator"
                  aria-hidden="true"
                >
                  ·
                </span>
              )}

              Беседа
            </span>
          )}
        </div>
      </Link>
    )
  }


  /* =========================
     FEATURED
     ========================= */

  if (
    variant ===
    'featured'
  ) {
    const showAllIssues =
      expandedIssueListAuthorId ===
      author.id


    const visibleIssues =
      showAllIssues
        ? authorIssues
        : authorIssues.slice(
            0,
            INITIAL_ISSUE_COUNT,
          )


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
                (
                  type,
                ) => (
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

        <section className="author-card__featured-section">
          <h2 className="author-card__featured-section-title">
            Bio
          </h2>

          <p className="author-card__featured-bio">
            {author.shortBio ??
              'Биография пока не добавлена.'}
          </p>
        </section>


        {/* ===================
            INTERVIEW
            =================== */}

        {hasInterview && (
          <section className="author-card__featured-section author-card__featured-interviews">
            <h2 className="author-card__featured-section-title">
              Беседа
            </h2>

            <div className="author-card__featured-interview-list">
              {authorInterviews
                .slice(
                  0,
                  2,
                )
                .map(
                  (
                    interview,
                  ) => {
                    const interviewIssue =
                      getIssueById(
                        interview.issueId,
                      )

                    return (
                      <div
                        key={
                          interview.id
                        }
                        className="author-card__featured-interview"
                      >
                        <p className="author-card__featured-interview-title">
                          {
                            interview.title
                          }
                        </p>

                        {interviewIssue && (
                          <Link
                            to={`/issues/${interviewIssue.slug}`}
                            className="author-card__featured-interview-link"
                          >
                            {
                              getIssueLabel(
                                interviewIssue,
                              )
                            }

                            {interviewIssue.accessType ===
                              'paid' && (
                              <span className="author-card__featured-interview-access">
                                Платный номер
                              </span>
                            )}
                          </Link>
                        )}
                      </div>
                    )
                  },
                )}
            </div>

            {authorInterviews.length >
              2 && (
              <p className="author-card__featured-more-note">
                Ещё бесед:{' '}
                {
                  authorInterviews.length -
                  2
                }
              </p>
            )}
          </section>
        )}


        {/* ===================
            PUBLICATIONS
            =================== */}

        <section className="author-card__featured-section">
          <h2 className="author-card__featured-section-title">
            Публикации в номерах:
          </h2>

          {authorIssues.length >
          0 ? (
            <>
              <div className="author-card__accordion">
                {visibleIssues.map(
                  (
                    issue,
                  ) => {
                    const issueKey =
                      makeIssueKey(
                        issue.id,
                      )

                    const isOpen =
                      openIssueKeys.has(
                        issueKey,
                      )

                    const issuePublications =
                      publications.filter(
                        (
                          publication,
                        ) =>
                          publication.issueId ===
                          issue.id,
                      )


                    const showAllPublications =
                      expandedPublicationKeys.has(
                        issueKey,
                      )


                    const visiblePublications =
                      showAllPublications
                        ? issuePublications
                        : issuePublications.slice(
                            0,
                            INITIAL_PUBLICATION_COUNT,
                          )


                    const panelId =
                      `author-${author.id}-issue-${issue.id}`


                    return (
                      <div
                        key={
                          issue.id
                        }
                        className={`
                          author-card__accordion-item
                          ${
                            isOpen
                              ? 'author-card__accordion-item--open'
                              : ''
                          }
                        `}
                      >
                        <div className="author-card__accordion-header">
                          <Link
                            to={`/issues/${issue.slug}`}
                            className="author-card__accordion-issue-link"
                          >
                            {
                              getIssueHeading(
                                issue,
                              )
                            }
                          </Link>

                          <button
                            type="button"
                            className="author-card__accordion-toggle"
                            aria-expanded={
                              isOpen
                            }
                            aria-controls={
                              panelId
                            }
                            aria-label={
                              isOpen
                                ? `Скрыть публикации номера ${getIssueLabel(
                                    issue,
                                  )}`
                                : `Показать публикации номера ${getIssueLabel(
                                    issue,
                                  )}`
                            }
                            onClick={() =>
                              toggleIssue(
                                issue.id,
                              )
                            }
                          >
                            <span
                              className="author-card__accordion-chevron"
                              aria-hidden="true"
                            >
                              ▾
                            </span>
                          </button>
                        </div>


                        {isOpen && (
                          <div
                            id={
                              panelId
                            }
                            className="author-card__accordion-panel"
                          >
                            {visiblePublications.length >
                            0 ? (
                              <ul className="author-card__accordion-publications">
                                {visiblePublications.map(
                                  (
                                    publication,
                                  ) => (
                                    <li
                                      key={
                                        publication.id
                                      }
                                      className="author-card__accordion-publication"
                                    >
                                      <span className="author-card__accordion-publication-title">
                                        {
                                          publication.title
                                        }
                                      </span>

                                      {publication.section && (
                                        <span className="author-card__accordion-publication-section">
                                          {
                                            publication.section
                                          }
                                        </span>
                                      )}
                                    </li>
                                  ),
                                )}
                              </ul>
                            ) : (
                              <p className="author-card__empty">
                                Публикации пока не
                                добавлены.
                              </p>
                            )}


                            {issuePublications.length >
                              INITIAL_PUBLICATION_COUNT && (
                              <button
                                type="button"
                                className="author-card__show-more"
                                onClick={() =>
                                  togglePublications(
                                    issue.id,
                                  )
                                }
                              >
                                {
                                  showAllPublications
                                    ? 'Скрыть'
                                    : 'Показать ещё публикации'
                                }
                              </button>
                            )}
                          </div>
                        )}
                      </div>
                    )
                  },
                )}
              </div>


              {authorIssues.length >
                INITIAL_ISSUE_COUNT && (
                <button
                  type="button"
                  className="author-card__show-more author-card__show-more--issues"
                  onClick={() =>
                    setExpandedIssueListAuthorId(
                      (
                        current,
                      ) =>
                        current ===
                        author.id
                          ? null
                          : author.id,
                    )
                  }
                >
                  {
                    showAllIssues
                      ? 'Показать меньше номеров'
                      : 'Показать ещё номера'
                  }
                </button>
              )}
            </>
          ) : (
            <p className="author-card__empty">
              Публикации пока не
              добавлены.
            </p>
          )}
        </section>
      </article>
    )
  }


  /* =========================
     ARCHIVE
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

        <div className="author-card__types">
          {author.types.map(
            (
              type,
            ) => (
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

          {hasInterview && (
            <span className="author-card__type author-card__type--interview">
              Беседа
            </span>
          )}
        </div>
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
              (
                issue,
              ) => (
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


      <Link
        to={authorUrl}
        className="author-card__details-link"
      >
        Страница автора →
      </Link>
    </article>
  )
}
