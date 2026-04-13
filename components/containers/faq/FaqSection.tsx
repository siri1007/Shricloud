// "use client";
// import { useState } from "react";
// import Image from "next/image";
// import one from "@/public/img/faq.png";

// const FaqSection = () => {
//   const [faq, setFaq] = useState(0);

//   return (
//     <section className="faq-section fix section-padding">
//       <div className="container">
//         <div className="faq-wrapper">
//           <div className="row g-4">
//             <div
//               className="col-lg-6 "
             
//             >
//               {/* <div className="faq-image">
//                 <Image src={one} alt="img" />
//               </div> */}
//             </div>
//             <div className="col-lg-6">
//               <div className="faq-content">
//                 <div className="section-title">
//                   <span >
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
//                           What Makes Premium Cloud Hosting Different from Shared Hosting?
//                         </button>
//                       </h5>
//                       <div
//                         id="faq1"
//                         className={`accordion-collapse collapse${
//                           faq === 0 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
//                         <div className="accordion-body">
//                           Premium Cloud Hosting offers superior performance and security compared to regular shared hosting. It’s built on cloud infrastructure, incorporates advanced security standards, and performs up to 30 times faster than shared hosting.
//                         </div>
//                       </div>
//                     </div>
//                     <div
//                       className="accordion-item "
                     
//                     >
//                       <h5 className="accordion-header">
//                         <button
//                           className={
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
//                         Why Was Premium Cloud Introduced When Shared Hosting Is Cheaper?
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
//                          While shared hosting can be cheaper, it no longer meets the demands of performance and security. Premium Cloud was developed to provide a faster, more secure, and robust service, bridging the gap between cost-efficiency and high-quality hosting.
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
//                          What Benefits Does Premium Cloud Hosting Offer?
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
//                          Premium Cloud Hosting is powered by advanced technologies like CloudLinux, CageFileSystem, LiteSpeed webserver, PHP Imunify, and more, which are rarely found at such affordable pricing. It offers numerous benefits, including enhanced speed, performance, and security, making it a superior choice over regular shared hosting.
//                         </div>
//                       </div>
//                     </div>
//                     {/* <div
//                       className="accordion-item "
//                       data-aos="fade-up"
//                       data-aos-duration="800"
//                       data-aos-delay="700"
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
//                           Deployment Within Few Minutes
//                         </button>
//                       </h5>
//                       <div
//                         id="faq4"
//                         className={`accordion-collapse collapse${
//                           faq === 2 ? " show " : ""
//                         }`}
//                         data-bs-parent="#accordion"
//                       >
//                         <div className="accordion-body">
//                           Nullam faucibus eleifend mi eu varius. Integer vel
//                           tincidunt massa, quis semper odio. Mauris et mollis
//                           quam. Nullam fringilla erat id ante commodo sodales.
//                           In maximus ultrices euismod. Vivamus porta justo ex.
//                         </div>
//                       </div>
//                     </div> */}


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

// export default FaqSection;




"use client";
import { useState } from "react";

const FaqSection = () => {
  const [faq, setFaq] = useState(0);

  return (
    <section
      className="faq-section fix section-padding"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div className="container">
        <div
          className="faq-wrapper"
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div className="faq-content">
            <div className="section-title">
              <h1>FAQ&apos;s</h1>
              <h4>Prioritize Your Site&apos;s Safety and Security</h4>
            </div>

            <div className="faq-accordion mt-4">
              <div className="accordion" id="accordion">
                
                {/* ITEM 1 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        faq === 0 ? "" : "collapsed"
                      }`}
                      onClick={() => setFaq(faq === 0 ? -1 : 0)}
                    >
                      What Makes Premium Cloud Hosting Different from Shared Hosting?
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${
                      faq === 0 ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Premium Cloud Hosting offers superior performance and security compared to regular shared hosting. It’s built on cloud infrastructure and performs up to 30x faster.
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        faq === 1 ? "" : "collapsed"
                      }`}
                      onClick={() => setFaq(faq === 1 ? -1 : 1)}
                    >
                      Why Was Premium Cloud Introduced When Shared Hosting Is Cheaper?
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${
                      faq === 1 ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Shared hosting is cheaper but lacks performance and security. Premium Cloud provides a faster and more secure solution.
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${
                        faq === 2 ? "" : "collapsed"
                      }`}
                      onClick={() => setFaq(faq === 2 ? -1 : 2)}
                    >
                      What Benefits Does Premium Cloud Hosting Offer?
                    </button>
                  </h5>
                  <div
                    className={`accordion-collapse collapse ${
                      faq === 2 ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      Includes CloudLinux, LiteSpeed, Imunify security, and more — delivering better speed, security, and reliability.
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ✅ INLINE SCSS */}
      <style jsx>{`
        .accordion-button {
          font-weight: 600;
          text-align: left;
        }

        .accordion-item {
          margin-bottom: 10px;
          border-radius: 8px;
          overflow: hidden;
        }

        .accordion-body {
          text-align: left;
          font-size: 14px;
          color: #555;
        }

        .section-title span {
          display: block;
          color: #0d6efd;
          margin-bottom: 10px;
        }

        .section-title h2 {
          font-size: 28px;
          font-weight: 700;
          margin-bottom: 20px;
        }
      `}</style>
    </section>
  );
};

export default FaqSection;