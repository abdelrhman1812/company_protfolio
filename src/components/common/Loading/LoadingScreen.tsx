"use client";

import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

export default function LoadingScreen() {
  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Background Animation */}
      <motion.div
        className="absolute inset-0 bg-background rounded-full"
        initial={{ scale: 0, y: "50%" }}
        animate={{ scale: 5, y: "-50%" }}
        exit={{ scale: 0, y: "50%" }}
        transition={{
          duration: 1.2,
          ease: "easeInOut",
        }}
      />

      {/* Content Animation */}
      <motion.div
        className="relative flex flex-col items-center gap-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: 0.5,
        }}
      >
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <motion.h2
          className="text-3xl font-bold text-foreground"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          Loading ...
        </motion.h2>
      </motion.div>
    </motion.div>
  );
}
