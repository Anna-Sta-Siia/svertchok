import {
  Children,
} from 'react'

import type {
  ReactNode,
} from 'react'

import './FilterPanel.css'


export type SortDirection =
  | 'asc'
  | 'desc'


type FilterPanelProps = {
  children:
    ReactNode

  ariaLabel:
    string

  className?:
    string

  sortLabel?:
    string

  sortDirection?:
    SortDirection

  onToggleSort?:
    () => void

  onReset?:
    () => void

  canReset?:
    boolean

  resetLabel?:
    string
}


export default function FilterPanel({
  children,
  ariaLabel,
  className = '',

  sortLabel,
  sortDirection,
  onToggleSort,

  onReset,
  canReset = false,
  resetLabel = 'Сбросить фильтры',
}: FilterPanelProps) {

  const filterCount =
    Math.min(
      Math.max(
        Children.count(
          children,
        ),
        1,
      ),
      3,
    )


  const hasSortControl =
    Boolean(
      sortLabel &&
      sortDirection &&
      onToggleSort,
    )


  function selectSortDirection(
    direction:
      SortDirection,
  ) {
    if (
      !onToggleSort ||
      !sortDirection ||
      sortDirection ===
        direction
    ) {
      return
    }

    onToggleSort()
  }


  return (
    <section
      className={`
        filter-panel
        filter-panel--${filterCount}
        ${className}
      `.trim()}
      aria-label={
        ariaLabel
      }
    >

      {/* =====================
          FILTERS
          ===================== */}

      {children}


      {/* =====================
          SECOND ROW
          ===================== */}

      {(
        hasSortControl ||
        onReset
      ) && (
        <div className="filter-panel__actions">

          {/* SORT */}

          {hasSortControl && (
            <div className="filter-panel__sort">

              <span className="filter-panel__sort-label">
                {sortLabel}
              </span>


              <button
                type="button"
                className={`
                  filter-panel__sort-button
                  ${
                    sortDirection ===
                    'asc'
                      ? 'filter-panel__sort-button--active'
                      : ''
                  }
                `}
                aria-label={
                  `${sortLabel}: по возрастанию`
                }
                aria-pressed={
                  sortDirection ===
                  'asc'
                }
                onClick={() =>
                  selectSortDirection(
                    'asc',
                  )
                }
              >
                ↑
              </button>


              <button
                type="button"
                className={`
                  filter-panel__sort-button
                  ${
                    sortDirection ===
                    'desc'
                      ? 'filter-panel__sort-button--active'
                      : ''
                  }
                `}
                aria-label={
                  `${sortLabel}: по убыванию`
                }
                aria-pressed={
                  sortDirection ===
                  'desc'
                }
                onClick={() =>
                  selectSortDirection(
                    'desc',
                  )
                }
              >
                ↓
              </button>

            </div>
          )}


          {/* RESET */}

          {onReset && (
            <div className="filter-panel__reset-slot">

              <button
                type="button"
                className="filter-panel__reset"
                onClick={
                  onReset
                }
                disabled={
                  !canReset
                }
              >
                <span>
                  {resetLabel}
                </span>
              </button>

            </div>
          )}

        </div>
      )}

    </section>
  )
}