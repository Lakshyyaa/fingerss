// PROBLEMS: 
// WPM CHANGES ONLY WHEN TYPED EVENTHOUGH IT SHOULD CHANGE WITH TIME 

import React, { useState, useEffect, useRef } from "react";


function MainGame(props) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        wordsRef.current = words
        document.addEventListener('keydown', (e) => handlekey(e))
    }, [words])

    return (
        <div>
            <button >ok</button>
        </div>
    )
}
export default MainGame;
// function MainGame(props) {
//     let boolStart = (false)
//     const [stateBool, setStateBool] = useState(false)
//     const [start, setStart] = useState(false)
//     const [timerText, setTimerText] = useState(5)
//     const [words, setWords] = useState('')
//     let indexx = 0
//     const [index, setIndex] = useState(0)
//     const [wordspm, setWordspm] = useState(0);
//     const [accuracy, setAccuracy] = useState(0)
//     const countdowndiv = useRef(null)
//     const maindiv = useRef(null)
//     const wordsdiv = useRef(null)
//     const wordsRef = useRef(words)
//     let typed
//     let keyStrokes = 0
//     let startTime = 0
//     useEffect(() => {
//         wordsRef.current = words
//         document.addEventListener('keydown', (e) => handlekey(e))
//     }, [words])
//     const countdown = () => {
//         setStart(true)
//         countdowndiv.current.style.display = 'block'
//         maindiv.current.style.opacity = '0.2'
//         timerLoop(3)
//         fetch('https://api.github.com/repos/Lakshyyaa/testingcsv/contents/words.csv')
//             .then(x => x.json())
//             .then(y => (atob(y.content)).split('\n'))
//             .then(words => {
//                 let y = [];
//                 for (let i = 0; i < 2; i++) {
//                     const x = Math.floor(Math.random() * 1000);
//                     y.push(words[x].substring(1, words[x].length - 1));
//                 }
//                 return y;
//             })
//             .then(y => {
//                 setWords(y.join(' '))
//             })
//     }
//     function handlekey(e) {
//         console.log(index)
//         typed = e.key
//         if (wordsRef.current.split('').length === indexx) {
//             boolStart = false
//             alert("done....")
//         }
//         if (boolStart) {
//             keyStrokes++
//             if (typed === wordsRef.current[indexx]) {
//                 indexx++
//                 setIndex(prev => prev + 1)
//             }
//             let time = ((Date.now() - startTime) / 1000) / 60;
//             setWordspm(((indexx / 5) / time).toFixed(1))
//             setAccuracy(((indexx / keyStrokes) * 100).toFixed(1))
//         }
//     }
//     function timerLoop(i) {
//         if (i > 0) {
//             setTimerText(i)
//             setTimeout(() => {
//                 i--
//                 timerLoop(i)
//             }, 1000)
//         }
//         else if (i === 0) {
//             countdowndiv.current.style.display = 'none'
//             maindiv.current.style.opacity = '1'
//             boolStart = true
//             setStateBool(true)
//             startTime = Date.now()
//         }
//     }
//     return (
//         <div>
//             <div className="countdown" ref={countdowndiv}>
//                 Begins in: {timerText}
//             </div>
//             <div ref={maindiv}>
//                 <h1>How fast do you type?</h1>
//                 <div ref={wordsdiv} className="wordsdivv">
//                     {words.split('').map((char, key) => {
//                         let color;
//                         if (stateBool) {
//                             if (key < index) {
//                                 color = 'green'
//                             }
//                             if (key === index) {
//                                 color = 'red'
//                             }
//                         }
//                         else {
//                             color = 'black'
//                         }
//                         return (
//                             <span
//                                 key={key}
//                                 style={{ color: color }}
//                             >
//                                 {char}
//                             </span>
//                         );
//                     })}
//                 </div>
//                 <button onClick={() => countdown()} disabled={start}>Start</button>
//                 <h1>WPM: {wordspm}</h1>
//                 <h1>Accuracy: {accuracy}%</h1>
//             </div>
//         </div>
//     )
// }
// export default MainGame;



