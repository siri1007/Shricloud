// "use client";

// import styles from "./NnservicesSection.module.scss";
// import { FiPlay } from "react-icons/fi";

// export default function HeroSection() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
        
//         {/* LEFT CONTENT */}
//         <div className={styles.left}>
//           <h1>
//             Connect workflows.
//             <br />
//             <span>Integrate data.</span>
//           </h1>

//           <p>
//             Build powerful automation pipelines without writing code.
//             Connect 500+ apps, trigger intelligent AI agents, and unify
//             your data streams into a single, reliable workflow engine.
//           </p>

//           <div className={styles.actions}>
//             <button className={styles.primaryBtn}>
//               <FiPlay /> Get Started Free
//             </button>
//             <button className={styles.secondaryBtn}>
//               Watch demo
//             </button>
//           </div>

//           {/* FEATURE CARDS */}
//           <div className={styles.cards}>
//             <div className={styles.card}>
//               <div className={styles.icon}>🔗</div>
//               <div>
//                 <h4>500+ Integrations</h4>
//                 <p>Connect apps and services seamlessly</p>
//               </div>
//               <span className={styles.badge}>New</span>
//             </div>

//             <div className={styles.card}>
//               <div className={styles.icon}>🤖</div>
//               <div>
//                 <h4>AI-Powered Nodes</h4>
//                 <p>Build intelligent automated workflows</p>
//               </div>
//             </div>

//             <div className={styles.card}>
//               <div className={styles.icon}>⚡</div>
//               <div>
//                 <h4>Pre-built Workflows</h4>
//                 <p>Launch faster with ready templates</p>
//               </div>
//               <span className={styles.badge}>300+</span>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT VISUAL */}
//         <div className={styles.right}>
//           <div className={styles.canvas}>
            
//             <button className={styles.executeBtn}>
//               ▶ Execute Workflow
//             </button>

//             {/* NODES */}
//             <div className={`${styles.node} ${styles.webhook}`}>
//               <h5>Webhook Trigger</h5>
//               <p>HTTP · POST</p>
//               <span className={styles.status}>Listening</span>
//             </div>

//             <div className={`${styles.node} ${styles.ai}`}>
//               <h5>AI Agent</h5>
//               <p>GPT-4 · Reasoning</p>
//               <span className={styles.status}>Processing</span>
//             </div>

//             <div className={`${styles.node} ${styles.db}`}>
//               <h5>Database</h5>
//               <p>Postgres · Query</p>
//               <span className={styles.status}>Write · Read</span>
//             </div>

//             <div className={`${styles.node} ${styles.api}`}>
//               <h5>REST API</h5>
//               <p>Google · Fetch</p>
//             </div>

//             <div className={`${styles.node} ${styles.slack}`}>
//               <h5>Slack</h5>
//               <p>Notify · Send</p>
//             </div>

//             <div className={`${styles.node} ${styles.output}`}>
//               <h5>Workflow Output</h5>
//               <p>Result · Response</p>
//               <span className={styles.success}>Success</span>
//             </div>

//             {/* ANIMATED LINES */}
//             <div className={styles.lines}></div>

//             {/* STATS */}
//             <div className={styles.stats}>
//               <span className={styles.greenDot}></span>
//               <b>1,293</b> tasks automated today <span>+12.4%</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }











// ----------



// "use client";

// import styles from "./NnservicesSection.module.scss";

// export default function HeroLeft() {
//   return (
//     <section className={styles.hero}>
//       <div className={styles.container}>
        
//         {/* Heading */}
//         <h1 className={styles.title}>
//           Workflow Automation Platform <br />
//           <span>Connect workflows.</span> <br />
//           <span className={styles.highlight}>Integrate data.</span>
//         </h1>

//         {/* Description */}
//         <p className={styles.description}>
//           Build powerful no-code integrations and intelligent data pipelines
//           across your entire stack. Unify every tool, trigger, and team —
//           without writing a single line of code.
//         </p>

//         {/* CTA Buttons */}
//         <div className={styles.actions}>
//           <button className={styles.primaryBtn}>Get Started</button>
//           <button className={styles.secondaryBtn}>Watch Demo</button>
//         </div>

//         {/* Stats */}
//         <div className={styles.stats}>
//           <div>
//             <h3>500+</h3>
//             <p>Integrations</p>
//           </div>
//           <div>
//             <h3>10M+</h3>
//             <p>Workflows run daily</p>
//           </div>
//           <div>
//             <h3>99.9%</h3>
//             <p>Uptime SLA</p>
//           </div>
//         </div>

//         {/* Feature Cards */}
//         <div className={styles.features}>
//           <div className={styles.card}>
//             <div>
//               <h4>500+ Integrations</h4>
//               <p>Connect apps and services seamlessly</p>
//             </div>
//             <span>→</span>
//           </div>

//           <div className={styles.card}>
//             <div>
//               <h4>AI-Powered Nodes</h4>
//               <p>Build intelligent automated workflows</p>
//             </div>
//             <span>→</span>
//           </div>

//           <div className={styles.card}>
//             <div>
//               <h4>Pre-built Workflows</h4>
//               <p>Launch faster with ready templates</p>
//             </div>
//             <span>→</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }




// --

"use client";

import { useState } from "react";
import styles from "./NnservicesSection.module.scss";
export default function HeroLeft() {
  return (
    <section className={styles.hero}>
      <div className={styles.wrapper}>
        
        {/* LEFT CONTENT */}
        <div className={styles.container}>
          
          <h1 className={styles.title}>
            Workflow Automation Platform <br />
            <span>Connect workflows.</span> <br />
            <span className={styles.highlight}>Integrate data.</span>
          </h1>

          <p className={styles.description}>
            Build powerful no-code integrations and intelligent data pipelines
            across your entire stack. Unify every tool, trigger, and team —
            without writing a single line of code.
          </p>

          <div className={styles.actions}>
            <button className={styles.primaryBtn}>Get Started</button>
            <button className={styles.secondaryBtn}>Watch Demo</button>
          </div>

          <div className={styles.stats}>
            <div>
              <h3>500+</h3>
              <p>Integrations</p>
            </div>
            <div>
              <h3>10M+</h3>
              <p>Workflows run daily</p>
            </div>
            <div>
              <h3>99.9%</h3>
              <p>Uptime SLA</p>
            </div>
          </div>

          <div className={styles.features}>
            <div className={styles.card}>
              <div>
                <h4>500+ Integrations</h4>
                <p>Connect apps and services seamlessly</p>
              </div>
              <span>→</span>
            </div>

            <div className={styles.card}>
              <div>
                <h4>AI-Powered Nodes</h4>
                <p>Build intelligent automated workflows</p>
              </div>
              <span>→</span>
            </div>

            <div className={styles.card}>
              <div>
                <h4>Pre-built Workflows</h4>
                <p>Launch faster with ready templates</p>
              </div>
              <span>→</span>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className={styles.imageWrapper}>
          <img 
            src="/img/workflow-ui.png" 
            alt="Workflow UI" 
            className={styles.image}
          />
        </div>

      </div>
    </section>
  );
}