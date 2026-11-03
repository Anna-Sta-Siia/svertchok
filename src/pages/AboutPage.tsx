import {
  Link,
} from 'react-router-dom'

import Showcase from '../components/Showcase'

import titleSvertchok from '../assets/images/title-svertchok.png'

import './AboutPage.css'


const FACEBOOK_URL =
  'https://www.facebook.com/BoukovkiFrance/'

const INSTAGRAM_URL =
  'https://www.instagram.com/boukovki/'


export default function AboutPage() {
  return (
    <article className="about-page">

      <Showcase
        layout="issue"

        featuredHeading={
          <p className="about-page__heading">
            Мы — «Буковки»
          </p>
        }

        secondaryHeading={
          <h2 className="about-page__secondary-heading">
            И это ещё не всё
          </h2>
        }

        featured={
          <div className="about-page__story">

            <p className="about-page__lead">
              Мы — ассоциация
              любителей русскоязычной
              литературы для детей
              и юношества, созданная
              во Франции в 2015 году.
            </p>

            <p className="about-page__text">
              Нам хочется, чтобы хорошие
              книги и истории на русском
              языке находили своих
              читателей — детей
              и взрослых, где бы они
              ни жили.
            </p>

            <p className="about-page__text">
              Чтобы знакомые имена
              встречались с новыми,
              а чтение становилось
              поводом для разговора,
              открытия и новых встреч.
            </p>


            <div className="about-page__svertchok">
              <p className="about-page__svertchok-intro">
                Так у нас появился
              </p>

              <img
                src={titleSvertchok}
                alt="Сверчок"
                className="about-page__svertchok-logo"
              />

              <p className="about-page__text">
                литературный альманах
                на русском языке
                для детей и родителей.
              </p>

              <p className="about-page__text">
                На его страницах
                встречаются стихи
                и проза, беседы
                с авторами, новые имена
                и новые книги.
              </p>

              <Link
                to="/issues"
                className="about-page__issues-link"
              >
                Заглянуть в номера →
              </Link>
            </div>
          </div>
        }

        secondary={
          <aside className="about-page__more">

            <p>
              «Буковки» устраивают
              и поддерживают
              литературные встречи,
              чтения и творческие
              проекты для детей.
            </p>

            <p>
              Мы проводим конкурсы,
              где можно читать,
              переводить,
              придумывать
              и делиться своими
              работами.
            </p>

            <p>
              Среди них —
              международный
              русско-французский
              конкурс перевода
              имени Михаила Яснова.
            </p>

          </aside>
        }
      />


      {/* =====================
          SOCIALS
          ===================== */}

      <section className="about-page__socials">
        <p className="about-page__social-title">
          Оставайтесь рядом
        </p>

        <div className="about-page__social-links">
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noreferrer"
            className="about-page__social-link"
          >
            Facebook →
          </a>

          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noreferrer"
            className="about-page__social-link"
          >
            Instagram →
          </a>
        </div>
      </section>

    </article>
  )
}