import PasswordGenerator from "./Components/PasswordGenerator"

function App() {
  
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col gap-4 bg-slate-300">
      <h1 className="text-4xl font-bold">Password Generator</h1>
      <PasswordGenerator/>
    </div>
  )
}

export default App
