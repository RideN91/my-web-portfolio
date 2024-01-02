import React, { useState } from 'react';
import { GiHamburgerMenu, GiElectric } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className='mx-auto w-full max-w-[1240px] justify-end px-12 py-12'>
                <div className="flex-grow">
                    <a  className="flex" href="/">
                        <GiElectric size={24} />
                        WEB DEV.
                    </a>
                </div>

                <div className="hidden sm:block"> {/* Ensure this is hidden on small screens */}
                    <ul className="flex space-x-8">
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

                <div class="block sm:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} /> }
                    </button>
                </div>

                <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="fixed top-24 left-12 h-42 w-64 flex-bottom space-y-4 border-r">
                        <li className="text-md border-b">
                            <a href="/">Home</a>
                        </li>
                        <li className="text-md border-b">
                            <a href="/about-me">About</a>
                        </li>
                        <li className="text-md border-b">
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li className="text-md border-b">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;