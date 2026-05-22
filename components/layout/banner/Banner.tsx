import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hero/hero-1-circle-left.png";
import five from "@/public/img/hero/activity.png";
import seven from "@/public/img/hero/hero-llustration.png";
// import Mediaqueries from "@/components/layout/banner/Bannermediaqueries.module.scss";

const Banner = () => {
  return (
    <section
      className="hero-section hero-1 bg-cover fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-1.jpg)",
      }}
    >
      <div className="circle-shape-left">
        <Image src={one} alt="shape-img" />
      </div>

     
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-6">
            <div className="hero-content">
              <span className="sub-text ">
                <Image src={five} alt="img" priority className="me-2" />
                Everything You Need to Create a Website
              </span>
              <h1>Upgrade To Shricloud Cloud Hosting Today</h1>

              <h6
                style={{
                  fontSize: "16px",
                  lineHeight: "28px",
                  color: "#ffffff",
                  marginTop: "18px",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "10px" }}
                >
                  <span style={{ color: "#FFA31A", fontSize: "18px" }}>✔</span>
                  <span>
                    <strong>Domain:</strong> Free.
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <span style={{ color: "#FFA31A", fontSize: "18px" }}>✔</span>
                  <span>
                    <strong>Migration:</strong> Seamless.
                  </span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginTop: "10px",
                  }}
                >
                  <span style={{ color: "#FFA31A", fontSize: "18px" }}>✔</span>
                  <span>
                    <strong>Support:</strong> Constant.
                  </span>
                </div>
              </h6>

              <div className="hero-author">
                <Link href="/" className="theme-btn bg-color-2 ">
                  Start Now <i className="fas fa-long-arrow-alt-right"></i>
                </Link>
               
              </div>
            </div>
          </div>
          <div className="col-lg-5 ">
            <div className="hero-image">
              <Image src={seven} alt="img" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
