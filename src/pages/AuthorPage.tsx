import {
  useLayoutEffect,
  useRef,
  useState,
} from 'react'

import {
  Navigate,
  useParams,
} from 'react-router-dom'

import Showcase from '../components/Showcase'
import AuthorCard from '../components/AuthorCard'
import Button from '../components/ui/Button'

import {
  getAuthorById,
  getAuthorsByIssueId,
  getContentItemsByAuthorId,
  getIssuesByAuthorId,
} from '../assets/data/selectors'

import './AuthorPage.css'


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


function shuffleRelatedAuthors<
  T,
>(
  items: T[],
  key: string,
) {
  if (
    items.length <=
    1
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


  return shuffled
}


export default function AuthorPage() {
  const {
    authorId,
  } = useParams<{
    authorId: string
  }>()


  const featuredCardRef =
    useRef<HTMLDivElement>(
      null,
    )


  const authorsGridRef =
    useRef<HTMLDivElement>(
      null,
    )


  /*
   * Le ref est placé sur le wrapper
   * du Button tertiary.
   *
   * Button n'utilise pas forwardRef,
   * donc on mesure simplement le div.
   */

  const issueAuthorsActionRef =
    useRef<HTMLDivElement>(
      null,
    )


  const [
    visibleAuthorCount,
    setVisibleAuthorCount,
  ] = useState(4)


  /* =========================
     DATA
     ========================= */

  const author =
    authorId
      ? getAuthorById(
          authorId,
        )
      : undefined


  const publications =
    author
      ? getContentItemsByAuthorId(
          author.id,
        )
      : []


  const authorIssues =
    author
      ? getIssuesByAuthorId(
          author.id,
        )
      : []


  const latestAuthorIssue =
    authorIssues[0]


  const allSameIssueAuthors =
    author &&
    latestAuthorIssue
      ? getAuthorsByIssueId(
          latestAuthorIssue.id,
          author.id,
        )
      : []


  const sameIssueAuthors =
    author &&
    latestAuthorIssue
      ? shuffleRelatedAuthors(
          allSameIssueAuthors,
          `${author.id}-${latestAuthorIssue.id}`,
        )
      : []


  const hasRelatedAuthors =
    Boolean(
      latestAuthorIssue &&
      sameIssueAuthors.length >
        0,
    )


  const visibleIssueAuthors =
    sameIssueAuthors.slice(
      0,
      visibleAuthorCount,
    )


  /* =========================
     MATCH SECONDARY HEIGHT
     ========================= */

  useLayoutEffect(() => {
    if (
      !hasRelatedAuthors
    ) {
      return
    }


    const featuredCard =
      featuredCardRef.current

    const authorsGrid =
      authorsGridRef.current

    const issueAuthorsAction =
      issueAuthorsActionRef.current


    if (
      !featuredCard ||
      !authorsGrid ||
      !issueAuthorsAction
    ) {
      return
    }


    const updateVisibleAuthors =
      () => {
        const cards =
          Array.from(
            authorsGrid.querySelectorAll<HTMLElement>(
              '.author-card--compact',
            ),
          )


        if (
          cards.length ===
          0
        ) {
          return
        }


        const cardHeight =
          Math.max(
            ...cards.map(
              (card) =>
                card
                  .getBoundingClientRect()
                  .height,
            ),
          )


        if (
          cardHeight <=
          0
        ) {
          return
        }


        const gridStyles =
          window.getComputedStyle(
            authorsGrid,
          )


        const columns =
          Number.parseInt(
            gridStyles.getPropertyValue(
              '--authors-columns',
            ),
            10,
          ) ||
          1


        const rowGap =
          Number.parseFloat(
            gridStyles.rowGap,
          ) ||
          0


        /*
         * Une fois le Showcase empilé,
         * la colonne droite n'a plus besoin
         * de suivre la hauteur de la
         * featured card.
         *
         * On garde deux rangées de cartes.
         */

        if (
          window.matchMedia(
            '(max-width: 800px)',
          ).matches
        ) {
          const nextCount =
            Math.min(
              sameIssueAuthors.length,
              columns *
                2,
            )


          setVisibleAuthorCount(
            nextCount,
          )

          return
        }


        const actionStyles =
          window.getComputedStyle(
            issueAuthorsAction,
          )


        const actionHeight =
          issueAuthorsAction
            .getBoundingClientRect()
            .height


        const actionMarginTop =
          Number.parseFloat(
            actionStyles.marginTop,
          ) ||
          0


        const featuredHeight =
          featuredCard
            .getBoundingClientRect()
            .height


        const availableGridHeight =
          Math.max(
            cardHeight,
            featuredHeight -
              actionHeight -
              actionMarginTop,
          )


        const rows =
          Math.max(
            1,
            Math.floor(
              (
                availableGridHeight +
                rowGap
              ) /
                (
                  cardHeight +
                  rowGap
                ),
            ),
          )


        const nextCount =
          Math.min(
            sameIssueAuthors.length,
            rows *
              columns,
          )


        setVisibleAuthorCount(
          nextCount,
        )
      }


    updateVisibleAuthors()


    const observer =
      new ResizeObserver(
        updateVisibleAuthors,
      )


    observer.observe(
      featuredCard,
    )

    observer.observe(
      authorsGrid,
    )

    observer.observe(
      issueAuthorsAction,
    )


    return () => {
      observer.disconnect()
    }
  }, [
    hasRelatedAuthors,
    sameIssueAuthors.length,
    author?.id,
    latestAuthorIssue?.id,
  ])


  /* =========================
     NOT FOUND
     ========================= */

  if (
    !authorId ||
    !author
  ) {
    return (
      <Navigate
        to="/authors"
        replace
      />
    )
  }


  /* =========================
     PAGE
     ========================= */

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

        /* ===================
           FEATURED HEADING
           =================== */

        featuredHeading={
          <h2 className="showcase__heading-title">
            Наш автор
          </h2>
        }


        /* ===================
           SECONDARY HEADING
           =================== */

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


        /* ===================
           FEATURED
           =================== */

        featured={
          <div className="author-page__featured">

            <div
              ref={
                featuredCardRef
              }
              className="author-page__featured-card"
            >
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


            {/* TERTIARY:
                navigation vers AuthorsPage */}

            <div className="author-page__all-authors-action">
              <Button
                variant="tertiary"
                to="/authors"
              >
                ← Все авторы
              </Button>
            </div>

          </div>
        }


        /* ===================
           SECONDARY
           =================== */

        secondary={
          hasRelatedAuthors &&
          latestAuthorIssue
            ? (
              <div className="author-page__secondary">

                <div
                  ref={
                    authorsGridRef
                  }
                  className="author-page__authors-grid"
                >
                  {visibleIssueAuthors.map(
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


                {/* TERTIARY:
                    navigation vers tous
                    les auteurs du numéro */}

                <div
                  ref={
                    issueAuthorsActionRef
                  }
                  className="author-page__issue-authors-action"
                >
                  <Button
                    variant="tertiary"
                    to={`/authors?issue=${latestAuthorIssue.id}`}
                  >
                    Все авторы этого номера →
                  </Button>
                </div>

              </div>
            )
            : null
        }
      />
    </section>
  )
}