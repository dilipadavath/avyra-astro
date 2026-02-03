import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LaunchScreenProps {
  onComplete: () => void;
}

const LaunchScreen = ({ onComplete }: LaunchScreenProps) => {
  const [stage, setStage] = useState<"button" | "countdown" | "tagline" | "done">("button");
  const [countdownNumber, setCountdownNumber] = useState(3);

  const handleLaunch = () => {
    setStage("countdown");
    
    // Countdown sequence: 3 -> 2 -> 1 -> GO -> tagline -> complete
    setTimeout(() => setCountdownNumber(2), 800);
    setTimeout(() => setCountdownNumber(1), 1600);
    setTimeout(() => setCountdownNumber(0), 2400); // 0 = "GO"
    setTimeout(() => setStage("tagline"), 3200);
    setTimeout(() => {
      setStage("done");
      onComplete();
    }, 5500);
  };

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-background flex items-center justify-center overflow-hidden"
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-3xl" />
        </div>

        {/* Launch Button Stage */}
        <AnimatePresence mode="wait">
          {stage === "button" && (
            <motion.div
              key="button"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center gap-8"
            >
              {/* Logo/Brand hint */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-center"
              >
                <span
                  className="text-2xl md:text-3xl text-primary/80 tracking-[0.3em] font-light"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  AVYRA
                </span>
              </motion.div>

              {/* Launch Button */}
              <motion.button
                onClick={handleLaunch}
                className="relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Outer ring animation */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-primary/30"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{ width: "160px", height: "160px", margin: "-20px" }}
                />
                
                {/* Button */}
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-[0_0_60px_rgba(201,162,39,0.3)] group-hover:shadow-[0_0_80px_rgba(201,162,39,0.5)] transition-shadow duration-500">
                  <span
                    className="text-primary-foreground text-lg md:text-xl font-medium tracking-wider"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    LAUNCH
                  </span>
                </div>
              </motion.button>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="text-muted-foreground text-sm tracking-wide"
              >
                Click to begin your journey
              </motion.p>
            </motion.div>
          )}

          {/* Countdown Stage */}
          {stage === "countdown" && (
            <motion.div
              key="countdown"
              className="flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={countdownNumber}
                  initial={{ scale: 0.5, opacity: 0, rotateY: -90 }}
                  animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                  exit={{ scale: 1.5, opacity: 0, rotateY: 90 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="relative"
                >
                  {/* Glow effect behind number */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-40 h-40 rounded-full bg-primary/20 blur-2xl" />
                  </div>
                  
                  <span
                    className="relative text-8xl md:text-9xl font-bold text-gold-gradient"
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {countdownNumber === 0 ? "GO" : countdownNumber}
                  </span>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}

          {/* Tagline Stage */}
          {stage === "tagline" && (
            <motion.div
              key="tagline"
              className="flex flex-col items-center gap-6 text-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Decorative lines */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              {/* Main tagline */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-wide text-gold-gradient"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Living Redefined
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="text-lg md:text-xl text-foreground/80 font-light tracking-wide max-w-md"
              >
                Premium interiors crafted for the way you live
              </motion.p>

              {/* Bottom decorative line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent"
              />

              {/* Loading indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-8 flex items-center gap-2"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                  className="w-2 h-2 rounded-full bg-primary"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
};

export default LaunchScreen;
