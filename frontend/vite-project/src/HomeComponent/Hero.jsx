import React from 'react'
import zodic from '../../src/assets/astro4.jpg';
import Navbar from '../Components/Navbar';
const Hero = () => {
    return (
        <div
            className="h-[600px] rounded-lg shadow-lg w-full"
            style={{
                backgroundImage: `url(${zodic})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100vw',
                height: '100vh',
            }}
        >
            <Navbar />
            {/* Centered h1 text */}
            <h1
                className="text-black text-center text-2xl lg:text-3xl font-bold p-4 mb-2 bg-gray-100 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-60"
                style={{
                    borderRadius: '10px',
                }}
            >
                “Anyone can be a millionaire, but to become <br /> a billionaire you need an astrologer.”
            </h1>

            <div className="flex flex-col justify-center items-center lg:items-start lg:ml-24 h-full px-4">
                <h3 className="text-white text-center lg:text-left text-3xl lg:text-4xl font-bold mb-4">
                    "Unlock the Mysteries of the Stars"
                </h3>
                <h6 className="text-white text-center lg:text-left text-lg lg:text-xl font-bold mb-4">
                    "Discover your destiny with personalized astrology readings and insights."
                </h6>

                <button className="mt-4 px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-600 transition duration-300">
                    Get Started Today
                </button>
            </div>
        </div>
    )
}

export default Hero
