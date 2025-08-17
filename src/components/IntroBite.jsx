import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { chipStages, chipSound } from "../assets/assets"; 
import { Volume2, VolumeX } from "lucide-react";

const IntroBite = ({ onFinish }) => {
  const [stage, setStage] = useState(0);
  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);
  const biteSound = useRef(null);

  // Play sound effect when chip changes
  useEffect(() => {
    if (started && !muted && biteSound.current) {
      biteSound.current.currentTime = 0;
      biteSound.current.play().catch(() => {});
    }
  }, [stage, started, muted]);

  // Auto-advance through chip stages
  useEffect(() => {
  let timer;
  if (started && stage < chipStages.length - 1) {
    // Still have more chips to show
    timer = setTimeout(() => {
      setStage((prev) => prev + 1);
    }, 900);
  } else if (started && stage === chipStages.length - 1) {
    // Last chip → wait then fade out + trigger onFinish
    timer = setTimeout(() => {
      setStage(chipStages.length); // trigger fade
      onFinish();
    }, 1200);
  }
    return () => clearTimeout(timer);
  }, [stage, started, onFinish]);

  const handleClick = () => {
    if (!started) {
      setStarted(true);
    }
  };

  return (
    <motion.div
      className="flex items-center justify-center h-screen bg-[#fdf6ec] relative"
      initial={{ opacity: 1 }}
      animate={{ opacity: started && stage === chipStages.length ? 0 : 1 }}
      transition={{ duration: 0.7}}
      onClick={handleClick}
    >
      {/* Audio Element */}
      <audio ref={biteSound} src={chipSound} preload="auto" />

      {/* Mute / Unmute */}
    <button
    onClick={(e) => {
        e.stopPropagation(); // ✅ prevent triggering the chip bite click
        setMuted(!muted);
    }}
  className="absolute top-4 right-4 flex items-center gap-2 bg-[#F7E6CA] px-3 py-2 rounded-full shadow-md hover:brightness-95 transition cursor-pointer"
    >
    {muted ? (
        <>
        <VolumeX size={20} /> Unmute
        </>
    ) : (
        <>
        <Volume2 size={20} /> Mute
        </>
    )}
    </button>

      {/* Animate chip images */}
      <AnimatePresence mode="wait">
        <motion.img
          key={stage}
          src={chipStages[stage]}
          alt="chip stage"
          className="w-64 h-64 object-contain cursor-pointer"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Text overlays */}
      {stage === 0 && (
        <motion.div
          key="bite-text"
          className="absolute sm:bottom-60 bottom-40 text-3xl font-bold text-yellow-800"
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
        >
          Bite Me!
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div
          key="so-good-text"
          className="absolute sm:bottom-60 bottom-40 text-3xl font-bold text-yellow-800"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: [1, 1.2, 1] }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Sooo Gooood!
        </motion.div>
      )}
    </motion.div>
  );
};

export default IntroBite;
