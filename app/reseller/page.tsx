import Header from "@/components/layout/header/Header";
import ResellBanner from "@/components/layout/banner/ResellerBanner";
import ResellerPricing from "@/components/containers/home/ResellerPricing";
import HostingChooseThree from "@/components/containers/hosting/HostingChooseThree";
import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
import FaqSection from "@/components/containers/faq/Resellerfaq";
import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <ResellBanner />
      <ResellerPricing />
      <HostingChooseThree />
      <HomeTwoCta />
      <FaqSection />
      <Testimonial />
      <Brand />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
