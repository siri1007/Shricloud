import PrivacyPolicy from "@/components/PrivacyPolicy/PrivacyPolicy";
import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";



import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Privacy Policy",

  description:
    "",

  keywords: [
    "",
   
  ],
};


const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Privacy Policy" />
      
    <PrivacyPolicy />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;


