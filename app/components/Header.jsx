import AltContainer from 'alt-container';
import React from 'react';
import {Nav, Navbar, FormGroup, FormControl, Button, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

export default class header extends React.Component {
	render() {
		// <NavItem eventKey={1} href="#">About</NavItem>
  		//<NavItem eventKey={2} href="#">New Acount</NavItem>
		return (
  			<Navbar>
  			  <Navbar.Header>
  			    <Navbar.Brand>
  			      <a href="#">The Sunday Sophist</a>
  			    </Navbar.Brand>
  			  </Navbar.Header>
  			   
  			</Navbar>
		);
	}
}