import { useState } from 'react'
import { useParams } from 'react-router-dom'

import IssueCard from '../components/IssueCard'
import IssuesArchive from '../components/IssuesArchive'
import IssueContents from '../components/IssueContents'
import IssueContentsOverlay from '../components/IssueContentsOverlay'

import SubscriptionCard from '../components/SubscriptionCard'
import ContactCard from '../components/ContactCard'

import Button from '../components/ui/Button'

import { issues } from '../assets/data/issues'

import {
  contentItems,
  getIssueLongDescription,
} from '../assets/data/contentItems'

import './IssuePage.css'

export default function IssuePage() {
  const { slug } = useParams()

  const [
    isContentsOpen,
    setIsContentsOpen,
  ] = useState(false)

  /* =========================
     SELECTED ISSUE
     ========================= */

  const issue = issues.find(
    (item) =>
      item.slug === slug,
  )

  if (!issue) {
    return (
      <section className="issue-page__not-found">
        <h1>Номер не найден</h1>
      </section>
    )
  }

  const longDescription =
    getIssueLongDescription(
      issue.id,
    ) ??
    issue.shortDescription

  /* =========================
     CONTENTS
     ========================= */

  const issueContent =
    contentItems
      .filter(
        (item) =>
          item.issueId === issue.id,
      )
      .sort(
        (a, b) =>
          a.order - b.order,
      )

  /* =========================
     ARCHIVE
     ========================= */

  const otherIssues =
    issues.filter(
      (item) =>
        item.id !== issue.id,
    )

  /* =========================
     ACCESS
     ========================= */

  const accessLabel =
    issue.accessType === 'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'

  return (
    <>
      <article className="issue-page">
        <section className="issue-page__main">
          {/* =================
              SELECTED ISSUE
              ================= */}

          <div className="issue-page__current">
            <IssueCard
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
                longDescription
              }
              variant="featured"
            />

            <div className="issue-page__actions">
              {issue.accessUrl && (
                <Button
                  variant="primary"
                  href={
                    issue.accessUrl
                  }
                  external
                >
                  {accessLabel}
                </Button>
              )}

              <Button
                variant="outline"
                onClick={() =>
                  setIsContentsOpen(
                    true,
                  )
                }
              >
                Посмотреть содержание →
              </Button>
            </div>
          </div>

          {/* =================
              ARCHIVE
              ================= */}

          <div
            id="issues-archive"
            className="issue-page__archive"
          >
            <IssuesArchive
              issues={otherIssues}
            />
          </div>
        </section>
      </article>

      {/* =====================
          SUBSCRIBE / CONTACT
          ===================== */}

      <section className="issue-page__connect">
        <SubscriptionCard
          to="/subscription"
        />

        <ContactCard />
      </section>

      {/* =====================
          CONTENTS OVERLAY
          ===================== */}

      <IssueContentsOverlay
        isOpen={isContentsOpen}
        onClose={() =>
          setIsContentsOpen(false)
        }
        issueMeta={{
          coverImage:
            issue.coverImage,
          month:
            issue.month,

          year:
            issue.year,
        }}
      >
        <IssueContents
          items={issueContent}
        />
      </IssueContentsOverlay>
    </>
  )
}