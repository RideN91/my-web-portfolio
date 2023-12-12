import React, { useState } from 'react';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (

        <div className={`menu ${isOpen ? 'open' : ''}`}>
            <button onClick={toggleMenu}>Toggle Menu</button>

            <ul>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>

        </div>
    )
}

export default Menu;