import type {
  CSSProperties,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import logoSvertchok from '../assets/images/logo-svertchok.png'
import bukovkiLogo from '../assets/images/Bukovki_logo.png'

import emailIcon from '../assets/images/e-mail.png'
import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagramm.png'

import letterS from '../assets/images/S.png'
import letterV from '../assets/images/V.png'
import letterE from '../assets/images/E.png'
import letterR from '../assets/images/R.png'
import letterCH from '../assets/images/CH.png'
import letterO from '../assets/images/O.png'
import letterK from '../assets/images/K.png'

import './SiteFooter.css'


const FACEBOOK_URL =
  'https://www.facebook.com/BoukovkiFrance/'

const INSTAGRAM_URL =
  'https://www.instagram.com/boukovki/'


const titleLetters = [
  letterS,
  letterV,
  letterE,
  letterR,
  letterCH,
  letterO,
  letterK,
]


type FooterIconProps = {
  src:
    string
}


function FooterIcon({
  src,
}: FooterIconProps) {
  const style = {
    WebkitMaskImage:
      `url("${src}")`,

    maskImage:
      `url("${src}")`,
  } as CSSProperties


  return (
    <span
      className="site-footer__contact-icon"
      style={style}
      aria-hidden="true"
    />
  )
}


export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">

        <div className="site-footer__top">

          {/* VERTICAL SVERTCHOK */}

          <Link
            to="/"
            className="site-footer__letters"
            aria-label="На главную страницу «Сверчка»"
          >
            {titleLetters.map(
              (
                letter,
                index,
              ) => (
                <img
                  key={index}
                  src={letter}
                  alt=""
                  aria-hidden="true"
                />
              ),
            )}
          </Link>


          {/* MASCOT */}

          <Link
            to="/"
            className="site-footer__mascot-link"
            aria-label="На главную страницу «Сверчка»"
          >
            <img
              src={logoSvertchok}
              alt=""
              aria-hidden="true"
              className="site-footer__mascot"
            />
          </Link>


          {/* GOODBYE */}

          <div className="site-footer__goodbye">
            <p className="site-footer__goodbye-first">
              Спасибо, что заглянули
              к Сверчку на огонёк
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
            META
            ===================== */}

        <div className="site-footer__meta">

          <div className="site-footer__legal">
            <span>
              © Association «Boukovki»
            </span>

            <span aria-hidden="true">
              ·
            </span>

            <span>
              RNA W751230833
            </span>

            <span aria-hidden="true">
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
              className="site-footer__contact-link"
              aria-label="Написать по электронной почте"
            >
              <FooterIcon
                src={emailIcon}
              />
            </a>

            <a
              href={FACEBOOK_URL}
              target="_blank"
              rel="noreferrer"
              className="site-footer__contact-link"
              aria-label="Facebook «Буковок»"
            >
              <FooterIcon
                src={facebookIcon}
              />
            </a>

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="site-footer__contact-link"
              aria-label="Instagram «Буковок»"
            >
              <FooterIcon
                src={instagramIcon}
              />
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}