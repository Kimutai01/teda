import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-200 flex items-center justify-center bg-black p-4">
      <div className="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div className="w-full text-7xl font-bold">
          <h1 className="w-full md:w-2/3">TEDA</h1>
        </div>
        <div className="flex mt-8 flex-col md:flex-row md:justify-between">
          <p className="w-full md:w-2/3 text-gray-400">
            TRANS-ELGON INDIGENOUS DEVELOPMENT AGENCY
          </p>
          <div className="w-44 pt-6 md:pt-0">
            <Link
              href="/contact"
              className="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center"
            >
              Contact US
            </Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="w-full text-center my-12 text-gray-600">
            Copyright © 2022 TEDA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
