import React,{useEffect,useState} from 'react'

function Uewc() {
    const [count, setCount]=useState(0);
    console.log('Render');
    useEffect(() => {
        console.log('useEffect');
        return () => {
            alert(`I will be called before the next useEffect is called ${count}`);
        }
    },[])

    return (
        <div>
            <p>{count}</p>
            <button onClick={()=>{setCount(count+1)}}>Click</button>
        </div>
    )
}

export default Uewc
