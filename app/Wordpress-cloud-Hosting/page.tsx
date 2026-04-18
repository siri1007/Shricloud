import Header from "@/components/layout/header/Header";
import BannerShared from "@/components/layout/banner/BannerShared";
import PricingChoose from "@/components/containers/pricing/PricingChoose";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
import HomeFourHosting from "@/components/containers/home-four/HomeFourHosting";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
// import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HomeFourPricing from "@/components/containers/home-three/WordpressPricing";

import DataCenter from "@/components/DataCenter/DataCenter";
import WordpressPricing from "@/components/containers/home-three/WordpressPricing";

import WordpressBanner from "@/components/layout/banner/WordpressBanner";

import AiSection from "@/components/containers/home-three/AISection";
import HeroSection from "@/components/containers/home-two/HeroSection";
import StackCards from "@/components/StackCards/StackCards"; // adjust path if needed

import FAQSection from "@/components/containers/faq/WpFAQSection";
import FaqSection from "@/components/containers/faq/WpFAQSection";

const page = () => {
  return (
    <>
      <Header />
      {/* <BannerShared />*/}
     <WordpressBanner/>
 <WordpressPricing />
      <PricingChoose />
       {/* <HomeFourPricing /> */}
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

export default page;
