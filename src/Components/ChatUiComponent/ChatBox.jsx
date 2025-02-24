import React, { useState } from "react";
import { motion } from "motion/react";
import { IoSendSharp } from "react-icons/io5";
const ChatBox = ({placeholder}) => {
    const [isSend , setIsSend] = useState(false)
    const [userInput , setUserInput] = useState('')
    const handleUserInput = (event) => {
        setUserInput(event.target.value)
        setIsSend(true)
    }
    const handleSendUserInput = () => {
        setUserInput('')
        setIsSend(false)
    console.log(userInput)

    }
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
                <div className="">
                    <div className="relative  text-white poppins-regular w-[100%] lg:w-[80%]">
                        <textarea
                            value={userInput}
                            onChange={ handleUserInput }
                            name="userInput"
                            type="text" 
                            className="py-4 resize-none bg-black ring-1 ring-gray-800 lg:h-[100px] h-[100px] w-full lg:w-[100%] md:w-[100%] rounded-3xl px-3" 
                            placeholder={placeholder} />
                        {
                            isSend && <button
                            onClick={ handleSendUserInput }
                            className=" absolute z-50 right-6 top-9"><IoSendSharp className="text-2xl lg:text-3xl cursor-pointer" /></button>
                        }
                    </div>
                </div>
            </motion.div>  
    )
}

export default ChatBox