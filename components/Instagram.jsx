import React from "react";
import IgImg1 from "../public/ig-img-1.jpeg";
import IgImg2 from "../public/ig-img-2.jpeg";
import IgImg3 from "../public/ig-img-3.jpeg";
import IgImg4 from "../public/ig-img-4.jpeg";
import IgImg5 from "../public/ig-img-5.jpeg";
import IgImg6 from "../public/ig-img-6.jpeg";
import Instagramg from "./Instagramg";

const Instagram = () => {
  return (
    <div className="max-w-[1240] mx-auto text-center py-24">
      <p>Follow me on instagram</p>
      <p className="pb-4">@Captur</p>
      <div className="grid grid-cols-2 md:grids-cols-3 lg:grid-cols-6 gap-2 p-4">
        <Instagramg socialImage={IgImg1} />
        <Instagramg socialImage={IgImg2} />
        <Instagramg socialImage={IgImg3} />
        <Instagramg socialImage={IgImg4} />
        <Instagramg socialImage={IgImg5} />
        <Instagramg socialImage={IgImg6} />
      </div>
    </div>
  );
};

export default Instagram;
