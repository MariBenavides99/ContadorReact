import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const incrementCount= () => {setCount((count) => count + 1);
};
  const decrementCount= () => {setCount((count) =>count -1);
};
  return (
    <>
      <div>
      </div>
      <h1>Contador</h1>
      <div className="card">
        <button id="boton1" onClick={incrementCount}>
          Incrementar = {count}
        </button>
        <button  id= "boton2" onClick={decrementCount}>
          Decrementar = {count-1}
        </button>

      </div>
      
    </>
  )
}

export default App
