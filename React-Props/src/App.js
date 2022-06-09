import './App.css';

import User from './components/User.js'

const friends = [
  {
    id: 1,
    name : "Yasin"
  },
  {
    id: 2,
    name : "Berkay"
  },
  {
    id: 3,
    name : "Görkem"
  },
]


function App() {
  return (
    <>
      <User 
      name="Kaan" 
      surname="Özen" 
      age={20} 
      isLoggedIn = {true} 
      friends = {friends}
      address = {{
        title : "Konya/Turkey",
        zip : 42054
      }}
      />
    </>
  );
}

export default App;
