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
import EliteBanner from "@/components/layout/banner/EliteBanner";
import ElitePricing from "@/components/ElitePage/ElitePricing";

import ChooseElite from "@/components/ChooseElite/ChooseElite";
const page = () => {
  return (

    
    <>
      <Header />
      <EliteBanner />
      <ElitePricing/>
      <HostingChooseTwo />

      {/* <HomeThreePricing /> */}
      <HomeHostingTwo />
      <ChooseElite />
      <Testimonial />
      <Brand />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;


