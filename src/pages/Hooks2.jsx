import React from 'react'
import { useState } from 'react';
function Hooks() {


const  [count, setCount] = useState(0)

const handleaddition= ()=>{
    setCount(count + 1)
}
const handleSutraction = ()=>{
    setCount(count-1)
}
  
const handleReset = ()=>{
    setCount( 0)
}

    
      
    
  return (


    <div className='justify-center text-center p-[20px] gap-2.5'>
          <p className='text-8xl mb-[50px] '>{count}</p>
     <div className='gap-[20px justify-between] p-[20px]'>
        <button onClick={handleaddition} className='w-[200px] bg-amber-300 h-[50px] rounded-2xl '  >+</button>
            <button onClick={handleReset} className='w-[200px] bg-blue-200 h-[50px] rounded-2xl ' >Reset</button>
              <button onClick={handleSutraction} className='w-[200px] subbtn bg-amber-300 h-[50px] rounded-2xl '>-</button>
     </div>

    </div>
  )
}

export default Hooks