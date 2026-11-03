import {
  Link,
} from 'react-router-dom'

import logoSvertchok from '../assets/images/logo-svertchok.png'
import titleSvertchok from '../assets/images/title-svertchok.png'
import bukovkiLogo from '../assets/images/Bukovki_logo.png'

import './SiteFooter.css'


const FACEBOOK_URL =
  'https://www.facebook.com/BoukovkiFrance/'

const INSTAGRAM_URL =
  'https://www.instagram.com/boukovki/'


export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        {/* =====================
            MAIN
            ===================== */}

        <div className="site-footer__top">

          {/* SVERTCHOK */}

          <Link
            to="/"
            className="site-footer__brand"
            aria-label="На главную страницу «Сверчка»"
          >
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
          </Link>


          {/* GOODBYE */}

          <div className="site-footer__goodbye">
            <p className="site-footer__goodbye-first">
              Спасибо, что заглянули
              к Сверчку на огонёк.
            </p>

            <p className="site-footer__goodbye-second">
              До новых историй
              и новых встреч
            </p>
          </div>


          {/* BOUKOVKI */}

          <Link
            to="/about"
            className="site-footer__bukovki"
            aria-label="О «Буковках»"
          >
            <img
              src={bukovkiLogo}
              alt="Буковки"
              className="site-footer__bukovki-logo"
            />
          </Link>

        </div>


        {/* =====================
            LEGAL / CONTACTS
            ===================== */}

        <div className="site-footer__meta">

          <div className="site-footer__legal">
            <span>
              © Association «Boukovki»
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              RNA W751230833
            </span>

            <span
              aria-hidden="true"
            >
              ·
            </span>

            <span>
              ISSN 2650-0663
            </span>
          </div>


          <nav
            className="site-footer__contacts"
            aria-label="Контакты и социальные сети"
          >
            <a
              href="mailto:boukovki@hotmail.com"
              className="site-footer__contact-link site-footer__contact-link--email"
              aria-label="Написать по электронной почте"
            >
              ✉
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="site-footer__contact-link site-footer__contact-link--facebook"
              aria-label="Facebook «Буковок»"
            >
              f
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="site-footer__contact-link site-footer__contact-link--instagram"
              aria-label="Instagram «Буковок»"
            >
              ◎
            </a>
          </nav>

        </div>
      </div>
    </footer>
  )
}