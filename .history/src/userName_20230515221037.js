import React, { useState } from "react";
function UserName() {
    const [name, setName]=useState('')
    function handle(e)
    {
        setName(e.target.value)
        console.log(name);
    }
    return (
        <div>
            <h1>Welcome</h1>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" onChange={e=>setName(e.target.value)} value={name} placeholder="kimi no na wa"/>
                </label>
                <label>

                </label>
            </form>
        </div>
    )
}
export default UserName 