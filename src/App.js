import React from 'react';
import './App.css';
import Hello from './Hello/Hello';
import { useState } from 'react';
import { useEffect } from 'react';


function App() {
  var quarn = {
    learn :"Ikram",
    Teacher: "Khairul amin"
  }
  var Hozor = {
    Arafat:"Hafaz",
    Abir :"Hafaz2"
  }
  var style ={
    color:"red",
    backgroundColor:"cyan"
  }
  const nayoks = [ 'Razzak', "Alongir",'Salman', 'jasim','bappy']
  const products = [
    {name:"Photoshop", price:"$90" },
    {name:"Illistrator", price:"$70.70"},
    {name:"Pdf Reader",price:'$99.9' }
  ]
  const productsName = products.map(pd=>  products);
  console.log(productsName)
  const nayoksName= nayoks.map(ny=>nayoks);
  console.log(nayoksName)
  return (
    <div className="App">
      <h1 className= "" style={style} >{quarn.learn+" " +quarn.Teacher+" " +Hozor.Abir} </h1>
      
      <Hello name="My name is"></Hello>
      <Hello age="27"></Hello>
      <Hello job="Web developer"></Hello>
      <Hello company="Mak software developer"></Hello>
      <Hello country="Germany" > </Hello>
      <Counter></Counter>
      <Person></Person>
      <Users></Users>

        <ul>
          {nayoks.map(nayok=><li>{nayok} </li>)}
        </ul>
        <ul>
          <ul>
            {products.map(product=> <li>{product.price} </li>)}
          </ul>
        <li> {nayoks[0]} </li>
        <li> {nayoks[1]} </li>
        <li> {nayoks[2]} </li>
        <li> {nayoks[3]} </li>
        </ul>
        
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(10);
  const handIncrease = () => setCount(count+1);
  
  return(
    <div>
      <h1>Count:{count} </h1>
      <button onClick={handIncrease}>Increase</button><br/>
      <button onClick={() => setCount(count-1)}>Decrease</button>

    </div>
  )
  }
function Users () {
    const [users, setUser] = useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res  =>res.json())
      .then(data => setUser(data));
    }, [])
  return(
    <div>
      <h1>Dynamic Users :{users.length} </h1>
      
        <ul>
          {
          users.map(user=><li>{user.email}</li> )
          }
        </ul>
      
      </div>
  )
}
function Person (){

  return(
    <div style={{border:"2px solid red",margin:'10px',borderRadius:'7px'}}>
      <h1>hi i am robel</h1>
      <h3>i want to leran IELTS Reading</h3>
      
    </div>
  )
}

export default App;
