import SeasonalNavbar from '../components/navigation/SeasonalNavbar'
import SubscriptionSection from '../components/SubscriptionSection'
import SiteFooter from '../components/SiteFooter'
import IssueCard from '../components/IssueCard'
import IssuesPreview from '../components/IssuesPreview'

import { currentIssue } from '../data/issues'
import type { Season } from '../utils/getCurrentSeason'

import logoSvertchok from '../assets/logo-svertchok.png'
import titleSvertchok from '../assets/title-svertchok.png'

import './HomePage.css'

type HomePageProps = {
  season: Season
}

const navItems = [
  {
    label: 'Давайте знакомиться',
    to: '/about',
  },
  {
    label: 'Новый номер',
    to: `/issues/${currentIssue.slug}`,
  },
  {
    label: 'Авторы и художники',
    to: '/authors',
  },
  {
    label: 'Наши номера',
    to: '/issues',
  },
  {
    label: 'Интервью',
    to: '/interviews',
  },
  {
    label: 'Написать Сверчку',
    to: '/contact',
  },
]

export default function HomePage({
  season,
}: HomePageProps) {
  return (
    <>
      <section className="magazine-home">
        <header className="magazine-home__header">
          <p className="magazine-home__eyebrow">
            ЛИТЕРАТУРНЫЙ АЛЬМАНАХ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ
          </p>

          <img
            src={titleSvertchok}
            alt="Сверчок"
            className="magazine-home__title"
          />

          <img
            src={logoSvertchok}
            alt=""
            aria-hidden="true"
            className="magazine-home__mascot"
          />
        </header>

        <div className="magazine-home__content">
          <aside className="magazine-home__nav">
            <SeasonalNavbar
              season={season}
              items={navItems}
            />
          </aside>

          <div className="magazine-home__issue">
            <IssueCard
              slug={currentIssue.slug}
              monthLabel={currentIssue.monthLabel}
              month={currentIssue.month}
              year={currentIssue.year}
              title={currentIssue.title}
              coverImage={currentIssue.coverImage}
              description={currentIssue.longDescription}
              accessType={currentIssue.accessType}
              accessUrl={currentIssue.accessUrl}
              featured
            />
          </div>
        </div>
      </section>

      <IssuesPreview />

      <SubscriptionSection />

      <SiteFooter />
    </>
  )
}