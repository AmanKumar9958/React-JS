import { useState } from "react"
function App() {
  const [color, setColor] = useState('yellowgreen')
  return (
    <>
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center shadow-lg bg-white px-4 py-3 rounded-full gap-4">
          <button onClick={() => setColor('red')} className="outline-none px-4 py-1 text-white shadow-lg rounded-full font-bold" style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor('green')} className="outline-none px-4 py-1 text-white shadow-lg rounded-full font-bold" style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor('blue')} className="outline-none px-4 py-1 text-white shadow-lg rounded-full font-bold" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor('pink')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor('yellow')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor('lime')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "lime"}}>Lime</button>
          <button onClick={() => setColor('aqua')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "aqua"}}>Aqua</button>
          <button onClick={() => setColor('purple')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "purple"}}>Purple</button>
          <button onClick={() => setColor('gray')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "gray"}}>Gray</button>
          <button onClick={() => setColor('orange')} className="outline-none px-4 py-1 text-black shadow-lg rounded-full font-bold" style={{backgroundColor: "orange"}}>Orange</button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
