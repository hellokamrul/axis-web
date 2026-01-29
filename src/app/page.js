"use client";
import About_Outcome from "./components/About&Outcome/About_Outcome";
import Banner from "./components/Home/Banner/Banner";
import { motion } from "framer-motion";
import Leading_Success from "./components/Leading_Success/Leading_Success";
import Marque_Headline from "./components/Marque_Headline/Marque_Headline";
import Reviews from "./components/Reviews/Reviews";
import Thought_Product from "./components/Thought_Product/Thought_Product";
import All_Service_in_footer from "./components/All_Service_in_footer/All_Service_in_footer";


// Home Page - shudhu home page er content
export default function Home() {
  // Animation variants for smooth slide up effect (like Balanzify)
  const slideUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] // Custom cubic-bezier for smooth easing
      }
    }
  };

  return (
    <div>
      {/* Banner slides up smoothly */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <Banner />
      </motion.div>

      {/* About & Outcome slides up when scrolling into view */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={slideUp}
      >
        <About_Outcome></About_Outcome>
      </motion.div>
      <Leading_Success></Leading_Success>
      <Marque_Headline></Marque_Headline>
      <Reviews></Reviews>
      <Thought_Product></Thought_Product>
      <All_Service_in_footer></All_Service_in_footer>
      
    </div>
  );
}
