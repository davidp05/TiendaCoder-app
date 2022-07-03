import React from "react";
import CartWidget from "../CartWidget";
import "./styles.css";

const menuItems = [
    {
        id: 1,
        label: "Categoria 1",
    },
    {
        id: 2,
        label: "Categoria 2"
    },
    {
        id: 3,
        label: "Categoria 3" 
    },
];

const NavBar = () => {
    return (
        <div className="nav">
            <span className="nav-logo">Tienda React</span>
            <div className="nav-items">
                {menuItems.map((item)=>(
                    <a href="/" className="nav-item" key={item.id}>
                        {item.label}
                    </a>
                ))}
            </div>
            <div className="cart">
                <CartWidget />
            </div>
        </div>
    );
}

export default NavBar;