import Add from './Add'
import Shuffle from './Shuffle'

const Controls = ({
  setCookie = () => { },
  cards = [],
}) => {
  return (
    <div className="controls">
      <Add setCookie={setCookie} cards={cards} />
      <Shuffle setCookie={setCookie} cards={cards} />
    </div>
  )
}

export default Controls
