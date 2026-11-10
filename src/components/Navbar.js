import React, { useState } from "react";
import SearchComponent from './Searchcomponents';
import logo from '../assests/logo.png';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FaShoppingCart, FaRegHeart, FaHeart } from "react-icons/fa";
import { IoPerson } from 'react-icons/io5';



const Navbar = ({ wishlist, searchProduct,
  productSearchFunction,
  clearSearch }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const closeAccountMenu = (e) => {
  e.currentTarget.closest("details").open = false;
  closeMenu();
};
  const getNavLinksClass = () => {
    if (menuOpen) {
      return "nav-links active";
    } else {
      return "nav-links";
    }
  };
  const getWishlistHeartClass = () => {
    if (wishlist.length > 0) {
      return "wishlist-heart clicked";
    }

    return "wishlist-heart";
  };
  const getWishlistIcon = () => {
    if (wishlist.length > 0) {
      return <FaHeart />;
    }

    return <FaRegHeart />;
  };
  return (
    <nav className="navbar ">
      <div className="container navbar-container">
        <Link to="/" className="navbar-brand" onClick={closeMenu}><img src={logo} alt="logo" height='40' className="logo-img" />
          <span className="logo-font ">Crochic</span>
        </Link>

        <button className="menu-btn" onClick={toggleMenu}>
          ☰
        </button>



        <div className={getNavLinksClass()}>
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/shop" onClick={closeMenu}>Shop</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <Link to="/faq" onClick={closeMenu}>FAQ</Link>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
          <Link to="/wishlist" className="wishlist-nav-icon" onClick={closeMenu}>
            <span className={getWishlistHeartClass()}>{getWishlistIcon()} </span>
            {wishlist.length > 0 && (
              <span className="wishlist-badge">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/cart" className="nav-link" onClick={closeMenu}><FaShoppingCart /></Link>
          <details className="account-dropdown">
            <summary aria-label="Account menu">
              <IoPerson />
            </summary>

            <div className="account-dropdown-menu">
              <Link to="/login" onClick={closeAccountMenu}>
                Login
              </Link>

              <Link to="/signup" onClick={closeAccountMenu}>
                Sign Up
              </Link>

              <Link to="/personalinfo" onClick={closeAccountMenu}>
                My Profile
              </Link>
            </div>
          </details><div className="search-wrapper">
            <SearchComponent
              searchProduct={searchProduct}
              productSearchFunction={productSearchFunction}
              clearSearch={clearSearch}
            />
          </div>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;