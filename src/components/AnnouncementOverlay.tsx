import {
  useCallback,
  useEffect,
  useState,
} from 'react'

import {
  announcementTypeLabels,
  getCurrentAnnouncement,
} from '../assets/data/announcements'

import './AnnouncementOverlay.css'


const DISPLAY_DELAY =
  1000


export default function AnnouncementOverlay() {
  const announcement =
    getCurrentAnnouncement()

  const [
    isOpen,
    setIsOpen,
  ] = useState(false)


  /* =========================
     CLOSE
     ========================= */

  const closeAnnouncement =
    useCallback(() => {
      if (!announcement) {
        return
      }

      const storageKey =
        `sverchok-announcement-${announcement.id}`

      sessionStorage.setItem(
        storageKey,
        'dismissed',
      )

      setIsOpen(false)
    }, [announcement])


  /* =========================
     OPEN WITH DELAY
     ========================= */

  useEffect(() => {
    if (!announcement) {
      return
    }

    const storageKey =
      `sverchok-announcement-${announcement.id}`

    const dismissed =
      sessionStorage.getItem(
        storageKey,
      )

    if (dismissed) {
      return
    }

    const timer =
      window.setTimeout(
        () => {
          setIsOpen(true)
        },
        DISPLAY_DELAY,
      )

    return () => {
      window.clearTimeout(
        timer,
      )
    }
  }, [announcement])


  /* =========================
     ESCAPE
     ========================= */

  useEffect(() => {
    if (!isOpen) {
      return
    }

    function handleKeyDown(
      event: KeyboardEvent,
    ) {
      if (
        event.key ===
        'Escape'
      ) {
        closeAnnouncement()
      }
    }

    document.addEventListener(
      'keydown',
      handleKeyDown,
    )

    return () => {
      document.removeEventListener(
        'keydown',
        handleKeyDown,
      )
    }
  }, [
    isOpen,
    closeAnnouncement,
  ])


  /* =========================
     NOTHING TO DISPLAY
     ========================= */

  if (
    !announcement ||
    !isOpen
  ) {
    return null
  }


  /* =========================
     RENDER
     ========================= */

  return (
    <div className="announcement-overlay">

      <button
        type="button"
        className="announcement-overlay__backdrop"
        aria-label="Закрыть объявление"
        onClick={
          closeAnnouncement
        }
      />


      <article
        className="announcement-overlay__card"
        role="dialog"
        aria-modal="true"
        aria-labelledby="announcement-title"
      >

        <button
          type="button"
          className="announcement-overlay__close"
          aria-label="Закрыть"
          onClick={
            closeAnnouncement
          }
        >
          ×
        </button>


        <p className="announcement-overlay__type">
          {
            announcementTypeLabels[
              announcement.type
            ]
          }
        </p>


        <h2
          id="announcement-title"
          className="announcement-overlay__title"
        >
          {announcement.title}
        </h2>


        <p className="announcement-overlay__text">
          {announcement.text}
        </p>


        {announcement.link && (
          <a
            href={
              announcement.link
            }
            target="_blank"
            rel="noreferrer"
            className="announcement-overlay__link"
            onClick={
              closeAnnouncement
            }
          >
            {
              announcement.linkLabel ??
              'Узнать подробнее →'
            }
          </a>
        )}

      </article>
    </div>
  )
}