import React from 'react'

const styles={
    default: {
        backgroundColor: 'yellow',
        color: 'oragne',
        padding: '10px',
        margin: '10px'
    },
    disable: {
        backgroundColor: 'green',
        color: 'red'
    }
}

function Button(props){
   
   let _styles={...styles.default};
   if(props.disable){
       _styles={..._styles.default, ...styles.disable}
   }
   
   
    return (
        <div>
            <button style={_styles}>This is a button </button>
        </div>
    )
}
export default Button