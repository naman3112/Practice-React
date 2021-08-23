import React, {useState} from 'react';
import ThemeContext from './ThemeContext';
import Navbar from './Navabar';


function Central() {
const [ntheme,setnTheme]=useState('Light');


    return (
        <div>
            <ThemeContext.provider value={{theme: ntheme, chfn:setnTheme}}>
                <Navbar/>
            </ThemeContext.provider>            
        </div>
    )
}

export default Central
