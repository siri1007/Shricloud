import React from "react";
import "./HeroSection.scss";

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        
        {/* LEFT CONTENT */}
        <div className="hero__content">
          <div className="hero__rating">★★★★★</div>

          <p className="hero__review">
            "Best hosting I've used in 10 years." — Verified customer
          </p>

          <h1 className="hero__title">
            Ready to launch your site?
            <br />
            Start free today.
          </h1>

          <p className="hero__subtitle">
            No credit card needed. 30-day money-back guarantee.
          </p>

          <div className="hero__form">
            <input
              type="text"
              placeholder="Enter your domain or keyword"
            />
            <button>Get Started →</button>
          </div>

          <div className="hero__features">
            <span>● No credit card</span>
            <span>● 30-day guarantee</span>
            <span>● Setup in 60 seconds</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="hero__image">
          <img
            src="https://via.placeholder.com/500x400"
            alt="Hosting Illustration"
          />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;