// import React, { useState, useEffect, useRef } from "react";
// function MainGame(props) {
//     let boolStart = (false)
//     const [stateBool, setStateBool] = useState(false)
//     const [start, setStart] = useState(false)
//     const [timerText, setTimerText] = useState(5)
//     const [words, setWords] = useState('')
//     let indexx = 0
//     const [index, setIndex] = useState(0)
//     const [wordspm, setWordspm] = useState(0);
//     const [accuracy, setAccuracy] = useState(0)
//     const countdowndiv = useRef(null)
//     const maindiv = useRef(null)
//     const wordsdiv = useRef(null)
//     const wordsRef = useRef(words)
//     let greened = []
//     let typed
//     let keyStrokes = 0
//     let startTime = 0
//     useEffect(() => {
//         wordsRef.current = words
//         document.addEventListener('keydown', (e) => handlekey(e))
//         return () => {
//             document.removeEventListener('keydown', (e) => handlekey(e))
//         }
//     }, [words])
//     const countdown = () => {
//         setStart(true)
//         countdowndiv.current.style.display = 'block'
//         maindiv.current.style.opacity = '0.2'
//         timerLoop(3)
//         fetch('https://random-word-api.herokuapp.com/word?number=1')
//             .then(x => x.json())
//             .then(y => {
//                 setWords(y.join(' '))
//             })
//     }
//     function handlekey(e) {
//         typed = e.key
//         if (boolStart) {
//             if (typed === wordsRef.current[indexx]) {
//                 indexx++
//                 setIndex(prev => prev + 1)
//                 keyStrokes++
//                 let time = ((Date.now() - startTime) / 1000) / 60;
//                 setWordspm(((keyStrokes / 5) / time).toFixed(1))
//                 setAccuracy(((indexx / keyStrokes) * 100).toFixed(1))
//                 if (wordsRef.current.split('').length === indexx) {
//                     alert("done....")
//                 }
//             } else {
//                 keyStrokes++
//                 let time = ((Date.now() - startTime) / 1000) / 60;
//                 setWordspm(((keyStrokes / 5) / time).toFixed(1))
//                 setAccuracy(((indexx / keyStrokes) * 100).toFixed(1))
//                 if (wordsRef.current.split('').length === indexx) {
//                     alert("done....")
//                 }
//             }
//         }
//     }
//     function timerLoop(i) {
//         if (i > 0) {
//             setTimerText(i)
//             setTimeout(() => {
//                 i--
//                 timerLoop(i)
//             }, 1000)
//         }
//         else if (i === 0) {
//             countdowndiv.current.style.display = 'none'
//             maindiv.current.style.opacity = '1'
//             boolStart = true
//             setStateBool(true)
//             startTime = Date.now()
//         }
//     }
//     return (
//         <div>
//             <div className="countdown" ref={countdowndiv}>
//                 Begins in: {timerText}
//             </div>
//             <div ref={maindiv}>
//                 <h1>How fast do you type?</h1>
//                 <div ref={wordsdiv} className="wordsdivv">
//                     {words.split('').map((char, key) => {
//                         let color;
//                         if (stateBool) {
//                             if (key < index) {
//                                 color = 'green'
//                             }
//                             if (key === index) {
//                                 color = 'red'
//                             }
//                         }
//                         else {
//                             color = 'black'
//                         }
//                         return (
//                             <span
//                                 key={key}
//                                 style={{ color: color }}
//                             >
//                                 {char}
//                             </span>
//                         );
//                     })}
//                 </div>
//                 <button onClick={() => countdown()} disabled={start}>Start</button>
//                 <h1>WPM: {wordspm}</h1>
//                 <h1>Accuracy: {accuracy}%</h1>
//             </div>
//         </div>
//     )
// }
// export default MainGame;


