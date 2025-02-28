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
    const [isOpenQuaryIcon , setIsOpenQuaryIcon] = useState(false)

    return (
        <div>
            {/* Mobile munu */}
            {
                (isOpenMenu) && (
                    <div className="z-50 fixed lg:w-[20%] left-0 w-[80%] h-screen overflow-y-auto bg-black z-50 shadow-2xl shadow-gray-900">
                        <div className=" lg:w-[20%] w-[80%] fixed text-white text-2xl lg:text-3xl cursor-pointer flex justify-between py-3 px-3 bg-neutral-950">
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
                                   <p key={index} className=" flex gap-3 justify-between  items-center bg-neutral-950 cursor-pointer px-2 py-2 rounded-md  poppins-regular text-white text-[11px] lg:text-sm"><span className="text-2xl"><MdQuestionAnswer/></span>{userQuery}<span className="text-2xl"><HiOutlineDotsVertical onClick={  () => setIsOpenQuaryIcon(!isOpenQuaryIcon) } /></span>  
                                    {
                                        isOpenQuaryIcon &&  <div className="z-50 space-y-1 absolutev nm,./ right-7 top-6 bg-black px-2 py-2 rounded-md">
                                        <p className="text-red-600 poppins-ragular bg-gray-950 px-2 py-1 rounded-sm">Remove</p>
                                    </div>                                   
                                    }
                                   </p>
                                ))
                            }
                        </motion.div>
                    </div>
                )
            }
            <div
               
            className="relative">
                <div className="z-40 w-full lg:w-[80%] mx-auto h-auto fixed -top-1 flex justify-between px-2 lg:py-5 items-center py-3 bg-zinc-950 lg:bg-black lg:rounded-full lg:px-20 lg:my-5">
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
                    <div className="text-white poppins-light text-xs ">
                        <button
                        onClick={() => navigate('/donate')}
                        className="cursor-pointer rounded-sm px-2 py-1 bg-black shadow-inner shadow-gray-500 ">Donate</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header