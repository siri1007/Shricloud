"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import google from "@/public/img/sign/google.png";
import facebook from "@/public/img/sign/fb.png";
import one from "@/public/img/sign/login.png";
import two from "@/public/img/sign/create.png";

const Topbar = () => {
  

  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="header-top-wrapper">
            <ul className="contact-list">
              <li>
                <i className="far fa-envelope"></i>
                <Link href="mailto:info@shricloud.com">info@shricloud.com</Link>
              </li>
              {/* <li>
                <i className="fa-regular fa-phone"></i>
                <Link href="tel:+20866660112">+208-6666-0112</Link>
              </li> */}
            </ul>
           
            <ul className="list">
              <li>
                <i className="fa-light fa-comments"></i>
                <Link href="https://tawk.to/chat/65cb0abb8d261e1b5f5f80c0/1hmgi3rb6">Live Chat</Link>
              </li>


               <li>
                <i className="fa-light fa-user"></i>
                <Link href="https://my.shricloud.com/index.php?/clientarea/">Login</Link>
              </li>




             
            </ul>
          </div>
        </div>
      </div>

     

      
    </>
  );
};

export default Topbar;
