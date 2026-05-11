import Header from "@/components/layout/header/Header";
import ResellerBanner from "@/components/layout/banner/ResellerBanner";
import PricingHome from "@/components/containers/home/PricingHome";
import HostingChooseThree from "@/components/containers/hosting/HostingChooseThree";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import FaqSection from "@/components/containers/faq/FaqSection";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import ResellerHostingplan from "@/components/Resellersections/ResellerSection";
import HostingEnterprise from "@/components/Resellersections/HostingEnterprise";

const page = () => {
  return (
    <>
      <Header />
      <ResellerBanner />

   
      <PricingHome />

          <ResellerHostingplan />

      <HostingChooseThree />
      {/* <HomeTwoCta /> */}
      {/* <FaqSection /> */}
     
      <HostingEnterprise />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
