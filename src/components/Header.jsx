import { useState, useRef, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import "../index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const { uniqueCartCount } = useContext(CartContext);

  return (
    <header
      className="header flex items-center justify-between shadow main-padding"
      style={{ height: "70px" }}
    >
      <div className="flex items-center gap-8">
        <div className="logo">
          <a href="/" className="logo-link text-2xl md:text-4xl font-bold">
            Sneakers
          </a>
        </div>
        <div className="navbar hidden md:flex mt-2">
          <ul className="navlist flex items-center">
            <li>
              <NavLink
                to="/Collections"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link px-4 text-gray-600"
                    : "nav-link px-4 text-gray-600 transition duration-200 hover:text-orange-400"
                }
              >
                Collections
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Men"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link px-4 text-gray-600 "
                    : "nav-link px-4 text-gray-600 transition duration-200 hover:text-orange-400"
                }
              >
                Men
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Women"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link px-4 text-gray-600"
                    : "nav-link px-4 text-gray-600 transition duration-200 hover:text-orange-400"
                }
              >
                Women
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/About"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link px-4 text-gray-600"
                    : "nav-link px-4 text-gray-600 transition duration-200 hover:text-orange-400"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link active-link px-4 text-gray-600"
                    : "nav-link px-4 text-gray-600 transition duration-200 hover:text-orange-400"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="options flex items-center gap-6 sm:gap-4">
        <NavLink to="/Cart">
          <div className="cart relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 text-gray-600 hover:text-black transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <div
              className="counter px-2 absolute left-5 bg-orange-400 text-white rounded-full"
              style={{ top: "-12px" }}
            >
              {uniqueCartCount}
            </div>
          </div>
        </NavLink>
        <button>
          <div className="profile">
            <Link to="/Contact">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 md:w-7 md:h-7 text-gray-600 hover:text-black transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Link>
          </div>
        </button>
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 text-gray-600 hover:text-black transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 md:w-7 md:h-7 text-gray-600 hover:text-black transition-all"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          )}
        </button>
      </div>
      <div
        ref={menuRef}
        className={`mobile-menu md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg z-10 transition-transform duration-300 ease-in-out transform origin-top ${
          isOpen ? "scale-y-100" : "scale-y-0"
        }`}
      >
        <ul className="navlist flex flex-col items-center">
          <li className="my-2">
            <NavLink
              to="/Collections"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link px-4 text-gray-500"
                  : "nav-link px-4 text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              Collections
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink
              to="/Men"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link px-4 text-gray-500"
                  : "nav-link px-4 text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              Men
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink
              to="/Women"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link px-4 text-gray-500"
                  : "nav-link px-4 text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              Women
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink
              to="/About"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link px-4 text-gray-500"
                  : "nav-link px-4 text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="my-2">
            <NavLink
              to="/Contact"
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link px-4 text-gray-500"
                  : "nav-link px-4 text-gray-500"
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
