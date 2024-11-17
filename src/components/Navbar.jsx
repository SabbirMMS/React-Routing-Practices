import { NavLink } from "react-router-dom";

function Navbar() {
  // Function to compute classes dynamically
  function applyClasses(isActive, isPending) {
    const baseClass =
      "px-4 py-2 font-bold rounded-md transition-colors duration-300"; // Common class with better spacing and transitions
    if (isActive) return `${baseClass} text-white bg-blue-600 shadow-md`;
    if (isPending) return `${baseClass} text-blue-500 bg-blue-100`;
    return `${baseClass} text-gray-700 hover:bg-gray-200 hover:text-blue-600`;
  }

  return (
    <nav className="flex justify-center space-x-4 bg-gray-50 shadow-lg p-4 sticky top-0 mb-3">
      {/* Static Method */}
      <NavLink
        to="/"
        className={({ isActive, isPending }) => {
          const baseClass =
            "px-4 py-2 font-bold rounded-md transition-colors duration-300"; // Common class
          if (isActive) return `${baseClass} text-white bg-blue-600 shadow-md`;
          if (isPending) return `${baseClass} text-blue-500 bg-blue-100`;
          return `${baseClass} text-gray-700 hover:bg-gray-200 hover:text-blue-600`;
        }}
      >
        Home
      </NavLink>

      {/* Dynamic Method Using Function */}
      <NavLink
        to="users"
        className={({ isActive, isPending }) =>
          applyClasses(isActive, isPending)
        }
      >
        Users
      </NavLink>

      <NavLink
        to="about"
        className={({ isActive, isPending }) =>
          applyClasses(isActive, isPending)
        }
      >
        About
      </NavLink>

      <NavLink
        to="contact"
        className={({ isActive, isPending }) =>
          applyClasses(isActive, isPending)
        }
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;
