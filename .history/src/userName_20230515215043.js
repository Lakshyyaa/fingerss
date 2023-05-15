import React, { useState } from "react";
function UserName() {
    const [name, setName]=useState('')
    return (
        <div>
            <h1>Welcome</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" on />
                </label>
            </form>
        </div>
    )
}
export default UserName 