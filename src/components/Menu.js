import React from 'react';
import '../index.css';

const Menu = () => {
    return (

        <div className='bg-gradient-primary'>
            <ul className='sticky top-0 z-[20] mx-auto flex w-full items-end justify-end px-4 py-2 space-x-4'>
                <li>Home</li>
                <li>About Me</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}

export default Menu;