import React from 'react';

const temples = [
  {
    title: "Suriyanar Koil (Sun Temple)",
    location: "Near Kumbakonam, Thanjavur District",
    associatedPlanet: "Sun (Surya)",
    benefits: "Devotees visit this temple to seek blessings for health, vitality, and power. Worship here is believed to alleviate problems related to leadership, authority, and health issues related to the eyes, heart, and bones."
  },
  {
    title: "Chandran Temple (Moon Temple)",
    location: "Thingalur, Thanjavur District",
    associatedPlanet: "Moon (Chandra)",
    benefits: "Known to relieve issues related to mental peace, family harmony, and emotional balance. People with afflictions related to the Moon come here for relief from stress, depression, and family discord."
  },
  {
    title: "Angarakan Temple (Mars Temple)",
    location: "Vaitheeswaran Koil, Nagapattinam District",
    associatedPlanet: "Mars (Angaraka)",
    benefits: "Devotees come to this temple to seek relief from Mangal Dosha (Mars affliction), often for matters related to marriage, courage, and property disputes. It is also believed to offer healing for skin ailments."
  },
  {
    title: "Budhan Temple (Mercury Temple)",
    location: "Thiruvenkadu, Nagapattinam District",
    associatedPlanet: "Mercury (Budha)",
    benefits: "This temple is visited for blessings in academics, intelligence, and communication skills. It is particularly beneficial for those pursuing careers in education, arts, and business."
  },
  {
    title: "Guru Temple (Jupiter Temple)",
    location: "Alangudi, Tiruvarur District",
    associatedPlanet: "Jupiter (Guru or Brihaspati)",
    benefits: "Worship at this temple is believed to bring wisdom, prosperity, and spiritual growth. It is especially visited by those facing issues with education, marriage, or childbirth."
  },
  {
    title: "Sukran Temple (Venus Temple)",
    location: "Kanjanur, Thanjavur District",
    associatedPlanet: "Venus (Sukra)",
    benefits: "Associated with love, beauty, and marriage. People visit this temple seeking blessings for relationships, wealth, and artistic pursuits. Those with issues in marital harmony often come here."
  },
  {
    title: "Shani Temple (Saturn Temple)",
    location: "Thirunallar, Karaikal (Puducherry)",
    associatedPlanet: "Saturn (Shani)",
    benefits: "One of the most popular temples in the Navagraha circuit, it is visited to seek relief from Saturn’s negative influences (Shani Dosha). It is believed to bring relief from obstacles, hardships, and health issues related to bones and joints."
  },
  {
    title: "Rahu Temple",
    location: "Thirunageswaram, Thanjavur District",
    associatedPlanet: "Rahu",
    benefits: "Known for rituals that reduce the malefic effects of Rahu in one’s horoscope. People affected by Rahu Dosha come here for relief from illusions, addictions, and mental instability."
  },
  {
    title: "Ketu Temple",
    location: "Keezhaperumpallam, Nagapattinam District",
    associatedPlanet: "Ketu",
    benefits: "This temple is dedicated to removing the negative effects of Ketu, which can cause detachment, confusion, and lack of focus. Devotees seek blessings for spiritual progress, clarity, and overcoming mysterious health issues."
  }
];

const Parigara = () => {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', padding: '20px 0' }}>
      {/* Header Section */}
      <div style={{
        backgroundColor: '#2563eb',
        padding: '20px 0',
        boxShadow: '0px 4px 6px rgba(0,0,0,0.1)',
        textAlign: 'center'
      }}>
        <h1 style={{
          color: 'white',
          fontSize: '2.5rem',
          fontWeight: 'bold',
          animation: 'fadeInDown 1s'
        }}>
          Notable Parigara Kovils in Tamil Nadu
        </h1>
      </div>

      {/* Main Content Section */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)', // 3 columns
        gap: '20px', // space between items
        padding: '20px',
        maxWidth: '1200px', // Optional: set max width for the grid
        margin: '0 auto' // Optional: centers the grid
      }}>
        {temples.map((temple, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
              padding: '20px',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              textAlign: 'center',
              transform: 'translateY(0)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              marginBottom: '10px',
              color: '#1f2937',
              transition: 'color 0.3s'
            }}>
              {temple.title}
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#4b5563',
              lineHeight: '1.6',
              transition: 'color 0.3s'
            }}>
              {temple.benefits}
            </p>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Parigara;
