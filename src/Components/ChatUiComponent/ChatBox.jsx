import React from "react";
import { motion } from "motion/react";
const ChatBox = ({placeholder}) => {
    return (
            <motion.div
                initial={{
                    opacity: 0,
                    y: 100
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}  
                transition={{
                    duration: 1.5
                }}
            className="w-full mx-auto fixed lg:bottom-12 bottom-4 rounded-xl px-2">
                <div className="text-white poppins-regular w-full">
                     <input type="text" className="bg-black ring-1 ring-gray-800 lg:h-[100px] h-[100px] w-full lg:w-[80%] md:w-[80%] rounded-3xl px-3" placeholder={placeholder} />
                </div>
            </motion.div>  
    )
}

export default ChatBox