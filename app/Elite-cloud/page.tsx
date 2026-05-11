// "use client";

// import { useRef } from "react";

// import Header from "@/components/layout/header/Header";
// import WordpressBanner from "@/components/layout/banner/WordpressBanner";
// import HostingChooseTwo from "@/components/containers/hosting/HostingChooseTwo";
// import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";
// import HomeHostingTwo from "@/components/containers/home/HomeHostingTwo";
// import Testimonial from "@/components/containers/support/Testimonial";
// import Brand from "@/components/containers/support/Brand";
// import FaqSection from "@/components/containers/faq/FaqSection";
// import Footer from "@/components/layout/footer/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";
// import EliteBanner from "@/components/layout/banner/EliteBanner";
// import ElitePricing from "@/components/ElitePage/ElitePricing";
// import DataCenter from "@/components/DataCenter/DataCenter";

// import TechStack from "@/components/ChooseElite/TechStack";
// import EliteFAQSection from "@/components/containers/faq/EliteFAQSection";
// import ChooseElite from "@/components/ChooseElite/ChooseElite";
// const page = () => {
//   const pricingRef = useRef<HTMLDivElement | null>(null);

//   return (
//     <>
//       <Header />
//       <EliteBanner
//         scrollToPricing={() => {
//           pricingRef.current?.scrollIntoView({ behavior: "smooth" });
//         }}
//       />

//       <div ref={pricingRef}>
//         <ElitePricing />
//       </div>
//         <ChooseElite />
//       <HostingChooseTwo />
      

//       {/* <HomeThreePricing /> */}
//       {/* <HomeHostingTwo /> */}

    
// <TechStack />
    
//       <EliteFAQSection />
//       <DataCenter />
//       <Testimonial />
//       <Brand />

//       <Footer />
//       <CustomCursor />
//     </>
//   );
// };

// export default page;




import type { Metadata } from "next";
import ElitePageClient from "./ElitePageClient";

export const metadata: Metadata = {
  title: "Best Web Hosting for Ecommerce & High Traffic Websites ",

  description:
    "Experience ultrafast speeds with Elite Cloud, the Best Web Hosting for Ecommerce and High Traffic Websites in India.",

  keywords: [
    "shricloud",
  "elite hosting",
   "elite web hosting", 
  "elite hosting plans",
"elite hosting services",
 "elite hosting provider"
  ],
};

export default function Page() {
  return <ElitePageClient />;
}