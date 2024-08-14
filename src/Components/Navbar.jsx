import React from 'react'
import { Link } from 'react-router-dom'
import { SiWistia } from "react-icons/si";
import { MdOutlineFastfood } from "react-icons/md";

const Navbar = () => {
const handleClick = () => {
  
}

  return (
    <div><nav className="navbar position-fixed navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
       <MdOutlineFastfood/> Hello Food
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/viewrecipe">
              View Recipe
            </Link>
          </li>
          
          
          
          
          
        </ul>
        
            <Link className="nav-link" style={{style:"none"}} to="/wishlist"  onClick={handleClick}>
             <SiWistia/> Wish List<sup>0</sup>
            </Link>
          
      </div>
    </div>
  </nav>
  </div>
  )
}

export default Navbar