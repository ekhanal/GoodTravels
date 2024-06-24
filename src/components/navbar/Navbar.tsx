import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import goodtravels from "../../assets/images/goodtravels.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className="sticky top-0 bg-blue-500 text-white py-4 px-4 z-20">
        <div className="container mx-auto flex items-center justify-between">
          <NavLink to="/" className="flex items-center">
            <img src={goodtravels} alt="Goodday Logo" className="h-8 mr-2" />
          </NavLink>
          <button
            onClick={toggleMenu}
            className="md:hidden opacity-50 hover:opacity-100"
          >
            <RxHamburgerMenu className="text-2xl" />
          </button>
          <ul
            className={`${
              menuOpen
                ? "block fixed top-14 left-0 right-0 bg-blue-400 z-10 transition-all duration-300 md:relative md:flex  md:space-x-4 md:bg-transparent md:p-0"
                : "hidden md:flex md:space-x-4"
            } space-y-2 md:space-y-0 w-full md:w-auto p-4 md:p-0 items-center justify-center text-xs md:text-sm`}
          >
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Flight
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
               Holidays
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
             vehicle
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                Visa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/"
                className="whitespace-nowrap hover:bg-blue-300 lg:px-3 py-2 rounded"
              >
                About us
              </NavLink>
            </li>
            
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
