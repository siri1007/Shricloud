import Image from "next/image";
import one from "@/public/img/choose/safe-icon.png";
import two from "@/public/img/choose/bank-icon.png";
import three from "@/public/img/choose/secured-icon.png";
import four from "@/public/img/choose/support-icon.png";

const PricingChoose = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-bg "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Why Choose Us
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            Why Choose Shricloud
          </h2>
        </div>
        <div className="choose-us-top-inner">
          <ul>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">
              Step One
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
              Step Two
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">
              Step Three
            </li>
            <li data-aos="fade-up" data-aos-duration="800" data-aos-delay="800">
              Step Four
            </li>
          </ul>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>Affordability</h3>
                <p>
                 We provide premium web hosting that’s easy on your budget without compromising on quality, ensuring you get the best value.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>Speed</h3>
                <p>
                 Expect top-notch speed & unwavering reliability with our premium web hosting, keeping your website always accessible.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>Free Backups</h3>
                <p>
                 We take a full backup of your account every 24 hours, stored offsite for 30 days, counting to total 30 backups a month.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Safe & Secure</h3>
                <p>
               Your website’s safety is our priority. We employ advanced security to protect your data and provide peace of mind.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingChoose;
