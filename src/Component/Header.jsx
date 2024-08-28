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
                </div>
                <div  style={{ display: 'flex', alignItems: 'center' }}>
                <p className="bottom-text">EN</p>
                <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey', marginLeft: '-7px'}} />     
                </div>
                </div>

                {/* accounts */}
                <div className="header-container border-white">
                    <div className="account-text">
                        <p className="top-text">Hello, sign in</p>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <p className="bottom-text">Account & Lists</p>
                            <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey', marginLeft: '-7px' }} />
                        </div>     
                    </div> 
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
                    <div className="cart-container">
                        <span className="cartItems">2</span>
                        <div className="cart"></div>
                    </div>
                    <span className="bottom-text">Cart</span>
                </div>
                                

            </div>
            <div className="navbar__footer ">
                    <div className="navbar__footer_text menu-icon border-white">
                        <div className="icon"></div>
                        <strong>All</strong>
                    </div>
                   <div className="navbar__footer_text border-white">Fresh
                   <ArrowDropDownIcon style={{ fontSize: '20px', color: 'grey'}} />     

                   </div>
                    <div className="navbar__footer_text border-white">Amazon miniTV</div>
                    <div className="navbar__footer_text border-white">Sell</div>
                    <div className="navbar__footer_text border-white">Best Seller</div>
                    <div className="navbar__footer_text border-white">Today's Deals</div>
                    <div className="navbar__footer_text border-white">Mobiles</div>
                    <div className="navbar__footer_text border-white">Customer Service</div>
                    <div className="navbar__footer_text border-white">Prime</div>
                    <div className="navbar__footer_text border-white">Customer Service</div>
                    <div className="navbar__footer_text border-white">Electronics</div>
                    <div className="navbar__footer_text border-white">Fashion</div>
                    <div className="navbar__footer_text border-white">New Releases</div>
                    <div className="navbar__footer_text border-white">Home & Kitchen</div>
                    <div className="navbar__footer_text border-white">Amazon Pay</div>
                    <div className="navbar__footer_text border-white">Computers</div>
                    <div className="navbar__footer_text border-white">Gift Ideas</div>
                </div>

    </div>    
    
  );
}

export default Header