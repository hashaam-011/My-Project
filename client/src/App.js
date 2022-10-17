import React, {useState} from "react"
import Axios from 'axios'
import './App.css';

function App() {
  const [foodName, setFoodName] =useState("")
  const[ days,setDays] = useState(0);

  const addToList =() =>{
    Axios.post("http://localhost:8080/insert",
     {foodName: foodName,
      days: days,
    })

  }


  return (
    <div className="App">
    
    <h1> crud</h1>
    <label>Food Name: </label>

    <input type ="text" onChange={(event) =>{
      setFoodName(event.target.value);
    }}/>
    <label>Days since you Ate It: </label>
    <input type ="number"
    onChange={(event) =>{
      setDays(event.target.value);
    }}/>
    <button onClick={addToList}>Add to List</button>

    </div>
    
    
    
  );
}

export default App;
