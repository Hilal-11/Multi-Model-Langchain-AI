import { motion } from "motion/react";
import { Link } from "react-router-dom";
const AImodels = () => {
    return (
        <div className="w-full py-5 lg:py-10">
            <motion.span
                initial={{
                    opacity: 0
                }}  
                animate={{
                    opacity: 1,
                }}
                transition={{
                    duration: 2,
                    delay: 2
                }}
            className="absolute w-[200px] h[200px] lg:w-[800px] lg:h-[800px] top-[20%] left-[30%] bg-cyan-900 blur-[300px]  rounded-full"></motion.span>

            <div className="py-10">
                <motion.h1 
                    initial={{
                        opacity: 0,
                        y: -100
                    }}
                    animate={{
                        opacity: 1,
                        y: 1
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5
                    }}
                className="text-4xl lg:text-8xl poppins-extrabold text-white shadow-2xl text-center break-words whitespace-break-spaces">Select your AI Model</motion.h1>
            </div>

            <motion.div
                initial={{
                    opacity: 0,
                    y : 100

                }}
                animate={{
                    opacity: 1,
                    y: 1
                }}
                transition={{
                    duration: 1,
                    delay:1
                }}
                className="relative grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-4 lg:py-10 py-6 text-white px-3 justify-between">
    
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
               >ChatGPT</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Google Gamini</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Deepseek</div></Link>  
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Mid-Journey</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Copolot</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Preplixity</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Delle-E</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Mistrial</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Delle-E</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Mistrial</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Delle-E</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                >Mistrial</div></Link>
            </motion.div>
        </div>
    )
}
export default AImodels