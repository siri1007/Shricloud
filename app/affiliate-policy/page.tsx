import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import AffiliatePolicy from "@/components/AffiliatePolicy/AffiliatePolicy"


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Affiliate Policy",

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
      <BannerCommon title="Affiliate Policy" />
      
    <AffiliatePolicy/>
      
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;