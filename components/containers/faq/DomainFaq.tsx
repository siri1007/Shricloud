// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import one from "@/public/img/faq.png";

// const DomainFaq = () => {
//   const [faq, setFaq] = useState(0);

//   return (
//     <section className="faq-section fix section-padding">
//       <div className="container">
//         <div className="faq-wrapper">
//           <div className="row g-4">
//             <div
//               className="col-lg-6 "
//             >
//               <div className="faq-image">
//                 <Image src={one} alt="img" />
//               </div>
//             </div>
//             <div className="col-lg-6">
//               <div className="faq-content">
//                 <div className="section-title">
//                   <span data-aos="fade-up" data-aos-duration="800">
//                     FAQ&apos;s
//                   </span>
//                   <h2
//                     data-aos="fade-up"
//                     data-aos-duration="800"
//                     data-aos-delay="300"
//                   >
//                     Prioritize Your Site&apos;s Safety and Security
//                   </h2>
//                 </div>
//                 <div className="faq-accordion mt-4 mt-md-0">
//                   <div className="accordion" id="accordion">
//                     <div
//                       className="accordion-item "
//                     >
//                       <h5 className="accordion-header">
//                         <button
//                           className={
//                             (faq == 0 ? "  " : " collapsed") +
//                             " accordion-button"
//                           }
//                           onClick={() => setFaq(faq === 0 ? -1 : 0)}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#faq1"
//                           aria-expanded="true"
//                           aria-controls="faq1"
//                         >
//                          What is a domain name?

//                         </button>
//                       </h5>
//                       <div
//                         id="faq1"
//                         className={`accordion-collapse collapse${
//                           faq === 0 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
                        // <div className="accordion-body">
                        //  A domain name is like your house address. It is how visitors will be able to locate your website on the internet. Sitecountry.com, like Google.com and Facebook.com, is a domain name. {"Some popular domain extensions (TLDs) are \".com,\", \".in\", \".net,\" or \".org.\", etc."}
                    //     </div>
                    //   </div>
                    // </div>
                    // <div
                    //   className="accordion-item "
                    // >
                    //   <h5 className="accordion-header">
                    //     <button
                          // className={
//                             (faq == 1 ? "  " : " collapsed") +
//                             " accordion-button"
//                           }
//                           onClick={() => setFaq(faq === 1 ? -1 : 1)}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#faq2"
//                           aria-expanded="false"
//                           aria-controls="faq2"
//                         >
//                        Why do you need to buy a domain name?

//                         </button>
//                       </h5>
//                       <div
//                         id="faq2"
//                         className={`accordion-collapse collapse${
//                           faq === 1 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
//                         <div className="accordion-body">
//                         It is important to have domain names to help potential visitors find your website easily. Without assigned website names, they would have to memorize IP addresses, which are hard to remember. When you register a domain, the DNS servers will connect it to your website’s IP address.
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="accordion-item "
                      
//                     >
//                       <h5 className="accordion-header">
//                         <button
//                           className={
//                             (faq == 2 ? "  " : " collapsed") +
//                             " accordion-button"
//                           }
//                           onClick={() => setFaq(faq === 2 ? -1 : 2)}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#faq3"
//                           aria-expanded="false"
//                           aria-controls="faq3"
//                         >
//                       How can I register a domain name for free?

//                         </button>
//                       </h5>
//                       <div
//                         id="faq3"
//                         className={`accordion-collapse collapse${
//                           faq === 2 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
//                         <div className="accordion-body">
//                         With SiteCountry, getting a free domain is simple. All you have to do is sign up for any premium/elite cloud hosting plan for 1 year and above. Learn how to claim your free new domain name.
//                         </div>
//                       </div>
//                     </div>
                    
                    
//                      <div
//                       className="accordion-item "
                     
//                       >
//                       <h5 className="accordion-header">
//                         <button
//                           className={
//                             (faq == 3 ? "  " : " collapsed") +
//                             " accordion-button"
//                           }
//                           onClick={() => setFaq(faq === 3 ? -1 : 3)}
//                           type="button"
//                           data-bs-toggle="collapse"
//                           data-bs-target="#faq4"
//                           aria-expanded="false"
//                           aria-controls="faq4"
//                         >
//                          What is domain privacy protection?

//                         </button>
//                       </h5>
//                       <div
//                         id="faq4"
//                         className={`accordion-collapse collapse${
//                           faq === 3 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
//                         <div className="accordion-body">
//                           When you register a domain, your personal contact information (such as your name, address, email, and phone number) is typically added to the WHOIS database, which is a public directory of domain name registrants. If you are concerned about your privacy and {"don't"} want your personal information to be publicly available, you should consider using domain privacy protection. SiteCountry offer this feature free with every eligible domain name.
//                         </div>
//                       </div>
//                     </div> 


//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DomainFaq;





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
  question: "What is a domain name?",
  answer:
    "A domain name is like your website’s address on the internet. It helps visitors find your website easily, just like a home address helps people locate your house. Examples include Google.com and Facebook.com. Popular domain extensions (TLDs) include .com, .in, .net, and .org.",
  icon: <FiZap />,
},
  {
    question: "Why do you need to buy a domain name?",
    answer:
      " It is important to have domain names to help potential visitors find your website easily. Without assigned website names, they would have to memorize IP addresses, which are hard to remember. When you register a domain, the DNS servers will connect it to your website’s IP address.",
    icon: <FiHelpCircle />,
  },
  {
    question: "How i can register a domain name for free?",
    answer:
      "With Shricloud, getting a free domain is simple. All you have to do is sign up for any premium/elite cloud hosting plan for 1 year and above. Learn how to claim your free new domain name.",
    icon: <FiShield />,
  },
  {
    question: "What is domain privacy protection?",
    answer:
      "When you register a domain, your personal contact information (such as your name, address, email, and phone number) is typically added to the WHOIS database, which is a public directory of domain name registrants. If you are concerned about your privacy and don't want your personal information to be publicly available, you should consider using domain privacy protection. SiteCountry offer this feature free with every eligible domain name.",
    icon: <FiRefreshCw />,
  },

  {
    question: "What is the difference between a domain name and web hosting?",
    answer:
      "A domain name is like your house address. It helps people find your website online. Whereas, web hosting is like your house - it's where all the files, images, and other information for your website are stored.",
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