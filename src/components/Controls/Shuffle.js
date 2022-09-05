import { BsShuffle } from 'react-icons/bs'
import { shuffle } from 'lodash'

const Shuffle = ({setCookie ,cards =[]}) => {
  const onShuffle = () => {
    const allCard = cards ?? []
    const newCookie = JSON.stringify([...shuffle(allCard)])
    setCookie('cards', newCookie)
  }

  return <BsShuffle className="icon" size={25} onClick={onShuffle} />
}

export default Shuffle
