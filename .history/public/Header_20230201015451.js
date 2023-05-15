import React from "react";
import { ThemeContextConsumer } from 'themeContext.js';
function Header(props) {
    return (
        <ThemeContextConsumer>
            {(context) => (
                <button onClick={context.toggle}>Switch Theme</button>
            )}
        </ThemeContextConsumer>
    )
}
export default Header