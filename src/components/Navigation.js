import React from 'react';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = () => (
    <div className="navbar">
        <NavLinkWithActiveClass to="/">Home</NavLinkWithActiveClass>
        <NavLinkWithActiveClass to="/modeler">Modeler</NavLinkWithActiveClass>
        <NavLinkWithActiveClass to="/frameworks">Frameworks</NavLinkWithActiveClass>
    </div>
);

export default Navigation;

const NavLinkWithActiveClass = ({ to, children }) => (
    <NavLink
        to={to}
        className={({ isActive }) => isActive ? 'active' : ''}
    >
        {children}
    </NavLink>
);

NavLinkWithActiveClass.prototype = {
    to: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};