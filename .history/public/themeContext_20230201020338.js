import React from "react";
const {Provider, Consumer}= React.createContext();
class themeContext extends React.Component(){
    render(){
        <themeContext.Provider>
            {this.props.children}
        </themeContext.Provider>
    }
}

export {themeContext as UserContextProvider, Consumer as }