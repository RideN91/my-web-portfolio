import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <>
            <nav className='flex mx-auto w-full max-w-[1240px] justify-end px-12 py-12'>
                
                <div className="flex-grow self-center">
                    <a href="/"><img className="h-14 w-18 transition-transform transform hover:scale-110"src="./RideN-white.png" alt="Logo"/></a>
                </div>

                <div className="hidden sm:block self-center"> {/* Ensure this is hidden on small screens */}
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

                <div class="flex sm:hidden">
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <RxCross2 size={24} /> : <GiHamburgerMenu size={24} className="self-center" /> }
                    </button>
                </div>

                <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="fixed top-24 left-0 w-full flex flex-col space-y-4 bg-gradient-primary items-center border-t">
                        <li className="text-md border-b mt-4">
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