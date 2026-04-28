import Image from "next/image";
import one from "@/public/img/choose/safe-icon.png";
import two from "@/public/img/choose/bank-icon.png";
import three from "@/public/img/choose/secured-icon.png";
import four from "@/public/img/choose/support-icon.png";

const HostingChoose = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            
          >
            Features
          </span>
          <h2 >
            Dedicated Hosting Features
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
                <h3>High-Performance </h3>
                <p>
                  Seamlessly deliver high-performance servers. Efficiently optimize dedicated infrastructure for speed, stability, and reliability.
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
                <h3> Security Protection</h3>
                <p>
                  Proactively secure server environments. strengthen dedicated protection with real-time monitoring and threat defense.
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
                <h3>Flexible Pricing</h3>
                <p>
                  Clearly structure hosting plans.  deliver flexible pricing with reliable guarantee and  <br></br> customer-first  
                transparency.
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
                <h3>24/7 Expert Support</h3>
                <p>
                  Reliably assist server operations. Continuously provide expert support with fast response and proactive issue resolution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingChoose;
