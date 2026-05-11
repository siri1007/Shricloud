import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import ChooseUs from "@/components/containers/support/ChooseUs";
// import MainContact from "@/components/containers/support/MainContact";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import type { Metadata } from "next";
import SupportSection from "@/components/containers/support/SupportSection";

export const metadata: Metadata = {
  title: "Contact Us",

  description:
    "Learn more about ShriCloud, our hosting infrastructure, cloud solutions, and customer-focused services.",

  keywords: [
    "Contact shricloud",
   
  ],
};

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="Contact Us" />
      <ChooseUs />
      {/* <MainContact /> */}
      <SupportSection />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
