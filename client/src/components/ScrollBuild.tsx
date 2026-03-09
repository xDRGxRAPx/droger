import { motion } from "framer-motion";

export default function ScrollBuild({ children }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}
