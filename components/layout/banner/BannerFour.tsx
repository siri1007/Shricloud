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
                 
                >
                  <span>.com</span>
               
                </li>
                <li
                 
                >
                  <span>.Info</span>
             
                </li>
                <li
                 
                >
                  <span>.Net</span>
                
                </li>
                <li
                
                >
                  <span>.Store</span>
                
                </li>
                <li
                  
                >
                  <span>.ORG</span>
               
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
