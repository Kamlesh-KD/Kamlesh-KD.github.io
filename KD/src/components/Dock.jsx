// import React, { useRef, useState } from "react";
// import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
// import { FaHome, FaBook, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
// import { FaGithub,FaLinkedin } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import { FaXTwitter } from "react-icons/fa6";
// import { useWindowSize } from "../utils/useWindowSize";
// import "./Dock.css";

// function Dock() {
//   const size = useWindowSize();
//   const isMobile = size.width <= 768;

//   if (isMobile) {
//     return <MobileDock />;
//   }

//   return <DesktopDock />;
// }

// function DesktopDock() {
//   const mouseX = useMotionValue(Infinity);
//   const [activeLink, setActiveLink] = useState("#home");

//   return (
//     <motion.div
//       onMouseMove={(e) => mouseX.set(e.pageX)}
//       onMouseLeave={() => mouseX.set(Infinity)}
//       className="dock-container"
//     >
//     <SocialDockLeft/>
//       <AppIcon
//         icon={<FaHome />}
//         link="#home"
//         label="Home"
//         mouseX={mouseX}
//         isActive={activeLink === "#home"}
//         setActiveLink={setActiveLink}
//       />
//       <AppIcon
//         icon={<FaBook />}
//         link="#publications"
//         label="Publications"
//         mouseX={mouseX}
//         isActive={activeLink === "#publications"}
//         setActiveLink={setActiveLink}
//       />
//       <AppIcon
//         icon={<FaProjectDiagram />}
//         link="#projects"
//         label="Projects"
//         mouseX={mouseX}
//         isActive={activeLink === "#projects"}
//         setActiveLink={setActiveLink}
//       />
//       <AppIcon
//         icon={<FaFileAlt />}
//         link="#cv"
//         label="CV"
//         mouseX={mouseX}
//         isActive={activeLink === "#cv"}
//         setActiveLink={setActiveLink}
//       />
//     <SocialDockRight/>
//     </motion.div>
//   );
// }

// function SocialDockLeft() {
//     const mouseX = useMotionValue(Infinity);
  
//     return (
//       <motion.div
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//         className="social-dock-container-left"
//       >
//         <SocialIcon
//           icon={<MdOutlineMail />}
//           link="mail.google.com"
//           mouseX={mouseX}
//         />
//         <SocialIcon
//           icon={<FaXTwitter />}
//           link="www.twitter.com"
//           mouseX={mouseX}
//         />
//       </motion.div>
//     );
//   }
  
// function SocialDockRight() {
//     const mouseX = useMotionValue(Infinity);
  
//     return (
//       <motion.div
//         onMouseMove={(e) => mouseX.set(e.pageX)}
//         onMouseLeave={() => mouseX.set(Infinity)}
//         className="social-dock-container-right"
//       >
//         <SocialIcon
//           icon={<FaGithub />}
//           link="www.github.com"
//           mouseX={mouseX}
//         />
//         <SocialIcon
//           icon={<FaLinkedin />}
//           link="www.linkedin.com"
//           mouseX={mouseX}
//         />
//       </motion.div>
//     );
//   }
  

// function MobileDock() {
//   const [activeLink, setActiveLink] = useState("#home");

//   return (
//     <div className="dock-container">
//       <MobileAppIcon
//         icon={<FaHome />}
//         link="#home"
//         label="Home"
//         isActive={activeLink === "#home"}
//         setActiveLink={setActiveLink}
//       />
//       <MobileAppIcon
//         icon={<FaBook />}
//         link="#publications"
//         label="Publications"
//         isActive={activeLink === "#publications"}
//         setActiveLink={setActiveLink}
//       />
//       <MobileAppIcon
//         icon={<FaProjectDiagram />}
//         link="#projects"
//         label="Projects"
//         isActive={activeLink === "#projects"}
//         setActiveLink={setActiveLink}
//       />
//       <MobileAppIcon
//         icon={<FaFileAlt />}
//         link="#cv"
//         label="CV"
//         isActive={activeLink === "#cv"}
//         setActiveLink={setActiveLink}
//       />
//     </div>
//   );
// }

// function AppIcon({ icon, link, label, mouseX, isActive, setActiveLink }) {
//   const ref = useRef(null);

//   const distance = useTransform(mouseX, (val) => {
//     const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
//     return val - bounds.x - bounds.width / 2;
//   });

//   const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
//   const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

//   const scale = useTransform(distance, [-150, 0, 150], [1, 1.5, 1]);
//   const yOffset = useTransform(distance, [-150, 0, 150], [0, -20, 0]);

//   return (
//     <motion.div
//       ref={ref}
//       style={{ width, scale, y: yOffset }}
//       className="dock-item"
//       onClick={() => setActiveLink(link)}
//     >
//       <a href={link} className={`dock-link ${isActive ? "active" : ""}`}>
//         {icon}
//       </a>
//       <span className="label">{label}</span>
//     </motion.div>
//   );
// }
// function SocialIcon({ icon, link, mouseX}) {
//     const ref = useRef(null);
  
//     const distance = useTransform(mouseX, (val) => {
//       const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
//       return val - bounds.x - bounds.width / 2;
//     });
  
