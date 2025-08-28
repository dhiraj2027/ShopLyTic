import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
  const [ visible, setVisible ] = useState(false);
  const {getCartCount, navigate, token, setToken, setCartItems} = useContext(ShopContext);
  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken('');
    setCartItems({});
    navigate('/login');
    setVisible(false);
  }

  return (
    <nav className='w-full bg-white z-50'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 h-16'>
        <Link to='/'  className="text-2xl font-bold text-indigo-600 tracking-wide">
          ShopLyTic
        </Link>

        <div className='hidden sm:flex lg:space-x-8 md:space-x-5'>
          <NavLink 
            to='/' 
            exact="true"
            className={({ isActive }) => 
              isActive
            ? 'text-indigo-600 font-semibold'
            : 'hover:text-indigo-600 transition'
          }
          >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            className={({ isActive }) =>
              isActive
            ? 'text-indigo-600 font-semibold'
            : 'hover:text-indigo-600 transition'
          }
          >
            Collection
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
            ? 'text-indigo-600 font-semibold'
            : 'hover:text-indigo-600 transition'
          }
          >
            About
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
            ? 'text-indigo-600 font-semibold'
            : 'hover:text-indigo-600 transition'
          }
          >
            Contact
          </NavLink>

          {token && (
            <>
              <NavLink
                to="/profile"
                className={({ isActive }) =>
                  isActive
                ? 'text-indigo-600 font-semibold'
                : 'hover:text-indigo-600 transition'
              }
              >
                My Profile
              </NavLink>
              <button
                onClick={handleLogout}
                className="text-red-600 font-medium hover:text-red-700 transition"
                >
                Log Out
              </button>
            </>
          )}

          {!token && (
            <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
            ? 'text-indigo-600 font-semibold'
            : 'hover:text-indigo-600 transition'
          }
          >
              Login
            </NavLink>
          )}

          <div className="relative cursor-pointer" onClick={() => navigate('/cart')}>
            <img src={assets.cart_icon} alt="Cart" className="w-6 h-6" />
            {getCartCount() > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full text-xs w-5 h-5 flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-600"
          aria-label="Toggle menu"
          onClick={() => setVisible(!visible)}
          >
          <img src={assets.menu_icon} alt="Menu" className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile menu */}
      {visible && (
        <div className="sm:hidden bg-white border-t border-gray-200 shadow-md">
          <NavLink
            to="/"
            exact="true"
            onClick={() => setVisible(false)}
            className="block py-3 px-6 hover:bg-indigo-50"
            >
            Home
          </NavLink>

          <NavLink
            to="/collection"
            onClick={() => setVisible(false)}
            className="block py-3 px-6 hover:bg-indigo-50"
            >
            Collection
          </NavLink>

          <NavLink
            to="/about"
            onClick={() => setVisible(false)}
            className="block py-3 px-6 hover:bg-indigo-50"
            >
            About
          </NavLink>

          <NavLink
            to="/contact"
            onClick={() => setVisible(false)}
            className="block py-3 px-6 hover:bg-indigo-50"
            >
            Contact
          </NavLink>

          {token ? (
            <>
              <NavLink
                to="/profile"
                onClick={() => setVisible(false)}
                className="block py-3 px-6 hover:bg-indigo-50"
                >
                My Profile
              </NavLink>

              <button
                onClick={handleLogout}
                className="w-full text-left py-3 px-6 text-red-600 hover:bg-indigo-50"
                >
                Log Out
              </button>
            </>
          ) : (
            <NavLink
            to="/login"
            onClick={() => setVisible(false)}
            className="block py-3 px-6 hover:bg-indigo-50"
            >
              Login
            </NavLink>
          )}
          <div
            onClick={() => {
              navigate('/cart');
              setVisible(false);
            }}
            className="py-3 px-6 cursor-pointer hover:bg-indigo-50 flex items-center gap-2"
          >
            <img src={assets.cart_icon} alt="Cart" className="w-5 h-5" />
            <span>Cart ({getCartCount()})</span>
          </div>
        </div>
      )}
    </nav>  
  );
};

export default Navbar;