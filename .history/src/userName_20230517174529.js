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
        if (room === '' || name === '') {
            alert("Please fill both the fields to join the room")
        }
        else {
            const pattern = /^\d{4}$/;
            if (pattern.test(room)) {

            }
            else {
                alert("make sure the room id is a 4-digit number")
            }
        }
    }
    function Create(e) {
        e.preventDefault()
        if (room === '' || name === '') {
            alert("Please fill both the fields to create a room")
        }
        else {
            const pattern = /^\d{4}$/;
            if (pattern.test(room)) {
                
            }
            else {
                alert("make sure the room id is a 4-digit number")
            }
        }
    }
    return (
        <div className="usernamediv">
            <h1>WELCOME TO FINGERSS!</h1>
            <form className="form">
                <label id="formelement">
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
                <label id="formelement">
                    <div className="roomid">
                        <span className="room">Room ID: </span>
                        <input
                            type="text"
                            name="room"
                            onChange={e => setRoom(e.target.value)}
                            value={room}
                            placeholder="4 digit number"
                            className="rinpt"
                        />
                    </div>
                </label>
                <div id="formelement">
                    <button onClick={e => Create(e)} className="createbtn">
                        Create Room
                    </button>
                </div>
                <div id="formelement">
                    <input
                        className="sbmtbtn"
                        type="submit"
                        name="ok"
                        value="JOIN ROOM"
                        onClick={e => submitted(e)}
                    />
                </div>
            </form>
            <div>
                typewriter effect here
            </div>
        </div>
    )
}
export default UserName 