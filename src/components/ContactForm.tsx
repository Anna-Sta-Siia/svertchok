import {
  useState,
  type SyntheticEvent,
} from 'react'

import Button from './ui/Button'
import CustomSelect from './filters/CustomSelect'

import './ContactForm.css'

export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  allowFaqPublication: boolean
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: 'general',
  message: '',
  allowFaqPublication: false,
}


const subjectOptions = [
  {
    value: 'general',
    label: 'Общий вопрос',
  },
  {
    value: 'issue',
    label: 'Вопрос об альманахе',
  },
  {
    value: 'authors',
    label: 'Для авторов',
  },
  {
    value: 'subscription',
    label: 'Подписка',
  },
  {
    value: 'collaboration',
    label: 'Сотрудничество',
  },
  {
    value: 'other',
    label: 'Другое',
  },
]

export default function ContactForm() {
  const [
    formData,
    setFormData,
  ] = useState<ContactFormData>(
    initialFormData,
  )

  const [
    isSubmitting,
    setIsSubmitting,
  ] = useState(false)

  const [
    isSuccess,
    setIsSuccess,
  ] = useState(false)

  const [
    error,
    setError,
  ] = useState('')

  async function handleSubmit(
    event: SyntheticEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setError('')

    /* =========================
       VALIDATION
       ========================= */

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setError(
        'Пожалуйста, заполните обязательные поля.',
      )

      return
    }

    try {
      setIsSubmitting(true)

      /* =========================
         SIMULATION D'ENVOI

         Plus tard :
         Supabase viendra ici.
         ========================= */

      await new Promise<void>(
        (resolve) => {
          window.setTimeout(
            resolve,
            900,
          )
        },
      )

      setFormData(
        initialFormData,
      )

      setIsSuccess(true)
    } catch {
      setError(
        'Не удалось отправить сообщение. Попробуйте ещё раз.',
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  /* =========================
     SUCCESS
     ========================= */

  if (isSuccess) {
    return (
      <div className="contact-form__success">
        <div
          className="contact-form__success-icon"
          aria-hidden="true"
        >
          ✓
        </div>

        <h3>
          Спасибо за сообщение!
        </h3>

        <p>
          Ваше письмо отправлено
          Сверчку.
        </p>

        <p className="contact-form__success-note">
          Мы постараемся ответить
          как можно скорее.
        </p>

        <Button
          variant="outline"
          onClick={() =>
            setIsSuccess(false)
          }
        >
          Написать ещё
        </Button>
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >
      {/* =====================
          NAME
          ===================== */}

      <div className="contact-form__field">
        <label htmlFor="contact-name">
          Как вас зовут?
          <span aria-hidden="true">
            {' '}*
          </span>
        </label>

        <input
          id="contact-name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(event) =>
            setFormData(
              (current) => ({
                ...current,
                name:
                  event.target.value,
              }),
            )
          }
        />
      </div>

      {/* =====================
          EMAIL
          ===================== */}

      <div className="contact-form__field">
        <label htmlFor="contact-email">
          E-mail
          <span aria-hidden="true">
            {' '}*
          </span>
        </label>

        <input
          id="contact-email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={(event) =>
            setFormData(
              (current) => ({
                ...current,
                email:
                  event.target.value,
              }),
            )
          }
        />
      </div>

      {/* =====================
          SUBJECT
          ===================== */}

      <CustomSelect
        id="contact-subject"
        label="Тема"
        value={
          formData.subject
        }
        options={
          subjectOptions
        }
        className="contact-form__custom-select-field"
        onChange={(
          value,
        ) =>
          setFormData(
            (current) => ({
              ...current,
              subject:
                value,
            }),
          )
        }
      />

      {/* =====================
          MESSAGE
          ===================== */}

      <div className="contact-form__field">
        <label htmlFor="contact-message">
          Сообщение
          <span aria-hidden="true">
            {' '}*
          </span>
        </label>

        <textarea
          id="contact-message"
          rows={7}
          value={formData.message}
          onChange={(event) =>
            setFormData(
              (current) => ({
                ...current,
                message:
                  event.target.value,
              }),
            )
          }
        />
      </div>

      {/* =====================
          FAQ CONSENT
          ===================== */}

      <label className="contact-form__faq">
        <input
          type="checkbox"
          checked={
            formData.allowFaqPublication
          }
          onChange={(event) =>
            setFormData(
              (current) => ({
                ...current,
                allowFaqPublication:
                  event.target.checked,
              }),
            )
          }
        />

        <span>
          <strong>
            Можно ли опубликовать
            ваш вопрос и наш ответ
            в разделе
            «Вопросы и ответы»?
          </strong>

          <small>
            Публикация возможна
            после редакционной проверки.
            Личные данные и e-mail
            не публикуются.
          </small>
        </span>
      </label>

      {/* =====================
          ERROR
          ===================== */}

      {error && (
        <p
          className="contact-form__message"
          role="alert"
        >
          {error}
        </p>
      )}

      {/* =====================
          SUBMIT
          ===================== */}

      <div className="contact-form__actions">
        <Button
          type="submit"
          variant="primary"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? 'Отправляем…'
            : 'Отправить →'}
        </Button>
      </div>
    </form>
  )
}