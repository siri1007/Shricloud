"use client";

import { useState } from "react";

const ResellerFaq = () => {
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
              <h4>Everything You Need to Know About ShriCloud</h4>
            </div>

            <div className="faq-accordion mt-4">
              <div className="accordion" id="accordion">

                {/* ITEM 1 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 0 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 0 ? -1 : 0)}
                    >
                      Who is reseller hosting with ShriCloud best suited for?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 0 ? "show" : ""}`}>
                    <div className="accordion-body">
                      ShriCloud reseller hosting is ideal for freelancers, agencies, and entrepreneurs who want to offer hosting services without managing servers.
                    </div>
                  </div>
                </div>

                {/* ITEM 2 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 1 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 1 ? -1 : 1)}
                    >
                      What do I get with a ShriCloud reseller plan?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 1 ? "show" : ""}`}>
                    <div className="accordion-body">
                      You get hosting resources, control panels, and tools to manage multiple clients under your own brand.
                    </div>
                  </div>
                </div>

                {/* ITEM 3 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 2 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 2 ? -1 : 2)}
                    >
                      Will my customers see ShriCloud branding?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 2 ? "show" : ""}`}>
                    <div className="accordion-body">
                      No, ShriCloud offers white-label hosting, so your customers only see your brand.
                    </div>
                  </div>
                </div>

                {/* ITEM 4 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 3 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 3 ? -1 : 3)}
                    >
                      Can I manage multiple client websites easily?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 3 ? "show" : ""}`}>
                    <div className="accordion-body">
                      Yes, ShriCloud provides an intuitive dashboard to manage multiple websites and accounts efficiently.
                    </div>
                  </div>
                </div>

                {/* ITEM 5 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 4 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 4 ? -1 : 4)}
                    >
                      What happens if my clients experience high traffic?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 4 ? "show" : ""}`}>
                    <div className="accordion-body">
                      You can easily upgrade your plan to handle increased traffic and ensure smooth performance.
                    </div>
                  </div>
                </div>

                {/* ITEM 6 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 5 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 5 ? -1 : 5)}
                    >
                      Can I create my own pricing plans?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 5 ? "show" : ""}`}>
                    <div className="accordion-body">
                      Yes, you have full control to set your own pricing and create custom hosting packages.
                    </div>
                  </div>
                </div>

                {/* ITEM 7 */}
                <div className="accordion-item">
                  <h5 className="accordion-header">
                    <button
                      className={`accordion-button ${faq === 6 ? "" : "collapsed"}`}
                      onClick={() => setFaq(faq === 6 ? -1 : 6)}
                    >
                      Is ShriCloud reliable for long-term growth?
                    </button>
                  </h5>
                  <div className={`accordion-collapse collapse ${faq === 6 ? "show" : ""}`}>
                    <div className="accordion-body">
                      Yes, ShriCloud ensures high uptime, performance, and scalability for growing businesses.
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

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

        .section-title h1 {
          font-size: 32px;
          font-weight: 700;
        }

        .section-title h4 {
          margin-top: 10px;
          color: #6b7280;
        }
      `}</style>
    </section>
  );
};

export default ResellerFaq;