import React from "react";
import { motion } from "motion/react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconBase } from "react-icons/lib";
const Header = () => {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1.5
            }}
        className="flex justify-between px-2 lg:py-5 py-2 items-center">
            <div className="text-white text-2xl lg:text-4xl">
                <IconBase>
                    <MenuIcon />
                </IconBase>
            </div>
            <div>
                <div className="poppins-bold text-white lg:text-4xl">
                    ChatGPT-4.0
                </div>
            </div>
            <div>
                <div className="text-white poppins-light text-xs lg:text-md ">
                    <button className="cursor-pointer rounded-sm px-2 py-1 bg-black shadow-inner shadow-gray-500 ">Donete</button>
                </div>
            </div>
        </motion.div>
    )
}

export default Header