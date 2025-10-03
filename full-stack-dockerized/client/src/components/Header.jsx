import React from 'react';
import { Link } from 'react-router-dom';
import { SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

const Header = () => {
  return (
    <header className="w-full flex justify-between items-center px-8 py-4 shadow-md border-b border-gray-700 bg-gray-900 text-gray-100">
      {/* Site Logo / Name */}
      <Link
        to="/"
        className="text-2xl font-bold text-gray-100 hover:text-blue-400 transition"
      >
        MySQL Sandbox
      </Link>

      {/* Right side (Auth buttons / User) */}
      <div className="flex items-center gap-4">
        <SignedOut>
          <Link
            to="/sign-in"
            className="px-4 py-2 rounded-md text-gray-200 hover:bg-gray-800 transition"
          >
            Sign In
          </Link>
          <Link
            to="/sign-up"
            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </SignedOut>

        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
};

export default Header;
