import logoSvertchok from '../assets/images/logo-svertchok.png'
import bukovkiLogo from '../assets/images/Bukovki_logo.svg'

import Button from './ui/Button'

import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
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
              <Button
                variant="primary"
                to="/contact"
              >
                Написать Сверчку
              </Button>

              <Button
                variant="outline"
                href="#"
              >
                Поддержать альманах
              </Button>
            </div>
          </div>

          <div className="site-footer__bukovki">
            <img
              src={bukovkiLogo}
              alt="Буковки"
            />
          </div>
        </div>
      </div>
    </footer>
  )
}