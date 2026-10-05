import Button from './ui/Button'

import './ContactCard.css'

export default function ContactCard() {
  return (
    <article className="contact-card">
      <h2 className="contact-card__title">
        Есть вопрос, идея или просто хочется написать?
      </h2>

      <p className="contact-card__text">
        Сверчок с удовольствием вас выслушает
      </p>

      <Button
        variant="outline"
        to="#contact"
      >
        Написать Сверчку →
      </Button>
    </article>
  )
}