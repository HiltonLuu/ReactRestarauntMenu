import React, { useState } from 'react';
import { MenuItems } from "./Menuitems";
import { Button } from "../Button";
import './Navbar.css';
import logo from '../../photos/cropped-ke-logo-white.png';

const Navbar = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <nav className="NavbarItems">
            
            {/*<h1 className="navbar-logo">React <i className="fab fa-react"></i></h1>*/}
            {<img src={logo} className="ke-logo" />}

            <div className="menu-icon" onClick={handleClick}>
                <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <Button className="nav-button">Order Online</Button>
        </nav>
    )
};


export default Navbar;