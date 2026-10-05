export type InterviewQuestion = {
  id: string
  question: string
  answer: string
}

export type Interview = {
  id: string
  slug: string

  issueId: string
  authorId?: string

  title: string

  shortDescription?: string

  questions: InterviewQuestion[]

  isPublished: boolean
}