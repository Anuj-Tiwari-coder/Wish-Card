import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react"; // Theme Icons
import React, { useState } from "react";
import rose from "./assets/rose.jpg"; // Ensure you have the image in src/assets/

function App() {
    const [showAnimation, setShowAnimation] = useState(false);
    const [darkMode, setDarkMode] = useState(true); // Default Dark Mode

    const handleWishClick = () => {
        setShowAnimation(true);
        alert("💖 Happy Birthday, Shifa! Wishing you love, happiness, and all the beauty life has to offer. ✨");
        setTimeout(() => setShowAnimation(false), 7000);
    };

    const handleWhatsAppClick = () => {
        const phoneNumber = "9594373091"; // Replace with actual number
        const message = encodeURIComponent("Thank you for your warm wishes! 😊💖");
        window.location.href = `https://wa.me/${phoneNumber}?text=${message}`;
    };

    return (
        <div
            className={`flex items-center justify-center min-h-screen p-6 relative overflow-hidden transition-all duration-500 ${darkMode
                ? "bg-gray-900 text-white"
                : "bg-gray-100 text-gray-900"
                }`}
        >
            {/* Subtle Floating Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-800 via-transparent to-transparent opacity-40 blur-3xl"></div>

            {/* Theme Toggle */}
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="absolute top-6 right-6 p-2 bg-white/10 backdrop-blur-lg rounded-full shadow-md hover:scale-110 transition-all"
            >
                {darkMode ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Birthday Card */}
            <motion.div
                className={`p-8 md:p-12 rounded-2xl shadow-lg max-w-md transition-all duration-500 ${darkMode
                    ? "bg-white/10 backdrop-blur-lg border border-white/20"
                    : "bg-white border border-gray-200"
                    }`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-bold text-center mb-4">
                    🎂 Happy Birthday, Shifa! 💖
                </h1>
                <p className="text-lg font-medium text-center mb-4">
                    May your day be filled with love, elegance, and the warmth of those who cherish you. ✨
                </p>
                <p className="text-lg font-medium text-center mb-6">
                    Wishing you a year of beautiful moments, laughter, and unforgettable memories.💫
                </p>
                <p className="text-lg font-medium text-center mb-6">
                    Happy Birthday Dear! God keeps you safe and happy forever💫
                </p>

                {/* Buttons */}
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <motion.button
                        onClick={handleWishClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gray-700 text-white text-lg px-6 py-3 rounded-lg shadow-md font-semibold transition-all"
                    >
                        Open Surprise 🎁
                    </motion.button>

                    <motion.button
                        onClick={handleWhatsAppClick}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-pink-500 text-white text-lg px-6 py-3 rounded-lg shadow-md font-semibold transition-all"
                    >
                        if you wish.. 💬
                    </motion.button>
                </div>

                {/* Rose Animation */}
                {showAnimation && (
                    <motion.div
                        className="mt-8 flex flex-col items-center text-center"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 1 }}
                    >
                        <p className="text-xl font-bold">🌷 A Rose for You 🌷</p>
                        <img
                            src={rose}
                            alt="Rose"
                            className="w-28 h-28 md:w-36 md:h-36 rounded-md shadow-lg"
                        />
                        <p className="text-xl font-bold mt-4">
                            <br />Hii👋 Stranger
                            <br />Remember me!,
                            <br />once we're friends,
                            <br />😍💖
                        </p>
                        <p>I want to write somethig But I think You don't like so i can't do</p>
                        <p className="text-2xl font-bold mt-6">
                            BTW Happy Birthday Chudel..👻..🧚‍♀️.
                        </p>
                        Waiting For your msg.

                    </motion.div>
                )}
            </motion.div>
        </div>
    );
}

export default App;
