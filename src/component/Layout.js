import * as React from "react"
import Navbar from "./navbar.js"
export default function Layout({children}){
  return(
    <div>
      <Navbar/>
    {children}
    </div>
  )
}
