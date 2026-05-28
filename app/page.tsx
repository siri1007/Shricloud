

// // -----

// "use client";

// import { useRef } from "react";


// import type { Metadata } from "next";

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
// import DataCenter from "@/components/DataCenter/DataCenter";
// import Brand from "@/components/containers/support/Brand";

// export const metadata: Metadata = {
//   title: "ShriCloud | Premium Cloud Hosting with a Free Domain",
//   description:
//     "ShriCloud offers top web hosting with free domain and 24/7 support, perfect for businesses and individuals in India.",

//   keywords: [
//     "web hosting",
//     "cloud hosting",
//     "wordpress hosting",
//     "vps hosting",
//     "free domain",
//     "Shricloud",
//   ],
// };

// export default function Page() {

//     const scrollToPricing = () => {
//     const section = document.getElementById("pricing");
    
//     if (section) {
//       section.scrollIntoView({
//         behavior: "smooth",
//       });
//     }
//   };
  
//   return (
//     <>
//       <Header />
//       <Banner scrollToPricing={scrollToPricing} />

//       <AboutTeam />

//       {/* <DomainSection /> */}

//       <HostingHome />

//     <div id="pricing">
//        <HomeThreePricing />
//       </div>
     

//       <HostingHero />

//       <HostingBenefits />

//       <FaqSection />

//       <DataCenter />

//       <HomeTestimonial />

//       <Brand />

//       <Footer />

//       <CustomCursor />
//     </>
//   );
// }



import type { Metadata } from "next";
// import Header from "@/components/Header";
import HomePageClient from "./HomePageClient";

export const metadata: Metadata = {
  title: "ShriCloud | Premium Cloud Hosting with a Free Domain",
  description:
    "ShriCloud offers top web hosting with free domain and 24/7 support, perfect for businesses and individuals in India.",
};

export default function Home() {
  return (
    <>
      <HomePageClient />
    </>
  );
}

