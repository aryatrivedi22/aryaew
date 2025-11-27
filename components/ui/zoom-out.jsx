// components/ZoonOutOnScroll.jsx

import { motion } from "framer-motion";

// Define the animation variants for the zoom out effect
const zoomOutVariants = {
  hidden: { opacity: 0, scale: 0.8 }, // Starts slightly larger than normal size
  visible: {
    opacity: 1,
    scale: 1, // Ends at normal size (zoomed out to fit)
    transition: {
      duration: 0.8, // How long the animation takes
      ease: "easeOut",
    },
  },
};

const ZoonOutOnScroll = ({ children }) => {
  return (
    <motion.div
      initial="hidden" // Start with the 'hidden' state
      whileInView="visible" // Animate to 'visible' when in view
      viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% visible
      variants={zoomOutVariants}
    >
      {children}
    </motion.div>
  );
};

export default ZoonOutOnScroll;
