import React,{Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faList } from '@fortawesome/free-solid-svg-icons'
import {Navbar, Nav} from "react-bootstrap"
import{
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'


class NavBarMenu extends Component{
    render(){
        return(
      
        <div>
           <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">yours view</Navbar.Brand>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faUser}/>tumhare review me dekhunga only</Link></Nav.Link>
       <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList}/>List</Link></Nav.Link><br/> 
        {
          
            localStorage.getItem('login')?
            <Nav.Link href="#link"><Link to="/logout">.</Link></Nav.Link>
       :
       <Nav.Link href="#link"><Link to="/login">.</Link></Nav.Link>
        
         }
    </Nav>
  </Navbar.Collapse>
</Navbar>
        
            </div>
        );
    }
} 
export default NavBarMenu; 