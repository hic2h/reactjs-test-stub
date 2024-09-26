import React from 'react';
import './Navbar.css';
import { NavLink } from 'react-router-dom';

const NavLinkWithActive = ({ to, children }) => (
    <NavLink
        to={to}
        exact
        activeClassName="active"
    >
        {children}
    </NavLink>
);

const Navbar = () => (
    <div className="navbar">
        <NavLinkWithActive to="/">Home</NavLinkWithActive>
        <NavLinkWithActive to="/modeler">Modeler</NavLinkWithActive>
        <NavLinkWithActive to="/frameworks">Frameworks</NavLinkWithActive>
    </div>
);

export default Navbar;