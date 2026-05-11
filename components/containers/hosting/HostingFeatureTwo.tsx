import Image from "next/image";
import one from "@/public/img/choose/ram.png";
import two from "@/public/img/choose/ssd.png";
import three from "@/public/img/choose/backups.png";
import four from "@/public/img/choose/security.png";
import five from "@/public/img/choose/safe-icon.png";
import six from "@/public/img/choose/bank-icon.png";
import seven from "@/public/img/choose/secured-icon.png";
import eight from "@/public/img/choose/support-icon.png";

const HostingFeatureTwo = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
           
          >
            Features
          </span>
          <h2>
            Quick Look on Our <br /> VPS Features
          </h2>
        </div>
        <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>RAM & Storage</h3>
                <p>
               High-performance RAM and fast NVMe storage to keep your website running smoothly and reliably at all times.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>SSDs, Email & SSL</h3>
                <p>
                 Enjoy ultra-fast SSD storage, business email, and free SSL to keep your data secure and your brand trusted.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>Daily Backups</h3>
                <p>
                  Automatic daily backups to keep your data safe  anytime , so you can restore your website anytime without
                  stress.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
        
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Maximum Security</h3>
                <p>
                Advanced security layers and real-time monitoring to protect your server from threats and unauthorized access..
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
          
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>Safe and Secured</h3>
                <p>
                Your data is hosted in secure environments with strict protection protocols to ensure complete safet
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>Money-Back Guarantee</h3>
                <p>
                 Try our services risk-free with a 7-day money-back guarantee, giving you complete peace of mind.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
         
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={seven} alt="img" priority />
              </div>
              <div className="content">
                <h3>Safe and Secured</h3>
                <p>
               End-to-end protection with encrypted connections and secure infrastructure to keep your data safe at all times.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={eight} alt="img" priority />
              </div>
              <div className="content">
                <h3>Dedicated Support</h3>
                <p>
                 24/7 expert support is always available to help you anytime through chat, or support tickets.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingFeatureTwo;
