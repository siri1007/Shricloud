import Image from "next/image";
import one from "@/public/img/support/support.png";
import two from "@/public/img/support/customization.png";
import three from "@/public/img/support/technical.png";
import four from "@/public/img/support/account.png";


import Link from "next/link";

const features = [
  {
    img: one,
    title: "Raise a Ticket",
    desc: "For technical and your hosting account-related issues. ",
    link: "/support",
  },
  {
    img: two,
    title: "Chat with us",
    desc: "For sales, technical and related Queries.",
     link: "/account-manager",
  },
  {
    img: three,
    title: "Collabs/Partnerships",
    desc: "Want to partner with ShriCloud? Reach out now!",
     link: "/account-manager",
  },
  {
    img: four,
    title: "Contact support",
    desc: "Contact our support service via Telegram, our team respond in time.",
     link: "/account-manager",
  },
  {
    img: one,
    title: "Mail us",
    desc: "E-mail to Info@Shricloud.com our team respond in time.",
     link: "/account-manager",
  },
  {
    img: two,
    title: "Head office ",
   desc: (
  <>
    Hyderabad, Telangana,<br />
    India, 500085
  </>
),
     link: "/account-manager",
  },
];

const ChooseUs = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        <div className="section-title text-center">
          <span
            className="style-border "
            data-aos="fade-up"
            data-aos-duration="800"
          >
            our Support
          </span>
          <h2 data-aos="fade-up" data-aos-duration="800" data-aos-delay="300">
            our Premium Support
          </h2>
          <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="500">
            We’re here for you—reach out anytime! 👍
          </p>
        </div>
        {/* <div className="row">
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="200"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={one} alt="img" priority />
              </div>
              <div className="content">
                <h3>24/7 Support</h3>
                <p>24/7 priority Live Chat and ticketing support.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={two} alt="img" priority />
              </div>
              <div className="content">
                <h3>Site Customization</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="600"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={three} alt="img" priority />
              </div>
              <div className="content">
                <h3>Technical Support </h3>
                <p>24/7/365 priority Live Chat and ticketing support.</p>
              </div>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-4 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="800"
          >
            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Account Manager</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
                </p>
              </div>
            </div>

<div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Account Manager</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
                </p>
              </div>
            </div>



            <div className="choose-us-card-items">
              <div className="icon">
                <Image src={four} alt="img" priority />
              </div>
              <div className="content">
                <h3>Account Manager</h3>
                <p>
                  2Collaboratively formulate principle capital. Progressively
                  evolve
                </p>
              </div>
            </div>


            



          </div>
        </div> */}

{/* <div className="row">
  {features.map((item, index) => (
    <div
      key={index}
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={200 + index * 200}
    >
      <div className="choose-us-card-items">
        <div className="icon">
          <Image src={item.img} alt={item.title} priority />
        </div>
        <div className="content">
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      </div>
    </div>
  ))}
</div> */}





<div className="row">
  {features.map((item, index) => (
    <div
      key={index}
      className="col-lg-4 col-md-6"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={200 + index * 200}
    >
      <Link href={item.link} style={{ textDecoration: "none" }}>
        <div className="choose-us-card-items" style={{ cursor: "pointer" }}>
          <div className="icon">
            <Image src={item.img} alt={item.title} />
          </div>
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  ))}
</div>
        
      </div>
    </section>
  );
};

export default ChooseUs;
