import React from 'react'
import { Link } from 'react-router-dom'
// import { assets } from '../assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gray-50 text-gray-700 mt-50 py-10 border-t border-gray-200'>
        <div className='flex flex-col md:flex-row justify-between px-6 max-w-7xl mx-auto md:px-12'>
            {/* Brand and copyright */}
            <div className="flex flex-col items-start md:items-start space-y-2">
                <h1 className="text-3xl font-bold text-indigo-700">ShopLyTic</h1>
                <p className="text-sm text-gray-500">&copy; {new Date().getFullYear()} ShopLyTic. All rights reserved.</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">Quick Links</h2>
                <nav className="flex flex-col space-y-2 text-gray-600">
                    <Link to="/" className="hover:text-indigo-700 transition">Home</Link>
                    <Link to="/collection" className="hover:text-indigo-700 transition">Collection</Link>
                    <Link to="/about" className="hover:text-indigo-700 transition">About</Link>
                    <Link to="/contact" className="hover:text-indigo-700 transition">Contact</Link>
                    <Link to="/profile" className="hover:text-indigo-700 transition">My Profile</Link>
                </nav>
            </div>

            {/* Social Media */}
            <div className="flex flex-col space-y-3">
                <h2 className="text-lg font-semibold text-gray-900">Follow Us</h2>
                <div className="flex space-x-4">
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="text-gray-600 hover:text-indigo-700 transition"
                    >
                        <FaFacebookF size={20} />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="text-gray-600 hover:text-indigo-700 transition"
                    >
                        <FaTwitter size={20} />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="text-gray-600 hover:text-indigo-700 transition"
                    >
                        <FaInstagram size={20} />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-gray-600 hover:text-indigo-700 transition"
                    >
                        <FaLinkedinIn size={20} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer