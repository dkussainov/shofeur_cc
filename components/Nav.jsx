"use client";

import { useState } from "react";
import { FcMenu } from "react-icons/fc";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-screen mb-10 sticky top-0 z-50 bg-black sm:px-40">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo1.png"
          alt="Shofeur logo"
          width={200}
          height={53.94}
          className="object-contain rounded-full"
        />
      </Link>

      {/* Desktop view */}
      <div className="sm:flex hidden">
        <div className="flex gap-3 md:gap-5">
          <Link href="/" className="black_btn">
            Add Listing
          </Link>
          <button type="button" className="black_btn">
            Sign In
          </button>
          <button
            className="menu_btn"
            onClick={() => settoggleDropdown((prev) => !prev)}
          >
            <FcMenu />
          </button>
          {toggleDropdown && (
            <div className="dropdown mr-40">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                About Shofeur
              </Link>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Popular ocassions
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Iconic destinations
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                How it works?
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                For fleet operators
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Contact Us
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Blog
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Help Center
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Terms & Conditions
              </button>
              _________
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex relative">
        <div onClick={() => settoggleDropdown((prev) => !prev)}>
          <button className="menu_btn">
            <FcMenu />
          </button>
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Add Listing
              </Link>
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                About Shofeur
              </Link>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Popular ocassions
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Iconic destinations
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                How it works?
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                For fleet operators
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Contact Us
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Blog
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Help Center
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Privacy Policy
              </button>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Terms & Conditions
              </button>
              _________
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
