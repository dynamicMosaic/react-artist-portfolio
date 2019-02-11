import React from 'react';
import { NavLink } from 'react-router-dom';

const MainNav = () => (
    <nav className="main-nav">
        <NavLink exact to= "/">
            <span> Home</span>
        </NavLink>
        <NavLink exact to="/attorneys">
            <span> ATTORNEYS</span>
            </NavLink>
        <NavLink exact to="/criminal-defense">
            <span> CRIMINAL DEFENSE</span>
            </NavLink>
        <NavLink exact to="/articles">
            <span> ARTICLES</span>
            </NavLink>
        <NavLink exact to="/results">
            <span> RESULTS</span>
            </NavLink>
        <NavLink exact to="/testimonials">
            <span> TESTIMONIALS</span>
            </NavLink>
        <NavLink exact to="/blog">
            <span> BLOG</span>
            </NavLink>
        <NavLink exact to="/contact">
            <span> CONTACT</span>
            </NavLink>
        </nav>
)

export default MainNav;
