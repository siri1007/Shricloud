import Image from "next/image";
import one from "@/public/img/choose/buddy.png";
import two from "@/public/img/choose/woo.png";
import three from "@/public/img/choose/contact.png";
import four from "@/public/img/choose/setup.png";

const HostingChooseTwo = () => {
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
           Elite Reseller Hosting Features
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
                <h3>Smart WordPress Ecosystem</h3>
                <p>
                  Seamlessly power advanced communities and dynamic platforms with enterprise-grade compatibility and optimized performance.
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
                <h3>Commerce-Ready Infrastructure</h3>
                <p>
                 Launch and scale high-performing online stores with lightning-fast checkout experiences and conversion-focused architecture.
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
                <h3>Advanced Lead Capture Systems</h3>
                <p>
                  Turn every interaction into opportunity with high-performance, secure, and fully adaptable form solutions designed for maximum conversions.
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
                <h3>Zero-Touch Deployment</h3>
                <p>
                  Launch fully configured websites instantly with seamless automation, eliminating manual setup and accelerating time-to-market.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingChooseTwo;
