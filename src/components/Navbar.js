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
                    <a  href="/">
                        <GiElectric size={28} />
                    </a>
                </div>

                <div className="hidden md:block"> {/* Ensure this is hidden on small screens */}
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

                <div class="block md:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} /> }
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