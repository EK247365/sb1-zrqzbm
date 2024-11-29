import React, { useState } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const linkClass = (path: string) => 
    `${isActive(path) ? 'text-blue-600' : 'text-gray-700'} hover:text-blue-600 transition-colors`;

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Kane Enterprise</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={linkClass('/')}>Home</Link>
            <Link to="/services" className={linkClass('/services')}>Services</Link>
            <Link to="/about" className={linkClass('/about')}>About</Link>
            <Link to="/contact" className={linkClass('/contact')}>Contact</Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Home</Link>
            <Link to="/services" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Services</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}