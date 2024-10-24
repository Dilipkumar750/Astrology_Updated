import React from 'react'
import Hero from './Hero';
import Astrology from './Astrology';
import Purpose from './Purpose';
import Horoscope from './Horoscope';
import AstrologyData from './AstrologyData';
import ChartTable from './ChartTable';
import Contact from './Contact';
import Navbar from '../Components/Navbar';

function Home() {
  return (
    <>
    {/* <Navbar /> */}
    <Hero />
    <Astrology/>
    <Purpose/>
    <Horoscope/>
    <AstrologyData/>
    <ChartTable/>
    <Contact/>
    </>
  )
}

export default Home