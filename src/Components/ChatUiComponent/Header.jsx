import React, { useState } from "react";
import { motion } from "motion/react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconBase } from "react-icons/lib";
import CloseIcon from '@mui/icons-material/Close';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
const Header = () => {

    const [isOpenMenu , setIsOpenMenu] = useState(false)
    const handleMobileMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div>

            {/* Mobile munu */}

                
            {
                (isOpenMenu) && (
                    <div className="lg:w-[20%] left-0 w-[80%] h-screen fixed overflow-y-auto bg-black z-50 shadow-2xl shadow-gray-900">
                        <div className="text-white text-2xl lg:text-3xl cursor-pointer flex justify-between py-3 px-3 border-b-1">
                            <IconBase onClick={() => setIsOpenMenu(false)} className="">
                                <ImportContactsIcon/>
                            </IconBase>
                            <IconBase onClick={() => setIsOpenMenu(false)} className="ring-1 rounded-sm">
                                <CloseIcon/>
                            </IconBase>
                        </div>
                    </div>
                )
            }
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
 
                <div className="text-white text-2xl lg:text-4xl cursor-pointer">
                    <IconBase onClick={ handleMobileMenu }>
                        <MenuIcon/>
                    </IconBase>
                </div>

                <div>
                    <div className="poppins-bold text-white lg:text-4xl">
                        DeepNexus 
                    </div>
                </div>
                <div>
                    <div className="text-white poppins-light text-xs lg:text-md ">
                        <button className="cursor-pointer rounded-sm px-2 py-1 bg-black shadow-inner shadow-gray-500 ">Donate</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Header