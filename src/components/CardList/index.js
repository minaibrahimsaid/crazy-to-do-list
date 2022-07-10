import { useState } from 'react'
import Card from '../Card'
import { remove } from 'lodash'
import Empty from '../Empty'
import Confetti from 'react-confetti'

const CardList = ({ cards = [], setCookie }) => {
  const [party, setParty] = useState(false)

  if (!cards || !cards.length) return <Empty />
  const onRemoveCard = (cardId) => {
    remove(cards, (c) => c.id === cardId)
    setCookie('cards', cards)
  }

  const onSaveCard = ({ text, cardId, done }) => {
    const newCards = cards.map((card) =>
      card.id === cardId ? { ...card, text, done } : card,
    )
    setCookie('cards', newCards)
  }

  const onDone = () => {
    setParty(!party)
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
          onDone={onDone}
        />
      ))}

      <Confetti
        style={{ pointerEvents: 'none' }}
        numberOfPieces={party ? 500 : 0}
        recycle={false}
        onConfettiComplete={(confetti) => {
          setParty(false)
          confetti.reset()
        }}
      />
    </div>
  )
}

export default CardList
