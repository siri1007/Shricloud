





import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import TermsOfService from "@/components/TermsOfService/TermsOfService";


import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms Of Service",

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
      <BannerCommon title="Terms of Service" />
      
      <TermsOfService />
      
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;