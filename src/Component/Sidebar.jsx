import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h3>Category</h3>
            <ul>
                <li><a href="#electronics">Electronics</a></li>
                <li className="sub-category">
                    <a href="#mobiles-accessories">Mobiles & Accessories</a>
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
                <h4>Made for Amazon Brands</h4>
                <label>
                    <input type="checkbox" />
                    Made for Amazon
                </label>
            </div>

            <div className="filter-section">
                <h4>Amazon Prime</h4>
                <label>
                    <input type="checkbox" />
                    <span className="prime">prime</span>
                </label>
            </div>

            <div className="filter-section">
                <h4>Delivery Day</h4>
                <label>
                    <input type="checkbox" />
                    Get It Today
                </label>
                <label>
                    <input type="checkbox" />
                    Get It by Tomorrow
                </label>
            </div>

            <div className="filter-section">
                <h4>Pay On Delivery</h4>
                <label>
                    <input type="checkbox" />
                    Eligible for Pay On Delivery
                </label>
            </div>

            <div className="filter-section">
                <h4>Brand</h4>
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
                <h4>Avg. Customer Review</h4>
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
                <h4>Price</h4>
                <ul>
                    <li>Under ₹1,000</li>
                    <li>₹1,000 - ₹5,000</li>
                    <li>₹5,000 - ₹10,000</li>
                    <li>₹10,000 - ₹20,000</li>
                    <li>Over ₹20,000</li>
                </ul>
            </div>

            <div className="filter-section">
                <h4>Seller</h4>
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