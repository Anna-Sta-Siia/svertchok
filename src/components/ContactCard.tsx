import Button from './ui/Button'

import './ContactCard.css'

type ContactCardProps = {
  to?: string
}

export default function ContactCard({
  to = '/contact',
}: ContactCardProps) {
  return (
    <article className="contact-card">
      <h2>
        Есть вопрос, идея или просто хочется написать?
      </h2>

      <p className="contact-card__text">
        Сверчок с удовольствием вас выслушает
      </p>

      <Button
        variant="outline"
        to={to}
      >
        Написать Сверчку →
      </Button>
    </article>
  )
}