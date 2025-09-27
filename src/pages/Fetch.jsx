import React from 'react'
import { useState, useEffect } from 'react'

function Fetch() {

    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Count ${count}`;
    }, [count]);
    function addCount() {
        setCount(count + 1);
    }

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
        <div className='bg-white shadow-lg rounded-lg p-8 w-full max-w-md'>
            <div>
            <h1>This is the click counter</h1>
                <h2>Your click count: {count} </h2> <br />
                <button onClick={addCount}>Add Count</button> <br />
                <button onClick={() => setCount(0)}>Reset Count</button><br />
                <button onClick={() => setCount(count - 1)}>Decrease Count</button>
            </div>
        </div>
       
    </div>
    
  )
}

export default Fetch
