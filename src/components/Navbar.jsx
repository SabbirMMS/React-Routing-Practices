import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink } from "react-router-dom";
import { auth } from "../firebase/firebase.config";
import { signOut } from "firebase/auth";

function Navbar() {
  const [user, loading] = useAuthState(auth);
  // Function to compute classes dynamically
  function applyClasses(isActive, isPending) {
    const baseClass =
      "px-4 py-2 font-bold rounded-md transition-colors duration-300"; // Common class with better spacing and transitions
    if (isActive) return `${baseClass} text-white bg-blue-600 shadow-md`;
    if (isPending) return `${baseClass} text-blue-500 bg-blue-100`;
    return `${baseClass} text-gray-700 hover:bg-gray-200 hover:text-blue-600`;
  }

  return (
    <nav className="flex justify-between items-center bg-gray-50 shadow-lg p-4 sticky top-0 mb-3 z-10">
      {/* Logo */}
      <div className="flex items-center space-x-1">
        <img
          src="https://i.pinimg.com/550x/39/6c/d8/396cd8e1d8557f73c786892cffa4f13c.jpg"
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full"
        />
        <span className="text-xl font-bold text-blue-600">MyApp</span>
      </div>

      {/* Middle Navigation */}
      <div className="flex space-x-1">
        <NavLink
          to="/"
          className={({ isActive, isPending }) => {
            const baseClass =
              "px-4 py-2 font-bold rounded-md transition-colors duration-300"; // Common class
            if (isActive)
              return `${baseClass} text-white bg-blue-600 shadow-md`;
            if (isPending) return `${baseClass} text-blue-500 bg-blue-100`;
            return `${baseClass} text-gray-700 hover:bg-gray-200 hover:text-blue-600`;
          }}
        >
          Home
        </NavLink>
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
      </div>

      {/* Right Side NavLinks */}
      <div className="flex items-center space-x-1">
        {loading ? (
          ""
        ) : user ? (
          <>
            {/* Show Logout NavLink when logged in */}
            <NavLink
              to={"/"}
              className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg shadow hover:bg-red-700"
              onClick={async () => await signOut(auth)}
            >
              Logout
            </NavLink>
          </>
        ) : (
          <>
            {/* Show Login and Sign Up NavLinks when not logged in */}
            <NavLink
              to={"/login"}
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700"
            >
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className="px-4 py-2 bg-gray-200 text-gray-800 font-semibold rounded-lg shadow hover:bg-gray-300"
            >
              Sign Up
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
