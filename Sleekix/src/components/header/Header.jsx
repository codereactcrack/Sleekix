import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {

  const navbar = [
      { name:'HOME',path :'/home'},
      { name:'ABOUT',path :'/about-us'},
      { name:'PRODUCTS',path :'/products'},
      { name:'SUPPORT',path :'/support'},
      { name:'LOGIN',path :'/login'},
  ]
  return (
    <div>
      <ul>
        {navbar.map((item)=>{
          return(
           <NavLink to={item.path} key={item.name}> <li >{item.name}</li> </NavLink> 
          )
        })}
      </ul>
    </div>
  )
}

export default Header