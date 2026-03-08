import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full pointer-events-none z-[9999]"
      animate={{
        x: position.x - 12,
        y: position.y - 12
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
      style={{
        background: "radial-gradient(circle, rgba(255,215,0,0.8), transparent)",
        mixBlendMode: "screen"
      }}
    />
  );
}
