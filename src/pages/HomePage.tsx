import IssueCard from '../components/IssueCard'
import IssuesArchive from '../components/IssuesArchive'
import SubscriptionCard from '../components/SubscriptionCard'
import ContactCard from '../components/ContactCard'

import { issues } from '../assets/data/issues'

import './HomePage.css'

export default function HomePage() {
  const currentIssue =
    issues.find((issue) => issue.isCurrent) ?? issues[0]

  const previousIssues = issues.filter(
    (issue) => issue.id !== currentIssue.id,
  )

  const accessAction = currentIssue.accessUrl
    ? {
        label:
          currentIssue.accessType === 'paid'
            ? 'Приобрести номер →'
            : 'Скачать номер →',
        href: currentIssue.accessUrl,
        external: true,
        variant: 'outline' as const,
      }
    : undefined

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
            title={currentIssue.title}
            coverImage={currentIssue.coverImage}
            description={
              currentIssue.longDescription ||
              currentIssue.shortDescription
            }
            variant="featured"
            primaryAction={{
              label: 'Перейти к номеру →',
              to: `/issues/${currentIssue.slug}`,
            }}
            secondaryAction={accessAction}
          />
        </div>

        {/* ARCHIVE */}

        <IssuesArchive
          issues={previousIssues}
        />
      </section>
<section className="home-connect">
  <SubscriptionCard to="/subscription" />

  <ContactCard />
</section>
    </>
  )
}