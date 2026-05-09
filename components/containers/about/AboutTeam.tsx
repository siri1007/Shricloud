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
       


<div className={styles.partnerMarquee}>
  <div className={styles.marqueeTrack}>
    <div className={styles.marqueeContent}>
      <Image src={litespeed} alt="LiteSpeed"  className={styles.smallLogo}/>
      <Image src={softaculous} alt="Softaculous" />
     
      <Image src={intel} alt="Intel" />
      <Image src={aws} alt="AWS" />
      <Image src={cloudlinux} alt="CloudLinux" />
      <Image src={WordPressLogo} alt="WordPress" />
      <Image src={jetbackup} alt="JetBackup" />
      <Image src={Cloudflare} alt="Cloudflare" />
      <Image src={DirectAdminLogo} alt="DirectAdmin" />



{/* <Image src={DirectAdminLogo} alt="DirectAdmin" className={styles.smallLogo} /> */}

      {/* duplicate for loop */}
      <Image src={litespeed} alt="LiteSpeed" />
      <Image src={softaculous} alt="Softaculous" />
      <Image src={intel} alt="Intel" />
      <Image src={aws} alt="AWS" />
      <Image src={cloudlinux} alt="CloudLinux" />
    </div>
  </div>
</div>




      </div>
    </section>
  );
};

export default AboutTeam;
