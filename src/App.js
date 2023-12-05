import React, {useState , useEffect} from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader"



import "./App.css"

import Home from "./Home"
import NavBar from './NavBar'





const App = () => {
  //Loading not working
const [Loading , setLoading] =useState(false);
useEffect(() => {
    //Loading working
  setLoading(true)


  setTimeout (() => {
    setLoading(false)
  },3000)
},[])


  return (
    <BrowserRouter>

{Loading ? 
<div className="preloaderr">
  <ScaleLoader className="ScaleLoader" color={'#f87765'} Loading={Loading} height={100} margin={10} />
</div>
:
<>

<NavBar />

<Routes>
<Route path='/' element={<Home />}/>

</Routes>


</>
}









      
    </BrowserRouter>
  )
}

export default App
