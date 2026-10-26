import {
  authors,
  type Author,
  type AuthorType,
} from './authors'

import {
  issues,
  publishedIssues,
  type Issue,
} from './issues'

import {
  contentItems,
  type ContentItem,
} from './contentItems'

import {
  interviews,
} from './interviews'

import type {
  Interview,
} from './interviews'

/* =========================
   AUTHORS
   ========================= */

export function getAuthorById(
  authorId: string,
): Author | undefined {
  return authors.find(
    (author) =>
      author.id === authorId,
  )
}

/* =========================
   AUTHORS BY CONTENT ITEM
   ========================= */

export function getAuthorsByContentItem(
  item: ContentItem,
): Author[] {
  const authorIds =
    item.authorIds ??
    (item.authorId
      ? [item.authorId]
      : [])

  return authorIds
    .map((authorId) =>
      getAuthorById(authorId),
    )
    .filter(
      (
        author,
      ): author is Author =>
        author !== undefined,
    )
}

/* =========================
   CONTENT ITEMS
   ========================= */

export function getContentItemsByAuthorId(
  authorId: string,
): ContentItem[] {
  return contentItems
    .filter((item) => {
      if (
        item.authorId ===
        authorId
      ) {
        return true
      }

      return (
        item.authorIds?.includes(
          authorId,
        ) ?? false
      )
    })
    .sort((a, b) => {
      const issueA =
        issues.find(
          (issue) =>
            issue.id ===
            a.issueId,
        )

      const issueB =
        issues.find(
          (issue) =>
            issue.id ===
            b.issueId,
        )

      if (!issueA || !issueB) {
        return (
          a.order - b.order
        )
      }

      if (
        issueA.year !==
        issueB.year
      ) {
        return (
          issueB.year -
          issueA.year
        )
      }

      if (
        issueA.month !==
        issueB.month
      ) {
        return (
          issueB.month -
          issueA.month
        )
      }

      return a.order - b.order
    })
}

/* =========================
   INTERVIEWS BY AUTHOR
   ========================= */

export function getInterviewsByAuthorId(
  authorId: string,
): Interview[] {
  return interviews
    .filter(
      (interview) =>
        interview.authorId ===
        authorId,
    )
    .sort((a, b) => {
      const issueA =
        issues.find(
          (issue) =>
            issue.id ===
            a.issueId,
        )

      const issueB =
        issues.find(
          (issue) =>
            issue.id ===
            b.issueId,
        )

      if (
        !issueA ||
        !issueB
      ) {
        return (
          a.order -
          b.order
        )
      }

      if (
        issueA.year !==
        issueB.year
      ) {
        return (
          issueB.year -
          issueA.year
        )
      }

      if (
        issueA.month !==
        issueB.month
      ) {
        return (
          issueB.month -
          issueA.month
        )
      }

      return (
        a.order -
        b.order
      )
    })
}


export function hasInterviewByAuthorId(
  authorId: string,
): boolean {
  return interviews.some(
    (interview) =>
      interview.authorId ===
      authorId,
  )
}


/* =========================
   ISSUES BY AUTHOR
   ========================= */

export function getIssuesByAuthorId(
  authorId: string,
  limit?: number,
): Issue[] {
  const issueIds = new Set(
    contentItems
      .filter((item) => {
        if (
          item.authorId ===
          authorId
        ) {
          return true
        }

        return (
          item.authorIds?.includes(
            authorId,
          ) ?? false
        )
      })
      .map(
        (item) =>
          item.issueId,
      ),
  )

  const result =
    publishedIssues
      .filter((issue) =>
        issueIds.has(issue.id),
      )
      .sort((a, b) => {
        if (
          a.year !== b.year
        ) {
          return (
            b.year - a.year
          )
        }

        return (
          b.month - a.month
        )
      })

  return typeof limit ===
    'number'
    ? result.slice(0, limit)
    : result
}

/* =========================
   AUTHORS BY ISSUE
   ========================= */

export function getAuthorsByIssueId(
  issueId: string,
  excludeAuthorId?: string,
): Author[] {
  const seen =
    new Set<string>()

  return contentItems
    .filter(
      (item) =>
        item.issueId ===
        issueId,
    )
    .reduce<Author[]>(
      (result, item) => {
        const itemAuthors =
          getAuthorsByContentItem(
            item,
          )

        itemAuthors.forEach(
          (author) => {
            if (
              author.id ===
                excludeAuthorId ||
              seen.has(author.id)
            ) {
              return
            }

            seen.add(author.id)
            result.push(author)
          },
        )

        return result
      },
      [],
    )
}

/* =========================
   AUTHORS BY TYPE
   ========================= */

export function getAuthorsByType(
  type: AuthorType,
  excludeAuthorId?: string,
): Author[] {
  return authors
    .filter(
      (author) =>
        author.types.includes(
          type,
        ) &&
        author.id !==
          excludeAuthorId,
    )
    .sort((a, b) => {
      const lastNameComparison =
        a.lastName.localeCompare(
          b.lastName,
          'ru',
        )

      if (
        lastNameComparison !== 0
      ) {
        return lastNameComparison
      }

      return a.firstName.localeCompare(
        b.firstName,
        'ru',
      )
    })
}

/* =========================
   ISSUE
   ========================= */

export function getIssueById(
  issueId: string,
): Issue | undefined {
  return issues.find(
    (issue) =>
      issue.id === issueId,
  )
}

/* =========================
   PREVIOUS ISSUES
   ========================= */

export function getPreviousIssues(
  issueId: string,
  limit = 3,
): Issue[] {
  const sortedIssues = [
    ...publishedIssues,
  ].sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year
    }

    return b.month - a.month
  })

  const currentIndex =
    sortedIssues.findIndex(
      (issue) =>
        issue.id === issueId,
    )

  if (currentIndex === -1) {
    return []
  }

  return sortedIssues.slice(
    currentIndex + 1,
    currentIndex +
      1 +
      limit,
  )
}