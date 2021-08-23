import React,{useEffect,useState} from 'react'

function Ue3() {
    console.log('render');
    const [count, setCount] = useState(0);
    const [darkMode, setDarkMode]=useState(false);
    useEffect(()=>{
        console.log('useeffect')
        document.title=`Clicked ${count} times`;
    },[count])
    return (
        <div className={darkMode ? "view dark-mode": "view"}>
            <label htmlFor='dark mode' >Dark Mode</label>
            <input type='checkbox' checked={darkMode} onChange={()=>setDarkMode(!darkMode)}/>
            <button onClick={()=>{setCount(count+1)}}>{count}</button>
        </div>
    )
}

export default Ue3
