import React, { useState } from "react";
import styles from "./formcss.css"
function UserName() {
    const [name, setName] = useState('')
    function handle(e) {
        setName(e.target.value)
        console.log(name);
    }
    function submitted(e) {
        e.preventDefault()
    }
    return (
        <div className="usernamediv">
            <h1>Welcome</h1>
            <form>
                <label>
                    <div>
                        <span className="name">Name:</span>
                        <input
                            type="text"
                            name="name"
                            onChange={e => setName(e.target.value)}
                            value={name}
                            placeholder="kimi no na wa"
                        />
                    </div>
                </label>
                <input
                    type="submit"
                    name="ok"
                    onClick={e => submitted(e)}
                />
            </form>
        </div>
    )
}
export default UserName 