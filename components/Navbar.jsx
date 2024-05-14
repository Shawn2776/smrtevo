import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex">
      <ul className="flex w-full mx-10 justify-between p-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <SignedOut>
            <div className="flex gap-4">
              <SignInButton />
              <div className="border bg-red-500 px-2 py-1 rounded-md shadow-md">
                <SignUpButton />
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
