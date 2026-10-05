import { useState } from 'react'
import Button from '../components/ui/Button'
import IssueCard from '../components/IssueCard'
import IssuesArchive from '../components/IssuesArchive'
import SubscriptionCard from '../components/SubscriptionCard'
import ContactCard from '../components/ContactCard'
import IssueContents from '../components/IssueContents'
import IssueContentsOverlay from '../components/IssueContentsOverlay'

import { issues } from '../assets/data/issues'
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

  const currentIssue =
    issues.find(
      (issue) => issue.isCurrent,
    ) ?? issues[0]

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

  const previousIssues =
    issues.filter(
      (issue) =>
        issue.id !==
        currentIssue.id,
    )

  return (
    <>
      <section className="home-issues">
        {/* CURRENT ISSUE */}

        <div className="home-issues__current">
          <div className="home-issues__heading">
            <p className="home-issues__intro">
              А вот и мой новый номер
            </p>
          </div>

     <IssueCard
  slug={currentIssue.slug}
  monthLabel={currentIssue.monthLabel}
  month={currentIssue.month}
  year={currentIssue.year}
  coverImage={currentIssue.coverImage}
  description={currentIssueLongDescription}
  variant="featured"
  readMoreTo={`/issues/${currentIssue.slug}`}
/>
          <div className="home-issues__actions">
  {currentIssue.accessUrl && (
    <Button
      variant="primary"
      href={currentIssue.accessUrl}
      external
    >
      {currentIssue.accessType === 'paid'
        ? 'Приобрести номер →'
        : 'Скачать номер →'}
    </Button>
  )}

  <Button
    variant="outline"
    onClick={() =>
      setIsContentsOpen(true)
    }
  >
    Посмотреть содержание →
  </Button>
</div>
        </div>

        {/* ARCHIVE */}

        <IssuesArchive
          issues={previousIssues}
        />
      </section>

      <section className="home-connect">
        <SubscriptionCard
          to="/subscription"
        />

        <ContactCard />
      </section>

      <IssueContentsOverlay
        isOpen={isContentsOpen}
        onClose={() =>
          setIsContentsOpen(false)
        }
        issueMeta={{
          coverImage:
            currentIssue.coverImage,

          title:
            currentIssue.title,

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
        />
      </IssueContentsOverlay>
    </>
  )
}