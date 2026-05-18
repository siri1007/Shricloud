import Link from "next/link";
import Image from "next/image";
import thumb from "@/public/img/404.png";

const ErrorSection = () => {
  return (
    <section className="Error-section section-padding fix">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9">
            <div className="error-items">
              <div
                className="error-image "
              
              >
                {/* <Image src={thumb} alt="img" /> */}
              </div>
              <h2
               
              >
                <span>Oops!</span> Page not found
              </h2>
              <p
                className="mb-3 "
               
              >
                The page you are looking for does not exist
              </p>
              <Link
                href="/"
                className="theme-btn "
               
              >
                Back to home pages
                <i className="fa-solid fa-arrow-right-long"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ErrorSection;
