import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hero from './HomeComponent/Hero';
// import Astrology from './HomeComponent/Astrology';
// import Purpose from './HomeComponent/Purpose';
// import Horoscope from './HomeComponent/Horoscope';
// import AstrologyData from './HomeComponent/AstrologyData';
// import ChartTable from './HomeComponent/ChartTable';
// import Contact from './HomeComponent/Contact';
// import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './HomeComponent/Home';
import Shlokas from './Shlokas/Shlokas';

function App() {
  return (
    <Router>
      {/* Fixed Navbar */}
      {/* <Navbar /> */}

      {/* Main Content */}
      {/* <div className="flex flex-col items-center"> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shlokas" element={<Shlokas />} />
        </Routes>
      {/* </div> */}

      <Footer />
    </Router>
  );
}

export default App;
