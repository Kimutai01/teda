import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div class="w-full h-200 flex items-center justify-center bg-black p-4">
      <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
        <div class="w-full text-7xl font-bold">
          <h1 class="w-full md:w-2/3">TEDA</h1>
        </div>
        <div class="flex mt-8 flex-col md:flex-row md:justify-between">
          <p class="w-full md:w-2/3 text-gray-400">
            TRANS-ELGON INDIGENOUS DEVELOPMENT AGENCY
          </p>
          <div class="w-44 pt-6 md:pt-0">
            <a class="bg-red-500 justify-center text-center rounded-lg shadow px-10 py-3 flex items-center">
              <Link href="/contact">Contact US</Link>
            </a>
          </div>
        </div>
        <div class="flex flex-col">
          <p class="w-full text-center my-12 text-gray-600">
            Copyright © 2022 TEDA. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
