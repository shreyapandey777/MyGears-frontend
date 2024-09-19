import React from 'react'
import { Link } from 'react-router-dom'
import logo from  '../assets/logo.svg'


const Navbar = () => {
    return (
        <nav className="lg:hidden bg-gray-400 p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center">
                {/* <img src="your-image-url.png" alt="Logo" className="h-10 w-10" /> */}
                <img src={logo} className='h-10 w-10' />

            </div>
            <ul className="flex space-x-4">
                <li href="#home" className="text-white "><Link to='/'>Home</Link></li>
                <li href="#about" className="text-white "><Link to='/assets'>Assets</Link></li>
                <li href="#contact" className="text-white "><Link to='/maintenance'>Maintenance</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar
