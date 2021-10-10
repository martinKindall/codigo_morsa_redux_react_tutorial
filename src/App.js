import React from 'react'

function App() {
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
        <span>Contador: 0</span>
      </section>
      <section>
        <button>Incrementar</button>
        <button>Disminuir</button>
      </section>
    </div>
  )
}

export default App
