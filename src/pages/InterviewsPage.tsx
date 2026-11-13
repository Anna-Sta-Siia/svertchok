import {
  useEffect,
  useMemo,
  useState,
} from 'react'

import InterviewCard from '../components/InterviewCard'
import CustomSelect from '../components/filters/CustomSelect'
import FilterPanel from '../components/filters/FilterPanel'
import Button from '../components/ui/Button'

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


function getInterviewBatchSize() {
  if (
    typeof window ===
    'undefined'
  ) {
    return 6
  }


  const width =
    window.innerWidth


  if (
    width <=
    700
  ) {
    return 2
  }


  if (
    width <=
    1024
  ) {
    return 4
  }


  return 6
}


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

  const [
    batchSize,
    setBatchSize,
  ] = useState(
    getInterviewBatchSize,
  )

  const [
    visibleCount,
    setVisibleCount,
  ] = useState(
    getInterviewBatchSize,
  )


  /* =========================
     RESPONSIVE BATCH SIZE
     ========================= */

  useEffect(() => {
    function handleResize() {
      const nextBatchSize =
        getInterviewBatchSize()


      setBatchSize(
        nextBatchSize,
      )

      setVisibleCount(
        nextBatchSize,
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
     ISSUES
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


  /* =========================
     INTERVIEWS
     ========================= */

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


  /* =========================
     VISIBLE INTERVIEWS
     ========================= */

  const visibleInterviewCards =
    interviewCards.slice(
      0,
      visibleCount,
    )


  const remainingInterviews =
    Math.max(
      interviewCards.length -
        visibleInterviewCards.length,
      0,
    )


  const nextInterviewsCount =
    Math.min(
      batchSize,
      remainingInterviews,
    )


  const hasMoreInterviews =
    remainingInterviews >
    0


  /* =========================
     FILTER HANDLERS
     ========================= */

  function setIssueFilter(
    value: string,
  ) {
    setSelectedIssue(
      value,
    )

    setVisibleCount(
      batchSize,
    )
  }


  function setAccessFilter(
    value: string,
  ) {
    setSelectedAccess(
      value as AccessFilter,
    )

    setVisibleCount(
      batchSize,
    )
  }


  /* =========================
     RESET
     ========================= */

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

    setVisibleCount(
      batchSize,
    )
  }


  function showMoreInterviews() {
    setVisibleCount(
      (current) =>
        Math.min(
          current +
            batchSize,
          interviewCards.length,
        ),
    )
  }


  return (
    <section className="interviews-page">
      <header className="interviews-page__intro">

        <p className="interviews-page__description">
          <span>
            Разговоры с писателями,
            поэтами,
            художниками,
          </span>

          <span>
            теми,
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
            setIssueFilter
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
          onChange={
            setAccessFilter
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
        <>
          <div className="interviews-page__grid">
            {visibleInterviewCards.map(
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


          {hasMoreInterviews && (
            <div className="interviews-page__load-more">
              <Button
                variant="secondary"
                size="medium"
                type="button"
                onClick={
                  showMoreInterviews
                }
              >
                Показать ещё{' '}
                {
                  nextInterviewsCount
                }
              </Button>
            </div>
          )}
        </>
      ) : (
        <div className="interviews-page__empty">
          <p>
            По выбранным критериям
            бесед пока нет.
          </p>

          <Button
            variant="secondary"
            size="medium"
            type="button"
            onClick={
              resetFilters
            }
          >
            Показать все беседы
          </Button>
        </div>
      )}
    </section>
  )
}
