import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
        <header>
            <div className="container">
                <NavLink to='/' id="logo">GLUG PACE</NavLink>
                <ul>
                    <li><NavLink to='/events'>Events</NavLink></li>
                    <li><NavLink to='/blog'>Blog</NavLink></li>
                    <li><NavLink to='/team'>Team</NavLink></li>
                </ul>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Navbar;