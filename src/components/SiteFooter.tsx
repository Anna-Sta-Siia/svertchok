import logoSvertchok from '../assets/images/logo-svertchok.png'
import titleSvertchok from '../assets/images/title-svertchok.png'
import bukovkiLogo from '../assets/images/Bukovki_logo.svg'

import Button from './ui/Button'

import './SiteFooter.css'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
       <div className="site-footer__top">
  {/* LEFT */}

  <div className="site-footer__brand">
    <img
      src={logoSvertchok}
      alt=""
      aria-hidden="true"
      className="site-footer__mascot"
    />

    <img
      src={titleSvertchok}
      alt="Сверчок"
      className="site-footer__title"
    />
  </div>

  {/* CENTER */}

  <div className="site-footer__support">
    <p>
      Альманах выходит при поддержке
      Ассоциации любителей русскоязычной
      детской литературы
    </p>

    <Button
      variant="outline"
      to="/support"
    >
      Поддержать альманах →
    </Button>
  </div>

  {/* RIGHT */}

  <div className="site-footer__bukovki-wrap">
    <img
      src={bukovkiLogo}
      alt="Ассоциация «Буковки»"
      className="site-footer__bukovki"
    />
  </div>
</div>

        <div className="site-footer__goodbye">
          <p className="site-footer__goodbye-first">
            Спасибо, что заглянули к Сверчку на огонёк.
          </p>

          <p className="site-footer__goodbye-second">
            До новых историй и новых встреч
          </p>
        </div>
      </div>
    </footer>
  )
}