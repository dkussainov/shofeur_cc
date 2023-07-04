"use client";

import Link from "next/link";
import Image from "next/image";

const Nav = () => {
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo1.png"
          alt="Shofeur logo"
          width={200}
          height={10}
        />
      </Link>
      <div className="sm:flex hidden">
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Add Listing
            </Link>
            <button type="button"  className="outline_btn">
              Sign In
            </button>
            <Link href="/profile">
              <Image
                src="/assets/images/login.png"
                width={100}
                height={100}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
          </div>
    </nav>
  );
};

export default Nav;
