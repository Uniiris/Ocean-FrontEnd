import { useEffect } from 'react'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const item1 = {
    name: "Rick Sanchez",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  }

  const item2 = {
    name: "Morty ",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  }

  const item3 = {
    name: "Summer Smith",
    imageUrl: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  }

  //const items = [item1, item2, item3]

  const [items, setItems] = useState([])

  async function carregarDadosApi(){ 
    const apiUrl = "https://rickandmortyapi.com/api/character/"

    const response = await fetch(apiUrl)

    const body = await response.json()
    console.log(body);

    setItems(body.results)
  }

  useEffect(function () {
    carregarDadosApi()
  }, [])

  carregarDadosApi()

  return (
    <>
    <div className='cards'>
      {items.map(function(element) {
        return <Card item={element} />
      })}
      </div>
    </>
  )
}

export default App
