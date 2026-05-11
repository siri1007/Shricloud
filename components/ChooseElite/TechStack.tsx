// import React from "react";
// import styles from "./techstack.module.scss";

// const techIcons = [
//   "/techstack/django.png",
//   "/techstack/php.png",
//   "/techstack/django.png",
//   "/techstack/mongodb.png",
    
//     "/techstack/python.png",
//     "/techstack/react.png",
// ];

// const TechStack: React.FC = () => {
//   return (
//     <section className={styles.techSection}>
//       <h2 className={styles.title}>
//         Host Any Technology Seamlessly on Elite Cloud
//       </h2>

//       <div className={styles.slider}>
//         <div className={styles.slideTrack}>
//          {techIcons.map((icon, index) => (
//   <div className={styles.card} key={index}>
//     <img src={icon} alt="tech" />
//   </div>
// ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


import React from "react";
import styles from "./techstack.module.scss";

const techIcons = [
  "/techstack/django.png",
  "/techstack/php.png",
  "/techstack/python.png",
  "/techstack/react.png",
  "/techstack/node.png",
  // "/techstack/aws.png",
  "/techstack/bootstrap.png",
];


const TechStack: React.FC = () => {
  return (
    <section className={styles.techSection}>
      <h2 className={styles.title}>
       Latest technologies integrated
      </h2>

      <div className={styles.slider}>
        <div className={styles.slideTrack}>
          {/* 🔥 duplicate for infinite loop */}
          {[...techIcons, ...techIcons].map((icon, index) => (
            <div className={styles.card} key={index}>
              <img src={icon} alt="tech" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;