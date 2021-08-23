import React,{useEffect,useState} from 'react'

function Ue2() {
    const [count, setCount]=useState(0);
    useEffect(()=>{
        console.log('useEffect')
        document.title=`clicked ${count} times`
    },[])
    console.log('render')
    return (
        <div>
            <p>You Clicked the button {count} times</p>            
            <button onClick={()=>{
                console.log('Hello'); 
                setCount(count+1)
            }}>Click </button>
 
        </div>
    )
}

export default Ue2
