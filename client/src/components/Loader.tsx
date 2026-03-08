import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2, duration: 1 }}
      pointerEvents="none"
    >
      <motion.h1
        className="text-4xl font-bold gold-glow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        D ROGER
      </motion.h1>
    </motion.div>
  );
}
