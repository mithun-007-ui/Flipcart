import React from 'react'
import {useState} from 'react'


function Hme() {
    const [text,setText] = useState("")
    const [task,setTask]=useState([]);
    const reportSubmit = (a) =>{
        setTask([...task,text]);
        setText("");
    }
  return (
    <div className=''>
   <input type="text" 
    value={text}
    onChange={(e) => setText(e.target.value)}/>
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