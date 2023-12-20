import React from 'react';


const Navbar = () => {
    return (

        <nav>
            <ul className='sticky z-[20] mx-auto flex w-full items-end justify-end px-8 py-2 space-x-4'>
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