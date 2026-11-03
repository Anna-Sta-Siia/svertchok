import { useEffect } from 'react'

import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SeasonalNavbar from '../components/navigation/SeasonalNavbar'

import ContactOverlay from '../components/ContactOverlay'
import ContactForm from '../components/ContactForm'

import { getNavItems } from '../assets/data/navItems'

import springFlower from '../assets/images/seasons/spring-flower.png'
import summerStrawberry from '../assets/images/seasons/summer-berry.png'
import autumnLeaf from '../assets/images/seasons/autumn-leaf.png'
import winterSnowflake from '../assets/images/seasons/winter-snowflake.png'

import {
  getCurrentSeason,
  type Season,
} from '../utils/getCurrentSeason'

import './MainLayout.css'


const seasonImages: Record<
  Season,
  string
> = {
  spring: springFlower,
  summer: summerStrawberry,
  autumn: autumnLeaf,
  winter: winterSnowflake,
}


export default function MainLayout() {
  const location =
    useLocation()

  const navigate =
    useNavigate()

  const season =
    getCurrentSeason()

  const navItems =
    getNavItems()

  const seasonalImage =
    seasonImages[
      season
    ]


  /* =========================
     HEADER VARIANT
     ========================= */

  const headerVariant =
    location.pathname === '/'
      ? 'hero'
      : 'compact'


  /* =========================
     CONTACT OVERLAY
     ========================= */

  const isContactOpen =
    location.hash ===
    '#contact'


  /* =========================
     SCROLL TO NORMAL HASH
     ========================= */

  useEffect(() => {
    if (
      !location.hash
    ) {
      return
    }


    if (
      location.hash ===
      '#contact'
    ) {
      return
    }


    const id =
      decodeURIComponent(
        location.hash.slice(
          1,
        ),
      )


    requestAnimationFrame(
      () => {
        const element =
          document.getElementById(
            id,
          )


        if (
          !element
        ) {
          return
        }


        element.scrollIntoView({
          behavior:
            'smooth',

          block:
            'start',
        })
      },
    )
  }, [
    location.pathname,
    location.hash,
    location.key,
  ])


  /* =========================
     CLOSE CONTACT
     ========================= */

  function closeContact() {
    navigate(
      {
        pathname:
          location.pathname,

        search:
          location.search,
      },
      {
        replace:
          true,
      },
    )
  }


  return (
    <div
      className="site-shell"
      data-season={
        season
      }
    >
      {/* =====================
          SEASONAL BACKGROUND
          ===================== */}

      <div
        className="season-background"
        aria-hidden="true"
      >
        {Array.from({
          length: 8,
        }).map(
          (
            _,
            index,
          ) => (
            <img
              key={
                index
              }
              src={
                seasonalImage
              }
              alt=""
              className={`
                season-background__image
                season-background__image--${index + 1}
              `}
            />
          ),
        )}
      </div>


      {/* =====================
          HEADER
          ===================== */}

      <SiteHeader
        variant={
          headerVariant
        }
      />


      {/* =====================
          NAVIGATION
          ===================== */}

      <SeasonalNavbar
        season={
          season
        }
        items={
          navItems
        }
      />


      {/* =====================
          PAGE CONTENT
          ===================== */}

      <main className="site-layout">
        <Outlet />
      </main>


      {/* =====================
          FOOTER
          ===================== */}

      <SiteFooter />


      {/* =====================
          GLOBAL CONTACT
          ===================== */}

      <ContactOverlay
        isOpen={
          isContactOpen
        }
        onClose={
          closeContact
        }
      >
        <ContactForm />
      </ContactOverlay>
    </div>
  )
}