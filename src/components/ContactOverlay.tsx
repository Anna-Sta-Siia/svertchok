import {
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from 'react'

import Button from './ui/Button'

import './ContactOverlay.css'


type ContactOverlayProps = {
  isOpen: boolean
  isDirty?: boolean

  isNavigationConfirmOpen?: boolean
  onContinueNavigation?: () => void
  onConfirmNavigation?: () => void

  onClose: () => void
  children: ReactNode
}


const FOCUSABLE_SELECTOR = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'textarea:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',')


export default function ContactOverlay({
  isOpen,
  isDirty = false,

  isNavigationConfirmOpen = false,
  onContinueNavigation,
  onConfirmNavigation,

  onClose,
  children,
}: ContactOverlayProps) {
  const [
    isCloseConfirmOpen,
    setIsCloseConfirmOpen,
  ] = useState(false)


  const panelRef =
    useRef<HTMLDivElement>(
      null,
    )


  const confirmRef =
    useRef<HTMLDivElement>(
      null,
    )


  const closeButtonRef =
    useRef<HTMLButtonElement>(
      null,
    )


  const continueButtonRef =
    useRef<HTMLButtonElement>(
      null,
    )


  const previousFocusRef =
    useRef<HTMLElement | null>(
      null,
    )


  const focusBeforeConfirmRef =
    useRef<HTMLElement | null>(
      null,
    )


  const isAnyConfirmOpen =
    isCloseConfirmOpen ||
    isNavigationConfirmOpen


  const isNavigationConfirmation =
    isNavigationConfirmOpen


  function rememberFocusBeforeConfirm() {
    focusBeforeConfirmRef.current =
      document.activeElement instanceof
      HTMLElement
        ? document.activeElement
        : null
  }


  function requestClose() {
    if (
      isNavigationConfirmOpen
    ) {
      return
    }


    if (!isDirty) {
      onClose()
      return
    }


    rememberFocusBeforeConfirm()


    setIsCloseConfirmOpen(
      true,
    )
  }


  function restoreFormFocus() {
    window.requestAnimationFrame(
      () => {
        const previous =
          focusBeforeConfirmRef.current


        if (
          previous &&
          previous.isConnected
        ) {
          previous.focus()
          return
        }


        closeButtonRef.current?.focus()
      },
    )
  }


  function cancelConfirmation() {
    if (
      isNavigationConfirmation
    ) {
      onContinueNavigation?.()
      return
    }


    setIsCloseConfirmOpen(
      false,
    )


    restoreFormFocus()
  }


  function confirmLeave() {
    if (
      isNavigationConfirmation
    ) {
      onConfirmNavigation?.()
      return
    }


    setIsCloseConfirmOpen(
      false,
    )

    onClose()
  }


  useEffect(
    () => {
      if (
        !isNavigationConfirmOpen
      ) {
        return
      }


      rememberFocusBeforeConfirm()
    },
    [
      isNavigationConfirmOpen,
    ],
  )


  useEffect(
    () => {
      if (!isOpen) {
        return
      }


      previousFocusRef.current =
        document.activeElement instanceof
        HTMLElement
          ? document.activeElement
          : null


      const previousBodyOverflow =
        document.body.style.overflow


      document.body.style.overflow =
        'hidden'


      if (
        !isAnyConfirmOpen
      ) {
        window.requestAnimationFrame(
          () => {
            closeButtonRef.current?.focus()
          },
        )
      }


      return () => {
        document.body.style.overflow =
          previousBodyOverflow


        previousFocusRef.current?.focus()
      }
    },
    [
      isOpen,
    ],
  )


  useEffect(
    () => {
      if (
        !isAnyConfirmOpen
      ) {
        return
      }


      window.requestAnimationFrame(
        () => {
          continueButtonRef.current?.focus()
        },
      )
    },
    [
      isAnyConfirmOpen,
    ],
  )


  useEffect(
    () => {
      if (!isOpen) {
        return
      }


      function handleKeyDown(
        event:
          KeyboardEvent,
      ) {
        if (
          event.key ===
          'Escape'
        ) {
          event.preventDefault()


          if (
            isAnyConfirmOpen
          ) {
            cancelConfirmation()
          } else {
            requestClose()
          }


          return
        }


        if (
          event.key !==
          'Tab'
        ) {
          return
        }


        const scope =
          isAnyConfirmOpen
            ? confirmRef.current
            : panelRef.current


        if (!scope) {
          return
        }


        const focusable =
          Array.from(
            scope.querySelectorAll<HTMLElement>(
              FOCUSABLE_SELECTOR,
            ),
          )


        if (
          focusable.length ===
          0
        ) {
          event.preventDefault()
          scope.focus()
          return
        }


        const first =
          focusable[0]

        const last =
          focusable[
            focusable.length -
            1
          ]


        if (
          event.shiftKey &&
          document.activeElement ===
            first
        ) {
          event.preventDefault()
          last.focus()
          return
        }


        if (
          !event.shiftKey &&
          document.activeElement ===
            last
        ) {
          event.preventDefault()
          first.focus()
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
    },
    [
      isOpen,
      isDirty,
      isAnyConfirmOpen,
      isNavigationConfirmation,
      onClose,
      onContinueNavigation,
      onConfirmNavigation,
    ],
  )


  useEffect(
    () => {
      if (
        !isOpen ||
        !isDirty
      ) {
        return
      }


      function handleBeforeUnload(
        event:
          BeforeUnloadEvent,
      ) {
        event.preventDefault()

        event.returnValue =
          ''
      }


      window.addEventListener(
        'beforeunload',
        handleBeforeUnload,
      )


      return () => {
        window.removeEventListener(
          'beforeunload',
          handleBeforeUnload,
        )
      }
    },
    [
      isOpen,
      isDirty,
    ],
  )


  useEffect(
    () => {
      if (
        !isDirty &&
        isCloseConfirmOpen
      ) {
        setIsCloseConfirmOpen(
          false,
        )
      }
    },
    [
      isDirty,
      isCloseConfirmOpen,
    ],
  )


  if (!isOpen) {
    return null
  }


  const confirmTitle =
    isNavigationConfirmation
      ? 'Покинуть форму?'
      : 'Закрыть форму?'


  const confirmActionLabel =
    isNavigationConfirmation
      ? 'Покинуть форму'
      : 'Закрыть форму'


  return (
    <div className="contact-overlay">
      <button
        type="button"
        tabIndex={-1}
        className="contact-overlay__backdrop"
        aria-label="Закрыть форму"
        onClick={
          requestClose
        }
      />


      <div
        ref={
          panelRef
        }
        className="contact-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-overlay-title"
        tabIndex={-1}
      >

        <div
          className="contact-overlay__content"
          aria-hidden={
            isAnyConfirmOpen
              ? true
              : undefined
          }
        >
          <header className="contact-overlay__header">
            <h2
              id="contact-overlay-title"
              className="contact-overlay__eyebrow"
            >
              Задать вопрос Сверчку
            </h2>


            <button
              ref={
                closeButtonRef
              }
              type="button"
              className="contact-overlay__close"
              aria-label="Закрыть форму"
              onClick={
                requestClose
              }
              tabIndex={
                isAnyConfirmOpen
                  ? -1
                  : 0
              }
            >
              ×
            </button>
          </header>


          <div className="contact-overlay__body">
            {children}
          </div>
        </div>


        {isAnyConfirmOpen && (
          <div
            ref={
              confirmRef
            }
            className="contact-overlay__confirm-layer"
            role="alertdialog"
            aria-modal="true"
            aria-labelledby="contact-close-confirm-title"
            aria-describedby="contact-close-confirm-description"
            tabIndex={-1}
          >
            <div className="contact-overlay__confirm">
              <h3
                id="contact-close-confirm-title"
                className="contact-overlay__confirm-title"
              >
                {confirmTitle}
              </h3>


              <p
                id="contact-close-confirm-description"
                className="contact-overlay__confirm-text"
              >
                Введённые данные не сохранятся
              </p>


              <div className="contact-overlay__confirm-actions">
                <button
                  ref={
                    continueButtonRef
                  }
                  type="button"
                  className="button button--primary button--medium"
                  onClick={
                    cancelConfirmation
                  }
                >
                  Продолжить заполнение
                </button>


                <Button
                  variant="secondary"
                  onClick={
                    confirmLeave
                  }
                >
                  {confirmActionLabel}
                </Button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
