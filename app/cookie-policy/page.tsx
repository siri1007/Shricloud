



import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import CookiePolicy from "@/components/CookiePolicy/CookiePolicy";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Cookie Policy" />
      
      <CookiePolicy />
      
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;