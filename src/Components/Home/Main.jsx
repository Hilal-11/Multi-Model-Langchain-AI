import React from "react";
import { motion } from "motion/react";
import AI_Logos from "./AI_Logos";
import { useNavigate } from "react-router-dom";


function Main() {


    const navigate = useNavigate('')
    return (
        <div className="px-2 w-full py-10 lg:py-10 flex items-start flex-wrap">
            <div className="w-full">
                <motion.h1
                    initial={{
                        initial: 0,
                        x: -2000
                    }}  
                    animate={{
                        opacity: 1,
                        x:0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 1.0
                    }}            
                className="text-4xl lg:text-8xl poppins-extrabold text-white shadow-2xl text-center break-words whitespace-break-spaces"
                style={{
                    textShadow: '3px 3px 7px gray'
                }}
                >Wel Come to Multimodel  LangChain Artifical Intellegence</motion.h1>
                
                
                <div className="px-2 relative">
                    <div className=" relative -top-0 z-0 h-[300px] bg-black blur-2xl p-5 rounded-full"></div>  
                    <motion.p
                        initial={{
                            opacity: 0,
                            y: 100
                        }}
                        animate={{
                            opacity:1,
                            y:0
                        }}
                        transition={{
                            duration: 1.5,
                            delay: 1.0
                        }}
                    className="lg:px-40 px-4 lg:text-xl text-md text-gray-400 absolute top-16 left-0 text-justify poppins-thin">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ad ipsum laboriosam voluptatem quisquam, harum tenetur dicta numquam eius ut impedit accusamus fugiat in beatae pariatur! Ad nostrum minima, dolores impedit liberol lorem</motion.p>
                </div>

            </div>

            <div className="mx-auto">
                <AI_Logos/>
            </div>
            
            <div
            className="my-0 flex justify-center poppins-extrabold w-full text-white py-10">
                <motion.button
                    initial={{
                        opacity: 0,
                        x: 1000
                    }}
                    animate={{
                        opacity: 1,
                        x:0
                    }}
                    transition={{
                        duration: 1.5,
                        delay: 4.5
                    }}
        
                className=" relative lg:w-[40%] w-[80%] text-xl py-4 rounded-xl bg-black shadow-md shadow-cyan-800 cursor-pointer poppins-medium"
                    style={{
                        boxShadow: '1px 1px 4px oklch(0.45 0.085 224.283), -1px -1px 4px oklch(0.45 0.085 224.283)'
                    }}

                    onClick={() => {navigate('/models')}}
                >Get Started
                    
                </motion.button> 
            </div>
        </div>
    )
}
export default Main
