import React from 'react'
import {useState} from 'react'
import './Ap.css'

function Hme() {
    const [text,setText] = useState("")
    const [task,setTask]=useState([]);
    const reportSubmit = (a) =>{
        setTask([...task,text]);
        setText("");
    }
  return (
    
      <div className='body'>
      <h1>TODO</h1>
   <input type="text" 
    value={text}
    onChange={(e) => setText(e.target.value)}/>&nbsp;
  <button onClick={reportSubmit}>Add Task</button>

<ul>
 {task.map((txt, index) => (
  <li key={index}>{txt}</li>
 ))}  
</ul>
</div>

  )
}

export default Hme