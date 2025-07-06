import React from 'react'
import {useState} from 'react'

export const Kanchan = (props) => {
    const [score, setScore] = useState(5)
    const [toggle, setToggle] = useState(false)
    const toggleFun = ( ) => {
        setToggle(!toggle)
            
        
    }

    const IncreseScore = () => {
        console.log("IncreseScore")
        setScore(score + 1)
    }

    const id=false

    




  return (
    <>
      <div>
        Hi {props.name} {props.age}
      </div>
      <div>
        score: {score}
        <button onClick={IncreseScore}> Increse</button>
      </div>

      <div>
        <button onClick={toggleFun}>Toggle</button>
        {toggle ? <div>Kanchan</div> : <div>Kabin</div>}
        </div>
        {id && <div>Id is true</div>}
        
    </>
  );
}
