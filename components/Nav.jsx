"use client";

import { useState } from "react";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  const [toggleDropdown, settoggleDropdown] = useState(false);
  return (
    <nav className="flex-between w-full mb-16 pt-3 sticky top-0 z-50 bg-gray-200">
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
          <Link href="/create-prompt" className="black_btn">
            Add Listing
          </Link>
          <button type="button" className="outline_btn">
            Sign In
          </button>
          <Link href="/" className="menu_btn">
            <Image
              src="/assets/images/login.png"
              width={100}
              height={100}
              className="rounded-full object-contain"
              alt="profile"
            />
          </Link>
        </div>
      </div>

      {/* Mobile view */}
      <div className="sm:hidden flex relative">
        <div className="flex">
          <Image
            src="/assets/images/login.png"
            width={100}
            height={100}
            className="menu_btn"
            alt="profile"
            onClick={() => settoggleDropdown((prev) => !prev)}
          />
          {toggleDropdown && (
            <div className="dropdown">
              <Link
                href="/"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Add Listing
              </Link>
              <button
                type="button"
                className="dropdown_link"
                onClick={() => settoggleDropdown(false)}
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
