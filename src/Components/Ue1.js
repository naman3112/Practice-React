import React,{useEffect,useState} from 'react'

function Ue1() {
 
 useEffect(()=>{
     console.log('useEffect');
     document.title=`Clicked ${count} times`
 })

console.log('render');
const [count,setCount]=useState(0);


    return (
        <div>
            <p>You Clicked the button {count} times</p> 
            <button onClick={()=>{setCount(count+1)}}>Click</button>           
        </div>
    )
}

export default Ue1
