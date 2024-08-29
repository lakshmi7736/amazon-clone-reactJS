import React from "react";
import "./Header.css";
import indFlag from '../assets/images/indFlag.png'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDownOutlined';
import { Link } from "react-router-dom";

const Header = () =>  {  
  return (
    <div className="header">
            <div className="contain container-header">
                {/* logo */}
                <div className="header-container border-hvr">
                    <div className="logo"></div><span className="dotIn">.in</span>
                </div>
                {/* location */}
                <div className="header-container border-hvr">
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
                <div className="language-container border-hvr">
                <div className="langFlag">
                <img src={indFlag} />
                </div>
                <div  style={{ display: 'flex', alignItems: 'center' }}>
                <p className="bottom-text">EN</p>
                <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey', marginLeft: '-7px'}} />     
                </div>
                </div>

                {/* accounts */}
                <div className="header-container border-hvr">
                    <div className="account-text">
                        <p className="top-text">Hello, sign in</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className="bottom-text">Account & Lists</p>
                            <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey', marginLeft: '-7px' }} />
                        </div>     
                    </div> 
                </div>
        

                {/* return & orders */}
                <div className="header-container border-hvr">
                    <div className="account-text">
                        <p className="top-text">Returns </p>
                        <p className="bottom-text">& Orders</p>
                    </div> 
                </div>

                {/* cart */}
                <div className="header-container border-hvr">
                    <div className="cart-container">
                        <span className="cartItems">2</span>
                        <div className="cart"></div>
                    </div>
                    <span className="bottom-text">Cart</span>
                </div>
                                

            </div>
            <div className="navbar__footer ">
                    <div className="navbar__footer_text menu-icon border-hvr">
                        <div className="icon"></div>
                        <strong>All</strong>
                    </div>
                   <div className="navbar__footer_text border-hvr">Fresh
                   <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey'}} />     

                   </div>
                    <div className="navbar__footer_text border-hvr">Amazon miniTV</div>
                    <div className="navbar__footer_text border-hvr">
                        <Link to="/signin" style={{ textDecoration: 'none', color: 'inherit' }}>Sell</Link>
                    </div>                   
                    <div className="navbar__footer_text border-hvr">Best Seller</div>
                    <div className="navbar__footer_text border-hvr">Today's Deals</div>
                    <div className="navbar__footer_text border-hvr">Mobiles</div>
                    <div className="navbar__footer_text border-hvr">Customer Service</div>
                    <div className="navbar__footer_text border-hvr">Prime</div>
                    <div className="navbar__footer_text border-hvr">Customer Service</div>
                    <div className="navbar__footer_text border-hvr">Electronics</div>
                    <div className="navbar__footer_text border-hvr">Fashion</div>
                    <div className="navbar__footer_text border-hvr">New Releases</div>
                    <div className="navbar__footer_text border-hvr">Home & Kitchen</div>
                    <div className="navbar__footer_text border-hvr">Amazon Pay</div>
                    <div className="navbar__footer_text border-hvr">Computers</div>
                    <div className="navbar__footer_text border-hvr">Gift Ideas</div>
                </div>

    </div>    
    
  );
}

export default Header