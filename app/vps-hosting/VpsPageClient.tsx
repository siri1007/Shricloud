

"use client";

import { useRef } from "react";



import Header from "@/components/layout/header/Header";
import VpsBanner from "@/components/layout/banner/VpsBanner";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HostingFeatureTwo from "@/components/containers/hosting/HostingFeatureTwo";
// import HostingTab from "@/components/containers/hosting/HostingTab";
import FaqSection from "@/components/containers/faq/vpsfaq";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import CloudVpsPlans from "@/components/containers/CloudVpspalns/CloudVpsPlans";
import CloudWhychoose from "@/components/containers/CloudVpspalns/CloudVpsWhyChoose";
import CloudVpsHero from "@/components/containers/CloudVpspalns/CloudVpsHero";
import DataCenter from "@/components/DataCenter/DataCenter";



const page = () => {
   const pricingRef = useRef<HTMLDivElement | null>(null);
  return (
    <>
      <Header />
      <VpsBanner 
      scrollToPricing={() => {
          pricingRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
        />
      <div ref={pricingRef}>

      <CloudVpsPlans />
      </div>

      {/* <HomeThreePricing /> */}
      <CloudVpsHero />
      <HostingFeatureTwo />
      {/* <CloudWhychoose /> */}
      {/* <HostingTab /> */}
        <DataCenter />
      <FaqSection />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
