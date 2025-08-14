import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

const dropdowns = {
  about: [
    'Achievements',
    'Gallery',
    'Shiva Foundation',
    'Awards & Recognition'
  ],
  location: [
    'Secunderabad',
    'Miyapur',
    'Hi-tech City',
    'Gachibowli'
  ],
  specialists: [
    'Dermatology',
    'Cardiology',
    'General Medicine',
    'Gynaecology',
    'ENT',
    'Physiotherapy',
    'Neurology',
    'Urology',
    'Plastic Surgery'
  ],
  patientInfo: [
    'Surgery Care',
    'Know your medicine',
    'Health Talks',
    'Online Doctor Consultation',
    'Health Information Videos',
    'Diseases and treatments'
  ],
  contact: [
    'Email',
    'Phone Number',
    'Alternate Number'
  ]
};

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  // Helper to handle mouse enter/leave for dropdowns
  const handleDropdown = (name) => setOpenDropdown(name);
  const closeDropdown = () => setOpenDropdown(null);

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          <FontAwesomeIcon icon={faHospital} /> Shiva Hospitals
        </h1>
      </Link>
      <nav className="headings">
        <div
          className="header-dropdown"
          onMouseEnter={() => handleDropdown('about')}
          onMouseLeave={closeDropdown}
        >
          <Link to="/about" className="header-style">About</Link>
          {openDropdown === 'about' && (
            <ul className="dropdown-list">
              {dropdowns.about.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="header-dropdown"
          onMouseEnter={() => handleDropdown('location')}
          onMouseLeave={closeDropdown}
        >
          <Link to="/location" className="header-style">Locations</Link>
          {openDropdown === 'location' && (
            <ul className="dropdown-list">
              {dropdowns.location.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="header-dropdown"
          onMouseEnter={() => handleDropdown('specialists')}
          onMouseLeave={closeDropdown}
        >
          <Link to="/specialists" className="header-style">Specialists</Link>
          {openDropdown === 'specialists' && (
            <ul className="dropdown-list">
              {dropdowns.specialists.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="header-dropdown"
          onMouseEnter={() => handleDropdown('patientInfo')}
          onMouseLeave={closeDropdown}
        >
          <Link to="/patient-info" className="header-style">Patient Info</Link>
          {openDropdown === 'patientInfo' && (
            <ul className="dropdown-list">
              {dropdowns.patientInfo.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="header-dropdown"
          onMouseEnter={() => handleDropdown('contact')}
          onMouseLeave={closeDropdown}
        >
          <Link to="/contact" className="header-style">Contact</Link>
          {openDropdown === 'contact' && (
            <ul className="dropdown-list">
              {dropdowns.contact.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;