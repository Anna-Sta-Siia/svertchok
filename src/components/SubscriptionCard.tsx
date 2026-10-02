import Button from './ui/Button'

import './SubscriptionCard.css'

type SubscriptionCardProps = {
  to: string
}

export default function SubscriptionCard({
  to,
}: SubscriptionCardProps) {
  return (
    <article className="subscription-card">
      <h2>
        Хотите узнавать новости Сверчка?
      </h2>

      <p className="subscription-card__text">
        Новые выпуски  и другие события
      </p>

      <Button
        variant="primary"
        to={to}
      >
        Подписаться →
      </Button>
    </article>
  )
}