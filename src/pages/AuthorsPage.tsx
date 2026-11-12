import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import {
  useSearchParams,
} from 'react-router-dom'

import AuthorCard from '../components/AuthorCard'
import CustomSelect from '../components/filters/CustomSelect'
import FilterPanel from '../components/filters/FilterPanel'
import Button from '../components/ui/Button'

import {
  authors,
} from '../assets/data/authors'

import {
  publishedIssues,
} from '../assets/data/issues'

import {
  getIssuesByAuthorId,
} from '../assets/data/selectors'

import './AuthorsPage.css'


type TypeFilter =
  | 'all'
  | 'poet'
  | 'prose'


type LetterFilter =
  | 'all'
  | 'А-Д'
  | 'Е-К'
  | 'Л-П'
  | 'Р-Я'


const LOAD_MORE_STEP =
  10


const russianAlphabet =
  'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'


const letterRanges: Record<
  Exclude<
    LetterFilter,
    'all'
  >,
  [
    string,
    string,
  ]
> = {
  'А-Д': [
    'А',
    'Д',
  ],

  'Е-К': [
    'Е',
    'К',
  ],

  'Л-П': [
    'Л',
    'П',
  ],

  'Р-Я': [
    'Р',
    'Я',
  ],
}


/*
 * Première option =
 * libellé du filtre.
 *
 * Comme ça, dans l'état initial,
 * les boutons affichent directement :
 *
 * По жанру
 * По алфавиту
 * По номеру
 */

const typeOptions = [
  {
    value:
      'all',

    label:
      'По жанру',
  },

  {
    value:
      'poet',

    label:
      'Поэзия',
  },

  {
    value:
      'prose',

    label:
      'Проза',
  },
]


const letterOptions = [
  {
    value:
      'all',

    label:
      'По алфавиту',
  },

  {
    value:
      'А-Д',

    label:
      'А–Д',
  },

  {
    value:
      'Е-К',

    label:
      'Е–К',
  },

  {
    value:
      'Л-П',

    label:
      'Л–П',
  },

  {
    value:
      'Р-Я',

    label:
      'Р–Я',
  },
]


function getInitialVisibleCount() {
  if (
    typeof window ===
    'undefined'
  ) {
    return 8
  }


  const width =
    window.innerWidth


  if (
    width <=
    640
  ) {
    return 4
  }


  if (
    width <=
    900
  ) {
    return 4
  }


  if (
    width <=
    1200
  ) {
    return 6
  }


  return 8
}


