import React from 'react'
import { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    function increment (){
        setCount((c) => c + 1);
    }
    function decrement (){
        setCount((c) => c - 1);
    }
   return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick= {()=>{increment()}}>increment</button>
        <button onClick= {()=>{decrement()}}>decrement</button>
    </div>
  )
}

export default Counter