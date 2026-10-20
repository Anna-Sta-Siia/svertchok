export type Interview = {
  id: string
  issueId: string
  authorId: string

  title: string
  shortDescription?: string

  page?: number
  order: number
}