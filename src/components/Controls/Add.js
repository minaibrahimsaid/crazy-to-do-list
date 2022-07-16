import { BsPlus } from 'react-icons/bs'

const Add = ({ setCookie = () => {}, cards = [] }) => {
  const addCard = () => {
    const id = cards ? cards.length + 1 : 1
    const allCard = cards ?? []
    const newCookie = JSON.stringify([{ id, text: '' , done:false } ,...allCard])
    setCookie('cards', newCookie)
  }

  return <BsPlus className="icon add" size={25} onClick={addCard} />
}

export default Add
