

// -----------


import Image from "next/image";
import styles from "./HostingChooseTwo.module.scss";

import one from "@/public/img/choose/buddy.png";
import two from "@/public/img/choose/woo.png";
import three from "@/public/img/choose/contact.png";
import four from "@/public/img/choose/setup.png";

const features = [
  {
    id: 1,
    image: one,
    title: " Advanced WP Ecosystems",
    desc: "Build high-performance WordPress platforms with enterprise-grade compatibility, seamless scalability, and optimized infrastructure.",




  },
  {
    id: 2,
    image: two,
    title: "Commerce-Ready Infrastructure",
    desc: "Launch and scale high-performing online stores with lightning-fast checkout experiences and conversion-focused architecture.",
  },
  {
    id: 3,
    image: three,
    title: "Advanced Lead Capture Systems",
    desc: "Turn every interaction into opportunity with secure, adaptable form solutions built for maximum conversions.",
  },
  {
    id: 4,
    image: four,
    title: "Zero-Touch Deployment",
    desc: "Launch fully configured websites instantly with seamless automation, eliminating manual setup and accelerating time-to-market.",
  },
];

const HostingChooseTwo = () => {
  return (
    <section className={styles.chooseSection}>
      <div className="container">
        <div className={styles.sectionTitle}>
          <h2>Elite Hosting Features</h2>
        </div>

        <div className={styles.grid}>
          {features.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.iconBox}>
                <Image src={item.image} alt={item.title} priority />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingChooseTwo;