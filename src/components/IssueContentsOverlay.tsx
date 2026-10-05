import type { ReactNode } from 'react'

import './IssueContentsOverlay.css'

type IssueMeta = {
  coverImage: string
  month: number
  year: number
}

type IssueContentsOverlayProps = {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  issueMeta?: IssueMeta
}

export default function IssueContentsOverlay({
  isOpen,
  onClose,
  children,
  issueMeta,
}: IssueContentsOverlayProps) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="issue-contents-overlay">
      <button
        type="button"
        className="issue-contents-overlay__backdrop"
        aria-label="Закрыть содержание"
        onClick={onClose}
      />

      <div
        className="issue-contents-overlay__panel"
        role="dialog"
        aria-modal="true"
        aria-label="Содержание номера"
      >
        <header className="issue-contents-overlay__top">
          <div className="issue-contents-overlay__header-content">
            {issueMeta && (
              <div className="issue-contents-overlay__issue">
                <img
                  src={issueMeta.coverImage}
                  alt=""
                  className="issue-contents-overlay__cover"
                />

                <div className="issue-contents-overlay__meta">
                  <p className="issue-contents-overlay__number">
                    №
                    {String(issueMeta.month).padStart(2, '0')}
                    {' · '}
                    {issueMeta.year}
                  </p>

                </div>
              </div>
            )}

            <div className="issue-contents-overlay__divider" />

            <h2 className="issue-contents-overlay__heading">
              Содержание номера
            </h2>
          </div>

          <button
            type="button"
            className="issue-contents-overlay__close"
            aria-label="Закрыть"
            onClick={onClose}
          >
            ×
          </button>
        </header>

        <div className="issue-contents-overlay__body">
          {children}
        </div>
      </div>
    </div>
  )
}