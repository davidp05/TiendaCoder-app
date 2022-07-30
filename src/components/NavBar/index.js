import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";
import { Link } from "react-router-dom";

const menuItems = [
    {
        id: 1,
        label: "Home",
        path:'/'
    },
    {
        id: 2,
        label: "Apple",
        path:'/category/Apple'
    },
    {
        id: 3,
        label: "Samsung",
        path:'/category/Samsung'
    },
    {
        id: 4,
        label: "Xiaomi",
        path:'/category/Xiaomi' 
    },
];

const NavBar = () => {
    return (
        <div className="nav">
            <span className="nav-logo">Tienda React</span>
            <div className="nav-items">
                {menuItems.map((item)=>(
                    <Link to={item.path} className="nav-item" key={item.id}>
                        {item.label}
                    </Link>
                ))}
            </div>
            <div className="cart">
                <Link to='/cart'>
                <CartWidget />
                </Link>
            </div>
        </div>
    );
}

export default NavBar;