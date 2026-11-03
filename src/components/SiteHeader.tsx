import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import logoSvertchok from '../assets/images/logo-svertchok.png'
import titleSvertchok from '../assets/images/title-svertchok.png'
import bukovkiLogo from '../assets/images/Bukovki_logo.png'

import './SiteHeader.css'


const FACEBOOK_URL =
  'https://www.facebook.com/BoukovkiFrance/'

const INSTAGRAM_URL =
  'https://www.instagram.com/boukovki/'

const DONATION_URL =
  'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/formulaires/1'


export default function SiteHeader() {
  const [
    isSupportOpen,
    setIsSupportOpen,
  ] = useState(
    false,
  )

  const supportRef =
    useRef<HTMLDivElement>(
      null,
    )


  /* =========================
     CLOSE SUPPORT MENU
     ========================= */

  useEffect(() => {
    function handlePointerDown(
      event: MouseEvent,
    ) {
      if (
        supportRef.current &&
        !supportRef.current.contains(
          event.target as Node,
        )
      ) {
        setIsSupportOpen(
          false,
        )
      }
    }


    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key ===
        'Escape'
      ) {
        setIsSupportOpen(
          false,
        )
      }
    }


    document.addEventListener(
      'mousedown',
      handlePointerDown,
    )

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )


    return () => {
      document.removeEventListener(
        'mousedown',
        handlePointerDown,
      )

      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [])


  return (
    <header className="site-header">
      <div className="site-header__inner">

        {/* =====================
            SOCIALS — TOP LEFT
            ===================== */}

        <nav
          className="site-header__socials"
          aria-label="Социальные сети «Буковок»"
        >
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__social-link site-header__social-link--facebook"
            aria-label="Facebook «Буковок»"
          >
            f
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__social-link site-header__social-link--instagram"
            aria-label="Instagram «Буковок»"
          >
            ◎
          </a>
        </nav>


        {/* =====================
            BOUKOVKI — TOP CENTER
            ===================== */}

        <div className="site-header__eyebrow">
          <Link
            to="/about"
            className="site-header__bukovki-link"
            aria-label="О «Буковках»"
          >
            <img
              src={bukovkiLogo}
              alt="Буковки"
              className="site-header__bukovki-logo"
            />
          </Link>

          <span className="site-header__eyebrow-text">
            представляют
          </span>
        </div>


        {/* =====================
            SUPPORT — TOP RIGHT
            ===================== */}

        <div
          ref={supportRef}
          className="site-header__support"
        >
          <button
            type="button"
            className={`
              site-header__support-trigger
              ${
                isSupportOpen
                  ? 'site-header__support-trigger--open'
                  : ''
              }
            `.trim()}
            aria-label="Подписаться или поддержать «Сверчок»"
            aria-expanded={
              isSupportOpen
            }
            aria-controls="site-header-support-menu"
            onClick={() =>
              setIsSupportOpen(
                (
                  current,
                ) =>
                  !current,
              )
            }
          >
            <span
              className="site-header__support-heart"
              aria-hidden="true"
            >
              ♡
            </span>

            <span
              className="site-header__support-chevron"
              aria-hidden="true"
            >
              ⌄
            </span>
          </button>


          {isSupportOpen && (
            <div
              id="site-header-support-menu"
              className="site-header__support-menu"
            >
              <Link
                to="/subscription"
                className="site-header__support-item"
                onClick={() =>
                  setIsSupportOpen(
                    false,
                  )
                }
              >
                Подписаться
              </Link>

              <a
                href={DONATION_URL}
                target="_blank"
                rel="noreferrer"
                className="site-header__support-item"
                onClick={() =>
                  setIsSupportOpen(
                    false,
                  )
                }
              >
                Поддержать нас
              </a>
            </div>
          )}
        </div>


        {/* =====================
            INTRO — BOTTOM LEFT
            ===================== */}

        <div className="site-header__intro">
          <img
            src={logoSvertchok}
            alt=""
            aria-hidden="true"
            className="site-header__mascot"
          />

          <div className="site-header__speech site-header__speech--left">
            <p className="site-header__speech-accent">
              Давайте
              <br />
              знакомиться,
            </p>

            <p>
              Меня зовут…
            </p>
          </div>
        </div>


        {/* =====================
            SVERTCHOK
            BOTTOM CENTER
            ===================== */}

        <Link
          to="/"
          className="site-header__brand"
          aria-label="На главную страницу «Сверчка»"
        >
          <img
            src={titleSvertchok}
            alt="Сверчок"
            className="site-header__title"
          />
        </Link>


        {/* =====================
            SPEECH — BOTTOM RIGHT
            ===================== */}

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