// import Header from "@/components/layout/header/Header";
// import Banner from "@/components/layout/banner/Banner";
// import DomainSection from "@/components/containers/home/DomainSection";
// import HostingHome from "@/components/containers/home/HostingHome";
// import PricingHome from "@/components/containers/home/PricingHome";
// import HomeCta from "@/components/containers/home/HomeCta";

// import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
// import FaqSection from "@/components/containers/faq/HomeFaq";

// import Footer from "@/components/layout/footer/Footer";
// import CustomCursor from "@/components/layout/CustomCursor";
// import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";

// import HostingHero from "@/components/containers/home/HostingHero";
// import AboutTeam from "@/components/containers/about/AboutTeam";
// import HostingBenefits from "@/components/containers/home/HostingBenefits";
// // import Testimonial from "@/components/containers/support/Testimonial";
// import DataCenter from "@/components/DataCenter/DataCenter";
// // import Testimonial from "@/components/containers/support/Testimonial";
// import Brand from "@/components/containers/support/Brand";
// const page = () => {
//   return (
//     <>
//       <Header />
//       <Banner />
//          <AboutTeam />
//       {/* <DomainSection /> */}
//       <HostingHome />
     
//       <HomeThreePricing />
//       <HostingHero />
//         <HostingBenefits/>
    
     
      
//        <FaqSection />
//          <DataCenter />
//       <HomeTestimonial />
//       <Brand />
    
  
     
   
      
//       <Footer />
//       <CustomCursor />
//     </>
//   );
// };

// export default page;



// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Home",
//   description: "Shricloud Hosting Services",
// };

// export default function HomePage() {
//   return (
//     <main>
//       <h1>Welcome to Shricloud</h1>
//     </main>
//   );
// }


// -----


import type { Metadata } from "next";

import Header from "@/components/layout/header/Header";
import Banner from "@/components/layout/banner/Banner";
import DomainSection from "@/components/containers/home/DomainSection";
import HostingHome from "@/components/containers/home/HostingHome";
import PricingHome from "@/components/containers/home/PricingHome";
import HomeCta from "@/components/containers/home/HomeCta";

import HomeTestimonial from "@/components/containers/home/HomeTestimonial";
import FaqSection from "@/components/containers/faq/HomeFaq";

import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import HomeThreePricing from "@/components/containers/home-three/HomeThreePricing";

import HostingHero from "@/components/containers/home/HostingHero";
import AboutTeam from "@/components/containers/about/AboutTeam";
import HostingBenefits from "@/components/containers/home/HostingBenefits";
import DataCenter from "@/components/DataCenter/DataCenter";
import Brand from "@/components/containers/support/Brand";

export const metadata: Metadata = {
  title: "ShriCloud | Premium Cloud Hosting with a Free Domain",
  description:
    "ShriCloud offers top web hosting with free domain and 24/7 support, perfect for businesses and individuals in India.",

  keywords: [
    "web hosting",
    "cloud hosting",
    "wordpress hosting",
    "vps hosting",
    "free domain",
    "Shricloud",
  ],
};

export default function Page() {
  return (
    <>
      <Header />
      <Banner />

      <AboutTeam />

      {/* <DomainSection /> */}

      <HostingHome />

      <HomeThreePricing />

      <HostingHero />

      <HostingBenefits />

      <FaqSection />

      <DataCenter />

      <HomeTestimonial />

      <Brand />

      <Footer />

      <CustomCursor />
    </>
  );
}