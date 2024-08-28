import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h5>Category</h5>
            <ul>
                <li><a href="#electronics">Electronics</a></li>
                <li className="sub-category">
                    <h5 href="#mobiles-accessories">Mobiles & Accessories</h5>
                    <ul>
                        <li><a href="#mobile-accessories">Mobile Accessories</a></li>
                        <li><a href="#mobile-broadband-devices">Mobile Broadband Devices</a></li>
                        <li><a href="#sim-cards">SIM Cards</a></li>
                        <li><a href="#smartphones-basic-mobiles">Smartphones & Basic Mobiles</a></li>
                        <li><a href="#smartwatches">Smartwatches</a></li>
                    </ul>
                </li>
            </ul>

            <div className="filter-section">
                <h5>Made for Amazon Brands</h5>
                <label>
                    <input type="checkbox" />
                    Made for Amazon
                </label>
            </div>

            <div className="filter-section">
                <h5>Amazon Prime</h5>
                <label>
                    <input type="checkbox" />
                    <span className="prime">prime</span>
                </label>
            </div>
            <div className="filter-section">
                <h5>Pay On Delivery</h5>
                <label>
                    <input type="checkbox" />
                    Eligible for Pay On Delivery
                </label>
            </div>

            <div className="filter-section">
                <h5>Brand</h5>
                <label>
                    <input type="checkbox" />
                    Redmi
                </label>
                <label>
                    <input type="checkbox" />
                    Ambrane
                </label>
                <label>
                    <input type="checkbox" />
                    Nokia
                </label>
                <label>
                    <input type="checkbox" />
                    iQOO
                </label>
                <label>
                    <input type="checkbox" />
                    Samsung
                </label>
                <label>
                    <input type="checkbox" />
                    Apple
                </label>
                <label>
                    <input type="checkbox" />
                    SanDisk
                </label>
            </div>


            <div className="filter-section">
                <h5>Avg. Customer Review</h5>
                <div className="rating">
                    <span>★★★★☆</span> & Up
                </div>
                <div className="rating">
                    <span>★★★☆☆</span> & Up
                </div>
                <div className="rating">
                    <span>★★☆☆☆</span> & Up
                </div>
                <div className="rating">
                    <span>★☆☆☆☆</span> & Up
                </div>
            </div>
            <div className="filter-section">
                <h5>Price</h5>
                <ul>
                    <li>Under ₹1,000</li>
                    <li>₹1,000 - ₹5,000</li>
                    <li>₹5,000 - ₹10,000</li>
                    <li>₹10,000 - ₹20,000</li>
                    <li>Over ₹20,000</li>
                </ul>
            </div>

            <div className="filter-section">
                <h5>Seller</h5>
                <label>
                    <input type="checkbox" />
                    Redmi
                </label>
                <label>
                    <input type="checkbox" />
                    Ambrane
                </label>
                <label>
                    <input type="checkbox" />
                    Nokia
                </label>
                <label>
                    <input type="checkbox" />
                    iQOO
                </label>
                <label>
                    <input type="checkbox" />
                    Samsung
                </label>
                <label>
                    <input type="checkbox" />
                    Apple
                </label>
                <label>
                    <input type="checkbox" />
                    SanDisk
                </label>
            </div>

        </div>
    );
};

export default Sidebar;
<span class="a-size-base a-color-base" dir="auto">₹5,000 - ₹10,000</span>