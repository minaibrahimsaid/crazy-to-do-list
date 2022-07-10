import { useCookies } from 'react-cookie'
import './App.css'
import Controls from './components/Controls'
import CardList from './components/CardList'

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['cards'])

  return (
    <div className="App">
      <Controls setCookie={setCookie} cards={cookies.cards} removeCookie={removeCookie} />
      <CardList cards={cookies.cards}  setCookie={setCookie}/>
    </div>
  )
}

export default App
