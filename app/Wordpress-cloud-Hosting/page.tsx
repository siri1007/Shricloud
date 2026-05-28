




import type { Metadata } from "next";
import WordpressPageClient from "./WordpressPageClient";

export const metadata: Metadata = {
  title: "Best WordPress Hosting in India - Starting at ₹99",

  description:
    "Speed, Security, and Scale: Included with the best WordPress Hosting by AWS Servers.",

  keywords: [
    "shricloud",
    " Best Wordpress Hosting",
    "managed wordpress hosting",
    "cheap wordpress hosting",
    "wordpress servers",
  ],
};

export default function Page() {
  return <WordpressPageClient />;
}