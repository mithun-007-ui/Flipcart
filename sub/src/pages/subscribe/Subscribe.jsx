import React from 'react'
import { useState } from 'react'
function Subscribe() {
    const [sub, unsub]= useState(false);
    function increment(){
       unsub(!sub)
    }
  return (
    <>
    <button onClick={increment}>{sub?"unsub":"sub"}</button>
    </>
  )
}

export default Subscribe