import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <React.Fragment>
        <header>
            <div className="container">
                <NavLink to='/glugpace/' id="logo">GLUG PACE</NavLink>
                <ul className="navbar-links">
                    <li className="nav-link"><NavLink to='/glugpace/events'>Events</NavLink></li>
                    <li className="nav-link"><NavLink to='/glugpace/blog'>Blog</NavLink></li>
                    <li className="nav-link"><NavLink to='/glugpace/team'>Team</NavLink></li>
                </ul>
            </div>
        </header>
    </React.Fragment>
  )
}

export default Navbar;