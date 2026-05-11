


// "use client";



// import Header from "@/components/layout/header/Header";
// import DedicatedBanner from "@/components/layout/banner/DedicatedBanner";

// import HostingChoose from "@/components/containers/hosting/HostingChoose";
// import DedicatedFaq from "@/components/containers/faq/DedicatedFaq";

// import Testimonial from "@/components/containers/support/Testimonial";
// import Brand from "@/components/containers/support/Brand";
// import Footer from "@/components/layout/footer/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";

// import IncludedSection from "@/components/containers/Dedicatedpage/IncludedSection";
// import DedicatedPricing from "@/components/containers/Dedicatedpage/DedicatedPricing";

// const page = () => {

//   return (
//     <>
//       <Header />
      
//  <DedicatedBanner />
      
//         <DedicatedPricing />
//       <DedicatedFaq />
//        <HostingChoose />

//       {/* <HomeThreePricing /> */}
//       {/* <HomeHostingTwo /> */}
//   <IncludedSection />
      
//  <Testimonial />
//     <Brand />
//         {/* <IncludedSection /> */}
//      <Footer />
//     <CustomCursor />
     
//     </>
//   );
// };

// export default page;







import type { Metadata } from "next";
import DedicatedPageClient from "./DedicatedPageClient";

export const metadata: Metadata = {
  title: "Powerful Bare Metal Server Plans",

  description:
    "Speed, Security, and Scale: Included with the best WordPress Hosting by AWS Servers.",

  keywords: [
    "dedicated hosting,",
    " dedicated server hosting,",
    "dedicated web hosting",
    " managed dedicated hosting",
"unmanaged dedicated server", 
"bare metal dedicated server",
    "best dedicated hosting 2026,"
  ],
};

export default function Page() {
  return <DedicatedPageClient />;
}