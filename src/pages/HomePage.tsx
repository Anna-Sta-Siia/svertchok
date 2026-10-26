import {
  useState,
} from 'react'

import Showcase from '../components/Showcase'
import IssueCard from '../components/IssueCard'
import IssuesList from '../components/IssuesList'

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
          a.order -
          b.order,
      )


  /* =========================
     RECENT ISSUES
     ========================= */

  const recentIssues = [
    ...publishedIssues,
  ]
    .filter(
      (issue) =>
        issue.id !==
        currentIssue.id,
    )
    .sort(
      (a, b) =>
        b.year -
          a.year ||
        b.month -
          a.month,
    )
    .slice(
      0,
      3,
    )


  return (
    <>
      {/* =====================
          ISSUES
          ===================== */}

      <Showcase
        layout="issue"

        featuredHeading={
          <p className="home-issues__intro">
            А вот и мой новый номер
          </p>
        }

        secondaryHeading={
          <h2 className="showcase__heading-title">
            Наши номера
          </h2>
        }

        featured={
          <div
            id="current-issue"
            className="home-issues__current"
          >
            <IssueCard
              issue={
                currentIssue
              }
              variant="featured"
              longDescription={
                currentIssueLongDescription
              }
            />

            <div className="home-issues__actions">
              {currentIssue.accessUrl && (
                <Button
                  variant="primary"
                  href={
                    currentIssue.accessUrl
                  }
                  external
                >
                  {
                    currentIssue.accessType ===
                    'paid'
                      ? 'Приобрести номер →'
                      : 'Скачать номер →'
                  }
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
        }

        secondary={
          <IssuesList
            issues={
              recentIssues
            }
            variant="recent"
            showAllLink
          />
        }
      />


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
        isOpen={
          isContentsOpen
        }
        onClose={() =>
          setIsContentsOpen(
            false,
          )
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
            setIsContentsOpen(
              false,
            )
          }
        />
      </IssueContentsOverlay>
    </>
  )
}