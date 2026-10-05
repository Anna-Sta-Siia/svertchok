import { useState } from 'react'

import AuthorCard from '../components/AuthorCard'

import { authors } from '../assets/data/authors'
import {
  issues,
  type Issue,
} from '../assets/data/issues'

import { contentItems } from '../assets/data/contentItems'

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

const russianAlphabet =
  'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ'

const letterRanges: Record<
  Exclude<LetterFilter, 'all'>,
  [string, string]
> = {
  'А-Д': ['А', 'Д'],
  'Е-К': ['Е', 'К'],
  'Л-П': ['Л', 'П'],
  'Р-Я': ['Р', 'Я'],
}

const typeFilters: {
  value: TypeFilter
  label: string
}[] = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'poet',
    label: 'Поэзия',
  },
  {
    value: 'prose',
    label: 'Проза',
  },
]

const letterFilters: {
  value: LetterFilter
  label: string
}[] = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'А-Д',
    label: 'А–Д',
  },
  {
    value: 'Е-К',
    label: 'Е–К',
  },
  {
    value: 'Л-П',
    label: 'Л–П',
  },
  {
    value: 'Р-Я',
    label: 'Р–Я',
  },
]

export default function AuthorsPage() {
  const [
    selectedType,
    setSelectedType,
  ] = useState<TypeFilter>('all')

  const [
    selectedLetters,
    setSelectedLetters,
  ] = useState<LetterFilter>('all')

  const [
    selectedIssue,
    setSelectedIssue,
  ] = useState('all')

  /* =========================
     ISSUES
     ========================= */

  const sortedIssues = [...issues].sort(
    (a, b) =>
      b.year - a.year ||
      b.month - a.month,
  )

  /* =========================
     AUTHORS → ISSUES
     ========================= */

  function getAuthorIssues(
    authorId: string,
  ): Issue[] {
    const issueIds = new Set<string>()

    contentItems.forEach((item) => {
      if (
        item.authorId === authorId
      ) {
        issueIds.add(item.issueId)
      }
    })

    return sortedIssues.filter(
      (issue) =>
        issueIds.has(issue.id),
    )
  }

  /* =========================
     LETTER FILTER
     ========================= */

  function matchesLetterRange(
    lastName: string,
    range: LetterFilter,
  ) {
    if (range === 'all') {
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
    ] = letterRanges[range]

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

    /*
     * Si jamais un nom ne commence
     * pas par une lettre cyrillique,
     * on ne l'affiche pas dans un
     * groupe alphabétique précis.
     */
    if (letterIndex === -1) {
      return false
    }

    return (
      letterIndex >= startIndex &&
      letterIndex <= endIndex
    )
  }

  /* =========================
     FILTER + SORT
     ========================= */

  const filteredAuthors = authors
    .filter((author) => {
      const matchesType =
        selectedType === 'all' ||
        author.types.includes(
          selectedType,
        )

      const matchesLetters =
        matchesLetterRange(
          author.lastName,
          selectedLetters,
        )

      const authorIssues =
        getAuthorIssues(
          author.id,
        )

      const matchesIssue =
        selectedIssue === 'all' ||
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
    })
    .sort((a, b) =>
      a.lastName.localeCompare(
        b.lastName,
        'ru',
        {
          sensitivity: 'base',
        },
      ),
    )

  /* =========================
     RESET
     ========================= */

  const hasActiveFilters =
    selectedType !== 'all' ||
    selectedLetters !== 'all' ||
    selectedIssue !== 'all'

  function resetFilters() {
    setSelectedType('all')
    setSelectedLetters('all')
    setSelectedIssue('all')
  }

  return (
    <section className="authors-page">
      {/* =====================
          INTRO
          ===================== */}

      <header className="authors-page__header">
        <p className="authors-page__eyebrow">
          Люди «Сверчка»
        </p>

        <h1 className="authors-page__title">
          Авторы «Сверчка»
        </h1>

        <p className="authors-page__intro">
          Поэты и прозаики,
          чьи произведения встречаются
          на страницах нашего альманаха.
        </p>
      </header>

      {/* =====================
          FILTERS
          ===================== */}

      <div className="authors-page__filters">
        {/* TYPE */}

        <div className="authors-page__filter-group">
          <p className="authors-page__filter-label">
            По жанру
          </p>

          <div className="authors-page__filter-options">
            {typeFilters.map(
              (filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={
                    selectedType ===
                    filter.value
                      ? 'authors-page__filter-button authors-page__filter-button--active'
                      : 'authors-page__filter-button'
                  }
                  aria-pressed={
                    selectedType ===
                    filter.value
                  }
                  onClick={() =>
                    setSelectedType(
                      filter.value,
                    )
                  }
                >
                  {filter.label}
                </button>
              ),
            )}
          </div>
        </div>

        {/* ALPHABET */}

        <div className="authors-page__filter-group">
          <p className="authors-page__filter-label">
            По алфавиту
          </p>

          <div className="authors-page__filter-options">
            {letterFilters.map(
              (filter) => (
                <button
                  key={filter.value}
                  type="button"
                  className={
                    selectedLetters ===
                    filter.value
                      ? 'authors-page__filter-button authors-page__filter-button--active'
                      : 'authors-page__filter-button'
                  }
                  aria-pressed={
                    selectedLetters ===
                    filter.value
                  }
                  onClick={() =>
                    setSelectedLetters(
                      filter.value,
                    )
                  }
                >
                  {filter.label}
                </button>
              ),
            )}
          </div>
        </div>

        {/* ISSUE */}

        <div className="authors-page__filter-group authors-page__filter-group--issue">
          <label
            htmlFor="authors-issue-filter"
            className="authors-page__filter-label"
          >
            По номеру
          </label>

          <div className="authors-page__select-wrap">
            <select
              id="authors-issue-filter"
              value={selectedIssue}
              onChange={(event) =>
                setSelectedIssue(
                  event.target.value,
                )
              }
            >
              <option value="all">
                Все номера
              </option>

              {sortedIssues.map(
                (issue) => (
                  <option
                    key={issue.id}
                    value={issue.id}
                  >
                    №
                    {String(
                      issue.month,
                    ).padStart(
                      2,
                      '0',
                    )}
                    {' · '}
                    {issue.year}
                  </option>
                ),
              )}
            </select>

            <span
              className="authors-page__select-arrow"
              aria-hidden="true"
            >
              ▾
            </span>
          </div>
        </div>
      </div>

      {/* =====================
          RESULTS INFO
          ===================== */}

      <div className="authors-page__results">
        <p className="authors-page__count">
          Авторов:{' '}
          <strong>
            {filteredAuthors.length}
          </strong>
        </p>

        {hasActiveFilters && (
          <button
            type="button"
            className="authors-page__reset"
            onClick={resetFilters}
          >
            Сбросить фильтры
          </button>
        )}
      </div>

      {/* =====================
          AUTHORS
          ===================== */}

      {filteredAuthors.length > 0 ? (
        <div className="authors-page__grid">
          {filteredAuthors.map(
            (author) => (
              <AuthorCard
                key={author.id}
                author={author}
                authorIssues={
                  getAuthorIssues(
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
            onClick={resetFilters}
          >
            Показать всех авторов
          </button>
        </div>
      )}
    </section>
  )
}