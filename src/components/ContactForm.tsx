import {
  useEffect,
  useState,
  type FormEvent,
} from 'react'

import Button from './ui/Button'
import CustomSelect from './filters/CustomSelect'

import {
  CONTACT_LIMITS,
  getContactMessageLength,
  normalizeContactEmail,
  normalizeContactMessage,
  normalizeContactName,
  validateContactField,
  validateContactForm,
  type ContactField,
  type ContactValidationErrors,
} from '../utils/contactValidation'

import './ContactForm.css'


export type ContactFormData = {
  name: string
  email: string
  subject: string
  message: string
  allowFaqPublication: boolean
}


type ContactFormProps = {
  onDirtyChange?: (
    isDirty: boolean,
  ) => void
}


const initialFormData:
  ContactFormData = {
    name: '',
    email: '',
    subject: '',
    message: '',
    allowFaqPublication: false,
  }


const initialTouched:
  Record<
    ContactField,
    boolean
  > = {
    name: false,
    email: false,
    subject: false,
    message: false,
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


export default function ContactForm({
  onDirtyChange,
}: ContactFormProps) {
  const [
    formData,
    setFormData,
  ] = useState<ContactFormData>(
    initialFormData,
  )


  const [
    touched,
    setTouched,
  ] = useState(
    initialTouched,
  )


  const [
    errors,
    setErrors,
  ] = useState<ContactValidationErrors>(
    {},
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
    submitError,
    setSubmitError,
  ] = useState('')


  const messageLength =
    getContactMessageLength(
      formData.message,
    )


  const isDirty =
    Boolean(
      formData.name.trim() ||
      formData.email.trim() ||
      formData.subject ||
      formData.message.trim() ||
      formData.allowFaqPublication,
    )


  useEffect(
    () => {
      onDirtyChange?.(
        isDirty,
      )
    },
    [
      isDirty,
      onDirtyChange,
    ],
  )


  useEffect(
    () => {
      return () => {
        onDirtyChange?.(
          false,
        )
      }
    },
    [
      onDirtyChange,
    ],
  )


  function getValidationInput(
    data:
      ContactFormData,
  ) {
    return {
      name:
        data.name,

      email:
        data.email,

      subject:
        data.subject,

      message:
        data.message,
    }
  }


  function setFieldError(
    field:
      ContactField,
    value:
      string | undefined,
  ) {
    setErrors(
      (current) => {
        const next = {
          ...current,
        }


        if (value) {
          next[
            field
          ] = value
        } else {
          delete next[
            field
          ]
        }


        return next
      },
    )
  }


  function validateField(
    field:
      ContactField,
    data:
      ContactFormData = formData,
  ) {
    const error =
      validateContactField(
        field,
        getValidationInput(
          data,
        ),
      )


    setFieldError(
      field,
      error,
    )
  }


  function touchField(
    field:
      ContactField,
  ) {
    setTouched(
      (current) => ({
        ...current,

        [field]:
          true,
      }),
    )


    validateField(
      field,
    )
  }


  function updateTextField(
    field:
      | 'name'
      | 'email'
      | 'message',
    value: string,
  ) {
    const nextData = {
      ...formData,

      [field]:
        value,
    }


    setFormData(
      nextData,
    )


    if (
      touched[
        field
      ]
    ) {
      const error =
        validateContactField(
          field,
          getValidationInput(
            nextData,
          ),
        )


      setFieldError(
        field,
        error,
      )
    }


    if (
      submitError
    ) {
      setSubmitError(
        '',
      )
    }
  }


  function updateSubject(
    value: string,
  ) {
    const nextData = {
      ...formData,

      subject:
        value,
    }


    setFormData(
      nextData,
    )


    /*
     * Selecting a topic is an explicit
     * interaction, so validation may
     * update immediately
     */
    const error =
      validateContactField(
        'subject',
        getValidationInput(
          nextData,
        ),
      )


    setFieldError(
      'subject',
      error,
    )


    setTouched(
      (current) => ({
        ...current,

        subject:
          true,
      }),
    )
  }


  function focusFirstError(
    nextErrors:
      ContactValidationErrors,
  ) {
    const fieldOrder:
      ContactField[] = [
        'name',
        'email',
        'subject',
        'message',
      ]


    const firstField =
      fieldOrder.find(
        (field) =>
          Boolean(
            nextErrors[
              field
            ],
          ),
      )


    if (!firstField) {
      return
    }


    window.requestAnimationFrame(
      () => {
        document
          .getElementById(
            `contact-${firstField}`,
          )
          ?.focus()
      },
    )
  }


  async function handleSubmit(
    event:
      FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault()

    setSubmitError(
      '',
    )


    const nextErrors =
      validateContactForm(
        getValidationInput(
          formData,
        ),
      )


    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    })


    if (
      Object.keys(
        nextErrors,
      ).length >
      0
    ) {
      setErrors(
        nextErrors,
      )

      focusFirstError(
        nextErrors,
      )

      return
    }


    const normalizedData:
      ContactFormData = {
        ...formData,

        name:
          normalizeContactName(
            formData.name,
          ),

        email:
          normalizeContactEmail(
            formData.email,
          ),

        message:
          normalizeContactMessage(
            formData.message,
          ),
      }


    try {
      setIsSubmitting(
        true,
      )


      /*
       * Temporary simulation
       *
       * CMS / backend request
       * will replace this block
       */
      await new Promise<void>(
        (resolve) => {
          window.setTimeout(
            resolve,
            900,
          )
        },
      )


      console.info(
        'Contact form ready to send',
        normalizedData,
      )


      setFormData(
        initialFormData,
      )

      onDirtyChange?.(
        false,
      )

      setTouched(
        initialTouched,
      )

      setErrors(
        {},
      )

      setIsSuccess(
        true,
      )
    } catch {
      setSubmitError(
        'Не удалось отправить сообщение, попробуйте ещё раз',
      )
    } finally {
      setIsSubmitting(
        false,
      )
    }
  }


  if (
    isSuccess
  ) {
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
          Сверчку
        </p>

        <p className="contact-form__success-note">
          Мы постараемся ответить
          как можно скорее
        </p>

        <Button
          variant="secondary"
          onClick={() =>
            setIsSuccess(
              false,
            )
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
      onSubmit={
        handleSubmit
      }
      noValidate
      aria-busy={
        isSubmitting
      }
    >

      {/* NAME */}

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
          required
          minLength={
            CONTACT_LIMITS.nameMin
          }
          maxLength={
            CONTACT_LIMITS.nameMax
          }
          spellCheck
          value={
            formData.name
          }
          aria-invalid={
            Boolean(
              errors.name,
            )
          }
          aria-describedby={
            errors.name
              ? 'contact-name-error'
              : undefined
          }
          onBlur={() =>
            touchField(
              'name',
            )
          }
          onChange={(
            event,
          ) =>
            updateTextField(
              'name',
              event.target.value,
            )
          }
        />

        {errors.name && (
          <p
            id="contact-name-error"
            className="contact-form__field-error"
            role="alert"
          >
            {errors.name}
          </p>
        )}
      </div>


      {/* EMAIL */}

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
          inputMode="email"
          autoComplete="email"
          required
          maxLength={
            CONTACT_LIMITS.emailMax
          }
          spellCheck={
            false
          }
          value={
            formData.email
          }
          aria-invalid={
            Boolean(
              errors.email,
            )
          }
          aria-describedby={
            errors.email
              ? 'contact-email-error'
              : undefined
          }
          onBlur={() =>
            touchField(
              'email',
            )
          }
          onChange={(
            event,
          ) =>
            updateTextField(
              'email',
              event.target.value,
            )
          }
        />

        {errors.email && (
          <p
            id="contact-email-error"
            className="contact-form__field-error"
            role="alert"
          >
            {errors.email}
          </p>
        )}
      </div>


      {/* SUBJECT */}

      <div className="contact-form__field">
        <CustomSelect
          id="contact-subject"
          label="Тема вопроса"
          placeholder="Тема вопроса"
          placeholderValue=""
          value={
            formData.subject
          }
          options={
            subjectOptions
          }
          className="contact-form__custom-select-field"
          ariaInvalid={
            Boolean(
              errors.subject,
            )
          }
          ariaDescribedBy={
            errors.subject
              ? 'contact-subject-error'
              : undefined
          }
          onBlur={() =>
            touchField(
              'subject',
            )
          }
          onChange={
            updateSubject
          }
        />

        {errors.subject && (
          <p
            id="contact-subject-error"
            className="contact-form__field-error"
            role="alert"
          >
            {errors.subject}
          </p>
        )}
      </div>


      {/* MESSAGE */}

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
          required
          minLength={
            CONTACT_LIMITS.messageMin
          }
          maxLength={
            CONTACT_LIMITS.messageMax
          }
          spellCheck
          value={
            formData.message
          }
          aria-invalid={
            Boolean(
              errors.message,
            )
          }
          aria-describedby={[
            errors.message
              ? 'contact-message-error'
              : '',
            'contact-message-counter',
          ]
            .filter(Boolean)
            .join(' ')
          }
          onBlur={() =>
            touchField(
              'message',
            )
          }
          onChange={(
            event,
          ) =>
            updateTextField(
              'message',
              event.target.value,
            )
          }
        />

        <div className="contact-form__field-meta">
          <span>
            Минимум{' '}
            {
              CONTACT_LIMITS.messageMin
            }{' '}
            символов
          </span>

          <span
            id="contact-message-counter"
            className={
              messageLength >
              CONTACT_LIMITS.messageMax *
                0.9
                ? 'contact-form__counter contact-form__counter--near-limit'
                : 'contact-form__counter'
            }
          >
            {messageLength}
            {' / '}
            {
              CONTACT_LIMITS.messageMax
            }
          </span>
        </div>

        {errors.message && (
          <p
            id="contact-message-error"
            className="contact-form__field-error"
            role="alert"
          >
            {errors.message}
          </p>
        )}
      </div>


      {/* FAQ CONSENT */}

      <label className="contact-form__faq">
        <input
          type="checkbox"
          checked={
            formData.allowFaqPublication
          }
          onChange={(
            event,
          ) =>
            setFormData(
              (
                current,
              ) => ({
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
            <span>
              Публикация возможна
              после редакционной проверки
            </span>

            <span>
              Личные данные и e-mail
              не публикуются
            </span>
          </small>
        </span>
      </label>


      {submitError && (
        <p
          className="contact-form__message"
          role="alert"
        >
          {submitError}
        </p>
      )}


      <div className="contact-form__actions">
        <Button
          type="submit"
          variant="secondary"
          disabled={
            isSubmitting
          }
        >
          {isSubmitting
            ? 'Отправляем…'
            : 'Отправить →'}
        </Button>
      </div>
    </form>
  )
}
