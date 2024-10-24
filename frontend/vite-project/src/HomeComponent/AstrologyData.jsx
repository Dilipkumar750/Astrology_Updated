import React, { useState } from 'react'
import purpose from '../../src/assets/purpose.png'
import sivan from '../../src/assets/sivan.png'
import detail from '../../src/assets/detail.png'
import astro3 from '../../src/assets/astro3.jpg'
import ganesha from '../../src/assets/ganesha.png'

const AstrologyData = () => {
  const [astroInput, setAstroInput] = useState({
    day: 2,
    month: 4,
    year: 2003,
    hour: 4,
    min: 30,
    lat: 25.7464,
    lon: 82.6837,
    tzone: 5.5
  });

  const [astroData, setAstroData] = useState(null);

  const handleChange = (e) => {
    setAstroInput({
      ...astroInput,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/astro_details', astroInput);
      setAstroData(response.data);
    } catch (error) {
      console.error("Error fetching astrology data", error);
    }
  };
  return (
    <div className='w-full'>
      <div className='flex'
        style={{
          backgroundImage: `url(${astro3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'cover',
          backgroundRepeat: 'no-repeat',
          minHeight: '40vh',

        }}
      >
        <img src={ganesha} alt="" className='w-56 h-56 mt-20' />
        <form onSubmit={handleSubmit} className="bg- p-6 rounded-lg shadow-lg mx-auto w-4/5">
          <h2 className="text-2xl font-bold text-center mb-4 text-white">Astrology Details</h2>

          <div className="grid grid-cols-4 gap-4">
            <div className="mb-4">
              <label htmlFor="day" className="block text-sm font-medium text-gray-100">Day:</label>
              <input
                type="number"
                name="day"
                value={astroInput.day}
                onChange={handleChange}
                placeholder="Day"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                min="1"
                max="31"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="month" className="block text-sm font-medium text-gray-100">Month:</label>
              <input
                type="number"
                name="month"
                value={astroInput.month}
                onChange={handleChange}
                placeholder="Month"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                min="1"
                max="12"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="year" className="block text-sm font-medium text-gray-100">Year:</label>
              <input
                type="number"
                name="year"
                value={astroInput.year}
                onChange={handleChange}
                placeholder="Year"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                min="1901"
                max="2050"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="hour" className="block text-sm font-medium text-gray-100">Hour:</label>
              <input
                type="number"
                name="hour"
                value={astroInput.hour}
                onChange={handleChange}
                placeholder="Hour"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                min="0"
                max="23"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="min" className="block text-sm font-medium text-gray-100">Minute:</label>
              <input
                type="number"
                name="min"
                value={astroInput.min}
                onChange={handleChange}
                placeholder="Minute"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
                min="0"
                max="59"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lat" className="block text-sm font-medium text-gray-100">Latitude:</label>
              <input
                type="number"
                name="lat"
                value={astroInput.lat}
                onChange={handleChange}
                placeholder="Latitude"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="lon" className="block text-sm font-medium text-gray-100">Longitude:</label>
              <input
                type="number"
                name="lon"
                value={astroInput.lon}
                onChange={handleChange}
                placeholder="Longitude"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="tzone" className="block text-sm font-medium text-gray-100">Time Zone:</label>
              <input
                type="number"
                name="tzone"
                value={astroInput.tzone}
                onChange={handleChange}
                placeholder="Time Zone"
                className="mt-1 p-2 border border-gray-300 rounded w-full focus:outline-none focus:ring focus:ring-indigo-200"
              />
            </div>
          </div>

          <div className="mt-6">
            <button className="mt-4 w-full h-12 rounded-full flex justify-center items-center gap-3 bg-gray-500 hover:bg-gradient-to-t hover:from-purple-500 hover:to-indigo-600 hover:shadow-lg transition-all duration-300">
              <svg height="24" width="24" fill="#AAAAAA" viewBox="0 0 24 24" className="transition-all duration-300 ease-in-out">
                <path d="M10,21.236,6.755,14.745.264,11.5,6.755,8.255,10,1.764l3.245,6.491L19.736,11.5l-6.491,3.245ZM18,21l1.5,3L21,21l3-1.5L21,18l-1.5-3L18,18l-3,1.5ZM19.333,4.667,20.5,7l1.167-2.333L24,3.5,21.667,2.333,20.5,0,19.333,2.333,17,3.5Z"></path>
              </svg>
              <span className="font-semibold text-gray-100 text-base transition-all">Generate</span>
            </button>
          </div>
        </form>
      </div>
      <div className="flex justify-between bg-gray-200 w-full py-10">
        <div
          style={{
            backgroundImage: `url(${detail})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            // backgroundColor: 'skyblue'
            // opacity: '60%'
            // filter: 'blur(5%)',
            // opacity: '0.5', // To give the blurred effect some transparency
          }}
          className="p-6 rounded-lg shadow-lg max-w-5xl text-left ml-10 text-white font-bold"
        >
          <div className="mb-4">
            <h3 className="text-4xl font-bold text-center mt-0">Astrology Data</h3>
          </div>

          <div className="grid grid-cols-5 gap-4">
            <div className="border p-4 rounded transition-all duration-300">
              <label className="font-semibold">Ascendant:</label>
              <p>{astroData?.ascendant || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Ascendant Lord:</label>
              <p>{astroData?.ascendant_lord || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Varna:</label>
              <p>{astroData?.Varna || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Sign:</label>
              <p>{astroData?.sign || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Yoni:</label>
              <p>{astroData?.Yoni || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Nadi:</label>
              <p>{astroData?.Nadi || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Sign Lord:</label>
              <p>{astroData?.SignLord || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Nakshatra:</label>
              <p>{astroData?.Naksahtra || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Charan:</label>
              <p>{astroData?.Charan || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Yog:</label>
              <p>{astroData?.Yog || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Karan:</label>
              <p>{astroData?.Karan || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Tithi:</label>
              <p>{astroData?.Tithi || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Yunja:</label>
              <p>{astroData?.yunja || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Tatva:</label>
              <p>{astroData?.tatva || " "}</p>
            </div>

            <div className="border p-4 rounded">
              <label className="font-semibold">Paya:</label>
              <p>{astroData?.paya || " "}</p>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <img src={sivan} alt="Sivan Image" className="max-h-96 mr-16" />
      </div>
    </div>
  )
}

export default AstrologyData
