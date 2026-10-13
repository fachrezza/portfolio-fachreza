import { motion, useReducedMotion } from "framer-motion";

const Reveal = ({ children }) => {
  const reduce = useReducedMotion();

  if (reduce) return children;

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
