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
    question: "What is a dedicated server?",
    answer:
      "A dedicated server is a single-tenant physical server designed for high-demand websites and applications. There is no resource sharing or virtualization, ensuring a fully isolated environment. Known as bare metal, it offers reliability, stability, and durability while delivering peak performance, strong security, and seamless scalability for business growth.",
    icon: <FiZap />,
  },
  {
    question: "What benefits does a dedicated server offer?",
    answer:
      "Unlike shared hosting, a dedicated server is allocated to a single user. This gives you full access to dedicated resources with no interference from other websites, ensuring consistent performance. You also get complete administrator control over the operating system and software. Shricloud’s dedicated servers are built to handle high-traffic websites with ease.",
    icon: <FiHelpCircle />,
  },
  {
    question: "Which dedicated server should I choose?",
    answer:
      "Dedicated server configurations are designed to suit different professional needs. You can customize your server with more storage, bandwidth, RAM, or a faster processor. Shricloud provides high bandwidth, latest hardware, ultra-fast networks, and competitive pricing. If you're unsure, our experts can help you choose the best plan.",
    icon: <FiShield />,
  },
  {
    question: "How do I get started with dedicated server hosting?",
    answer:
      "Getting started is simple. Choose a plan that fits your business needs and place your order. If you have custom requirements, Shricloud’s expert team is available to guide you and help configure the right solution.",
    icon: <FiRefreshCw />,
  },
  {
    question: "Can I get different specifications than those listed?",
    answer:
      "Yes, Shricloud offers custom dedicated server configurations. If you don’t find the exact specifications you need, you can contact us via live chat, support tickets, or email. We’ll provide the closest match based on your requirements and budget.",
    icon: <FiServer />,
  },
  {
    question: "What is the difference between VPS and a dedicated server?",
    answer:
      "In VPS hosting, a physical server is divided into multiple virtual servers, where you get a portion of the resources. In contrast, a dedicated server gives you an entire physical machine exclusively, offering maximum performance, control, and reliability.",
    icon: <FiHelpCircle />,
  },
  {
    question: "Does Shricloud provide managed dedicated servers?",
    answer:
      "Yes, Shricloud offers 24x7 managed dedicated servers as an add-on. You can choose standard server management or proactive server management during checkout to ensure your server runs smoothly at all times.",
    icon: <FiZap />,
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