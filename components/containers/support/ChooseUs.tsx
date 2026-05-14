import Image from "next/image";
import Link from "next/link";

import one from "@/public/img/support/support.png";
import two from "@/public/img/support/customization.png";
import three from "@/public/img/support/technical.png";
import four from "@/public/img/support/account.png";

const features = [
  {
    img: one,
    title: "Raise a Ticket",
    desc: "For technical and your hosting account-related issues.",
    link: "https://my.shricloud.com/index.php?/support/",
  },
  {
    img: two,
    title: "Chat with us",
    desc: "For sales, technical and related Queries.",
    link: "https://tawk.to/chat/65cb0abb8d261e1b5f5f80c0/1hmgi3rb6",
  },
  {
    img: three,
    title: "Collabs/Partnerships",
    desc: "Want to partner with ShriCloud? Reach out now!",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSc6NRJzJe6Er3YjzPJWH7Tnjy6TEenbUDbm8lePh2I0iytbhA/viewform?usp=sf_link",
  },
  {
    img: four,
    title: "Contact support",
    desc: "Contact our support team  for hosting-related help.",
    link: "https://t.me/shricloud",
  },
  {
    img: one,
    title: "Mail us",
    desc: (
      <>
        E-mail to Info@Shricloud.com our team 
        respond in time.
      </>
    ),
    link: "https://www.shricloud.com/contact-us/",
  },
  {
    img: two,
    title: "Head office",
    desc: (
      <>
        Hyderabad, Telangana,
        <br />
        India, 500085
      </>
    ),
    link: "#",
  },
];

const ChooseUs = () => {
  return (
    <section className="choose-us-section fix section-padding">
      <div className="container">
        
        {/* Section Heading */}
        <div className="section-title text-center mb-50">
          <h2>our Premium Support</h2>

          <p>We’re here for you—reach out anytime! 👍</p>
        </div>

        {/* Support Cards */}
        <div className="row">
          {features.map((item, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 mb-3"
            >
              <Link
                href={item.link}
                style={{ textDecoration: "none" }}
              >
                <div
                  className="choose-us-card-items"
                  style={{
                    cursor: "pointer",
                    textAlign: "center",
                    height: "100%",
                  }}
                >
                  {/* Icon */}
                  <div
                    className="icon"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "10px",
                    }}
                  >
                    <Image
                      src={item.img}
                      alt={item.title}
                    />
                  </div>

                  {/* Content */}
                  <div className="content">
                    <h3
                      style={{
                        textAlign: "center",
                        marginBottom: "12px",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        textAlign: "center",
                        marginBottom: 0,
                      }}
                    >
                      {item.desc}
                    </p>
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