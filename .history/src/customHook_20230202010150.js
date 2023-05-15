import React, { useState, useEffect, useRef, useContext } from "react";

function customHook(){
    const THETIME = 5
    const [text, setText] = useState('');
    const [time, setTime] = useState(THETIME);
    const [start, setStart] = useState(false);
    const [count, setCount] = useState(0);
    const areaRef = useRef(null)
    function handleChange(e) {
        const { value } = e.target;
        setText(value)
    }
    function handleStart() {
        areaRef.current.disabled = false;
        setStart(true)
        setCount(0);
        setText('');
        setTime(THETIME)
        areaRef.current.focus()

    }
    function wordCount(str) {
        const arr = str.trim().split(' ')
        const filtered = arr.filter(word => (word != ''))
        return (filtered.length)
    }
    useEffect(() => {
        if (time > 0 && start) {
            setTimeout(() => {
                setTime(time => time - 1)
            }, 1000)
        }
        else if (time === 0) {
            setStart(false)
            setCount(wordCount(text))
            console.log(count)
        }
    }, [time, start])
}
export default customHook