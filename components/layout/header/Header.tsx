"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Topbar from "./Topbar";
import one from "@/public/img/menu-icon/web-host.png";
import two from "@/public/img/menu-icon/host-service.png";
import three from "@/public/img/menu-icon/host-solut.png";
import four from "@/public/img/menu-icon/host-agen.png";
import five from "@/public/img/menu-icon/about.png";
import six from "@/public/img/menu-icon/black-friday.png";
import seven from "@/public/img/menu-icon/affiliate.png";
import eight from "@/public/img/menu-icon/pricing.png";
import nine from "@/public/img/menu-icon/data-center.png";
import ten from "@/public/img/menu-icon/service.png";
import eleven from "@/public/img/menu-icon/team.png";
import twelve from "@/public/img/menu-icon/error.png";
import thirteen from "@/public/img/menu-icon/share-host.png";
import fourteen from "@/public/img/menu-icon/reseller-shost.png";
import fifteen from "@/public/img/menu-icon/dedicated-host.png";
import sixteen from "@/public/img/menu-icon/vps-host.png";
import seventeen from "@/public/img/menu-icon/wordpress-host.png";

import OffCanvas from "./OffCanvas";
import nighteen from "@/public/img/menu-icon/n8n.png";

import shricloudlogo from "@/public/img/logo/shri logomavy.svg";
import shricloudwhitelogo from "@/public/img/logo/shricloud logo white 186x35.svg";

// import shrinavy from ""
// import Link from "next/link";

{
  /* <Link href="/affiliate">Affiliate Policy</Link> */
}

