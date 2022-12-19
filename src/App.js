import React from 'react'
// import { useSelector, useDispatch } from 'react-redux';
// import { increment } from './actions';
import Home from './pages/Home';

function App() {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Home />
      <div className='container-fluid'> 
      </div>
      
      {/* Hello, the value of the counter is: {counter}
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button>-</button>
      The value of session log is: {isLogged} */}
    </div>
  );
}

export default App;
