
"use client";


import { useRef } from "react";

import Header from "@/components/layout/header/Header";
import ResellerBanner from "@/components/layout/banner/ResellerBanner";
import PricingHome from "@/components/containers/home/PricingHome";
import HostingChooseThree from "@/components/containers/hosting/HostingChooseThree";
import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ResellerHostingplan from "@/components/Resellersections/ResellerSection";
import HostingEnterprise from "@/components/Resellersections/HostingEnterprise";
import ResellerFaq from "@/components/containers/faq/Resellerfaq";

const page = () => {

   const pricingRef = useRef<HTMLDivElement | null>(null);
  
    const scrollToPricing = () => {
      pricingRef.current?.scrollIntoView({ behavior: "smooth" });
    };
  
  return (
    <>
      <Header />
      <ResellerBanner  scrollToPricing={scrollToPricing}   />

   
    <div ref={pricingRef}>
       <PricingHome  />
      </div>
      {/* <PricingHome  ref={pricingRef}/> */}

          <ResellerHostingplan />
          

      <HostingChooseThree />
      {/* <FaqSection /> */}
     
      <HostingEnterprise />
      <ResellerFaq />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
