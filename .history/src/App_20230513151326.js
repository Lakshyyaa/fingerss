// whenever someone joins ask their username
// remember state var are used for display and re-render reasons not logic part.
// features to be added: color change, showing other users bars and their stats, ranking,
// additional: special ranks for first ranker and room creator which asssigns start permission to next joiner
import React, { useState, useEffect, useRef, useContext, useDebugValue, useCallback } from "react";
import Logic from "./Logic";
import userName from "./userName";
import userEvent from "@testing-library/user-event";
import { type } from "@testing-library/user-event/dist/type";
function App(props) {
  let boolstart = false
  const { start, setStart } = Logic()
  const [timerText, setTimerText] = useState(5)
  const [words, setWords] = useState('')
  const [wordspm, setWordspm] = useState(0);
  const [accuracy, setAccuracy] = useState(0)
  const countdowndiv = useRef(null)
  const maindiv = useRef(null)
  const spandiv = useRef(null)
  const wordsRef = useRef(words)
  let typed
  let index = 0
  let keyStrokes = 0
  const countdown = () => {
    setStart(true)
    countdowndiv.current.style.display = 'block'
    maindiv.current.style.opacity = '0.2'
    timerLoop(5)
    fetch('https://random-word-api.herokuapp.com/word?number=10')
      .then(x => x.json())
      .then(y => {
        setWords(y.join(' '))
      })
  }
  useEffect(() => {
    wordsRef.current = words
  }, [words])

  useEffect(() => {
    document.addEventListener('keydown', (e) => handlekey(e))
    return () => {
      document.removeEventListener('keydown', (e) => handlekey(e))
    }
  }, [])
  function handlekey(e) {
    typed = e.key
    beginTyping(index)
  }
  function beginTyping(i) {
    if (boolstart) {
      if (typed === wordsRef.current[i]) {
        console.log(wordsRef.current[i] + typed)
        //green
        index++
        keyStrokes++
        console.log(keyStrokes)
      } else {
        console.log('wrong')
        //red
        keyStrokes++
        console.log(keyStrokes)
      }
    }
    else {
      console.log('wrong')
    }
  }
  function timerLoop(i) {
    if (i > 0) {
      setTimerText(i)
      setTimeout(() => {
        i--
        timerLoop(i)
      }, 1000)
    }
    else if (i === 0) {
      countdowndiv.current.style.display = 'none'
      maindiv.current.style.opacity = '1'
      boolstart = true
    }
  }

  return (
    <div>
      <div className="countdown" ref={countdowndiv}>
        Begins in: {timerText}
      </div>
      <div ref={maindiv}>
        <h1>How fast do you type?</h1>
        <div ref={spandiv} className="spandiv" onKeyDown={e => { console.log(e) }}>
          {words}
        </div>
        <button onClick={() => countdown()} disabled={start}>Start</button>
        <h1>WPM: {wordspm}</h1>
        <h1>Accuracy: {accuracy}%</h1>
      </div>
    </div>
  )
}
export default App;
