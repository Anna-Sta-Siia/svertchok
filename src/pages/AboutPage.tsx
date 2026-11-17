import {
  Link,
} from 'react-router-dom'

import Showcase from '../components/Showcase'
import BookCard from '../components/BookCard'
import Button from '../components/ui/Button'

import {
  books,
} from '../assets/data/books'

import titleSvertchok from '../assets/images/title-svertchok.png'

import './AboutPage.css'


const JOIN_EMAIL =
  'boukovki@hotmail.com'


const JOIN_SUBJECT =
  'Хочу присоединиться к ассоциации «Буковки»'


const JOIN_BODY =
  `Здравствуйте!

Я хотел(а) бы присоединиться к ассоциации «Буковки» и узнать больше о возможности участия в ваших проектах`


const JOIN_MAILTO =
  `mailto:${JOIN_EMAIL}?subject=${encodeURIComponent(
    JOIN_SUBJECT,
  )}&body=${encodeURIComponent(
    JOIN_BODY,
  )}`


export default function AboutPage() {
  return (
    <article className="about-page">

      {/* =====================
          WHO WE ARE
          ===================== */}

      <Showcase
        layout="issue"

        featuredHeading={
          <h1 className="about-page__heading">
            Кто такие «Буковки»
          </h1>
        }

        secondaryHeading={
          <h2 className="about-page__secondary-heading">
            И это ещё не всё
          </h2>
        }

        featured={
          <section className="about-page__story">

            <div className="about-page__story-copy">
              <p className="about-page__lead">
                Буковки — ассоциация любителей
                русскоязычной литературы
                для детей и юношества,
                созданная во Франции
                в 2015 году. <br/>Нам хочется,
                чтобы хорошие книги
                и истории на русском языке
                находили своих читателей,
                где бы они ни жили.
              </p>
            </div>


            <div className="about-page__svertchok">

              <div className="about-page__svertchok-heading">
                <p className="about-page__svertchok-intro">
                  Так у нас появился
                </p>

                <img
                  src={
                    titleSvertchok
                  }
                  alt="Сверчок"
                  className="about-page__svertchok-logo"
                />
              </div>


              <p className="about-page__svertchok-text">
                Литературный альманах
                на русском языке
                для детей и родителей,
                на страницах которого
                встречаются стихи и проза,
                беседы с авторами,
                новые имена и новые книги.
              </p>


              <div className="about-page__issues-link-row">
                <Link
                  to="/issues"
                  className="about-page__issues-link"
                >
                  Заглянуть в номера →
                </Link>
              </div>

            </div>

          </section>
        }

        secondary={
          <div className="about-page__directions">

            <article className="about-page__direction">
              <h3>
                Встречаемся
              </h3>

              <p>
                Литературные встречи,
                чтения и творческие
                события для детей.
              </p>
            </article>


            <article className="about-page__direction">
              <h3>
                Придумываем вместе
              </h3>

              <p>
                Конкурсы, праздники
                и совместные проекты
                со школами, авторами
                и издательствами.
              </p>
            </article>


            <article className="about-page__direction">
              <h3>
                Издаём книги
              </h3>

              <p>
                Собственные книжные
                проекты и сборники.
              </p>

              <a
                href="#about-books"
                className="about-page__direction-link"
              >
                Наши книги ↓
              </a>
            </article>

          </div>
        }
      />


      {/* =====================
          BOOKS
          ===================== */}

      <section
        id="about-books"
        className="about-page__books-section"
      >
        <header className="about-page__books-header">
          <h2>
            Наши книги
          </h2>

          <p>
            Книжные проекты «Буковок»
            для детей и взрослых
          </p>
        </header>


        <div className="about-page__books-grid">
          {books.map(
            (
              book,
            ) => (
              <BookCard
                key={
                  book.id
                }
                book={
                  book
                }
              />
            ),
          )}
        </div>
      </section>


      {/* =====================
          JOIN US
          ===================== */}

      <section className="about-page__join">
        <div className="about-page__join-copy">
          <h2>
            Присоединяйтесь к нам
          </h2>

          <p>
            Хотите участвовать
            в проектах «Буковок»,
            предложить идею
            или помочь нам?
          </p>
        </div>


        <Button
          variant="secondary"
          href={
            JOIN_MAILTO
          }
        >
          Присоединиться →
        </Button>
      </section>

    </article>
  )
}
