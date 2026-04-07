import Link from "next/link";
import Image from "next/image";
import one from "@/public/img/news/01.jpg";
import two from "@/public/img/news/02.jpg";
import three from "@/public/img/news/03.jpg";
import four from "@/public/img/news/07.jpg";
import five from "@/public/img/news/08.jpg";
import six from "@/public/img/news/09.jpg";

const NewsGrid = () => {
  return (
    <section className="news-section fix section-padding">
      <div className="container">
        <div className="row g-4">
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={one} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Shared Hosting</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Attentive was born in 2015 help sales teams
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-1.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={two} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Uncategorized</span>
                  <p>MARCH 22, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Best and fastest data server ever
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-2.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={three} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Reseller Hosting</span>
                  <p>MARCH 14, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Life won&apos;t one beast air over above all
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-3.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="300"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={four} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Shared Hosting</span>
                  <p>MARCH 24, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Hosting Guide Everything You Need to Know
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-1.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="500"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={five} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Uncategorized</span>
                  <p>MARCH 22, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    The Importance of Reliable Hosting for Your Online{" "}
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-2.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-4 col-lg-6 col-md-6 "
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay="700"
          >
            <div className="news-card-items mt-0 box-shadow">
              <div className="news-image">
                <Image src={six} alt="news-img" />
              </div>
              <div className="news-content">
                <div className="post-list">
                  <span>Reseller Hosting</span>
                  <p>MARCH 14, 2024</p>
                </div>
                <h3>
                  <Link href="news-details">
                    Top 10 Hosting Mistakes to Avoid for a Seamless{" "}
                  </Link>
                </h3>
                <div className="author-items">
                  <div className="author-image">
                    <div
                      className="author-img bg-cover"
                      style={{
                        backgroundImage: "url(/img/news/post-3.png)",
                      }}
                    ></div>
                    <div className="content">
                      <h6>Admin</h6>
                      <p>Co, Founder</p>
                    </div>
                  </div>
                  <Link href="news-details" className="link-btn">
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="page-nav-wrap pt-5 text-center "
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="300"
        >
          <ul>
            <li>
              <Link className="page-numbers icon" href="/">
                <i className="fa-solid fa-arrow-left-long"></i>
              </Link>
            </li>
            <li>
              <Link className="page-numbers" href="/">
                01
              </Link>
            </li>
            <li>
              <Link className="page-numbers" href="/">
                02
              </Link>
            </li>
            <li>
              <Link className="page-numbers" href="/">
                03
              </Link>
            </li>
            <li>
              <Link className="page-numbers icon" href="/">
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
