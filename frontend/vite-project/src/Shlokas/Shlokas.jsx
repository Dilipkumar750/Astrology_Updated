import React from 'react';
import Navbar from '../Components/Navbar';
import background from '../assets/shlokas_bg.jpg';
import guru from '../assets/guru.jpg';
import lakshmi from '../assets/lakshmi.jpg';
import vinayaga from '../assets/vinayaga.jpg';
import muruga from '../assets/muruga.jpg';
import krishna from '../assets/krishna.jpg';

const Shlokas = () => {
  return (
    <div>
      {/* Navbar section */}
      <div className="bg-transparent">
        <Navbar />
      </div>

      {/* Set the background image only for the section below the navbar */}
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: 'calc(50vh - 60px)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '0px'
        }}
      >
        <h1 className="text-center text-white text-4xl font-bold">
          "As the Sun rises each day, may your soul shine with boundless energy and clarity."
        </h1>
      </div>

      <div className='bg-gray-200 top-0'>
        <p className="text-center font-bold text-orange-600 text-3xl mt-4">
          "Here are some straightforward Shlokas, designed to be easily heard and quickly learned."
        </p>
  
        {/* Shlokas 2x2 grid */}
        <div className="grid grid-cols-2 gap-8 mt-10 px-20">
          {/* Guru Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Guru Brahma:</h2>
              <p className="text-lg text-center">
                Gurur brahmaa gurur vishnuh<br />
                gurur devo maheshvarah<br />
                gurur saakshaat parabrahma<br />
                tasmai shree gurave namah
              </p>
            </div>
            <img src={guru} alt="Guru" className="w-52 h-52 rounded-xl" />
          </div>
  
          {/* Vinayaga Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Mooshika Vahana:</h2>
              <p className="text-lg text-center">
                Mooshika vaahana modhaha hastha<br />
                Chamara karna vilambitha suthra<br />
                Vamana rupa maheswara puthra<br />
                Vigna vinayaga padha namaste
              </p>
            </div>
            <img src={vinayaga} alt="Vinayaga" className="w-52 h-52 rounded-xl" />
          </div>
  
          {/* Lakshmi Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Yaa Kundendu:</h2>
              <p className="text-lg text-center">
                Yaa kundendu tushaarahaara dhavalaa<br />
                yaa shubhra vastraavritaa<br />
                yaa veenaa varadanda manditakaraa<br />
                yaa shveta padmaasanaa<br />
                yaa brahmaachyuta shankara prabhritibihi<br />
                devaih sadaa pujitaa<br />
                saa maam pattu saravatee bhagavatee<br />
                nihshesha jaadyaapahaa.
              </p>
            </div>
            <img src={lakshmi} alt="Lakshmi" className="w-52 h-52 rounded-xl" />
          </div>
  
          {/* Gajanana Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Gajananam:</h2>
              <p className="text-lg text-center">
                Gajaananam bhoodha ghanaathi sevitham<br />
                kabhitha jamboo palasara pakshitham<br />
                umaasutham sokha vinaasakaranam<br />
                namaami vigneswara paadha pankajam
              </p>
            </div>
            <img src={vinayaga} alt="Vinayaga" className="w-52 h-52 rounded-xl" />
          </div>
  
          {/* Muruga Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Uruvai Aruvai:</h2>
              <p className="text-lg text-center">
                Uruvai aruvai uladhai iladhai<br />
                maruvai malarai maniyai oliyai<br />
                karuvai uyirai gadhiyai vidhiyai<br />
                guruvai varuvai arulvai guhaney
              </p>
            </div>
            <img src={muruga} alt="Muruga" className="w-52 h-52 rounded-xl" />
          </div>
  
          {/* Krishna Shloka */}
          <div className="flex items-center justify-between bg-white rounded-lg shadow-lg p-8">
            <div className="text-right pl-6 justify-center">
              <h2 className="text-3xl font-bold mb-4 text-center">Shaantaakaaram:</h2>
              <p className="text-lg text-center">
                padmanaabham suresham<br />
                vishvaadhaaram gaganasadrisham<br />
                meghavarnam shubhaangam<br />
                lakshmeekaantam kamalanayanam<br />
                yogihriddhyaanagamyam<br />
                vande vishnum bhavabhayaharam<br />
                sarvalokaikanaatham
              </p>
            </div>
            <img src={krishna} alt="Krishna" className="w-52 h-52 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shlokas;
