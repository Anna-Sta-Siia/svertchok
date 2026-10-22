import type {
  Author,
} from '../assets/data/authors'

import AuthorCard from './AuthorCard'

import './RelatedAuthors.css'


type RelatedAuthorsProps = {
  title: string
  authors: Author[]
}


export default function RelatedAuthors({
  title,
  authors,
}: RelatedAuthorsProps) {
  if (
    authors.length ===
    0
  ) {
    return null
  }


  return (
    <section className="related-authors">

      <h2 className="related-authors__title">
        {title}
      </h2>


      <div className="related-authors__grid">
        {authors.map(
          (
            author,
          ) => (
            <AuthorCard
              key={
                author.id
              }
              author={
                author
              }
              variant="compact"
            />
          ),
        )}
      </div>
    </section>
  )
}