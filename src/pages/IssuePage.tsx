import { useState } from 'react'
import { useParams } from 'react-router-dom'

import IssueCard from '../components/IssueCard'
import IssueContents from '../components/IssueContents'
import IssueContentsOverlay from '../components/IssueContentsOverlay'
import Button from '../components/ui/Button'

import { issues } from '../assets/data/issues'
import {
  contentItems,
  getIssueLongDescription,
} from '../assets/data/contentItems'

import './IssuePage.css'

export default function IssuePage() {
  const { slug } = useParams()

  const [isContentsOpen, setIsContentsOpen] =
    useState(false)

  const issue = issues.find(
    (item) => item.slug === slug,
  )

  if (!issue) {
    return (
      <section className="issue-page__not-found">
        <h1>Номер не найден</h1>
      </section>
    )
  }

  const longDescription =
    getIssueLongDescription(issue.id) ??
    issue.shortDescription

  const issueContent = contentItems
    .filter(
      (item) =>
        item.issueId === issue.id,
    )
    .sort(
      (a, b) =>
        a.order - b.order,
    )

  const accessLabel =
    issue.accessType === 'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'

  return (
    <>
      <article className="issue-page">
        <section className="issue-page__presentation">
          <div className="issue-page__card-column">
            <IssueCard
              slug={issue.slug}
              monthLabel={issue.monthLabel}
              month={issue.month}
              year={issue.year}
              title={issue.title}
              coverImage={issue.coverImage}
              description={longDescription}
              variant="featured"
            />

            <div className="issue-page__actions issue-page__actions--under-card">
              <Button
                variant="outline"
                onClick={() =>
                  setIsContentsOpen(true)
                }
              >
                Посмотреть содержание →
              </Button>

              {issue.accessUrl && (
                <Button
                  variant="primary"
                  href={issue.accessUrl}
                  external
                >
                  {accessLabel}
                </Button>
              )}
            </div>
          </div>
        </section>
      </article>

     <IssueContentsOverlay
  isOpen={isContentsOpen}
  onClose={() =>
    setIsContentsOpen(false)
  }
  issueMeta={{
    coverImage: issue.coverImage,
    title: issue.title,
    month: issue.month,
    year: issue.year,
  }}
>
  <IssueContents
    items={issueContent}
  />
</IssueContentsOverlay>
    </>
  )
}