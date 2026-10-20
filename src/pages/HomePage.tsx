import {
  useState,
} from 'react'

import IssueCard from '../components/IssueCard'
import RecentIssues from '../components/RecentIssues'
import SubscriptionCard from '../components/SubscriptionCard'
import ContactCard from '../components/ContactCard'

import IssueContents from '../components/IssueContents'
import IssueContentsOverlay from '../components/IssueContentsOverlay'

import Button from '../components/ui/Button'

import {
  publishedIssues,
} from '../assets/data/issues'

import {
  contentItems,
  getIssueLongDescription,
} from '../assets/data/contentItems'

import './HomePage.css'

export default function HomePage() {
  const [
    isContentsOpen,
    setIsContentsOpen,
  ] = useState(false)

  /* =========================
     CURRENT ISSUE
     ========================= */

const currentIssue =
  publishedIssues.find(
    (issue) =>
      issue.isCurrent,
  ) ??
  publishedIssues[0]
  if (!currentIssue) {
    return null
  }

  const currentIssueLongDescription =
    getIssueLongDescription(
      currentIssue.id,
    ) ??
    currentIssue.shortDescription

  const currentIssueContent =
    contentItems
      .filter(
        (item) =>
          item.issueId ===
          currentIssue.id,
      )
      .sort(
        (a, b) =>
          a.order - b.order,
      )

 const recentIssues = [...publishedIssues]
  .filter(
    (issue) =>
      issue.id !== currentIssue.id,
  )
  .sort(
    (a, b) =>
      b.year - a.year ||
      b.month - a.month,
  )
  .slice(0, 3)

  return (
    <>
      {/* =====================
          ISSUES
          ===================== */}

      <section className="home-issues">
        {/* ===================
            CURRENT ISSUE
            =================== */}

        <div
          id="current-issue"
          className="home-issues__current"
        >
          <div className="home-issues__heading">
            <p className="home-issues__intro">
              А вот и мой новый номер
            </p>
          </div>

          <IssueCard
            slug={currentIssue.slug}
            monthLabel={
              currentIssue.monthLabel
            }
            month={
              currentIssue.month
            }
            year={
              currentIssue.year
            }
           
            coverImage={
              currentIssue.coverImage
            }
            description={
              currentIssueLongDescription
            }
            variant="featured"
            readMoreTo={
              `/issues/${currentIssue.slug}`
            }
          />

          {/* =================
              ACTIONS
              ================= */}

          <div className="home-issues__actions">
            {currentIssue.accessUrl && (
              <Button
                variant="primary"
                href={
                  currentIssue.accessUrl
                }
                external
              >
                {currentIssue.accessType ===
                'paid'
                  ? 'Приобрести номер →'
                  : 'Скачать номер →'}
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
<RecentIssues
  issues={recentIssues}
/>
      </section>

      {/* =====================
          CONTACT / SUBSCRIBE
          ===================== */}

      <section className="home-connect">
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
            currentIssue.coverImage,

          month:
            currentIssue.month,

          year:
            currentIssue.year,
        }}
      >
    <IssueContents
  items={
    currentIssueContent
  }
  onNavigate={() =>
    setIsContentsOpen(false)
  }
/>
      </IssueContentsOverlay>
    </>
  )
}