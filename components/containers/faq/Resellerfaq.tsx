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
    question: "What is reseller hosting, and how does Shricloud make it easy to get started?",
    answer:
      "Reseller hosting lets you buy hosting resources in bulk and sell them to your own clients under your brand — essentially running your own hosting business without needing to build any infrastructure from scratch.With Shricloud, you can create customizable hosting plans and set your own pricing easily.It’s a simple way for freelancers, agencies, and entrepreneurs to start a hosting business without managing infrastructure.Their support team also helps you throughout the process, making it beginner-friendly and scalable",
    icon: <FiZap />,
  },
  {
    question: "How do I get started with reseller hosting through Shricloud?",
    answer:
      "Getting started is simpler than you might think. Begin by understanding your target audience — who are you selling to, and what do they need? Once you have a clear picture, choose a reseller plan from SiteCountry that fits your goals and budget. From there, Shricloud backs you with marketing tools and insights to help you attract your first clients and grow steadily from day one.",
    icon: <FiHelpCircle />,
  },
  {
    question: " Can I put my own brand on the hosting service I resell through Shricloud?",
    answer:
      "Absolutely. Shricloud's reseller plans come with white-labeled control panels, meaning your clients only see your brand — your logo, your business name, your identity. You can create custom hosting packages and present a fully branded experience, making it easy to build a professional hosting business that feels entirely your own.",
    icon: <FiShield />,
  },

  {
    question: "How much does website speed matter for my reseller hosting business?",
    answer:
      "It matters more than most people realize. Slow websites frustrate users and hurt your clients' search rankings — which reflects directly on your service. Shricloud equips your reseller business with high-performance servers and built-in speed optimization, so your clients get fast, reliable websites and you get a reputation worth growing.",
    icon: <FiServer />,
  },
  {
    question: "Can I upgrade or change my reseller plan as my business scales?",
    answer:
      "Yes, and it's designed to be hassle-free. As your client base grows, you can upgrade your plan anytime — or scale down if needed. Shricloud's team handles the transition smoothly so there's little to no disruption to your existing clients. Your hosting setup grows with your business, not against it.",
    icon: <FiHelpCircle />,
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