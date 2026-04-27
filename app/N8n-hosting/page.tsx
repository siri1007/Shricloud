import Header from "@/components/layout/header/Header";
import N8nBanner from "@/components/layout/banner/N8nBanner";
import HostingFeatureThree from "@/components/containers/hosting/HostingFeatureThree";
import HostingPricing from "@/components/containers/hosting/HostingPricing";
import HomeFourFeature from "@/components/containers/home-four/HomeFourFeature";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import FaqSection from "@/components/containers/faq/FaqSection";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
// import NnPricing from "@/components/NnPage/NnPricing;
import NnPricing from "@/components/NnPage/NnPricing";

const page = () => {
  return (
    <>
      <Header />
      <N8nBanner />
      <HostingFeatureThree />
      {/* <HostingPricing /> */}
      <NnPricing />
      <HomeFourFeature />
      <Testimonial />
      <Brand />
      <FaqSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
