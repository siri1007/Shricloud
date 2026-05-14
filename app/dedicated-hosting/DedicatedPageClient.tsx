


"use client";





import { useRef } from "react";

import Header from "@/components/layout/header/Header";
import DedicatedBanner from "@/components/layout/banner/DedicatedBanner";

import HostingChoose from "@/components/containers/hosting/HostingChoose";
import DedicatedFaq from "@/components/containers/faq/DedicatedFaq";

import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import IncludedSection from "@/components/containers/Dedicatedpage/IncludedSection";
import DedicatedPricing from "@/components/containers/Dedicatedpage/DedicatedPricing";

const page = () => {

  const pricingRef = useRef<HTMLDivElement | null>(null);
    
      const scrollToPricing = () => {
        pricingRef.current?.scrollIntoView({ behavior: "smooth" });
      };

  return (
    <>
      <Header />
      
 <DedicatedBanner  scrollToPricing={scrollToPricing}   />
      
        

         <div ref={pricingRef}>
       <DedicatedPricing />
      </div>
          <IncludedSection />
      <DedicatedFaq />
       {/* <HostingChoose /> */}

      {/* <HomeThreePricing /> */}
      {/* <HomeHostingTwo /> */}

      
 <Testimonial />
    <Brand />
        {/* <IncludedSection /> */}
     <Footer />
    <CustomCursor />
     
    </>
  );
};

export default page;





