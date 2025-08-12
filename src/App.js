import { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Signin from './components/Signin';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';
import Home from './components/Home';
import Signup from './components/Signup';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Signin onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Signup />} />
        <Route path="/services" element={<Services />} />
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
