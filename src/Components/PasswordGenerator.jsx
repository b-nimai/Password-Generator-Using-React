import React, { useCallback, useEffect, useRef, useState } from 'react'

function PasswordGenerator() {

  const [length, setLength] = useState(10)
  const [upper, setUpper] = useState(false)
  const [number, setNumber] = useState(false)
  const [specialCar, setSpecialCar] = useState(false)
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "abcdefghijklmnopqrstuvwxyz"
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWVYZ"
    const numbers = "1234567890"
    const specialCharacters = "`~!@#$%^&*(){}[]-_=+,<.>/?:;'"

    let len = length

    if (upper) {
      let randomNum = Math.floor(Math.random() * uppercase.length + 1)
      pass += uppercase.charAt(randomNum)
      str += "ABCDEFGHIJKLMNOPQRSTUVWVYZ"
      len--
    }

    if (number) {
      let randomNum = Math.floor(Math.random() * numbers.length + 1)
      pass += numbers.charAt(randomNum)
      str += "1234567890"
      len--
    }

    if (specialCar) {
      let randomNum = Math.floor(Math.random() * specialCharacters.length + 1)
      pass += specialCharacters.charAt(randomNum)
      str += "`~!@#$%^&*(){}[]-_=+,<.>/?:;'"
      len--
    }

    for (let i = 0; i < len; i++) {
      let randomNum = Math.floor(Math.random() * str.length)
      pass += str.charAt(randomNum)
    }

    setPassword(pass)

  }, [length, upper, number, specialCar])

  useEffect(() =>{
    passwordGenerator()
  }, [length, upper, number, specialCar])

  const passRef = useRef(null)

  const copyToClip = useCallback(() =>{
    window.navigator.clipboard.writeText(password);
    passRef.current?.select();
    alert("Password Coppied Successfully.")
  },[password])

  return (
    <div className='w-[90%] md:w-[35%] flex flex-col gap-4 justify-center items-center border p-6 rounded-3xl bg-slate-100'>
      <div className='flex gap-1'>
        <input 
        value={password}
        className='p-2 border border-slate-300 rounded-3xl'
        type="text" 
        readOnly 
        ref={passRef}
        />
        <button
        onClick={copyToClip}
        className='border border-slate-300 px-4 rounded-3xl font-bold bg-blue-300 hover:bg-white text-white hover:text-blue-300'
        >
          Copy
        </button>
      </div>

      <div className='flex gap-4'>
        <input 
        type="range" 
        min="6"
        max="50" 
        defaultValue={10}
        onChange={(e) => {setLength(e.target.value)}}
        />

        <p>Length: {length}</p>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='flex gap-2'>
          <input type="checkbox" id="uppercase" 
          defaultChecked = {upper}
          onChange={() =>{
            setUpper((prev) => !prev)
          }}
          />
          <label htmlFor="uppercase">Uppercase</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="Number" 
          defaultChecked = {number}
          onChange={() => {
            setNumber((prev) => !prev)
          }}
          />
          <label htmlFor="Number">Number</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="Sp-char" 
          defaultChecked = {specialCar}
          onChange={() => {
            setSpecialCar((prev) => !prev)
            console.log(specialCar)
          }}
          />
          <label htmlFor="Sp-char">Special Character</label>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
