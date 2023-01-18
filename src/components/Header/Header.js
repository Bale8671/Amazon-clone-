import React from "react";
import "../Header/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider/StateProvider";
import { auth } from "../Firebase/Firebase";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAutenticattion = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
  
      <div className="header">
        <Link to="/" className="header__clearlink">
          <img
            className="header__logo"
            src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        {/* <div className="header__LocationOnIcon">
           <LocationOnIcon />
          <div className="header__option">
            <span className="header__optionaLineOne">Hello</span>
            <span className="header__optionaLineTwo">Select your address </span>
          </div>
        </div> */}
        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" type="text" />
        </div>
        <div className="header__nav">
         
            <div onClick={handleAutenticattion} className="header__option">
              <span className="header__optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
             <Link to={!user && "/login"} className="header__clearlink"> 
             <span className="header__optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span></Link>
            </div>
          
          <Link to="/orders" className="header__clearlink">
            <div className="header__option">
              <span className="header__optionLineOne">Returns</span>
              <span className="header__optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">prime</span>
          </div>
          <Link to="/checkout" className="header__clearlink">
            <div className="header__optionBasket">
              <ShoppingCartIcon className="cart"/>
              <span className="header__optionLineTwo header_basketCounter">
                {basket.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      
  )}
  export default Header;