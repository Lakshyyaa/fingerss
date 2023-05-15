// // whenever someone joins ask their username
// // remember state var are used for display and re-render reasons not logic part.
// // features to be added: color change, showing other users bars and their stats, ranking,
// // additional: special ranks for first ranker and room creator which asssigns start permission to next joiner
// import React, { useState, useEffect, useRef, useContext, useDebugValue, useCallback } from "react";
// import UserName from "./userName";
// import userEvent from "@testing-library/user-event";
// import { type } from "@testing-library/user-event/dist/type";
// function App(props) {
//   let boolstart = false
//   const [start, setStart] = useState(false)
//   const [timerText, setTimerText] = useState(5)
//   const [words, setWords] = useState('')
//   // const [wordspm, setWordspm] = useState(0);
//   // const [accuracy, setAccuracy] = useState(0)
//   const countdowndiv = useRef(null)
//   //countdowndiv is a simple div that shows the countdown time and disappears after timeout
//   const maindiv = useRef(null)
//   //maindiv is a simple div that shows the entire part besides the countdown the floats over it
//   const wordsdiv = useRef(null)
//   //wordsdiv is a simple di
//   const wordsRef = useRef(words)
//   let typed
//   let index = 0
//   let keyStrokes = 0
//   useEffect(() => {
//     wordsRef.current = words
//   }, [words])

// useEffect(() => {
//   document.addEventListener('keydown', (e) => handlekey(e))
//   return () => {
//     document.removeEventListener('keydown', (e) => handlekey(e))
//   }
// }, [])

//   const countdown = () => {
//     setStart(true)
//     countdowndiv.current.style.display = 'block'
//     maindiv.current.style.opacity = '0.2'
//     timerLoop(5)
//     fetch('https://random-word-api.herokuapp.com/word?number=10')
//       .then(x => x.json())
//       .then(y => {
//         setWords(y.join(' '))
//       })
//   }

//   function handlekey(e) {
//     typed = e.key
//     beginTyping(index)
//   }

//   function beginTyping(i) {
//     if (boolstart) {
//       if (typed === wordsRef.current[i]) {
//         console.log('green')
//         index++
//         keyStrokes++
//         const wordsArray = wordsRef.current.split('');
//         wordsArray[i] = `<span class="green">${typed}</span>`;
//         setWords(wordsArray.join(''));
//       } else {
//         console.log('red')
//         keyStrokes++
//         const wordsArray = wordsRef.current.split('');
//         wordsArray[i] = `<span class="red">${typed}</span>`;
//         setWords(wordsArray.join(''));
//       }
//     }
//   }
//   function timerLoop(i) {
//     if (i > 0) {
//       setTimerText(i)
//       setTimeout(() => {
//         i--
//         timerLoop(i)
//       }, 1000)
//     }
//     else if (i === 0) {
//       countdowndiv.current.style.display = 'none'
//       maindiv.current.style.opacity = '1'
//       boolstart = true
//     }
//   }

//   return (
//     <div>
//       <div className="countdown" ref={countdowndiv}>
//         Begins in: {timerText}
//       </div>
//       <div ref={maindiv}>
//         <h1>How fast do you type?</h1>
//         <div ref={wordsdiv} className="wordsdivv">
//           {wordsRef.current}
//           {/* in the above line we render the ref object having the words state */}
//         </div>
//         <button onClick={() => countdown()} disabled={start}>Start</button>
//         {/* above button calls countdown and is disabled */}
//         {/* <h1>WPM: {wordspm}</h1>
//           <h1>Accuracy: {accuracy}%</h1> */}
//       </div>
//     </div>
//   )
// }
// export default App;
import React, { useState, useEffect, useRef, useContext, useDebugValue, useCallback } from "react";
import UserName from "./userName";
import userEvent from "@testing-library/user-event";
import { type } from "@testing-library/user-event/dist/type";
function App() {
    const [timerText, setTimerText] = useState(5)
  const countdowndiv = useRef(null)

  const [userInput, setUserInput] = useState('');
  const textToDisplay = 'Hello, World!';
  const charArray = textToDisplay.split('');
  useEffect(() => {
    document.addEventListener('keydown', (e) => setUserInput(e.key))
    return () => {
      document.removeEventListener('keydown', (e) => setUserInput(e.key))
    }
  }, [])
  return (
    <div>
      <div className="countdown" ref={countdowndiv}>
        Begins in: {timerText}
      </div>

      {charArray.map((char, index) => (
        <span
          key={index}
          style={{ color: char === userInput ? 'green' : 'red' }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
export default App
