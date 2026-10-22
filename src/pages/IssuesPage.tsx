import {
  useMemo,
  useState,
} from 'react'

import IssueCard from '../components/IssueCard'

import {
  publishedIssues,
} from '../assets/data/issues'

import './IssuesPage.css'

type YearFilter =
  | 'all'
  | number

type AccessFilter =
  | 'all'
  | 'free'
  | 'paid'

type SortOrder =
  | 'newest'
  | 'oldest'

export default function IssuesPage() {
  const [
    selectedYear,
    setSelectedYear,
  ] = useState<YearFilter>('all')

  const [
    selectedAccess,
    setSelectedAccess,
  ] = useState<AccessFilter>('all')

  const [
    sortOrder,
    setSortOrder,
  ] = useState<SortOrder>('newest')


  /* =========================
     YEARS
     ========================= */

  const years = useMemo(
    () =>
      Array.from(
        new Set(
          publishedIssues.map(
            (issue) =>
              issue.year,
          ),
        ),
      ).sort(
        (a, b) =>
          b - a,
      ),
    [],
  )


  /* =========================
     FILTERED ISSUES
     ========================= */

  const filteredIssues =
    useMemo(() => {
      const result =
        publishedIssues.filter(
          (issue) => {
            const matchesYear =
              selectedYear ===
                'all' ||
              issue.year ===
                selectedYear

            const matchesAccess =
              selectedAccess ===
                'all' ||
              issue.accessType ===
                selectedAccess

            return (
              matchesYear &&
              matchesAccess
            )
          },
        )

      return [
        ...result,
      ].sort(
        (a, b) => {
          const direction =
            sortOrder ===
            'newest'
              ? -1
              : 1

          if (
            a.year !==
            b.year
          ) {
            return (
              a.year -
              b.year
            ) * direction
          }

          return (
            a.month -
            b.month
          ) * direction
        },
      )
    }, [
      selectedYear,
      selectedAccess,
      sortOrder,
    ])


  /* =========================
     RESET
     ========================= */

  const hasActiveFilters =
    selectedYear !==
      'all' ||
    selectedAccess !==
      'all' ||
    sortOrder !==
      'newest'

  function resetFilters() {
    setSelectedYear(
      'all',
    )

    setSelectedAccess(
      'all',
    )

    setSortOrder(
      'newest',
    )
  }


  return (
    <section className="issues-page">

      {/* =====================
          INTRO
          ===================== */}

      <header className="issues-page__intro">
        <p className="issues-page__eyebrow">
          Архив «Сверчка»
        </p>
        <p className="issues-page__description">
          Здесь собраны все выпуски
          литературного альманаха
          «Сверчок».
          Выбирайте номер,
          знакомьтесь с его темой
          и отправляйтесь читать.
        </p>
      </header>


      {/* =====================
          FILTERS
          ===================== */}

      <section
        className="issues-page__filters"
        aria-label="Фильтры номеров"
      >
        <div className="issues-page__filter">
          <label
            htmlFor="issues-year"
            className="issues-page__filter-label"
          >
            Год
          </label>

          <select
            id="issues-year"
            className="issues-page__select"
            value={
              selectedYear
            }
            onChange={(
              event,
            ) => {
              const value =
                event.target
                  .value

              setSelectedYear(
                value ===
                  'all'
                  ? 'all'
                  : Number(
                      value,
                    ),
              )
            }}
          >
            <option value="all">
              Все годы
            </option>

            {years.map(
              (year) => (
                <option
                  key={year}
                  value={year}
                >
                  {year}
                </option>
              ),
            )}
          </select>
        </div>


        <div className="issues-page__filter">
          <label
            htmlFor="issues-access"
            className="issues-page__filter-label"
          >
            Доступ
          </label>

          <select
            id="issues-access"
            className="issues-page__select"
            value={
              selectedAccess
            }
            onChange={(
              event,
            ) =>
              setSelectedAccess(
                event.target
                  .value as
                  AccessFilter,
              )
            }
          >
            <option value="all">
              Все номера
            </option>

            <option value="free">
              Бесплатные
            </option>

            <option value="paid">
              Платные
            </option>
          </select>
        </div>


        <div className="issues-page__filter">
          <label
            htmlFor="issues-sort"
            className="issues-page__filter-label"
          >
            Порядок
          </label>

          <select
            id="issues-sort"
            className="issues-page__select"
            value={
              sortOrder
            }
            onChange={(
              event,
            ) =>
              setSortOrder(
                event.target
                  .value as
                  SortOrder,
              )
            }
          >
            <option value="newest">
              Сначала новые
            </option>

            <option value="oldest">
              Сначала старые
            </option>
          </select>
        </div>


        {hasActiveFilters && (
          <button
            type="button"
            className="issues-page__reset"
            onClick={
              resetFilters
            }
          >
            Сбросить
          </button>
        )}
      </section>


      {/* =====================
          RESULTS INFO
          ===================== */}

      <div className="issues-page__results-heading">
        <p className="issues-page__count">
          Найдено:{' '}
          <strong>
            {
              filteredIssues.length
            }
          </strong>
        </p>
      </div>


      {/* =====================
          ARCHIVE
          ===================== */}

      {filteredIssues.length >
      0 ? (
        <div className="issues-page__grid">
          {filteredIssues.map(
            (issue) => (
              <IssueCard
                key={issue.id}
                issue={issue}
                variant="archive"
              />
            ),
          )}
        </div>
      ) : (
        <div className="issues-page__empty">
          <p>
            По выбранным фильтрам номеров пока нет
          </p>

          <button
            type="button"
            className="issues-page__reset"
            onClick={
              resetFilters
            }
          >
            Показать все номера
          </button>
        </div>
      )}
    </section>
  )
}