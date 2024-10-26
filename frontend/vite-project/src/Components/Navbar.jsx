import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="bg-transparent p-4">
            <ul className="flex justify-end lg:space-x-12 space-x-6 ml-2 text-black font-bold text-xl">
                <li className="hover:text-gray-300">
                    <a href="/">
                        <span className="rounded-lg p-1">Home</span>
                    </a>
                </li>
                {/* <li className="hover:text-gray-300">
                        <a href="#Astrology">
                            <span className="rounded-lg p-1">Astrology</span>
                        </a>
                    </li> */}
                {/* <li className="hover:text-gray-300">
                        <a href="#Horoscope">
                            <span className="rounded-lg p-1">Horoscope</span>
                        </a>
                    </li> */}
                <li className="hover:text-gray-300">
                    <Link to={'/Parigara'}>
                        <span className="rounded-lg p-1">Parigara</span>
                    </Link>
                </li>
                <li className="hover:text-gray-300">
                    <Link to={'/shlokas'}>
                        <span className="rounded-lg p-1">Shlokas</span>
                    </Link>
                </li>

                <li className="hover:text-gray-300">
                    <a href="#Contact">
                        <span className="rounded-lg p-1">Contact Us</span>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
