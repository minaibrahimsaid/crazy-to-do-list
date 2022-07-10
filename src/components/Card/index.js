import { useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaSave } from 'react-icons/fa'
import { MdCelebration } from 'react-icons/md'
import { AiOutlineCheckCircle } from 'react-icons/ai'

const Card = ({
  card = {},
  onRemoveCard = () => {},
  onSaveCard = () => { },
  onDone = ()=> {}
}) => {
  const [text, setText] = useState(card.text)

  const handleSave = () => {
    onSaveCard({ text, cardId: card.id, done: card.done })
  }

  const handleDone = () => {
   onDone()
    onSaveCard({ text: card.text, cardId: card.id, done: true })
  }

  return (
    <div className={`card ${card.done ? 'card-done' : ''}`}>
      {card.done && (
        <div className="done">
          <AiOutlineCheckCircle className="done-icon" size={60} />
        </div>
      )}
      <div className="card-content">
        <div className="card-header">
          <span className="card-title">Item {card.id}</span>
          <BsTrash
            size={20}
            onClick={() => onRemoveCard(card.id)}
            className="icon"
          />
        </div>
        <textarea
          className="card-text"
          defaultValue={text}
          type="text"
          multiple
          placeholder="what's on my list ?!"
          rows={5}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <div className="card-actions">
        <button
          className={`button-done ${card.done ? 'button-done-disable' : ''}`}
          onClick={handleDone}
          disabled={card.done}
        >
          DONE
          <MdCelebration size={20} />
        </button>

        <button
          className={`card-save ${
            text === card.text ? 'card-save-disable' : ''
          }`}
          onClick={handleSave}
          disabled={text === card.text}
        >
          <FaSave size={20} />
        </button>
      </div>


    </div>
  )
}

export default Card
