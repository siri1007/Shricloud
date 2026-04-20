
"use client";

import { useState } from "react";
import styles from "./WpFAQSection.module.scss";
import { FiZap, FiHelpCircle, FiShield, FiRefreshCw, FiServer } from "react-icons/fi";

type FAQ = {
  question: string;
  answer: string;
  icon: JSX.Element;
};

const faqs: FAQ[] = [
  {
    question:
      "What is Elite Cloud Hosting, and how is it different from other hosting types?",
    answer:
      "Elite Cloud Hosting is designed for high-traffic websites, offering 8GB, 12GB, and 16GB of RAM on the Startup, Business, and Enterprise packages, respectively, for optimal performance.",
    icon: <FiZap />,
  },
  {
    question: "What resources are included in the Elite Cloud Hosting plans?",
    answer:
      "Elite Cloud plans include ample RAM, SSD storage, CPU cores, unlimited bandwidth, and a Premium CDN quota, tailored for high-traffic websites.",
    icon: <FiHelpCircle />,
  },
  {
    question: "Can I expect premium support and security with Elite Cloud Hosting?",
    answer:
      "Yes, you receive prioritized support, premium anti-virus, nightly backups, free SSL certificates, and more, ensuring a secure and seamless hosting experience.",
    icon: <FiShield />,
  },
  {
    question: "What resources are included in the Elite Cloud Hosting plans?",
    answer:
      "Elite Cloud plans include ample RAM, SSD storage, CPU cores, unlimited bandwidth, and a Premium CDN quota, tailored for high-traffic websites.",
    icon: <FiRefreshCw />,
  },

  {
    question: "Why choose Elite Cloud Hosting from Shricloud?",
    answer:
      "If you are looking for lightning fast and secure hosting which can handle large amount of traffic without degrading the website speed, elite cloud is meant to be chosen by you..",
    icon: <FiServer />,
  },
  

  
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently asked questions</h2>
        <p className={styles.subheading}>
          Prioritize your site's safety, speed, and security
        </p>

        {/* FULL WIDTH */}
        <div
          className={`${styles.card} ${styles.full}`}
          onClick={() => toggleFAQ(0)}
        >
          <div className={styles.cardTop}>
            <div className={styles.left}>
              <div className={styles.icon}>{faqs[0].icon}</div>
              <h3>{faqs[0].question}</h3>
            </div>

            <span className={styles.arrow}>
              {openIndex === 0 ? "−" : "+"}
            </span>
          </div>

          {openIndex === 0 && (
            <p className={styles.answer}>{faqs[0].answer}</p>
          )}
        </div>

        {/* GRID */}
        <div className={styles.grid}>
          {faqs.slice(1).map((faq, index) => {
            const actualIndex = index + 1;

            return (
              <div
                key={index}
                className={styles.card}
                onClick={() => toggleFAQ(actualIndex)}
              >
                <div className={styles.cardTop}>
                  <div className={styles.left}>
                    <div className={styles.icon}>{faq.icon}</div>
                    <h3>{faq.question}</h3>
                  </div>

                  <span className={styles.arrow}>
                    {openIndex === actualIndex ? "−" : "+"}
                  </span>
                </div>

                {openIndex === actualIndex && (
                  <p className={styles.answer}>{faq.answer}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}