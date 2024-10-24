import React from 'react'
import aries from '../assets/signs/aries.jpg'
import aquarius from '../assets/signs/aquarius.jpg'
import cancer from '../assets/signs/cancer.jpg'
import capricorn from '../assets/signs/capricorn.jpg'
import gemini from '../assets/signs/gemini.jpg'
import leo from '../assets/signs/leo.jpg'
import Libra from '../assets/signs/Libra.jpg'
import pisces from '../assets/signs/pisces.jpg'
import sagittarius from '../assets/signs/sagittarius.jpg'
import scorpio from '../assets/signs/scorpio.jpg'
import taurus from '../assets/signs/taurus.jpg'
import virgo from '../assets/signs/virgo.jpg'
import sun from '../assets/sun.jpg'

const Horoscope = () => {
  const astro = [
    { src: pisces },
    { src: aries },
    { src: taurus },
    { src: gemini },
    { src: aquarius },
    { src: cancer },
    { src: capricorn },
    { src: leo },
    { src: sagittarius },
    { src: scorpio },
    { src: Libra },
    { src: virgo },
  ];
  return (
    <div className={`bg-red-200 w-full py-14`} style={{ backgroundImage: `url(${sun})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', }}>
      <h1 className="text-4xl font-bold text-center ">Know Your Horoscope</h1>
      <section className="flex-1 grid grid-cols-4 gap-1 p-2 mt-10 w-[530px] mx-auto">
        {/* First row with 4 images */}
        <div className="col-span-4 flex justify-around">
          {astro.slice(0, 4).map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Second row with 2 images and empty space */}
        <div className="col-span-4 flex justify-between">
          {astro.slice(4, 6).map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Third row with 2 images and empty space */}
        <div className="col-span-4 flex justify-between">
          {astro.slice(6, 8).map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Fourth row with 4 images */}
        <div className="col-span-4 flex justify-around">
          {astro.slice(8, 12).map((tech, index) => (
            <div
              key={index}
              data-aos="zoom-in"
              data-aos-duration="2000"
              className="p-4 rounded-3xl bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(145deg, #f5f5f5, #ffffff)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              }}
            >
              <img src={tech.src} alt={tech.alt} className="h-24 w-24 rounded-md" />
            </div>
          ))}
        </div>

        {/* Information about zodiac signs */}

      </section>
    </div>
  )
}

export default Horoscope
