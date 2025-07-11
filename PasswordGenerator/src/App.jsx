import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'
import { useCallback } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed]=useState(false);
  const [CharAllowed, setCharAllowed]=useState(false);
  const [password , setPassword]= useState(" ");

const passwordRef=useRef(null)
  const passwordGenerator= useCallback(()=>{

    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str+="0123456789";
    if(CharAllowed) str+="!@#$%^&*(){}[]~-_=+";

    for (let i = 1; i <= length; i++) {
      const char=Math.floor(Math.random()*str.length + 1);
      pass += str.charAt(char);
      
    }

    setPassword(pass);

  },[length,numberAllowed,CharAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordGenerator.current?.setSelectRange(0,25)
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{passwordGenerator()},[length,numberAllowed,CharAllowed,passwordGenerator])
  return (
    <>
      <div
        className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 
    text-orange-500 bg-gray-800 "
      >
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className='className="flex shadow rounded-lg overfkow-hidden mb-4"'>
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />

          <button onClick={copyPasswordToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0">
            {" "}
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div>
          <input
            type="checkbox"
            defaultChecked={CharAllowed}
            id="characterInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </>
  );
}

export default App
