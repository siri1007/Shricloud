// "use client";

// import styles from "./AiSection.module.scss";

// const AiSection = () => {
//   return (
//     <section className={styles.aiSection}>
//       <div className={styles.container}>
//         <h2 className={styles.heading}>
//           Save hours managing WordPress <br /> with AI
//         </h2>

//         <div className={styles.grid}>
//           {/* Item 1 */}
//           <div className={styles.card}>
//             <div className={`${styles.icon} ${styles.iconPurple}`}>
//               <span>○</span>
//             </div>
//             <h3>AI Website Builder</h3>
//             <p>
//               Build and launch in under 1 minute with Elementor or Block editor.
//             </p>
//           </div>

//           {/* Item 2 */}
//           <div className={styles.card}>
//             <div className={`${styles.icon} ${styles.iconGreen}`}>
//               <span>◎</span>
//             </div>
//             <h3>AI Troubleshooter</h3>
//             <p>
//               Auto-detects errors and resolves 70% of issues without your input.
//             </p>
//           </div>

//           {/* Item 3 */}
//           <div className={styles.card}>
//             <div className={`${styles.icon} ${styles.iconBlue}`}>
//               <span>⚡</span>
//             </div>
//             <h3>AI Optimizer</h3>
//             <p>
//               Raises PageSpeed to 99. Detects slow queries, applies LiteSpeed AI.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AiSection;



"use client";
import styles from "./AiSection.module.scss";

const AiSection = () => {
  return (
    <section className={styles.aiSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>
          Save hours managing WordPress with AI
        </h2>

        <div className={styles.cards}>
          {/* Card 1 */}
          <div className={styles.card}>
            <div className={`${styles.top} ${styles.purple}`}>
              <div className={styles.badge}>
                <span className={styles.dot}></span>
                Building page...
              </div>
            </div>
            <div className={styles.bottom}>
              <h3>AI Website Builder</h3>
              <p>
               Build and launch a website in under a minute using Elementor or the Block Editor. Create blogs, business websites, or WooCommerce stores instantly with ease.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <div className={`${styles.top} ${styles.green}`}>
              <div className={styles.badge}>
                <span className={styles.dot}></span>
                All errors fixed
              </div>
            </div>
            <div className={styles.bottom}>
              <h3>AI Troubleshooter</h3>
              <p>
              Reduce downtime with automatic error detection and smart fixes—AI resolves up to 70% of issues within minutes, no technical input required.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <div className={`${styles.top} ${styles.blue}`}>
              <div className={styles.badge}>
                <span className={styles.dot}></span>
                PageSpeed 99
              </div>
            </div>
            <div className={styles.bottom}>
              <h3>AI Optimizer</h3>
              <p>
              Boost site performance by up to 20%—AI applies LiteSpeed optimizations and automatically detects slow queries for a faster, more reliable website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiSection;