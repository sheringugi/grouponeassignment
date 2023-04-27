import React, {useEffect, useState} from 'react';
import './App.css';
import HobbiesList from './HobbiesList';

function App() {
  const [data, setData]= useState([]);
  useEffect(()=>{
    fetch("http://localhost:3000/hobbies")
    .then(res=>res.json())
    .then(data=>setData(data))
  },[]);

  return (
    <div>
      <h1>HOBBIES</h1>
      <HobbiesList hobbies={data}/>
    </div>
  );
}

export default App;
