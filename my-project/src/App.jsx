import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className="bg-green-400 text-black mb-4">Tailwind Test</h1>

      <Card username="Kanchan" more="Visit me" />
      <Card username="Kabin"  />
    </>
  );
}

export default App
