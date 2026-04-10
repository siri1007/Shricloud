import Image from "next/image";
import one from "@/public/img/domain/online.png";
import two from "@/public/img/domain/org.png";
import three from "@/public/img/domain/com.png";
import four from "@/public/img/domain/shop.png";
import five from "@/public/img/domain/net.png";
import six from "@/public/img/domain/pro.png";
import seven from "@/public/img/domain/xyz.png";
import eight from "@/public/img/domain/top.png";

         const domains = [
  ".com", ".in", ".co", ".net", ".org",
  ".club", ".info", ".xyz", ".io",
  ".us", ".uk", ".foundation", ".academy"
];



const DomainList = () => {
  return (
    <section className="domain-list-section fix section-padding pt-0">
      <div className="container">
        <div className="section-title text-center pb-md-3">
          {/* <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            Domains list
          </span> */}
         <h2 className="mb-3 mt-5">
  Top Domains Price List
</h2>
          
          {/* <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            Aliquam viverra accumsan lectus in dignissim ante interdum eu Sed
            odio massa
          </p> */}

        </div>
        <div className="row g-0">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            {/* <div className="domain-list-items">
              <h6 className="top-text">Name</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li>
                  <Image src={one} alt="img" priority />
                </li>
                <li>
                  <Image src={two} alt="img" priority />
                </li>
                <li>
                  <Image src={three} alt="img" priority />
                </li>
                <li>
                  <Image src={four} alt="img" priority />
                </li>
                <li>
                  <Image src={five} alt="img" priority />
                </li>
                <li>
                  <Image src={six} alt="img" priority />
                </li>
                <li>
                  <Image src={seven} alt="img" priority />
                </li>
                <li>
                  <Image src={eight} alt="img" priority />
                </li>
              </ul>
            </div> */}


   

<div className="domain-list-items">
  <h6 className="top-text">Name</h6>
  <ul>
    <li className="border-none">
      <span></span>
    </li>
    {domains.map((domain, index) => (
      <li key={index}>{domain}</li>
    ))}
  </ul>
</div>


          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            
          >
            <div className="domain-list-items">
              <h6 className="top-text">Register</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">
                ₹1,099.00 INR
                </li>
                <li className="text-center style-2">
                  ₹699.00 INR
                </li>
                <li className="text-center style-2">
                ₹999.00 INR
                </li>
                <li className="text-center style-2">₹999.00 INR</li>
                <li className="text-center style-2">
                 ₹899.00 INR
                </li>
                <li className="text-center style-2">₹499.00 INR</li>
                <li className="text-center style-2">
                 ₹499.00 INR
                </li>
                <li className="text-center style-2">₹299.00 INR</li>
                <li className="text-center style-2">₹3,899.00 INR</li>
                <li className="text-center style-2">₹499.00  INR</li>
                <li className="text-center style-2">₹699.00 INR</li>
 <li className="text-center style-2"> ₹1,399.00 INR</li>
  <li className="text-center style-2"> ₹1,499.00 INR</li>


               
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
           
          >
            <div className="domain-list-items">
              <h6 className="top-text">Transfer</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">₹999.00 INR</li>
                <li className="text-center style-2">₹699.00 INR</li>
                <li className="text-center style-2">₹999.00 INR</li>
                <li className="text-center style-2">₹1,099.00 INR</li>
                <li className="text-center style-2">₹899.00 INR</li>
                <li className="text-center style-2">₹1,299.00 INR
</li>
                <li className="text-center style-2">₹1,899.00 INR</li>
                <li className="text-center style-2">₹999.00 INR</li>

                <li className="text-center style-2">₹3899.00 INR</li>


                <li className="text-center style-2">₹799.00 INR</li>


                <li className="text-center style-2">₹699.00 INR</li><li className="text-center style-2">₹2199.00 INR</li>


                <li className="text-center style-2">₹3299.00 INR</li>

               
              </ul>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            
          >
            <div className="domain-list-items">
              <h6 className="top-text">Renew</h6>
              <ul>
                <li className="border-none">
                  <span></span>
                </li>
                <li className="text-center style-2">₹1,099.00 INR</li>
                <li className="text-center style-2">₹799.00 INR</li>
                <li className="text-center style-2">₹999.00 INR</li>
                <li className="text-center style-2">₹1299.00 INR</li>
                <li className="text-center style-2">₹999.00 INR</li>
                <li className="text-center style-2">₹1299.00 INR</li>
                <li className="text-center style-2">₹1999.00 INR</li>
                <li className="text-center style-2">₹1,099.00 INR</li>
                <li className="text-center style-2">₹3899.00 INR</li>
                <li className="text-center style-2">₹799.00 INR</li>
                <li className="text-center style-2">₹699.00 INR</li>
<li className="text-center style-2">₹2199.00 INR</li>
<li className="text-center style-2">₹3899.00 INR</li>


              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DomainList;
