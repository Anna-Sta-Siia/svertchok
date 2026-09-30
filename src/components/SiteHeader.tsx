import logoSvertchok from '../assets/logo-svertchok.png'
import titleSvertchok from '../assets/title-svertchok.png'

import './SiteHeader.css'

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner"><p className="site-header__eyebrow">
          ЛИТЕРАТУРНЫЙ АЛЬМАНАХ ДЛЯ ДЕТЕЙ И РОДИТЕЛЕЙ
        </p>
                <div className="site-header__brand">   
                  <img
            src={logoSvertchok}
            alt=""
            aria-hidden="true"
            className="site-header__mascot"
          />
          <img
            src={titleSvertchok}
            alt="Сверчок"
            className="site-header__title"
          />
       
        </div>
        


      </div>
    </header>
  )
}