import {
  useState,
} from 'react'

import {
  useParams,
} from 'react-router-dom'

import Showcase from '../components/Showcase'
import IssueCard from '../components/IssueCard'
import IssuesList from '../components/IssuesList'

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
  const {
    slug,
  } = useParams()


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
        item.slug ===
        slug,
    )


  if (!issue) {
    return (
      <section className="issue-page__not-found">
        <h1>
          Номер не найден
        </h1>
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
          item.issueId ===
          issue.id,
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
      (item) =>
        item.id !==
        issue.id,
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


  /* =========================
     ACCESS
     ========================= */

  const accessLabel =
    issue.accessType ===
    'paid'
      ? 'Приобрести номер →'
      : 'Скачать номер →'


  return (
    <>
      <article className="issue-page">

        <Showcase
          layout="issue"

          secondaryHeading={
            <h2 className="showcase__heading-title">
              Наши номера
            </h2>
          }

          featured={
            <div className="issue-page__current">
              <IssueCard
                issue={
                  issue
                }
                variant="featured"
                longDescription={
                  longDescription
                }
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
                    {
                      accessLabel
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
            <div
              id="recent-issues"
              className="issue-page__recent"
            >
              <IssuesList
                issues={
                  recentIssues
                }
                variant="recent"
                showAllLink
              />
            </div>
          }
        />
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
            issue.coverImage,

          month:
            issue.month,

          year:
            issue.year,
        }}
      >
        <IssueContents
          items={
            issueContent
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