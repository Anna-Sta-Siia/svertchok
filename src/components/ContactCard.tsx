import Button from './ui/Button'

import './ContactCard.css'


export default function ContactCard() {
  return (
    <article className="contact-card">
      <h2 className="contact-card__title">
        <span>
          Есть вопрос, идея
        </span>

        <span>
          или просто хочется написать?
        </span>
      </h2>


      <Button
        variant="secondary"
        to="#contact"
      >
        Написать Сверчку →
      </Button>
    </article>
  )
}
