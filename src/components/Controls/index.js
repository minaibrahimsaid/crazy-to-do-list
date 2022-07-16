import Add from './Add'

const Controls = ({
  setCookie = () => {},
  cards = [],
}) => {
  return (
    <div className="controls">
      <Add setCookie={setCookie} cards={cards} />
    </div>
  )
}

export default Controls
