import React from 'react'
import stylesWrapper from './stylesWrapper'

function Button(props){
   
   
   
   
    return (
        <div>
            <button style={props.styles}>This is a button </button>
        </div>
    )
}
export default stylesWrapper(Button);