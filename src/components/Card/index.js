import {  useState } from 'react'
import { BsTrash } from 'react-icons/bs'
import { FaSave } from 'react-icons/fa'

const Card = ({
  card = {},
  onRemoveCard = () => {},
  onSaveCard = () => {},
}) => {
  const [text, setText] = useState(card.text)

  const handleSave = () => {
    onSaveCard({ text, cardId: card.id })
  }

  return (
    <div className="card">
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
          className={`card-save ${text === card.text ? "card-save-disable" : ""}`}
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
