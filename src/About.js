import React from "react"
import web from "../src/Images/web.jpg"
import {NavLink} from "react-router-dom"
import Common from "./Common"
const About=() => {
    return(
        <>
 <Common name="welcome to About page" 
 imgsrc={web}
 visit="/contact"
 btname="Contact Now"
 /> 
  </>

    )
} 
export default About