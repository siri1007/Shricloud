import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import HomeThreeAbout from "@/components/containers/home-three/HomeThreeAbout";
import AboutFeature from "@/components/containers/about/AboutFeature";
import AboutTeam from "@/components/containers/about/AboutTeam";
import HomeFourChooseTwo from "@/components/containers/home-four/HomeFourChooseTwo";
import HomeFourTestimonial from "@/components/containers/home-four/HomeFourTestimonial";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
 import DataCenter from "@/components/DataCenter/DataCenter";

// import HomeTwoLocation from "@/components/containers/home-two/HomeTwoLocation";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="About Us" />
      <HomeThreeAbout />
      <AboutFeature />
      <AboutTeam />

       <DataCenter />
      <HomeFourChooseTwo />
      
      <HomeFourTestimonial />
       {/* <HomeTwoLocation /> */}


      

 

      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
