import Header from "@/components/layout/header/Header";
import N8nBanner from "@/components/layout/banner/N8nBanner";

import HomeFourFeature from "@/components/containers/home-four/HomeFourFeature";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import NnFaq from "@/components/containers/faq/NnFaq";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
// import NnPricing from "@/components/NnPage/NnPricing;
import NnPricing from "@/components/NnPage/NnPricing";
import Nnservices from "@/components/NnPage/Nnservices";
import AutomationSection from "@/components/NnPage/AutomationSection";

const page = () => {
  return (
    <>
      <Header />
      <N8nBanner />
         <NnPricing />
      {/* <HostingFeatureThree /> */}
      {/* <HostingPricing /> */}
      {/* <NnPricing /> */}
        <Nnservices />
      {/* <HomeFourFeature /> */}
      <AutomationSection />
       <NnFaq />
      <Testimonial />
      <Brand />
      {/* <NnFaq /> */}
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
