import { NavLink } from "react-router-dom";
import { IoIosSearch } from "react-icons/io";

const Header = () => {
  return (
    <header className="shadow-md p-6 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <h2 className="text-4xl font-bold text-green-500">FoodSale</h2>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-8 text-green-400">
            <NavLink
              className="text-xl font-medium hover:text-green-600 transition-colors duration-300"
              to="/"
            >
              Recepies
            </NavLink>
            <NavLink
              className="text-xl font-medium hover:text-green-600 transition-colors duration-300"
              to="/saved"
            >
              Saved
            </NavLink>
          </ul>
        </nav>

        {/* Search Bar */}
        <div className="flex items-center border rounded-lg overflow-hidden">
          <input
            className="p-2 w-48 md:w-64 focus:outline-none"
            type="text"
            placeholder="Search..."
          />
          <button className="bg-green-500 text-white p-2 hover:bg-green-600 transition-colors duration-300">
            <IoIosSearch size={20} />
          </button>
        </div>

        {/* Auth Buttons */}
        <div className="flex gap-4 text-green-400">
          <NavLink
            className="text-xl font-medium hover:text-green-500 transition-colors duration-300"
            to="/register"
          >
            Register
          </NavLink>
          <NavLink
            className="text-xl font-medium hover:text-green-500 transition-colors duration-300"
            to="/login"
          >
            Login
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
