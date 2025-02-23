import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import MenuIcon from '@mui/icons-material/Menu';
import { IconBase } from "react-icons/lib";
import CloseIcon from '@mui/icons-material/Close';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import {queries} from '../Store/Config'
import { MdQuestionAnswer } from "react-icons/md";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate('')

    const [isOpenMenu , setIsOpenMenu] = useState(false)
    const handleMobileMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }
    return (
        <div>
            {/* Mobile munu */}
            {
                (isOpenMenu) && (
                    <div className="fixed lg:w-[20%] left-0 w-[80%] h-screen overflow-y-auto bg-black z-50 shadow-2xl shadow-gray-900">
                        <div className="lg:w-[20%] w-[80%] fixed text-white text-2xl lg:text-3xl cursor-pointer flex justify-between py-3 px-3 bg-neutral-950">
                            <IconBase className="">
                                <ImportContactsIcon/>
                            </IconBase>
                            <IconBase onClick={() => setIsOpenMenu(false)} className="relative right-0 ring-1 rounded-sm">
                                <CloseIcon/>
                            </IconBase>
                        </div>
                        <motion.div

                            exit={{
                                opacity: 0,
                                scale: 0.98,
                                filter: 'blur(20px)'
                            }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeInOut'
                            }}
                        className="my-12 flex-row px-2 py-4 space-y-3">
                            {
                                queries.map((userQuery , index) => (
                                   <p className="flex gap-3 justify-between  items-center bg-neutral-950 cursor-pointer px-2 py-2 rounded-md  poppins-regular text-white text-[11px] lg:text-sm"><span className="text-2xl"><MdQuestionAnswer/></span>{userQuery}<span className="text-2xl"><HiOutlineDotsVertical/></span></p>
                                ))
                            }
                        </motion.div>
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
                        <button
                        onClick={() => navigate('/donate')}
                        className="cursor-pointer rounded-sm px-2 py-1 bg-black shadow-inner shadow-gray-500 ">Donate</button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}

export default Header