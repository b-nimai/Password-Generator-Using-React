import React from 'react'

function PasswordGenerator() {
  return (
    <div className='w-[90%] md:w-[50%] flex flex-col gap-4 justify-center items-center border p-6 rounded-3xl bg-slate-100'>
      <div className='flex gap-1'>
        <input 
        className='p-2 border border-slate-300 rounded-3xl'
        type="text" 
        readOnly 
        />
        <button
          className='border border-slate-300 px-4 rounded-3xl font-bold bg-blue-300 hover:bg-white text-white hover:text-blue-300'
        >
          Copy
        </button>
      </div>

      <div className='flex gap-4'>
        <input 
        type="range" 
        min="6"
        max="50" />
        <p>Length: {}</p>
      </div>

      <div className='flex flex-wrap gap-4'>
        <div className='flex gap-2'>
          <input type="checkbox" id="uppercase" />
          <label htmlFor="uppercase">Uppercase</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="Lowercase" />
          <label htmlFor="Lowercase">Lowercase</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="Number" />
          <label htmlFor="Number">Number</label>
        </div>

        <div className='flex gap-2'>
          <input type="checkbox" id="Sp-char" />
          <label htmlFor="Sp-char">Special Character</label>
        </div>
      </div>
    </div>
  )
}

export default PasswordGenerator
