import RefundPolicy from "@/components/RefundPolicy/RefundPolicy";







import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy",

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
      <BannerCommon title="Refund Policy" />
      
    <RefundPolicy />
      
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;