import { BiCoffee } from 'react-icons/bi'

const Empty = () => {
  return (
    <div className="empty-content">
      <p>You don't have anything on your list now</p>
      <p>
        Have some tea <BiCoffee className="icon" />
      </p>
    </div>
  )
}

export default Empty
