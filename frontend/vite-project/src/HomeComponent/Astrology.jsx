import React from 'react'
import horoscope from '../../src/assets/horoscope.png'

const Astrology = () => {
  return (
    <section id='Astrology'>
          <div className='flex flex-wrap pt-10 bg-gray-200'>
            {/* First section with 50% width */}
            <div className='grid grid-cols-9 gap-'>
              {/* Text Section */}
              <div className=' col-span-5 col-start-2'>
                <h1 className='text-3xl font-bold mb-4'>Why Astrology?</h1>
                <p className='text-lg'>
                  Astrology helps us understand the will of God by predicting life events through the study of stars and planets. It's a science with its own methods that has inspired people for centuries, offering insights into various aspects of life. Despite changing beliefs, astrology remains relevant and continues to guide many.
                </p><br />
                <p className='text-lg'>
                  Astrology focuses on the influence of cosmic objects, mainly planets and stars, on human lives. While there are 8 planets in our solar system, astrology recognizes 9 planets, called the Navagrahas. Surprisingly, Earth is not included in these planets.
                </p>
                <p className='text-lg'>
                  The 9 planets in astrology are:
                  <ul className='list-disc ml-7'>
                    <li>Sun (Surya)</li>
                    <li>Moon (Chandra)</li>
                    <li>Mars (Mangala)</li>
                    <li>Mercury (Budha)</li>
                    <li>Jupiter (Brihaspati)</li>
                    <li>Venus (Shukra)</li>
                    <li>Saturn (Shani)</li>
                    <li>Rahu (North Node of the Moon)</li>
                    <li>Ketu (South Node of the Moon)</li>
                  </ul>
                </p>
                <p className='text-lg mb-16'>
                  Some planets are considered friendly, bringing positivity, while others, like Rahu and Ketu, can cause challenges. However, the effects aren't always fixed—Ketu’s influence, for example, may also bring spiritual growth, and Jupiter may not always bring favorable outcomes.
                </p>
              </div>

              {/* Image Section */}
              <div className=' col-span-2 flex justify-end'>
                <img src={horoscope} alt="Horoscope" className='w-82 h-96 mt-32 ml-16 rounded-full' />
              </div>
            </div>
          </div>
        </section>
  )
}

export default Astrology
