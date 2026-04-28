import Link from "next/link";
import Image from "next/image";

import five from "@/public/img/hero/activity.png";
import six from "@/public/img/N8n-banner.png";
// import N8nBanner from "@/public/img/N8n-banner.png";

const N8nBanner = () => {
  return (
    <section
      className="hero-section hero-1 style-hosting bg-cover fix"
      style={{
  backgroundImage: "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(/img/hero/hero-bg-1.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
}}
    >
     
      <div className="container">
        <div className="row g-4 justify-content-between align-items-center">
          <div className="col-lg-7">
            <div className="hero-content">
              <span
                className="sub-text-2 "
                
              >
                <Image src={five} alt="img" priority className="me-2" />
              Power Your Automation Infrastructure

              </span>
              <h1
               
              >
                Build, Run, and Scale
 <br />
                AI Workflows — On
Your Own Terms
              </h1>
              <div
                className="hero-list-items "
              
                aria-errormessage=".5s"
              >
                <ul className="hero-list">
                  <li>
                    <i className="fa-solid fa-check"></i>
                   Unlimited workflow executions — zero throttle
                  </li>
                  <li>
                    <i className="fa-solid fa-check"></i>
                   Full data privacy & sovereign control
                  </li>

                   <li>
                    <i className="fa-solid fa-check"></i>
                    Seamless integrations with any API or toolchain
                  </li>
                </ul>
                
              </div>
              <Link
                href="pricing"
                className="theme-btn bg-color-2 "
               
              >
                view plan <i className="fas fa-long-arrow-alt-right"></i>
              </Link>
            </div>
          </div>
          <div
            className="col-lg-3 "
          >
            {/* <div className="hero-image">
              <Image src={six} alt="img" priority />
            </div> */}
            <div className="hero-image" style={{ marginLeft: "-190px" }}>
  <Image src={six} alt="img" priority />
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default N8nBanner;
