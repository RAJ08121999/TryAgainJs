import React, { useState } from 'react'
import Card1 from './components/Card1'
import { useEffect } from 'react'


// first contains the side effect function
// second is the clean up function
// third is the comma separated dependency list [], based on these dependencies the side effect function will run
const App = () => {

  const [count,setCount] = useState(0);
  // const [total , setTotal ] = useState(1);

  // useEffect(() => {
  //   alert('page rendered \n run on each render');
  // })---------------->variation 1, run on every render

  // useEffect(()=>{
  //   alert('runs on only first render')
  // },[]);-------------------> variation 2, runs on only first render

  // useEffect(()=>{
  //   alert("count changed");
  // },[count]);---------------> variation 3 , runs when value of count will change;
  

  // useEffect(()=>{
  //   alert("count/total is updated");
  // },[count,total])----------------> variation 4, runs when count/total is updated -------multiple dependencies


  // useEffect(() => {
  //   alert("count is updated")
  //   return () => {
  //     alert("count is unmounted/removed from ui ");
  //   }
  // }, [count])

  // variation 5 , adding a cleanup function------|above
  // in each click previous value of count is removed / unmounted and a newer value is added so it runs twice 
  
  useEffect(()=>{
    setTimeout(()=>{
      setCount(count+1);
    },1000)
  })

  function increase(){
    setCount(count+1);
    // setTotal(total+count);
  }

  function decrease(){
    setCount(count-1);
    // setTotal(total-1);
  }

  const data=[
    {name:"raj",age:25},
    {name:"raja",age:35},
    {name:"rajesh",age:20},
    {name:"rajan",age:45},
    {name:"rakesh",age:22},
    {name:"ramesh",age:20},
  ]

  return (
    <div id='container'>

      <Card1 name={data[0].name} age = {data[0].age} />
      <Card1 name={data[1].name} age = {data[1].age} />
      <Card1 name={data[2].name} age = {data[2].age} />
      <Card1 name={data[3].name} age = {data[3].age} />
      <Card1 name={data[4].name} age = {data[3].age} />
      <Card1 name={data[5].name} age = {data[5].age} />


      <p id='counter-para'>{count}</p>
      {/* <p>Total is {total}</p> */}
      <div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
      
    </div>
  )
}

export default App
