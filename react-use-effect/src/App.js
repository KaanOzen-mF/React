import Counter from './components/Counter';


import './App.css';
import { useState } from 'react';

function App() {

  const[isVisible, setIsVisible] = useState(false);


  return (
    <div className="App">

      {isVisible && <Counter/>}
      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  );
}

export default App;
