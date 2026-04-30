import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-2.png";
import three from "@/public/img/hosting/icon-3.png";
import four from "@/public/img/hosting/icon-4.png";
import five from "@/public/img/hosting/icon-5.png";
import six from "@/public/img/hosting/icon-6.png";

const HostingHome = () => {
  return (
  <section
  className="hosting-section fix section-padding pt-0"
  style={{ marginTop: "80px" }}
>
      <div className="container">
        <div className="section-title-area">
          <div className="section-title">
            <span>
              Best hosting
            </span>
            <h2 >
              Discover Most Powerful Web <br /> Hosting Features
            </h2>
          </div>
          <Link
            href="vps-hosting"
            className="theme-btn "
          
          >
            Explore More <i className="fas fa-long-arrow-alt-right"></i>
          </Link>
        </div>
        <div className="row">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="Wordpress-cloud-Hosting">WordPress  Hosting</Link>
                </h3>
                <p>
                 

Launch your WordPress site effortlessly with the fast & reliable web hosting services, ensuring a seamless start with cloud hosting.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
           
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="reseller-hosting"> Reseller  Hosting</Link>
                </h3>
                <p>
                 
Empower your clients with unlimited scalability while maximizing your earnings potential with the most reliable and affordable web hosting solutions available.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
           
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="Elite-cloud">    Elite Cloud</Link>
                </h3>
                <p>
                  

Tailored for eCommerce sites and high-traffic blogs, as well as PHP and NodeJS websites, experience elite web hosting at competitive prices.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
          >
            
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting">Dedicated Hosting</Link>
                </h3>
                <p>
                Built for demanding applications and enterprise workloads, power your projects with fully dedicated servers delivering unmatched performance and control.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
         
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={five} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="dedicated-hosting"> VPS  Hosting</Link>
                </h3>
                <p>
               Perfect for developers and scalable projects, deploy high-performance VPS hosting with dedicated resources, flexibility, and cost-efficient control.
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
           
          >
            <div
              className="hosting-inner-items responsive-style"
              style={{
                backgroundImage: "url(/img/hosting/card-bg.png)",
              }}
            >
              <div className="icon">
                <Image src={six} alt="img" priority />
              </div>
              <div className="content">
                <h3>
                  <Link href="vps-hosting">n8n Hosting</Link>
                </h3>
                <p>
                Designed for automation enthusiasts and growing businesses, run n8n workflows seamlessly with reliable hosting, real-time execution, and full flexibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HostingHome;
