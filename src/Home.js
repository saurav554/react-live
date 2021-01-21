import React from "react"
import web from "../src/Images/image2.jpg"
import {NavLink} from "react-router-dom"
import Common from "./Common"

const Home=() => {
    return(
        <>
 <Common name="Grow Your business with" 
 imgsrc={web}
 visit="/service"
 btname="get started"/>

     
  </>

    )
} 
export default Home