const Header = () => {
  // search toggle
  const [searchToggle, setSearchToggle] = useState(false);

  const handleSearch = () => {
    setSearchToggle(!searchToggle);
  };

  const closeSearch = () => {
    setSearchToggle(false);
  };

  const handleClick = (e: any) => {
    e.stopPropagation();
  };

  // sticky header
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // offcanvas area
  const [toggleOffCanvas, setToggleOffCanvas] = useState(false);

  const handleToggleOffCanvas = () => {
    setToggleOffCanvas(!toggleOffCanvas);
  };

  useEffect(() => {
    const handleResizeHeader = (): void => {
      setToggleOffCanvas(false);
    };

    window.addEventListener("resize", handleResizeHeader);

    return () => {
      window.removeEventListener("resize", handleResizeHeader);
    };
  }, []);

  return (
    <>
      <header className="header-section-1">
        <Topbar />
        <div
          id="header-sticky"
          className={(scrolled ? " sticky animated" : " ") + " header-1"}
        >
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <Image
                        src={shricloudwhitelogo}
                        alt="logo-img"
                        width={244} // increase this
                        height={60} // adjust proportion
                        priority
                      />
                    </Link>
                    <Link href="/" className="header-logo-2">
                      <Image
                        src={shricloudlogo}
                        alt="logo-img"
                        priority
                        width={244} // increase this
                        height={60}
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right d-flex justify-content-end align-items-center">
                  <div className="mean__menu-wrapper">
                    <div className="main-menu d-none d-xl-block">
                      <nav id="mobile-menu">
                        <ul>
                          <li className="has-dropdown active menu-thumb">
                            <Link href="/">
                              Home
                              <i className="fas fa-angle-down"></i>
                            </Link>

                            <ul className="submenu has-homemenu has-menu-home">
                              <li className="border-none">
                                <div className="homemenu-items">
                                  <div className="homemenu-list">
                                    <div className="icon">
                                      <Image src={one} alt="img" priority />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        <Link href="/">Web Hosting</Link>
                                      </h6>
                                      <p>Powerful bare metal server</p>
                                    </div>
                                  </div>
                                  <div className="homemenu-list">
                                    <div className="icon">
                                      <Image src={two} alt="img" priority />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        <Link href="index-2">
                                          Hosting Services
                                        </Link>
                                      </h6>
                                      <p>Flexible virtual machine</p>
                                    </div>
                                  </div>
                                  <div className="homemenu-list">
                                    <div className="icon">
                                      <Image src={three} alt="img" priority />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        <Link href="index-3">
                                          Hosting Solutions
                                        </Link>
                                      </h6>
                                      <p>Powerful Hosting solutions</p>
                                    </div>
                                  </div>
                                  <div className="homemenu-list mb-0">
                                    <div className="icon">
                                      <Image src={four} alt="img" priority />
                                    </div>
                                    <div className="content">
                                      <h6>
                                        <Link href="index-4">
                                          Hosting Agency
                                        </Link>
                                      </h6>
                                      <p>Big hosting agency</p>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>
                          <li className="has-dropdown active d-xl-none">
                            <Link href="team" className="border-none">
                              Home
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link href="/">Web Hosting</Link>
                              </li>
                              <li>
                                <Link href="index-2">Hosting Services</Link>
                              </li>
                              <li>
                                <Link href="index-3">Hosting Solutions</Link>
                              </li>
                              <li>
                                <Link href="index-4">Hosting Agency</Link>
                              </li>
                            </ul>
                          </li>

                          <li className="has-dropdown menu-thumb">
                            <Link href="/">
                              Hosting
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu has-homemenu has-menu-hosting">
                              <li className="border-none">
                                <div className="homemenu-items">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={seventeen}
                                            alt="img"
                                            priority
                                          />
                                        </div>

                                        <div className="content">
                                          <h6>
                                            <Link href="Wordpress-cloud-Hosting">
                                              WordPress Cloud
                                            </Link>
                                          </h6>
                                          <p>Top-Selling Solution</p>
                                        </div>

                                        
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fourteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>

                                        <div className="content">
                                          <h6>
                                            <Link href="reseller-hosting">
                                              Reseller Hosting
                                            </Link>

                                            {/* <Link href="reseller">
                                              Reseller Hosting
                                            </Link> */}
                                          </h6>
                                          <p>Great Value Plans</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image src={two} alt="img" priority />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="Elite-cloud">
                                              Elite Cloud
                                            </Link>
                                          </h6>
                                          <p>Premium Performance</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fifteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="dedicated-hosting">
                                              Dedicated Hosting
                                            </Link>
                                          </h6>
                                          <p>High Power & Reliability</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={sixteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="vps-hosting">
                                              VPS Cloud
                                            </Link>
                                          </h6>
                                          <p>Scalable Cloud Hosting</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={nighteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="N8n-hosting">N8n</Link>
                                          </h6>
                                          <p>Connect, Automate, Scale</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>

                          {/* Hosting Mobile menu Start */}
                          <li className="has-dropdown active d-xl-none">
                            <Link href="team" className="border-none">
                              Hosting
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              {/* <li>
                                <Link href="share-hosting">Share Hosting</Link>
                              </li> */}

                              <li>
                                <Link href="N8n-hosting">N8n-hosting</Link>
                              </li>

                              <li>
                                <Link href="reseller-hosting">
                                  Reseller Hosting
                                </Link>
                              </li>

                              <li>
                                <Link href="dedicated-hosting">
                                  Dedicated Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="vps-hosting">Vps Hosting</Link>
                              </li>
                              <li>
                                <Link href="Wordpress-cloud-Hosting">
                                  WordPress Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="Elite-cloud">Elite Cloud</Link>
                              </li>
                            </ul>
                          </li>

                          {/* Hosting Mobile menu end */}

                          <li>
                            <Link href="domain">Domain</Link>
                          </li>

                          <li className="has-dropdown menu-thumb">
                            <Link href="/">
                              All Services
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu has-homemenu">
                              <li className="border-none">
                                <div className="homemenu-items">
                                  <div className="row">
                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={seventeen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="Wordpress-cloud-Hosting">
                                              Premium Cloud
                                            </Link>
                                          </h6>
                                          <p>Our Best Selling Service</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fourteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="reseller-hosting">
                                              Reseller Cloud
                                            </Link>
                                          </h6>
                                          <p>Start hosting business</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={twelve}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="error">
                                              Error Pages
                                            </Link>
                                          </h6>
                                          <p>Back to Home</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image src={two} alt="img" priority />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="Elite-cloud">
                                              Elite Cloud
                                            </Link>
                                          </h6>
                                          <p>For High Traffic Websites</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fifteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="dedicated-hosting">
                                              Dedicated Servers
                                            </Link>
                                          </h6>
                                          <p>Bare Metal Servers</p>
                                        </div>
                                      </div>
                                    </div>

                                    {/* <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={eight}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="pricing">
                                              Reseller Cloud
                                            </Link>
                                          </h6>
                                          <p>Start hosting business</p>
                                        </div>
                                      </div>
                                    </div> */}
                                    {/* <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={eight}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="pricing-2">
                                              Dedicated Servers
                                            </Link>
                                          </h6>
                                          <p>Bare Metal Servers</p>
                                        </div>
                                      </div>
                                    </div> */}
                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={nine}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="data-center">
                                              Basic Hosting
                                            </Link>
                                          </h6>
                                          <p>Beginners Hosting</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={sixteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="vps-hosting">
                                              Cloud VPS
                                            </Link>
                                          </h6>
                                          <p>Private VPS Server</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image src={nighteen} alt="img" priority />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="N8n-hosting">N8n</Link>
                                          </h6>
                                          <p>Connect, Automate, Scale</p>
                                        </div>
                                      </div>
                                    </div>

                                    <div className="col-lg-4">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={eleven}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="team">Team</Link>
                                          </h6>
                                          <p>Experts Member</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li>

                          {/*   All Services Mobile menu */}

                          <li className="has-dropdown active d-xl-none">
                            <Link
                              href="
                            /"
                              className="border-none"
                            >
                              {/* Pages */}
                              All services
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link href="Wordpress-cloud-Hosting">
                                  Premium cloud
                                </Link>
                              </li>
                              <li>
                                <Link href="black-friday"> Elite Cloud</Link>
                              </li>
                              <li>
                                <Link href="reseller-hosting">
                                  Reseller Cloud
                                </Link>
                              </li>
                              <li>
                                <Link href="wordpress-hosting">
                                  WordPress Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="dedicated-hosting">
                                  Dedicated Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="vps-hosting"> Basic Hosting</Link>
                              </li>
                              <li>
                                <Link href="cloud-hosting">cloud-hosting</Link>
                              </li>
                              <li>
                                <Link href="team">Team</Link>
                              </li>
                              <li>
                                <Link href="team-details">Team Details</Link>
                              </li>
                              <li>
                                <Link href="error">Error Pages</Link>
                              </li>
                            </ul>
                          </li>

                          {/* All Services Mobile menu  End */}

                          {/* <li className="has-dropdown menu-thumb">
                            <Link href="/">
                              Hosting
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu has-homemenu has-menu-hosting">
                              <li className="border-none">
                                <div className="homemenu-items">
                                  <div className="row">
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={thirteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="share-hosting">
                                              Premium Cloud
                                            </Link>
                                          </h6>
                                          <p>Highest Selling Service</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fourteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="reseller-hosting">
                                              Reseller Hosting
                                            </Link>
                                          </h6>
                                          <p>Excellent Offer</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={fifteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="dedicated-hosting">
                                              Dedicated Hosting
                                            </Link>
                                          </h6>
                                          <p>Flexible Plans</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={sixteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="vps-hosting">
                                              Basic Hosting
                                            </Link>
                                          </h6>
                                          <p>Flexible Plans</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={seventeen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="wordpress-hosting">
                                              Elie Cloud
                                            </Link>
                                          </h6>
                                          <p>Best Provider</p>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="col-lg-6">
                                      <div className="homemenu-list">
                                        <div className="icon">
                                          <Image
                                            src={eightteen}
                                            alt="img"
                                            priority
                                          />
                                        </div>
                                        <div className="content">
                                          <h6>
                                            <Link href="cloud-hosting">
                                              Cloud vps
                                            </Link>
                                          </h6>
                                          <p>Worldwide Data Center</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </li> */}

                          {/* <li className="has-dropdown active d-xl-none">
                            <Link href="team" className="border-none">
                              Hosting
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link href="share-hosting">Share Hosting</Link>
                              </li>
                              <li>
                                <Link href="reseller-hosting">
                                  Reseller Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="dedicated-hosting">
                                  Dedicated Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="vps-hosting">Basic Hosting</Link>
                              </li>
                              <li>
                                <Link href="wordpress-hosting">
                                  WordPress Hosting
                                </Link>
                              </li>
                              <li>
                                <Link href="cloud-hosting">Cloud Hosting</Link>
                              </li>
                            </ul>
                          </li> */}

                          {/* <li>
                            <Link href="domain">Domain</Link>
                          </li> */}
                          {/* <li>
                            <Link href="news">
                              News
                              <i className="fas fa-angle-down"></i>
                            </Link>
                            <ul className="submenu">
                              <li>
                                <Link href="news-grid">News Grid</Link>
                              </li>
                              <li>
                                <Link href="news">News List</Link>
                              </li>
                              <li>
                                <Link href="news-details">News Details</Link>
                              </li>
                            </ul>
                          </li> */}

                          <li className="has-dropdown menu-thumb support-menu">
                            <Link href="/">
                              Support
                              <i className="fas fa-angle-down"></i>
                            </Link>

                            <ul className="submenu support-submenu">
                              <li>
                                <a
                                  href="https://shricloud.com/kb/"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-book"></i>
                                  <span>Knowledge Base</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=1"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-tools"></i>
                                  <span>Technical</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://my.shricloud.com/index.php?/tickets/new/"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-shopping-cart"></i>
                                  <span>Sales</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=2"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-exchange-alt"></i>
                                  <span>Migration</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=3 "
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-file-invoice-dollar"></i>
                                  <span>Billing</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=5"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-users"></i>
                                  <span>Affiliate</span>
                                </a>
                              </li>

                              <li>
                                <a
                                  href="https://www.shricloud.com/blog/"
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "12px",
                                  }}
                                >
                                  <i className="fas fa-blog"></i>
                                  <span>Blog</span>
                                </a>
                              </li>
                            </ul>
                          </li>

                          <li>
                            <Link href="#">
                              About
                              <i className="fas fa-angle-down"></i>
                            </Link>

                            <ul className="submenu">
                              <li>
                                <Link href="about">Company</Link>
                              </li>

                              <li>
                                <Link href="contact">Contact Us</Link>
                              </li>

                              <li>
                                <Link href="/terms-of-service">
                                  Terms of Service
                                </Link>
                              </li>

                              {/* <li>
                                <Link href="faq">Faq</Link>
                              </li> */}

                              {/* <li>
                                <Link href="error">Error 404</Link>
                              </li> */}

                              <li>
                                <Link href="/cookie-policy">Cookie Policy</Link>
                              </li>

                              <li>
                                <Link href="/affiliate-policy">Affiliate Policy</Link>
                              </li>

                              {/* <li>
                                <Link href="support">Support</Link>
                              </li> */}

                              <li>
                                <Link href="/refund-policy">Refund Policy</Link>
                              </li>

                              <li>
                                <Link href="/privacy-policy">
                                  Privacy Policy
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  {/* <a
                    className="search-trigger search-icon"
                    onClick={handleSearch}
            /      >
                    <i className="fal fa-search"></i>
                  </a> */}
                  <div className="header__hamburger d-xl-none my-auto">
                    <div
                      className="sidebar__toggle"
                      onClick={handleToggleOffCanvas}
                    >
                      <i className="fas fa-bars"></i>
                    </div>
                  </div>
                  <div className="header-button">
                    <Link
                      href="https://my.shricloud.com/index.php?/clientarea/"
                      className="theme-btn"
                    >
                      Client Area
                      <i className="fa-solid fa-arrow-right-long"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={(searchToggle ? " open" : " ") + " search-wrap"}
        onClick={closeSearch}
      >
        <div className="search-inner">
          <i
            className="fas fa-times search-close"
            id="search-close"
            onClick={closeSearch}
          ></i>
          <div className="search-cell">
            <form method="get">
              <div className="search-field-holder">
                <input
                  type="search"
                  className="main-search-input"
                  placeholder="Search..."
                  onClick={handleClick}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
      <OffCanvas
        toggleOffCanvas={toggleOffCanvas}
        handleToggleOffCanvas={handleToggleOffCanvas}
      />
    </>
  );
};

export default Header;
