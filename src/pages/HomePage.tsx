import SeasonalNavbar from '../components/SeasonalNavbar'
import SubscriptionSection from '../components/SubscriptionSection'
import SiteFooter from '../components/SiteFooter'
import IssueCard from '../components/IssueCard'
import { currentIssue } from '../data/issues'

import logoSvertchok from '../assets/logo-svertchok.png'
import titleSvertchok from '../assets/title-svertchok.png'

import './HomePage.css'
import IssuesPreview from '../components/IssuesPreview'
const leftNavItems = [
  'Давайте знакомиться',
  'Новый номер',
  'Авторы и художники',
]

const rightNavItems = [
  'Наши номера',
  'Интервью',
  'Написать Сверчку',
]

export default function HomePage() {
  return (
    <>
      <div className="home-top">
        <SeasonalNavbar
          season="autumn"
          side="left"
          items={leftNavItems}
        />

        <section className="hero-section">
          <h1 className="hero-heading">
            ЛИТЕРАТУРНЫЙ АЛЬМАНАХ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ
          </h1>

          <div className="hero-main">
            <img
              src={logoSvertchok}
              alt="Сверчок"
              className="hero-logo"
            />

            <div className="hero-content">
              <img
                src={titleSvertchok}
                alt="Сверчок"
                className="hero-title"
              />

              <p className="hero-intro">
                Привет!
                {'\n'}Меня зовут Сверчок.
                {'\n'}Усаживайся поудобнее,
                {'\n'}и я расскажу тебе свои истории...
              </p>
            </div>
          </div>
        </section>

        <SeasonalNavbar
          season="autumn"
          side="right"
          items={rightNavItems}
        />
      </div>

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
      <IssuesPreview />

<SubscriptionSection />

<SiteFooter />
    </>
  )
}