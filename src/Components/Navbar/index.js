import React from 'react'
import {Nav, NavLink, NavMenu, NavBtn, NavBtnLink} from './NavbarElements';
import './Navbar.css';

const NavBar = () => 
{
    return(
        <>
            <Nav>
            <NavBtn>
                <NavBtnLink to='/'>
                    <img className="navbar-logo" src="../Images/Logo192.png" alt="" />
                </NavBtnLink>
                
            </NavBtn>

                <NavMenu>
                    <NavLink to='/portfolio' activeStyle>Portfolio</NavLink>
                    <NavLink to='/contact' activeStyle>Contact</NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;