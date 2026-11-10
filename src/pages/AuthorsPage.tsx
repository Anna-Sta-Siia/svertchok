import {
  useMemo,
  useState,
} from 'react'

import {
  useSearchParams,
} from 'react-router-dom'

import AuthorCard from '../components/AuthorCard'
import CustomSelect from '../components/filters/CustomSelect'
import FilterPanel, {
  type SortDirection,
} from '../components/filters/FilterPanel'

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
  | 'other'

type LetterFilter =
  | 'all'
  | 'А-Д'
  | 'Е-К'
  | 'Л-П'
  | 'Р-Я'


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


const typeOptions = [
  {
    value:
      'all',

    label:
      'Все',
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

  {
    value:
      'other',

    label:
      'Другое',
  },
]


const letterOptions = [
  {
    value:
      'all',

    label:
      'Все',
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
    sortDirection,
    setSortDirection,
  ] = useState<SortDirection>(
    'asc',
  )


  /* =========================
     ISSUE FROM URL
     ========================= */

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
     ISSUE OPTIONS
     ========================= */

  const sortedIssues =
    useMemo(
      () =>
        [
          ...publishedIssues,
        ].sort(
          (a, b) =>
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
            'Все номера',
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


  /* =========================
     ISSUE FILTER
     ========================= */

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
     LETTER FILTER
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
        (a, b) => {
          const direction =
            sortDirection ===
              'asc'
              ? 1
              : -1


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
              lastNameComparison *
              direction
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
            ) *
            direction
          )
        },
      )


  /* =========================
     RESET
     ========================= */

  const hasActiveFilters =
    selectedType !==
      'all' ||
    selectedLetters !==
      'all' ||
    selectedIssue !==
      'all' ||
    sortDirection !==
      'asc'


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

    setSortDirection(
      'asc',
    )
  }


  /* =========================
     SORT
     ========================= */

  function toggleSortDirection() {
    setSortDirection(
      (
        current,
      ) =>
        current ===
          'asc'
          ? 'desc'
          : 'asc',
    )
  }


  /* =========================
     PAGE
     ========================= */

  return (
    <section className="authors-page">

      {/* =====================
          HEADER
          ===================== */}

      <header className="authors-page__header">
        <p className="authors-page__eyebrow">
          Люди «Сверчка»
        </p>

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
        sortLabel="По алфавиту"
        sortDirection={
          sortDirection
        }
        onToggleSort={
          toggleSortDirection
        }
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
        <div className="authors-page__grid">
          {filteredAuthors.map(
            (
              author,
            ) => (
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
      ) : (
        <div className="authors-page__empty">
          <p>
            По выбранным критериям
            авторов пока нет.
          </p>

          <button
            type="button"
            className="authors-page__reset"
            onClick={
              resetFilters
            }
          >
            Показать всех авторов
          </button>
        </div>
      )}

    </section>
  )
}