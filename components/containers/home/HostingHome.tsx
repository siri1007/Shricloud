import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/hosting/icon-1.png";
import two from "@/public/img/hosting/icon-2.png";
import three from "@/public/img/hosting/icon-3.png";
import four from "@/public/img/hosting/icon-4.png";
import five from "@/public/img/hosting/icon-5.png";
import six from "@/public/img/hosting/icon-6.png";
import Wordpressicon from "@/public/img/menu-icon/wordpress-host.png";
import n8n from "@/public/img/menu-icon/n8n.png";
import Elite from "@/public/img/menu-icon/host-service.png";
import vps from "@/public/img/menu-icon/vps-host.png";

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
                        <Image
    src={Wordpressicon}
    alt="img"
    priority
    style={{ width: "40px", height: "auto" }}
  />
              </div>
              <div className="content">
                <h3>
                  <Link href="Wordpress-cloud-Hosting">WordPress  Hosting</Link>
                </h3>
                <p>
                 
The perfect hosting package for everyone — ideal for WordPress blogs, business websites, and portfolio sites.
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
                  <Link href="reseller-hosting"> Reseller  Hosting</Link>
                </h3>
                <p>
                 
A complete beginner-friendly package to build your web hosting business with minimum investment.
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
                <Image
    src={Elite}
    alt="img"
    priority
    style={{ width: "40px", height: "auto" }}
  />
              </div>
              <div className="content">
                <h3>
                  <Link href="Elite-cloud">    Elite Cloud</Link>
                </h3>
                <p>
                  

Perfect for hosting ecommerce websites, high-traffic blogs, and hosting several websites together with ease.
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
               High-performance Dedicated Bare Metal Servers featuring exclusive hardware, full root access, and a secure single-tenant network
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
                       <Image
    src={vps}
    alt="img"
    priority
    style={{ width: "40px", height: "auto" }}
  />
              </div>
              <div className="content">
                <h3>
                  <Link href="vps-hosting"> VPS  Hosting</Link>
                </h3>
                <p>
             Managed Cloud VPS packages powered by KVM virtualization, featuring Dedicated resources and a Dedicated IP address.
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
  <Image
    src={n8n}
    alt="img"
    priority
    style={{ width: "40px", height: "auto" }}
  />
</div>
              <div className="content">
                <h3>
                  <Link href="N8n-hosting">n8n Hosting</Link>
                </h3>
                <p>
               Power your automation journey with seamless n8n workflow hosting, fast real-time execution, and flexible infrastructure designed for growing businesses
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
