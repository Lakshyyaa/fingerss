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
    }
    function Create(e){
        e.preventDefault()
        if(room==='' || name==='')
        {
            alert("Please fill both the fields to create a room")
        }
        else{
        }
    }
    return (
        // <div className="usernamediv">
           
        //     <h1>Welcome</h1>
        //     <form className="form">
        //         <label id="formelement">
        //             <div className="inputname">
        //                 <span className="name">Name: </span>
        //                 <input
        //                     type="text"
        //                     name="name"
        //                     onChange={e => setName(e.target.value)}
        //                     value={name}
        //                     placeholder="kimi no na wa"
        //                     className="inpt"
        //                 />
        //             </div>
        //         </label>
        //         <label id="formelement">
        //             <div className="roomid">
        //                 <span className="room">Room ID: </span>
        //                 <input
        //                     type="text"
        //                     name="room"
        //                     onChange={e => setRoom(e.target.value)}
        //                     value={room}
        //                     placeholder="aks your friends"
        //                     className="rinpt"
        //                 />
        //             </div>
        //         </label>
        //         <div id="formelement">
        //             <button onClick={e=>Create(e)}>
        //                 Create Room
        //             </button>
        //         </div>
        //         <div id="formelement">
        //             <input
        //                 className="sbmtbtn"
        //                 type="submit"
        //                 name="ok"
        //                 value="SUBMIT"
        //                 onClick={e => submitted(e)}
        //             />
        //         </div>
        //     </form>
        // </div>
        <div class="container">
            <h1>Beautiful Form</h1>
            <form>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter your name" />
                </div>
                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email" />
                </div>
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter your password" />
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="message" placeholder="Enter your message"></textarea>
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>

    )
}
export default UserName 