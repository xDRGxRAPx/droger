import { motion } from "framer-motion";

export default function CinematicBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute w-[1200px] h-[1200px] rounded-full blur-[180px]"
        style={{
          background: "radial-gradient(circle, rgba(255,215,0,0.15), transparent)"
        }}
        animate={{
          x: [0, 200, -200, 0],
          y: [0, -150, 150, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />

      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-[200px]"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.1), transparent)"
        }}
        animate={{
          x: [-200, 200, -200],
          y: [100, -100, 100]
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}
