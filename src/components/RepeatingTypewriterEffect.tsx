"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypewriterEffectProps {
  words: { text: string; className?: string }[];
  className?: string;
  cursorClassName?: string;
  interval?: number;
}

export const RepeatingTypewriterEffect = ({
  words,
  className,
  cursorClassName,
  interval = 3000,
}: TypewriterEffectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const textInterval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(textInterval);
  }, [words, interval]);

  return (
    <div className={cn("text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center", className)}>
      <motion.div
        key={words[currentIndex].text}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {words[currentIndex].text.split("").map((char, index) => (
          <span key={index} className={cn("dark:text-white text-black", words[currentIndex].className)}>
            {char}
          </span>
        ))}
      </motion.div>
    </div>
  );
};