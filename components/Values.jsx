import React from "react";
import { MdAccountTree } from "react-icons/md";
import { GiJoint, GiFocusedLightning } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHandsHelping } from "react-icons/fa";
import { AiOutlineStop, AiOutlineSecurityScan } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const Values = () => {
  return (
    // <!-- component -->
    <div class="flex items-center justify-center pt-20">
      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
        {/* <!-- 1 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <MdAccountTree size={30} />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">Accountability</p>
            <div class="flex space-x-2 text-gray-400 text-sm">
              {/* <!-- svg  --> */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p>Availability</p>
            </div>
          </div>
        </div>

        {/* <!-- 2 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <GiJoint size={30} />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">
              Inclusivity and sustainability
            </p>
            <div class="flex space-x-2 text-gray-400 text-sm">
              {/* <!-- svg  --> */}

              <IoPeopleOutline size={20} />
              <p>We have space for everyone</p>
            </div>
          </div>
        </div>

        {/* <!-- 3 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <FaHandsHelping size={30} />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">
              Free Prior and Informed Consent (FPIC) to any activities
              undertaken.
            </p>
            <div class="flex space-x-2 text-gray-400 text-sm">
              {/* <!-- svg  --> */}
              <AiOutlineStop size={20} />
              <p>No restrictions</p>
            </div>
          </div>
        </div>

        {/* <!-- 4 card --> */}
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
              />
            </svg>
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">Non-violence</p>
            <div class="flex space-x-2 text-gray-400 text-sm">
              {/* <!-- svg  --> */}
              <AiOutlineSecurityScan size={20} />
              <p>no violence</p>
            </div>
          </div>
        </div>
        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <BiWorld size={20} />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">
              Global partnership reflected in SDGs.
            </p>
          </div>
        </div>

        <div class="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
          <div class=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
            {/* <!-- svg  --> */}
            <GiFocusedLightning size={30} />
          </div>
          <div class="mt-8">
            <p class="text-xl font-semibold my-2">Kenya’s Vision 2030</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values;
