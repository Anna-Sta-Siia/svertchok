import type {
  Book,
} from '../assets/data/books'

import Button from './ui/Button'

import './BookCard.css'


type BookCardProps = {
  book: Book
}


export default function BookCard({
  book,
}: BookCardProps) {
  return (
    <article className="book-card">

      <div className="book-card__cover-wrap">
        <img
          src={
            book.cover
          }
          alt={
            `Обложка книги «${book.titleRu}»`
          }
          className="book-card__cover"
        />
      </div>


      <div className="book-card__content">

        <h3 className="book-card__title">
          {book.titleRu}
        </h3>


        {book.titleFr && (
          <p className="book-card__title-fr">
            {book.titleFr}
          </p>
        )}


        <p className="book-card__description">
          {book.description}
        </p>


        <div className="book-card__actions">
          <Button
            variant="secondary"
            size="small"
            href={
              book.purchaseUrl
            }
            external
          >
            Приобрести →
          </Button>
        </div>

      </div>
    </article>
  )
}
