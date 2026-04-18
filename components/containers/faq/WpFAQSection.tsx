// "use client";

// import { useState } from "react";
// import styles from "./WpFAQSection.module.scss";

// type FAQ = {
//   question: string;
//   answer: string;
//   category: string;
// };

// const faqs: FAQ[] = [
//   {
//     question:
//       "What makes WordPress cloud hosting different from shared hosting?",
//     answer:
//       "Cloud hosting uses dedicated scalable resources, ensuring better performance, uptime, and flexibility compared to shared hosting.",
//       category: "",
    
//   },
//   {
//     question:
//       "What is Cloud hosting?",
//     answer:
//       "Cloud hosting is a type of web hosting service that utilizes multiple interconnected servers to distribute the load and maximize resource utilization.",
//       category: "",
    
//   },
//   {
//     question:
//       "Is WordPress cloud is good for my business website?",
//     answer:
//       "Yes, you can definitely host your business website with WordPress Cloud hosting.",
//     category: "",
//   },
//   {
//     question: "Can I migrate my existing WordPress site to cloud hosting?",
//     answer:
//       "Yes, migration tools and support teams help you seamlessly transfer your site.",
//     category: "",
//   },
//   {
//     question: "Will able to install WordPress in Cloud Hosting?",
//     answer:
//       "Yes! We include a Softaculous one-click installer with our WordPress cloud plans. This way, you can install and get your WordPress website up and running in no time.",
//     category: "",
//   },
// ];

// export default function FaqSection() {
//   const [openIndex, setOpenIndex] = useState<number | null>(null);

//   const toggleFAQ = (index: number) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <section className={styles.faqSection}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>Frequently asked questions</h2>
//         <p className={styles.subheading}>
//           Prioritize your site's safety, speed, and security
//         </p>

//         {/* FULL WIDTH FAQ */}
//         <div
//           className={`${styles.card} ${styles.full}`}
//           onClick={() => toggleFAQ(0)}
//         >
//           <div className={styles.cardTop}>
//             <div>
//               <h3>{faqs[0].question}</h3>
             
//             </div>
//             <span className={styles.arrow}>
//               {openIndex === 0 ? "−" : "+"}
//             </span>
//           </div>

//           {openIndex === 0 && (
//             <p className={styles.answer}>{faqs[0].answer}</p>
//           )}
//         </div>

//         {/* GRID FAQS */}
//         <div className={styles.grid}>
//           {faqs.slice(1).map((faq, index) => {
//             const actualIndex = index + 1;
//             return (
//               <div
//                 key={index}
//                 className={styles.card}
//                 onClick={() => toggleFAQ(actualIndex)}
//               >
//                 <div className={styles.cardTop}>
//                   <div>
//                     <h3>{faq.question}</h3>
                   
//                   </div>
//                   <span className={styles.arrow}>
//                     {openIndex === actualIndex ? "−" : "+"}
//                   </span>
//                 </div>

//                 {openIndex === actualIndex && (
//                   <p className={styles.answer}>{faq.answer}</p>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// }


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
      "What makes WordPress cloud hosting different from shared hosting?",
    answer:
      "Cloud hosting uses dedicated scalable resources, ensuring better performance, uptime, and flexibility compared to shared hosting.",
    icon: <FiZap />,
  },
  {
    question: "What is Cloud hosting?",
    answer:
      "Cloud hosting is a type of web hosting service that utilizes multiple interconnected servers to distribute the load and maximize resource utilization.",
    icon: <FiHelpCircle />,
  },
  {
    question: "Is WordPress cloud is good for my business website?",
    answer:
      "Yes, you can definitely host your business website with WordPress Cloud hosting.",
    icon: <FiShield />,
  },
  {
    question: "Can I migrate my existing WordPress site to cloud hosting?",
    answer:
      "Yes, migration tools and support teams help you seamlessly transfer your site.",
    icon: <FiRefreshCw />,
  },

  {
    question: "Will able to install WordPress in Cloud Hosting?",
    answer:
      "Yes! We include a Softaculous one-click installer with our WordPress cloud plans. This way, you can install and get your WordPress website up and running in no time.",
    icon: <FiServer />,
  },
  {
    question: "How Do I Start with Cloud Hosting?",
    answer:
      "To begin with WordPress Cloud Hosting, simply place your hosting package order. You’ll receive an email with all the necessary information, and once you receive the confirmation email, your hosting account will be activated, allowing you to manage it effortlessly from our user-friendly dashboard.",
    icon: <FiServer />,
  },

  {
    question: "Can I migrate my website to ShriCloud?",
    answer:
      "Yes! You can move your current website from another hosting provider to ShriCloud hassle-free. Our migration experts are here to handle the complete process so you can concentrate on your main business goals. Our best Starter Cloud hosting plans come with free website migration.",
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