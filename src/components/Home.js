import React, { useRef, useState, useEffect } from 'react';
import '../Home.css';

const carouselCards = [
  { title: 'Book Appointment' },
  { title: 'Our Specialities' },
  { title: 'Our Locations' },
  { title: 'Our Doctors' },
  { title: 'View Medical Records' },
  { title: 'Online Consultation' },
  { title: 'Health Checkup' }
];

export default function Home() {
  const scrollRef = useRef(null);
  const [showArrows, setShowArrows] = useState(false);

  // Check for overflow on mount and on resize
  useEffect(() => {
    const checkOverflow = () => {
      const el = scrollRef.current;
      if (el && el.scrollWidth > el.clientWidth) {
        setShowArrows(true);
      } else {
        setShowArrows(false);
      }
    };
    checkOverflow();
    window.addEventListener('resize', checkOverflow);
    return () => window.removeEventListener('resize', checkOverflow);
  }, []);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const scrollAmount = el.offsetWidth * 0.9; // Scroll by almost the visible area
    el.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="home-container">
      <h2 className="home-heading">Let's find a doctor</h2>
      <p className="home-subheading">Our hospital is available at these locations:</p>
      <ul className="location-list">
        <li>Hi-tech City</li>
        <li>Secunderabad</li>
        <li>Miyapur</li>
        <li>Gachibowli</li>
      </ul>

      {/* Card Carousel */}
      <div className="carousel-outer">
        {showArrows && (
          <button className="carousel-arrow" onClick={() => scroll('left')} aria-label="Previous">
            &#8592;
          </button>
        )}
        <div className="carousel-scroll" ref={scrollRef}>
          {carouselCards.map((card, idx) => (
            <div className="carousel-card" key={idx}>
              <h3>{card.title}</h3>
            </div>
          ))}
        </div>
        {showArrows && (
          <button className="carousel-arrow" onClick={() => scroll('right')} aria-label="Next">
            &#8594;
          </button>
        )}
      </div>
    </div>
  );
}
