import { motion } from "motion/react";
import { Link } from "react-router-dom";
import gpt from '../../assets/svg/chatgpt.png'
import gamini from '../../assets/svg/gemini.webp'
import deepseek from '../../assets/svg/deepseek.png'
import midJ from '../../assets/svg/midJourney.webp'
import mistrial from '../../assets/svg/mistrial.png'
import perplexity from '../../assets/svg/perplexity.webp'

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

            <div className="py-6">
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
                className="text-4xl lg:text-8xl poppins-extrabold text-inherit shadow-3xl text-center break-words whitespace-break-spaces">Select your AI Model</motion.h1>
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
    
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
               > <img src={gpt} alt="error" />ChatGPT</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={gamini} alt="error" />Google Gamini</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img className="lg:w-[400px]" src={deepseek} alt="error" />Deepseek</div></Link>  
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={midJ} alt="error" />Mid-Journey</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={gpt} alt="error" />Copolot</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={perplexity} alt="error" />Preplixity</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={gpt} alt="error" />Delle-E</div></Link>
                <Link to={'/chatGpt'}><div className="bg-black shadow-md ring-1 ring-gray-800 rounded-xl lg:text-3xl text-sm text-center poppins-extrabold lg:py-12 py-4 lg:px-10 px-4 cursor-pointer hover:bg-gray-900 duration-500" 
                > <img src={mistrial} alt="error" />Mistrial</div></Link>
            </motion.div>
            <div className="flex justify-center text-gray-600 poppins-extrabold text-xs lg:text-xl">
                <p>Developed by Hilal</p>
            </div>
        </div>
    )
}
export default AImodels