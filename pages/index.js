import Hero from "@/components/Hero";
import Slider from "@/components/Slider";
import Head from "next/head";
import Image from "next/image";
import { SliderData } from "@/components/SliderData";
import Instagram from "@/components/Instagram";
import Values from "@/components/Values";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Teda NGO</title>
        <meta
          name="description"
          content="TEDA NGO(TRANS-ELGON INDIGENOUS DEVELOPMENT AGENCY) is a non-governmental organization registered to engage in sustainable development amongst indigenous communities in Bungoma and Trans-Nzoia Counties. The two counties house Mt Elgon and Cherang’any water towers in western Kenya."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Slider slides={SliderData} />
      <Values />
      <Footer />
    </>
  );
}
