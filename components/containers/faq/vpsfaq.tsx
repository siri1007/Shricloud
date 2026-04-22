

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
      "What does managed VPS hosting entail, and how does it benefit my business with Shricloud?",
    answer:
      "Managed VPS hosting with SiteCountry takes the technical burden off your shoulders by handling everything behind the scenes—server setup, updates, security maintenance, backups, and software configuration. Instead of worrying about server management, you can dedicate your time to building and expanding your business.",
    icon: <FiZap />,
  },
  {
    question: "What's the difference between managed and unmanaged VPS hosting at Shricoud?",
    answer:
      " The main distinction between managed and unmanaged VPS hosting at Shricloud comes down to who takes care of the server.With managed VPS hosting, SiteCountry handles all the technical responsibilities for you—such as setting up the operating system, applying updates, maintaining security, and ensuring everything runs smoothly. It’s a hands-off option designed for convenience and peace of mind.",
    icon: <FiHelpCircle />,
  },
  {
    question: "How do I get started with Shricloud's Managed VPS Hosting?",
    answer:
      "Getting started with Shricloud’s Managed VPS Hosting is simple and hassle-free. After choosing the plan that fits your needs, our team takes care of setting up your server and handling the initial configuration. This includes customizing your hosting environment and installing the CloudPanel control panel.",
    icon: <FiShield />,
  },
  {
    question: "How does Shricloud ensure top performance and security for its Managed VPS Hosting?",
    answer:
      "Shricloud ensures top performance and security for its Managed VPS Hosting through advanced infrastructure, real-time monitoring, automated updates, and robust security measures. Our team of experts continuously manages and optimizes your server to provide a reliable and secure hosting environment.",
    icon: <FiRefreshCw />,
  },

  {
    question: "Can I migrate my existing website to Shricloud's Managed VPS Hosting?",
    answer:
      "Yes, Shricloud offers seamless migration services for your existing website to our Managed VPS Hosting. Our team of experts will handle the entire migration process, ensuring that your website is transferred smoothly without any downtime or data loss.",
    icon: <FiServer />,
  },
//   {
//     question: "How Do I Start with Cloud Hosting?",
//     answer:
//       "To begin with WordPress Cloud Hosting, simply place your hosting package order. You’ll receive an email with all the necessary information, and once you receive the confirmation email, your hosting account will be activated, allowing you to manage it effortlessly from our user-friendly dashboard.",
//     icon: <FiServer />,
//   },

//   {
//     question: "Can I migrate my website to ShriCloud?",
//     answer:
//       "Yes! You can move your current website from another hosting provider to ShriCloud hassle-free. Our migration experts are here to handle the complete process so you can concentrate on your main business goals. Our best Starter Cloud hosting plans come with free website migration.",
//     icon: <FiServer />,
//   },
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