import React from "react";
import "./Header.css";
import indFlag from '../assets/images/indFlag.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';

const Header = () =>  {  
  return (
    <div className="header">
            <div className="container container-header">
                {/* logo */}
                <div className="header-container border-white">
                    <div className="logo"></div><span className="dotIn">.in</span>
                </div>
                {/* location */}
                <div className="header-container border-white">
                    <div className="location"></div>
                    <div className="location-text">
                    <p className="top-text"> Delivering to Thiruvana... 695013</p>
                    <p className="bottom-text">Update location</p>
                    </div>
                    
                </div>
                {/* search */}
                <div className="search-container ">
                    <select className="search-select">
                        <option>All</option>
                    </select>
                    <input type="text" className="search-input" />
                    <div className="search-icon"></div>
                </div>
                
                 {/* language */}
                <div className="language-container border-white">
                <div className="langFlag">
                <img src={indFlag} />
                <p>EN</p>
                <ArrowDropDownIcon />
                </div>
                </div>

                {/* accounts */}
                <div className="header-container border-white">
                    <div className="account-text">
                        <p className="top-text">Hello, sign in </p>
                        <p className="bottom-text">Account & Lists</p>
                    </div> 
                <ArrowDropDownIcon />
                </div>

                {/* return & orders */}
                <div className="header-container border-white">
                    <div className="account-text">
                        <p className="top-text">Returns </p>
                        <p className="bottom-text">& Orders</p>
                    </div> 
                </div>

                {/* cart */}
                <div className="header-container border-white">
                    <div className="cart"></div>  
                    <span className="bottom-text">Cart</span>
     
                </div>
                

            </div>
    </div>
  );
}

export default Header