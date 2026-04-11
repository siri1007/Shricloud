import Link from "next/link";
import Image from "next/image";
// import one from "@/public/img/team/01.jpg";
// import two from "@/public/img/team/02.jpg";
// import three from "@/public/img/team/03.jpg";
// import four from "@/public/img/team/04.jpg";


import styles from "./AboutTeam.module.scss";
import litespeed from "@/public/img/partners/litespeed.png";
import softaculous from "@/public/img/partners/softaculous.png";

import WordPressLogo from "@/public/img/partners/WordPressLogo.png";
import jetbackup from "@/public/img/partners/jetbackup.png";
import intel from "@/public/img/partners/intel.png";
import Cloudflare from "@/public/img/partners/Cloudflare.png";
import aws from "@/public/img/partners/aws.png";
import cloudlinux from "@/public/img/partners/cloudlinux.png";

import DirectAdminLogo from "@/public/img/partners/DirectAdminLogo.png";
const AboutTeam = () => {
  return (
   <section className={`team-section fix section-padding ${styles.blackBg}`}>
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
           
          >
          partnership
          </span>
          <h2
            className="mb-3 "
           
          >
            Meet our partners
          </h2>
          <p >
         Our company was founded in 2020. We work daily to become better and we are ready to share best practices.
          </p>
        </div>



<div className={styles.partnerMarquee}>
  <div className={styles.marqueeTrack}>
    <div className={styles.marqueeContent}>
      <Image src={litespeed} alt="LiteSpeed" />
      <Image src={softaculous} alt="Softaculous" />
      <Image src={intel} alt="Intel" />
      <Image src={aws} alt="AWS" />
      <Image src={cloudlinux} alt="CloudLinux" />
      <Image src={WordPressLogo} alt="WordPress" />
      <Image src={jetbackup} alt="JetBackup" />
      <Image src={Cloudflare} alt="Cloudflare" />
      <Image src={DirectAdminLogo} alt="DirectAdmin" />


      {/* duplicate for loop */}
      <Image src={litespeed} alt="LiteSpeed" />
      <Image src={softaculous} alt="Softaculous" />
      <Image src={intel} alt="Intel" />
      <Image src={aws} alt="AWS" />
      <Image src={cloudlinux} alt="CloudLinux" />
    </div>
  </div>
</div>



        {/* <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="team-card-item">
              <div className="team-image">
                <Image src={one} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Darlene Robertson</Link>
                </h5>
                <p>Web Designer</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="team-card-item">
              <div className="team-image">
                <Image src={two} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Leslie Alexander</Link>
                </h5>
                <p>Nursing Assistant</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="team-card-item">
              <div className="team-image">
                <Image src={three} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Ralph Edwards</Link>
                </h5>
                <p>President of Sales</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="team-card-item">
              <div className="team-image">
                <Image src={four} alt="img" priority />
              </div>
              <div
                className="team-content bg-cover"
                style={{
                  backgroundImage: "url(/img/team/team-shape.png)",
                }}
              >
                <h5>
                  <Link href="team-details">Kristin Watson</Link>
                </h5>
                <p>Software Tester</p>
                <div className="social-profile">
                  <ul>
                    <li>
                      <Link href="/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </li>
                  </ul>
                  <span className="plus-btn">
                    <i className="fa-light fa-share-nodes"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}




      </div>
    </section>
  );
};

export default AboutTeam;
