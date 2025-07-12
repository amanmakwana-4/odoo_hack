import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50 shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo + Nav Links */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="ReWear" className="h-8 w-8" />
        <Link to="/" className="text-xl font-bold text-green-700">ReWear</Link>
        <Link to="/dashboard" className="ml-4 text-gray-700 hover:text-green-700">Dashboard</Link>
      </div>

      {/* Search Bar */}
      <div className="relative w-2/5 hidden sm:block">
        <input
          type="text"
          placeholder="Search for items..."
          className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      {/* Auth Buttons */}
      <div className="flex items-center space-x-3">
        {!isAuthenticated ? (
          <>
            <button onClick={() => loginWithRedirect()} className="text-sm text-gray-700 hover:text-green-700">Login</button>
            <button
              onClick={() => loginWithRedirect({ authorizationParams: { screen_hint: "signup" } })}
              className="px-4 py-1 bg-green-600 text-white rounded hover:bg-green-500 text-sm"
            >
              Sign Up
            </button>
          </>
        ) : (
          <div className="relative group">
            <img
              src={user.picture}
              alt={user.name}
              className="h-8 w-8 rounded-full border cursor-pointer"
            />
            <div className="absolute right-0 mt-2 hidden group-hover:block bg-white border rounded shadow p-3 w-48 z-10">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500 mb-2">{user.email}</p>
              <button
                onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}
                className="text-sm text-red-600 hover:underline"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
