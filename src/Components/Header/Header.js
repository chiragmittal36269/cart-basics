import React from "react";
import "./Header.css";

function Header(props) {
    return (
        <header>
            <div className="nav">
                <h1>
                    <a href="/">MyCart</a>
                </h1>
                <div className="cart-icon">
                    <i className="bx bxs-cart"></i>
                    <span>{props.totalCartItemsAmount}</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
