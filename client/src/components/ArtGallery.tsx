import { motion } from "framer-motion";
import studioImpacto from "@/assets/images/studio-impacto.png";
import heroImg from "@/assets/images/Hero-bg.png";
import portraitImg from "@/assets/images/artist-portrait.jpeg";

const images = [
  studioImpacto,
  heroImg,
  portraitImg
];

export default function ArtGallery() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
      {images.map((img, i) => (
        <motion.img
          key={i}
          src={img}
          alt={`Gallery ${i + 1}`}
          className="rounded-xl object-cover w-full h-[320px]"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
        />
      ))}
    </div>
  );
}
