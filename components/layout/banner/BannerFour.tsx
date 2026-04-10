import Image from "next/image";
import one from "@/public/img/hero/hero-support.png";
import two from "@/public/img/hero/hero-hosting-2.png";

const BannerFour = () => {
  return (
    <section
      className="hero-section hero-4 fix"
      style={{
        backgroundImage: "url(/img/hero/hero-bg-4.jpg)",
      }}
    >
      <div className="hero-suppor-image">
        <Image src={one} alt="img" priority />
      </div>
      <div className="hero-hosing-image">
        <Image src={two} alt="img" priority />
      </div>
      <div className="container">
        <div className="row g-4 justify-content-between">
          <div className="col-lg-12">
            <div className="hero-domain-wrapper">
              <h1
                className="text-white "
              >
                Search and Buy a Domain

              </h1>
              <h6
              >
               
Find the right domain name.
              </h6>
              <form
                action="#"
                className="domain-input-form "
              >
                <div className="domain-input">
                  <input type="text" placeholder="domain.com" />
                  <button className="theme-btn bg-color-2" type="submit">
                    Search Now
                  </button>
                  <div className="select-area">
                    <select name="cate" className="category">
                      <option value="1">.com</option>
                      <option value="1">.in</option>
                      <option value="1">.co</option>
                      <option value="1">.net</option>
                      <option value="1">.org</option>
                      <option value="1">.club</option>
                      <option value="1">.info</option>
                      <option value="1">.xyz</option>
                      <option value="1">.io</option>
                      <option value="1">.us</option>
                        <option value="1">.uk</option>
                       <option value="1">.foundation</option>
                        <option value="1">.academy</option>
                    </select>
                  </div>
                </div>
              </form>
              <ul className="domain-list">
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="200"
                >
                  <span>.com</span>
                  $9.95
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="400"
                >
                  <span>.Info</span>
                  $11.99
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="600"
                >
                  <span>.Net</span>
                  $8.95
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="800"
                >
                  <span>.Store</span>
                  $10.50
                </li>
                <li
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay="900"
                >
                  <span>.ORG</span>
                  $11.95
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerFour;
