

import { useNavigate, NavLink } from "react-router-dom";
import "./NavBar.scss" ;
import { GrCart } from "react-icons/gr";
import { FaRegUser } from "react-icons/fa";
import { useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../CartContext';

export default function NavBar() {

  const navigate = useNavigate();
  const handleCartClick = () => {
    navigate("/Cart"); 
  }
  const { cartItems } = useCart();


  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  

  return (

    <div >
      <nav className="navbar navbar-expand-lg navbar-light  fixed-top">
        <div className="container">
          
             <NavLink className="navbar-brand" to="/">
            <img src="../../../public/nav-logo.PNG" alt="" width="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
         
         
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/Makeup">
                  MakeUp
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/SkinCare">
                SkinCare
                </NavLink>
              </li>
              <li className="nav-item">
              </li>
            </ul>
            <div className="cart d-flex gap-4">   

            <DropdownButton show={showDropdown}  variant="light" id="user-dropdown" title={<FaRegUser />} onToggle={toggleDropdown}>
      <Dropdown.Item as={Link} to="/login">LogIn</Dropdown.Item>
      <Dropdown.Item as={Link} to="/register">Register</Dropdown.Item>
      <Dropdown.Item as={Link} to="/Profile"> My Profile</Dropdown.Item>
    </DropdownButton>
    <div className="icon position-relative" onClick={handleCartClick} >
                <GrCart />
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger"  >
                {cartItems.length}
                </span>
              </div>     
            </div>
            
          </div>
        </div>
      </nav>
    </div>
  );
}


