// import Header from "@/components/layout/header/Header";
// import ResellerBanner from "@/components/layout/banner/ResellerBanner";
// import PricingHome from "@/components/containers/home/PricingHome";
// import HostingChooseThree from "@/components/containers/hosting/HostingChooseThree";
// import HomeTwoCta from "@/components/containers/home-two/HomeTwoCta";
// import FaqSection from "@/components/containers/faq/FaqSection";
// import Testimonial from "@/components/containers/support/Testimonial";
// import Brand from "@/components/containers/support/Brand";
// import Footer from "@/components/layout/footer/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";
// import ResellerHostingplan from "@/components/Resellersections/ResellerSection";
// import HostingEnterprise from "@/components/Resellersections/HostingEnterprise";

// const page = () => {
//   return (
//     <>
//       <Header />
//       <ResellerBanner />

   
//       <PricingHome />

//           <ResellerHostingplan />

//       <HostingChooseThree />
//       {/* <HomeTwoCta /> */}
//       {/* <FaqSection /> */}
     
//       <HostingEnterprise />
//       <Testimonial />
//       <Brand />
//       <Footer />
//       <CustomCursor />
//     </>
//   );
// };

// export default page;



import type { Metadata } from "next";
import ResellerPageClient from "./ResellerPageClient";

export const metadata: Metadata = {
  title: " Reseller Hosting | Fast, Secure & Cheap",

  description:
    "Launch Your Own Hosting Enterprise with the Best Reseller Hosting in India! Provide your clients with unlimited scalability...",

  keywords: [
    "Reseller hosting",
    "reseller hosting", 
    "reseller web hosting", 
    "cheap reseller hosting",
"best reseller hosting", 
"reseller hosting plans, buy reseller hosting",
"reseller hosting provider", "reseller hosting services",
  
  ],
};

export default function Page() {
  return <ResellerPageClient />;
}