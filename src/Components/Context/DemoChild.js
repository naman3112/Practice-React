import React,{useEffect,useState,useContext} from 'react'
import MyContext from './Context'
function DemoChild(){
    console.log('Demo child Render');
    const val=useContext(MyContext);
    console.log(val);
    return (
        <div></div>
    )
}

export default DemoChild;