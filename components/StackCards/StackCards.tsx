"use client";
import Image from "next/image";
import styles from "./StackCards.module.scss";

const data = [
 // Variation 1
{
  tag: "AI Website Builder 🪄",
  title: "Your Website, Built by AI",
  desc: "Describe your business, and our AI creates a stunning WordPress site with smart content, SEO-ready structure, and cloud hosting — no code, no hassle.",
  // desc: "Generate a complete WordPress website in minutes with smart AI design and content.",
  img: "/images/ai-builder.jpg",
},

// Variation 2
{
  tag: "Powered by AI ⚡",
  title: "Stop Building. Start Launching.",
  desc: "Our AI WordPress builder designs, writes, and deploys your website instantly — fully optimized, beautifully crafted, and hosted on lightning-fast cloud infrastructure.",
  // desc: "Generate My Site in Minutes",
  img: "/images/ai-builder.jpg",
},

// Variation 3
{
  tag: "AI WordPress Builder 🚀",
  title: "From Idea to Live Website — Without Writing a Single Line of Code",
  desc: "Tell the AI your vision. Get a professionally designed, SEO-optimized WordPress site backed by secure, high-performance cloud hosting — ready before your coffee gets cold.",
  // desc: "Try the AI Builder Free",
  img: "/images/ai-builder.jpg",
},
];

export default function StackCards() {
  return (
    <section className={styles.wrapper}>
      
      {/* 🔥 TOP HEADING SECTION */}
      <div className={styles.header}>
        <h1>Build, launch, and scale your website — all in one place</h1>
        <p>
          From domains and hosting to business email and AI-powered tools —
          everything you need to grow your online presence effortlessly.
        </p>
      </div>

      

      {/* 🔥 STACK CARDS */}
      {data.map((item, index) => (
        <div className={styles.card} key={index}>
          <div className={styles.inner}>
            
            {/* LEFT CONTENT */}
            <div className={styles.left}>
              <span className={styles.tag}>{item.tag}</span>
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
              <button>Get Started</button>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.right}>
              <Image
                src={item.img}
                alt={item.title}
                width={500}
                height={400}
              />
            </div>

          </div>
        </div>
      ))}
    </section>
  );
}