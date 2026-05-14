"use client";

import { useState } from "react";
import styles from "./NnfaqSection.module.scss";
import { FiZap, FiHelpCircle, FiShield, FiRefreshCw, FiServer } from "react-icons/fi";

type FAQ = {
  question: string;
  answer: string;
  icon: JSX.Element;
};

const faqs: FAQ[] = [
  {
    question: "What is n8n hosting?",
    answer:
      "n8n is an open-source workflow automation tool that allows you to connect all your apps and data in one, easy-to-use and fully customizable place, without needing a single line of code.\n\nWith n8n VPS hosting, you can self-host n8n and only pay for your VPS. Get unlimited workflows, unlimited executions, and access to community-built nodes – all while keeping your setup fully secure and ready to scale.",
    icon: <FiZap />,
  },
  {
    question: "How to self-host n8n?",
    answer:
      "n8n comes preinstalled with Shricloud's \"Ubuntu 24.04 with n8n\" VPS template. Within a Docker environment, you can quickly and easily deploy your automation workflows. We also offer a template to set up n8n in queue mode for better scalability.\n\nTo guide you through accessing, configuring, and managing n8n in regular or queue mode, check out this step-by-step guide on the n8n VPS template.",
    icon: <FiServer />,
  },
  // {
  //   question: "How much does it cost to self-host n8n?",
  //  answer:
  // "Depending on the scale of your requirements, you can buy one of the following VPS hosting plans - self-hosted n8n included in all plans:\n\nKVM 1 – $6.49/month\nKVM 2 – $8.99/month\nKVM 4 – $12.99/month\nKVM 8 – $25.99/month\n\nWhen picking your plan, consider your needs carefully. For example, the KVM 2 package comes with two virtual CPU cores, 8 GB of RAM, and 100 GB of NVMe SSD storage, which is ideal for small-to-medium businesses and online stores. Start small and upgrade as and when you need additional resources.",
  //   icon: <FiHelpCircle />,
  // },
  {
    question: "Is n8n VPS hosting secure?",
    answer:
      "n8n VPS hosting is fully secure. Whether you decide to run your server in the cloud or locally, you retain full control of your data and choose who can - and can't - have access.",
    icon: <FiShield />,
  },
  {
    question: "Can I build custom AI applications with n8n on a VPS?",
    answer:
      "Yes, you can use any AI model, plug in your own data, and connect external tools. You can also use webhooks as triggers and configure a reverse proxy on Shricloud VPS.",
    icon: <FiZap />,
  },
  // {
  //   question: "Is n8n better than Zapier?",
  //   answer:
  //     "While n8n and Zapier are both workflow automation tools, they cater to different audiences.\n\nOne issue some people have with Zapier is that it can be inflexible and hide features behind paywalls. Scaling up your resources and adding new workflows can also be unpredictably expensive. Unlike Zapier, which works on a task-based model, n8n works on a workflow basis and is more customizable.\n\nHowever, if you need more pre-built connectors, n8n offers around 1,900, compared to over 5,000 with Zapier.",
  //   icon: <FiRefreshCw />,
  // },
  {
    question: "Can I migrate my n8n workflows to Shricloud's VPS?",
    answer:
      "Yes, you can export your workflows from platforms like Render, DigitalOcean, or n8n cloud and migrate them to Shricloud VPS. Your existing workflows will be preserved during migration. If you need help, read our guide on how to migrate your VPS to Shricloud.",
    icon: <FiServer />,
  },
  // {
  //   question: "What support options are available for n8n VPS hosting?",
  //   answer:
  //     "At Shricloud, we provide expert support to help you get the most out of your VPS. You can also explore helpful tips and in-depth guidance through our VPS tutorials, Knowledge Base, and the Shricloud YouTube channel.Our support covers the VPS environment, including setup, installation, and ensuring the n8n application is running smoothly. However, since n8n is self-hosted, we do not offer assistance with internal workflows, configurations, or custom code troubleshooting.",
  //   icon: <FiHelpCircle />,
  // },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
   <section
  className={styles.faqSection}
  style={{ backgroundColor: "#000" }}
>
      <div className={styles.container}>
        <h2 className={styles.heading}>VPS for n8n hosting FAQs</h2>
        <p className={styles.subheading}>
          Get answers to the most frequently asked questions about n8n virtual private server hosting services.
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