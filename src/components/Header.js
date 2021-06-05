import React, { useContext, useState } from 'react'
import { FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './css/Header.css'
import { DataContext } from './DataProvider';

function Header() {
     const value = useContext(DataContext);
     const [cart] = value.cart;

    const [toggle, setToggle] = useState(false);

    const menuToggle = () => {
        setToggle(!toggle)
    }

    return (
        <header>
            <div className="menu" onClick={menuToggle}>
                <i className="navIcon"><FaBars/></i>
            </div>
            <div className="logo">
                <h1><Link to="/">Shopp</Link></h1>
            </div>
            <nav>
                <ul className={toggle ? "toggle" : ""}>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li className="close" onClick={menuToggle}>
                        <i className="closeIcon"><FaTimes/></i>
                    </li>
                </ul>
            
            <div className="nav-cart">
                <span>{cart.length}</span>
                <Link className="cartIconLink" to="/cart">
                    <i className="cartIcon"><FaShoppingCart/></i>
                </Link>
            </div>
            </nav>
        </header>
    )
}

export default Header
