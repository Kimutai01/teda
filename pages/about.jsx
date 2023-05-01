import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";

const about = () => {
  return (
    <div>
      <Hero heading={"About"} image="about-img" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 text-center">
        <div>
          <h3 className="text-center font-semibold text-3xl">Vision</h3>
          <p className="text-2xl">
            TEDA seeks to be an NGO of choice in working with Indigenous
            communities, like minded organizations, Government of Kenya and the
            international community for sustainable development in the
            Trans-Elgon Region.
          </p>
        </div>

        <div>
          <h3 className="text-center font-semibold text-3xl">Mission</h3>
          <p className="text-2xl">
            TEDA is a non-governmental organization registered to engage in
            sustainable development amongst indigenous communities in Bungoma
            and Trans-Nzoia Counties. The two counties house Mt Elgon and
            Cherang’any water towers in western Kenya.
          </p>
        </div>
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
};

export default about;
