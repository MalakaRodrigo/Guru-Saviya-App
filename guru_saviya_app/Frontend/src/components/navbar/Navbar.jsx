import React from 'react'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './Navbarelements'
import {FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
      <>
        <Nav>
            <NavbarContainer >
            <NavLogo to='/'>Guru Saviya</NavLogo>
            <MobileIcon>
                <FaBars/>
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to="about">About</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about">Discover</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to="about">Services</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
            <NavBtnLink to="Sign Out">Sign Out</NavBtnLink>
            </NavBtn>
            </NavbarContainer >
        </Nav>
      </>

  )
}

export default Navbar;