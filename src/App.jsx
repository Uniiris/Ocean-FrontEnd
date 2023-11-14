import './App.css'
import Card from './components/Card/Card'

function App() {
  return (
    <>
      <div className="card">
        <div id='linha-nome'>
          <h2>Rick Sanchez</h2>
          </div>
          <div className='tags'>
            <div className='tag'>Status: Vivo</div>
            <div className='tag'>Humana</div>
            <div className='tag'>Terra C137</div>
          </div>
        <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"/>
      </div>
      <Card />
    </>
  )
}

export default App
