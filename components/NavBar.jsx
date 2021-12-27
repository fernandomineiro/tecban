import React, { useState } from 'react';
import {
  Collapse,
  Container,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { useUser } from '@auth0/nextjs-auth0';

import RouterLink from './RouterLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, isLoading } = useUser();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav-container" data-testid="navbar">
      <Navbar color="light" light expand="md">
        <Container>
          <NavbarBrand >
          <img
          src="/logo-colorido.png" 
          width="40"
          alt="..."
          ></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} data-testid="navbar-toggle" />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar data-testid="navbar-items">
              <NavItem>
                <RouterLink href="/" className="nav-link" testId="navbar-home">
                  Home
                </RouterLink>
              </NavItem>
              {user && (
                <>
                  <NavItem>
                    <RouterLink href="/addBank" className="nav-link" testId="navbar-csr">
                      Adicionar Banco
                    </RouterLink>
                  </NavItem>
                  <NavItem>
                    <RouterLink href="/accounts" className="nav-link" testId="navbar-ssr">
                      Contas
                    </RouterLink>
                  </NavItem>
                  <NavItem>
                    <RouterLink href="/initPayment" className="nav-link" testId="navbar-external">
                      Iniciar Pagamento
                    </RouterLink>
                  </NavItem>
                </>
              )}
            </Nav>
            <Nav className="d-none d-md-block" navbar>
              {!isLoading && !user && (
                <NavItem id="qsLoginBtn">
                  <RouterLink
                    href="/api/auth/login"
                    className="btn btn-secondary btn-margin"
                    tabIndex={0}
                    testId="navbar-login-desktop">
                    Entrar
                  </RouterLink>
                </NavItem>
              )}
              {user && (
                <UncontrolledDropdown nav inNavbar data-testid="navbar-menu-desktop">
                  <DropdownToggle nav caret id="profileDropDown">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile rounded-circle"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-desktop"
                    />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem header data-testid="navbar-user-desktop">
                      {user.name}
                    </DropdownItem>
                    <DropdownItem className="dropdown-profile" tag="span">
                      <RouterLink href="/profile" icon="user" testId="navbar-profile-desktop">
                        Cadastro
                      </RouterLink>
                    </DropdownItem>
                    <DropdownItem id="qsLogoutBtn">
                      <RouterLink href="/api/auth/logout" icon="power-off" testId="navbar-logout-desktop">
                        Sair
                      </RouterLink>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>
            {!isLoading && !user && (
              <Nav className="d-md-none" navbar>
                <RouterLink
                  href="/api/auth/login"
                  className="btn btn-secondary btn-block"
                  tabIndex={0}
                  testId="navbar-login-mobile">
                  Entrar
                </RouterLink>
              </Nav>
            )}
            {user && (
              <Nav
                id="nav-mobile"
                className="d-md-none justify-content-between"
                navbar
                data-testid="navbar-menu-mobile">
                <NavItem>
                  <span className="user-info">
                    <img
                      src={user.picture}
                      alt="Profile"
                      className="nav-user-profile d-inline-block rounded-circle mr-3"
                      width="50"
                      height="50"
                      decode="async"
                      data-testid="navbar-picture-mobile"
                    />
                    <h6 className="d-inline-block" data-testid="navbar-user-mobile">
                      {user.name}
                    </h6>
                  </span>
                </NavItem>
                <NavItem>
                  <RouterLink href="/profile" icon="user" testId="navbar-profile-mobile">
                    Profile
                  </RouterLink>
                </NavItem>
                <NavItem id="qsLogoutBtn">
                  <RouterLink
                    href="/api/auth/logout"
                    className="btn btn-link p-0"
                    icon="power-off"
                    testId="navbar-logout-mobile">
                    Log out
                  </RouterLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
