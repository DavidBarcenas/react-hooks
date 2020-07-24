import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-dark">
        <div className="navbar-nav">
          
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink exact activeClassName="active" to="/about">About</NavLink>
            <NavLink exact activeClassName="active" to="/login">Login</NavLink>
          
        </div>
    </nav>
  )
}
