import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Image from './Image'
import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById('root'))
// root.render(<Image />)

function App() {
  return (
    <>
      <h1>React App</h1>
      <Image />
    </>
  )
}

export default App

