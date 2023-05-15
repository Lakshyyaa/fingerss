// whenever someone joins ask their username
// remember state var are used for display and re-render reasons not logic part.
// features to be added: color change, showing other users bars and their stats, ranking,
// additional: special ranks for first ranker and room creator which asssigns start permission to next joiner
import React, { useState, useEffect, useRef, useContext, useDebugValue, useCallback } from "react";
function App() {
  let boolstart = false
  const [start, setStart] = useState(false)
  // used to make the start button disabled after clicking nothing else
  const [timerText, setTimerText] = useState(5)
  // const [wordspm, setWordspm] = useState(0);
  // const [accuracy, setAccuracy] = useState(0)
  const countdowndiv = useRef(null)
  //countdowndiv is a simple div that shows the countdown time and disappears after timeout
  const maindiv = useRef(null)
  //maindiv is a simple div that shows the entire part besides the countdown the floats over it
  const wordsdiv = useRef(null)
  // to refer to the div where the words are displayed
  const [words, setWords] = useState('')
  const wordsRef = useRef(words)
  let typed
  let index = 0
  let keyStrokes = 0
  //above three to keep track of what is typed and string's index
  useEffect(() => {
    wordsRef.current = words
  }, [words])
  // only setting wordsref to words but not yet using it anywhere

  useEffect(() => {
    document.addEventListener('keydown', (e) => handlekey(e))
    return () => {
      document.removeEventListener('keydown', (e) => handlekey(e))
    }
  }, [])

  useEffect(() => {
    fetch('https://random-word-api.herokuapp.com/word?number=10')
      .then(x => x.json())
      .then(y => {
        setWords(y.join(' '))
      })
  }, [])

  function countdown() {
    setStart(true)
    countdowndiv.current.style.display = 'block'
    maindiv.current.style.opacity = '0.2'
    timerLoop(5)
  }

  function handlekey(e) {
    typed = e.key
    beginTyping(index)
    console.log(12)
  }

  function beginTyping(i) {
    if (boolstart) {
      console.log(words)
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
        <div ref={wordsdiv} className="wordsdivv">
          {words}
        </div>
        <button onClick={() => countdown()} disabled={start}>Start</button>
        {/* <h1>WPM: {wordspm}</h1>
        <h1>Accuracy: {accuracy}%</h1> */}
        {/* above two will be used later to show these deets */}
      </div>
    </div>
  )
}
export default App;

