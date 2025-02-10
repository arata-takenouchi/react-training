import './App.css'
import Sample from './SampleComponent'
import Bad from './BadSampleComponent'
// import { createRoot } from 'react-dom/client'

// const root = createRoot(document.getElementById('root'))
// root.render(<Image />)

function App() {
  return (
    <>
      <h1>React App</h1>
      <h2>Sample</h2>
      <Sample />
      <br /><br />
      <h2>Bad Sample</h2>
      <Bad />
    </>
  )
}

export default App

