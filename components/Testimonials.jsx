import React, { useEffect } from "react";
import { BiGitCommit } from "react-icons/bi";

const Testimonials = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });
  }, []);

  return (
    <section>
      <h1 className="text-center font-bold p-6">COMMITMENT DRIVING US</h1>
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="swiper-container !overflow-hidden">
          <div className="swiper-wrapper">
            <div className="swiper-slide ">
              <blockquote className="bg-gray-100 p-8 h-[800px]">
                <div className="flex items-center">
                  <BiGitCommit
                    size={30}
                    className="h-16 w-16 rounded-full object-cover"
                  />
                  <div className="ml-4 text-sm">
                    <p className="font-bold text-xl">Good governance</p>
                    <p className="mt-1 text-xl">Good governance to all</p>
                  </div>
                </div>

                <p className="relative mt-4 text-lg text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  The Sabaot communities, since the 1962 regional boundary have
                  wanted the Sabaot people in Bungoma to be joined to those in
                  Trans-Nzoia. The community feels being divided in two counties
                  “manufactures” them as a minority community; this makes them
                  lack the numbers to negotiate with the state for development.
                  Besides, putting the Sabaot in the same county will put the
                  management of Mt Elgon Forest in the same county- a move that
                  will effectively help to conserve this important water tower
                  in western Kenya and Eastern Uganda. This issue requires
                  further dialogue of all stakeholders.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </div>

            <div className="swiper-slide">
              <blockquote className="bg-gray-100 p-8 h-[770px]">
                <div className="flex items-center">
                  <BiGitCommit
                    size={30}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="ml-4 text-sm">
                    <p className="font-bold text-xl">Access to education</p>
                    <p className="mt-1 text-xl">Education for all</p>
                  </div>
                </div>

                <p className="relative text-xl mt-4 text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  Education is a big equalizer and yet the area experience high
                  levels of dropouts from primary to secondary; still others in
                  spite of passing for post-secondary institutions, do not make
                  it to middle level colleges or university. Enabling the youth
                  to access education opportunities, in the next 10- 20 years
                  will help shift the population from water catchment area to
                  pursue opportunities elsewhere. Thus bursaries for secondary,
                  college and university level are mandatory. In the same vein,
                  scholarships for masters and PhD students will be desirable.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </div>

            <div className="swiper-slide">
              <blockquote className="bg-gray-100 p-8 h-[770px]">
                <div className="flex items-center">
                  <BiGitCommit
                    size={30}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="ml-4 text-sm">
                    <p className="font-bold text-xl">Peace building</p>
                    <p className="mt-1 text-xl">Peace for all</p>
                  </div>
                </div>

                <p className="relative mt-4 text-xl text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  The Trans-Elgon communities have suffered both inter-ethnic
                  and intra-ethnic conflict. Interethnic conflict has pitted the
                  Sabaot with the Bukusu who are neighbors. The community
                  experienced one of the worst intra-ethnic conflicts in
                  2007/2008 due to the activities of the Sabaot Land defense
                  Force that caused the displacement of over 40,000 people in Mt
                  Elgon District alone. The SLDF brought polarization within the
                  Sabaot that necessitates peace building activities through
                  dialogue on diverse matters.
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </div>

            <div className="swiper-slide">
              <blockquote className="bg-gray-100 p-8 h-[770px]">
                <div className="flex items-center">
                  <BiGitCommit
                    size={30}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="ml-4 text-sm">
                    <p className="font-bold text-xl">Poverty alleviation</p>
                    <p className="mt-1 text-xl">Levelling for all</p>
                  </div>
                </div>

                <p className="relative mt-4 text-xl text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  The poverty levels among these communities is quite high due
                  to poor infrastructure such as piped water, impassible road
                  networks, lack of electricity, lack of agricultural value
                  addition infrastructure, and lack of access to credit. The
                  problem is exacerbated by small parcels of land and presence
                  of orphans especially due to deaths occasioned by the SLDF
                  militia. Apart from enhanced agricultural value addition, we
                  seek diverse interventions in development like offshore
                  business processing,development of tourism sector and the
                  industrial sector
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </div>

            <div className="swiper-slide">
              <blockquote className="bg-gray-100 p-8 h-[860px]">
                <div className="flex items-center">
                  <BiGitCommit
                    size={30}
                    className="h-16 w-16 rounded-full object-cover"
                  />

                  <div className="ml-4 text-sm">
                    <p className="font-bold text-xl">
                      Environmental conservation
                    </p>
                    <p className="mt-1 text-xl">Greener for all</p>
                  </div>
                </div>

                <p className="relative mt-4 text-xl text-gray-500">
                  <span className="text-xl">&ldquo;</span>
                  The communities occupy Mt Elgon and Cherangany hills that are
                  important water towers as they are sources of many rivers in
                  western Kenya and eastern Uganda. To ensure rivers with clean
                  water continue to flow, fauna (especially elephants, buffalos,
                  and others) and flora continue to thrive; livelihoods of these
                  communities require intervention. Also, the more than 50 caves
                  in the first escarpment are important ecology of self for the
                  Someek: the hunter and gatherer community that is currently in
                  dire needs. The caves are being degraded by individuals who
                  have started quarrying them. This should be addressed
                  immediately to protect the Someek ecology of self before it is
                  too late. Intervention here can work if carried out in the
                  next 10-20 years
                  <span className="text-xl">&rdquo;</span>
                </p>
              </blockquote>
            </div>
          </div>

          <div className="swiper-pagination !relative !bottom-0 mt-12"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
