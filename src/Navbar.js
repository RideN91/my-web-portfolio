import React from 'react';


const Navbar = () => {
    return (

        <nav>
            <ul className='sticky top-0 z-[20] mx-auto flex w-full items-end justify-end px-4 py-2 space-x-4'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/aboutme">About</a>
                </li>
                <li>
                    <a href="/portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="/contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;