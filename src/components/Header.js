import logo from '../logo.svg';
import { Link } from 'react-router-dom';
import '../header.css';

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <h1>Shiva Hospitals</h1>
      </Link>
      <div className='headings'>
        <Link to="/" className='header-style' style={{textDecoration:'None'}}>Home</Link>
        <Link to="/about" className='header-style'>About</Link>
        <Link to="/services" className='header-style'>Services</Link>
        <Link to="/contact" className='header-style'>Contact</Link>
      </div>
    </div>
  );
}

export default Header;
