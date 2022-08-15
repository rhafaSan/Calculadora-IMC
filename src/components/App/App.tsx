import './App.css'

const App = () => {
  return(
    <div className="container">
      <div className="mainBox">
        <h1 className='title'>Calculadora de IMC</h1>
        <hr />
        <div className='calc_number'>
          <label >Sua altura</label>
          <br />
          <input type="text"  />
          <br />
          <label>Seu peso</label>
          <br />
          <input type="text" />
        </div>

        <button>Calcular</button>
      </div>
    </div>
  )
}

export default App