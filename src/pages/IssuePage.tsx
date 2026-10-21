import { useState } from 'react'
import { useParams } from 'react-router-dom'

import IssueCard from '../components/IssueCard'
import RecentIssues from '../components/RecentIssues'
import IssueContents from '../components/IssueContents'
import IssueContentsOverlay from '../components/IssueContentsOverlay'

import SubscriptionCard from '../components/SubscriptionCard'
import ContactCard from '../components/ContactCard'

import Button from '../components/ui/Button'

import {
  publishedIssues,
} from '../assets/data/issues'

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

const issue =
  publishedIssues.find(
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

 const recentIssues = [...publishedIssues]
  .filter(
    (item) =>
      item.id !== issue.id,
  )
  .sort(
    (a, b) =>
      b.year - a.year ||
      b.month - a.month,
  )
  .slice(0, 3)

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
  issue={issue}
  longDescription={longDescription}
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
  {/* ===================
    RECENT ISSUES
    =================== */}

<div
  id="recent-issues"
  className="issue-page__recent"
>
  <RecentIssues
    issues={recentIssues}
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
  onNavigate={() =>
    setIsContentsOpen(false)
  }
/>
      </IssueContentsOverlay>
    </>
  )
}