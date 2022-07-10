import Card from '../Card'
import { remove } from 'lodash'
import Empty from '../Empty'

const CardList = ({ cards = [], setCookie }) => {
  if (!cards || !cards.length) return <Empty />
  const onRemoveCard = (cardId) => {
    remove(cards, (c) => c.id === cardId)
    setCookie('cards', cards)
  }

  const onSaveCard = ({ text, cardId }) => {
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, text } : card,
    )
    setCookie('cards', newCards)
  }

  return (
    <div className="card-list">
      {cards.map((card) => (
        <Card
          key={`card-${card.id}`}
          onSaveCard={onSaveCard}
          card={card}
          onRemoveCard={onRemoveCard}
          setCookie={setCookie}
        />
      ))}
    </div>
  )
}

export default CardList
