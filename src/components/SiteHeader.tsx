import logoSvertchok from '../assets/images/logo-svertchok.png'
import titleSvertchok from '../assets/images/title-svertchok.png'

import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
          <p className="site-header__eyebrow">
          ЛИТЕРАТУРНЫЙ АЛЬМАНАХ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ
        </p>
        <div className="site-header__intro">
          <img
            src={logoSvertchok}
            alt="Сверчок"
            className="site-header__mascot"
          />

          <div className="site-header__speech site-header__speech--left">
            <p className="site-header__speech-accent">
              Разрешите представиться,
            </p>

            <p>
              Меня зовут…
            </p>
          </div>
        </div>

        <div className="site-header__brand">
       

          <img
            src={titleSvertchok}
            alt="Сверчок"
            className="site-header__title"
          />
        </div>

        <div className="site-header__speech site-header__speech--right">
          <p>
            Усаживайся поудобнее,
          </p>

          <p className="site-header__speech-accent">
            и я расскажу тебе
             <br />
    свои истории…
          </p>
        </div>
      </div>
    </header>
  )
}