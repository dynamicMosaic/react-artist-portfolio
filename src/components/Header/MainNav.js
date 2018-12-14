import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
    <nav className="main-nav">
        <NavLink exact to= "/">
            <span> Home</span>
        </NavLink>
        <NavLink exact to="/portfolio">
            <span> Portfolio</span>
            </NavLink>
        </nav>
)

export default MainNav;
