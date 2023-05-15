import React from "react";
const {Provider, Consumer}= React.createContext();
class themeContext extends React.Component(){
    render(){
        <themeContext.Provider>
            {this.props}
        </themeContext.Provider>
    }
}

