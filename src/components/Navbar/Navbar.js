import React, {useState} from "react";
import {MenuList} from './MenuList';
import './Navbar.css';
const Navbar = () => {
    const [clicked, setClicked] = useState(false);
    const menuList = MenuList.map(({url, title}, index) => {
        return(
            <li key={index}>
                <a href="{url}">{title}</a>
            </li>
        );
    });
    return (
        <nav>
            <div className="logo">
                Your<font>App</font>
            </div>
            <ul className="menu-list">{menuList}</ul>
        </nav>
    );
}

export default Navbar;