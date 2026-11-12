import type {
  CSSProperties,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import logoSvertchok from '../assets/images/logo-svertchok.png'
import compactTitle from '../assets/images/title-svertchok-espacé.png'

import facebookIcon from '../assets/images/facebook.png'
import instagramIcon from '../assets/images/instagramm.png'
import emailIcon from '../assets/images/e-mail.png'

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

const EMAIL_URL =
  'mailto:boukovki@hotmail.com'

const DONATION_URL =
  'https://www.helloasso.com/associations/association-des-amateurs-de-la-litterature-russophone-pour-les-enfants-et-la-jeunesse-boukovki/formulaires/1'


export type SiteHeaderVariant =
  | 'hero'
  | 'compact'


type SiteHeaderProps = {
  variant?: SiteHeaderVariant
}


/*
 * Le personnage n'est plus
 * placé dans le mot SVERCHOK.
 *
 * Il vit maintenant dans
 * la colonne gauche du header.
 */

const heroTitleItems = [
  letterS,
  letterV,
  letterE,
  letterR,
  letterCH,
  letterO,
  letterK,
] as const


type HeaderIconProps = {
  src:
    string
}


function HeaderIcon({
  src,
}: HeaderIconProps) {
  const style = {
    WebkitMaskImage:
      `url("${src}")`,

    maskImage:
      `url("${src}")`,
  } as CSSProperties


  return (
    <span
      className="site-header__icon-image"
      style={style}
      aria-hidden="true"
    />
  )
}


export default function SiteHeader({
  variant = 'compact',
}: SiteHeaderProps) {
  return (
    <header
      className={`
        site-header
        site-header--${variant}
      `}
    >
      <div className="site-header__shell">

        {/* =====================
            LEFT — SVERTCHOK
            ===================== */}

        <Link
          to="/"
          className="site-header__mascot-link"
          aria-label="На главную страницу «Сверчка»"
        >
          <img
            src={logoSvertchok}
            alt=""
            aria-hidden="true"
            className="site-header__mascot"
          />
        </Link>


        {/* =====================
            CENTER
            ===================== */}

        <div className="site-header__center">

          {variant ===
            'hero' ? (
            <>
              <p className="site-header__kicker">
                литературный альманах
                для детей и родителей
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
                      src,
                      index,
                    ) => (
                      <img
                        key={
                          index
                        }
                        src={
                          src
                        }
                        alt=""
                        className="site-header__hero-letter"
                      />
                    ),
                  )}
                </span>
              </Link>
            </>
          ) : (
            <Link
              to="/"
              className="site-header__compact-brand"
              aria-label="На главную страницу «Сверчка»"
            >
              <img
                src={compactTitle}
                alt="Сверчок"
                className="site-header__compact-title"
              />
            </Link>
          )}

        </div>


        {/* =====================
            RIGHT — ICON RAIL
            ===================== */}

        <div
          className="site-header__rail"
          aria-label="Ссылки и действия"
        >

          {/* =====================
              SUBSCRIBE
              ===================== */}

          <div className="site-header__action">
            <Link
              to="/subscription"
              className="site-header__icon-link"
              data-tooltip="Подписаться"
              aria-label="Подписаться на «Сверчок»"
            >
              <HeaderIcon
                src={subscribeIcon}
              />
            </Link>
          </div>


          {/* =====================
              FACEBOOK
              ===================== */}

          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__icon-link"
            data-tooltip="Facebook"
            aria-label="Facebook «Буковок»"
          >
            <HeaderIcon
              src={facebookIcon}
            />
          </a>


          {/* =====================
              INSTAGRAM
              ===================== */}

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="site-header__icon-link"
            data-tooltip="Instagram"
            aria-label="Instagram «Буковок»"
          >
            <HeaderIcon
              src={instagramIcon}
            />
          </a>


          {/* =====================
              EMAIL
              ===================== */}

          <a
            href={EMAIL_URL}
            className="site-header__icon-link"
            data-tooltip="Написать"
            aria-label="Написать «Буковкам» по электронной почте"
          >
            <HeaderIcon
              src={emailIcon}
            />
          </a>


          {/* =====================
              SUPPORT
              ===================== */}

          <div className="site-header__action">
            <a
              href={DONATION_URL}
              target="_blank"
              rel="noreferrer"
              className="site-header__icon-link"
              data-tooltip="Поддержать"
              aria-label="Поддержать «Сверчок»"
            >
              <HeaderIcon
                src={supportIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}