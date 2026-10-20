import { Link } from 'react-router-dom'

import type { Author } from '../assets/data/authors'

import './RelatedAuthors.css'

type RelatedAuthorsProps = {
  title: string
  authors: Author[]
}

export default function RelatedAuthors({
  title,
  authors,
}: RelatedAuthorsProps) {
  if (authors.length === 0) {
    return null
  }

  return (
    <section className="related-authors">
      <h2 className="related-authors__title">
        {title}
      </h2>

      <div className="related-authors__grid">
        {authors.map((author) => (
          <Link
            key={author.id}
            to={`/authors/${author.id}`}
            className="related-authors__card"
          >
            <p className="related-authors__name">
              {author.firstName}{' '}
              {author.lastName}
            </p>

            <div className="related-authors__types">
              {author.types.map((type) => (
                <span
                  key={type}
                  className="related-authors__type"
                >
                  {type === 'poet'
                    ? 'Поэзия'
                    : 'Проза'}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}