//     const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
//     const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });
  
  
//     return (
//       <motion.div
//         ref={ref}
//         style={{ width }}
//         className="social-dock-item"
//       >
//         <a href={link} className="social-dock-link">
//           {icon}
//         </a>
//       </motion.div>
//     );
//   }
  

// function MobileAppIcon({ icon, link, label, isActive, setActiveLink }) {
//   return (
//     <div className="mobile-dock-item" onClick={() => setActiveLink(link)}>
//       <a href={link} className={`mobile-dock-link ${isActive ? "active" : ""}`}>
//         {icon}
//       </a>
//       <span className="label">{label}</span>
//     </div>
//   );
// }

// export default Dock;


import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FaHome, FaBook, FaProjectDiagram, FaFileAlt } from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";
import { useWindowSize } from "../utils/useWindowSize";
import "./Dock.css";

function Dock() {
  const size = useWindowSize();
  const isMobile = size.width <= 768;

  if (isMobile) {
    return <MobileDock />;
  }

  return <DesktopDock />;
}

function DesktopDock() {
  const mouseX = useMotionValue(Infinity);
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="dock-container"
    >
      <SocialDockLeft />
      <AppIcon
        icon={<FaHome />}
        link="#home"
        label="Home"
        mouseX={mouseX}
        isActive={activeLink === "#home"}
        setActiveLink={setActiveLink}
      />
      <AppIcon
        icon={<FaBook />}
        link="#publications"
        label="Publications"
        mouseX={mouseX}
        isActive={activeLink === "#publications"}
        setActiveLink={setActiveLink}
      />
      <AppIcon
        icon={<FaProjectDiagram />}
        link="#projects"
        label="Projects"
        mouseX={mouseX}
        isActive={activeLink === "#projects"}
        setActiveLink={setActiveLink}
      />
      <AppIcon
        icon={<FaFileAlt />}
        link="#cv"
        label="CV"
        mouseX={mouseX}
        isActive={activeLink === "#cv"}
        setActiveLink={setActiveLink}
      />
      <SocialDockRight />
    </motion.div>
  );
}

function SocialDockLeft() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="social-dock-container-left"
    >
      <SocialIcon
        icon={<MdOutlineMail />}
        link="https://mail.google.com"
        mouseX={mouseX}
      />
      <SocialIcon
        icon={<FaXTwitter />}
        link="https://www.twitter.com"
        mouseX={mouseX}
      />
    </motion.div>
  );
}

function SocialDockRight() {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="social-dock-container-right"
    >
      <SocialIcon
        icon={<FaGithub />}
        link="https://www.github.com"
        mouseX={mouseX}
      />
      <SocialIcon
        icon={<FaLinkedin />}
        link="https://www.linkedin.com"
        mouseX={mouseX}
      />
    </motion.div>
  );
}

function MobileDock() {
  const [activeLink, setActiveLink] = useState("#home");

  return (
    <div className="dock-container">
      <MobileAppIcon
        icon={<FaHome />}
        link="#home"
        label="Home"
        isActive={activeLink === "#home"}
        setActiveLink={setActiveLink}
      />
      <MobileAppIcon
        icon={<FaBook />}
        link="#publications"
        label="Publications"
        isActive={activeLink === "#publications"}
        setActiveLink={setActiveLink}
      />
      <MobileAppIcon
        icon={<FaProjectDiagram />}
        link="#projects"
        label="Projects"
        isActive={activeLink === "#projects"}
        setActiveLink={setActiveLink}
      />
      <MobileAppIcon
        icon={<FaFileAlt />}
        link="#cv"
        label="CV"
        isActive={activeLink === "#cv"}
        setActiveLink={setActiveLink}
      />
    </div>
  );
}

function AppIcon({ icon, link, label, mouseX, isActive, setActiveLink }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  const scale = useTransform(distance, [-150, 0, 150], [1, 1.3, 1]);
  const yOffset = useTransform(distance, [-150, 0, 150], [0, -10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ width, scale, y: yOffset }}
      className="dock-item"
      onClick={() => setActiveLink(link)}
    >
      <a href={link} className={`dock-link ${isActive ? "active" : ""}`}>
        {icon}
      </a>
      <span className="label">{label}</span>
    </motion.div>
  );
}

function SocialIcon({ icon, link, mouseX }) {
  const ref = useRef(null);

  const distance = useTransform(mouseX, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Reduce animation for social icons
  const widthSync = useTransform(distance, [-150, 0, 150], [40, 60, 40]);
  const width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div ref={ref} style={{ width }} className="social-dock-item">
      <a href={link} target="_blank" rel="noopener noreferrer" className="social-dock-link">
        {icon}
      </a>
    </motion.div>
  );
}

function MobileAppIcon({ icon, link, label, isActive, setActiveLink }) {
  return (
    <div className="mobile-dock-item" onClick={() => setActiveLink(link)}>
      <a href={link} className={`mobile-dock-link ${isActive ? "active" : ""}`}>
        {icon}
      </a>
      <span className="label">{label}</span>
    </div>
  );
}

export default Dock;
