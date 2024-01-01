import React, { useState } from 'react';
import { GiHamburgerMenu, GiElectric } from "react-icons/gi";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className='mx-auto flex w-full max-w-[1240px] justify-end px-6 py-16 space-x-8 md:justify-end'>
                <div className="flex-grow">
                    <GiElectric size={32} />
                </div>

                <div className="hidden md:block"> {/* Ensure this is hidden on small screens */}
                    <ul className="flex">
                        <li>
                            <a className="text-md text-gray-600 hover:text-gray-800" href="/">Home</a>
                        </li>
                        <li>
                            <a className="text-md text-gray-600 hover:text-gray-800" href="/about-me">About</a>
                        </li>
                        <li>
                            <a className="text-md text-gray-600 hover:text-gray-800" href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="text-md text-gray-600 hover:text-gray-800" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>

                <div class="block md:hidden">
                    <button onClick={toggleMenu}>
                        <GiHamburgerMenu size={24} />
                    </button>
                </div>

                <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="flex-bottom">
                        <li>
                            <a className="text-md" href="/">Home</a>
                        </li>
                        <li>
                            <a className="text-md" href="/about-me">About</a>
                        </li>
                        <li>
                            <a className="text-md" href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a className="text-md" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;