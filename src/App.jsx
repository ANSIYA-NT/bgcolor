import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("white")
  return (
    <>
      <div style={{ background: color, height: '100vh' }}>
        <h1 style={{ color: 'black', fontWeight: 'bolder', textAlign: 'center', paddingTop: '15px' }}>
            BACKGROUND COLOR CHANGING APP</h1>
        <div style={{ justifyContent: 'space-evenly', display: 'flex', marginTop: '400px' }}>
          <button onClick={() => setColor("green")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>GREEN</button>
          <button onClick={() => setColor("red")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>RED</button>
          <button onClick={() => setColor("orange")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>ORANGE</button>
          <button onClick={() => setColor("pink")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>PINK</button>
          <button onClick={() => setColor("cyan")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>CYAN</button>
          <button onClick={() => setColor("blue")}
            style={{ background: 'black', color: 'yellow', borderRadius: '5px', width: '90px', height: '50px' }}>BLUE</button>
        </div>
      </div>

    </>
  )
}

export default App


