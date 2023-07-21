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
                    <img className="navbar-logo" src="../Images/Logo512Dark.png" alt="" />
                </NavBtnLink>
                
            </NavBtn>

                <NavMenu>
                    <NavLink to='/portfolio' activestyle="true">Portfolio</NavLink> {" "}
                    {/* <NavLink to='/contact' activestyle="true">Contact</NavLink> */}
                </NavMenu>
            </Nav>
        </>
    );
};

export default NavBar;