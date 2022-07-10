import { BsTrash2 } from 'react-icons/bs'

const Clear = ({ removeCookie = () => {} }) => {
  const onClear = () => {
    removeCookie('cards')
  }

  return <BsTrash2 className="icon clear" size={25} onClick={onClear} />
}

export default Clear
