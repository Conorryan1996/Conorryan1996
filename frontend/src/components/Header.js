import React from 'react'
import { Route } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {logout} from '../actions/userActions'
import { useNavigate } from 'react-router-dom'
import Searchbox from './Searchbox'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin
  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
    <header>
     <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to='/'>
    <Navbar.Brand>Ireland PC Parts </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
   < Searchbox />
      <Nav className='ms-auto'>
        <LinkContainer to='/cart'>
        <Nav.Link><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        </LinkContainer>
        {userInfo ? (
            <NavDropdown title={userInfo.name} id ='username'>  
              <LinkContainer to='/profile'>
                <NavDropdown.Item> Profile</NavDropdown.Item>
              </LinkContainer>
              <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
            </NavDropdown>
        ) : (<LinkContainer to='/login'>

        <Nav.Link><i className = 'fas fa-user'></i>Sign in</Nav.Link>
        </LinkContainer> )}
        {userInfo && userInfo.isAdmin  && (
            <NavDropdown title='Admin' id ='adminmenu'>
            <LinkContainer to='/admin/userlist'>
              <NavDropdown.Item> Users</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/productlist'>
              <NavDropdown.Item> Products</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to='/admin/orderlist'>
              <NavDropdown.Item> Orders</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>

        )}

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header
