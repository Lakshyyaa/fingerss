import React from "react";
import {ThemeContextConsumer} from 'themeContext.js';
function Button(props){
    return(
        <ThemeContextConsumer>
            {(context)=>(
                <button onClick={context.}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )
}
export default Button