import { BsShuffle  } from 'react-icons/bs'

const Shuffle = ({ shuffle = () => {} }) => {
  const onShuffle = () => {
    shuffle()
  }

  return <BsShuffle className="icon" size={25} onClick={onShuffle} />
}

export default Shuffle
