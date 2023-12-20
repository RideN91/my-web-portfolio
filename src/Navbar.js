import React from 'react';


const Navbar = () => {
    return (

        <nav>
            <ul className='sticky z-[20] mx-auto flex w-full items-end justify-end px-6 py-16 space-x-8 md:justify-end sm:justify-center'>
                <li>
                    <a className="text-xl" href="/">Home</a>
                </li>
                <li>
                    <a className="text-xl" href="/about-me">About</a>
                </li>
                <li>
                    <a className="text-xl" href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a className="text-xl" href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;