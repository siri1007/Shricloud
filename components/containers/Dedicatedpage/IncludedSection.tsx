"use client";

import styles from "./IncludedSection.module.scss";
import { FiClock, FiServer, FiUsers, FiGrid, FiLayers } from "react-icons/fi";

const features = [
  {
    id: "01",
    icon: <FiClock />,
    title: "Robust Configurations",
    desc: "SSD NVMe + Intel Xeon / AMD EPYC. Built for heavy workloads and critical apps.",
    tags: ["NVME", "XEON", "EPYC"],
  },
  {
    id: "02",
    icon: <FiServer />,
    title: "RAM & Storage",
    desc: "DDR4/DDR5 high-speed memory paired with ultrafast SSD-based storage solutions.",
    tags: ["DDR5", "ULTRAFAST SSD"],
  },
  {
    id: "03",
    icon: <FiUsers />,
    title: "Unbeatable Tech Support",
    desc: "Expert engineers available 24/7/365. Your growth, our servers.",
    tags: ["24 / 7 / 365"],
    highlight: true,
  },
  {
    id: "04",
    icon: <FiGrid />,
    title: "Operating System Freedom",
    desc: "Choose from Ubuntu, CentOS, Fedora, Debian, AlmaLinux and more.",
    tags: ["UBUNTU", "DEBIAN", "CENTOS"],
  },
  {
    id: "05",
    icon: <FiLayers />,
    title: "No Setup Fees",
    desc: "Zero hidden costs. Everything in one flat monthly fee, server ready immediately.",
    tags: ["ZERO HIDDEN FEES"],
  },
];

export default function IncludedSection() {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <span className={styles.subheading}>— EVERY PLAN INCLUDES</span>

        <div className={styles.topRow}>
          <h2>
            Included with Every <br /> Dedicated Hosting Plan
          </h2>

          <button className={styles.cta}>Dedicated Servers ↗</button>
        </div>
      </div>

      <div className={styles.grid}>
        {features.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              item.highlight ? styles.highlight : ""
            }`}
          >
            <span className={styles.number}>{item.id}</span>

            <div className={styles.icon}>{item.icon}</div>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <div className={styles.tags}>
              {item.tags.map((tag, i) => (
                <span key={i}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}