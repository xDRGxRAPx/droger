import { motion } from "framer-motion";

export default function InteractiveTitle({ children }: any) {
  return (
    <motion.h1
      className="text-6xl md:text-7xl font-bold gold-glow cursor-default"
      whileHover={{
        scale: 1.05,
        letterSpacing: "0.08em"
      }}
      transition={{ duration: 0.4 }}
    >
      {children}
    </motion.h1>
  );
}
