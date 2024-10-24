import React from 'react'
import astro3 from '../../src/assets/astro3.jpg'

const Purpose = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100">
    <div
      className="w-full max-w-full p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${astro3})` }} // Make sure 'purpose' contains the correct image URL
    >
      <h2 className="text-2xl font-bold text-white mb-4 text-center">Purpose of Astrology</h2>
      <p className="text-white mb-8 font-bold text-center">
        Astrology is a system that links human behavior and life events with the positions of celestial bodies like stars and planets. It serves several key purposes:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Self-Understanding</h3>
          <p className="text-white">Astrology helps people understand their personality, strengths, and weaknesses through their zodiac signs or birth charts.</p>
        </div>
        {/* Card 2 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Decision-Making</h3>
          <p className="text-white">It offers guidance on life choices like career, relationships, and timing for important events by analyzing planetary movements.</p>
        </div>
        {/* Card 3 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Relationship Insights</h3>
          <p className="text-white">Astrology examines compatibility between individuals, helping to understand relationship dynamics.</p>
        </div>
        {/* Card 4 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Timing Events</h3>
          <p className="text-white">Electional astrology is used to choose favorable dates for events like weddings or business ventures.</p>
        </div>
        {/* Card 5 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Spiritual Growth</h3>
          <p className="text-white">Astrology helps individuals feel connected to the universe and explore their life’s purpose.</p>
        </div>
        {/* Card 6 */}
        <div className="bg-black bg-opacity-50 rounded-xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-4xl hover:shadow-white">
          <h3 className="text-xl font-bold text-center text-white">Predictive Insight</h3>
          <p className="text-white">Astrology forecasts future trends, challenges, and opportunities using techniques like transits and progressions.</p>
        </div>

      </div>
    </div>
  </div>
  )
}

export default Purpose
