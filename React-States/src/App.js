import { useState } from 'react';



function App() {

  const [name, setName] = useState("Kaan");
  const [age, setAge] = useState(24);
  const [friends, setFriends] = useState(["Görkem", "Berkay"]);  //setState Array
  const [address, setAddress] = useState({ address: "Konya", zip: 42015 }); //setState Object


  return (
    <div>

      <h1>My name is {name}</h1>
      <h2>Age is {age}</h2>
      <button onClick={() => setName("Özen")}>Change Name to Surname</button>
      <button onClick={() => setAge(25)}>Change Age</button>

      <h3>
        {friends.map((friend, index) => (
          <div key={index}>{friend}</div>
        ))}
      </h3>

      <button onClick={() => setFriends([...friends, "Yasin"])}>Add Friend</button>


      <h3>
        {address.address} {address.zip}
      </h3>

      <button onClick={() => setAddress({ ...address, address: "Adana" })}>Change Address</button>
    </div>
  );
}
//array kullanırken [... dan sonra ekleyeceğimiz state'in array'ini seçiyoruz]

export default App;
