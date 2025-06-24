import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'About', route: '/aboutpage' },
    { name: 'Projects', route: '/projectspage' },
    { name: 'Project Details', route: '/projectdetailspage' },
    { name: 'Contact', route: '/contactpage' },
  ];

  return (
    <header id="Header_1" className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2" id="Header_2">
            <img src={images[0]} alt="Logo" className="h-10 w-10 rounded-full" id="Header_3"/>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">DevPortal</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8" id="Header_4">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                id={`Header_${index + 5}`}
                className={`text-lg hover:text-blue-600 transition-colors duration-200 ${location.pathname === link.route ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
              >
                {link.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4" id="Header_10">
              <Link
                to="/loginpage"
                className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                id="Header_11"
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg"
                id="Header_12"
              >
                Register
              </Link>
            </div>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-blue-600 transition-colors duration-200"
            id="Header_13"
          >
            <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4" id="Header_14">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.route}
                id={`Header_${index + 15}`}
                className={`block py-2 text-lg hover:text-blue-600 transition-colors duration-200 ${location.pathname === link.route ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="mt-4 space-y-2" id="Header_20">
              <Link
                to="/loginpage"
                className="block w-full text-center py-2 text-blue-600 hover:text-blue-700 transition-colors duration-200"
                id="Header_21"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className="block w-full text-center py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
                id="Header_22"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;