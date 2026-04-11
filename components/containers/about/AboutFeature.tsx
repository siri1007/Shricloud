import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-3.png";
import three from "@/public/img/gym-man.png";


const AboutFeature = () => {
  return (
    <section className="feature-hosting-section fix section-padding section-bg">
      <div className="container">
        <div className="feature-content-warpper style-2">
          <div className="row g-4 justify-content-between align-items-center">
            <div className="col-xl-5 col-lg-6">
              <div className="feature-hosting-content">
                <div className="section-title">
                  <span >
                    Best hosting
                  </span>
                  <h2
                   
                  >
                    Advance features for the  advanced user
                  </h2>
                </div>
                <p
                  className="mt-3 mt-md-0 "
                  
                >
                  ShriCloud delivers high-performance cloud hosting built for developers, businesses, and advanced users who need speed, flexibility, and full control. Our platform is optimized for scalability, security, and seamless deployment, ensuring your applications run smoothly at all times.
                </p>
                <div className="list-items">
                  <ul
                 
                  >
                    <li>
                      <i className="far fa-check"></i>
                      Branding and design Identity
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      One-Click App Installations
                    </li>
                  </ul>
                  <ul
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="500"
                  >
                    <li>
                      <i className="far fa-check"></i>
                      Unlimited Application Installation
                    </li>
                    <li>
                      <i className="far fa-check"></i>
                      24/7 system Monitoring
                    </li>
                  </ul>
                </div>
                <Link
                  href="about"
                  className="theme-btn "
                 
                >
                  Explore More <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-6 "
             
            >
              <div className="feature-hosting-image-2">
                <div className="icon-box-1">
                  <Image src={one} alt="img" priority />
                </div>
                <div className="icon-box-2">
                  <Image src={two} alt="img" priority />
                </div>
                <div className="thumb">
                  <Image src={three} alt="img" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFeature;
