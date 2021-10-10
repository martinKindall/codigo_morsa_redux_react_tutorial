import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function App() {

  const contador = useSelector(state => state.value);

  const dispatch = useDispatch()
  const handleIncrementarContador = () => {
    dispatch({ type: 'contador/incrementar' })
  }
  const handleDisminuirContador = () => {
    dispatch({ type: 'contador/disminuir' })
  }

  return (
    <div className="App">
      <nav>
        <section>
          <h1>Redux Fundamentals Example</h1>

          <div className="navContent">
            <div className="navLinks"></div>
          </div>
        </section>
      </nav>
      <section>
        <h2>Welcome to the Redux Fundamentals example app!</h2>
      </section>
      <section>
        <span>Contador: {contador}</span>
      </section>
      <section>
        <button onClick={handleIncrementarContador}>Incrementar</button>
        <button onClick={handleDisminuirContador}>Disminuir</button>
      </section>
    </div>
  )
}

export default App
