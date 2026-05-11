import Header from "@/components/layout/header/Header";
import BannerFour from "@/components/layout/banner/BannerFour";
import DomainSectionTwo from "@/components/containers/hosting/DomainSectionTwo";
import DomainList from "@/components/containers/hosting/DomainList";

import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import DomainFaq from "@/components/containers/faq/DomainFaq";



import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Shricloud-Check Domain",

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
      <BannerFour />
      <DomainList />
      <DomainSectionTwo />
      {/* <HomeTwoCta /> */}
      {/* <PricingChoose /> */}
      {/* <Testimonial /> */}
      {/* <Brand /> */}
      {/* <FaqSection /> */}
      <DomainFaq />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
