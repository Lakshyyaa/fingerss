import React, { useState, useEffect, useRef } from "react";

function Logic(){
    // const THETIME = 5
    // const [text, setText] = useState('');
    // const [time, setTime] = useState(THETIME);
    const [start, setStart] = useState(false);
    // const [count, setCount] = useState(0);
    // const areaRef = useRef(null)
    // function handleChange(e) {
    //     const { value } = e.target;
    //     setText(value)
    // }
    function handleStart() {
        // areaRef.current.disabled = false;
        setStart(true)
        // setCount(0);
        // setText('');
        // setTime(THETIME)
        // areaRef.current.focus()

    }
    // function wordCount(str) {
    //     const arr = str.trim().split(' ')
    //     const filtered = arr.filter(word => (word != ''))
    //     return (filtered.length)
    // }
    // useEffect(() => {
    //     if (time > 0 && start) {
    //         setTimeout(() => {
    //             setTime(time => time - 1)
    //         }, 1000)
    //     }
    //     else if (time === 0) {
    //         setStart(false)
    //         setCount(wordCount(text))
    //         console.log(count)
    //     }
    // }, [time, start])
    // return {start, areaRef, time, handleStart, start, count}
    // return {handleChange, text, start, areaRef, time, handleStart, start, count}
    // return {handleChange, text, start, areaRef, time, handleStart, start, count}
}
export default Logic
//     < h1 > How fast do you type ?</h1 >
//       <textarea
//         onChange={handleChange}
//         value={text}
//         disabled={!start}
//         ref={areaRef}
//       />
//       <h4>Time remaining: {time}</h4>
//       <button onClick={() => handleStart()} disabled={start}>Start</button>
// {/* cant directly call the wordCount here like handleChange because event listener automatically passes the e */ }
// <h1>Word Count: {count}</h1>