export default function AuthorsPage() {
  const [
    searchParams,
    setSearchParams,
  ] = useSearchParams()


  const [
    selectedType,
    setSelectedType,
  ] = useState<TypeFilter>(
    'all',
  )


  const [
    selectedLetters,
    setSelectedLetters,
  ] = useState<LetterFilter>(
    'all',
  )


  const [
    initialVisibleCount,
    setInitialVisibleCount,
  ] = useState(
    getInitialVisibleCount,
  )


  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    getInitialVisibleCount,
  )


  const issueFromUrl =
    searchParams.get(
      'issue',
    )


  const selectedIssue =
    issueFromUrl &&
    publishedIssues.some(
      (issue) =>
        issue.id ===
        issueFromUrl,
    )
      ? issueFromUrl
      : 'all'


  /* =========================
     RESPONSIVE INITIAL COUNT
     ========================= */

  useEffect(() => {
    function handleResize() {
      const nextCount =
        getInitialVisibleCount()


      setInitialVisibleCount(
        nextCount,
      )


      setVisibleCount(
        (current) =>
          Math.max(
            current,
            nextCount,
          ),
      )
    }


    window.addEventListener(
      'resize',
      handleResize,
    )


    return () => {
      window.removeEventListener(
        'resize',
        handleResize,
      )
    }
  }, [])


  /* =========================
     ISSUES OPTIONS
     ========================= */

  const sortedIssues =
    useMemo(
      () =>
        [
          ...publishedIssues,
        ].sort(
          (
            a,
            b,
          ) =>
            b.year -
              a.year ||
            b.month -
              a.month,
        ),
      [],
    )


  const issueOptions =
    useMemo(
      () => [
        {
          value:
            'all',

          label:
            'По номеру',
        },

        ...sortedIssues.map(
          (issue) => ({
            value:
              issue.id,

            label:
              `№${String(
                issue.month,
              ).padStart(
                2,
                '0',
              )} · ${issue.year}`,
          }),
        ),
      ],
      [
        sortedIssues,
      ],
    )


  function setIssueFilter(
    value: string,
  ) {
    const nextSearchParams =
      new URLSearchParams(
        searchParams,
      )


    if (
      value ===
      'all'
    ) {
      nextSearchParams.delete(
        'issue',
      )
    } else {
      nextSearchParams.set(
        'issue',
        value,
      )
    }


    setSearchParams(
      nextSearchParams,
    )
  }


  /* =========================
     LETTER RANGE
     ========================= */

  function matchesLetterRange(
    lastName: string,
    range: LetterFilter,
  ) {
    if (
      range ===
      'all'
    ) {
      return true
    }


    const firstLetter =
      lastName
        .trim()
        .charAt(0)
        .toUpperCase()


    const [
      startLetter,
      endLetter,
    ] =
      letterRanges[
        range
      ]


    const letterIndex =
      russianAlphabet.indexOf(
        firstLetter,
      )


    const startIndex =
      russianAlphabet.indexOf(
        startLetter,
      )


    const endIndex =
      russianAlphabet.indexOf(
        endLetter,
      )


    if (
      letterIndex ===
      -1
    ) {
      return false
    }


    return (
      letterIndex >=
        startIndex &&
      letterIndex <=
        endIndex
    )
  }


  /* =========================
     FILTERED AUTHORS
     ========================= */

  const filteredAuthors =
    useMemo(
      () =>
        authors
          .filter(
            (author) => {
              const matchesType =
                selectedType ===
                  'all' ||
                author.types.includes(
                  selectedType,
                )


              const matchesLetters =
                matchesLetterRange(
                  author.lastName,
                  selectedLetters,
                )


              const authorIssues =
                getIssuesByAuthorId(
                  author.id,
                )


              const matchesIssue =
                selectedIssue ===
                  'all' ||
                authorIssues.some(
                  (issue) =>
                    issue.id ===
                    selectedIssue,
                )


              return (
                matchesType &&
                matchesLetters &&
                matchesIssue
              )
            },
          )
          .sort(
            (
              a,
              b,
            ) => {
              const lastNameComparison =
                a.lastName.localeCompare(
                  b.lastName,
                  'ru',
                  {
                    sensitivity:
                      'base',
                  },
                )


              if (
                lastNameComparison !==
                0
              ) {
                return (
                  lastNameComparison
                )
              }


              return (
                a.firstName.localeCompare(
                  b.firstName,
                  'ru',
                  {
                    sensitivity:
                      'base',
                  },
                )
              )
            },
          ),
      [
        selectedType,
        selectedLetters,
        selectedIssue,
      ],
    )


  /*
   * Dès qu'un filtre change,
   * on revient à la première portion.
   */

  useEffect(() => {
    setVisibleCount(
      initialVisibleCount,
    )
  }, [
    selectedType,
    selectedLetters,
    selectedIssue,
    initialVisibleCount,
  ])


  const visibleAuthors =
    filteredAuthors.slice(
      0,
      visibleCount,
    )


  const remainingAuthors =
    Math.max(
      filteredAuthors.length -
        visibleAuthors.length,
      0,
    )


  const nextAuthorsCount =
    Math.min(
      LOAD_MORE_STEP,
      remainingAuthors,
    )


  const hasMoreAuthors =
    remainingAuthors >
    0


  /* =========================
     RESET
     ========================= */

  const hasActiveFilters =
    selectedType !==
      'all' ||
    selectedLetters !==
      'all' ||
    selectedIssue !==
      'all'


  function resetFilters() {
    setSelectedType(
      'all',
    )

    setSelectedLetters(
      'all',
    )

    setIssueFilter(
      'all',
    )
  }


  function showMoreAuthors() {
    setVisibleCount(
      (current) =>
        Math.min(
          current +
            LOAD_MORE_STEP,
          filteredAuthors.length,
        ),
    )
  }


  return (
    <section className="authors-page">

      {/* =====================
          HEADER
          ===================== */}

      <header className="authors-page__header">
        <p className="authors-page__intro">
          Поэты и прозаики,
          чьи произведения встречаются
          на страницах нашего альманаха.
        </p>
      </header>


      {/* =====================
          FILTERS
          ===================== */}

      <FilterPanel
        ariaLabel="Фильтры авторов"
        onReset={
          resetFilters
        }
        canReset={
          hasActiveFilters
        }
      >
        <CustomSelect
          id="authors-type-filter"
          label="По жанру"
          value={
            selectedType
          }
          options={
            typeOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedType(
              value as
                TypeFilter,
            )
          }
        />


        <CustomSelect
          id="authors-letter-filter"
          label="По алфавиту"
          value={
            selectedLetters
          }
          options={
            letterOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedLetters(
              value as
                LetterFilter,
            )
          }
        />


        <CustomSelect
          id="authors-issue-filter"
          label="По номеру"
          value={
            selectedIssue
          }
          options={
            issueOptions
          }
          onChange={
            setIssueFilter
          }
        />
      </FilterPanel>


      {/* =====================
          RESULTS
          ===================== */}

      <div className="authors-page__results">
        <p className="authors-page__count">
          Авторов:{' '}

          <strong>
            {
              filteredAuthors.length
            }
          </strong>
        </p>
      </div>


      {/* =====================
          AUTHORS
          ===================== */}

      {filteredAuthors.length >
      0 ? (
        <>
          <div className="authors-page__grid">
            {visibleAuthors.map(
              (author) => (
                <AuthorCard
                  key={
                    author.id
                  }
                  author={
                    author
                  }
                  authorIssues={
                    getIssuesByAuthorId(
                      author.id,
                    )
                  }
                />
              ),
            )}
          </div>


          {hasMoreAuthors && (
            <div className="authors-page__load-more">
              <Button
                variant="secondary"
                size="medium"
                type="button"
                onClick={
                  showMoreAuthors
                }
              >
                Показать ещё{' '}
                {
                  nextAuthorsCount
                }
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="authors-page__empty">
          <p>
            По выбранным критериям
            авторов пока нет.
          </p>

          <Button
            variant="secondary"
            size="medium"
            type="button"
            onClick={
              resetFilters
            }
          >
            Показать всех авторов
          </Button>
        </div>
      )}
    </section>
  )
}
