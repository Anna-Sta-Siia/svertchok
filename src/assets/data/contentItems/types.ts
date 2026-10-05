export type ContentType =
  | 'poetry'
  | 'prose'
  | 'interview'
  | 'review'
  | 'game'
  | 'methodical'
  | 'other'

export type ContentItem = {
  id: string
  issueId: string

  authorId?: string

  title: string

  type: ContentType

  section?: string

  page?: number
  order: number

  excerpt?: string
  previewAllowed?: boolean
}