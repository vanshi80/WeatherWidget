// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
import "./App.css"
import WeatherApp from "./WeatherApp.jsx"
function App() {
  // return <h1>Hello world this is vanshika using react!</h1>
  // return <button>REACT by Vani</button>

  // Rendering our title component
  // return <Title />

  // if we want to return multiple components then follow the following steps
  return (
    // <div>
    //   <Title />
    //   <h3>I am a good student!</h3>
    //   <Title />
    //   <h3>I am a good student!</h3>
    //   <Title />
    //   <h3>I am a good student!</h3>
    // </div>

    // // using react fragments
    // <>
    //   <Title />
    //   <h3>I am a good student!</h3>
    //   <Title />
    //   <h3>I am a good student!</h3>
    //   <Title />
    //   <h3>I am a good student!</h3>
    // </>
    <WeatherApp />

  )
}
export default App
