import {
  Link,
  Navigate,
  useParams,
} from 'react-router-dom'

import AuthorCard from '../components/AuthorCard'
import RelatedAuthors from '../components/RelatedAuthors'

import {
  getAuthorById,
  getAuthorsByIssueId,
  getContentItemsByAuthorId,
  getIssuesByAuthorId,
} from '../assets/data/selectors'

import './AuthorPage.css'


export default function AuthorPage() {
  const {
    authorId,
  } = useParams<{
    authorId: string
  }>()


  /* =========================
     AUTHOR
     ========================= */

  if (!authorId) {
    return (
      <Navigate
        to="/authors"
        replace
      />
    )
  }


  const author =
    getAuthorById(
      authorId,
    )


  if (!author) {
    return (
      <Navigate
        to="/authors"
        replace
      />
    )
  }


  /* =========================
     AUTHOR CONTENT
     ========================= */

  const publications =
    getContentItemsByAuthorId(
      author.id,
    )


  const authorIssues =
    getIssuesByAuthorId(
      author.id,
    )


  /* =========================
     AUTHORS FROM SAME ISSUE
     ========================= */

  const latestAuthorIssue =
    authorIssues[0]


  const sameIssueAuthors =
    latestAuthorIssue
      ? getAuthorsByIssueId(
          latestAuthorIssue.id,
          author.id,
        ).slice(
          0,
          3,
        )
      : []


  return (
    <section className="author-page">

      {/* =====================
          BACK
          ===================== */}

      <Link
        to="/authors"
        className="author-page__back"
      >
        ← Все авторы
      </Link>


      {/* =====================
          SHOWCASE
          ===================== */}

      <div
        className={`
          author-page__showcase
          ${
            sameIssueAuthors.length === 0
              ? 'author-page__showcase--single'
              : ''
          }
        `}
      >

        {/* ===================
            RELATED AUTHORS
            =================== */}

        {latestAuthorIssue &&
          sameIssueAuthors.length >
            0 && (
          <aside className="author-page__related">
            <RelatedAuthors
              title={`Также в номере ${latestAuthorIssue.monthLabel} ${latestAuthorIssue.year}`}
              authors={
                sameIssueAuthors
              }
            />
          </aside>
        )}


        {/* ===================
            FEATURED AUTHOR
            =================== */}

        <main className="author-page__featured">
          <AuthorCard
            author={
              author
            }
            authorIssues={
              authorIssues
            }
            publications={
              publications
            }
            variant="featured"
          />
        </main>
      </div>
    </section>
  )
}