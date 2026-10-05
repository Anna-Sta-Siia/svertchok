import { useMemo, useState } from 'react'

import { authors } from '../assets/data/authors'
import type { ContentItem } from '../assets/data/contentItems/types'

import './IssueContents.css'

type IssueContentsProps = {
  items: ContentItem[]
  issueMeta?: {
    coverImage: string
    monthLabel: string
    month: number
    year: number
  }
}

type ContentGroup = {
  key: string
  label?: string
  items: ContentItem[]
}

const INITIAL_VISIBLE_ITEMS = 3

export default function IssueContents({
  items,
  issueMeta,
}: IssueContentsProps) {
  const [expandedSections, setExpandedSections] =
    useState<Set<string>>(new Set())

  const [openItems, setOpenItems] =
    useState<Set<string>>(new Set())

  const groups = useMemo(() => {
    const result: ContentGroup[] = []

    items.forEach((item) => {
      if (!item.section) {
        result.push({
          key: item.id,
          items: [item],
        })
        return
      }

      const lastGroup = result[result.length - 1]

      if (
        lastGroup &&
        lastGroup.label === item.section
      ) {
        lastGroup.items.push(item)
        return
      }

      result.push({
        key: item.section,
        label: item.section,
        items: [item],
      })
    })

    return result
  }, [items])

  function toggleSection(key: string) {
    setExpandedSections((current) => {
      const next = new Set(current)

      if (next.has(key)) {
        next.delete(key)
      } else {
        next.add(key)
      }

      return next
    })
  }

  function toggleItem(id: string) {
    setOpenItems((current) => {
      const next = new Set(current)

      if (next.has(id)) {
        next.delete(id)
      } else {
        next.add(id)
      }

      return next
    })
  }

  return (
    <section className="issue-contents">
      <header className="issue-contents__header">
        {issueMeta && (
          <div className="issue-contents__issue-meta">
            <img
              src={issueMeta.coverImage}
              alt={`Обложка номера ${issueMeta.monthLabel} ${issueMeta.year}`}
              className="issue-contents__mini-cover"
            />

            <div className="issue-contents__issue-text">
              <p className="issue-contents__issue-date">
                №{String(issueMeta.month).padStart(2, '0')} ·{' '}
                {issueMeta.year}
              </p>
            </div>
          </div>
        )}
      </header>

      <div className="issue-contents__groups">
        {groups.map((group) => {
          const isExpanded =
            expandedSections.has(group.key)

          const hasMore =
            group.items.length >
            INITIAL_VISIBLE_ITEMS

          const visibleItems =
            !hasMore || isExpanded
              ? group.items
              : group.items.slice(
                  0,
                  INITIAL_VISIBLE_ITEMS,
                )

          const hiddenCount =
            group.items.length -
            INITIAL_VISIBLE_ITEMS

          return (
            <section
              className="issue-content-group"
              key={group.key}
            >
              {group.label && (
                <h3 className="issue-content-group__title">
                  {group.label}
                </h3>
              )}

              <div className="issue-content-group__items">
                {visibleItems.map((item) => {
                  const author = authors.find(
                    (author) =>
                      author.id === item.authorId,
                  )

                  const isItemOpen =
                    openItems.has(item.id)

                  const canPreview =
                    item.previewAllowed &&
                    Boolean(item.excerpt)

                  return (
                    <article
                      className="issue-content-item"
                      key={item.id}
                    >
                      <div className="issue-content-item__top">
                        <div className="issue-content-item__main">
                          <h4>{item.title}</h4>

                          {author && (
                            <button
                              type="button"
                              className="issue-content-item__author"
                            >
                              {author.firstName}{' '}
                              {author.lastName}
                            </button>
                          )}
                        </div>

                        {item.page && (
                          <span className="issue-content-item__page">
                            {item.page}
                          </span>
                        )}
                      </div>

                      {canPreview && (
                        <>
                          <p
                            className={`issue-content-item__excerpt ${
                              isItemOpen
                                ? 'issue-content-item__excerpt--open'
                                : ''
                            }`}
                          >
                            {item.excerpt}
                          </p>

                          <button
                            type="button"
                            className="issue-content-item__excerpt-toggle"
                            aria-expanded={
                              isItemOpen
                            }
                            onClick={() =>
                              toggleItem(item.id)
                            }
                          >
                            {isItemOpen
                              ? 'Свернуть ↑'
                              : 'Читать отрывок ↓'}
                          </button>
                        </>
                      )}
                    </article>
                  )
                })}
              </div>

              {hasMore && (
                <button
                  type="button"
                  className="issue-content-group__toggle"
                  aria-expanded={isExpanded}
                  onClick={() =>
                    toggleSection(group.key)
                  }
                >
                  {isExpanded
                    ? 'Свернуть ↑'
                    : `Показать ещё ${hiddenCount} ↓`}
                </button>
              )}
            </section>
          )
        })}
      </div>
    </section>
  )
}