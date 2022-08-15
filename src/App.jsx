import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter';

import reactLogo from './assets/react.svg'
import './App.css'


function App() {

  const { counter } = useSelector(state => state.counter)

  const dispatch = useDispatch()

  return (
    <div className="App">
      <div>
        <img src="/vite.svg" className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <p>count is {counter}</p>

      <button onClick={() => dispatch(increment())}>
        increment
      </button>

      <button onClick={() => dispatch(decrement())}>
        decrement
      </button>

      <button onClick={() => dispatch(incrementByAmount(2))}>
        incrementBy2
      </button>

    </div>
  )
}

export default App
