import {
  useMemo,
} from 'react'

import InterviewCard from '../components/InterviewCard'

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


export default function InterviewsPage() {
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
      [],
    )


  return (
    <section className="interviews-page">
      <header className="interviews-page__header">
        <p className="interviews-page__eyebrow">
          Беседы «Сверчка»
        </p>

        <p className="interviews-page__intro">
          Разговоры с писателями,
          поэтами, переводчиками,
          художниками и теми,
          кто создаёт мир детской
          литературы.
        </p>
      </header>

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

      <div className="interviews-page__grid">
        {interviewCards.map(
          ({
            interview,
            author,
            issue,
          }) => (
            <InterviewCard
              key={interview.id}
              interview={interview}
              author={author}
              issue={issue}
            />
          ),
        )}
      </div>
    </section>
  )
}
