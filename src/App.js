// import { ImportContacts } from "@material-ui/icons";

import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"

import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route, Redirect} from "react-router-dom"

const App =()=>{
  return (
    <>
    <Navbar/>
    <Switch> 
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/service" component={Service}/>
    <Route exact path="/contact" component={Contact}/>
    <Redirect to="/"/>

       <Home/>
     </Switch>
     <Footer/>
  </>

  )
}
export default App































































// import React, {useState} from 'react'

// const App = () => {

//   const [name, setName]=useState("")
//   const [fullName, setFullName]=useState()
  
//   const inputEvent=(e)=>{
//     console.log(e.target.value)
//     setName(e.target.value)
    
//   }
//   const onsubmit =()=>{
//     setFullName(name)
//   }

// return ( 
//   <>
//   <div>
//   <h1> Register </h1>
//   <input 
//   type="text" 
//   placeholder="Enter Your Name" 
//   onChange={inputEvent}
//     value={name}
//   />
// <br/><br/>
// <input 
//   type="text" 
//   placeholder="Enter Your Email" 
//   onChange={inputEvent}
//     value={name}
//   />
//   <br/> <br/>

//   <input 
//   type="password" 
//   placeholder="Enter Your Password" 
//   onChange={inputEvent}
//     value={name}
//   />
//  <br/> <br/>
//   <button onClick={onsubmit}> Submit </button>
//  </div>
//   </>
// )
// }

// export default App











