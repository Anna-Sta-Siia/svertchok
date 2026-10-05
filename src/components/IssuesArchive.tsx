import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import IssueCard from './IssueCard'
import Button from './ui/Button'

import { issues as allIssues } from "../assets/data/issues"

import './IssuesArchive.css'

type Issue = (typeof allIssues)[number]

type IssuesArchiveProps = {
  issues: Issue[]
}

type YearValue = number | 'all'

type YearOption = {
  value: YearValue
  label: string
}

export default function IssuesArchive({
  issues,
}: IssuesArchiveProps) {
  const [selectedYear, setSelectedYear] =
    useState<YearValue>('all')

  const [isOpen, setIsOpen] =
    useState(false)

  const [highlightedIndex, setHighlightedIndex] =
    useState(0)

  const selectRef =
    useRef<HTMLDivElement>(null)

  const years = useMemo(
    () =>
      [...new Set(
        issues.map((issue) => issue.year),
      )].sort((a, b) => b - a),
    [issues],
  )

  const yearOptions: YearOption[] = [
    {
      value: 'all',
      label: 'Все годы',
    },

    ...years.map((year) => ({
      value: year,
      label: String(year),
    })),
  ]

  const filteredIssues = useMemo(() => {
    const result =
      selectedYear === 'all'
        ? issues
        : issues.filter(
            (issue) =>
              issue.year === selectedYear,
          )

    return [...result].sort(
      (a, b) =>
        b.year - a.year ||
        b.month - a.month,
    )
  }, [issues, selectedYear])

  const selectedLabel =
    selectedYear === 'all'
      ? 'Все годы'
      : String(selectedYear)

  function openSelect() {
    const selectedIndex =
      yearOptions.findIndex(
        (option) =>
          option.value === selectedYear,
      )

    setHighlightedIndex(
      selectedIndex >= 0
        ? selectedIndex
        : 0,
    )

    setIsOpen(true)
  }

  function chooseYear(
    value: YearValue,
  ) {
    setSelectedYear(value)
    setIsOpen(false)
  }

  function handleKeyDown(
    event: React.KeyboardEvent<HTMLButtonElement>,
  ) {
    if (
      event.key === 'Enter' ||
      event.key === ' '
    ) {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      chooseYear(
        yearOptions[highlightedIndex].value,
      )

      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      setHighlightedIndex(
        (current) =>
          (current + 1) %
          yearOptions.length,
      )
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()

      if (!isOpen) {
        openSelect()
        return
      }

      setHighlightedIndex(
        (current) =>
          (current - 1 +
            yearOptions.length) %
          yearOptions.length,
      )
    }

    if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    function handleOutsideClick(
      event: MouseEvent,
    ) {
      if (
        selectRef.current &&
        !selectRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener(
      'mousedown',
      handleOutsideClick,
    )

    return () => {
      document.removeEventListener(
        'mousedown',
        handleOutsideClick,
      )
    }
  }, [])

  return (
    <aside className="issues-archive">
      <div className="issues-archive__heading">
        <h2>Наши номера</h2>

        <p>
          Выбирай номер и отправляйся
          читать
        </p>
      </div>

      {/* YEAR FILTER */}

      <div className="issues-archive__filter">
        <span className="issues-archive__filter-label">
          Год
        </span>

        <div
          ref={selectRef}
          className="issues-archive__custom-select"
        >
          <button
            type="button"
            className="issues-archive__select-button"
            onClick={() => {
              if (isOpen) {
                setIsOpen(false)
              } else {
                openSelect()
              }
            }}
            onKeyDown={handleKeyDown}
            aria-haspopup="listbox"
            aria-expanded={isOpen}
            aria-controls="archive-year-list"
          >
            <span>
              {selectedLabel}
            </span>

            <span
              className={`issues-archive__chevron ${
                isOpen
                  ? 'issues-archive__chevron--open'
                  : ''
              }`}
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>

          {isOpen && (
            <div
              id="archive-year-list"
              className="issues-archive__select-menu"
              role="listbox"
              aria-label="Год выпуска"
            >
              {yearOptions.map(
                (option, index) => (
                  <button
                    key={option.value}
                    type="button"
                    role="option"
                    aria-selected={
                      selectedYear ===
                      option.value
                    }
                    className={`issues-archive__select-option ${
                      selectedYear ===
                      option.value
                        ? 'issues-archive__select-option--selected'
                        : ''
                    } ${
                      highlightedIndex ===
                      index
                        ? 'issues-archive__select-option--highlighted'
                        : ''
                    }`}
                    onPointerEnter={() =>
                      setHighlightedIndex(
                        index,
                      )
                    }
                    onClick={() =>
                      chooseYear(
                        option.value,
                      )
                    }
                  >
                    {option.label}
                  </button>
                ),
              )}
            </div>
          )}
        </div>
      </div>

      {/* ISSUES */}

      <div className="issues-archive__list">
        {filteredIssues.map((issue) => (
          <IssueCard
            key={issue.id}
            slug={issue.slug}
            monthLabel={
              issue.monthLabel
            }
            month={issue.month}
            year={issue.year}
            coverImage={
              issue.coverImage
            }
            description={
              issue.shortDescription
            }
            variant="compact"
          />
        ))}
      </div>

      <Button
        variant="ghost"
        to="/issues"
        className="issues-archive__all"
      >
        Посмотреть все номера →
      </Button>
    </aside>
  )
}