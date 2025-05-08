import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';



export const Navbar = () => {
  const[menu,setMenu] = useState("Home");
  return (
    <div className ='navbar'>
        <div className="nav-logo">
            <img src="/assets/tecnetLogo.png" alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none', color : 'inherit' ,outline: 'none'}} to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Products")}}><Link style={{textDecoration:'none' ,color : 'inherit',outline: 'none'}} to='/products'>Products</Link>{menu==="Products"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Services")}}><Link style={{textDecoration:'none' ,color : 'inherit',outline: 'none'}} to='/services'>Services</Link>{menu==="Services"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Capabilities")}}><Link style={{textDecoration:'none', color : 'inherit',outline: 'none'}} to='/capabilities'>Capabilities</Link>{menu==="Capabilities"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Contact Us")}}><Link style={{textDecoration:'none', color : 'inherit',outline: 'none'}} to='/contactUs'>Contact Us</Link>{menu==="Contact Us"?<hr/>:<></>}</li>
        </ul>
    </div>
  )
}
