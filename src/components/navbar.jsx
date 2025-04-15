import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { fetchUserProfile } from './redux/authslice';
import { persistor } from './redux/store';
import axios from 'axios';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogout = async() => {
    const response = await axios.post('http://localhost:4000/api/logout', {}, {withCredentials: true});
    if (response.status === 200) {
      alert(response.data.message);
      navigate("/login");
    }
    await persistor.purge(); 
    window.location.reload(); 
  };

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/about', label: 'About' },
  ];

  return (
    <>
      <div className="h-[70px] w-full" />
      <div className={`fixed top-0 left-0 right-0 z-50 w-full bg-gray-900 border-b border-gray-800/40 transition-all duration-200 ${
        isScrolled ? 'backdrop-blur-md' : ''
      }`}>
        <div className="mx-auto flex h-[70px] max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <div className="text-md font-bold text-white text-2xl">
              <h3 className="flex items-center">
                Task
                <span className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 font-extrabold">Manager</span>
              </h3>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-8 justify-center">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 py-2 rounded-md transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'text-white' 
                        : 'text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* User Controls */}
          <div className="hidden lg:flex items-center space-x-4">
            {isAuthenticated ? (
              <>
               <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-md hover:from-red-600 hover:to-red-700 transition-colors duration-200 flex items-center"
                >
                  Logout
                </button>
                <Link
                  to="/profile"
                  className="px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-600 transition-colors duration-200 flex items-center"
                >
                  Profile
                </Link>
               
              </>
            ) : (
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-md hover:from-blue-600 hover:to-blue-700 transition-colors duration-200 flex items-center"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-200 hover:bg-gray-700 focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-gray-800 px-2 pt-2 pb-3 border-t border-gray-700 shadow-lg">
            <ul className="space-y-1 flex flex-col justify-center items-center">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-2 py-2 px-3 rounded-md transition-all duration-300 ${
                      location.pathname === link.path 
                        ? 'text-white' 
                        : 'text-white'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-col space-y-2 px-2">
              {isAuthenticated ? (
                <>
                  <Link
                    to="/profile"
                    className="w-full rounded-md bg-gray-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full rounded-md bg-gradient-to-r from-red-500 to-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-red-600 hover:to-red-700 flex items-center justify-center"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="w-full rounded-md bg-gradient-to-r from-blue-500 to-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:from-blue-600 hover:to-blue-700 flex items-center justify-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Login
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;