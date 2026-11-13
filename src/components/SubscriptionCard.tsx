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
      <h2 className="subscription-card__title">
        <span>
          Хотите узнавать
        </span>

        <span>
          новости Сверчка?
        </span>
      </h2>


      <Button
        variant="primary"
        to={to}
      >
        Подписаться →
      </Button>
    </article>
  )
}
