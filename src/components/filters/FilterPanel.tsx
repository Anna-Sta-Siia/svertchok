import type {
  ReactNode,
} from 'react'

import './FilterPanel.css'


export type SortDirection =
  | 'asc'
  | 'desc'


export type FilterPanelSort = {
  hint: string
  direction: SortDirection
  onChange: (
    direction: SortDirection,
  ) => void
  ascendingLabel: string
  descendingLabel: string
}


type FilterPanelProps = {
  children: ReactNode
  ariaLabel: string
  className?: string
  size?: 'default' | 'compact'

  sort?: FilterPanelSort

  onReset?: () => void
  canReset?: boolean
  resetLabel?: string
}


export default function FilterPanel({
  children,
  ariaLabel,
  className = '',
  size = 'default',

  sort,

  onReset,
  canReset = false,
  resetLabel = 'Сбросить фильтры',
}: FilterPanelProps) {
  return (
    <section
      className={`
        filter-panel
        filter-panel--${size}
        ${className}
      `.trim()}
      aria-label={ariaLabel}
    >
      {children}

      {(sort || onReset) && (
        <div className="filter-panel__actions">
          {sort && (
            <div
              className="filter-panel__sort"
              role="group"
              aria-label={sort.hint}
            >
              <span
                className="filter-panel__sort-label"
                aria-hidden="true"
              >
                Сортировка
              </span>

              <button
                type="button"
                className={`
                  filter-panel__sort-button
                  ${
                    sort.direction ===
                    'desc'
                      ? 'filter-panel__sort-button--active'
                      : ''
                  }
                `.trim()}
                aria-pressed={
                  sort.direction ===
                  'desc'
                }
                aria-label={
                  sort.descendingLabel
                }
                onClick={() =>
                  sort.onChange(
                    'desc',
                  )
                }
              >
                ↓
              </button>

              <button
                type="button"
                className={`
                  filter-panel__sort-button
                  ${
                    sort.direction ===
                    'asc'
                      ? 'filter-panel__sort-button--active'
                      : ''
                  }
                `.trim()}
                aria-pressed={
                  sort.direction ===
                  'asc'
                }
                aria-label={
                  sort.ascendingLabel
                }
                onClick={() =>
                  sort.onChange(
                    'asc',
                  )
                }
              >
                ↑
              </button>
            </div>
          )}

          {onReset && (
            <div className="filter-panel__reset-slot">
          <button
            type="button"
            className="filter-panel__reset"
            onClick={onReset}
            disabled={!canReset}
          >
            <span
              aria-hidden="true"
              className="filter-panel__reset-icon"
            >
              ↻
            </span>

            {resetLabel}
          </button>
            </div>
          )}
        </div>
      )}
    </section>
  )
}
