import type { ReactNode } from 'react'

import './ContactOverlay.css'

type ContactOverlayProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

export default function ContactOverlay({
  isOpen,
  onClose,
  children,
}: ContactOverlayProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="contact-overlay">
      <button
        type="button"
        className="contact-overlay__backdrop"
        aria-label="Закрыть форму"
        onClick={onClose}
      />

      <div
        className="contact-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-overlay-title"
      >
        <header className="contact-overlay__header">
          <div>
            <p className="contact-overlay__eyebrow">
             Задать вопрос Сверчку
            </p>
           
          </div>

          <button
            type="button"
            className="contact-overlay__close"
            aria-label="Закрыть"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="contact-overlay__body">
          {children}
        </div>
      </div>
    </div>
  )
}