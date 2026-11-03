import {
  useState,
} from 'react'

import type {
  Question,
} from '../assets/data/questions'

import {
  questionCategoryLabels,
} from '../assets/data/questions'

import './QuestionCard.css'


export type QuestionCardVariant =
  | 'featured'
  | 'compact'
  | 'archive'


type QuestionCardProps = {
  question: Question

  variant?:
    QuestionCardVariant
}


function formatQuestionDate(
  value: string,
) {
  return new Intl.DateTimeFormat(
    'ru-RU',
    {
      day:
        'numeric',

      month:
        'long',

      year:
        'numeric',
    },
  ).format(
    new Date(value),
  )
}


export default function QuestionCard({
  question,
  variant = 'archive',
}: QuestionCardProps) {
  const [
    liked,
    setLiked,
  ] = useState(false)

  const [
    likeCount,
    setLikeCount,
  ] = useState(
    question.likes ?? 0,
  )


  function handleLike() {
    if (liked) {
      return
    }

    setLiked(true)

    setLikeCount(
      (current) =>
        current + 1,
    )
  }


  const author =
    question.authorName ??
    'Читатель «Сверчка»'


  const authorMeta = [
    author,
    question.authorLocation,
    formatQuestionDate(
      question.askedAt,
    ),
  ]
    .filter(Boolean)
    .join(' · ')


  return (
    <article
      id={question.id}
      className={`
        question-card
        question-card--${variant}
      `}
    >
      {/* =====================
          TOP
          ===================== */}

      <div className="question-card__top">
        {variant ===
          'featured' && (
          <span className="question-card__featured-label">
            Вопрос месяца
          </span>
        )}

        <span className="question-card__category">
          {
            questionCategoryLabels[
              question.category
            ]
          }
        </span>
      </div>


      {/* =====================
          SUBJECT
          ===================== */}

      <p className="question-card__subject">
        {question.subject}
      </p>


      {/* =====================
          QUESTION
          ===================== */}

      <h3 className="question-card__question">
        {question.question}
      </h3>


      {/* =====================
          META
          ===================== */}

      <p className="question-card__meta">
        {authorMeta}
      </p>


      {/* =====================
          ANSWER
          ===================== */}

      <div className="question-card__answer">
        {variant ===
          'featured' && (
          <p className="question-card__answer-label">
            Сверчок отвечает
          </p>
        )}

        <p className="question-card__answer-text">
          {question.answer}
        </p>
      </div>


      {/* =====================
          LIKE
          ===================== */}

      <button
        type="button"
        className={`
          question-card__like
          ${
            liked
              ? 'question-card__like--active'
              : ''
          }
        `}
        onClick={
          handleLike
        }
        disabled={
          liked
        }
        aria-label={
          liked
            ? 'Вы отметили ответ как полезный'
            : 'Отметить ответ как полезный'
        }
      >
        <span
          aria-hidden="true"
          className="question-card__like-heart"
        >
          {liked
            ? '♥'
            : '♡'}
        </span>

        <span>
          {liked
            ? 'Спасибо!'
            : 'Полезный ответ'}
        </span>

        {likeCount >
          0 && (
          <span className="question-card__like-count">
            {likeCount}
          </span>
        )}
      </button>
    </article>
  )
}