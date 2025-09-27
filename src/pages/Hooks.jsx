import React from 'react'

function Hooks() {

    const handleClick = () => {
        alert("Button clicked!");
    }
    

  return (
    <div>
        <button onClick={handleClick}>Click Me</button>
        <p>This is a simple React component demonstrating event handling.</p>

        
      
    </div>
  )
}

export default Hooks
