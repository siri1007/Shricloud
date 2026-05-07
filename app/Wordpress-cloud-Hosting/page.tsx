

"use client";

import { useRef } from "react";

import Header from "@/components/layout/header/Header";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import DataCenter from "@/components/DataCenter/DataCenter";
import WordpressPricing from "@/components/containers/home-three/WordpressPricing";
import WordpressBanner from "@/components/layout/banner/WordpressBanner";
import StackCards from "@/components/StackCards/StackCards";
import FaqSection from "@/components/containers/faq/WpFAQSection";

const Page = () => {
  const pricingRef = useRef<HTMLDivElement | null>(null);

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <WordpressBanner scrollToPricing={scrollToPricing} />

      <div ref={pricingRef}>
        <WordpressPricing />
      </div>

      <PricingChoose />
      <StackCards />
      <FaqSection />
      <DataCenter />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default Page;