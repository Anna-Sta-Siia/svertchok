import {
  useMemo,
  useState,
} from 'react'

import InterviewCard from '../components/InterviewCard'
import CustomSelect from '../components/filters/CustomSelect'
import FilterPanel from '../components/filters/FilterPanel'

import {
  authors,
} from '../assets/data/authors'

import {
  interviews,
} from '../assets/data/interviews'

import {
  publishedIssues,
} from '../assets/data/issues'

import './InterviewsPage.css'


type AccessFilter =
  | 'all'
  | 'free'
  | 'paid'


const accessOptions = [
  {
    value: 'all',
    label: 'Все',
  },
  {
    value: 'free',
    label: 'Можно читать',
  },
  {
    value: 'paid',
    label: 'В платном номере',
  },
]


export default function InterviewsPage() {
  const [
    selectedAccess,
    setSelectedAccess,
  ] = useState<AccessFilter>(
    'all',
  )

  const [
    selectedIssue,
    setSelectedIssue,
  ] = useState(
    'all',
  )


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
          value: 'all',
          label: 'Все номера',
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


  const interviewCards =
    useMemo(
      () =>
        interviews
          .map(
            (
              interview,
            ) => {
              const author =
                authors.find(
                  (
                    item,
                  ) =>
                    item.id ===
                    interview.authorId,
                )

              const issue =
                publishedIssues.find(
                  (
                    item,
                  ) =>
                    item.id ===
                    interview.issueId,
                )

              if (
                !author ||
                !issue
              ) {
                return null
              }


              return {
                interview,
                author,
                issue,
              }
            },
          )
          .filter(
            (
              item,
            ): item is NonNullable<
              typeof item
            > =>
              item !== null,
          )
          .filter(
            ({
              issue,
            }) => {
              const matchesAccess =
                selectedAccess ===
                  'all' ||
                issue.accessType ===
                  selectedAccess

              const matchesIssue =
                selectedIssue ===
                  'all' ||
                issue.id ===
                  selectedIssue


              return (
                matchesAccess &&
                matchesIssue
              )
            },
          )
          .sort(
            (
              a,
              b,
            ) =>
              b.issue.year -
                a.issue.year ||
              b.issue.month -
                a.issue.month ||
              a.interview.order -
                b.interview.order,
          ),
      [
        selectedAccess,
        selectedIssue,
      ],
    )


  const hasActiveFilters =
    selectedAccess !==
      'all' ||
    selectedIssue !==
      'all'


  function resetFilters() {
    setSelectedAccess(
      'all',
    )

    setSelectedIssue(
      'all',
    )
  }


  return (
    <section className="interviews-page">
      <header className="interviews-page__intro">

        <p className="interviews-page__description">
         <span> Разговоры с писателями,
          поэтами,
          художниками, 
          </span>
          <span>теми,
          кто создаёт мир детской
          литературы.
          </span>
        </p>
      </header>


      <FilterPanel
        ariaLabel="Фильтры бесед"
        onReset={
          resetFilters
        }
        canReset={
          hasActiveFilters
        }
      >
        <CustomSelect
          id="interviews-issue-filter"
          label="По номеру"
          placeholder="По номеру"
          value={
            selectedIssue
          }
          options={
            issueOptions
          }
          onChange={
            setSelectedIssue
          }
        />

        <CustomSelect
          id="interviews-access-filter"
          label="По доступу"
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
      </FilterPanel>


      <div className="interviews-page__results">
        <p className="interviews-page__count">
          Бесед:{' '}

          <strong>
            {
              interviewCards.length
            }
          </strong>
        </p>
      </div>


      {interviewCards.length >
      0 ? (
        <div className="interviews-page__grid">
          {interviewCards.map(
            ({
              interview,
              author,
              issue,
            }) => (
              <InterviewCard
                key={
                  interview.id
                }
                interview={
                  interview
                }
                author={
                  author
                }
                issue={
                  issue
                }
              />
            ),
          )}
        </div>
      ) : (
        <div className="interviews-page__empty">
          <p>
            По выбранным критериям
            бесед пока нет.
          </p>

          <button
            type="button"
            className="interviews-page__reset"
            onClick={
              resetFilters
            }
          >
            Показать все беседы
          </button>
        </div>
      )}
    </section>
  )
}
