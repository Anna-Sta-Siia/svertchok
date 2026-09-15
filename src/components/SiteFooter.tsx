import logoSvertchok from '../assets/logo-svertchok.png'
import bukovkiLogo from '../assets/Bukovki_logo.svg'

import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <p className="site-footer__message">
        Спасибо, что заглянули к Сверчку на огонёк.
      </p>

      <div className="site-footer__content">
        <div className="site-footer__brand">
          <img
            src={logoSvertchok}
            alt="Сверчок"
            className="site-footer__svertchok"
          />

          <p>
            АССОЦИАЦИЯ ЛЮБИТЕЛЕЙ
            <br />
            РУССКОЯЗЫЧНОЙ
            <br />
            ДЕТСКОЙ ЛИТЕРАТУРЫ
          </p>
        </div>

        <div className="site-footer__center">
          <p className="site-footer__goodbye">
            До новых историй и новых встреч!
          </p>

          <div className="site-footer__actions">
            <button type="button">
              Написать Сверчку
            </button>

            <button type="button">
              Поддержать альманах
            </button>
          </div>
        </div>

        <div className="site-footer__boukovki">
          <img
            src={bukovkiLogo}
            alt="Буковки"
          />
        </div>
      </div>
    </footer>
  )
}