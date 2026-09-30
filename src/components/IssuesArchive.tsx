import {
  useMemo,
  useState,
} from 'react'

import IssueCard from './IssueCard'
import Button from './ui/Button'

import { issues as allIssues } from '../assets/data/issues'

import './IssuesArchive.css'

type Issue = (typeof allIssues)[number]

type IssuesArchiveProps = {
  issues: Issue[]
}

export default function IssuesArchive({
  issues,
}: IssuesArchiveProps) {
  const [selectedYear, setSelectedYear] =
    useState<number | 'all'>('all')

  const years = useMemo(
    () =>
      [...new Set(
        issues.map((issue) => issue.year),
      )].sort((a, b) => b - a),
    [issues],
  )

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

  return (
    <aside className="issues-archive">
      <div className="issues-archive__heading">
        <h2>Наши номера</h2>

        <p>
          Выбирай номер и отправляйся
          читать.
        </p>
      </div>

      <div className="issues-archive__filter">
        <label
          htmlFor="archive-year"
          className="issues-archive__filter-label"
        >
          Год
        </label>

        <select
          id="archive-year"
          className="issues-archive__select"
          value={selectedYear}
          onChange={(event) => {
            const value = event.target.value

            setSelectedYear(
              value === 'all'
                ? 'all'
                : Number(value),
            )
          }}
        >
          <option value="all">
            Все годы
          </option>

          {years.map((year) => (
            <option
              key={year}
              value={year}
            >
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="issues-archive__list">
        {filteredIssues.map((issue) => (
          <IssueCard
            key={issue.id}
            slug={issue.slug}
            monthLabel={issue.monthLabel}
            month={issue.month}
            year={issue.year}
            title={issue.title}
            coverImage={issue.coverImage}
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