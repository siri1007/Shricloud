// import Header from "@/components/layout/header/Header";
// import DedicatedBanner from "@/components/layout/banner/DedicatedBanner";
// // import AffiliateProgram from "@/components/containers/Dedicatedpage/AffiliateProgram";
// import HostingChoose from "@/components/containers/hosting/HostingChoose";
// import HostingFeature from "@/components/containers/hosting/HostingFeature";
// import DedicatedFaq from "@/components/containers/faq/DedicatedFaq";
// import Testimonial from "@/components/containers/support/Testimonial";
// import Brand from "@/components/containers/support/Brand";
// import Footer from "@/components/layout/footer/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";
// import DedicatedPricing from "@/components/containers/Dedicatedpage/DedicatedPricing";
// import IncludedSection from "@/components/containers/Dedicatedpage/IncludedSection";

// // import <Dedicatedfaq></Dedicatedfaq>
// const page = () => {
//   return (
//     <>
//       <Header />
//       <DedicatedBanner />
//       {/* // <AffiliateProgram /> */}
//         <DedicatedPricing />
//       <HostingChoose />
      
//       {/* <HostingFeature /> */}
//       {/* <FaqSection /> */}
//       <DedicatedFaq />
//       {/* <IncludedSection /> */}
//       <Testimonial />
//       <Brand />
//        <IncludedSection />
//       <Footer />
//       <CustomCursor />
//     </>
//   );
// };

// export default page;




"use client";



import Header from "@/components/layout/header/Header";
import DedicatedBanner from "@/components/layout/banner/DedicatedBanner";

import HostingChoose from "@/components/containers/hosting/HostingChoose";
import DedicatedFaq from "@/components/containers/faq/DedicatedFaq";

import Testimonial from "@/components/containers/support/Testimonial";
import Brand from "@/components/containers/support/Brand";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

import IncludedSection from "@/components/containers/Dedicatedpage/IncludedSection";
import DedicatedPricing from "@/components/containers/Dedicatedpage/DedicatedPricing";

const page = () => {

  return (
    <>
      <Header />
      
 <DedicatedBanner />
      
        <DedicatedPricing />
     
       <HostingChoose />
 <DedicatedFaq />
      {/* <HomeThreePricing /> */}
      {/* <HomeHostingTwo /> */}

      
 <Testimonial />
    <Brand />
        <IncludedSection />
     <Footer />
    <CustomCursor />
     
    </>
  );
};

export default page;
