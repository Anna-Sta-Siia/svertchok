import {
  useEffect,
  useRef,
  useState,
} from 'react'

import {
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import SeasonalNavbar from '../components/navigation/SeasonalNavbar'

import AnnouncementOverlay from '../components/AnnouncementOverlay'
import ContactOverlay from '../components/ContactOverlay'
import ContactForm from '../components/ContactForm'

import {
  getNavItems,
} from '../assets/data/navItems'

import springFlower from '../assets/images/seasons/spring-flower.png'
import summerStrawberry from '../assets/images/seasons/summer-berry.png'
import autumnLeaf from '../assets/images/seasons/autumn-leaf.png'
import winterSnowflake from '../assets/images/seasons/winter-snowflake.png'

import {
  getCurrentSeason,
  type Season,
} from '../utils/getCurrentSeason'

import './MainLayout.css'


const seasonImages:
  Record<
    Season,
    string
  > = {
    spring:
      springFlower,

    summer:
      summerStrawberry,

    autumn:
      autumnLeaf,

    winter:
      winterSnowflake,
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

  const isContactRoute =
    location.hash ===
    '#contact'


  const [
    isContactDirty,
    setIsContactDirty,
  ] = useState(false)


  const isContactVisible =
    isContactRoute ||
    isContactDirty


  const isNavigationConfirmOpen =
    isContactDirty &&
    !isContactRoute


  const contactLocationRef =
    useRef<{
      pathname: string
      search: string
      hash: string
    } | null>(
      null,
    )


  const contactHistoryIndexRef =
    useRef<number | null>(
      null,
    )


  /* =========================
     SCROLL TO TOP
     ON PAGE CHANGE
     ========================= */

  useEffect(() => {
    window.scrollTo({
      top:
        0,

      left:
        0,

      behavior:
        'auto',
    })
  }, [
    location.pathname,
  ])


  /* =========================
     SCROLL TO NORMAL HASH
     ========================= */

  useEffect(() => {
    if (
      !location.hash
    ) {
      return
    }


    /*
     * #contact opens an overlay.
     * It is not a section that
     * should be scrolled to.
     */

    if (
      isContactRoute
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
    isContactRoute,
  ])


  /* =========================
     CONTACT NAVIGATION GUARD

     Covers SPA navigation and
     browser Back / Forward

     Hard reload / tab close is
     handled by beforeunload inside
     ContactOverlay
     ========================= */

  useEffect(
    () => {
      if (
        !isContactRoute
      ) {
        return
      }


      contactLocationRef.current = {
        pathname:
          location.pathname,

        search:
          location.search,

        hash:
          location.hash,
      }


      const historyIndex =
        window.history.state
          ?.idx


      contactHistoryIndexRef.current =
        typeof historyIndex ===
        'number'
          ? historyIndex
          : null
    },
    [
      isContactRoute,
      location.pathname,
      location.search,
      location.hash,
      location.key,
    ],
  )


  function continueContactForm() {
    const currentHistoryIndex =
      window.history.state
        ?.idx


    const contactHistoryIndex =
      contactHistoryIndexRef.current


    if (
      typeof currentHistoryIndex ===
        'number' &&
      typeof contactHistoryIndex ===
        'number'
    ) {
      const delta =
        contactHistoryIndex -
        currentHistoryIndex


      if (
        delta !==
        0
      ) {
        window.history.go(
          delta,
        )

        return
      }
    }


    const contactLocation =
      contactLocationRef.current


    if (
      contactLocation
    ) {
      navigate(
        contactLocation,
        {
          replace:
            true,
        },
      )

      return
    }


    navigate(
      '#contact',
      {
        replace:
          true,
      },
    )
  }


  function leaveContactForm() {
    setIsContactDirty(
      false,
    )
  }


  /* =========================
     CLOSE CONTACT
     ========================= */

  function closeContact() {
    setIsContactDirty(
      false,
    )


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
          length:
            8,
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
          GLOBAL ANNOUNCEMENT
          ===================== */}

      {!isContactVisible && (
        <AnnouncementOverlay />
      )}


      {/* =====================
          GLOBAL CONTACT
          ===================== */}

      <ContactOverlay
        isOpen={
          isContactVisible
        }
        isDirty={
          isContactDirty
        }
        isNavigationConfirmOpen={
          isNavigationConfirmOpen
        }
        onContinueNavigation={
          continueContactForm
        }
        onConfirmNavigation={
          leaveContactForm
        }
        onClose={
          closeContact
        }
      >
        <ContactForm
          onDirtyChange={
            setIsContactDirty
          }
        />
      </ContactOverlay>

    </div>
  )
}