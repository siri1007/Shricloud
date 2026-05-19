"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./WhatsappChat.module.scss";

const WhatsAppChat = () => {
  const phoneNumber = "917416451628";
  const message = "Hi! I want to know more about your services.";

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className={styles.whatsappIcon}
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/whatsapp.png"
        alt="WhatsApp Chat"
        width={35}
        height={35}
      />
    </Link>
  );
};

export default WhatsAppChat;