import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MouseLight() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed pointer-events-none z-40 w-[600px] h-[600px] rounded-full blur-[120px]"
      animate={{
        x: pos.x - 300,
        y: pos.y - 300
      }}
      style={{
        background: "radial-gradient(circle, rgba(255,215,0,0.15), transparent)"
      }}
    />
  );
}
