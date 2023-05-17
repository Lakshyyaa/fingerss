import React, { useState } from "react";
import styles from "./formcss.css"
function UserName() {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('')
    function handle(e) {
        setName(e.target.value)
        console.log(name);
    }
    function submitted(e) {
        e.preventDefault()
    }
    function Create(e){
        e.preventDefault()
        if(room==='')
        {
            
        }
        console.log(room)
    }
    return (
        <div className="usernamediv">
            <h1>Welcome</h1>
            <form className="form">
                <label>
                    <div className="inputname">
                        <span className="name">Name: </span>
                        <input
                            type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            placeholder="kimi no na wa"
                            className="inpt"
                        />
                    </div>
                </label>
                <label>
                    <div className="roomid">
                        <span className="room">Enter Room ID: </span>
                        <input
                            type="text"
                            name="room"
                            onChange={e => setRoom(e.target.value)}
                            value={room}
                            placeholder="aks your friends"
                            className="rinpt"
                        />
                    </div>
                </label>
                <div>
                    <button onClick={e=>Create(e)}>
                        Create Room
                    </button>
                </div>
                <div>
                    <input
                        className="sbmtbtn"
                        type="submit"
                        name="ok"
                        value="SUBMIT"
                        onClick={e => submitted(e)}
                    />
                </div>
            </form>
        </div>
    )
}
export default UserName 