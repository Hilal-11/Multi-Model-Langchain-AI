import React from "react";
import { motion } from "motion/react";
import chargptLogo from '../../assets/svg/chatgpt.png'
import gaminiLogo from '../../assets/svg/gemini.webp'
import midJourneyLogo from '../../assets/svg/midJourney.webp'
import deepseek from '../../assets/svg/deepseek.png'
import perpilexity from '../../assets/svg/perplexity.webp'

const AI_Logos = () => {
    return (
        <div>
            <div className="w-full flex justify-center py-6">
                <div className=" px-4 flex gap-1 lg:gap-10">
                    <motion.img
                        initial={{
                            opacity: 0,
                            y: -2500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}

                        transition={{
                            duration: 0.9,
                            delay: 2
                        }}
                 
                    className="relative top-3 w-[50px] lg:w-[80px] " src={chargptLogo} alt="error" />
                    <motion.img
                        initial={{
                            opacity: 0,
                            y: -2500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 2.5
                        }}
                    className="relative lg:-top-20 -top-12 -left-2 w-[60px] lg:w-[80px] " src={gaminiLogo} alt="error" />

                    <motion.img
                        initial={{
                            opacity: 0,
                            y: -2500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 3
                        }}
                    className="relative lg:-top-30 -top-20 left-2 w-[50px] lg:w-[80px] " src={deepseek} alt="error" />


                    <motion.img
                        initial={{
                            opacity: 0,
                            y: -2500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 3.5
                        }}
                    className="relative lg:-top-18 lg:-right-5 -top-12 -right-4 w-[60px] lg:w-[80px] " src={perpilexity} alt="error" />
        
                    <motion.img
                        initial={{
                            opacity: 0,
                            y: -2500
                        }}
                        animate={{
                            opacity: 1,
                            y: 0
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 4
                        }}
                    className="relative top-2 w-[50px] lg:w-[80px] " src={midJourneyLogo} alt="error" />
                </div>
            </div>

        </div>
    )
}

export default AI_Logos