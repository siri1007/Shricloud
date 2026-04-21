"use client";

import { useRef } from "react";


import Header from "@/components/layout/header/Header";
import WordpressBanner from "@/components/layout/banner/WordpressBanner";
import HostingChooseTwo from "@/components/containers/hosting/HostingChooseTwo";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HomeHostingTwo from "@/components/containers/home/HomeHostingTwo";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {

   const pricingRef = useRef<HTMLDivElement | null>(null);
  
    const scrollToPricing = () => {
      pricingRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
  return (



    <>
      <Header />
      <WordpressBanner
  scrollToPricing={() => {
    document
      .getElementById("pricing")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
/>


      <HostingChooseTwo />

      <div id="pricing">
  <HomeThreePricing />
</div>
     
      <HomeHostingTwo />
      <Testimonial />
      <Brand />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
