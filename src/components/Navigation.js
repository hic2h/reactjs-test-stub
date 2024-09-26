import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';

const NavLinkWithActiveClass = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? 'active' : ''}
    >
        {children}
    </NavLink>
);

const Navigation = () => (
    <div className="navbar">
        <NavLinkWithActiveClass to="/">Home</NavLinkWithActiveClass>
        <NavLinkWithActiveClass to="/modeler">Modeler</NavLinkWithActiveClass>
        <NavLinkWithActiveClass to="/frameworks">Frameworks</NavLinkWithActiveClass>
    </div>
);

export default Navigation;