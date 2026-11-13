import {
  useMemo,
  useState,
} from 'react'

import IssueCard from '../components/IssueCard'
import CustomSelect from '../components/filters/CustomSelect'
import FilterPanel from '../components/filters/FilterPanel'

import {
  publishedIssues,
} from '../assets/data/issues'

import type {
  IssueTheme,
} from '../assets/data/issues'

import './IssuesPage.css'


type YearFilter =
  | 'all'
  | number


type AccessFilter =
  | 'all'
  | 'free'
  | 'paid'


type ThemeFilter =
  | 'all'
  | IssueTheme


type SortDirection =
  | 'asc'
  | 'desc'


export default function IssuesPage() {
  const [
    selectedYear,
    setSelectedYear,
  ] = useState<YearFilter>(
    'all',
  )


  const [
    selectedAccess,
    setSelectedAccess,
  ] = useState<AccessFilter>(
    'all',
  )


  const [
    selectedTheme,
    setSelectedTheme,
  ] = useState<ThemeFilter>(
    'all',
  )


  const [
    sortDirection,
    setSortDirection,
  ] = useState<SortDirection>(
    'desc',
  )


  /* =========================
     FILTER OPTIONS
     ========================= */

  const years =
    useMemo(
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


  const themes =
    useMemo(
      () =>
        Array.from(
          new Set(
            publishedIssues.map(
              (issue) =>
                issue.theme,
            ),
          ),
        ).sort(
          (a, b) =>
            a.localeCompare(
              b,
              'ru',
            ),
        ),
      [],
    )


  const yearOptions = [
    {
      value:
        'all',

      label:
        'Все годы',
    },

    ...years.map(
      (year) => ({
        value:
          String(
            year,
          ),

        label:
          String(
            year,
          ),
      }),
    ),
  ]


  const accessOptions = [
    {
      value:
        'all',

      label:
        'Все',
    },

    {
      value:
        'free',

      label:
        'Бесплатные',
    },

    {
      value:
        'paid',

      label:
        'Платные',
    },
  ]


  const themeOptions = [
    {
      value:
        'all',

      label:
        'Все темы',
    },

    ...themes.map(
      (theme) => ({
        value:
          theme,

        label:
          theme,
      }),
    ),
  ]


  /* =========================
     FILTERED ISSUES
     ========================= */

  const filteredIssues =
    useMemo(
      () => {
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


              const matchesTheme =
                selectedTheme ===
                  'all' ||
                issue.theme ===
                  selectedTheme


              return (
                matchesYear &&
                matchesAccess &&
                matchesTheme
              )
            },
          )


        return [
          ...result,
        ].sort(
          (
            a,
            b,
          ) => {
            const direction =
              sortDirection ===
              'desc'
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
      },
      [
        selectedYear,
        selectedAccess,
        selectedTheme,
        sortDirection,
      ],
    )


  /* =========================
     RESET
     ========================= */

  const hasActiveFilters =
    selectedYear !==
      'all' ||
    selectedAccess !==
      'all' ||
    selectedTheme !==
      'all' ||
    sortDirection !==
      'desc'


  function resetFilters() {
    setSelectedYear(
      'all',
    )

    setSelectedAccess(
      'all',
    )

    setSelectedTheme(
      'all',
    )

    setSortDirection(
      'desc',
    )
  }


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


  return (
    <section className="issues-page">

      {/* =====================
          INTRO
          ===================== */}

      <header className="issues-page__intro">

       <p className="issues-page__description">
  <span>
    Здесь собраны все выпуски
    литературного альманаха
    «Сверчок»
  </span>

  <span>
    Выбирайте номер,
    знакомьтесь с его темой
    и отправляйтесь читать
  </span>
</p>
      </header>


      {/* =====================
          FILTERS
          ===================== */}

      <FilterPanel
        ariaLabel="Фильтры номеров"
        sortLabel="По дате"
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
          id="issues-year"
          label="Год"
          placeholder="По году"
          value={
            selectedYear ===
            'all'
              ? 'all'
              : String(
                  selectedYear,
                )
          }
          options={
            yearOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedYear(
              value ===
                'all'
                ? 'all'
                : Number(
                    value,
                  ),
            )
          }
        />


        <CustomSelect
          id="issues-access"
          label="Доступ"
          placeholder="По доступу"
          value={
            selectedAccess
          }
          options={
            accessOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedAccess(
              value as
                AccessFilter,
            )
          }
        />


        <CustomSelect
          id="issues-theme"
          label="Тема"
          placeholder="По теме"
          value={
            selectedTheme
          }
          options={
            themeOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedTheme(
              value as
                ThemeFilter,
            )
          }
        />
      </FilterPanel>


      {/* =====================
          RESULTS
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
                key={
                  issue.id
                }
                issue={
                  issue
                }
                variant="archive"
              />
            ),
          )}
        </div>
      ) : (
        <div className="issues-page__empty">
          <p>
            По выбранным фильтрам
            номеров пока нет
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
