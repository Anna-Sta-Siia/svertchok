import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import bukovkiLogo from '../assets/images/Bukovki_logo.png'
import logoSvertchok from '../assets/images/logo-svertchok.png'
import compactTitle from '../assets/images/title-svertchok-espacé.png'

import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagramm.png'

import subscribeIcon from "../assets/images/s'abonner.png"
import supportIcon from '../assets/images/supporter.png'

import letterS from '../assets/images/S.png'
import letterV from '../assets/images/V.png'
import letterE from '../assets/images/E.png'
import letterR from '../assets/images/R.png'
import letterCH from '../assets/images/CH.png'
import letterO from '../assets/images/O.png'
import letterK from '../assets/images/K.png'

import './SiteHeader.css'


const FACEBOOK_URL =
  'https://www.facebook.com/BoukovkiFrance/'

const INSTAGRAM_URL =
  'https://www.instagram.com/boukovki/'

const DONATION_URL =
  'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/formulaires/1'


export type SiteHeaderVariant =
  | 'hero'
  | 'compact'


type SiteHeaderProps = {
  variant?: SiteHeaderVariant
}


type OpenAction =
  | 'subscribe'
  | 'support'
  | null


const heroTitleItems = [
  {
    type: 'letter',
    src: letterS,
  },
  {
    type: 'letter',
    src: letterV,
  },
  {
    type: 'letter',
    src: letterE,
  },
  {
    type: 'letter',
    src: letterR,
  },
  {
    type: 'letter',
    src: letterCH,
  },
  {
    type: 'letter',
    src: letterO,
  },
  {
    type: 'mascot',
    src: logoSvertchok,
  },
  {
    type: 'letter',
    src: letterK,
  },
] as const


export default function SiteHeader({
  variant = 'compact',
}: SiteHeaderProps) {
  const [
    openAction,
    setOpenAction,
  ] = useState<OpenAction>(
    null,
  )

  const actionsRef =
    useRef<HTMLDivElement>(
      null,
    )


  /* =========================
     CLOSE ACTIONS
     ========================= */

  useEffect(() => {
    function handlePointerDown(
      event: MouseEvent,
    ) {
      if (
        actionsRef.current &&
        !actionsRef.current.contains(
          event.target as Node,
        )
      ) {
        setOpenAction(
          null,
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
        setOpenAction(
          null,
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


  function toggleAction(
    action: Exclude<
      OpenAction,
      null
    >,
  ) {
    setOpenAction(
      (
        current,
      ) =>
        current ===
        action
          ? null
          : action,
    )
  }


  return (
    <header
      className={`
        site-header
        site-header--${variant}
      `}
    >
      {/* =====================
          UTILITY ROW
          ===================== */}

      <div className="site-header__utility">

        {/* SOCIALS */}

        <nav
          className="site-header__socials"
          aria-label="Социальные сети «Буковок»"
        >
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__social-link"
            aria-label="Facebook «Буковок»"
          >
            <img
              src={facebookIcon}
              alt=""
              aria-hidden="true"
            />
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__social-link"
            aria-label="Instagram «Буковок»"
          >
            <img
              src={instagramIcon}
              alt=""
              aria-hidden="true"
            />
          </a>
        </nav>


        {/* HERO:
            BOUKOVKI PRESENT */}

        {variant ===
        'hero' ? (
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
        ) : (

          /* COMPACT:
             SMALL SVERTCHOK BRAND */

          <Link
            to="/"
            className="site-header__compact-brand"
            aria-label="На главную страницу «Сверчка»"
          >
            <img
              src={logoSvertchok}
              alt=""
              aria-hidden="true"
              className="site-header__compact-mascot"
            />

            <img
              src={compactTitle}
              alt="Сверчок"
              className="site-header__compact-title"
            />
          </Link>
        )}


        {/* ACTIONS */}

        <div
          ref={actionsRef}
          className="site-header__actions"
        >

          {/* SUBSCRIBE */}

          <div className="site-header__action">
            <button
              type="button"
              className="site-header__action-trigger"
              aria-label="Подписаться на «Сверчок»"
              aria-expanded={
                openAction ===
                'subscribe'
              }
              aria-controls="header-subscribe-menu"
              onClick={() =>
                toggleAction(
                  'subscribe',
                )
              }
            >
              <img
                src={subscribeIcon}
                alt=""
                aria-hidden="true"
                className="site-header__action-icon"
              />

              <span
                className={`
                  site-header__action-chevron
                  ${
                    openAction ===
                    'subscribe'
                      ? 'site-header__action-chevron--open'
                      : ''
                  }
                `}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>


            {openAction ===
              'subscribe' && (
              <div
                id="header-subscribe-menu"
                className="site-header__action-menu"
              >
                <Link
                  to="/subscription"
                  className="site-header__action-menu-link"
                  onClick={() =>
                    setOpenAction(
                      null,
                    )
                  }
                >
                  Подписаться
                </Link>
              </div>
            )}
          </div>


          {/* SUPPORT */}

          <div className="site-header__action">
            <button
              type="button"
              className="site-header__action-trigger"
              aria-label="Поддержать «Сверчок»"
              aria-expanded={
                openAction ===
                'support'
              }
              aria-controls="header-support-menu"
              onClick={() =>
                toggleAction(
                  'support',
                )
              }
            >
              <img
                src={supportIcon}
                alt=""
                aria-hidden="true"
                className="site-header__action-icon"
              />

              <span
                className={`
                  site-header__action-chevron
                  ${
                    openAction ===
                    'support'
                      ? 'site-header__action-chevron--open'
                      : ''
                  }
                `}
                aria-hidden="true"
              >
                ⌄
              </span>
            </button>


            {openAction ===
              'support' && (
              <div
                id="header-support-menu"
                className="site-header__action-menu"
              >
                <a
                  href={DONATION_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="site-header__action-menu-link"
                  onClick={() =>
                    setOpenAction(
                      null,
                    )
                  }
                >
                  Поддержать нас
                </a>
              </div>
            )}
          </div>
        </div>
      </div>


      {/* =====================
          HERO HEADER ONLY
          ===================== */}

      {variant ===
        'hero' && (
        <div className="site-header__hero">
          <p className="site-header__hero-kicker">
            литературный альманах для детей и родителей
          </p>

          <Link
            to="/"
            className="site-header__hero-brand"
            aria-label="На главную страницу «Сверчка»"
          >
            <span
              className="site-header__hero-title"
              aria-hidden="true"
            >
              {heroTitleItems.map(
                (
                  item,
                  index,
                ) => (
                  <img
                    key={
                      index
                    }
                    src={
                      item.src
                    }
                    alt=""
                    className={
                      item.type ===
                      'mascot'
                        ? 'site-header__hero-mascot'
                        : 'site-header__hero-letter'
                    }
                  />
                ),
              )}
            </span>
          </Link>
        </div>
      )}
    </header>
  )
}