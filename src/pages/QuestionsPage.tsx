import {
  useMemo,
  useState,
} from 'react'

import {
  Link,
} from 'react-router-dom'

import FilterPanel, {
  type SortDirection,
} from '../components/filters/FilterPanel'

import CustomSelect from '../components/filters/CustomSelect'

import Showcase from '../components/Showcase'

import QuestionCard from '../components/QuestionCard'

import {
  questions,
  questionCategoryLabels,
  type QuestionCategory,
} from '../assets/data/questions'

import './QuestionsPage.css'


type CategoryFilter =
  | 'all'
  | QuestionCategory


const categoryOptions = [
  {
    value:
      'all',

    label:
      'Все темы',
  },

  ...Object.entries(
    questionCategoryLabels,
  ).map(
    ([
      value,
      label,
    ]) => ({
      value,
      label,
    }),
  ),
]


export default function QuestionsPage() {
  const [
    selectedCategory,
    setSelectedCategory,
  ] = useState<CategoryFilter>(
    'all',
  )


  const [
    sortDirection,
    setSortDirection,
  ] = useState<SortDirection>(
    'desc',
  )


  const filteredQuestions =
    useMemo(
      () =>
        [...questions]
          .filter(
            (question) =>
              selectedCategory ===
                'all' ||
              question.category ===
                selectedCategory,
          )
          .sort(
            (
              a,
              b,
            ) => {
              const result =
                new Date(
                  a.askedAt,
                ).getTime() -
                new Date(
                  b.askedAt,
                ).getTime()

              return (
                sortDirection ===
                  'asc'
                  ? result
                  : -result
              )
            },
          ),
      [
        selectedCategory,
        sortDirection,
      ],
    )


  /*
   * Global featured question if all
   * categories are displayed.
   *
   * Inside a category, use its
   * featured question if one exists,
   * otherwise the newest question
   * becomes the main card.
   */

  const featuredQuestion =
    filteredQuestions.find(
      (question) =>
        question.featured,
    ) ??
    filteredQuestions[0]


  const compactQuestions =
    featuredQuestion
      ? filteredQuestions.filter(
          (question) =>
            question.id !==
            featuredQuestion.id,
        )
      : []


  const hasActiveFilters =
    selectedCategory !==
      'all' ||
    sortDirection !==
      'desc'


  function resetFilters() {
    setSelectedCategory(
      'all',
    )

    setSortDirection(
      'desc',
    )
  }


  function toggleSortDirection() {
    setSortDirection(
      (current) =>
        current ===
          'asc'
          ? 'desc'
          : 'asc',
    )
  }


  return (
    <section className="questions-page">

      {/* =====================
          HEADER
          ===================== */}

      <header className="questions-page__intro">
        <p className="questions-page__description">
          Читатели спрашивают —
          Сверчок отвечает
        </p>
      </header>


      {/* =====================
          FILTERS
          ===================== */}

      <FilterPanel
        ariaLabel="Фильтры вопросов"
        className="filter-panel--compact"
        sortLabel="По дате"
        sortDirection={
          sortDirection
        }
        onToggleSort={
          toggleSortDirection
        }
        onReset={
          resetFilters
        }
        canReset={
          hasActiveFilters
        }
      >
        <CustomSelect
          id="questions-category-filter"
          label="По теме"
          placeholder="По теме"
          value={
            selectedCategory
          }
          options={
            categoryOptions
          }
          onChange={(
            value,
          ) =>
            setSelectedCategory(
              value as
                CategoryFilter,
            )
          }
        />
      </FilterPanel>


      {/* =====================
          RESULTS
          ===================== */}

      <p className="questions-page__count">
        Вопросов:{' '}

        <strong>
          {
            filteredQuestions.length
          }
        </strong>
      </p>


      {/* =====================
          SHOWCASE
          ===================== */}

      {featuredQuestion ? (
        <Showcase
          layout="question"

          featuredHeading={
            <h2 className="showcase__heading-title">
              Вопрос месяца
            </h2>
          }

          secondaryHeading={
            <h2 className="showcase__heading-title">
              Другие вопросы
            </h2>
          }

          featured={
            <QuestionCard
              question={
                featuredQuestion
              }
              variant="featured"
            />
          }

          secondary={
            <div className="questions-page__compact-list">
              {
                compactQuestions.map(
                  (
                    question,
                  ) => (
                    <QuestionCard
                      key={
                        question.id
                      }
                      question={
                        question
                      }
                      variant="compact"
                    />
                  ),
                )
              }

              {compactQuestions.length ===
                0 && (
                <p className="questions-page__empty-side">
                  В этой теме пока
                  только один вопрос.
                </p>
              )}
            </div>
          }
        />
      ) : (
        <div className="questions-page__empty">
          <p>
            По выбранной теме
            вопросов пока нет.
          </p>

          <button
            type="button"
            onClick={
              resetFilters
            }
          >
            Показать все вопросы
          </button>
        </div>
      )}


      {/* =====================
          ASK
          ===================== */}

      <section className="questions-page__ask">
        <h2>
          Не нашли свой вопрос?
        </h2>

        <p>
          Спросите Сверчка сами.
          Возможно, ваш вопрос
          окажется полезен и другим
          читателям.
        </p>

        <Link
          to="#contact"
          className="questions-page__ask-link"
        >
          Задать вопрос Сверчку →
        </Link>
      </section>
    </section>
  )
}
