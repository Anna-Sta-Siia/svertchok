import {
  Link,
  Navigate,
  useParams,
} from 'react-router-dom'

import Showcase from '../components/Showcase'
import AuthorCard from '../components/AuthorCard'

import {
  getAuthorById,
  getAuthorsByIssueId,
  getContentItemsByAuthorId,
  getIssuesByAuthorId,
} from '../assets/data/selectors'

import './AuthorPage.css'


const MAX_RELATED_AUTHORS =
  16


const relatedAuthorsSessionSeed =
  Math.floor(
    Math.random() *
      2_147_483_647,
  )


function createStringSeed(
  value: string,
) {
  let hash =
    relatedAuthorsSessionSeed

  for (
    let index = 0;
    index < value.length;
    index += 1
  ) {
    hash =
      (
        hash * 31 +
        value.charCodeAt(
          index,
        )
      ) |
      0
  }

  return Math.abs(
    hash,
  )
}


function createSeededRandom(
  initialSeed: number,
) {
  let seed =
    initialSeed

  return () => {
    seed +=
      0x6d2b79f5

    let value =
      seed

    value =
      Math.imul(
        value ^
          (value >>> 15),
        value | 1,
      )

    value ^=
      value +
      Math.imul(
        value ^
          (value >>> 7),
        value | 61,
      )

    return (
      (
        value ^
        (value >>> 14)
      ) >>>
      0
    ) /
      4_294_967_296
  }
}


function pickRelatedAuthors<
  T,
>(
  items: T[],
  key: string,
  limit =
    MAX_RELATED_AUTHORS,
) {
  if (
    items.length <=
    limit
  ) {
    return items
  }


  const shuffled =
    [
      ...items,
    ]


  const random =
    createSeededRandom(
      createStringSeed(
        key,
      ),
    )


  for (
    let index =
      shuffled.length - 1;
    index > 0;
    index -= 1
  ) {
    const randomIndex =
      Math.floor(
        random() *
          (
            index +
            1
          ),
      )


    const currentItem =
      shuffled[
        index
      ]


    shuffled[
      index
    ] =
      shuffled[
        randomIndex
      ]


    shuffled[
      randomIndex
    ] =
      currentItem
  }


  return shuffled.slice(
    0,
    limit,
  )
}


export default function AuthorPage() {
  const {
    authorId,
  } = useParams<{
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


  const publications =
    getContentItemsByAuthorId(
      author.id,
    )


  const authorIssues =
    getIssuesByAuthorId(
      author.id,
    )


  const latestAuthorIssue =
    authorIssues[0]


  const allSameIssueAuthors =
    latestAuthorIssue
      ? getAuthorsByIssueId(
          latestAuthorIssue.id,
          author.id,
        )
      : []


  const sameIssueAuthors =
    latestAuthorIssue
      ? pickRelatedAuthors(
          allSameIssueAuthors,
          `${author.id}-${latestAuthorIssue.id}`,
          MAX_RELATED_AUTHORS,
        )
      : []


  const hasRelatedAuthors =
    Boolean(
      latestAuthorIssue &&
      sameIssueAuthors.length >
        0,
    )


  return (
    <section
      className={`
        author-page
        ${
          hasRelatedAuthors
            ? ''
            : 'author-page--single'
        }
      `}
    >
      <Showcase
        layout="author"

        featuredHeading={
          <h2 className="showcase__heading-title">
            Наш автор
          </h2>
        }

        secondaryHeading={
          hasRelatedAuthors &&
          latestAuthorIssue
            ? (
              <h2 className="showcase__heading-title">
                Также в номере{' '}
                {
                  latestAuthorIssue.monthLabel
                }{' '}
                {
                  latestAuthorIssue.year
                }
              </h2>
            )
            : undefined
        }

        featured={
          <div className="author-page__featured">
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
          </div>
        }

        secondary={
          hasRelatedAuthors
            ? (
              <div className="author-page__authors-grid">
                {sameIssueAuthors.map(
                  (
                    relatedAuthor,
                  ) => (
                    <AuthorCard
                      key={
                        relatedAuthor.id
                      }
                      author={
                        relatedAuthor
                      }
                      variant="compact"
                    />
                  ),
                )}
              </div>
            )
            : null
        }
      />


      <Link
        to="/authors"
        className="author-page__back"
      >
        ← Все авторы
      </Link>
    </section>
  )
}
