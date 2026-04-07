import Header from "@/components/layout/header/Header";
import BannerCommon from "@/components/layout/banner/BannerCommon";
import NewsDetails from "@/components/containers/news/NewsDetails";
import Footer from "@/components/layout/footer/Footer";
import CustomCursor from "@/components/layout/CustomCursor";

const page = () => {
  return (
    <>
      <Header />
      <BannerCommon title="News Details" />
      <NewsDetails />
      <Footer />
      <CustomCursor />
    </>
  );
};

export default page;
