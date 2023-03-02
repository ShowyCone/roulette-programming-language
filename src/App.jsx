import { useState, useEffect } from 'react'
import {
  SiJavascript,
  SiPhp,
  SiJava,
  SiPython,
  SiCplusplus,
} from 'react-icons/si'
import './App.css'

function App() {
  const [flipped, setFlipped] = useState(false)
  const [interval, setIntervalState] = useState(null)
  const [count, setCount] = useState(0)
  const [degree, setDegree] = useState(0)
  const [valueNum, setValueNum] = useState(0)
  const [valueChar, setValueChar] = useState('A')
  const limit = Math.floor(Math.random() * (10 - 2 + 1)) + 2
  const alphabet = 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
  
  useEffect(() => {
    console.log(limit)
    if (count >= (limit * (limit * 1000)) / 70) {
      setValueChar(alphabet[Math.floor(Math.random() * alphabet.length)])
      setValueNum(Math.floor(Math.random() * (20 - 1 + 1)) + 1)
      clearInterval(interval)
      setIntervalState(null)
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    if (flipped) {
      setDegree((prev) => prev - 72)
    }
  }, [flipped])

  function handleClick() {
    if (interval) {
      clearInterval(interval)
      setIntervalState(null)
      setCount(0)
    } else {
      setIntervalState(
        setInterval(() => {
          setFlipped((prev) => !prev)
          setCount((prev) => prev + 1)
        }, 70)
      )
    }
  }

  return (
    <div className="App">
      <div className="scene">
        <div className="carousel" style={{ transform: `rotateY(${degree}deg)` }}>
          <div className="carousel__cell">
            <SiJavascript />
            <span>JavaScript</span>
          </div>
          <div className="carousel__cell">
            <SiPython />
            <span>Python</span>
          </div>
          <div className="carousel__cell">
            <SiCplusplus />
            <span>C++</span>
          </div>
          <div className="carousel__cell">
            <SiJava />
            <span>Java</span>
          </div>
          <div className="carousel__cell">
            <SiPhp />
            <span>PHP</span>
          </div>
        </div>
      </div>
      <div className="options">
        <input type="text" className="input" value={valueNum} />
        <button className="run-button" onClick={handleClick}>
          RUN
        </button>
        <input type="text" className="input" value={valueChar} />
      </div>
    </div>
  )
}

export default App
