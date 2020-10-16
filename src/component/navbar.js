import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
  CardImg
} from 'reactstrap';
import { useHistory } from "react-router-dom";
import getCookie from './getCookie1.js';
import {
  BrowserRouter as Link
} from "react-router-dom";
import React, { useState, useEffect } from 'react';
const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState()
  const toggle = () => setIsOpen(!isOpen);
  const history = useHistory();
  const logout = () => {
    document.cookie = "usernameadmin=; path=/;"
    document.cookie = "Customer_ID=; path=/;"
    history.push("/")
    history.go(0)
  }
  useEffect(() => {
    setUser(getCookie("usernameadmin"))
  }, []);

  return (
    <Navbar color="light" light expand="md">
      <Container>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                showbook
            </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/admin">showbook</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/promotion">promotion</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavItem>
              <NavLink href="/insert">Insert</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/salesum">Salesum</NavLink>
            </NavItem>
          </Nav>
          <Nav>
            <NavItem>
              {
                getCookie("usernameadmin") === "" ?
                  <NavItem>
                    <NavLink href="/">เข้าสู่ระบบ</NavLink>
                  </NavItem> :
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      {user}
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>
                        <NavItem>
                          <NavLink onClick={logout} href="#">ออกจากระบบ</NavLink>
                        </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
              }
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar
