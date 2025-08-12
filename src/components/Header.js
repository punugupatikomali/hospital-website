import { Link } from 'react-router-dom';
import '../header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHospital } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>
          <FontAwesomeIcon icon={faHospital} /> Shiva Hospitals 
        </h1>
      </Link>
      <nav className="headings">
        <Link to="/" className="header-style">Home</Link>
        <Link to="/about" className="header-style">About</Link>
        <Link to="/location" className="header-style">Locations</Link>
        <Link to="/specialists" className="header-style">Specialists</Link>
        <Link to="/patient-info" className="header-style">Patient Info</Link>
        <Link to="/contact" className="header-style">Contact</Link>
      </nav>
    </div>
  );
}

export default Header;