import React, {useState} from 'react';
import { Navbar } from 'react-bootstrap';
//let logo =  require('../Assets/bluestacks.png');
//import logo from '../../public/Assets/bluestacks.png';

export default function Header() {
  return (
    <div id="top-header" className="container-fluid">
      <Navbar className="navbar" variant="dark">
        <Navbar.Brand  href="#home">
          <img
            alt="logo"
           // src={logo}
           src={'../Assets/bluestacks.png'}
            width="147px"
            height="45px"
            className="logo d-inline-block align-top"
          />
          {/* {'   '} */}
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}
