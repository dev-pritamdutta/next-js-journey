import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className=" absolute z-20 container px-24 flex justify-between items-center top-5 ">
      <div className="text-white text-lg font-bold">MyApp</div>
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link href="/performance" className="text-white hover:text-gray-200">
            performance
          </Link>
        </li>
        <li>
          <a href="#" className="text-white hover:text-gray-200">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
