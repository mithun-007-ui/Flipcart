import React from 'react'
import { Route, Routes } from "react-router-dom";
import Hme from '../pages/Home';   

function Apk() {
  return (
   <Routes>
    <Route path ="/" element ={<Hme/>}></Route>
   </Routes>
  )
}

export default Apk