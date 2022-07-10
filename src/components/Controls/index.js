import Add from './Add'
import Clear from './Clear'

const Controls = ({
  removeCookie = () => {},
  setCookie = () => {},
  cards = [],
}) => {
  return (
    <div className="controls">
      <Add setCookie={setCookie} cards={cards} />
      <Clear removeCookie={removeCookie} />
    </div>
  )
}

export default Controls
