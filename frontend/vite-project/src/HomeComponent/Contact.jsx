import React from 'react'
import contact from '../../src/assets/astro.png'
import horoscope from '../../src/assets/horoscope.png'

const Contact = () => {
    return (
        <div class="relative w-full">
            {/* <!-- Astro image with background --> */}
            <div class="astro-bg w-full h-screen bg-cover bg-no-repeat">
                <img src={contact} alt="Astro" class="w-full h-full object-cover" />
            </div>

            {/* <!-- Contact form with transparency and positioned in the left corner --> */}
            <section id='Contact'>
                <div class="absolute top-20 left-0 p-4 max-w-xl backdrop-blur-md font-sans ml-16 border-2 border-gray-300 bg-white bg-opacity-20 rounded-3xl">
                    <h1 class="text-3xl text-gray-800 font-extrabold text-center">Contact Us</h1>
                    <form class="mt-8 space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500 border-black"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500 border-black"
                            required
                        />
                        <input
                            type="date"
                            placeholder="Date of Birth"
                            class="w-full rounded-md py-3 px-4 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        />
                        <textarea
                            placeholder="Message"
                            rows="6"
                            class="w-full rounded-md px-4 py-3 text-gray-800 bg-gray-100 focus:bg-white text-sm outline-none focus:ring-2 focus:ring-orange-500"
                            required
                        ></textarea>
                        <button
                            type="submit"
                            class="text-black bg-yellow-300 hover:bg-orange-600 tracking-wide rounded-md text-sm px-4 py-3 w-full font-extrabold text-3xl">
                            Send
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Contact
