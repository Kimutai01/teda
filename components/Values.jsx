import React from "react";
import { MdAccountTree } from "react-icons/md";
import { GiJoint, GiFocusedLightning } from "react-icons/gi";
import { IoPeopleOutline } from "react-icons/io5";
import { FaHandHoldingHeart, FaHandsHelping } from "react-icons/fa";
import { AiOutlineStop, AiOutlineSecurityScan } from "react-icons/ai";
import { BiWorld } from "react-icons/bi";

const Values = () => {
  return (
    // <!-- component -->
    <>
      <h1 className="text-4xl text-center p-5 font-bold">
        Core values at TEDA
      </h1>
      <div className="flex items-center justify-center pt-20">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
          {/* <!-- 1 card --> */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-pink-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <MdAccountTree size={30} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">Accountability</p>
              <div className="flex space-x-2 text-gray-400 text-sm">
                {/* <!-- svg  --> */}

                <p>Availability</p>
              </div>
            </div>
          </div>

          {/* <!-- 2 card --> */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-green-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <GiJoint size={30} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">
                Inclusivity and sustainability
              </p>
              <div className="flex space-x-2 text-gray-400 text-sm">
                {/* <!-- svg  --> */}

                <IoPeopleOutline size={20} />
                <p>We have space for everyone</p>
              </div>
            </div>
          </div>

          {/* <!-- 3 card --> */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <FaHandsHelping size={30} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">
                Free Prior and Informed Consent (FPIC) to any activities
                undertaken.
              </p>
              <div className="flex space-x-2 text-gray-400 text-sm">
                {/* <!-- svg  --> */}
                <AiOutlineStop size={20} />
                <p>No restrictions</p>
              </div>
            </div>
          </div>

          {/* <!-- 4 card --> */}
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-yellow-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <FaHandHoldingHeart size={30} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">Non-violence</p>
              <div className="flex space-x-2 text-gray-400 text-sm">
                {/* <!-- svg  --> */}
                <AiOutlineSecurityScan size={20} />
                <p>no violence</p>
              </div>
            </div>
          </div>
          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <BiWorld size={20} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">
                Global partnership reflected in SDGs.
              </p>
            </div>
          </div>

          <div className="relative bg-white py-6 px-6 rounded-3xl w-64 my-4 shadow-xl">
            <div className=" text-white flex items-center absolute rounded-full py-4 px-4 shadow-xl bg-blue-500 left-4 -top-6">
              {/* <!-- svg  --> */}
              <GiFocusedLightning size={30} />
            </div>
            <div className="mt-8">
              <p className="text-xl font-semibold my-2">Kenya’s Vision 2030</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Values;
