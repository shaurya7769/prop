"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [showRickRoll, setShowRickRoll] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: "50%", left: "50%" });

  const handleYesClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowRickRoll(true), 2000); // Delay before showing Rick Roll
  };

  const moveNoButton = () => {
    const randomX = Math.random() * window.innerWidth - 100;
    const randomY = Math.random() * window.innerHeight - 50;
    setNoButtonPos({ top: `${randomY}px`, left: `${randomX}px` });
  };

  return (
    <main
      className={`flex min-h-screen items-center justify-center ${
        showRickRoll ? "bg-cover bg-center" : "bg-black"
      }`}
      style={{
        backgroundImage: showRickRoll
          ? "url('/rickroll.gif')" // Make sure to add this image in your `public` folder
          : "none",
      }}
    >
      {!showRickRoll ? (
        <div className="bg-black p-6 rounded-lg shadow-xl text-center text-white">
          {!showMessage ? (
            <>
              <h2 className="text-xl font-bold">Will you be my girlfriend?</h2>
              <div className="mt-4 flex justify-center space-x-4">
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-lg"
                  onClick={handleYesClick}
                >
                  Yes
                </button>
                <motion.button
                  className="px-4 py-2 bg-red-500 text-white rounded-lg absolute"
                  style={{ top: noButtonPos.top, left: noButtonPos.left }}
                  onMouseEnter={moveNoButton}
                >
                  No
                </motion.button>
              </div>
            </>
          ) : (
            <h2 className="text-xl font-bold">SIKE APRIL FOOLS!</h2>
          )}
        </div>
      ) : null}
    </main>
  );
}
