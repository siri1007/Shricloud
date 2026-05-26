// ------------------Navbar styles in Mobile Menu-------------------------

"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import shricloudlogo from "@/public/img/logo/shri logomavy.svg";

const OffCanvas = ({ toggleOffCanvas, handleToggleOffCanvas }: any) => {
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const [openNestedMenu, setOpenNestedMenu] = useState<string | null>(null);

  const handleSubmenu = (submenu: string) => {
    if (submenu === openSubMenu) {
      setOpenSubMenu(null);
    } else {
      setOpenSubMenu(submenu);
    }
  };

  const handleNestedmenu = (nestmenu: string) => {
    if (nestmenu === openNestedMenu) {
      setOpenNestedMenu(null);
    } else {
      setOpenNestedMenu(nestmenu);
    }
  };

  const isNestedMenuOpen = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " sub-menu-active" : " ";
  };

  const isNestedMenuButton = (nestmenu: string) => {
    return nestmenu === openNestedMenu ? " drop-active" : " ";
  };

  const isSubMenuOpen = (submenu: string) => {
    return submenu === openSubMenu ? "sub-menu-active" : " ";
  };

  const isSubMenuButton = (submenu: string) => {
    return submenu === openSubMenu ? " drop-active" : " ";
  };

  return (
    <>
      <div className="fix-area">
        <div
          className={
            (toggleOffCanvas ? " info-open" : " ") + " offcanvas__info"
          }
        >
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <Image src={shricloudlogo} alt="logo-img" priority />
                  </Link>
                </div>
                <div
                  className="offcanvas__close"
                  onClick={() => handleToggleOffCanvas(false)}
                >
                  <button>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                Nullam dignissim, ante scelerisque the is euismod fermentum odio
                sem semper the is erat, a feugiat leo urna eget eros. Duis
                Aenean a imperdiet risus.
              </p>
              <div className="mobile-menu fix mb-3">
                <nav className="mean-nav d-block d-xl-none">
                  <ul>
                   

                    <li>
                      <a
                        className={`drop ${isSubMenuButton("hosting")}`}
                        onClick={() => handleSubmenu("hosting")}
                      >
                        Hosting
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("hosting")}`}>
                        <li>
                          <Link href="Wordpress-cloud-Hosting">
                            Wordpress cloud
                          </Link>
                        </li>

                        <li>
                          <Link href="Elite-cloud">Elite Cloud</Link>
                        </li>

                        <li>
                          <Link href="vps-hosting">Cloud VPS</Link>
                        </li>

                        <li>
                          <Link href="reseller-hosting">Reseller Cloud</Link>
                        </li>

                        <li>
                          <Link href="dedicated-hosting">
                            Dedicated Servers
                          </Link>
                        </li>

                        <li>
                          <Link href="N8n-hosting">N8n</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="domain">Domain</Link>
                    </li>

                    <li>
                      <a
                        className={`drop ${isSubMenuButton("support")}`}
                        onClick={() => handleSubmenu("support")}
                      >
                        Support
                      </a>
                      <ul className={`submenu ${isSubMenuOpen("support")}`}>
                        <li>
                          <Link href="https://shricloud.com/kb/">
                            Knowledge Base
                          </Link>
                        </li>

                        <li>
                          <Link href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=1">
                            Technical
                          </Link>
                        </li>

                        <li>
                          <Link href="https://my.shricloud.com/index.php?/tickets/new/">
                            Sales
                          </Link>
                        </li>

                        <li>
                          <Link href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=2">
                            Migration
                          </Link>
                        </li>

                        <li>
                          <Link href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=3">
                            Billing
                          </Link>
                        </li>

                        <li>
                          <Link href="https://my.shricloud.com/index.php?/tickets/new/&dept_id=5">
                            Affiliate
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        className={`drop ${isSubMenuButton("about")}`}
                        onClick={() => handleSubmenu("about")}
                      >
                        About
                      </a>

                      <ul className={`submenu ${isSubMenuOpen("about")}`}>
                        <li>
                          <Link href="about">Company</Link>
                        </li>
                        <li>
                          <Link href="contact">Contact Us</Link>
                        </li>
                        <li>
                          <Link href="/terms-of-service">Terms of Service</Link>
                        </li>
                        <li>
                          <Link href="/cookie-policy">Cookie Policy</Link>
                        </li>

                        <li>
                          <Link href="/afi">Affiliate Policy</Link>
                        </li>

                        <li>
                          <Link href="/refund-policy">Refund Policy</Link>
                        </li>

                        <li>
                          <Link href="/privacy-policy">Privacy Policy</Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </nav>



                <div className="client-area-btn mt-4">
  <Link href="https://my.shricloud.com/index.php?/clientarea/">
    <button className="client-btn">
      Client Area
    </button>
  </Link>
</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => handleToggleOffCanvas(false)}
        className={
          (toggleOffCanvas ? " overlay-open" : " ") + " offcanvas__overlay"
        }
      ></div>
    </>
  );
};

export default OffCanvas;
