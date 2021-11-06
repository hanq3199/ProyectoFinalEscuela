import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,

} from 'reactstrap'

import useAuth from "../auth/useAuth";



const NavBar = (props) => {

  const auth = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const handleSalir = () => {
    auth.logout();
  }


  return (<div>
    <Navbar
      color="dark"
      dark
      expand="md"
      light
    >
      <NavbarBrand href="/">
        Escuela.org
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse navbar isOpen={isOpen}>
        <Nav
          className="ms-auto"
          navbar
        >

          <UncontrolledDropdown
            inNavbar
            nav
          >
            <DropdownToggle
              caret
              nav
            >
             {auth.user.nombre}
             
            </DropdownToggle>
            <DropdownMenu end>
              <DropdownItem>
                <NavLink className="text-dark navlink" to="/Perfil">
                  Perfil
                </NavLink>
              </DropdownItem>
              <DropdownItem>
                
                  <NavLink className="text-dark navlink" to="/Cursos">
                    Cursos
                  </NavLink>
                
              </DropdownItem>
              <DropdownItem onClick={handleSalir}>
                Salir
              </DropdownItem>

            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
  )
}


export default NavBar;

