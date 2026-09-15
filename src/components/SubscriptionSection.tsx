import './SubscriptionSection.css'

export default function SubscriptionSection() {
  return (
    <section className="subscription-section">
      <p className="subscription-section__text">
        А если вы хотите быть в курсе новых выпусков и событий
        <br />
        «Сверчка», достаточно просто
      </p>

      <button
        type="button"
        className="subscription-section__button"
      >
        Подписаться на альманах
      </button>
    </section>
  )
}